---
layout: page
title: "Q180434: XFOR: How to Remove, Reinstall, and Verify Dirsync Configuration"
permalink: /kb/180/Q180434/
---

## Q180434: XFOR: How to Remove, Reinstall, and Verify Dirsync Configuration

{% raw %}

	Article: Q180434
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to remove and reinstall the directory synchronization
	(dirsync) configuration on a Microsoft Exchange Server computer that is
	configured as a dirsync server and a Microsoft Mail for PC Networks computer
	that is configured as a dirsync requestor. It also describes how to verify the
	dirsync configuration by performing a manual dirsync.
	
	Removing, reinstalling, and verifying the dirsync configuration may help you
	resolve problems that arise when you attempt to perform directory
	synchronization between the two computers. Note that you should always remove
	and reinstall the configuration on both computers.
	
	MORE INFORMATION
	================
	
	Removing and Reinstalling on the Microsoft Exchange Server Computer
	-------------------------------------------------------------------
	
	To remove and reinstall the dirsync configuration on a Microsoft Exchange Server
	computer that is configured as a dirsync server, follow these steps:
	
	1. Stop the Microsoft Exchange Directory Synchronization service. To do so,
	  follow these steps:
	
	  a. In Control Panel, double-click Services.
	
	  b. Click the Microsoft Exchange Directory Synchronization service, click
	     Stop, click Yes, and then click Close.
	
	2. Delete the dirsync server object in the Administrator program. To do so,
	  follow these steps:
	
	  a. Click Start, point to Programs, point to Microsoft Exchange, and then
	     click Microsoft Exchange Administrator.
	
	  b. In the left pane, click Connections under the appropriate Microsoft
	     Exchange Server site. In the right pane, click the dirsync server object,
	     click Delete on the Edit menu, and then click Yes.
	
	  NOTE: Before you delete the dirsync server object, you must delete any
	  requestor objects under it.
	
	3. Delete the $System recipient. To do so, click Recipients under the
	  appropriate Microsoft Exchange Server site in the left pane of the
	  Administrator window. In the right pane, click the $System recipient, click
	  Delete on the Edit menu, and then click Yes.
	
	  NOTE: The $System recipient is a hidden, custom recipient. To view this
	  recipient in the Administrator program, verify that All and Hidden Recipients
	  are selected on the View menu.
	
	4. Copy all the files in the Exchsrvr\Dxadata folder to a temporary folder.
	
	5. Create a new dirsync server object. To do so, follow these steps:
	
	  a. In the Administrator program, point to New Other on the File menu, and
	     then click Dirsync Server.
	
	  b. Enter the appropriate information, and then click OK.
	
	6. Enable maximum logging for dirsync. To do so, follow these steps:
	
	  a. In the Administrator program, click the appropriate server in the left
	     pane. In the right pane, click Directory Synchronization, and then click
	     Properties on the File menu.
	
	  b. Click the Diagnostics Logging tab, click MSExchangeDX in the list of
	     categories, click Maximum, and then click OK.
	
	7. Save the contents of the application log, and then clear all events from the
	  log. To do so, follow these steps:
	
	  a. Click Start, point to Programs, point to Administrative Tools (Common),
	     and then click Event Viewer.
	
	  b. On the Log menu, click Application.
	
	  c. On the Log menu, click Save As, type a file name in the File Name box, and
	     then click Save.
	
	  d. On the Log menu, click Clear All Events, click No, and then click Yes.
	
	  e. On the Log menu, click Exit.
	
	8. Start the Microsoft Exchange Directory Synchronization service. To do so,
	  follow these steps:
	
	  a. In Control Panel, double-click Services.
	
	  b. Click the Microsoft Exchange Directory Synchronization service, click
	     Start, and then click Close.
	
	Removing and Reinstalling on the Microsoft Mail for PC Networks Computer
	------------------------------------------------------------------------
	
	To remove and reinstall the dirsync configuration on a Microsoft Mail for PC
	Networks computer that is configured as a dirsync requestor, follow these
	steps:
	
	1. Reset the dirsync numbers. To do so, type the following command at a command
	  prompt, and then press ENTER:
	
	  listds admin -p<password> -d<drive> -r -z
	
	  where <password> is the password for the Admin account and <drive>
	  is the network drive that is mapped to the Microsoft Mail postoffice.
	
	2. Use the Microsoft Mail administrator program to perform a full export. To do
	  so, start the administrator program, select Config, select DirSync, select
	  Requestor, and then select Export.
	
	3. Reset the dirsync mailbags. To do so, type the following commands at a
	  command prompt, pressing ENTER after each command:
	
	  cd exchsrvr\connect\msmcon\maildata\mbg
	  ren system.mbg system.old
	  ren inqueue.mbg inqueue.old
	  cd exchsrvr\connect\msmcon\maildata\key
	  ren system.key system.old
	  ren inqueue.key inqueue.old
	  debug system.key
	
	  At the Debug prompt, type the following commands, pressing ENTER after each
	  command:
	
	  -rcx
	  CX 0000
	  :230
	  -f100,32f,0
	  -w
	  -q
	
	  Type the following commands at the command prompt, pressing ENTER after each
	  command:
	
	  copy system.key inqueue.key
	  cd exchsrvr\connect\msmcon\maildata\mbg
	  type nul > inqueue.mbg
	  type nul > system.mbg
	
	Verifying the Dirsync Configuration
	-----------------------------------
	
	To verify the dirsync configuration, perform a manual dirsync. For information
	about how to do so, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q147464 XFOR: Manual Dirsync with Exchange Server as Dirsync Server
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
