---
layout: page
title: "Q197158: FORTRAN Carriage Control or FORTRAN Control Code"
permalink: /kb/197/Q197158/
---

## Q197158: FORTRAN Carriage Control or FORTRAN Control Code

{% raw %}

	Article: Q197158
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Print jobs from computer systems running the UNIX operating system and its
	derivatives are commonly text based. These may print with a single unexpected
	character in the first column. This character is a FORTRAN control code. In a
	network trace, it will come across as an "r" option, but at the client console
	interface level, it is also commonly called the -f or -cc option.
	
	MORE INFORMATION
	================
	
	RFC 1179 for LPR printing dated August 1990 has a section defining suggested
	behavior for line printer daemon (LPD) servers if they support FORTRAN codes.
	See the quoted text below.
	
	7.26 r - File to print with FORTRAN carriage control codes
	
	     +---+------+----+
	     | r | file | LF |
	     +---+------+----+
	     Command code - 'r'
	     Operand - File to print
	
	  This command causes the data file to be printed, interpreting the first
	  column of each line as FORTRAN carriage control. The FORTRAN standard
	  limits this to blank, "1", "0", and "+" carriage controls. Most FORTRAN
	  programmers also expect "-" (triple space) to work as well.
	
	Microsoft has not implemented this functionality in its implementation of the LPD
	server.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q124735 Windows NT LPD Server Implements LPR Control Characters
	
	  Q124734 Text of RFC1179 Standard for Windows NT TCP/IP Printing
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
