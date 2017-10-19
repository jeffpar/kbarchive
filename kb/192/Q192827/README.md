---
layout: page
title: "Q192827: HOWTO: Get a Short File Name from a Long File Name"
permalink: /kb/192/Q192827/
---

## Q192827: HOWTO: Get a Short File Name from a Long File Name

	Article: Q192827
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Occasionally, it is convenient to be able to convert a Win32 long file name to a
	Win16-style (8.3 format) short file name. For example, file names may need to be
	stored in a table that is shared by both Visual FoxPro and FoxPro for Windows.
	
	This information is stored in the Win32 file system, and can be looked up using
	the GetShortPathName function.
	
	MORE INFORMATION
	================
	
	Enter and run the following program. It creates a file with a long name in the
	FoxPro temporary drive and directory, converts it to a short file name, and
	deletes the file:
	
	     * create a long file name in the FoxPro temp drive and directory
	     lcTempFileName = SYS(2023) + "\" + "this is a very long filename.txt"
	     liHandle = FCREATE(lcTempFileName)
	     = FCLOSE(liHandle)
	
	     ? "Original long filename is: " + lcTempFileName
	     ? "Short filename is: " + lfn2sfn(lcTempFileName)
	
	     * delete when finished
	     DELETE FILE (lcTempFileName)
	
	     FUNCTION lfn2sfn
	     *
	     * Converts a Win32 long file name to its short file name equivalent
	     *
	     * passed: long file name, must already exist for this to work
	     *
	     * returns: fully qualified short file name, or empty string
	     * if error is encountered
	     *
	
	     PARAMETERS lcInputString
	
	     DECLARE INTEGER GetShortPathName IN Kernel32 STRING @lpszLongPath, ;
	        STRING @lpszShortPath, INTEGER cchBuffer
	     DECLARE INTEGER GetLastError IN Win32api
	
	     #DEFINE MAX_PATH 255
	
	     * buffer to receive converted file name
	     lcOutputString = SPACE(MAX_PATH)
	
	     * length of receiving buffer
	     llcbOutputString = LEN(lcOutputString)
	
	     * if successful, llretval will contain the length of the
	     * output string
	     llretval = GetShortPathName(@lcInputString, @lcOutputString,;
	        llcbOutputString)
	     IF llretval = 0
	     * uncomment for error code
	     * wait window "Error occurred, code is: " + ltrim(str(GetLastError()))
	        RETURN ""
	     ENDIF
	
	     * truncate it at the length the return value indicates
	     lcOutputString = LEFT(lcOutputString, llretval)
	
	     RETURN lcOutputString
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q175512 HOWTO: Get a Short Filename from a Long Filename
	
	
	Additional query words: kbDSupport GetShortPathName KBDSE kbAPI kbVFp300b kbVFp500a kbVFp500 kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
