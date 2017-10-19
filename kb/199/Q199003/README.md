---
layout: page
title: "Q199003: PRB: Visual InterDev Permissions for Users Who Are Not Local Adm"
permalink: /kb/199/Q199003/
---

## Q199003: PRB: Visual InterDev Permissions for Users Who Are Not Local Adm

	Article: Q199003
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:1.0,5.0,6.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600 kbVisID _IK
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual InterDev, versions 1.0, 6.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to open an existing Web project in Visual InterDev, the following
	dialog box may appear:
	
	  Title: Name and Password Required:
	
	  Web Application:
	  /<project name>
	
	  UserName: <Domain name>\<Username>
	  Password:
	
	CAUSE
	=====
	
	The directory permissions on the IIS server are not being inherited correctly
	from the root Web.
	
	RESOLUTION
	==========
	
	Go into the project as a Local Admin in Visual InterDev and change the project
	to "use unique permissions" and assign users permission. This ensures that
	permissions are set on the sub Web correctly.
	
	MORE INFORMATION
	================
	
	This problem can happen when permissions used by the FrontPage Server Extensions
	are misconfigured. To reset permission on an entire Web structure, you should
	remove the IUSR_<machinename> account and the Everyone group from any
	access on the entire Web directory structure, use the "check and fix" feature in
	the FrontPage Server Administrator, and then add "Everyone has Browse Access"
	back to the project (if appropriate) in the Web Permissions dialog box of either
	Visual InterDev or FrontPage.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Web project from Visual InterDev 1.0 or 6.0.
	
	2. Add files to the project.
	
	3. Add the project to Visual SourceSafe.
	
	4. Close the project.
	
	5. Using Visual InterDev, connect to the existing project as a user that is not
	  a Local Admin. As the project is connecting, the dialog box described above
	  appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 kbVisID _IK 
	Technology        : kbVisIDsearch kbSSafeSearch kbiisSearch kbAudDeveloper kbiis400 kbVisID100 kbVisID600 kbSSafe600 kbSSafe500
	Version           : WINDOWS:1.0,5.0,6.0; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
