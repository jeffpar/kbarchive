---
layout: page
title: "Q62170: PRB: Modifying TOOLS.INI May Have No Effect on PWB Environment"
permalink: /kb/062/Q62170/
---

## Q62170: PRB: Modifying TOOLS.INI May Have No Effect on PWB Environment

{% raw %}

	Article: Q62170
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing settings in the TOOLS.INI file to modify the behavior of the
	Programmer's WorkBench (PWB) may not work under certain circumstances. For
	example, if you decide to change the PWB to 50-line mode by setting "height:50"
	in the TOOLS.INI file, it will not work if the PWB was previously used in the
	25- or 43-line mode.
	
	CAUSE
	=====
	
	This is because some environment information is also recorded in the CURRENT.STS
	file, which is read in after the TOOLS.INI file -- overriding the TOOLS.INI
	settings.
	
	RESOLUTION
	==========
	
	The following are three workarounds for this problem:
	
	1. Use the /DS switch when invoking the PWB. This will ignore the CURRENT.STS
	  file. However, this option also causes the current file history (of files
	  being edited) to be ignored.
	
	2. Delete the CURRENT.STS file. This also causes the current list of programs
	  being edited to be ignored.
	
	3. The better option is to select Editor Settings from the Options menu. When
	  the list of editor switch settings appears, it can be changed and saved to
	  the TOOLS.INI file by pressing SHIFT+F2. This will save the settings and
	  cause the selection to take effect.
	
	Additional query words: 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}
