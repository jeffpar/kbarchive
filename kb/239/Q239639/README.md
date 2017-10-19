---
layout: page
title: "Q239639: XADM: How to View Deleted (Tombstoned) Objects"
permalink: /kb/239/Q239639/
---

## Q239639: XADM: How to View Deleted (Tombstoned) Objects

	Article: Q239639
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server's bulk export feature can be used to generate a list of deleted
	(tombstoned) objects in the directory service database.
	
	MORE INFORMATION
	================
	
	To generate a list of tombstoned objects in a directory database:
	
	1. Create a plain text file called Export.ini containing the following lines:
	
	  [Export]
	  DirectoryService=<your_exchange_server_name>
	  Basepoint=/o=<your_exchange_organization_name>
	  Subcontainers=Yes
	  ExportObject=All
	  RawMode=yes
	  HiddenObjects=yes
	  InformationLevel=Full
	
	2. Create a plain text file called Tmbstone.csv containing the following single
	  line:
	
	  Obj-Class,Directory Name,Obj-Dist-Name,Is-Deleted
	
	3. At a command prompt, run the following command:
	
	  "\exchsrvr\bin\admin.exe /e tmbstone.csv /o export.ini" (without the
	  quotation marks)
	
	  The Tmbstone.csv file can be analyzed to discover deleted objects. Each
	  deleted object's record in the .csv file will have a 1 at the end of the
	  line. For example:
	
	  Obj-Class,Directory Name,Obj-Dist-Name,Is-Deleted
	  Mailbox,Tombstoned,/o=Microsoft/ou=SiteName/cn=Recipients/cn=Tombstoned,1
	  Mailbox,DavidR,/o=Microsoft/ou=SiteName/cn=Recipients/cn=DavidR
	
	  The first line in the preceding example from shows a deleted user called
	  "Tombstoned," followed by an existing user, "DavidR."
	
	The Obj-Dist-Name category is not required but is included in the .csv file
	because it provides the full path to the object. It's possible for multiple
	objects to have the same directory name (RDN or Relative Distinguished Name),
	but all objects have unique Distinguished Names (DNs). The DN includes the
	container in which the object resides. The o= value in the DN identifies the
	organization name; the ou= value identifies the site name; cn= values define
	containers and subcontainers for the object.
	
	Background Information
	----------------------
	
	When an Exchange Server directory object is deleted, it is not immediately purged
	from the directory database. Instead it is "tombstoned" by adding an attribute
	called Is-Deleted to the object. This attribute hides the object from
	administrative view.
	
	Tombstoning provides a simple and effective means for replicating object
	deletions to all Exchange Server computers in an organization. Although a
	tombstoned object is invisible, the object continues to replicate normally.
	
	By default, each server scans its own directory database every 12 hours, looking
	for objects which have been tombstoned for more than 30 days. Any such objects
	are purged.
	
	Complete removal of an object from all servers in an organization depends on the
	tombstoned version of the object replicating to all servers within the tombstone
	lifetime (30 days). If a server in the organization does not participate in
	replication during the entire tombstone lifetime, that server never gets word
	that it should have deleted the object. The object is thus "orphaned." For
	additional information about orphaned objects, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q152614 XADM: Removing Objects Whose Tombstone Expired Before DirRep
	
	  Q183739 XADM: Identifying and Removing Large Numbers of Orphaned Objects
	
	
	Changing Tombstone Defaults:
	
	The tombstone lifetime and the garbage collection interval can be changed in the
	Exchange Server Administrator program through the properties of the DS Site
	Configuration object. The tombstone lifetime and garbage collection interval are
	site-wide settings.
	
	Reducing the tombstone life increases the chance that a deleted object will
	become orphaned. Extending the tombstone lifetime means that deleted objects
	persist in the directory for a longer period of time, and this may result in
	some increase in the overall size of the directory database.
	
	Shortening the garbage collection interval increases the load on the server,
	seldom with any practical benefit. Lengthening the garbage collection interval
	makes the list of objects to be purged longer, and thus may cause an even bigger
	peak in server load. In general, do not change these intervals for performance
	tuning reasons, but only to deal with specific exceptional conditions.
	
	How to Tell How Soon an Object Will Be Purged:
	
	Add a column header called When-Changed to your .csv file to view the time when
	the object was first tombstoned.
	
	The When-Changed attribute is formatted as YYMMDDHHMMSSZ and is based on
	Greenwich mean time, not local time. If a tombstoned object has a When-Changed
	time of 990801033025Z, that means it was deleted on August 1, 1999, and is
	scheduled to be purged at the end of the month.
	
	Tombstones and New Objects with the Same Name:
	
	In most cases, when a new object is created in the Exchange Server directory, it
	is assigned an Object-Version attribute of 1. Each subsequent change made to the
	object causes the Object-Version to increment by 1. During replication, an
	incoming copy of an object replaces the existing copy if the incoming one has a
	greater Object-Version number. (If Object-Version numbers are equal, the
	When-Changed attribute breaks the tie.)
	
	You can view the Object-Version number for an existing object by running the
	Exchange Server Administrator program in raw mode.
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Select the object of interest, and on the File menu, click Raw Properties.
	
	IMPORTANT: Use the Administrator's raw mode only for viewing attributes. Do not
	make changes to raw attributes without consultation with Microsoft Product
	Support Services. Making such changes is similar in nature to directly editing
	the system registry, and can have serious, irreparable consequences.
	
	When an object is created that has the same Distinguished Name as a tombstoned
	object, the new Object-Version number is not 1 but rather the Object-Version
	number from the tombstoned object plus 1. The reason for this is to ensure that
	during replication, the new object will replace the tombstoned object. No other
	attributes of the previous object are inherited by a new object with the same
	name.
	
	Object-Versions and Orphans:
	
	The standard way to remove an orphan is to re-create an object with the same
	distinguished name, and then to delete it again. For this to work, the newly
	created object must have an Object-Version number higher than that of the
	orphan.
	
	If a tombstone has expired, and a new object of the same name is created, its
	Object-Version number will be 1, not the previous Object-Version number plus 1.
	Therefore, you must increase the Object-Version number of the new object
	manually until it is greater than that of the orphan.
	
	An easy way to increase the Object-Version number is to repeatedly make an
	innocuous change to the object (such as altering an optional field) until the
	Object-Version number is high enough. Sometimes, the difference in
	Object-Version numbers is very large, and bulk import can be used to automate
	increasing the Object-Version number, as follows:
	
	1. Determine the Object-Version number and home site of the orphaned object.
	
	2. Connect to the home site, and create an object of the same type with the same
	  directory name (the Obj-Dist-Name values must match exactly).
	
	3. Create a plain text file containing the following .csv template header:
	
	  Obj-Class,Directory Name,Obj-Dist-Name,E-mail Addresses
	
	4. Add lines to the header appropriate for the objects to be incremented. As an
	  example, assume that the objects are (1) a mailbox with a directory name of
	  DavidR, (2) a distribution list with the name of List1, and (3) a custom
	  recipient named Hotmail1 in a custom recipients container called Internet:
	
	  Obj-Class,Mode,Directory Name,Obj-Dist-Name,E-mail Addresses<BR/>
	  Mailbox,Update,DavidR,/o=Org/ou=Site/cn=Recipients/cn=DavidR,FAKE:DAVIDR
	  Distribution-List,Update,/o=Org/ou=Site/cn=Recipients/cn=List1,FAKE:List1
	  Remote-Address,Update,/o=Org/ou=Site/cn=Recipients/cn=Internet/cn=Hotmail1,FAKE:HOTMAIL1
	
	  The E-mail Addresses field may contain a valid existing e-mail address for the
	  object, or it may contain an address of a nonexistent type. You need the
	  E-mail Addresses field to force the Object-Version number to increment
	  without having to actually change any values.
	
	  Proper construction of an appropriate .csv header for orphaned objects that
	  are not recipients varies depending on the object type. Refer to your
	  Exchange Server documentation or consult with Microsoft Product Support
	  Services for advice on performing more sophisticated directory imports.
	
	5. After you create a .csv file that includes lines for all objects to be
	  incremented, copy and paste the block of object lines into the file as many
	  times as the amount you want to increment the Object-Version number. Each
	  line processed increases the Object-Version number by 1.
	
	6. At a command prompt, import the file back into the directory with the
	  following command:
	
	  "\exchsrvr\bin\admin.exe /i import.csv" (without the quotation marks)
	
	  If errors are encountered or the procedure does not appear to work, check the
	  application log in the Event Viewer for hints about what is wrong with the
	  format of the file.
	
	7. Verify that the Object-Version number has actually incremented.
	
	8. Delete the objects and wait for normal replication to remove the orphans. If
	  there are many objects to be deleted, you can do it in bulk by changing the
	  Mode value in the .csv file from Update to Delete.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
