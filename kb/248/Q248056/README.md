---
layout: page
title: "Q248056: XCON: Bad NDR w. No Intended Recipient Stops Connector for Notes"
permalink: kb/248/Q248056/
---

## Q248056: XCON: Bad NDR w. No Intended Recipient Stops Connector for Notes

	Article: Q248056
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for Lotus Notes may shut itself down and you
	may be unable to restart it. The following events may be logged in the log file
	from the Connectivity Controller service:
	
	  31900 Call Product Support, error=invalid parameter
	  08226 Process LME-NOTES-NTSMEX terminated abnormally
	  08277 Shutting down LME-NOTES-Service
	
	CAUSE
	=====
	
	This issue can occur if a malformed message comes from Notes to Exchange Server
	and the malformed message are not moved to the Bad folder. This malformed
	message is a non-delivery report (NDR) that contains no intended recipients.
	
	The intended recipient is the address that the original mail was sent to. That
	address is reused to populate the To field when you try to resend the mail after
	you open the NDR.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue, delete the bad e-mail messages in the Exchange.box
	file, and then restart the Exchange Connector for Lotus Notes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words: Non Delivery Report
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
