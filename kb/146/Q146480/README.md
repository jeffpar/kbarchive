---
layout: page
title: "Q146480: XCLN: Additional Addresses Not Included with Resent Message"
permalink: /kb/146/Q146480/
---

## Q146480: XCLN: Additional Addresses Not Included with Resent Message

	Article: Q146480
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; :
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If an Exchange Server message is not successfully sent and generates a
	non-delivery report (NDR), when you change the intended recipients in the To or
	Cc boxes of the message and then resend it, only the recipients that were on the
	message that was originally sent are displayed in the resulting resent message.
	
	MORE INFORMATION
	================
	
	The following is an example of this behavior:
	
	- You send a message to an invalid recipient, noone@microsoft.com, and you
	  receive an NDR because the intended recipient does not exist.
	
	- You open the NDR message and click Send Again on the Action menu. You delete
	  the original recipient noone@microsoft.com from the To box, replace the
	  original recipient with the valid recipient someone@microsoft.com, and then
	  click Send.
	
	- The user someone@microsoft.com receives the message, but noone@microsoft.com
	  is displayed in the To box.
	
	This behavior is by design. If you resend an NDR, you only submit the message to
	the new recipient; you do not modify the original message header.
	
	
	Additional query words: mapi specification
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000; :
	Issue type        : kbinfo
	
	=============================================================================
	
