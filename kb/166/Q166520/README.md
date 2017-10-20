---
layout: page
title: "Q166520: XADM: Admin Incorrectly Creates an MS Mail Connector Mailbox"
permalink: /kb/166/Q166520/
---

## Q166520: XADM: Admin Incorrectly Creates an MS Mail Connector Mailbox

{% raw %}

	Article: Q166520
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using the Microsoft Exchange Administrator's program to view the properties
	of the Microsoft Mail Connector object in the Connections container, the
	following error is displayed:
	
	  Extension 'MS' could not be loaded. An error occurred during file
	  replication. Unable to find the extension .dll file with the correct
	  version number. To view details of the error, see the application event
	  log in the Windows NT event viewer on the Microsoft Exchange server
	  computer.
	  Microsoft Exchange Administrator
	  ID No: c1030ad1
	
	MORE INFORMATION
	================
	
	The dialog presents three command buttons; Abort, Retry, and Ignore. If you
	choose Ignore, the Microsoft Mail Connector dialog is displayed with non-
	standard types of dialog tabs. In other words, there may be a Queues tab, an
	Export Container tab, an Import Container tab, and so forth.
	
	If you click Queues tab, an EDK gateway mailbox is created in the Information
	Store for the Microsoft Mail Connector. This mailbox causes mail to and from
	Microsoft Mail recipients to be placed in this mailbox rather than in the MTA
	queue. The mail trapped in this mailbox is unrecoverable.
	
	CAUSE
	=====
	
	This problem may occur for either of the following reasons:
	
	Case 1
	------
	
	The Microsoft Exchange Administrator program cannot load an Admin extension
	required when displaying the Microsoft Mail Connector dialog box. This problem
	causes the dialog box to be displayed.
	
	Case 2
	------
	
	When you click the Ignore button on the dialog box mentioned above, it displays
	an incorrect default property page. This default property page includes the
	Queues tab and clicking it causes the creation of the mailbox.
	
	RESOLUTION
	==========
	
	The two resolutions match the two listed in the previous section.
	
	Case 1
	------
	
	Fix the cause of the extension dll not being loaded properly. This will prevent
	the error dialog from being displayed and in turn will not lead to the creation
	of the Microsoft Mail Connector mailbox in the store. Some common reasons for
	the extension not being loaded properly include:
	
	- The Add-ins directory on the Microsoft Exchange Server is not shared.
	
	- The Add-ins share does not grant the appropriate rights.
	
	- The dll for the extension trying to be loaded is the incorrect version.
	
	- The Microsoft Exchange Server platform differs from the platform where the
	  Microsoft Exchange Administrator program is being run from and the
	  appropriate platform's dll is not available in the Directory service.
	
	
	  NOTE: If none of the above reasons apply, a network trace from the computer
	  running the Microsoft Exchange Administrator program to the Microsoft
	  Exchange Server may be needed in order to obtain enough information to
	  resolve the problem.
	
	Case 2
	------
	
	Apply the "Case 2" fix described in the "Status" section of this article. The
	Admin.exe program was corrected to display only two command buttons, Retry and
	Cancel. Retry will attempt to reload the files with .dll extension. Cancel will
	quit the process and return to the Microsoft Exchange Administrator program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: mail flow hung hang abort slow admin
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
