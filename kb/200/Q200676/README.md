---
layout: page
title: "Q200676: HOWTO: Use the AsyncRead Method to Download Files"
permalink: kb/200/Q200676/
---

## Q200676: HOWTO: Use the AsyncRead Method to Download Files

	Article: Q200676
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbDownload kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Both UserDocument objects and UserControl objects can perform asynchronous file
	reading from local and remote computers. This article demonstrates how to use
	the AsyncRead method of a UserControl to copy a file.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	The following steps demonstrate how to copy a file from an Internet site.
	
	1. Create an ActiveX control project in Visual Basic. UserControl1 is created by
	  default.
	
	2. Add two Label controls, a TextBox control, and a CommandButton control to the
	  UserControl designer.
	
	3. Position Label1 above Text1, and adjust the size of the TextBox control to
	  handle approximately 100 characters.
	
	4. Add the following code to the General Declarations section of UserControl1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	      ' Use the AsyncRead method to copy the file.
	      UserControl.AsyncRead Text1.Text, vbAsyncTypeFile
	  End Sub
	
	  Private Sub UserControl_AsyncReadComplete(AsyncProp As AsyncProperty)
	      ' Yield execution to ensure that the temporary file is written.
	      DoEvents
	      ' Display the copied file name, including its path,
	      ' using the value property of the AsyncProp object.
	      MsgBox Text1.Text & " was copied to: " & AsyncProp.Value
	  End Sub
	
	  Private Sub UserControl_AsyncReadProgress(AsyncProp As AsyncProperty)
	      ' Display the progress of the file copy using the
	      ' BytesRead and BytesMax properties of the AsyncProp object.
	      Label2.Caption = AsyncProp.BytesRead & " of " & AsyncProp.BytesMax & " bytes copied."
	  End Sub
	
	  Private Sub UserControl_Initialize()
	      Command1.Caption = "Copy!"
	      Label1.Caption = "From:"
	      Label2.Caption = ""
	      ' Assign a file to be copied.
	      ' Use the Visual Basic 6.0 run-time files package as a test.
	      Text1.Text = "http://download.microsoft.com/download/vb60pro/install/6/Win98Me/EN-US/VBRun60.exe"
	  End Sub
	
	5. Run the project., In the Project Properties dialog box on the Debugging tab,
	  click OK to start the UserControl1 component. Notice that UserControl1 is now
	  running in a Web browser.
	
	6. Locate a file that you want to copy from a remote computer through HTTP, and
	  type the URL and file name in the TextBox.
	
	7. Click Copy!. A dialog box appears when the copy operation is complete.
	
	REFERENCES
	==========
	
	For more information about UserControl objects, refer to Visual Basic Help, and
	query on "UserControls" (without the quotation marks).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbDownload kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
