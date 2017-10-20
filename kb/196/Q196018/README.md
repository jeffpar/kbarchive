---
layout: page
title: "Q196018: System Preparation Tool Directory Not Deleted Upon Cloning"
permalink: /kb/196/Q196018/
---

## Q196018: System Preparation Tool Directory Not Deleted Upon Cloning

{% raw %}

	Article: Q196018
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft System Preparation tool, Sysprep, the duplicated
	systems still have the Sysprep tools (Sysprep.exe and Setupcl.exe) on the local
	drive. Documentation states that these files will be removed from the directory
	in which Sysprep resides upon completion of the cloning process.
	
	CAUSE
	=====
	
	This problem will happen when the folder in which the Sysprep files were located
	was named something other than Sysprep or was not located on the same volume in
	which the %WINDIR% resides (for example, Winnt, Winnt40, and so on).
	
	RESOLUTION
	==========
	
	Move Sysprep and its associated files to the volume that contains the %WINDIR%
	and ensure that the folder in which Sysprep resides is named Sysprep. However,
	by design, the Setupcl.exe file is placed in the %SystemRoot%\System32 folder
	and will remain after the cloning process has completed.
	
	MORE INFORMATION
	================
	
	For additional information about System Preparation tools and other deployment
	information, please see:
	
	  http://www.microsoft.com/ntworkstation/
	
	Additional query words: sysprep directory remove deploy ghost
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
