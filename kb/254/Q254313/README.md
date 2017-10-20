---
layout: page
title: "Q254313: Err Msg: Active Server Pages Error 'ASP 0203' Invalid Code"
permalink: /kb/254/Q254313/
---

## Q254313: Err Msg: Active Server Pages Error 'ASP 0203' Invalid Code

{% raw %}

	Article: Q254313
	Product(s): Internet Information Server
	Version(s): 2.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbASP kbASPObj kbOSWinNT400 kbOSWin2000 kbWebServer kbGrpDSASP kbLocalization kbDSuppor
	Last Modified: 15-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	- Microsoft Active Server Pages, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use a session.codepage or @codepage directive in an Active
	Server Pages (ASP) page that is hosted on a Microsoft Internet Information
	Server (IIS) 4.0 Web server, the following error message may occur:
	
	  Active Server Pages error 'ASP 0203'
	  Invalid Code Page
	  /ProjectName/PageName.asp, line 1
	  The specified code page attribute is invalid.
	
	If the ASP page is hosted on a Microsoft Internet Information Services 5.0 Web
	server, the following error message may occur:
	
	  Active Server Pages, ASP 0203 (0x80004005)
	  The specified code page attribute is invalid
	
	CAUSE
	=====
	
	Code pages have been disabled for Internet Information Server 4.0 since Windows
	NT 4.0 Service Pack 4 because of truncation issues, which caused characters
	larger then 2 bytes to be truncated. This created a problem with some
	double-byte character sets (DBCS), such as Japanese, that have characters that
	extended beyond 2 bytes in size. In Internet Information Services 5.0, the
	utf16(1200) and unicodeFFFE(1201) code pages are disabled.
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	To work around this issue, try the following:
	
	- If you are running Internet Information Server 4.0, upgrade to Internet
	  Information Services 5.0. The following Unicode code pages are valid in
	  Internet Information Services 5.0:
	
	  65000 - utf-7
	  65001 - utf-8
	
	- Instead of using Unicode, develop your Web site to be language-specific by
	  using the appropriate character set in the client HTML. For a complete list
	  of available HTML character sets and ASP code pages, see the following
	  Microsoft Web site:
	
	  http://msdn.microsoft.com/workshop/Author/dhtml/reference/charsets/charset4.asp
	
	  Sample Code:
	
	  <%@ Language=VBScript CODEPAGE=932%>
	  <%Session.Codepage=932%>
	  <!-- This is for the Japanese code page -->
	  <HTML>
	  <HEAD>
	  <META NAME="GENERATOR" Content="Microsoft Visual Studio 6.0">
	  <META HTTP-EQUIV="Content-Type" CONTENT="text/html; CHARSET=shift_jis">
	  </HEAD>
	  <BODY>
	  </BODY>
	  </HTML>
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	
	1. Host an ASP page on a computer that is running Internet Information Server
	  4.0 or Internet Information Services 5.0.
	
	2. Add the following code to the page:
	
	  <%@ Language=VBScript codepage=1200%>
	  <!-- This is for the UTF 16 code page -->
	  <HTML>
	  <HEAD>
	  <META NAME="GENERATOR" Content="Microsoft Visual Studio 6.0">
	  <META HTTP-EQUIV="Content-Type" CONTENT="text/html; CHARSET=utf16">
	  </HEAD>
	  <BODY>
	  </BODY>
	  </HTML>
	
	3. Save the page, and then view the page in the browser.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q232580 INF: Storing UTF-8 Data in SQL Server
	
	Additional query words: code pages localization international 0203 (0x80004005)
	
	======================================================================
	Keywords          : kbASP kbASPObj kbOSWinNT400 kbOSWin2000 kbWebServer kbGrpDSASP kbLocalization kbDSupport 
	Technology        : kbiisSearch kbAudDeveloper kbASPsearch kbiis500 kbiis400
	Version           : :2.0,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
