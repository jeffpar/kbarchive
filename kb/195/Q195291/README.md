---
layout: page
title: "Q195291: How to Disable #exec in Server-Side Include Files"
permalink: /kb/195/Q195291/
---

## Q195291: How to Disable #exec in Server-Side Include Files

	Article: Q195291
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For security reasons, Web administrators may want to disable the #exec function
	of Server Side Include (SSI) files.
	
	MORE INFORMATION
	================
	
	IMPORTANT: This article contains information about editing the Microsoft
	Internet Information Server (IIS) metabase. Before you edit the metabase, make
	sure you understand how to restore it if a problem occurs. For information about
	how to do this, view the "Configuration Backup/Restore" Help topic in the
	Internet Information Server snap-in for the Microsoft Management Console (MMC).
	
	Internet Information Server (IIS) versions 3.0 and later allow command- line or
	CGI programs to be executed, and their text output to be returned as Web output.
	This is accomplished through the use of Server-Side Include (SSI) commands. An
	example of this type of command is as follows:
	
	     <html>
	     <html><title>SSI #exec Test</title></head>
	     <body>
	     <pre>
	     <!--#exec cmd="cmd.exe /c dir"-->
	     </pre>
	     </body>
	     </html>
	
	This functionality is enabled by default for the entire Web server. Web
	administrators may want to disable this feature. This is accomplished by
	performing the following steps:
	
	1. On an IIS 4.0 computer with the Windows Script Host (WSH) installed, go to
	  the following directory:
	
	  <%SystemRoot%>\System32\Inetsrv\adminsamples
	
	2. To disable #exec for the entire Web server use the following:
	
	  cscript adsutil.vbs set w3svc/SSIExecDisable 1
	
	  -OR-
	
	  For a specific virtual directory, you can use the following:
	
	  cscript adsutil.vbs set w3svc/xx/root/vv/SSIExecDisable 1
	
	  Where xx = the instance of the Web server and vv = the virtual directory name.
	
	NOTE: This will not effect the #include command.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q203064 IIS: Notes on Server-Side Includes (SSI) Syntax
	
	Additional query words: iis ssi
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
