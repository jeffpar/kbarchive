---
layout: page
title: "Q173009: FIX: Run-Time Error 87 Using RegEnumValue Function"
permalink: /kb/173/Q173009/
---

## Q173009: FIX: Run-Time Error 87 Using RegEnumValue Function

{% raw %}

	Article: Q173009
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400bug kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to call the RegEnumValue API from Visual Basic or Visual Basic
	for Applications code, you may receive the following error:
	
	  Error 87 - Invalid Parameter
	
	This problem occurs if you are running the Windows NT 4.0 or Windows 2000
	Operating Systems and you have obtained the declaration for the RegEnumValue API
	from Visual Basic's API Text Viewer program.
	
	CAUSE
	=====
	
	The Declare statement for RegEnumValue in Visual Basic's API Text Viewer is
	incorrect.
	
	RESOLUTION
	==========
	
	The declaration of RegEnumValue as it currently exists in the API Text Viewer
	is:
	
	     Declare Function RegEnumValue Lib "advapi32.dll" Alias "RegEnumValueA" _
	        (ByVal hKey As Long, ByVal dwIndex As Long, ByVal lpValueName As _
	        String, lpcbValueName As Long, lpReserved As Long, lpType As Long, _
	        lpData As Any, lpcbData As Long) As Long
	
	The fifth parameter, lpReserved, should be defined as ByVal. The correct
	declaration is:
	
	     Declare Function RegEnumValue Lib "advapi32.dll" Alias "RegEnumValueA" _
	        (ByVal hKey As Long, ByVal dwIndex As Long, ByVal lpValueName As _
	        String, lpcbValueName As Long, ByVal lpReserved As Long, lpType As _
	        Long, lpData As Any, lpcbData As Long) As Long
	
	You can also change the statement in the file win32api.txt so the next time you
	use the API Text Viewer, the Declare statement will be correct.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	REFERENCES
	==========
	
	An updated version of the Win32API.txt file is available for download for
	registered users of Visual Basic. For more information about downloading this
	file, please see the following Knowledge Base article:
	
	  Q178020 : FILE: WIN32API.EXE: Updated Version of Win32api32.txt File
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400bug kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbVBA500Search
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
