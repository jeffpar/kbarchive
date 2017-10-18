---
layout: page
title: "Q182033: HOWTO: Use BeforeNavigate2 in VB to Get an Event from HTML"
permalink: kb/182/Q182033/
---

## Q182033: HOWTO: Use BeforeNavigate2 in VB to Get an Event from HTML

	Article: Q182033
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbhowto kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In an HTML page displayed in the WebBrowser control, you can trigger an event in
	the Visual Basic application by using the BeforeNavigate2 event in the
	WebBrowser control. For example, you can have a command button in the HTML page
	that closes the Visual Basic application when clicked.
	
	MORE INFORMATION
	================
	
	1. Create a Standard EXE project from Visual Basic. Form1 is created by default.
	  Add Microsoft Internet Controls to your Project Components.
	
	2. Add a WebBrowser Control from to Form1.
	
	3. Add code for Form1 Load event as follows:
	
	        Private Sub Form_Load()
	            WebBrowser1.Navigate "c:\mytest.htm"
	        End Sub
	
	4. Add code for WebBrowser1 BeforeNavigate2 event as follows:
	
	        Private Sub WebBrowser1_BeforeNavigate2(ByVal pDisp As Object, _
	             URL As Variant, Flags As Variant, _
	             TargetFrameName As Variant, PostData As Variant, _
	             Headers As Variant, Cancel As Boolean)
	
	            Dim Ev As String
	
	            If UCase$(Left$(URL, 6)) = "EVENT:" Then
	                'this is our event, process it and cancel navigation
	                Ev = UCase$(Mid$(URL, 7))
	                Select Case Ev
	                    Case "HELLO"
	                        MsgBox "Hello from VB App"
	                        'set a field on HTML page
	                        WebBrowser1.Document.All("field1").Value = _
	                            "Hello from VB"
	
	                    Case "CLOSE"
	                        If MsgBox("Are you sure you want to exit?", _
	                    vbYesNo) = vbYes Then
	                            End
	                        End If
	                End Select
	                Cancel = True
	            End If
	        End Sub
	
	5. From Notepad, type in the following text and save it as c:\mytest.htm or
	  another location (be sure to use the same location in step 3):
	
	      <HTML><BODY>
	
	        <INPUT type=text name=field1><p>
	        <INPUT type=button name=Hello value="Hello World">
	        <INPUT type=button name=Close value="Close App">
	
	        <SCRIPT LANGUAGE="VBScript">
	        Sub Close_OnClick()
	           location.href = "Event:Close"
	        End Sub
	
	        Sub Hello_OnClick()
	           location.href = "Event:Hello"
	        End Sub
	        </SCRIPT>
	        </BODY></HTML>
	
	6. Run your project from Visual Basic.
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbhowto kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
