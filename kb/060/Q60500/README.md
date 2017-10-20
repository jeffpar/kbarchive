---
layout: page
title: "Q60500: How to Abort Compilation When Using PWB"
permalink: /kb/060/Q60500/
---

## Q60500: How to Abort Compilation When Using PWB

{% raw %}

	Article: Q60500
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	This article discusses how to a compile that is in progress when using the
	Programmer's WorkBench (PWB).
	
	- Under MS-DOS (or the OS/2 3.x compatibility box), use CTRL+C to abort.
	
	- Under OS/2, use "Arg Meta Compile" to abort a compilation taking place in the
	  background.
	
	  The default keystrokes for Arg Meta Compile are ALT+A F9 CTRL+F3.
	
	- You can also create a macro and assign it to a key to abort the compile
	  process. Below is a sample macro that you could place in your TOOLS.INI file
	  under the [pwb] tag.
	
	     [pwb]
	     Abort:=Arg Meta Compile
	     Abort:Ctrl+F5
	
	NOTE: In either OS/2 or MS-DOS, the ESC key will not abort a compilation.
	
	Additional query words: kbinf 1.00 1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}
