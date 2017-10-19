---
layout: page
title: "Q105043: Maximum Number of Bytes Read Using Low-Level Functions"
permalink: /kb/105/Q105043/
---

## Q105043: Maximum Number of Bytes Read Using Low-Level Functions

	Article: Q105043
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using FoxPro low-level functions to read a file, the maximum number
	of bytes that can be read in is 65,535. If this number is exceeded, error
	message #11 "Invalid function argument value, type or count" will be generated.
	
	MORE INFORMATION
	================
	
	The number of bytes read is for a single command only, which means a file of
	greater size can be read but the number of bytes read at one time can not exceed
	65,535. This can be demonstrated with the following example. After the error
	message is generated, the user may choose Ignore to continue with the program
	execution.
	
	     mchan=FOPEN("C:\any_large_file",12)
	     ? FREAD(mchan,65536)
	     *error message number 11 generated
	     ? FGETS(mchan,65536)
	     *error message number 11 generated
	     ? FREAD(mchan,65535)
	     * or
	     ? FGETS(mchan,65535)
	     * no error is generated
	     ? FCLOSE(mchan)
	
	Additional query words: VFoxWin FoxDos FoxWin errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
