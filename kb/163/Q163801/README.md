---
layout: page
title: "Q163801: PRB: &quot;Error Locating Config File-Bad Path?&quot; in Visual FoxPro"
permalink: kb/163/Q163801/
---

## Q163801: PRB: &quot;Error Locating Config File-Bad Path?&quot; in Visual FoxPro

	Article: Q163801
	Product(s): Microsoft FoxPro
	Version(s): 2.0x,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbenv kbvfp
	Last Modified: 20-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 2.0x 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting Visual FoxPro, the following error can occur:
	
	  "Error locating config file-bad path?"
	
	If starting FoxPro for Windows 2.x, the error will be:
	
	  "Invalid path or file name".
	
	After clicking OK, Visual FoxPro starts and runs properly. FoxPro for Windows 2.x
	will not run, and terminates with a General Protection Fault. When starting an
	executable file built by any of the FoxPro products listed above, one or more of
	the following errors can occur:
	
	  Error locating config file-bad path?
	
	  Invalid path or file name
	
	  A DO dialog box appears
	
	If the .exe file was created in FoxPro for Windows 2.x or Visual FoxPro 3.0, a
	general protection fault can occur after the above errors appear.
	
	CAUSE
	=====
	
	This error message is by design. The problem is the contents of the PATH
	environment variable. The error is most commonly caused by a missing semicolon,
	which divides the directories that make up the Path statement. Other errors in
	the PATH may also cause the error.
	
	RESOLUTION
	==========
	
	Edit the Path statement and add the semicolon. If the operating system is
	Windows 3.1, Windows 95 or Windows 98, the Path statement will be found in the
	Autoexec.bat file. If the operating system is Windows NT, go to the System icon
	in the Control Panel. In Windows NT 4.0, after you open the System icon, select
	the Environment tab then check the contents of the Path variable. Windows NT
	also reads an Autoexec.bat file if one is present. Look for a SET PATH statement
	in the Autoexec.bat file if the Environment tab Path variable does not contain
	any visible problems. Other types of batch files or login scripts may also reset
	the path. You can view the current path by opening a command prompt and typing
	SET PATH.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When FoxPro or an executable file built with FoxPro starts, it looks for a
	Config.fpw file in the home directory. If there is not a Config.fpw file located
	there, it looks along the Path statement. If there is a semicolon missing that
	separates the directories in the path, one or more of the above errors occurs
	because FoxPro cannot continue looking along the path to locate the Config.fpw
	file. There can be an old directory in the path statement that no longer exists
	on the computer and FoxPro ignores it and continues looking in the next
	directory of the path. If no Config.fpw file is found, FoxPro starts without
	one.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Modify the Path statement and remove one of the semicolons that separates the
	  directories.
	
	2. Restart the computer for the changes to take effect.
	
	3. Start FoxPro or an .exe file to receive one or more of the errors listed
	  above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :2.0x,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
