---
layout: page
title: "Q161669: WD97: Can't Open Selected Doc Using Dialogs FileFind Constant"
permalink: /kb/161/Q161669/
---

## Q161669: WD97: Can't Open Selected Doc Using Dialogs FileFind Constant

	Article: Q161669
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Open button does not open the selected file after you run a Visual Basic for
	Applications macro using the wdDialogFileFind constant with the Dialogs
	collection object.
	
	CAUSE
	=====
	
	All functionality using the wdDialogFileFind constant does not work as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
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
	
	To work around this problem you can use the wdDialogFileOpen constant instead of
	the wdDialogFileFind constant. The following example will attempt to open a file
	using the path and filename you specify. The FileOpen dialog box will not
	display. To display the FileOpen dialog box replace dlg.Execute with dlg.Show:
	
	Note: Functionality is extremely limited searching for a file using
	wdDialogFileOpen versus wdDialogFileFind.
	
	       Sub FindFileWorkAround()
	        Dim strFilePath As String
	        Dim strFileName As String
	        Dim dlg As Dialog
	        
	        ' Change the following values to
	        ' match your criteria.
	        strFilePath = "D:\My Documents\"
	        strFileName = "MyDoc.Doc"
	        
	        ' Set the FileOpen dialog to display
	        ' the criteria.
	        Set dlg = Dialogs(wdDialogFileOpen)
	        dlg.Name = strFilePath & strFileName
	
	        ' If the file is not found, trap the
	        ' error that will occur.
	        On Error Resume Next
	
	        ' Execute the dialog without displaying.
	        ' If the file exists, the dlg.Execute
	        ' command will open the file.
	        dlg.Execute
	
	        ' If the file does not exist, display
	        ' Word default error.
	        If Err = 5174 Then
	           MsgBox Err.Description
	        End If
	        
	     End Sub
	
	For more information about displaying built-in Word dialogs, while in the Visual
	Basic for Applications Editor, click the Office Assistant, type "dialogs"
	(without the quotation marks), click Search, and then click to view "Dialog
	Object."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Visual Basic Help is not installed on your
	computer, please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q135590 Can't Open Selected Document Using FileFind Macro
	
	MORE INFORMATION
	================
	
	The following macro demonstrates this behavior:
	
	     Sub FileFindExample()
	        Dialogs(wdDialogFileFind).Show
	     End Sub
	
	When executed, this macro displays the Open dialog box (File menu). When you
	select a file and then click Open, the Open dialog box closes and the selected
	file is not opened.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vba vb vbe
	
	======================================================================
	Keywords          : kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
