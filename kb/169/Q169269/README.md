---
layout: page
title: "Q169269: Creating Virtual Directories with NetWare Share Names"
permalink: /kb/169/Q169269/
---

## Q169269: Creating Virtual Directories with NetWare Share Names

	Article: Q169269
	Product(s): Internet Information Server
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a virtual directory that is mapped to a Novell NetWare 4.x
	Server, you will get the following error message in your browser:
	
	  http:1.0 404 Object not found. The system could not find the path specified.
	
	The following error message can be seen in the Error column, when you type the
	UNC path name of the Novell share for the virtual directory and click OK.
	
	  The system could not find the path specified.
	
	CAUSE
	=====
	
	You do not have the Gateway Services for NetWare installed on the Microsoft
	Windows NT Server and Internet Information Server (IIS).
	
	It does not work if you have the Novell provided NetWare Redirector Client
	installed. You need to remove this and install the Microsoft Gateway Services
	for NetWare.
	
	WORKAROUND
	==========
	
	1. Uninstall the NetWare Redirector provided by Novell.
	
	2. Install the Gateway Services for NetWare from Control Panel, Services.
	
	3. Do not enable the Gateway.
	
	4. When you log in you can choose the NetWare server as your preferred server.
	
	5. Create the Virtual Directory from the WWW Service properties under the
	  Directories tab.
	
	6. Click Add Here and type in the UNC path name in the Directory text box.
	
	  NOTE: Do not map a drive and browse and select the mapped drive. This will not
	  work.
	
	7. Type an Alias name. Click OK.
	
	8. Stop and restart the WWW service.
	
	9. Access this directory from your browser. You should be able to access the
	  page and should not receive any error messages in the browser or in the Error
	  column under the Directories tab of the WWW service properties when you add
	  the NetWare directory.
	
	  NOTE: You should have the user name and password you use to connect to the
	  virtual directory on both the Windows NT Server and NetWare Servers.
	
	MORE INFORMATION
	================
	
	Additional information about virtual directories is available in the IIS online
	documentation and in the Windows NT Server online documentation for the
	installation and configuration of GSNW.
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbiisSearch kbiis300
	Version           : winnt:3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
