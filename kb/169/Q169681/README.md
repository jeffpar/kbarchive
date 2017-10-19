---
layout: page
title: "Q169681: XCON: IMS Stops with Access Violation When Using Imcext.dll"
permalink: /kb/169/Q169681/
---

## Q169681: XCON: IMS Stops with Access Violation When Using Imcext.dll

	Article: Q169681
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Internet Mail Service (IMS) sample extension DLL, Imcext.dll,
	from the Back Office Resource Kit (BORK), the IMS may stop with an access
	violation, generating a Dr. Watson error message similar to the following:
	
	  Exception: access violation (0xc0000005), Address: 0x00402674
	
	(The address in the above example might be different from the one you see.)
	
	CAUSE
	=====
	
	When processing messages destined for a domain associated with the "localhost"
	entry in the Imcroute.cfg, the IMS and Imcext.dll are unable to cooperate.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Do not use Imcext.dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	In addition to the Dr. Watson error, the Windows NT Server event log contains
	the following error message:
	
	  Event ID: 4037
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Internal processing
	  Description:
	  An exception has occurred which was handled internally by the Internet
	  Mail Service. This may have resulted in a message not being delivered.
	  Code: 0xc0000005 Flags: 0x00000000 Address: 0x00402674
	
	After this error occurs for the first time, each subsequent attempt to restart
	the service MSExchangeIMC will fail with exactly the same error messages.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
