---
layout: page
title: "Q192304: HOWTO: Check for a Writeable Drive Under Windows NT"
permalink: kb/192/Q192304/
---

## Q192304: HOWTO: Check for a Writeable Drive Under Windows NT

	Article: Q192304
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One way to check if a program is able to write to a drive is to attempt to
	create a temporary file on the drive. However, under Windows NT, this opens a
	system error dialog box if the drive is write-protected or otherwise not
	available to be written. This article demonstrates how to create and use the
	CheckMediaWrite() function to check if the drive is available for writing.
	
	MORE INFORMATION
	================
	
	Using the SetErrorMode Win32 API function, a program can attempt to create a
	temporary file on a drive without raising an error on Windows NT if the drive is
	not available for writing.
	
	Save the following code to a program file, place a write-protected disk in the
	floppy drive, and run the program.
	
	Sample Code
	-----------
	
	     *-- Code begins here.
	     CLEAR
	
	     *-- Check if floppy drive a: is available for writing
	     *-- and print the results.  Try this twice, once with
	     *-- a write-protected floppy and again with a floppy
	     *-- that is not write-protected.
	     ? CheckMediaWrite("a:")
	
	     *-----------------------------------------------------------------
	     *- Function:    CheckMediaWrite
	     *- Summary:     Checks if the passed drive is available for writing.
	     *- Parameters:  lsDrive - The drive to check.
	     *- Returns:     -1 If drive cannot be written to.
	     *- Example:     liReturn = CheckWrite("a:")
	     *-----------------------------------------------------------------
	     FUNCTION CheckMediaWrite()
	     PARAMETERS lsDrive
	
	     *-- Defines from Winbase.h
	     #DEFINE SEM_FAILCRITICALERRORS      0x0001
	     #DEFINE SEM_NOGPFAULTERRORBOX       0x0002
	     #DEFINE SEM_NOALIGNMENTFAULTEXCEPT  0x0004
	     #DEFINE SEM_NOOPENFILEERRORBOX      0x8000
	
	     *-- Check that the parameter is in the correct format.
	     IF SUBSTR(lsDrive, 2, 1) <> ":" OR ;
	       (ASC(UPPER(SUBSTR(lsDrive, 1, 1))) < 65 OR ;
	       ASC(UPPER(SUBSTR(lsDrive, 1, 1))) > 90)
	         =MESSAGEBOX("Drive must be in the format <drive letter>:", ;
	           0, "Error")
	         RETURN -1
	     ENDIF
	
	     *-- SetErrorMode determines whether the system handles
	     *-- serious errors or whether the program handles them.
	     DECLARE INTEGER SetErrorMode IN win32api INTEGER
	
	     *-- SetErrorMode returns to what the flags were last set.
	     *-- You need to store this in lnResult so that you can set them
	     *-- back the way they were before calling SetErrorMode.
	     *-- Failure to do so can produce unpredictable results
	     *-- when encountering future errors.  SetErrorMode only
	     *-- applies to the current process and therefore only affects
	     *-- the FoxPro program that called SetErrorMode.
	     lnResult = SetErrorMode(SEM_FAILCRITICALERRORS)
	
	     hFile = FCREATE(lsDrive + "\tmp.txt")
	     IF hFile <> -1
	         FCLOSE(hFile)
	         ERASE(lsDrive + "\tmp.txt")
	     ENDIF
	
	     *-- Put things back the way you found them.
	     lnResult = SetErrorMode(lnResult)
	
	     RETURN hFile
	     *-- Code ends here.
	
	A -1 appears on the desktop.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Mike A.
	Stewart, Microsoft Corporation.
	
	
	Additional query words: kbVFp600 kbVFp500a kbVFp500 kbAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
