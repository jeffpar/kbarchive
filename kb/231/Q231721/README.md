---
layout: page
title: "Q231721: HOWTO: Obtain Files Copied from Windows Explorer"
permalink: /kb/231/Q231721/
---

## Q231721: HOWTO: Obtain Files Copied from Windows Explorer

{% raw %}

	Article: Q231721
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbClipboard kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Windows Explorer is used to cut or copy files, it places information about
	the files in the clipboard. A Visual Basic application can read this information
	from the clipboard and act upon it.
	
	MORE INFORMATION
	================
	
	Step by Step Example
	--------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add a ListBox (List1) and a CommandButton (Command1) control to Form1.
	
	3. Paste the following code into the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Const CF_HDROP = 15
	
	  Private Type POINT
	      x As Long
	      y As Long
	  End Type
	
	  Private Type DROPFILES
	      pFiles As Long
	      pt As POINT
	      fNC As Long
	      fWide As Long
	  End Type
	
	  Private Declare Function GlobalSize Lib "kernel32" _
	     (ByVal hMem As Long) As Long
	  Private Declare Function GlobalLock Lib "kernel32" _
	     (ByVal hMem As Long) As Long
	  Private Declare Function GlobalUnlock Lib "kernel32" _
	     (ByVal hMem As Long) As Long
	
	  Private Declare Function OpenClipboard Lib "user32" _
	     (ByVal hwnd As Long) As Long
	  Private Declare Function CloseClipboard Lib "user32" () As Long
	  Private Declare Function GetClipboardData Lib "user32" _
	     (ByVal wFormat As Long) As Long
	
	  Private Declare Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" _
	     (Destination As Any, Source As Any, ByVal Length As Long)
	
	  Private Sub ShowFilesOnClipboard()
	     Dim lHandle As Long
	     Dim lpResults As Long
	     Dim lRet As Long
	     Dim df As DROPFILES
	     Dim strDest As String
	     Dim lBufferSize As Long
	     Dim arBuffer() As Byte
	     Dim vNames As Variant
	     Dim i As Long
	
	     If OpenClipboard(0) Then
	        lHandle = GetClipboardData(CF_HDROP)
	        ' If you don't find a CF_HDROP, you don't want to process anything
	        If lHandle > 0 Then
	           lpResults = GlobalLock(lHandle)
	           
	           lBufferSize = GlobalSize(lpResults)
	           ReDim arBuffer(0 To lBufferSize)
	           
	           CopyMemory df, ByVal lpResults, Len(df)
	           Call CopyMemory(arBuffer(0), ByVal lpResults + df.pFiles, _
	                           (lBufferSize - Len(df)))
	
	           If df.fWide = 1 Then
	              ' it is wide chars--unicode
	              strDest = arBuffer
	           Else
	              strDest = StrConv(arBuffer, vbUnicode)
	           End If
	           GlobalUnlock lHandle
	           vNames = Split(strDest, vbNullChar)
	           i = 0
	           While Len(vNames(i)) > 0
	              List1.AddItem vNames(i)
	              i = i + 1
	           Wend
	        End If
	     End If
	     CloseClipboard
	  End Sub
	
	  Private Sub Command1_Click()
	     Call ShowFilesOnClipboard
	  End Sub
	
	4. Run the project and use Windows Explorer to select and copy several files.
	
	5. Press Command1 and note that the list of files that you copied is displayed
	  in List1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbClipboard kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
