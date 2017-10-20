---
layout: page
title: "Q67736: PRB: &quot;missing ':' in -&gt;&quot; Caused by Control Character"
permalink: /kb/067/Q67736/
---

## Q67736: PRB: &quot;missing ':' in -&gt;&quot; Caused by Control Character

{% raw %}

	Article: Q67736
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
	
	When invoking the Programmer's WorkBench (PWB), if there is a control character
	at the end of the TOOLS.INI file, [usually a CTRL+Z (ASCII 26) end-of-file
	marker] and you only have a [pwb] tagged section, an error message will appear
	stating "missing ':' in ->". Note that the "->" is the graphic right-arrow
	symbol.
	
	CAUSE
	=====
	
	This is not a problem in the PWB. A control character is a legal macro name. The
	message indicates that a macro definition or key assignment is expected after
	the character. To keep this message from appearing, place the tag
	
	  " [end] " (without the quotation marks)
	
	before the control character at the end of your TOOLS.INI file. With this tag at
	the end of the file, you always suppress the message, even if you edit TOOLS.INI
	with an editor that inserts CTRL+Z's at the end of the file. This is because the
	-> symbol must be within the [pwb] tagged section for this error message to
	be displayed, and the [end] tag forces the -> into its own tagged section.
	
	Simply deleting the control character will work until you edit the file with an
	editor that replaces the CTRL+Z, then this message reappears. This may also
	occur when using the COPY command to concatenate files.
	
	Additional query words: 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}
