---
layout: page
title: "Q82292: Example PWB Macro That Works Similar to QuickC DEL Key"
permalink: /kb/082/Q82292/
---

## Q82292: Example PWB Macro That Works Similar to QuickC DEL Key

{% raw %}

	Article: Q82292
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1,2.0; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1, 2.0 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	The Programmer's WorkBench (PWB), which ships with many Microsoft
	languages, has the ability to use user defined macros. This feature
	allows it to emulate some of the keystrokes of other editors.
	
	The following sample macro and key assignment for PWB to emulate the QuickC
	editor's DEL key. If the DEL key is pressed when the cursor is at the end
	of a line, the following line will be moved to the current line.
	
	Place the following macro after the [PWB] tag in the TOOLS.INI file.
	
	Sample Macro
	------------
	
	  ;Macro to delete like QC
	
	  QCdelete:= savecur -> endline meta begline ->nextline restcur left   \ 
	             ->noleft right ->nextline :>noleft delete => :>nextline   \ 
	             down meta begline emacscdel
	
	  QCdelete:del
	
	Additional query words: kbinf 1.00 1.10 2.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB200DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1,2.0; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}
