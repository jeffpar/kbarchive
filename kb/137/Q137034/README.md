---
layout: page
title: "Q137034: PRB: Win32 GetTempFileName API Differs From 16-bit"
permalink: /kb/137/Q137034/
---

## Q137034: PRB: Win32 GetTempFileName API Differs From 16-bit

{% raw %}

	Article: Q137034
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbAPI kbVBp kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the GetTempFileName API function on a 32-bit platform, one of the
	following symptoms may appear:
	
	- The function passes back a null parameter for the filename and returns 0.
	  This is more likely to happen in Windows NT.
	
	- The function passes back a pathname without a filename and returns 0. This
	  more likely to happen in Windows 95 or Windows 98.
	
	GetTempFileName is an API function used to create a temporary filename. Although
	this function is supported on both 16-bit and 32-bit platforms, minor
	differences in its calling conventions exist. Additionally, when used with a
	32-bit platform such as Windows 95 or Windows NT, GetTempFileName might fail.
	This article discusses the function's cross-platform portability and explains
	the cause and resolution of its failure on 32-bit platforms.
	
	CAUSE
	=====
	
	Contrary to its usage on 16-bit platforms where only the drive letter is passed,
	GetTempFileName requires you to pass the drive letter and the pathname when used
	on 32-bit platforms. Furthermore, the pathname specified must contain existing
	directories. For example, examine the following function declarations:
	
	- For 16-bit platforms such as Windows 3.1 and Windows for Workgroups:
	
	     Declare Function GetTempFileName Lib "Kernel" (ByVal cDriveLetter as _
	        Integer, ByVal lpPrefixString As String, ByVal wUnique As Integer, _
	        ByVal lpTempFileName As String) As Integer
	
	- For 32-bit platforms such as Windows NT, Windows 95, or Windows 98:
	
	     Private Declare Function GetTempFileName Lib "kernel32" _
	        Alias "GetTempFileNameA" (ByVal lpszPath As String, _
	        ByVal lpPrefixString As String, ByVal wUnique As Long, _
	        ByVal lpTempFileName As String) As Long
	
	Notice how the first parameter is the only parameter that changes in the
	declarations. In 16-bit, the first parameter is an integer representing a drive
	letter. The pathname is specified by the function not by the user (see the
	Visual Basic 3.0 Windows 3.1 SDK help file for more information).
	
	In 32-bit, however, the first parameter is a string that gives the pathname. So
	if you were to cease a temporary file in the C drive root directory, the first
	parameter will be assigned a different value for each case:
	
	- For 16-bit: cDriveLetter = 2 (Integer representation of drive C)
	
	- For 32-bit: lpszPath = "C:\"
	
	If lpszPath is an invalid path or if it contains a nonexistent directory,
	GetTempFileName will pass back the lpTempFileName parameter with a null value or
	with a pathname only. The return value of the function in both cases will be
	zero.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce and Resolve Behavior
	---------------------------------------
	
	1. Create a new project in 32-bit Visual Basic 4.0. Form1 is created by default.
	
	2. Copy the following code into the General Declarations section of Form1:
	
	     Private Declare Function GetTempFileName Lib "kernel32" _
	        Alias "GetTempFileNameA" (ByVal lpszPath As String, _
	        ByVal lpPrefixString As String, ByVal wUnique As Long, _
	        ByVal lpTempFileName As String) As Long
	
	     Private Sub Form_Click()
	        Dim lpszPath As String
	        Dim lpPrefixString As String
	        Dim wUnique As Long
	        Dim lpTempFileName As String
	
	        ' Because the C:\windows directory, probably, doesn't exist,
	        ' using this line will cause the problem to occur:
	        lpszPath = "C:\windows"     ' Line A
	
	        ' To resolve the problem, change the previous line into a comment
	        ' and change the following line from a comment into an executed line:
	        ' lpszPath = "C:\windows"    ' Line B
	
	        lpPrefixString = "shn"
	
	        ' If wUnique is nonzero, it will be appended
	        ' to the temporary filename. If the parameter is zero,
	        ' Windows uses the current system time to create a
	        ' number to append to the filename.
	        wUnique = 0
	
	        ' Initialize variable
	        lpTempFileName = Space$(100)
	        Print GetTempFileName(lpszPath, lpPrefixString,_
	           wUnique, lpTempFileName)
	
	        ' If running under Windows 95 or Windows 98, use the following line
	        ' to get rid of the null character
	        ' Print Mid$(lpTempFileName, 1, InStr(lpTempFileName, Chr$(0)) - 1)
	        Print lpTempFileName
	     End Sub
	
	3. Start the program by pressing the F5 key.
	
	4. Notice how the problem is reproduced. Change Line A into a comment and make
	  Line B into an executed line. Then repeat step 3. The problem should now
	  disappear.
	
	Additional query words: kbdsd
	
	======================================================================
	Keywords          : kbAPI kbVBp kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
