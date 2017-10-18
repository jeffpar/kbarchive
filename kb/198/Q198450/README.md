---
layout: page
title: "Q198450: XCLN: You do not have create permissions on this folder"
permalink: kb/198/Q198450/
---

## Q198450: XCLN: You do not have create permissions on this folder

	Article: Q198450
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may encounter a non-delivery report (NDR) similar to the following if an
	Inbox Assistant is configured using the "Leave message intact" method while
	forwarding.
	
	   -----Original Message-----
	   From:   System Administrator
	   Sent:   Monday, August 10, 1998 11:08 AM
	   To:   Mailbox1
	   Subject:   Undeliverable:
	  
	   Your message did not reach some or all of the intended recipients.
	
	         Subject:
	         Sent:   8/10/98 11:08 AM
	  
	   The following recipient(s) could not be reached:
	  
	         Mailbox1 on 8/10/98 11:08 AM
	             The message could not be delivered because you do not have
	  create permissions on this folder or it is only available to folder
	  owners at this time MSEXCH:MSExchangeMTA:SITENAME:SERVERNAME
	
	CAUSE
	=====
	
	The original sender does not have permissions on the public folder which the
	message is being forwarded to.
	
	The "Leave message intact" option when forwarding a message forwards the message
	as if it were a new message (without the forward prefix in the Subject box), and
	it is delivered FROM the original sender NOT the mailbox which forwarded it.
	
	The "Leave message intact" option can be selected from the Inbox Assistant when
	editing or adding a new rule.
	
	WORKAROUND
	==========
	
	Give the original sender Owner permissions on the Public folder, or change the
	forwarding option to "Standard."
	
	MORE INFORMATION
	================
	
	EXAMPLE:
	
	1. An "Alert Service" uses the Service profile and mailbox to send messages to
	  the Network Alerts Mailbox.
	
	2. The Network Alerts Mailbox has an Inbox Assistant rule which forwards the
	  message to a Public folder called Alerts Public Folder (listed in the global
	  address list).
	
	3. The Inbox rule is set up as follows:
	
	  From                Network Alerts
	  Forward to          Alerts Public Folder
	  Method              Leave message intact
	
	4. The Alerts Public Folder client permissions are set as follows:
	
	  Default = Reviewer
	  Anonymous = None
	  Network alerts = Owner
	
	Since the original sender of the message is Service, and Service does not have
	permissions on the Public folder, the NDR is generated.
	
	Additional query words: 8.0 8.01 8.02 8.03 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
