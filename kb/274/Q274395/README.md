---
layout: page
title: "Q274395: XWEB: Warn: &quot;This Page Contains Both Secure and Nonsecure Items&quot;"
permalink: /kb/274/Q274395/
---

## Q274395: XWEB: Warn: &quot;This Page Contains Both Secure and Nonsecure Items&quot;

	Article: Q274395
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Internet Explorer version 5.5 for Windows 2000 
	- Microsoft Internet Explorer version 5.5 for Windows 98 Second Edition 
	- Microsoft Internet Explorer version 5.5 for Windows 98 
	- Microsoft Internet Explorer version 5.5 for Windows 95 
	- Microsoft Internet Explorer version 5.5 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to gain access to a Microsoft Outlook Web Access (OWA) server that
	also has Secure Sockets Layer (SSL) enabled, you may receive the following
	warning message:
	
	  Security Information
	
	  This page contains both secure and nonsecure items. Do you want to display the
	  nonsecure items?
	
	If you click Yes, the OWA logon page is displayed and you can continue to work as
	usual. If you click No, the OWA connection is cancelled.
	
	CAUSE
	=====
	
	This problem can occur because Uniform Resource Locator (URL) scripts that are
	written in JavaScript or the Microsoft Visual Basic Scripting Edition (VBscript)
	are treated as nonsecure data in Internet Explorer 5.5. The warning message in
	the "Symptoms" section of this article is displayed each time that you encounter
	one of these URLs, which is the case in OWA.
	
	WORKAROUND
	==========
	
	To work around this problem, either use an earlier version of Internet Explorer,
	or click Yes when the warning message in the "Symptoms" section of this article
	is displayed. If you do so, you can log on to the OWA server normally.
	
	NOTE: If you click Yes, you simply ignore the warning message; the secure channel
	is maintained and security is not jeopardized.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbIEsearch kbExchangeSearch kbZNotKeyword2 kbOWASearch kbIENT400Search kbIE95Search kbZNotKeyword3 kbIE2000Search kbIE98Search kbOWA550SP1 kbOWA550SP2 kbOWA550SP3 kbIE550Win2000 kbIE550Win95 kbIE550Win98 kbIE550Win98SE kbIE550WinNT400 kbIE98SESearch kbZnotKeyword7 kbExchange550SP3 kbIE550Search
	Version           : :5.5,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
