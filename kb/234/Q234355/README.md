---
layout: page
title: "Q234355: Access Violation On SBS When Client Attempts an FTP Session"
permalink: kb/234/Q234355/
---

## Q234355: Access Violation On SBS When Client Attempts an FTP Session

	Article: Q234355
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Small Business Server client attempts to open an FTP session on a
	computer running Small Business Server and Internet Information Server 4.0, the
	server may present an Exception c0000005 (access violation) error message in
	Inetinfo.exe.
	
	CAUSE
	=====
	
	This error can occur if the FTP service was installed from the Windows NT 4.0
	Option Pack instead of from the Small Business Server install disks.
	
	RESOLUTION
	==========
	
	To resolve this problem, uninstall the FTP service using the Windows NT 4.0
	Option Pack maintenance mode Setup program. To do this:
	
	1. Insert the Windows NT 4.0 Option Pack CD, and then click Install.
	
	2. Click Install NT 4.0 Option Pack, then click Run this program from its
	  current location. You may be presented with a series of warnings, click OK or
	  Yes at each one.
	
	3. From the Microsoft Windows NT Option Pack Setup program dialog box, click
	  Next.
	
	4. Click Add/Remove.
	
	5. Select Internet Information Server, then click Show Subcomponents.
	
	6. Clear the File Transfer Protocol (FTP) Server check box, and then click OK.
	
	7. Click Next, and then click Finish.
	
	MORE INFORMATION
	================
	
	To continue using FTP, install the service from the original Small Business
	Server installation compact disks. For more information about installing the
	service, click the article link below to view the following Microsoft Knowledge
	Base article:
	
	  Q195146 FTP Not Installed by Default in Small Business Server 4.5
	
	Additional query words: smallbiz dr. watson iis
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	
