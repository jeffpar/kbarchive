---
layout: page
title: "Q131309: PRB: CONFIG.FPW w/ Multiple COMMAND= Lines Runs Only Last One"
permalink: /kb/131/Q131309/
---

## Q131309: PRB: CONFIG.FPW w/ Multiple COMMAND= Lines Runs Only Last One

{% raw %}

	Article: Q131309
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a CONFIG.FPW file contains multiple COMMAND= statements, only the last
	COMMAND= statement is processed.
	
	CAUSE
	=====
	
	Both FoxPro version 2.x and Visual FoxPro process only a single COMMAND= line.
	The last COMMAND= line is the only one processed.
	
	WORKAROUND
	==========
	
	If it is necessary to have multiple commands execute, revise the COMMAND=
	statement to call a program (.PRG file) instead of trying to execute each
	desired command with a separate COMMAND= line.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the following example, the commands issued in CONFIG.FPW attempt to set the
	code page and then display the results of that command. Because only one
	COMMAND= is allowed, the SET CPCOMPILE is not executed.
	
	Contents of CONFIG.FPW:
	
	  codepage = auto
	  COMMAND = SET CPCOMPILE to 437
	  COMMAND = ?set("cpcompile")
	
	To get this to work as intended, revise the CONFIG.FPW to read as follows:
	
	  codepage=auto
	  COMMAND=DO Setup.prg
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
