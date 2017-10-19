---
layout: page
title: "Q162719: HOWTO: Use the WebBrowser Control from Visual Basic 5.0"
permalink: /kb/162/Q162719/
---

## Q162719: HOWTO: Use the WebBrowser Control from Visual Basic 5.0

	Article: Q162719
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbcode kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Explorer 3.0 includes a custom ActiveX control called
	"WebBrowser." When you use WebBrowser in combination with Microsoft Visual Basic
	5.0, you can design powerful custom solutions that include Internet Web browsing
	features. This article illustrates how to use the WebBrowser control within
	Microsoft Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	The following example creates a mini-browser:
	
	1. Create a new Standard .exe project in Microsoft Visual Basic 5.0. Form1 is
	  added automatically.
	
	2. On the Project menu, click Components.
	
	3. Select the Microsoft Internet Controls component. Click OK.
	
	4. Add the following controls to Form1:
	
	  Control           Name
	  --------------    ---------
	  Text Box          Text1
	  Command Button    Command1
	  WebBrowser        WebBrowser1
	
	5. In Form1's code window, add the following code:
	
	       Option Explicit
	
	       Private Sub Command1_Click()
	           If Text1.Text <> "" Then
	               WebBrowser1.Navigate Text1.Text
	               If WebBrowser1.Visible = False Then
	                   WebBrowser1.Visible = True
	               End If
	           End If
	       End Sub
	
	       Private Sub Form_Load()
	           Me.Width = 5325
	           Me.Height = 5400
	           Me.Caption = "Mini browser"
	           With WebBrowser1
	               .Visible = False
	               .Width = 4575
	               .Height = 3375
	               .Top = 600
	               .Left = 240
	           End With
	           With Text1
	               .Top = 240
	               .Left = 1680
	               .Height = 285
	               .Width = 3135
	               .Text = "http://www.microsoft.com"
	           End With
	           With Command1
	               .Top = 120
	               .Left = 240
	               .Height = 375
	               .Width = 1215
	               .Caption = "Navigate"
	               .Default = True
	           End With
	       End Sub
	
	6. On the File menu, click Save Project1.
	
	7. On the Run menu, click Start.
	
	When you click Navigate, the WebBrowser appears and automatically loads the URL
	displayed in the TextBox.
	
	NOTE: Distribution of a Microsoft Visual Basic 5.0 application that uses the
	WebBrowser control requires that Microsoft Internet Explorer 3.0 (or later) be
	installed on the target system prior to installation.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q155969 : How To Distribute the WebBrowser Control
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
