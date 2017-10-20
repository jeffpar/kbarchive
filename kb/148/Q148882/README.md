---
layout: page
title: "Q148882: PRB: Visual C++ 4.0 or 4.1 Setup Fails to Copy Shared DLLs"
permalink: /kb/148/Q148882/
---

## Q148882: PRB: Visual C++ 4.0 or 4.1 Setup Fails to Copy Shared DLLs

{% raw %}

	Article: Q148882
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Visual C++ 4.x in either Windows 95 or Windows NT, it is
	possible for setup to fail while copying certain shared DLLs. The DLLs that
	don't copy successfully will most likely be one of these:
	
	  MSVCRT20.DLL   MSVCRT40.DLL
	  ODBCCP32.DLL   ODBC32.DLL    ODBCINT.DLL
	
	When setup fails, it displays a dialog box that looks similar to this:
	
	  
	
	  Setup cannot open the destination file
	  'C:\Windows\System\Msvcrt20.dll'. The file may be in use by
	  another application, or marked read-only. Close the application
	  or change the file's read-only attribute and try again.
	
	-or-
	
	  
	
	  Cannot install file C:\Windows\System\Odbc32.dll. It might be
	  in use. Try closing all applications and choosing Retry.
	
	Both dialog boxes offer a chance to Abort, Retry, or Ignore.
	
	CAUSE
	=====
	
	Many applications use shared DLLs. If the setup program tries to copy a DLL over
	another DLL that has the same name while that DLL is in use by another program,
	the setup program will fail.
	
	For example, the Windows 95 Explorer uses Msvcrt20.dll, so if the Explorer is not
	closed before running Visual C++ 4.x setup, you could see the problem. You may
	also see the problem when running The Internet Information Server as it also
	uses some of these DLLs.
	
	RESOLUTION
	==========
	
	
	Here are several possible resolutions:
	
	1. The best resolution is to make sure no other applications are running when
	  you install Visual C++ 4.x. To do this, close all applications, and check the
	  task list to make sure nothing is running. Under Windows 95, you can make
	  sure other processes are not running by restarting your computer; hold down
	  the SHIFT key as Windows 95 restarts to bypass the startup group.
	
	2. An additional workaround is to start Visual C++ Setup in the following
	  manner:
	
	   - Under Windows 95:
	
	     Close all applications including Explorer. Run setup from an MS-DOS window.
	     If you are installing from the network, map to that drive.
	
	   - Under Windows NT 3.51:
	
	     Close all applications. Run setup from File Manager or a DOS window.
	
	3. If all applications are closed, but the error still occurs, make sure that
	  you close the Master Setup window; it uses Msvcrt20.dll.
	
	4. If the problem persists, it is generally safe to click Ignore, and continue
	  with the installation. However, remember to manually copy the files from the
	  Visual C++ CD-ROM that failed to copy during the setup.
	
	5. Another slightly riskier way to work around the problem is to rename the
	  offending DLL from the system directory. Once the installation completes,
	  restart your computer to cause the new version to be loaded.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
