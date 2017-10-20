---
layout: page
title: "Q188720: PRB: Error Executing ~vcecho!Compiling"
permalink: /kb/188/Q188720/
---

## Q188720: PRB: Error Executing ~vcecho!Compiling

{% raw %}

	Article: Q188720
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kbide kbVC500
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	You may get one of the following error messages while building a project in the
	Developer Studio:
	
	  Error spawning cl.exe
	
	  -or-
	
	  Error executing ~vcecho!Compiling.
	
	  -or-
	
	Or, you might get an application error dialog box with the message:
	
	  The instruction at "0x500af8b4" referenced memory at
	  "0x00000000". The memory could not be "read".
	
	  Click on OK to terminate application
	  Click on CANCEL to debug the application
	
	Developer Studio hangs after this error, regardless of the action you take.
	
	MORE INFORMATION
	================
	
	If you get one of the above errors, use the following steps to ensure that your
	computer has the correct settings:
	
	1. In Microsoft Developer Studio, on the Tools menu, click Options, then click
	  the Directories tab. In the "Show directories for" drop-down list box, select
	  Executable Files. The following paths should be listed, where drive C is the
	  installation drive:
	
	  If installed on Windows NT:
	
	     C:\Program Files\DevStudio\SharedIDE\BIN
	     C:\Program Files\DevStudio\VC\BIN
	     C:\Program Files\DevStudio\VC\BIN\WINNT
	
	  If installed on Windows 95:
	
	     C:\Program Files\DevStudio\SharedIDE\BIN
	     C:\Program Files\DevStudio\VC\BIN
	     C:\Program Files\DevStudio\VC\BIN\WIN95
	
	2. The "COMSPEC" environment variable should have the following value:
	
	  If installed on Windows NT:
	
	        COMSPEC=%SYSTEMROOT%\CMD.EXE
	
	  To view and modify the COMSPEC environment variable in the NT Operating
	  System, in Control panel, double-click the System icon, then click the
	  Environment tab. The COMSPEC variable should be in the System Variables box.
	  You can add or modify a variable using the Variable and Value edit box.
	
	  If installed on Windows 95:
	
	        COMSPEC=%WINDIR%\COMMAND.COM
	
	  In Windows 95, type SET in a DOS window; you will see the environment
	  variables. Add or modify an environment variable by adding a SET command to
	  the Autoexec.bat file, and rebooting.
	
	3. If none of the above steps resolves the issue, make sure that installed
	  Windows CE components are installed under a user account with administrative
	  privileges.
	
	4. If none of the above steps work, then uninstall Windows CE components (if
	  installed) and uninstall Visual C++ 5.0. After uninstalling, delete the
	  ..\DevStudio directory in the installed drive, saving any user-created
	  projects before deleting. Then delete the following registry keys if they
	  still exist.
	
	     HKEY_CURRENT_USER\Software\Microsoft\DevStudio
	     HKEY_CURRENT_USER\Software\Microsoft\Infoviewer\5.0
	     HKEY_LOCAL_MACHINE\Software\Microsoft\DevStudio
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Infoviewer\5.0
	
	  Then reinstall Visual C++ version 5.0. Verify that this installation works
	  before installing any Windows CE components.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Note that you should back up the registry before you edit it.
	  If you are running Windows NT, you should also update your Emergency Repair
	  Disk (ERD).
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q165792 MSDEV.EXE Application Error When Building an Application
	
	======================================================================
	Keywords          : kbide kbVC500 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
