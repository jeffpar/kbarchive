---
layout: page
title: "Q200649: HOWTO: Use LZCopy to Copy Files"
permalink: /kb/200/Q200649/
---

## Q200649: HOWTO: Use LZCopy to Copy Files

	Article: Q200649
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbFileIO kbSDKWin32 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use the LZOpenFile, LZCopy, and LZClose
	functions from the LZ Expand/Compress library (LZ32.dll). You can use these
	functions to make a copy of an existing file. The LZCopy function creates a
	decompressed destination file if the source file is compressed with the
	Microsoft File Compression Utility (Compress.exe).
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	These steps demonstrate how to use the functions from the LZ Expand/Compress
	library to copy files to and from locations on a local or network drive.
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add two Labels, two TextBoxes, and a CommandButton to Form1.
	
	3. Position Label1 and Label2 above Text1 and Text2, respectively.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Const OF_CREATE = &H1000
	  Const OF_READ = &H0
	  Const OFS_MAXPATHNAME = 128
	
	  Private Type OFSTRUCT
	      cBytes As Byte
	      fFixedDisk As Byte
	      nErrCode As Integer
	      Reserved1 As Integer
	      Reserved2 As Integer
	      szPathName(OFS_MAXPATHNAME) As Byte
	  End Type
	
	  Private Declare Sub LZClose Lib "lz32.dll" _
	          (ByVal hfFile As Long)
	  Private Declare Function LZCopy Lib "lz32.dll" _
	          (ByVal hfSource As Long, ByVal hfDest As Long) As Long
	  Private Declare Function LZOpenFile Lib "lz32.dll" Alias "LZOpenFileA" _
	          (ByVal lpszFile As String, lpOf As OFSTRUCT, ByVal style As Long) _
	          As Long
	
	  Public Sub CopyFile(Source As String, Destination As String)
	      Dim hsource As Long
	      Dim hdest As Long
	      Dim iret As Long
	      Dim OpenStruct As OFSTRUCT
	
	      ' Open the source and destination files.
	      hsource = LZOpenFile(Source, OpenStruct, OF_READ)
	      hdest = LZOpenFile(Destination, OpenStruct, OF_CREATE)
	      ' Copy the source file to the destination location, and
	      ' decompress the Source file if it was compressed.
	      iret = LZCopy(hsource, hdest)
	      ' Close the files.
	      LZClose hdest
	      LZClose hsource
	      If iret = -1 Then
	          MsgBox "File transfer failed"
	      Else
	          MsgBox "Transfer successful: " _
	          & Format$(iret, "###,###,###,###") _
	          & " bytes were transferred."
	      End If
	  End Sub
	
	  Private Sub Command1_Click()
	      CopyFile Text1.Text, Text2.Text
	  End Sub
	
	  Private Sub Form_Load()
	      Label1.Caption = "Source Directory and Filename"
	      Label2.Caption = "Target Directory and Filename"
	      Command1.Caption = "Copy"
	  End Sub
	
	5. Run the project. In the Source TextBox, type the full path and file name of
	  the file that you want to copy.
	
	6. In the Target TextBox, type the full path and file name of the destination
	  file, and then click Copy.
	
	7. In Windows Explorer, confirm that the file copied successfully.
	
	REFERENCES
	==========
	
	For more information about these functions, see the following MSDN
	documentation:
	
	  LZOpenFile
	  http://msdn.microsoft.com/library/psdk/winbase/datadcmp_1tyd.htm
	
	  LZCopy
	  http://msdn.microsoft.com/library/psdk/winbase/datadcmp_9b3t.htm
	
	  LZClose
	  http://msdn.microsoft.com/library/psdk/winbase/datadcmp_8skl.htm
	
	Additional query words: decompress
	
	======================================================================
	Keywords          : kbAPI kbFileIO kbSDKWin32 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2 kbWord600Mac kbGraph500
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
