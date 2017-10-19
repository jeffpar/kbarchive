---
layout: page
title: "Q256324: PRB: Visual C++ Displays Error for Shsql.dll and Eeswt.dll Files"
permalink: /kb/256/Q256324/
---

## Q256324: PRB: Visual C++ Displays Error for Shsql.dll and Eeswt.dll Files

	Article: Q256324
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbsetup kbVC600 kbDevStudio kbDSupport kbGrpDSTools
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you create, open, or execute a project in Visual C++ version 6.0, the
	following error message is displayed:
	
	  SHSQL.DLL
	
	  This required file cannot be loaded. Please re-install Microsoft Visual C++.
	
	  EESWT.DLL
	
	  This required file cannot be loaded. Please re-install Microsoft Visual C++.
	
	CAUSE
	=====
	
	This behavior occurs because the Visual C++ Enterprise Edition setup fails to
	remove some registry keys. The following are two possible reasons that the
	Visual C++ Enterprise Edition setup fails to remove registry keys:
	
	- Failure with the uninstallation process.
	
	- Visual C++ files and directories have been deleted by the end user.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q248697 HOWTO: Manually Uninstall Visual Studio with MSDN Library
	
	NOTE: If you plan to install the Visual C++ Professional Edition on the same
	computer that is running the Visual C++ Enterprise Edition, then rename or
	delete the following registry key before you install Visual C++ to avoid the
	error messages.
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\shsql.dll
	
	MORE INFORMATION
	================
	
	Both the Shsql.dll file and the Eeswt.dll file are only shipped with the Visual
	C++ Enterprise Edition. If the uninstallation process of the Visual C++
	Enterprise Edition is not complete, then Enterprise-specific registry keys
	remain. The registry keys that remain cause errors with the installation of
	other editions of Visual C++.
	
	NOTE: Always uninstall Visual C++ from the Add/Remove Programs tool in the
	Control Panel. You cannot uninstall Visual C++ if you only delete Visual C++
	files and directories.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVC600 kbDevStudio kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
