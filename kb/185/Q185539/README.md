---
layout: page
title: "Q185539: HOWTO: Create a Web Aware UserControl"
permalink: /kb/185/Q185539/
---

## Q185539: HOWTO: Create a Web Aware UserControl

	Article: Q185539
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers the creation of a Web-aware Usercontrol that downloads
	images from a public site from the Internet.
	
	MORE INFORMATION
	================
	
	This example shows how you can create controls that are Web-aware:
	
	1. Start Visual Basic and select the ActiveX Control (this creates a Usercontrol
	  project) in the New Project dialog box. Add a picture control and a label to
	  the Usercontrol project making sure to place the label above the picture
	  control. Add the following code:
	
	        Option Explicit
	        Const vbAsyncTypePicture = 0
	
	        Private Sub UserControl_AsyncReadComplete(AsyncProp As
	        AsyncProperty)
	          On Error Resume Next
	          Set Picture1.Picture = AsyncProp.Value
	        End Sub
	
	        Private Sub UserControl_Initialize()
	        'PLEASE NOTE:
	        'The URL could be in the form of a shared directory,
	        'FTP or a HTTP.  The convention below, is used as
	        'an example only. Do not try to use this URL as it is
	        'in fact bogus.
	         UserControl.AsyncRead _
	           "http://example.microsoft.com/example.jpg", _
	            vbAsyncTypePicture
	        End Sub
	
	2. Add a Caption to the label:
	
	        Label1.Caption = "Image View"
	
	3. Rename the project to something other than Project1 and create the control by
	  compiling to an OCX.
	
	4. Start a new standard exe project and add the new control to it. When you
	  place the control on the form, the image automatically appears.
	
	You could just as easily add a timer to this project, and use it to change the
	image number. You could also use a public variable that would enable your
	control to communicate with the form and change the image from outside the
	control.
	
	REFERENCES
	==========
	
	Visual Basic 5.0 Online Help; search on: "UserControls"
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Richard T.
	Edwards, Microsoft Corporation
	
	
	Additional query words: Internet programming kbDsupport KbDSe kbVBp500 kbVBp500 KBiNTERNET
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
