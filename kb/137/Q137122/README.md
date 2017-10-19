---
layout: page
title: "Q137122: FIX: FOPEN() Does Not Search Path Specified by SET PATH"
permalink: /kb/137/Q137122/
---

## Q137122: FIX: FOPEN() Does Not Search Path Specified by SET PATH

	Article: Q137122
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FOPEN() function fails to find a file in the path specified by the SET PATH
	command.
	
	WORKAROUND
	==========
	
	Place the file to be opened by FOPEN in the Default Directory, or specify the
	file path when passing the filename to FOPEN().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Create and run a program containing this code:
	
	     * Start of program
	     *
	     * This program assumes the existence of the file 'autoexec.bat' in the
	     * c:\ directory.
	     * Example - does not find file
	
	     SET DEFAULT TO c:\temp   && This directory must exist
	     SET PATH TO c:\ 
	     nhand=FOPEN('autoexec.bat')   && Returns -1  -  FOPEN failed
	     ?STR(nhand)+ " In SET PATH"
	
	     * The following command returns 2 for "File not found"
	     ?STR(FERROR()) + " FERROR Code"
	     =FCLOSE(nhand)
	
	     * Workaround 1 - finds file
	
	     SET DEFAULT TO c:\ 
	     nhand2=FOPEN('autoexec.bat')  && FOPEN succeeds in default directory
	     ?STR(nhand2) + " In SET DEFAULT"
	     =FCLOSE(nhand2)
	
	     * Workaround 2 - finds file
	
	     SET DEFAULT TO c:\temp   && This directory must exist
	     nhand3=FOPEN('c:\autoexec.bat')   && FOPEN succeeds with path passed
	     ?STR(nhand3) + " Path explicitly passed to FOPEN"
	     =FCLOSE(nhand3)
	
	        * End of program
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
