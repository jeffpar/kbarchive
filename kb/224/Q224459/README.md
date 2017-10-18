---
layout: page
title: "Q224459: BackOffice Web Administrator Links Are Unavailable"
permalink: kb/224/Q224459/
---

## Q224459: BackOffice Web Administrator Links Are Unavailable

	Article: Q224459
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Web Administrator program included with BackOffice Server,
	the Web links to the BackOffice Administrator and Windows NT Administrator Web
	pages may be unavailable. This may occur even though both components are
	installed on the BackOffice Web server.
	
	For example, this behavior may occur when you browse
	http://<servername>/boadmin.
	
	CAUSE
	=====
	
	This behavior occurs when a virtual directory is missing for an administration
	tool.
	
	The BackOffice Web Administration main page checks the virtual directories
	installed on the Web site to determine if a Web tool is installed. If it finds
	the Boadmin virtual directory, it activates the BackOffice Administration link
	on the Web Administration main page; if it finds the Ntadmin virtual directory,
	it activates the Windows NT Administration link. The same behavior applies to
	the Iisadmin virtual directory for the Internet Information Server (IIS)
	Administration link. If the virtual directory is missing for an administration
	tool, the link for that tool is not available on the BackOffice Web
	Administration main page.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	- If the Boadmin and Ntadmin folders do not appear in the default Web site's
	  root folder, reinstall the Web Administrator program. The default path for
	  these folders is Inetpub\Wwwroot.
	
	  To install the Web Administrator program, run Iksetup.exe on BackOffice CD-ROM
	  3 in the Bkoffice\I386 folder. Click to install the Web Administrator
	  program.
	
	- If the Boadmin and Ntadmin folders do appear in the default Web site's root
	  folder, use Microsoft Management Console to check each folder. Both should be
	  physical folders, and should also be virtual directories within IIS. To
	  change the Boadmin and Ntadmin folders to virtual directories:
	
	  1. Right-click the default Web site, point to New, and then click Virtual
	     Directory.
	
	  2. Add Boadmin or Ntadmin as the alias.
	
	  3. Click Next.
	
	  4. Browse to Boadmin or Ntadmin under Inetpub\Wwwroot.
	
	  5. Click Next.
	
	  6. Add the Execute permission to the permissions list, and then click Finish.
	
	If necessary, repeat this process for both Boadmin and Ntadmin.
	If the methods outlined above do not reset the Boadmin settings and the service
	links are still unavailable, you can force the tool that determines which Web
	administration services are installed to return a hard-coded custom list of
	installed Web services. To do this, edit the
	Inetpub\Wwwroot\Boadmin\Common\Include.asp file:
	
	1. Use Notepad to open the Inetpub\Wwwroot\Boadmin\Common\Include.asp file.
	
	2. In Notepad, click Find on the Search menu.
	
	3. In the Search box, type "HasWebAdmin(Comp)" (without the quotation marks). A
	  section of code similar to the following sample is displayed:
	
	  Function HasWebAdmin(Comp)
	  	Select Case Comp
	  		Case BOC_NT_SERVER:
	  			HasWebAdmin = BOAdmin.HasWebAdmin("NT")
	
	  To enable the Windows NT Administrator Web link, change the following line of
	  code. Change from:
	
	  Case BOC_NT_SERVER:
	  HasWebAdmin = BOAdmin.HasWebAdmin("NT")
	
	  Change to:
	
	  Case BOC_NT_SERVER:
	  HasWebAdmin = 1
	
	4. To enable the BackOffice Administrator Web link, change the following line of
	  code. Change from:
	
	  Case BOC_BACK_OFFICE:
	  HasWebAdmin = BOAdmin.HasWebAdmin("BackOffice")
	
	  Change to:
	
	  Case BOC_BACK_OFFICE:
	  HasWebAdmin = 1
	
	5. Save the changes and then quit Notepad.
	
	Additional query words: iis boadmin ntadmin
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
