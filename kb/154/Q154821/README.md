---
layout: page
title: "Q154821: HOWTO: Get Extended File Time Information Using the Win32 API"
permalink: /kb/154/Q154821/
---

## Q154821: HOWTO: Get Extended File Time Information Using the Win32 API

{% raw %}

	Article: Q154821
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 2000, Windows NT, Windows Me, Windows 98, and Windows 95 store
	additional information about a file, including the time and date that the file
	was written to. This information cannot be accessed with the FileDateTime API
	function but can be extracted using a combination of calls to the Windows API.
	This article describes how to accomplish this behavior.
	
	MORE INFORMATION
	================
	
	The creation time and last-written time of files are stored in 32-bit Windows,
	but only the time and date of the last write to the file are accessible directly
	from Visual Basic.
	
	The API function used expects to be passed a system file handle rather than a
	Visual Basic file number. However, due to a limitation in 32-bit Visual Basic,
	the FileAttr function is incapable of returning an operating system file handle
	and API calls must be used to open the file. To obtain this data, do the
	following:
	
	1. Start a new Visual Basic project. Form1 is created by default.
	
	2. Add a text box control to Form1. It is called Text1 by default.
	
	3. Add a CommandButton to Form1. It is called Command1 by default.
	
	4. Add the following code to the General Declarations section of Form1:
	
	     Option Explicit
	
	     Private Const OF_READ = &H0
	     Private Const OF_SHARE_DENY_NONE = &H40
	     Private Const OFS_MAXPATHNAME = 128
	
	     Private Type OFSTRUCTREC
	       cBytes As Byte
	       fFixedDisk As Byte
	       nErrCode As Integer
	       Reserved1 As Integer
	       Reserved2 As Integer
	       szPathName(OFS_MAXPATHNAME) As Byte
	     End Type
	
	     Private Type FILETIMEREC
	       dwLowDateTime As Long
	       dwHighDateTime As Long
	     End Type
	
	     Private Type SYSTEMTIMEREC
	       wYear As Integer
	       wMonth As Integer
	       wDayOfWeek As Integer
	       wDay As Integer
	       wHour As Integer
	       wMinute As Integer
	       wSecond As Integer
	       wMilliseconds As Integer
	     End Type
	
	     Private Declare Function FileTimeToSystemTime Lib "kernel32" _
	       (lpFileTime As FILETIMEREC, lpSystemTime As SYSTEMTIMEREC) As Long
	     Private Declare Function GetFileTime Lib "kernel32" (ByVal _
	       hFile As Long, lpCreationTime As FILETIMEREC, lpLastAccessTime _
	       As FILETIMEREC, lpLastWriteTime As FILETIMEREC) As Long
	     Private Declare Function OpenFile Lib "kernel32" (ByVal lpFileName As _
	       String, lpReOpenBuff As OFSTRUCTREC, ByVal wStyle As Long) As Long
	     Private Declare Function hread Lib "kernel32" Alias "_hread" _
	       (ByVal hFile As Long, lpBuffer As Any, ByVal lBytes As Long) As Long
	     Private Declare Function lclose Lib "kernel32" Alias "_lclose" (ByVal _
	       hFile As Long) As Long
	
	     Sub Form_Load()
	       Command1.Caption = "&Get last write time"
	       Text1.Text = "C:\AUTOEXEC.BAT"
	     End Sub
	
	     Private Sub Command1_Click()
	       Dim sInpFile As String
	       Dim hFile As Integer
	       Dim FileStruct As OFSTRUCTREC
	       Dim iRC As Integer
	       Dim CreationTime As FILETIMEREC
	       Dim LastAccessTime As FILETIMEREC
	       Dim LastWriteTime As FILETIMEREC
	       Dim SystemTime As SYSTEMTIMEREC
	       sInpFile = Trim(Text1.Text)
	       ' Check that the file exists.
	       If Len(Dir(sInpFile)) = 0 Then
	         MsgBox "Can't find the file", vbExclamation
	         Exit Sub
	       End If
	
	       ' Open it to get a stream handle.
	       hFile = OpenFile(sInpFile, FileStruct, OF_READ Or OF_SHARE_DENY_NONE)
	       If hFile = 0 Then
	         MsgBox "Can't open the file", vbExclamation
	         Exit Sub
	       End If
	
	       If GetFileTime(hFile, CreationTime, _
	           LastAccessTime, LastWriteTime) Then
	             ' Massage time into format that we can use.
	         If Not FileTimeToSystemTime(LastWriteTime, SystemTime) Then
	           Print "Year of file  :" & SystemTime.wYear
	           Print "Month of File :" & SystemTime.wMonth
	           Print "Day of File   :" & SystemTime.wDay
	         Else
	           MsgBox "FileTimeToSystemTime Failed"
	         End If
	       Else
	         MsgBox "GetFileTime Failed"
	       End If
	
	       iRC = lclose(hFile)
	     End Sub
	
	5. Press the F5 key or click Play to run the program. Type a file name in the
	  text box, including path if necessary, and then click the CommandButton.
	
	Note that the last written time is returned. The code could be extended to return
	the Time information as well as the Date information shown. These values are
	returned in the SYSTEMTIME record.
	
	The FAT and New Technology file systems support the file creation, last access,
	and last write time values. Under Windows 95, the precision of the time for a
	file in a FAT file system is 2 seconds. The time precision for files in other
	file systems, such as those connected through a network, depends on the file
	system but may also be limited by the remote device.
	
	REFERENCES
	==========
	
	The Win32 SDK has additional information about the APIs used in the code above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
