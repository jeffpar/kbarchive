---
layout: page
title: "Q170513: DOC: PRF1301 Using Sample Command &quot;FTIME test.exe&quot;"
permalink: kb/170/Q170513/
---

## Q170513: DOC: PRF1301 Using Sample Command &quot;FTIME test.exe&quot;

	Article: Q170513
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS: 5.0; WINDOWS NT: 5.0 6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbdocerr kbDocs kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may receive error PRF1301 when you start the sample FTIME.BAT by syntax
	"FTIME test.exe" as described in Help.
	
	MORE INFORMATION
	================
	
	The Help section "Using PROFILE, PREP, and PLIST" states:
	
	  "If the preceding batch file was named FTIME.BAT, and you wanted to profile
	  the program TEST from the Profile dialog box, you would select the Custom
	  option, and then specify FTIME.BAT in the Custom Settings box. If you wanted
	  to profile the TEST program from the command prompt, you would type: FTIME
	  TEST.EXE"
	
	If you use the sample batch file from Help, the following error message appears:
	
	  PREP : fatal error PRF1301: file "test.exe" has an incorrect (old) signature
	
	NOTE: The sample code in Help is different than the ftime.bat shipped with Visual
	C++ 5.0. If you invoke the shipped FTIME.BAT with FTIME test.exe, the following
	error message appears instead:
	
	  PREP : fatal error PRF1011: cannot open file test.exe.exe
	
	The paragraph should read as follows:
	
	  "If the preceding batch file was named FTIME.BAT, and you wanted to profile
	  the program TEST from the Profile dialog box, you would select the Custom
	  option, and then specify FTIME.BAT in the Custom Settings box. If you wanted
	  to profile the TEST program from the command prompt, you would type: FTIME
	  TEST"
	
	REFERENCES
	==========
	
	TITLE: "Using PROFILE, PREP, and PLIST"
	URL: mk:@ivt:vccore/F33/D36/S4D18E.HTM
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbdocerr kbDocs kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS: 5.0; WINDOWS NT: 5.0 6.0
	
	=============================================================================
	
