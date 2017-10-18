---
layout: page
title: "Q180297: Reconfiguring Exchange As The Dirsync Server"
permalink: kb/180/Q180297/
---

## Q180297: Reconfiguring Exchange As The Dirsync Server

	Article: Q180297
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When mail flow is established, administrators have the ability to move the
	directory synchronization server from Microsoft Mail to Exchange Server. Changes
	on the Microsoft Mail side require demoting the previous dirsync server and
	registering all requestors with the Exchange Server proxy postoffice, and then
	resetting the sync numbers with Listds.exe and full export. The Exchange Server
	side requires creation of the Directory Exchange Agent server object and Remote
	Dirsync requestor objects for each Microsoft Mail postoffice.
	
	Below are detailed steps for reconfiguring Microsoft Mail Requestors to use
	Exchange Server as the dirsync server.
	
	Microsoft Mail Requestor Configuration
	--------------------------------------
	
	1. Log in to the MS Mail Administrator program on the Microsoft Mail postoffice
	  presently defined as the dirsync server.
	
	2. Select Config, select DirSync, select Server, and then select Schedule Now,
	  remove all "Process Updates" times.
	
	3. Select Config, select DirSync, select Options, and then choose "NO."
	
	4. Select Config, select DirSync, select Registration, and then choose the
	  Exchange Connector postoffice.
	
	5. Log in to the MS Mail Administrator program on all Microsoft Mail Requestor
	  postoffices.
	
	6. Select Config, select DirSync, select Registration, and then choose the
	  Exchange Connector postoffice.
	
	7. Reset sync numbers on every Microsoft Mail postoffice using Listds.exe using
	  the following syntax:
	
	  Listds.exe Admin -P<password> -R -Z -d<drive>
	
	  NOTE: Listds.exe -Z resets all requestor information including any templates
	  or gateway addresses to be propagated through dirsync. Listds.exe can be
	  found at:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/WA0725/DISK/
	
	8. Log in to the MS Mail Administrator program on all Microsoft Mail Requestor
	  postoffices.
	
	9. Select Config, select DirSync, select Requestor, select Export, and then
	  choose "Yes."
	
	10. Select Config, select DirSync, select Requestor, select Import, and then
	  choose "Yes."
	
	11. Select Config, select DirSync, select Requestor, select Options, and then
	  choose the desired DirSync options.
	
	Microsoft Exchange Dirsync Server Configuration
	-----------------------------------------------
	
	Log in to the Administrator program on the Exchange Server computer that is
	designated to be the new dirsync server.
	
	To set up and configure the Directory Exchange Agent object on the Exchange
	Server computer, from the File menu, select New Other and choose Dirsync
	Server.
	
	General Property Page
	---------------------
	
	Naming the Dirsync Server object is purely a matter of choice, but it is
	typically referred as the DXA Server or Dirsync Server object.
	
	Select the alias to be designated as the Dirsync Administrator.
	
	Select both check boxes in the "Mail Addresses" section to copy incoming and
	outbound dirsync messages. (This is necessary for troubleshooting directory
	synchronization.)
	
	Schedule Property Page
	----------------------
	
	Highlight the hour when T2 (process updates) should begin. T2 will only spawn at
	the top of the hour.
	
	To Set Up Remote Dirsync Requestors
	-----------------------------------
	
	NOTE: Administrators have the ability to specify different import containers for
	each mail requestor. If this is desired, create recipient containers before
	creating the Remote Dirsync Requestor objects.
	
	From the File menu, select New Other and choose Remote Dirsync Requestor.
	
	General Property Page
	---------------------
	
	Name: Naming the Remote Dirsync Requestor object is purely a matter of choice,
	but is typically given the same name as the postoffice. Enabling the "Append to
	Imported users' display name" puts the name of the requestor object along side
	the MS Mail user's display name.
	
	Password: If needed, administrators have the ability to specify a password for
	requestors. If this option is needed, verify that the password on the requestor
	object is identical to that on the Microsoft Mail requestor using Microsoft Mail
	Administrator program and select Config, select Dirsync, select Requestor, and
	then select Registration.
	
	Requestor Address Type: "Leave this option as default "MS."" (without the
	quotation marks)
	
	Requestor Language: Leave as default "English" unless another language is
	preferable.
	
	Place a check mark in the "Export on Next Cycle" box.
	
	Import Containers Property Page
	-------------------------------
	
	Import Container: Specify the recipients container for which this requestor will
	import into.
	
	Trust Level: (Recommend using default.) This value allows administrators to
	configure what trust levels users are assigned when imported through this
	object.
	
	Export Containers Property Page
	-------------------------------
	
	Add all recipient containers to be exported under the "Containers to be Exported"
	list. If your organization has multiple Exchange Server sites, select all
	containers for remote sites using the Site drop-down list.
	
	Trust Level: (Recommend using default.) This value allows administrators to
	configure which users will be propagated.
	
	Place a check mark in the "Export Custom Recipients" box.
	
	You should now be ready for manual dirsync as outlined in the Microsoft Knowledge
	Base article
	
	  Q147464, "XFOR: Manual Dirsync with Exchange as Dirsync Server."
	
	Additional query words: DirSync DXA Requestor Sync q96060 Q148309 Q147464 PCMAIL EXCHANGE
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : :3.2,3.2a,3.5
	Issue type        : kbinfo
	
	=============================================================================
	
