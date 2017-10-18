---
layout: page
title: "Q321309: MS02-019: Security Vulnerabilities in Internet Explorer"
permalink: kb/321/Q321309/
---

## Q321309: MS02-019: Security Vulnerabilities in Internet Explorer

	Article: Q321309
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 1.0,2001,4.0,5,5.02,98
	Operating System(s): 
	Keyword(s): kbenv kbtool kbSecurity
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 2001 for Mac 
	- Microsoft Excel X for Mac 
	- Microsoft Excel 2001 for Mac 
	- Microsoft PowerPoint 2001 for Mac 
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft Entourage 2001 for Mac 1.0 
	- Microsoft Entourage X for Mac 
	- Microsoft Outlook Express versions 4.0, 5.02 for Macintosh 
	- Microsoft Internet Explorer version 5 for Macintosh 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft has released a patch to address two new security vulnerabilities in
	Internet Explorer for Macintosh.
	
	The first vulnerability is an unchecked buffer that is associated with the
	handling of a particular HTML element. A security vulnerability results because
	an attacker can run a buffer-overrun attack that tries to exploit this flaw. A
	successful attack would have the result of causing the program to fail, or to
	cause code of the attacker's choice to run as if it were run under the user's
	permissions.
	
	The second vulnerability is a flaw in how Internet Explorer for Macintosh handles
	certain HTML elements that run AppleScripts that are stored on the local
	computer. This flaw makes it possible for locally-stored AppleScripts to be
	started outside the typical security restrictions. A vulnerability results
	because it is possible for a malicious user to exploit this and cause
	AppleScripts to run without the user's consent. The AppleScripts would run as if
	they had been started by the user, and might take the same actions as any
	AppleScript that is legitimately started by the user.
	
	RESOLUTION
	==========
	
	Macintosh OS X
	--------------
	
	To resolve this problem, use the Software Update feature in Macintosh OS X
	version 10.1 to install the Internet Explorer 5.1 Security Update. Additional
	information about the Software Update feature is available at the following
	Apple Computer Web site:
	
	  http://www.apple.com/macosx/upgrade/softwareupdates.html
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	All Other Products
	------------------
	
	Download the update from the following Microsoft Web site:
	
	  http://www.microsoft.com/mac/download
	
	NOTE: As of April 2002, an update is under development for Microsoft PowerPoint
	98 for Macintosh. When this update is available, this article will be updated.
	
	STATUS
	======
	
	Microsoft has confirmed that this problem could result in some degree of
	security vulnerability in the Microsoft products that are listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	  http://www.microsoft.com/technet/security/bulletin/ms02-019.asp
	
	Additional query words: security_patch
	
	======================================================================
	Keywords          : kbenv kbtool kbSecurity 
	Technology        : kbHWMAC kbOSMAC kbWordMacSearch kbIEsearch kbExcelSearch kbPowerPtSearch _IKkbbogus kbWord2001Search kbOutlookExpressSearch kbExcel2001Search kbExcel2001 kbExcelMacsearch kbPowerPt2001Search kbPowerPt98Search kbPowerPt98 kbEntourage2001Search kbIEMacSearch kbIE500Search kbOutlookExpressMacSearch kbPowerPt2001 kbWord2001 kbIE500Mac kbOutlookExpress502Mac kbOutlookExpress400Mac kbEntourage2001 kbEntourageXSearch kbEntourageX kbEntourageSearch kbExcelXMac
	Version           : :1.0,2001,4.0,5,5.02,98
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
