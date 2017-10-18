---
layout: page
title: "Q201414: XADM: Restored Directory Not Replicating Out to Other Servers"
permalink: kb/201/Q201414/
---

## Q201414: XADM: Restored Directory Not Replicating Out to Other Servers

	Article: Q201414
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A restored Exchange Server directory database receives changes from other
	servers but does not send out its own changes.
	
	You may also notice replication error 1224 in the Application Log from the source
	MSExchangeDS.
	
	CAUSE
	=====
	
	It may occasionally be necessary to restore a copy of the Exchange Server
	directory that is days or weeks old. In a multi-server organization, the older
	copy of the directory will be automatically "backsynced" with newer information
	by other servers. The restored server sends special requests for synchronization
	information to other servers, and waits for up to 16 hours for all responses to
	be received.
	
	After 16 hours, even if all responses needed to bring the directory into complete
	synchronization have not been received, backsync expires. This timeout is
	necessary because changes to organizational topology may cause some requests to
	never be answered, and because while backsync is in progress, the restored
	directory is not writable. This means that if an administrator tries to create a
	new mailbox or make any other directory change while attached to the restored
	server, a DS_E_BUSY error will be generated, and the change will not be saved.
	
	Often, administrators will deliberately force backsync to expire almost
	immediately to avoid DS_E_BUSY errors. This can be done by following the steps
	in the following Microsoft Knowledge Base article:
	
	  Q160850 DS_E_BUSY After Directory Service Restore
	
	In cases where backsync does not complete or is deliberately aborted, the update
	sequence numbers (USN) numbers on the restored server are lower than expected by
	other servers in the site. USN numbers are the means by which Exchange
	directories make decisions about which objects to replicate with each other.
	
	The error 1224 indicates that the restored server received a replication request
	from another server that referenced a USN value higher than the most current USN
	value on the restored server.
	
	If the discrepancy between the USN values is relatively small, this problem will
	correct itself over a relatively short period of time. Each change replicated to
	the restored server will increase the server's highest USN by 1, eventually
	causing the restored server to "catch up" with the rest of the site.
	
	The workarounds in this article may help resolve 1224 errors due to any cause,
	not just the cause described in this article.
	
	WORKAROUND
	==========
	
	The highest USN number on the restored server must be increased by some means
	until it is at or above the USN number recorded for the restored server on other
	servers in the site before replication from the restored server will begin
	functioning again.
	
	The easiest way to do this is with the Authrest utility appropriate to your
	version of Exchange Server.
	
	For Exchange Server 4.0, Authrest.exe is included on the installation CD.
	
	For Exchange Server 5.0, obtain a version of Authrest.exe with a file version of
	5.0.1458.60.
	
	For Exchange Server 5.5, obtain a version of Authrest.exe with a file version of
	5.5.1960.8.
	
	Note that the version of Authrest.exe included on the Exchange Server 4.0, 5.0,
	and 5.5 CDs actually works only for version 4.0. The Filever utility included on
	the Exchange Server 5.5 CD may be used to verify Authrest.exe file versions.
	
	Contact Microsoft Product Support Services for more information about Authrest
	versions.
	
	The "More Information" section of this article explains how to discover the size
	of the discrepancy between USNs, along with the Authrest parameters that should
	be used to correct the problem.
	
	To use Authrest, you must stop Exchange services on the affected server during
	the procedure. If that is not feasible, you may use the bulk export/import
	feature to correct a USN problem without interrupting service. Using bulk import
	is more complicated and may take longer to finish, but has the advantage of
	requiring no server downtime. The "More Information" section of this article
	explains both methods for increasing the USN.
	
	During the time that the USN values are out of sync, avoid making administrative
	changes while connected to the restored server. Bind to a different Exchange
	Server computer to make changes even to objects homed on the restored server.
	Such changes will replicate to the restored server, even though the restored
	server still cannot replicate such changes to other servers.
	
	MORE INFORMATION
	================
	
	The rest of this article will discuss:
	
	- How to determine the size of the USN discrepancy
	- How to use Authrest to correct this problem
	- How USN numbers and Object-Version numbers interact during directory
	  replication
	- How to use export/import as an alternate method for correcting this problem
	  without incurring any server downtime
	
	To Determine the Size of the USN Discrepancy
	--------------------------------------------
	
	1. WARNING: Using the raw mode of the Exchange Server Administrator program
	  (admin/r) incorrectly can cause serious problems that may require you to
	  reinstall Microsoft Windows NT Server and/or Microsoft Exchange Server.
	  Microsoft cannot guarantee that problems resulting from the incorrect use of
	  raw mode can be solved. Use raw mode at your own risk.
	
	  Run the Exchange Administrator program on the restored server (in this
	  example, Server A) in raw mode: "(<exchsrvr>\bin\Admin.exe /r)"
	  (without the quotation marks).
	
	2. Create a new mailbox.
	
	3. Select the new mailbox, and on the File menu, click Raw Properties.
	
	  WARNING: Changing raw properties may leave your server unusable. Using raw
	  mode to view attributes is safe. Use Cancel to exit all raw properties
	  dialogs.
	
	4. Note the numeric value of the USN-Changed attribute, and then click Cancel to
	  cancel the Raw Properties dialog box.
	
	5. Connect to another server in the site (Server B), and select the <Site
	  Name> object.
	
	6. On the File menu, click Raw Properties, and locate the Reps-From attribute.
	  This attribute is multi-valued, and you will see a line for each server in
	  the site, except the current server. A typical Reps-From line looks like
	  this:
	
	  0,112,16,8483,22C3A9375FF7D1118FB700C04FB94608,SERVERA
	
	  Scroll to the right in the Attribute Value window to see the server name which
	  appears at the end of each value. Select the restored server (Server A).
	
	7. Click the Viewer button, and view the properties for Server A as a "Replica
	  Link."
	
	8. Note the USN value recorded here.
	
	9. Compare the USN-Changed value taken from Server A's new mailbox with the USN
	  recorded on Server B (for Server A).
	
	  If the USN value from Server B's Reps-From is higher, then Server B will be
	  unable to receive changes from Server A. The Server B value must be lower for
	  replication to flow from A to B. If the value on B is in fact lower, there is
	  a different cause for the replication problems than out of sync USN numbers,
	  and this article will not help you.
	
	  If you have multiple servers in your site, you can follow the above procedure
	  for each of them to verify that no server in the site has a higher value
	  listed for Server A than does Server A itself. If you have many servers in
	  your site, a spot check of three or four should be sufficient to arrive at a
	  probable "highest" value. The Reps-From values for Server A on all other
	  servers will normally be very close to each other.
	
	10. Subtract the USN-Changed value taken from the new mailbox on Server A from
	  the largest Reps-From value obtained from any Server B in the site. The
	  difference tells you how many changes must be applied to the directory on
	  Server A before it will catch up with the rest of the site and thus be able
	  to replicate changes out to the site.
	
	  For example, if the difference is 1,000, you could increase the USN on Server
	  A by making 1,000 administrative changes (such as adding or editing a field
	  for a mailbox) while connected to Server A. The Authrest utility makes this
	  unnecessary by mimicking the effects of making as many changes as needed.
	
	To Correct a USN Discrepancy with Authrest
	------------------------------------------
	
	Stop the Exchange Directory Service and, from the server console, type the
	following command:
	
	  "AUTHREST 0 <amount to increase the USN>" (without the quotation marks)
	
	For example, suppose that the discrepancy number you arrived at in step 10 above
	was 1,000. Suppose you had also added 100 mailboxes to Server A before noticing
	that they weren't replicating to the rest of the site. You might then choose to
	set an Authrest value of 1,000 (the discrepancy amount) + 100 (the number of
	changes you've made on Server A since restoring) + 500 (as a safety margin),
	thus making your Authrest command line:
	
	  AUTHREST 0 1600
	
	NOTE: If you are using Authrest for Exchange Server 4.0 or 5.0, it may be
	necessary to run the utility from the <Exchsrvr>\Bin directory so that it
	can find its supporting .dll files.
	
	Notice that the first Authrest parameter was set to 0 in the above example. The
	first Authrest parameter increments Object-Version values, while the second
	parameter increments USN-Changed values. In the case discussed in this article,
	you don't want to increase the Object-Version, just the USN. The reason why is
	discussed at the end of this article.
	
	Also be aware that the higher you set the USN increment amount, the more objects
	will be replicated to other servers. If you were to use a number such as
	100,000, you would likely transmit every single object in the directory to every
	other server in the entire organization, thus creating a "replication storm."
	
	If you set both Authrest parameters to high values, you will accomplish a truly
	AUTHoritative RESTore, in which this server's version of each object replaces
	every other server's version.
	
	To Correct a USN Discrepancy using Export/Import
	------------------------------------------------
	
	1. Start the Exchange Administrator program, and create a new Recipients
	  container (on the File menu, click New Other, and then Recipients Container).
	
	2. Create a single mailbox in this container.
	
	3. Export this mailbox to a .csv file (on the Tools menu, click Directory
	  Export), selecting only this new container for export. This should give you a
	  plain text .csv file with only two lines in it. The first line contains the
	  export header fields, and the second line the specific mailbox information.
	
	4. Open your exported file in Notepad or another plain text editor. Do not use
	  Word Wrap--the file should appear as two long lines. (Be aware that if you
	  use Word or Excel or some other application that performs format conversions,
	  the file may be corrupted during editing or re-saving.)
	
	5. Edit the file by copying and pasting the second line of the file
	  repeatedly--create as many lines as the USN difference you wish to rectify.
	
	  If the USN increment difference is very large (more than 10,000), the .csv
	  file will also become very large. A typical .csv file with 100,000 lines will
	  be 20 MB in size. Rather than creating such a massive text file, you can
	  create a smaller one, and reimport that file into Exchange Server over and
	  over.
	
	  If you lose track of how many lines are in the file, you can save it and run
	  this command to count lines:
	
	  FIND /c "Mailbox" myfile.csv
	
	  You need to have a close idea of how many lines are in the file, so that you
	  don't increase the USN more than necessary.
	
	6. Import the file by clicking Directory Import on the Tools menu in the
	  Exchange Administrator program. This will cause the single mailbox repeatedly
	  listed in the file to be reimported again and again, incrementing the USN for
	  the server with each import. If you need to increase your USN by 100,000, and
	  your file has 10,000 lines, import the same file ten times.
	
	  If you are importing the file multiple times, use a simple batch file to
	  automate the process. For example, if your .csv file has 10,000 lines, and
	  you need to increment the USN by 50,000, create a five line batch file
	  similar to the following:
	
	  --------FIXUSN.BAT---------
	
	  <exchsrvr>\bin\admin.exe /i myfile.csv
	  <exchsrvr>\bin\admin.exe /i myfile.csv
	  <exchsrvr>\bin\admin.exe /i myfile.csv
	  <exchsrvr>\bin\admin.exe /i myfile.csv
	  <exchsrvr>\bin\admin.exe /i myfile.csv
	
	  You should count on at least two hours of import time for each 100,000 entries
	  to be imported. This procedure has been tested successfully with 60-MB .csv
	  files containing 300,000 lines.
	
	Notes on this Procedure:
	
	The reasons for creating a new mailbox rather than simply re-importing existing
	mailboxes are twofold: first, to prevent Object-Versions from being changed on
	existing mailboxes, and second, to minimize the amount of replication traffic
	generated between servers by the process.
	
	Try to schedule this process during off hours, as it will put the local directory
	service under heavy load, which may affect server performance.
	
	If your forced USN increment is much larger than necessary, it may cause all
	existing objects on the server to be replicated to other servers. This can
	create a "replication storm" that may last for several hours in a large
	organization.
	
	The rest of this article briefly discusses how replication uses USNs and
	Object-Version values, and is provided as background for understanding why the
	above procedures are effective.
	
	How USN Values and Object-Version Values Interact in Directory Replication
	--------------------------------------------------------------------------
	
	The USN and the Object-Version play different roles in replication. The USN
	levels determine whether or not one server will send any changes when requested
	to do so by another server. The Object-Version determines whether those changes
	will be applied or discarded once they are received by the requesting server. In
	other words, the USN determines whether any change information at all will pass
	between servers; the Object-Version determines what will be done with the change
	list once it is received.
	
	The Object-Version increments by one each time an object is changed and saved in
	the Exchange Administrator program. When you create a new mailbox, its
	Object-Version is 1. If you later add a fax number to the mailbox, the
	Object-Version becomes 2. When an Exchange Server site's directory is fully
	synchronized, the Object-Version for a particular object has the same value on
	all servers.
	
	The USN is also incremented each time an object is changed, but in a more
	complicated way. While the Object-Version attribute is specific to each object,
	the USN is specific to each server, although it is an attribute carried by each
	object. The USN values for a given object will have different values on each
	server in the site. How this works is best explained by an example:
	
	Suppose you create Mailbox A. As the most recently changed object on the current
	server, Mailbox A will carry the highest USN-Changed value of any object in the
	server's directory (in this example, we will say the value is 1,000).
	
	Then you create Mailbox B. Mailbox A's USN-Changed value remains 1,000, and
	Mailbox B now carries a USN-Changed value of 1,001. Then you go back to Mailbox
	A and add a fax number. Now Mailbox A once again carries the highest USN-Changed
	value (1,002), while B is still showing 1,001. In essence, the highest USN is a
	"hot potato" passed between objects in a directory as they are changed, and the
	highest USN is carried by the last object changed. To discover what the highest
	USN is on a given server, you must therefore change or create an object, and
	examine its value.
	
	With this basic understanding of Object-Versions and USNs, the following example
	of directory replication from Server A to Server B should make sense:
	
	1. Server B initiates a query to Server A for any new changes made to the
	  directory on A. Any of several triggers can cause this request to be sent.
	  The most obvious trigger is receipt of a notification from A that says, "I've
	  made changes to my own directory; everybody come and get them."
	
	In the absence of such change notifications, directories still periodically query
	each other in case change notifications were missed. Exchange Server computers
	do not "push" changes to each other blindly. They notify each other that changes
	exist and then wait for the other servers to request changes. This allows each
	server to request only the changes it really needs.
	
	2. Server B looks at its own Reps-From entry for Server A and, in this example,
	  sees that it lists a value of 1,000.
	
	3. Server B composes a replication request that says, "Send me a copy of every
	  object in your directory that currently carries a USN-Changed value greater
	  than 1,000."
	
	4. Server A scans its own directory, and finds Mailbox A and Mailbox B with
	  USN-Changed values of 1,001 and 1,002, and sends copies of these objects to
	  Server B.
	
	5. If Server B already has a copy of these objects, it compares the
	  Object-Version of its own copy with the one just sent. If the Object-Version
	  of its own copy is lower than that of the one just sent, B replaces its copy
	  with A's version.
	
	  If B's own copy carries a higher Object-Version, then B discards A's object.
	  If A's and B's copies have equal Object-Versions, then several tie-breaking
	  rules are invoked to decide which copy to keep. (The tie-breakers are almost
	  never important in hands-on troubleshooting of replication issues because you
	  can easily break a tie yourself by making a minor change to an object to
	  increase its Object-Version.)
	
	6. Server B updates its Reps-From entry for A to 1,002. The next time it queries
	  A, it will ask for all objects greater than 1,002. Reps-From is incremented
	  regardless of whether the changes received were actually applied to B's
	  directory.
	
	NOTE: You can force a given server to query all other servers in the site for
	changes from the General Properties page of
	<SiteName>\Configuration\Servers\<ServerName>\Directory Service. The
	Update Now button gives you the option of sending a query for objects based on
	the current Reps-From values for other servers ("Update only new and modified
	items"), or of querying as if the Reps-From value were 0 ("Refresh All Items in
	the Directory").
	
	Only if you suspect a large number of objects were mistakenly skipped in previous
	replication should you select the second option. If a single object did not
	replicate, it is much faster and generates far less network traffic to make a
	minor change to the object, and update only new and modified objects.
	
	Now, look back at the previous example of a directory replication cycle, and
	consider what would have happened if Server B's Reps-From value for A had
	initially been 1,500. It would have asked Server A for all objects from 1,501
	on, and, would have gotten nothing back from Server A, whose latest object is
	only at a USN of 1,002.
	
	This is the situation created by restoring an older copy of the directory to
	Server A when backsync isn't allowed to correct the situation. Until 500 more
	changes in the site replicate in to Server A, none of A's changes will replicate
	out.
	
	While you need to increase the USN value in such situations, usually you do not
	want to increase the Object-Version value. Why? Recall that the USN controls
	whether replication changes are transmitted or not, while the Object-Version
	controls whether replication changes are applied or not.
	
	If you increase the Object-Version values on the restored server, then copies of
	objects from that server--which are actually older--will overwrite copies of the
	same objects on other servers--copies which are actually newer. Remember:
	whoever has the highest Object-Version always wins.
	
	Setting the first parameter of Authrest to 0 prevents Authrest from making
	unwanted changes to Object-Version values. Running export/import only against a
	test mailbox also prevents Object-Version values for your actual users from
	being affected.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
