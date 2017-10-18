---
layout: page
title: "Q199532: XWEB:Netscape Navigator for Solaris Corrupts Options Page in OWA"
permalink: kb/199/Q199532/
---

## Q199532: XWEB:Netscape Navigator for Solaris Corrupts Options Page in OWA

	Article: Q199532
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Netscape Navigator on a Solaris Sparcstation to access a Microsoft
	Exchange Server computer using the Outlook Web client running the Japanese code
	pages, the Options page may be corrupted.
	
	CAUSE
	=====
	
	Netscape Navigator decoded the JavaScript as EUC, not S-JIS. This results in the
	corrupted Option page.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
