---
layout: page
title: "Q183631: INFO: Add a Text File to a VB6 DHTML Page Dynamically"
permalink: /kb/183/Q183631/
---

## Q183631: INFO: Add a Text File to a VB6 DHTML Page Dynamically

	Article: Q183631
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to create a simple DHTML application in Visual
	Basic 6.0 and add a text file from the user's hard drive to the end of the page.
	
	MORE INFORMATION
	================
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN
	RISK. Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	The following sample code takes a text file from the local hard drive on the
	client and appends it to the current DHTML page:
	
	1. Start a new Visual Basic project and select DHTML Application.
	
	2. Open DHTMLPage1 under Designers (Project Explorer).
	
	3. Add a TextField to the page, and set its value property to nothing.
	
	4. Add a Button to the page, and set its value property to "Add File."
	
	5. In the Properties window, select DispIHTMLBodyElement, and set its Id
	  property to "test."
	
	6. For the Button1_OnClick event, add the following code:
	
	        Private Function Button1_onclick() As Boolean
	
	        Dim f As Integer            ' File Handle
	        Dim txt As String           ' Holds text of file for
	                                    ' processing
	        Dim strLoc As Long          ' Holds current location for
	                                    ' INSTR
	
	        f = FreeFile
	
	        If Len(Dir$(TextField1.Value)) > 0 Then
	           Open TextField1.Value For Input As #f
	               txt = Input$(LOF(f), f)
	           Close #f
	          else
	           test.innerHTML = test.innerHTML & "<BR><BR>File Not Found."
	           Exit Function
	        End If
	
	        ' Convert CR/LF to HTML line break (<BR>) tags.
	
	        strLoc = InStr(txt, vbCrLf)
	
	        Do While strLoc <> 0
	           txt = Mid$(txt, 1, (strLoc - 1)) & "<BR>" _
	              & Mid$(txt, strLoc + 2)
	           strLoc = InStr(strLoc + 1, txt, vbCrLf)
	        Loop
	
	        ' Add Contents of Text file to end of DHTML page.
	
	        test.innerHTML = test.innerHTML & "<BR><BR>" & txt
	
	        End Function
	
	
	1. Run the code and type the name of a text file in the text box.
	
	
	REFERENCES
	==========
	
	For more information on DHTML, please refer to the Developing DHTML Applications
	topic in the Microsoft Visual Basic product documentation.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jeremy
	Earp, Microsoft Corporation
	
	Additional query words: web internet ie explorer kbdsi kbDSupport kbVBp kbVBp600 
	kbHTML kbDHTML
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbinfo
	
	=============================================================================
	
