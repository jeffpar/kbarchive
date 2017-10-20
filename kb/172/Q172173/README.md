---
layout: page
title: "Q172173: BUG: Stopping IIS WWW Service Causes Application Error"
permalink: /kb/172/Q172173/
---

## Q172173: BUG: Stopping IIS WWW Service Causes Application Error

{% raw %}

	Article: Q172173
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbvfp
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Stopping the WWW Publishing service in Internet Information Server (IIS) 3.0
	after loading an Active Server Pages (ASP) page that instantiates a Visual
	FoxPro automation server causes an application error in Inetinfo.exe.
	
	This error only occurs with in-process automation servers (DLL). Out-of- process
	automation servers (EXE) do not cause the error.
	
	The Internet Information Server is only supported currently on Windows NT 4.0,
	Service Pack 2 and above.
	
	RESOLUTION
	==========
	
	Use an out-of-process automation server (EXE) instead of the in-process
	automation server (DLL).
	
	NOTE: In order for the ASP Page to access the Out of Process Server you will need
	to set the 'AllowOutOfProcCmpnts' Windows registry entry to a value of '1'.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: Following these steps will result in a crash on the IIS server.
	
	  It is recommended that you save all data before proceeding with these steps.
	
	1. Follow the steps in the following Knowledge Base article to create the Visual
	  FoxPro automation server and the Active Server Page in accordance with the
	  following article:
	
	  Q168053 HOWTO: Visual FoxPro Automation Servers and Active Server Pages
	
	2. Start the Internet Service Manager on the IIS Server.
	
	3. Access the Active Server Page using your Web browser.
	
	4. Stop the WWW Publishing Service.
	
	
	Additional query words: IIS ASP OLE
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
