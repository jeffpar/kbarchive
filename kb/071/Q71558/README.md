---
layout: page
title: "Q71558: ECHO OFF Prevents ANSI Escape Sequences Using PROMPT"
permalink: kb/071/Q71558/
---

## Q71558: ECHO OFF Prevents ANSI Escape Sequences Using PROMPT

	Article: Q71558
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If ECHO is currently OFF in a batch file, ANSI escape sequences cannot be issued
	using the PROMPT $E[... statement. ECHO must be temporarily turned ON, or the
	escape sequences must be issued using ECHO <esc>[..., where <esc> is
	whatever sequence of characters is used by a particular text editor to specify
	an escape character (for example, ^V[ in Edlin).
	
	MORE INFORMATION
	================
	
	When ECHO is OFF in a batch file, command lines in the batch file (including the
	command prompt) are not echoed to the screen. Thus, the command prompt
	containing the desired escape sequence is not echoed to the console, and the
	escape sequence is not issued. If the prompt contains an escape sequence when
	the batch file ends execution, this escape sequence is issued.
	
	If the DOSSHELL command is executed from a batch file with the echo off and
	MS-DOS Shell is then used to execute a batch file that uses PROMPT $E[..., the
	escape sequence is not issued. Shell must first be terminated, either by using
	F3 or by explicitly setting ECHO ON, before the batch file can be used to issue
	escape sequences.
	
	Additional query words: 3.20 3.21 3.30 4.00 4.01a 5.00 5.00a 6.00 6.20 \* testwin4
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
