---
layout: page
title: "Q76950: BUG: PWB May Hang If &lt;ASSIGN&gt; Pseudofile Not Closed"
permalink: /kb/076/Q76950/
---

## Q76950: BUG: PWB May Hang If &lt;ASSIGN&gt; Pseudofile Not Closed

{% raw %}

	Article: Q76950
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If changes are made to the <ASSIGN> pseudofile and the file is not closed,
	and an operation is performed that requires access to the TOOLS.INI file,
	Microsoft Programmer's WorkBench (PWB) version 1.1 may hang while trying to
	update TOOLS.INI.
	
	CAUSE
	=====
	
	The <ASSIGN> pseudofile is directly linked to the TOOLS.INI file, which is
	located in the directory pointed to by the INIT environment variable. Nondefault
	editor settings are read from the TOOLS.INI file and are written to the
	TOOLS.INI file when changes are made and then the <ASSIGN> file is saved.
	If the <ASSIGN> pseudofile is open, and PWB needs to read information from
	the TOOLS.INI file, PWB may hang.
	
	RESOLUTION
	==========
	
	If changes are made to the <ASSIGN> pseudofile, close the file by choosing
	the Close command from the File menu before accessing any other files or menu
	items.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB version 1.1.
	
	This is not a problem with PWB version 2.0, since pseudo files are no longer
	used.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, follow the instructions below:
	
	1. Start PWB and edit a .C source file.
	
	2. Save the current build options using a name of your choice, by choosing the
	  Save Current Build Options command from the Build Options dialog box under
	  the Options menu.
	
	3. Open the <Assign> pseudofile by choosing the Editor Settings option
	  from the Options menu.
	
	4. Change some value (for example, change Wordwrap from no to yes) and move the
	  cursor off the line, causing the change to become active.
	
	5. Save the editor settings using the Save command from the File menu, but do
	  not close the file.
	
	6. Set the current build options to the ones that you just saved by choose Set
	  Initial Build Options from the Build Options dialog box.
	
	Additional query words: 1.10 buglist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB110DOS
	Version           : MS-DOS:1.1
	
	=============================================================================
	

{% endraw %}
