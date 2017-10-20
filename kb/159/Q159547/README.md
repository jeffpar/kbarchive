---
layout: page
title: "Q159547: WD97: Retrieving Settings from Word Dialog Boxes Using OLE"
permalink: /kb/159/Q159547/
---

## Q159547: WD97: Retrieving Settings from Word Dialog Boxes Using OLE

{% raw %}

	Article: Q159547
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbdtacode word8 kbwordvba word97kbfaq
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to retrieve settings from Word dialog boxes using the
	Microsoft Word Visual Basic for Applications Object Library references and the
	GetObject function for OLE Automation.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	To use the following Visual Basic for Applications example, add the Microsoft
	Word 8.0 Object Library as an available reference.
	
	To add Microsoft Word 8.0 Object Library in Microsoft Excel 97, follow these
	steps:
	
	1. In the Visual Basic Editor, click References on the Tools menu to display the
	  References dialog box.
	
	  The References dialog box displays all object libraries and projects that are
	  registered with the operating system.
	
	2. Under Available References, click to select the Microsoft Word 8.0 Object
	  Library check box.
	
	3. Click OK.
	
	The following example obtains the right indent of the current active document.
	
	     Sub GetWordDocIndentSetting()
	        Dim wobj As Word.Application
	        Dim myDialog As Object
	        On Error GoTo ObjErr
	        Set wobj = GetObject("", "Word.Application")
	        If wobj.Documents.Count = 0 Then
	           wobj.Documents.Add
	        End If
	        Set myDialog = wobj.Dialogs(wdDialogFormatParagraph)
	        MsgBox "Right indent = " & myDialog.RightIndent
	     ObjErr:
	        wobj.Quit
	        Set wobj = Nothing
	        Set myDialog = Nothing
	     End Sub
	
	NOTE: When you use the Microsoft Word 8.0 Object Library as a reference, you can
	specify Word constants by name. To obtain a Word constant, you can use the
	Object Browser.
	
	The Object Browser enables you to browse through all available objects in your
	project and see their properties, methods, and events. In addition, you can see
	the procedures and constants that are available from object libraries in your
	project. You can easily display Help as you browse. You can use the Object
	Browser to find and use objects you create, as well as objects from other
	programs.
	
	For more information about the Object Browser, from the Visual Basic Editor,
	click the Office Assistant, type "Object Browser" (without the quotation marks),
	click Search, and then click to view "Object Browser."
	
	For more information about Built-in dialog box arguments, from the Visual Basic
	Editor, click the Office Assistant, type "Built-in dialog box argument lists"
	(without the quotation marks), click Search, and then click to view "Built-in
	dialog box argument lists."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbinterop kbdta kbdtacode word8 kbwordvba word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
