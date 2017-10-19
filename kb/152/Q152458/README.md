---
layout: page
title: "Q152458: XADM: Mailbox Resources Reporting Usage Not Seen by Client"
permalink: /kb/152/Q152458/
---

## Q152458: XADM: Mailbox Resources Reporting Usage Not Seen by Client

	Article: Q152458
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 22-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Exchange Administrator program, when you view the Mailbox
	Resources tab under properties of the Private Information Store object in the
	Server container, a mailbox may report having a number of messages and kilobytes
	being used on the server store but all folders in the client's viewer are empty
	(including Deleted Items).
	
	For example, Mailbox Resources viewed from the Administrator program may show
	User A to have a total of 7,943 KB and 15 items. However, if User A logs on to
	the Information Store and goes through every folder located on the server, there
	are no messages present.
	
	CAUSE
	=====
	
	There are two possible causes for the discrepancy between the Microsoft Exchange
	Server Administrator program and Microsoft Exchange Client:
	
	- A user or users have Microsoft Exchange Forms installed in the Personal Forms
	  registry and/or server based folders. Installing forms in the personal forms
	  registry and/or server based folder uses space on the Information Store for
	  that user's mailbox.
	
	- A user is set up (or was previously set up) as the administrator mailbox for
	  the Schedule+ Free Busy Connector mailbox.
	
	RESOLUTION
	==========
	
	To clear up the discrepancies (if you want to), follow these steps:
	
	1. Remove or move Forms from the Personal Forms registry and/or server-based
	  folders
	
	2. Log on to the Information Store using Microsoft Exchange Client or Outlook.
	
	  If one does not exist create a set of Personal Folders for this profile (this
	  is only required if you want to move the forms).
	
	3. Select a folder from the PST and get properties on the folder.
	
	4. On to the Forms tab, click Manage.
	
	5. In the left pane, click Set.
	
	6. Select the Forms Library option and click Personal Forms in the list box.
	
	7. Click OK.
	
	8. Select any forms installed in the Personal Forms registry to highlight them,
	  and click Copy to move the form(s) to the PST folder.
	
	  -OR-
	
	  Click Delete to remove the forms from the Personal Forms registry.
	
	Once all forms are moved/deleted, view mailbox resources with the Administrator
	program; the discrepancy should be cleared up.
	
	
	Some Free/Busy messages sent between Exchange Server and Microsoft Mail go
	through the user's mailbox specified in the Administrator field within
	properties of the Schedule+ Free Busy Connector's mailbox in the Server
	Recipients container. These messages may get stranded there if the Free Busy
	Connector administrator is changed often and/or if the connector is taken down
	for a period of time. Unfortunately, there is no easy way to remove these
	messages from the administrator's mailbox. Because these messages are placed in
	the IPM.Root Folder of the mailbox, the only way to clear them is through the
	use of MD VU32.EXE (a utility shipped in the Support directory on the Exchange
	Server compact disc). To perform this cleanup using MDBVU32, follow these
	steps:
	
	1. On a workstation that has a profile created for the user who is (or was) the
	  Free Busy Connector's administrator, create a directory called MDBVU and copy
	  the following files from the Support\Utils\<Platform> directory on the
	  Exchange Server compact disc:
	
	  Mdbvu32.exe
	  PropVu32.dll
	  StatVu32.dll
	  TblVu32.dll
	  XvPort dll
	
	2. Start the Microsoft Exchange Client or Outlook client and log on to the Free
	  Busy Connector's administrator mailbox.
	
	3. From the MDBVU directory, start Mdbvu32.exe.
	
	4. Click OK in the MAPILogonEx dialog box.
	
	5. On the MDB menu, click OpenMessageStore.
	
	6. From the displayed list of message stores, select the "Mailbox - <user's
	  friendly name>" entry and click the Open button.
	
	7. On the MDB menu, click Open Root Folder.
	
	8. In the MAPI_FOLDER - Root dialog box that is displayed, look in the Messages
	  in Folder box for Sched+ entries. Select the Sched+ entries.
	
	9. From the Operations Available list box, select the lpFld-
	  >DeleteMessages() entry and then click the Call Function button on the
	  right side of the list box. This should result in the Schedule+ messages
	  being removed from the root folder.
	
	10. In the MAPI_FOLDER - Root dialog box, click Close.
	
	11. On the MDB menu, click Store Logoff, and then click OK on the lpMDB-
	  >StoreLogoff() dialog box, then clear the message box.
	
	12. On the Session menu, click Session Logoff.
	
	13. On the Session menu, click Exit to close Mdbvu32.
	
	View the Mailbox Resources tab for this mailbox; the discrepancy should be
	cleared up.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available. Investigation is being done to
	make identifying and clearing up data in all server-side folders an easy
	process.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
