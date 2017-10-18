---
layout: page
title: "Q49871: PRB: Mixing Case of LINK Option Causes Error L1093 or D4002"
permalink: kb/049/Q49871/
---

## Q49871: PRB: Mixing Case of LINK Option Causes Error L1093 or D4002

	Article: Q49871
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC200 kbVC400
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When specifying linker options from the CL command line, the word "link" must be
	in all lowercase letters. If the word "link" is not all lowercase, the error
	that occurs is either:
	
	  Command line warning D4002 : ignoring unknown flag '-xxxx'
	
	  -or-
	
	  LINK : fatal error L1093: xxxx.OBJ : object not found
	
	NOTE: xxxx is the four letters keyed in after the "/" (forward slash) or the "-"
	(hyphen).
	
	RESOLUTION
	==========
	
	Retype the command line, ensuring "link" is typed in all lowercase letters.
	
	MORE INFORMATION
	================
	
	For example, issuing the following command from the MS-DOS, OS/2, or Windows NT
	command prompt
	
	     cl myfile.c /Link mylib.lib
	
	produces the following error:
	
	  Command line warning D4002 : ignoring unknown flag '-Link'
	
	Additional query words: 8.00 8.00c 9.00 \* Swept by: v-aarod, 9/4/95 kbsweptvc50 rodneyr 7/24/97
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
