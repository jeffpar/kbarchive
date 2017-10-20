---
layout: page
title: "Q170727: WD97: Visual Basic for Applications Command for Copying Files"
permalink: /kb/170/Q170727/
---

## Q170727: WD97: Visual Basic for Applications Command for Copying Files

{% raw %}

	Article: Q170727
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Word, the Visual Basic for Applications FileCopy command allows a
	specified file to be copied to another directory location.
	
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
	
	The following macro copies the file "My Document.Doc" from "C:\My Documents" to
	the folder "C:\:Backup"
	
	This example provides an error trap which alerts you when you need to take
	corrective steps to complete the operation.
	
	        Sub FileCopyExample()
	        Dim sSourcePath As String
	        Dim sTargetPath As String
	
	        ' Change these paths to your Source and Target paths.
	        sSourcePath = "D:\My Documents\My Document.Doc"
	        sTargetPath = "C:\Backup\My Document.Doc"
	        On Error Resume Next
	
	        ' Copy the file.
	        FileCopy sSourcePath, sTargetPath
	
	        If Err > 0 Then MsgBox Err.Description
	     End Sub
	
	NOTE: If you try to use the FileCopy statement on a file that is currently open,
	you receive a "Permission Denied" error.
	
	Unlike the Wordbasic CopyFile command, if a file of the same name already exists
	in the target directory, Word will not display a message asking if you want to
	replace the existing file.
	
	For more information about the FileCopy Statement, from the Visual Basic Editor,
	click the Office Assistant, type "FileCopy," click Search, and then click to
	view "FileCopy Statement."
	
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
	
	
	Additional query words: vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
