---
layout: page
title: "Q234241: XCLN: Reply To Address Differs from From in Outlook/OE"
permalink: kb/234/Q234241/
---

## Q234241: XCLN: Reply To Address Differs from From in Outlook/OE

	Article: Q234241
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:4.0,5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook Express versions 4.0, 5 for Windows 95 
	- Microsoft Outlook Express versions 4.0, 5 for Windows NT 4.0 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Outlook versions 8.0, 8.01, 8.02, 8.03, 8.04, and 8.5, and Microsoft
	Outlook Express (OE) versions 4.0 and 5 do not notify you when the Reply To
	address is different than the From address. When you reply to a message, it is
	directed to a different address than you expect when the Reply To field is used
	to direct the replies elsewhere.
	
	CAUSE
	=====
	
	If a Display Name has been defined, Outlook and OE neatly parse the address and
	only show the Display Name. However, double-clicking on the Display Name reveals
	the unexpected SMTP address defined in the original sender's message as the
	Reply To address. When the message first arrives in an Inbox, the From header
	may look like:
	
	  GoodUser [user@microsoft.com]
	
	When you reply to the message, the To field will be parsed to just:
	
	  GoodUser
	
	By default, the original header information is copied into the message body which
	includes the original From address:
	
	  GoodUser [user@microsoft.com]
	
	However, double-clicking on the To field may reveal that the Reply To address is
	different from what was expected:
	
	  BadUser@widget.microsoft.com
	
	MORE INFORMATION
	================
	
	This behavior is by design.
	
	
	Additional query words: 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlookExpressSearch kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlookExpressNT400Search kbOutlookExpress95Search kbOutlookExpress500Win95 kbOutlookExpress400Win95 kbOutlookExpress500NT400 kbOutlookExpress400NT400
	Version           : :; WINDOWS:4.0,5
	Issue type        : kbprb
	
	=============================================================================
	
