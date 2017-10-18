---
layout: page
title: "Q169937: WD97: Avoiding &quot;Save As&quot; Alert When Saving to Different Format"
permalink: kb/169/Q169937/
---

## Q169937: WD97: Avoiding &quot;Save As&quot; Alert When Saving to Different Format

	Article: Q169937
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbProgramming kbtool kbdta kbdtacode kbmacroexample
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you save a file in a format other than the default Microsoft Word 97
	format, the Office Assistant may prompt that you may lose some features.
	
	This article discusses a method you can use to avoid this prompt each time you
	save a document.
	
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
	
	To prevent the Office Assistant prompt you each time you save a document in a
	format other than Word 97, you need to create three Visual Basic for
	Applications macros. Name each macro as follows:
	
	  FileSave, FileSaveAs, and Save_SaveAs
	
	then type the following example Visual Basic for Applications code into each
	respective macro:
	
	     Sub FileSave()
	        ' If the document has not been saved
	        ' display the File SaveAs dialog.
	        If ActiveDocument.Saved = False Then
	           ' Call the Save_SaveAs macro.
	           Save_SaveAs
	        Else
	           ' Otherwise, save the document.
	           ActiveDocument.Save
	        End If
	     End Sub
	
	     Sub FileSaveAs()
	        ' Call the Save_SaveAs macro.
	        Save_SaveAs
	     End Sub
	
	     Public Sub Save_SaveAs()
	
	        ' **********************************************
	        ' This macro replaces the default functionality
	        ' of the FileSaveAs command.
	        ' **********************************************
	        Dim myDialog As Dialog
	        Set myDialog = Dialogs(wdDialogFileSaveAs)
	        ' Display the Dialog and save the document.
	        If myDialog.Display Then
	           ActiveDocument.SaveAs myDialog.Name, myDialog.Format, _
	           myDialog.LockAnnot, myDialog.Password, myDialog.AddToMru, _
	           myDialog.WritePassword, myDialog.RecommendReadOnly, _
	           myDialog.EmbedFonts, myDialog.NativePictureFormat, _
	           myDialog.FormsData, myDialog.SaveAsAOCELetter
	        End If
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	
	Additional query words: vb vba vbe disabled disable dialog dialogbox vbapps
	
	======================================================================
	Keywords          : kbProgramming kbtool kbdta kbdtacode kbmacroexample 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
