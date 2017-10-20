---
layout: page
title: "Q92793: WFWG: Exiting from Shell Does Not Exit Windows for Workgroups"
permalink: /kb/092/Q92793/
---

## Q92793: WFWG: Exiting from Shell Does Not Exit Windows for Workgroups

{% raw %}

	Article: Q92793
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some shell programs may not behave correctly when you run them with Windows for
	Workgroups; when you exit these shell programs, you may not exit Windows. In
	this situation, the correct behavior for a shell program is to exit windows.
	
	An example of a shell program is Windows Program Manager. When you exit Program
	Manager, you also exit Windows.
	
	MORE INFORMATION
	================
	
	In Windows version 3.0, an application determines that it is the shell by
	checking the number of tasks that are currently running. Because Windows for
	Workgroups starts some tasks before the shell, this manner of determining shell
	status does not work. To correctly determine shell status, applications should
	check the "shell=" line in the [boot] section of SYSTEM.INI file.
	
	For information about how your shell determines shell status, contact the
	supplier of your shell program.
	
	WORKAROUND
	==========
	
	1. Create a directory called WINDOWS\WFWINIT.
	
	2. Copy the following files from your WINDOWS directory to the newly created
	  WINDOWS\WFWGINIT directory:
	
	  PRINTMAN.EXE
	  CLIPSRV.EXE
	  NETDDE.EXE
	
	3. Delete or rename the original files.
	
	4. Create program items in your startup group that start each of these files
	  from the WINDOWS\WFWGINT directory.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
