---
layout: page
title: "Q176245: XWEB: VBScript Error '800a03e3' When Accessing OWA Server 5.5"
permalink: /kb/176/Q176245/
---

## Q176245: XWEB: VBScript Error '800a03e3' When Accessing OWA Server 5.5

	Article: Q176245
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive the following VBScript error on your Web Browser when you
	attempt to connect to Outlook Web Access (OWA). The script name and line number
	may not necessarily be identical, but the error code will remain the same:
	
	  Microsoft VBScript runtime error '800a03e3'
	
	  Unknown runtime error
	
	  /exchange/USA/lib/session.inc, line 300"
	
	CAUSE
	=====
	
	This can occur when the server is very busy or when you try to connect to a
	mailbox that does not exist but is authenticated as a real user.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.5.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft Recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: VBScript error mail box exfaqold
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : 5.5
	Issue type        : kbbug
	
	=============================================================================
	
