---
layout: page
title: "Q202455: HOWTO: Get Disk Free Space Using the GetDiskFreeSpaceEx() API"
permalink: /kb/202/Q202455/
---

## Q202455: HOWTO: Get Disk Free Space Using the GetDiskFreeSpaceEx() API

{% raw %}

	Article: Q202455
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Win32 API function GetDiskFreeSpace reports the amount of total and free
	disk space available on a computer. However, for disks that are larger than 2
	gigabytes, the GetDiskFreeSpace function may return misleading values. The new
	GetDiskFreeSpaceEx Win32 API function returns correct values for all disks,
	including those that are larger than 2 GB. GetDiskFreeSpaceEx returns values for
	the total amount of space, the total amount of free space, and the total amount
	of free space available to the user associated with the calling thread.
	
	This article provides sample code that uses this new function to obtain disk
	space information for any disk.
	
	MORE INFORMATION
	================
	
	GetDiskFreeSpaceEx is supported on Windows NT 4.0 or later and Windows 95 OSR2
	or later. It is not supported on Windows CE. Your code can determine whether the
	GetDiskFreeSpaceEx function is available by checking to see if it is exported by
	Kernel32. For additional information, see the "Remarks" section for
	GetDiskFreeSpaceEx in the MSDN Library.
	
	Example of How to Get Disk Space Information by Using GetDiskFreeSpaceEx
	------------------------------------------------------------------------
	
	1. Create a Standard EXE project in Microsoft Visual Basic. Form1 is created by
	  default.
	
	2. Add a TextBox control to Form1.
	
	3. Paste the following code into the Form1 module:
	
	  Private Declare Function GetDiskFreeSpaceEx Lib "kernel32" _
	      Alias "GetDiskFreeSpaceExA" (ByVal lpDirectoryName As String, _
	      lpFreeBytesAvailableToCaller As Currency, _
	      lpTotalNumberOfBytes As Currency, _
	      lpTotalNumberOfFreeBytes As Currency) As Long
	
	  Private Sub Form_Click()
	      Dim Status As Long
	      Dim TotalBytes As Currency
	      Dim FreeBytes As Currency
	      Dim BytesAvailableToCaller As Currency
	      
	      Status = GetDiskFreeSpaceEx(Text1.Text, BytesAvailableToCaller, _
	        TotalBytes, FreeBytes)
	      If Status <> 0 Then
	          MsgBox Format(TotalBytes * 10000, "#,##0"), , "Total Bytes"
	          MsgBox Format(FreeBytes * 10000, "#,##0"), , "Free Bytes"
	          MsgBox Format(BytesAvailableToCaller * 10000, "#,##0"), , _
	            "Bytes Available To Caller"
	      End If
	  End Sub
	
	4. Press F5 to run the program.
	
	5. Type "C:" (without the quotation marks) in the text box, and then click the
	  form. The message boxes will display values for the total space, free space,
	  and free space available to the user associated with the calling thread.
	
	NOTE: If you enter a directory on the disk of interest in the text box as a
	Universal Naming Convention (UNC) name, you must terminate it with a backslash.
	For example, "\\MyServer\MyShare" must be specified as "\\MyServer\MyShare\".
	You can specify any directory on the disk. If you do not specify a directory,
	GetDiskFreeSpaceEx returns information about the disk that contains the current
	directory.
	
	REFERENCES
	==========
	
	MSDN Library; Platform SDK; Base Services; Files and I/O; File I/O; File I/O
	Reference; File I/O Functions; GetDiskFreeSpace
	
	MSDN Library; Platform SDK; Base Services; Files and I/O; File I/O; File I/O
	Reference; File I/O Functions; GetDiskFreeSpaceEx
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q153091 HOWTO: Find and View the Amount of Free Disk Space on a Drive
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
