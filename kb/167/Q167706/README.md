---
layout: page
title: "Q167706: FIX: Internet Transfer Control 5.0 &quot;POST&quot; Request Doesn't Work"
permalink: /kb/167/Q167706/
---

## Q167706: FIX: Internet Transfer Control 5.0 &quot;POST&quot; Request Doesn't Work

	Article: Q167706
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Transfer Control 5.0 "POST" request does not work as described in
	the documentation provided by Microsoft. The input data parameter of the Execute
	method is not being sent correctly to the web server when "POST" is specified.
	
	RESOLUTION
	==========
	
	The Internet Transfer Control 5.0 "POST" request does not work from Visual Basic
	5.0. You need to use the WinInet APIs that are included with the ActiveX SDK to
	PostData to your server. Specifically, the InternetOpen, InternetConnect,
	HttpOpenRequest, and HttpSendRequest are the WinInet APIs you need to use. In
	the sample code below, you will connect to //webserver then post to page
	/generic.asp.
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. Add the following code to the general declarations section of Form1:
	
	        Private Declare Function InternetOpen Lib "wininet.dll" _
	           Alias "InternetOpenA" _
	           (ByVal lpszCallerName As String, _
	            ByVal dwAccessType As Long, _
	            ByVal lpszProxyName As String, _
	            ByVal lpszProxyBypass As String, _
	            ByVal dwFlags As Long) As Long
	
	        Private Declare Function InternetConnect Lib "wininet.dll" _
	           Alias "InternetConnectA" _
	           (ByVal hInternetSession As Long, _
	            ByVal lpszServerName As String, _
	            ByVal nProxyPort As Integer, _
	            ByVal lpszUsername As String, _
	            ByVal lpszPassword As String, _
	            ByVal dwService As Long, _
	            ByVal dwFlags As Long, _
	            ByVal dwContext As Long) As Long
	
	        Private Declare Function HttpOpenRequest Lib "wininet.dll" _
	           Alias "HttpOpenRequestA" _
	           (ByVal hInternetSession As Long, _
	            ByVal lpszVerb As String, _
	            ByVal lpszObjectName As String, _
	            ByVal lpszVersion As String, _
	            ByVal lpszReferer As String, _
	            ByVal lpszAcceptTypes As Long, _
	            ByVal dwFlags As Long, _
	            ByVal dwContext As Long) As Long
	
	        Private Declare Function HttpSendRequest Lib "wininet.dll" _
	           Alias "HttpSendRequestA" _
	           (ByVal hHttpRequest As Long, _
	            ByVal sHeaders As String, _
	            ByVal lHeadersLength As Long, _
	            ByVal sOptional As String, _
	            ByVal lOptionalLength As Long) As Boolean
	
	        Private Declare Function InternetCloseHandle Lib "wininet.dll" _
	           (ByVal hInternetHandle As Long) As Boolean
	
	3. From the Project menu, choose Components, and then select the Internet
	  Transfer Control 5.0 into the project if it is not already loaded.
	
	4. Place an Internet Transfer Control 5.0 (Inet1) on Form1.
	
	5. Place a CommandButton (Command1) on Form1 and add the following code:
	
	        Private Sub Command1_Click()
	           Dim hInternetOpen As Long
	           Dim hInternetConnect As Long
	           Dim hHttpOpenRequest As Long
	           Dim bRet As Boolean
	
	           hInternetOpen = 0
	           hInternetConnect = 0
	           hHttpOpenRequest = 0
	
	           'Use registry access settings.
	           Const INTERNET_OPEN_TYPE_PRECONFIG = 0
	           hInternetOpen = InternetOpen("http generic", _
	                           INTERNET_OPEN_TYPE_PRECONFIG, _
	                           vbNullString, _
	                           vbNullString, _
	                           0)
	
	           If hInternetOpen <> 0 Then
	              'Type of service to access.
	              Const INTERNET_SERVICE_HTTP = 3
	              Const INTERNET_DEFAULT_HTTP_PORT = 80
	              hInternetConnect = InternetConnect(hInternetOpen, _
	                                 "webserver", _
	                                 INTERNET_DEFAULT_HTTP_PORT, _
	                                 vbNullString, _
	                                 "HTTP/1.0", _
	                                 INTERNET_SERVICE_HTTP, _
	                                 0, _
	                                 0)
	
	              If hInternetConnect <> 0 Then
	                 'Brings the data across the wire even if it locally cached.
	                 Const INTERNET_FLAG_RELOAD = &H80000000
	                 hHttpOpenRequest = HttpOpenRequest(hInternetConnect, _
	                                    "POST", _
	                                    "/generic.asp", _
	                                    "HTTP/1.0", _
	                                    vbNullString, _
	                                    0, _
	                                    INTERNET_FLAG_RELOAD, _
	                                    0)
	
	                 If hHttpOpenRequest <> 0 Then
	                    Dim lpszPostData As String
	                    Dim lPostDataLen As Long
	
	                    lpszPostData = "lname=Doe&fname=John"
	                    lPostDataLen = Len(lpszPostData)
	                    bRet = HttpSendRequest(hHttpOpenRequest, _
	                           vbNullString, _
	                           0, _
	                           lpszPostData, _
	                           lPostDataLen)
	                    'Close all handles
	                    bRet = InternetCloseHandle(hHttpOpenRequest)
	                 End If
	                 bRet = InternetCloseHandle(hInternetConnect)
	              End If
	              bRet = InternetCloseHandle(hInternetOpen)
	           End If
	
	        End Sub
	
	6. From the Run menu, choose Start (ALT, R, S) or press the F5 key to run the
	  program. Press the Command1 button and "lname=Doe&fname=John" will be
	  posted to your server.
	
	  NOTE: You will have to replace //webserver/generic.asp with your server page
	  that is expecting the posted information. You will also need to replace
	  "lname=Doe&fname=John" with the information you want posted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. From the Project menu, choose Components, and select the Internet Transfer
	  Control 5.0 into the project if it is not already loaded.
	
	3. Place an Internet Transfer Control 5.0 (Inet1) on Form1.
	
	4. Place a CommandButton (Command1) on Form1 and add the following code:
	
	        Private Sub Command1_Click()
	           Dim strURL As String, strFormData As String
	           strURL = "http://webserver/generic.htm"
	           strFormData = "fname=randy&lname=morgan"
	           Inet1.Execute strURL, "Post", strFormData, _
	              "Content-Type: application/x-www-form-urlencoded"
	        End Sub
	
	5. From the Run menu, choose Start (ALT, R, S) or press the F5 key to run the
	  program. Press the Command1 button and garbage will be posted to
	  http://webserver/generic.htm.
	
	REFERENCES
	==========
	
	ActiveX SDK
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
