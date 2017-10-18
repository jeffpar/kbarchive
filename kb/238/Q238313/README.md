---
layout: page
title: "Q238313: PRB:Accessing the Internet Explorer Document Object Model w/ VB"
permalink: kb/238/Q238313/
---

## Q238313: PRB:Accessing the Internet Explorer Document Object Model w/ VB

	Article: Q238313
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbfile kbVBp kbVBp400 kbVBp500 kbWebBrowser kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an article entitled "Accessing the Internet Explorer Document Object Model
	From Visual Basic 5.0", provided with the July 1999 edition of the Microsoft
	Developer Network (MSDN), Figure 4 includes sample code for "Inspecting Elements
	in an HTML Document". When this code executes the following error may occur:
	
	  Run-time error '13':
	  Type mismatch
	
	CAUSE
	=====
	
	The code sample does not correctly handle cases where frames exist on a Web
	page.
	
	RESOLUTION
	==========
	
	The following code replaces the code sample in Figure 4. It modifies the
	RecurseFrames and FillTree procedures to correctly handle cases where frames
	exist on a Web page:
	
	  Option Explicit
	
	  Private Sub cmdBack_Click()
	     On Error Resume Next
	     WebBrowser1.GoBack
	  End Sub
	
	  Private Sub cmdForward_Click()
	     On Error Resume Next
	     WebBrowser1.GoForward
	  End Sub
	
	  Private Sub cmdGo_Click()
	     WebBrowser1.Navigate txtAddress
	  End Sub
	
	  Private Sub Form_Load()
	     WebBrowser1.Navigate "http://www.microsoft.com"
	  End Sub
	
	  Private Sub WebBrowser1_DocumentComplete(ByVal pDisp As Object, _
	     URL As Variant)
	
	     On Error Resume Next
	     If (pDisp Is WebBrowser1.object) Then
	        ' DocumentComplete event is fired for each frame on a page
	        ' this condition means that the main document is fully loaded
	        ' and you can use brwWebBrowser.Document property
	
	        txtAddress = WebBrowser1.LocationURL
	        Me.Caption = WebBrowser1.LocationName
	        txtText = ""
	        tvTreeView.Nodes.Clear
	        RecurseFrames WebBrowser1.Document, Nothing
	     End If
	  End Sub
	
	  Private Sub RecurseFrames(ByVal iDoc As HTMLDocument, _
	     ByVal iNode As Node)
	     Dim I As Integer
	     Dim Range As IHTMLTxtRange
	     Dim Title As String
	     Dim TextInfo As String
	     Dim tvNode As Node
	
	     On Error Resume Next
	
	     Title = iDoc.Title
	     If Title = "" Then
	        Title = iDoc.parentWindow.Name
	        If Title = "" Then Title = iDoc.location
	     End If
	
	     If iNode Is Nothing Then
	        ' if this is the first time, add a root node
	        Set tvNode = tvTreeView.Nodes.Add(, , , Title)
	     Else
	        Set tvNode = tvTreeView.Nodes.Add(iNode.Index, tvwChild, , Title)
	     End If
	
	     TextInfo = "Frame: " & Title & vbCrLf & "{" + vbCrLf
	      
	      ' check to see if the document has a BODY
	     If iDoc.body.tagName = "BODY" Then
	        ' fill the tree with following collections
	        FillTree iDoc, "OBJECT", tvNode, "ActiveX Controls"
	        FillTree iDoc, "A", tvNode, "Anchors"
	        FillTree iDoc, "IMG", tvNode, "Images"
	        FillTree iDoc, "", tvNode, "All"
	
	        ' use the text range object to get text out of BODY
	        Set Range = iDoc.body.createTextRange
	        TextInfo = TextInfo & Range.Text & vbCrLf
	        Set Range = Nothing
	     ElseIf iDoc.frames.length > 0 Then
	        ' fill the tree with each Frame in the
	        ' collection and traverse each Frame
	        For I = 0 To iDoc.frames.length - 1
	           TextInfo = TextInfo & "FRAME: " & _
	              iDoc.frames(I).Document.nameProp & vbCrLf
	           Dim doc As New HTMLDocument
	           Dim eCollection As IHTMLElementCollection
	           Dim uElement As HTMLUnknownElement
	           Set eCollection = iDoc.frames(I).Document.All
	           For Each uElement In eCollection
	              If uElement.tagName = "HTML" Then
	                 doc.All(0).insertAdjacentHTML "BeforeBegin", _
	                    uElement.innerHTML
	                 doc.Title = "Frame: " & _
	                    iDoc.frames(I).Document.nameProp
	                 FillTree doc, "FRAME", tvNode, "FRAME"
	                 RecurseFrames doc, tvNode
	                 Set doc = Nothing
	              End If
	           Next uElement
	        Next I
	     End If
	
	     txtText.Text = txtText.Text & TextInfo & "}" & vbCrLf
	
	  End Sub
	
	  Private Sub FillTree(iDoc As HTMLDocument, iMatchTag As String, _
	    iNode As Node, iCategory As String)
	     Dim Element As Object
	     Dim Info As String
	     Dim tvNode As Node
	     Dim tvCatNode As Node
	
	     On Error Resume Next
	
	     Set tvCatNode = Nothing
	     For Each Element In iDoc.All
	        ' if the tag is the desired tag or all tags are desired
	        If iMatchTag = "" Or Element.tagName = iMatchTag Then
	
	           Info = Element.tagName & " "
	
	           ' display information based on the tagName of the element
	           If Element.tagName = "IMG" Then
	              Info = Info & Element.href
	           ElseIf Element.tagName = "A" Then
	              Info = Info & Element.innerText & _
	                          " (" & Element.href & ")"
	           ElseIf Element.tagName = "INPUT" Then
	              Info = Info & Element.Type
	           ElseIf Element.tagName = "META" Then
	              Info = Info & Element.nodeName
	           ElseIf Element.tagName = "FRAMESET" Then
	              Info = Info & Element.Name
	           ElseIf Element.tagName = "FRAME" Then
	              Info = Info & ": " & Element.src
	           Else
	              Info = Info & Element.Id
	           End If
	
	           If tvCatNode Is Nothing Then
	              ' add the category node if its not there
	              Set tvCatNode = tvTreeView.Nodes.Add(iNode.Index, _
	                 tvwChild, , iCategory)
	           End If
	           Set tvNode = tvTreeView.Nodes.Add(tvCatNode.Index, _
	                        tvwChild, , Info)
	        End If
	        If Element.tagName = "FRAME" Then
	           ' traverse each Frame in the collection
	           Dim I As Long
	           For I = 0 To iDoc.frames.length - 1
	              ' process the current Frame contents
	              If iDoc.frames(I).Document.nameProp _
	                = Element.Document.nameProp Then
	                 Dim doc As New HTMLDocument
	                 Dim eCollection As IHTMLElementCollection
	                 Dim uElement As HTMLUnknownElement
	                 Set eCollection = iDoc.frames(I).Document.All
	                 For Each uElement In eCollection
	                    If uElement.tagName = "HTML" Then
	                       doc.All(0).insertAdjacentHTML "BeforeBegin", _
	                          uElement.innerHTML
	                       doc.Title = "Frame: " & _
	                          iDoc.frames(I).Document.nameProp
	                       RecurseFrames doc, tvNode
	                       Set doc = Nothing
	                    End If
	                  Next uElement
	              End If
	           Next I
	        End If
	     Next
	  End Sub
	
	MORE INFORMATION
	================
	
	Use of the code included in this article is not supported. This sample is not
	supported by Microsoft Corporation. It is provided "AS IS".
	
	REFERENCES
	==========
	
	For more information about this topic, please see the article titled "Accessing
	the Internet Explorer Document Object Model From Visual Basic 5.0" included in
	the July 1999 edition of the Microsoft Developer Network (MSDN). For additional
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q162719 HOWTO: Use the WebBrowser Control from Visual Basic 5.0
	
	Additional query words: vba
	
	======================================================================
	Keywords          : kbfile kbVBp kbVBp400 kbVBp500 kbWebBrowser kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
