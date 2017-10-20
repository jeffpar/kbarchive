---
layout: page
title: "Q310423: PRB: SET FOXPROSWX= in Autoexec.bat File Causes Errors in VFP 6."
permalink: /kb/310/Q310423/
---

## Q310423: PRB: SET FOXPROSWX= in Autoexec.bat File Causes Errors in VFP 6.

{% raw %}

	Article: Q310423
	Product(s): Microsoft FoxPro
	Version(s): 6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp600 kbGrpDSFox kbDSupport kbvfp700
	Last Modified: 31-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following errors:
	
	- When you start Visual FoxPro (VFP) 6.0 or Visual FoxPro 7.0, you receive the
	  following error:
	
	  File '-x.prg' does not exist.
	
	  The error can appear with any of the following letters as part of the missing
	  program file name: K, -E, -R, +R, -X, +X, -Y, -M, and ?.
	
	-or-
	
	- When you create an executable file and try to start it, you receive the
	  following error:
	
	  No PARAMETER statement is found.
	
	CAUSE
	=====
	
	The Autoexec.bat file contains the following line:
	
	  SET FOXPROSWX= -X
	
	FOXPROSWX is an MS-DOS environment variable used in FoxPro 2.6. Valid switches
	for this environment variable are -C, -T, -K, -E, -R, +R, -X, +X, -Y, -M, and
	/?.
	
	The error shown in the "Summary" section reflects the first letter assigned to
	the FOXPROSWX variable. The -C and -T switches do not cause the error because
	they are valid switches in Visual FoxPro.
	
	RESOLUTION
	==========
	
	Remove any reference to the FOXPROSWX environment variable from the Autoexec.bat
	file.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open or create an Autoexec.bat file on a computer that has VFP 6.0 or VFP 7.0
	  installed.
	
	2. In the Autoexect.bat file, add the following line:
	
	  SET FOXPROSWX= -X
	
	  and then save the Autoexec.bat file. Restart the computer.
	
	3. After the computer restarts, start VFP 6.0 or VFP 7.0. The following error
	  appears:
	
	  File '-x.prg' does not exist.
	
	To reproduce the error with the executable, follow these steps:
	
	1. Follow steps 1 and 2 in the previous list.
	
	2. Create a simple executable in either VFP 6.0 or VFP 7.0 and compile it.
	
	3. Try to start the newly created executable and the following error appears:
	
	  No PARAMETER statement is found.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp600 kbGrpDSFox kbDSupport kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP700
	Version           : :6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
