---
layout: page
title: "Q165335: Active Server Pages: Progressive Memory Leak"
permalink: kb/165/Q165335/
---

## Q165335: Active Server Pages: Progressive Memory Leak

	Article: Q165335
	Product(s): Internet Information Server
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 3.0 
	- Microsoft Active Server Pages 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are running Active Server Pages version 1.0b on Microsoft Internet
	Information Server (IIS) version 3.0, and you are storing objects in the
	Application scope, you may experience performance problems and increased memory
	usage by IIS.
	
	CAUSE
	=====
	
	These performance problems are caused by a memory leak in the Asp.dll file when
	you give objects an application scope. You can confirm this resource leak with
	Performance Monitor.
	
	RESOLUTION
	==========
	
	A hotfix has been posted to the following Internet location. You can download
	the self-extracting files from the following service:
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the bussys/winnt/winnt-public/fixes/usa/
	  nt40/hotfixes-postsp3/asp-fix/ folder.
	  Get Readme.1st (for instructions on downloading and installing the hotfix)
	
	  -or-
	
	- Use the following full URL on your client browser:
	
	  FTP://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/
	  nt40/hotfixes-postSP3/asp-fix/readme.1st
	
	NOTE: This fix is only for Active Server Pages (ASP) version 1.0b. ASP 1.0b is
	the double-byte character enabled version of ASP that is now available via web
	download or in the Microsoft Windows NT Service Pack 3. (The version number on
	the Asp.dll file in 1.0b is: 1.15.14.0)
	
	REFERENCES
	----------
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q150934 : How to Create a Performance Monitor Log for NT Troubleshooting
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Active Server Pages
	version 1.0b.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbiisSearch kbAudDeveloper kbASPsearch kbiis300
	Version           : :3.0
	
	=============================================================================
	
