---
layout: page
title: "Q233335: Page Contents Visible When Certain Characters are at End of URL"
permalink: /kb/233/Q233335/
---

## Q233335: Page Contents Visible When Certain Characters are at End of URL

	Article: Q233335
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If certain characters are present at the end of a URL, the contents of the page
	pointed to by the URL are returned to the browser. If the URL points to an ASP
	page, the contents of the ASP script file are returned to the browser instead of
	the processed results of the ASP page. This problem occurs on Simplified
	Chinese, Traditional Chinese, Pan Chinese, Japanese, and Korean versions of IIS
	4.0, and the English version of IIS 4.0 if a Far East language pack is installed
	and set as the system default locale from the Regional Settings in Control
	panel.
	
	
	RESOLUTION
	==========
	
	For Internet Information Server 4.0:
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0
	service pack. For additional information, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, this fix is also available from the following Internet
	location as Fesrci.exe (x86) and Fesrca.exe (Alpha) for IIS 4.0 and Fesrc3i.exe
	(x86) and Fesrc3a.exe (Alpha) for IIS 3.0:
	
	NOTE: The IIS 4.0 fixes were updated on July 7, 1999 so that the fix will install
	on computers running Windows NT 4.0 Service Pack 5.
	
	- English
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/security/fesrc-fix/
	
	- German
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/ger/security/fesrc-fix/
	
	- Japanese
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/jpn/security/fesrc-fix
	
	- Korean
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/kor/security/fesrc-fix/
	
	- Simplified Chinese
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/chs/security/fesrc-fix/
	
	- Traditional Chinese
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/cht/security/fesrc-fix/
	
	
	For Internet Information Server 3.0:
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0
	service pack. For additional information, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, this fix is also available from the following Internet
	location as Fesrci.exe (x86) and Fesrca.exe (Alpha) for IIS 4.0 and Fesrc3i.exe
	(x86) and Fesrc3a.exe (Alpha) for IIS 3.0:
	
	NOTE: The IIS 3.0 version requires Windows NT 4.0 Service Pack 5.
	
	- English
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/security/fesrc-fix/
	
	- Japanese
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/jpn/security/fesrc-fix
	
	- Korean
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/kor/security/fesrc-fix/
	
	- Pan-Chinese
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/chp/security/fesrc-fix/
	
	- Simplified Chinese
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/chs/security/fesrc-fix/
	
	- Traditional Chinese
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/cht/security/fesrc-fix/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	versions 3.0 and 4.0. This problem was first corrected in Windows NT 4.0 Service
	Pack 6a.
	
	Additional query words: iisscript asp
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : winnt:3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
