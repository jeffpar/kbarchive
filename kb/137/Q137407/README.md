---
layout: page
title: "Q137407: How to Obtain the Active Drive Letters in a Visual FoxPro App"
permalink: /kb/137/Q137407/
---

## Q137407: How to Obtain the Active Drive Letters in a Visual FoxPro App

	Article: Q137407
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Call the GetLogicalDriveStrings API to get all the drive letters used in the
	active session of Windows NT or Windows 95. This API is not supported in Win32s,
	so it cannot be used when Visual FoxPro is running under Windows 3.x.
	
	MORE INFORMATION
	================
	
	The following code fragment returns an array called aMyarray containing all the
	used drive letters for that session of Windows NT or Windows 95. The code uses
	the GetLogicalDriveStrings Windows API, which is supported under Win32 only, not
	Win32s. The Number of drives is in a variables called NumberOfDrives.
	
	     DECLARE INTEGER GetLogicalDriveStrings IN Win32API as getit;
	         INTEGER nBuffSize, STRING  lpString
	     CLEAR
	     DIMENSION aMyarray(1)
	     lpString=SPACE(200)
	     nBuffSize=LEN(lpString)
	     =getit(nBuffSize,@lpString)
	     NumberOfDrives=OCCURS(":",lpString)
	     DIMENSION aMyarray(NumberOfDrives)
	     FOR  i=1 TO  NumberOfDrives
	        aMyarray(i)=SUBSTR(lpString,AT(":",lpString,i)-1,1)
	     ENDFOR
	
	Additional query words: VFoxWin logical drive list
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
