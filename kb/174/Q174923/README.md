---
layout: page
title: "Q174923: HOWTO: Use the PostData Parameter in WebBrowser Control"
permalink: /kb/174/Q174923/
---

## Q174923: HOWTO: Use the PostData Parameter in WebBrowser Control

{% raw %}

	Article: Q174923
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:1.0,3.0,3.01,3.02,4.0,4.01,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft ActiveX SDK, version 1.0 
	- Microsoft Internet Explorer versions 3.0, 3.01, 3.02, 4.0, 4.01 for Windows 95 
	- Microsoft Internet Client SDK, versions 4.0, 4.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WebBrowser control has a Navigate method with PostData as a parameter. This
	allows the user to post data to the specified URL with the WebBrowser control.
	
	MORE INFORMATION
	================
	
	Navigate specifications:
	
	  Navigates to the resource identified by a Universal Resource Locator (URL),
	  or to the file identified by a full path.
	
	Syntax:
	
	     object.Navigate URL [Flags,] [TargetFrameName,] [PostData,] [Headers]
	
	PostData Optional:
	
	Data to send to the server during the HTTP POST transaction. For example, the
	POST transaction is used to send data gathered by an HTML form. If this
	parameter does not specify any post data, the Navigate method issues an HTTP GET
	transaction. This parameter is ignored if URL is not an HTTP URL.
	
	NOTE: The post data specified by PostData is passed as a SAFEARRAY structure. The
	variant should be of type VT_ARRAY and point to a SAFEARRAY. The SAFEARRAY
	should be of element type VT_UI1, dimension one, and have an element count equal
	to the number of bytes of post data.
	
	Sample to PostData to URL server
	--------------------------------
	
	1. Start Visual Basic. If Visual Basic is already running, choose New Project
	  from the File menu (ALT, F, N). Form1 is created by default.
	
	2. Add a WebBrowser control (WebBrowser1) to Form1.
	
	3. Add a CommandButton (Command1) to Form1.
	
	4. Add the following code to the Command1_Click event of Form1:
	
	        Sub Command1_Click()
	           Dim URL As String
	           Dim Flags As Long
	           Dim TargetFrame As String
	           Dim PostData() As Byte
	           Dim Headers As String
	
	           URL = "http://YourServer" ' A URL that will accept a POST
	           Flags = 0
	           TargetFrame = ""
	
	           PostData = "Information sent to host"
	
	           ' VB creates a Unicode string by default so we need to
	           ' convert it back to Single byte character set.
	           PostData = StrConv(PostData, vbFromUnicode)
	
	           Headers = "Content-Type: application/x-www-form-urlencoded" & _
	              vbCrlf
	           WebBrowser1.Navigate URL, Flags, TargetFrame, PostData, Headers
	        End Sub
	
	5. Press the F5 key to run the program and the information in the PostData
	  variable will be sent to the server specified in the URL parameter.
	
	Additional query words: POST Navigate kbdsi kbDSupport kbVBp kbVBp500 kbVBp600 kbIndetDev400 
	kbIE300 kbIE301 kbIE302 kbIE400 kbIE401
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbSDKSearch kbSDKActiveXsearch kbIE95Search kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch kbIE300Win95 kbIE301Win95 kbIE302Win95 kbIE400Win95 kbIE401Win95 kbSDKIClient400 kbSDKIClient401 kbSDKActiveX kbIClientSearch
	Version           : WINDOWS:1.0,3.0,3.01,3.02,4.0,4.01,5.0,6.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
