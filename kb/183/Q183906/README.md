---
layout: page
title: "Q183906: BUG: Drag From FileListBox Includes Extra Backslash"
permalink: /kb/183/Q183906/
---

## Q183906: BUG: Drag From FileListBox Includes Extra Backslash

	Article: Q183906
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbControl
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a file is dragged from the FileListBox control, and that file is located in
	the root directory, Visual Basic includes an extra backslash (\) in the file
	path. This may cause one of the following errors on Windows 95, Windows 98, or
	Windows Me:
	
	  Cannot copy file. File System Error (1026)
	
	-or-
	
	  Cannot copy <filename>. Cannot find the specified file. Make sure you
	  specify the correct path and filename.
	
	While no error occurs under Windows NT or Windows 2000, the erroneous backslash
	is still present.
	
	RESOLUTION
	==========
	
	As a workaround, add the following code to your form. The code will intercept
	the Drag operation and remove the extra backslash character. This code assumes
	that the name of the FileListBox is File1:
	
	        Private Sub File1_OLEStartDrag(Data As DataObject, _
	                                           AllowedEffects As Long)
	        Dim FileNames As New Collection
	        Dim vFn As Variant
	
	        'Retrieve current set of files from the file control
	        For Each vFn In Data.Files
	           FileNames.Add vFn
	        Next vFn
	
	        'Clear the list in the data object, and add the corrected files back
	        Data.Files.Clear
	        For Each vFn In FileNames
	           Data.Files.Add RemoveExtraBackslash(vFn)
	        Next vFn
	     End Sub
	
	     Private Function RemoveExtraBackslash(ByVal str$) As String
	        While True
	           Dim i%
	           i = InStr(str, "\\")
	           If i > 0 Then
	              str = Left$(str, i - 1) & Mid$(str, i + 1)
	           Else
	              RemoveExtraBackslash = str
	              Exit Function
	          End If
	        Wend
	     End Function
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a FileListBox and a DirListBox to Form1.
	
	3. Add the following code to Form1:
	
	        Private Sub Dir1_Change()
	           File1.Path = Dir1.Path
	        End Sub
	
	4. Change OLEDragMode property of the FileListBox to 1-Automatic.
	
	5. Start the program and change the path of the DirListBox to C:\.
	
	6. Start Windows Explorer.
	
	7. If you are running Windows 95, Windows 98, or Windows Me, drag one of the
	  files from the FileListBox to any directory in Windows Explorer. You should
	  see an error dialog as described earlier.
	
	8. Drag one of the files from the FileListBox to the Start...Run dialog window.
	  You should see the incorrect path with the extra backslash.
	
	9. Copy the workaround code from the RESOLUTION section into your project and
	  run it again. Drag one of the files from the FileListBox to the Start...Run
	  dialog window. You should see the correct path displayed.
	
	Additional query words: back slash listbox file list box
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
