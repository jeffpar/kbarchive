---
layout: page
title: "Q136055: PC Ext: Windows 95 Inbox to Use an External Delivery Agent"
permalink: /kb/136/Q136055/
---

## Q136055: PC Ext: Windows 95 Inbox to Use an External Delivery Agent

	Article: Q136055
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure the Microsoft Windows 95 Inbox for both local area network
	(LAN) and Remote configurations, there is a check box for Use External Delivery
	Agent.
	
	If the check box is selected, an external message transfer agent (MTA), such as
	EXTERNAL.EXE included with Mail for PC Networks, is required to complete
	delivery of the message.
	
	NOTE: To configure the Inbox, in the Control Panel window, click Mail, then Fax.
	Click the Services tab, then Microsoft Mail properties.
	
	MORE INFORMATION
	================
	
	This option partially disables the Inbox from delivering the message. The
	message is created and placed on the Mail for the PC postoffice; however, it is
	not placed in the recipient's mailbag. Instead, it is placed in the P1 directory
	(a temporary holding location), and it waits there until processed by the MTA.
	
	By placing the message in the P1 directory, the client does not need to resolve
	the addresses into mailbags and move the message into the mailbags. This speeds
	up the delivery process for the client, but it does require the use of the MTA
	to complete the delivery.
	
	NOTE: This is helpful when you dial in remotely to the postoffice, but it can
	also speed up the client when you use it on a slow LAN.
	
	Without the MTA, no message from the client will ever be received by the
	addressees. Do not select this option unless you are sure that an MTA is running
	against the Mail for PC Networks postoffice.
	
	NOTE: A loop-back message (message sent to yourself) will be sent in this
	situation.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
