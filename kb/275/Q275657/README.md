---
layout: page
title: "Q275657: IIS 5.0 Fix for Cross-Site Scripting Issues"
permalink: kb/275/Q275657/
---

## Q275657: IIS 5.0 Fix for Cross-Site Scripting Issues

	Article: Q275657
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP2Fix kbWin2000SP2Fix kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft has identified a vulnerability that may enable a malicious user to
	cause code to run on the computer of another user through a third-party Web
	site. Such code can take any action on the user's computer that the third-party
	Web site was permitted to take. In addition, the code can be made persistent, so
	that if the user returns to the Web site again, the code begins to run again.
	
	This vulnerability can only be exploited if the user clicks on a hypertext link,
	either in HTML e-mail or on a malicious user's Web site; the code cannot be
	injected into an existing session.
	
	CAUSE
	=====
	
	Certain Web services provided by Internet Information Services 5.0 do not
	properly validate all inputs before they use them, and are therefore vulnerable
	to Cross-Site Scripting (CSS).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	On November 2, 2000, Microsoft released an updated patch to correct a new variant
	of this vulnerability. See the following for information on how to obtain the
	latest patch.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q275657_W2K_SP2_x86_en.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25533)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Version         Size    File name
	  --------------------------------------------------------
	  08/26/2000  06:30p                   6,512  Fixerr.js
	  08/27/2000  11:41p  5.0.2195.2104   57,104  Httpodbc.dll
	  09/21/2000  05:23p  5.0.2195.2287  122,640  Iisrtl.dll
	  09/28/2000  05:54p  5.0.2195.2363   46,352  Ism.dll
	  08/27/2000  11:41p  5.0.2195.2104   41,744  Ssinc.dll
	
	
	For additional information about resolving this problem in Internet Information
	Server (IIS) 4.0, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q260347 IIS 4: Fix for Cross-Site Scripting Issues
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 2.
	
	MORE INFORMATION
	================
	
	For more information on this security vulnerability, please see the following
	Microsoft web site:
	
	  http://www.microsoft.com/technet/security/bulletin/MS00-060.asp
	
	CSS is a recently discovered security vulnerability that can potentially enable a
	malicious user to inject code into a user's session with a Web site. Unlike most
	security vulnerabilities, CSS does not apply to any single vendor's products,
	but instead, it can affect any software that runs on a Web server and does not
	follow defensive programming practices. In early 2000, Microsoft and CERT worked
	together to inform the software industry of the issue and lead an industry-wide
	response to it.
	
	Microsoft published extensive information about CSS, including information for
	developers about how to check their code for potential vulnerabilities.
	Microsoft has identified several places in IIS where proper checking was not
	performed; some of these have been found by our internal security teams, and
	others were identified by customers.
	
	Additional query words: Patch Available for "IIS Cross-Site Scripting" Vulnerabilities
	
	======================================================================
	Keywords          : kbWin2000PreSP2Fix kbWin2000SP2Fix kbgraphxlinkcritical 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
