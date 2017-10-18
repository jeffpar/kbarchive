---
layout: page
title: "Q134521: Run Command on Start Menu Does Not Accept Redirection or Pipes"
permalink: kb/134/Q134521/
---

## Q134521: Run Command on Start Menu Does Not Accept Redirection or Pipes

	Article: Q134521
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type a command that contains the pipe symbol (|) or the redirection
	symbols (< or > or >>) in the Open box of the Run command, the
	command is not carried out. For example, if you type the following line
	
	  " MEM | MORE " (without the quotation marks)
	
	you receive the following error message:
	
	  Parse error 4
	
	CAUSE
	=====
	
	Pipes and redirections are handled by Command.com and not by the Run command on
	the Start menu. If you type a pipe or redirection symbol in the Open box of the
	Run command, the symbol is given to the program as a command-line parameter.
	
	In the example above, the MEM program is given a command line of "| more" and
	encounters the parse error because "| more" is not a valid switch.
	
	WORKAROUND
	==========
	
	To pass pipes and redirections to a program, invoke Command.com explicitly by
	typing a line such as the following:
	
	  " COMMAND.COM /c MEM | MORE " (without the quotation marks)
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
