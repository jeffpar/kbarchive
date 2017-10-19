---
layout: page
title: "Q217195: XFOR: Admin Notification Is Being Incorrectly Executed"
permalink: /kb/217/Q217195/
---

## Q217195: XFOR: Admin Notification Is Being Incorrectly Executed

	Article: Q217195
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Internet Mail Service sends notification to the Administrator mailbox for an
	Unknown recipient for which this option is not selected in the Internet Mail
	Service Notification window in the Exchange Administrator program.
	
	CAUSE
	=====
	
	The Diagnostic and Reason codes for the option "email address could not be
	found" are being improperly set to match the Diagnostic and Reason codes for the
	option "destination host not found". Therefore, the Administrator's mailbox
	receives notification for this type of mail delivery failure.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Internet Mail Service
	
	+---------------------------+
	| Imcmsg.dll   | 5.5.2558.0 | 
	+---------------------------+
	| Msexcimc.exe | 5.5.2558.0 | 
	+---------------------------+
	
	This hotfix has been posted to the following Internet location as Psp2imca.zip
	and Psp2imci.zip:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/PostSP2/imc-fix
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
