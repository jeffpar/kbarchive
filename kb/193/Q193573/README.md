---
layout: page
title: "Q193573: HOWTO: Determine the Version of a DLL"
permalink: /kb/193/Q193573/
---

## Q193573: HOWTO: Determine the Version of a DLL

	Article: Q193573
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is often necessary to determine the version of a .dll file on a user's
	system, such as when using the common controls. Determining the version of the
	Comctl32.dll file allows the developer to know, for instance, what functionality
	is available at run-time. This article demonstrates how to create and use the
	GetDllVersion() function to determine the version of a .dll file.
	
	MORE INFORMATION
	================
	
	Visual FoxPro 6.0 offers the _fileversion FoxPro Foundation Class, which
	provides this functionality. Alternatively, the AGETFILEVERSION(ArrayName,
	cFileName) function can be used in Visual FoxPro 6.0. Visual FoxPro 5.0 can use
	the GetFileVersion() function in FoxTools. Users of Visual FoxPro 3.0 can use
	the following sample code to obtain the version of a .dll file. Note that this
	function only returns versions in a xx.xx.xxxx format. In other words, the file
	version in Windows Explorer might return a version of 4.72.2106.4, whereas
	GetDllVersion() only returns 4.72.2106.
	
	Save the following program code to a .prg file and run the program:
	
	Sample Code
	-----------
	
	     *-- Code begins here.
	
	     *-- Platform IDs for DLLVERSIONINFO.
	     *-- The Win32 defines are listed here, but cannot be used
	     *-- with Visual FoxPro 3.0 because of the ten character limit.
	     #define DLLVER_PLATFORM_WINDOWS         0x00000001      && Windows 95
	     #define DLLVER_PLATFORM_NT              0x00000002      && Windows NT
	
	     *-- For compatibility with VFP Visual FoxPro 3.0.
	     #define WINDOWS         1      && Windows 95
	     #define NT              2      && Windows NT
	
	     lsReturn = GetDllVersion("comctl32.dll")
	
	     *-- Parse the string.
	     liMajorVersion = StrToLong(SUBSTR(lsReturn, 5, 4))
	     liMinorVersion = StrToLong(SUBSTR(lsReturn, 9, 4))
	     liBuildNumber  = StrToLong(SUBSTR(lsReturn, 13, 4))
	     liPlatform     = StrToLong(SUBSTR(lsReturn, 17, 4))
	
	     *-- Determine the platform.
	     liOS = StrToLong(SUBSTR(lsReturn, 17, 4))
	     IF liOS = WINDOWS
	        lsPlatform = "Windows 9x"
	     ELSE
	        lsPlatform = "Windows NT"
	     ENDIF
	
	     lsVersionInfo = "Version: " + ;
	       ALLTRIM(STR(liMajorVersion,5,0)) + "." + ;
	       ALLTRIM(STR(liMinorVersion,5,0)) + "." + ;
	       ALLTRIM(STR(liBuildNumber,5,0)) + CHR(10) + CHR(13) +;
	       "Platform: " + lsPlatform
	
	     =MESSAGEBOX(lsVersionInfo)
	
	     *--------------------------------------------------------
	     *-- Function:  GetDllVersion()
	     *-- Summary:   Returns the version information for a DLL
	     *-- Usage:     GetDllVersion(<cDllName>)
	     *-- Example:   lsReturn = GetDllVersion("comctl32.dll")
	     *--------------------------------------------------------
	     FUNCTION GetDllVersion()
	     PARAMETERS lsLib
	
	     DECLARE LONG LoadLibrary IN kernel32.DLL STRING @lsLib
	     DECLARE LONG GetProcAddress IN kernel32.DLL LONG, STRING lsFunction
	     DECLARE LONG FreeLibrary IN kernel32.DLL LONG
	     DECLARE LONG DllGetVersion IN (lsLib) STRING @DLLVERSIONINFO
	
	     *-- DLLVERSIONINFO structure is 20 bytes.
	     DLLVERSIONINFO = SPACE(20)
	     hDll = LoadLibrary(@lsLib)
	     IF hDll = 0
	        RETURN ""
	     ENDIF
	
	     pDllVersion = GetProcAddress(hDll, "DllGetVersion")
	
	     IF pDllVersion = 0
	        RETURN ""
	     ELSE
	        lsSize = LongToStr(20)
	        DLLVERSIONINFO = lsSize + SPACE(20 - LEN(lsSize))
	        hResult = DllGetVersion(@DLLVERSIONINFO)
	     ENDIF
	     RETURN DLLVERSIONINFO
	
	     ********************
	     FUNCTION LongToStr()
	     ********************
	     * Passed : 32-bit non-negative numeric value (lnLongval)
	     * Returns : ascii character representation of passed value in low-high
	     * format (lcRetstr)
	     * Example :
	     *   m.long = "999999"
	     *   m.longstr = long2str(m.long)
	
	     PARAMETERS lnLongval
	
	     PRIVATE i, lcRetstr
	
	     lcRetstr = ""
	     FOR i = 24 TO 0 STEP -8
	        lcRetstr = CHR(INT(lnLongval/(2^i))) + lcRetstr
	        lnLongval = MOD(lnLongval, (2^i))
	     NEXT
	     RETURN lcRetstr
	
	     ********************
	     FUNCTION StrToLong()
	     ********************
	     * Passed:  4-byte character string (lcLongstr) in low-high ASCII format
	     * Returns:  long integer value
	     * Example:
	     * m.longstr = "1111"
	     * m.longval = str2long(m.longstr)
	
	     PARAMETERS lcLongstr
	
	     PRIVATE i, lnRetval
	
	     lnRetval = 0
	     FOR i = 0 TO 24 STEP 8
	        lnRetval = lnRetval + (ASC(lcLongstr) * (2^i))
	        lcLongstr = RIGHT(lcLongstr, LEN(lcLongstr) - 1)
	     NEXT
	
	     RETURN lnRetval
	     *-- Code ends here.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Mike
	A. Stewart, Microsoft Corporation.
	
	
	Additional query words: kbVFp300b kbVFp500a kbVFp500 kbAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbhowto
	
	=============================================================================
	
