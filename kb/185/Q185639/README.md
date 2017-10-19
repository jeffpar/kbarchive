---
layout: page
title: "Q185639: WD97: SaveAs Method Overwrites Existing Documents"
permalink: /kb/185/Q185639/
---

## Q185639: WD97: SaveAs Method Overwrites Existing Documents

	Article: Q185639
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the ActiveDocument.SaveAs method to save a document and you specify
	the name of a file that already exists for the FileName argument, Microsoft Word
	overwrites the existing file without warning.
	
	WORKAROUND
	==========
	
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
	
	To work around this problem, use the following Microsoft Visual Basic for
	Applications sample macro.
	
	The following macro tests to see whether the file you intend to save (Save as)
	already exists in the current folder. If it does, it prompts you with a message
	asking whether you want to overwrite the existing file. Clicking Yes overwrites
	the file with the new file. Clicking No displays the Save as dialog box,
	allowing you to enter a different name for the file.
	
	  Sub SaveAsExample()
	     Dim strSaveAsName As String
	     Dim strMsg As String
	     '
	     ' Replace the following document name "MyDoc.Doc" with
	     ' the name you want to use to "Save As."
	     strSaveAsName = "MyDoc.Doc"
	
	     ' Message to return if file exists.
	     strMsg = "Do you want to replace the existing " & strSaveAsName & "?"
	
	     ' Check if the file exists.
	     If Dir(strSaveAsName & "*") = "" Then
	        ' If file does not exist, save without prompting.
	        ActiveDocument.SaveAs FileName:=strSaveAsName
	     Else
	        ' If file does exist, prompt with warning message.
	        ' Check value of button clicked in message box.
	        Select Case MsgBox(strMsg, vbYesNoCancel + vbExclamation)
	           Case vbYes
	              ' If Yes was chosen, save and overwrite existing file.
	              ActiveDocument.SaveAs FileName:=strSaveAsName
	           Case vbNo
	              ' If No was chosen, prompt for file name
	              ' using the File SaveAs dialog box.
	              With Dialogs(wdDialogFileSaveAs)
	                 .Name = ""
	                 .Show
	              End With
	           Case Else
	           ' If Cancel was chosen, do nothing.
	        End Select
	     End If
	  End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about the SaveAs method, in the Visual Basic Editor, click
	the Office Assistant, type "SaveAs", click Search, and then click to view
	"SaveAs Method."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: application custom programming vba vbe vb
	
	======================================================================
	Keywords          : kbdta kbdtacode word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
