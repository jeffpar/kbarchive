---
layout: page
title: "Q172685: PRB: DISPLAY STATUS Shows Only 210 Characters of SET PATH TO"
permalink: /kb/172/Q172685/
---

## Q172685: PRB: DISPLAY STATUS Shows Only 210 Characters of SET PATH TO

	Article: Q172685
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, Professional Edition, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DISPLAY STATUS shows only 210 characters of the current setting of the SET PATH
	TO statement even though the character limit for SET PATH TO is 255 characters.
	
	RESOLUTION
	==========
	
	Since this problem is fixed in Visual FoxPro 5.0, the best way to avoid it is by
	upgrading to Visual FoxPro 5.0.
	
	MORE INFORMATION
	================
	
	The following sample code when run in Visual FoxPro for Windows version 3.0x
	illustrates the problem:
	
	     ** *** Sample Program - TESTPATH.PRG
	     ** *** Illustrates DISPLAY STATUS string length limit of SET PATH
	
	        CLEAR
	
	  s1="c:\vfp30b;c:\vfp30b\api;c:\vfp30b\api\samples;c:\vfp30b\distrib.src;c:\ 
	  vfp30b\distrib.src\setup;c:\vfp30b\distrib.src\setup\setup16"
	
	  ** *** S2 length = 210 represents maximum length shown as result of
	  DISPLAY STATUS
	
	  s2="c:\vfp30b;c:\vfp30b\api;c:\vfp30b\api\samples;c:\vfp30b\distrib.src;c:\ 
	  vfp30b\distrib.src\setup;c:\vfp30b\distrib.src\setup\setup16;c:\vfp30b\dist
	  rib.src\setup\setup32;c:\vfp30b\distrib.src\system;c:\vfp30b\dis"
	
	  ** *** S3 length = 255 which is maximum string length before giving  ** ***
	  'Syntax Error'
	
	  s3="c:\vfp30b;c:\vfp30b\api;c:\vfp30b\api\samples;c:\vfp30b\distrib.src;c:\ 
	  vfp30b\distrib.src\setup;c:\vfp30b\distrib.src\setup\setup16;c:\vfp30b\dist
	  rib.src\setup\setup32;c:\vfp30b\distrib.src\system;c:\vfp30b\distrib.src\sy
	  stem\system16;c:\vfp30b\distrib.sr"
	
	  ** *** cannot set S4 since it gives syntax error.
	  ** ***
	  s4="c:\vfp30b;c:\vfp30b\api;c:\vfp30b\api\samples;c:\vfp30b\distrib.src;c:\ 
	  vfp30b\distrib.src\setup;c:\vfp30b\distrib.src\setup\setup16;c:\vfp30b\dist
	  rib.src\setup\setup32;c:\vfp30b\distrib.src\system;c:\vfp30b\distrib.src\sy
	  stem\system16;c:\vfp30b\distrib.src"
	
	     ?LEN(s1)
	     SET PATH TO &s1
	     ?"RETURN VALUE OF ?SET('PATH') is:"
	     ?SET("path")
	     DISP STAT
	
	     CLEAR
	     ?" S2 length = "
	     ??LEN(s2)
	     ??"  which is the maximum display length of DISPLAY STATUS"
	     SET PATH TO &s2
	     ?"RETURN VALUE OF ?SET('PATH') is:"
	     ?SET("path")
	     DISP STAT
	
	     CLEAR
	     ?" S3 length = "
	     ??LEN(s3)
	     ??"  which is the maximum length before giving 'Syntax Error'"
	     SET PATH TO &s3
	     ?"RETURN VALUE OF ?SET('PATH') is:"
	     ?SET("path")
	     DISP STAT
	
	     CLEAR
	     ?" S4 cannot be set since it is one greater than s3 (which is "
	     ?? ALLTRIM(STR(LEN(s3)))
	     ??") and would give 'Syntax Error'"
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
