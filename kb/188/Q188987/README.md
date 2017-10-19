---
layout: page
title: "Q188987: HOWTO: Determine the Operating System Build Number"
permalink: /kb/188/Q188987/
---

## Q188987: HOWTO: Determine the Operating System Build Number

	Article: Q188987
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbCodeSnippet
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro's OS() function allows you to determine the major and minor
	versions of the host operating system. To determine the operating system build
	number programmatically, you must use the GetVersionEx() application programming
	interface (API) call.
	
	NOTE: The GetVersionEx() function, when run under Visual FoxPro 3.0 or 3.0b on
	16-bit Windows, can return the Win32s version and build numbers.
	
	MORE INFORMATION
	================
	
	Run the following sample program. A message box containing the major and minor
	version, the text name of the host operating system and the build number
	displays. Here is the sample code:
	
	     #DEFINE VER_PLATFORM_WIN32S 0
	     #DEFINE VER_PLATFORM_WIN32_WINDOWS 1
	     #DEFINE VER_PLATFORM_WIN32_NT 2
	     #DEFINE FFFF 65535
	     #DEFINE CR CHR(13)
	
	     DECLARE GetVersionEx IN win32api STRING @OSVERSIONINFO
	     * The OSVERSIONINFO structure is 148 bytes long.
	     m.osversion = long2str(148) + REPLICATE(CHR(0), 144)
	     =GetVersionEx(@m.osversion)
	     m.major = str2long(SUBSTR(m.osversion, 5, 4))
	     m.minor = str2long(SUBSTR(m.osversion, 9, 4))
	     m.build = str2long(SUBSTR(m.osversion, 13, 4))
	     m.platform = str2long(SUBSTR(m.osversion, 17, 4))
	     m.spversion = STRTRAN(SUBSTR(m.osVersion, 21), CHR(0), "")
	
	     m.platformname = ""
	     DO CASE
	     CASE m.platform = VER_PLATFORM_WIN32S
	        m.platformname = "Win32s on Windows 3.1"
	     CASE m.platform = VER_PLATFORM_WIN32_WINDOWS
	        m.platformname = "Win32 on Windows 9x"
	     CASE m.platform = VER_PLATFORM_WIN32_NT
	        m.platformname = "Windows NT/2000"
	     ENDCASE
	
	     * Build must be ANDed with FFFFh per Microsoft Knowledge Base
	     * Article, Q92395.
	     m.build = BITAND(m.build, FFFF)
	     =MESSAGEBOX("Major version:" + STR(m.major) + CR + ;
	     "Minor version: " + STR(m.minor) + CR + ;
	     "Supported platform: " + STR(m.platform) + ;
	     " (" + m.platformname + ")" + CR + ;
	     "Build number: " + STR(m.build) + ;
	     IIF(NOT EMPTY(m.spversion), ;
	         CR + m.spVersion, ""), ;
	         0 + 64 + 0, ;
	        "GetVersionEx() results")
	
	     * Function long2str - convert 4-byte integer into low-high format
	     * Character string.
	     FUNCTION long2str
	     PARAMETERS m.longval
	
	     PRIVATE i, m.retstr
	
	     m.retstr = ""
	     FOR i = 24 TO 0 STEP -8
	        m.retstr = CHR(INT(m.longval/(2^i))) + m.retstr
	        m.longval = MOD(m.longval, (2^i))
	     NEXT
	     RETURN m.retstr
	
	     * Function STR2LONG - convert lo-high ascii character representation
	     * into 4-byte integer.
	     FUNCTION str2long
	
	     PARAMETERS m.longstr
	
	     PRIVATE i, m.retval
	
	     m.retval = 0
	     FOR i = 0 TO 24 STEP 8
	     m.retval = m.retval + (ASC(m.longstr) * (2^i))
	     m.longstr = RIGHT(m.longstr, LEN(m.longstr) - 1)
	     NEXT
	     RETURN m.retval
	     
	
	REFERENCES
	==========
	
	For additional information about checking system versions, please see the
	GetVersion() and GetVersionEx() API documentation in the Windows System
	Information section of the Platform SDK documentation.
	
	
	Additional query words: GetVersionEx kbnokeyword
	
	======================================================================
	Keywords          : kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	
