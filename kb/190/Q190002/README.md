---
layout: page
title: "Q190002: CGI and Perl Applications Do Not Run in a New Console"
permalink: /kb/190/Q190002/
---

## Q190002: CGI and Perl Applications Do Not Run in a New Console

	Article: Q190002
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CGI and Perl applications do not run in a new console.
	
	WORKAROUND
	==========
	
	With the Windows Script Host enabled, start the command prompt and go to the
	following directory:
	
	  <%System_Root%>\System32\Inetsrv\Adminsamples
	
	Then, type the following command:
	
	  adsutil set w3svc/CreateCGIWithNewConsole "1"
	
	MORE INFORMATION
	================
	
	To run CGI applications in Internet Information Server (IIS) 3.0 and earlier,
	"CreateProcessWithNewConsole" was added as a REG_DWORD with a value of "1" to
	the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W3SVC\Parameters
	
	This method does not work in IIS 4.0.
	
	Additional query words: reg akz
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
