---
layout: page
title: "Q176419: FIX: Inet Control Method OpenURL Fails If No Proxy Selected"
permalink: /kb/176/Q176419/
---

## Q176419: FIX: Inet Control Method OpenURL Fails If No Proxy Selected

{% raw %}

	Article: Q176419
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Internet Client SDK, version 4.0 
	- Microsoft Internet Explorer (Programming) version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Internet Explorer 4.0 option "Access the Internet using a proxy server"
	check box is not selected when using the Internet Transfer control "OpenUrl"
	method within an HTML page, then the OpenURL method will fail.
	
	CAUSE
	=====
	
	The problem is inherited from a bug in the Internet Explorer 4.0 WinInet API
	function InternetOpenUrl. The problem occurs only on computers that have
	Internet Explorer 4.0 installed, rather than Internet Explorer 3.x.
	
	RESOLUTION
	==========
	
	Using the Inet control "Execute" method with the "GET" verb retrieves a file if
	the "Access the Internet using a proxy server" check box is not selected. The
	complete HTML code page is shown later in the MORE INFORMATION section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Internet Explorer 4.01.
	The problem should not occur on systems that have this installed.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Internet Explorer 4.0.
	
	2. From the View menu, select Internet Options.
	
	3. Click the Connection tab.
	
	4. Clear the "Access the Internet using a proxy server" check box.
	
	5. Put the code below in a HTML page.
	
	6. Bring up the HTML page you just created in Internet Explorer 4.0.
	
	7. Enter the URL you want to access.
	
	8. Click the "Test Me with OpenUrl" command button. The OpenUrl method fails.
	
	9. Click the "Test Me with Get" command button. The HTML page is retrieved as
	  expected
	
	NOTE: Using the "Execute" method with the "GET" verb is the workaround to the
	OpenUrl bug.
	
	     <HTML>
	     <BODY>
	
	     <FORM NAME="MyForm">
	      <INPUT TYPE="BUTTON" NAME="MyButton" VALUE="Test Me with OpenUrl">
	      Enter URL you want to access:<INPUT TYPE="TEXT" NAME="MyText" VALUE="">
	      <INPUT TYPE="BUTTON" NAME="Get" VALUE="Test Me with Get">
	     </FORM>
	
	     <OBJECT ID="Inet1"
	      CLASSID="CLSID:48E59293-9880-11CF-9754-00AA00C00908">
	     </OBJECT>
	
	     <SCRIPT Language="VBScript">
	     <!--
	     Sub MyButton_onClick()
	      Response = Inet1.OpenURL(MyForm.MyText.Value)
	      If Inet1.ResponseCode <> 0 Then
	       MsgBox ("ErrorCode: " & Inet1.ResponseCode)
	       MsgBox ("Error: " & Inet1.ResponseInfo)
	      Else
	        MsgBox(Response)
	      End If
	     End Sub
	
	     Sub Get_onClick()
	       Response = Inet1.Execute(MyForm.MyText.Value, "GET")
	       If Inet1.ResponseCode <> 0 Then
	         MsgBox ("ErrorCode: " & Inet1.ResponseCode)
	         MsgBox ("Error: " & Inet1.ResponseInfo)
	       End If
	     End Sub
	
	     Sub Inet1_StateChanged(State)
	
	      Select Case State
	      ' ... Other cases not shown.
	
	      Case 12
	
	           Dim strData: StrData = ""
	           Dim vtData
	           Dim bDone : bDone = 0
	
	          ' Get first chunk.
	          vtData = Inet1.GetChunk(10240, icString)
	
	          Do While bDone = 0
	
	             strData = strData & vtData
	              ' Get next chunk.
	              vtData = Inet1.GetChunk(10240, icString)
	              If Len(vtData) = 0 Then
	                  bDone = 1
	              End If
	
	          Loop
	          MsgBox strData
	      End Select
	
	     end sub
	
	     -->
	     </SCRIPT>
	
	     </BODY>
	     </HTML>
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q176420 : BUG: InternetSetOption Does Not Set Timeout Values
	
	
	Additional query words: kbdsi kbDSupport kbVBpkbVBp500 kbVBp600 kbINetDev kbIE400
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbSDKIESearch kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbSDKSearch kbSDKIE400 kbSDKIClient400 kbIClientSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
