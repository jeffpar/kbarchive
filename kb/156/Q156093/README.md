---
layout: page
title: "Q156093: XADM: An Error Occurred While Processing an E-mail Address"
permalink: kb/156/Q156093/
---

## Q156093: XADM: An Error Occurred While Processing an E-mail Address

	Article: Q156093
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a mailbox or a distribution list in the Microsoft
	Exchange Administrator program you might receive the following error:
	
	  An error occurred while processing an e-mail address. To view details of the
	  error, see the application event log in the Windows NT Event Viewer on the
	  Microsoft Exchange Server computer.
	
	  Microsoft Exchange Administrator
	  ID no: c1030b35
	
	In the Windows NT Event Log, you will see event ID 5033.
	
	  Error You do not have the permissions required to complete the operation.
	  occurred during address generation.
	
	CAUSE
	=====
	
	This error will occur if a System Account is used to start the Microsoft
	Exchange System Attendant.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Open the Control Panel.
	
	2. Click the Services icon.
	
	3. Select the Microsoft Exchange System Attendant.
	
	4. Click the Startup button.
	
	5. Verify that a Windows NT account with Service Account Admin privileges on the
	  Microsoft Exchange objects is specified for This Account in the Log On As
	  box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
