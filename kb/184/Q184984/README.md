---
layout: page
title: "Q184984: WD97: Password Not Saved Calling wdDialogFileSaveAs Dialog Box"
permalink: /kb/184/Q184984/
---

## Q184984: WD97: Password Not Saved Calling wdDialogFileSaveAs Dialog Box

{% raw %}

	Article: Q184984
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Visual Basic for Applications dialogs collection and
	set a password for a document, the password is not saved with the document.
	
	CAUSE
	=====
	
	This problem occurs when you use the wdDialogFileSaveAs dialog box constant to
	display the FileSaveAs dialog box, and set the password for a document, while
	the File Save As dialog box is displayed.
	
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
	
	The command line you normally use to display the File Save As dialog box is as
	follows:
	
	     Dialogs(wdDialogFileSaveAs).Show
	
	To display the File Save As dialog box and save a password that you set (as if
	clicking Options in the File Save As dialog box) use the following macro
	commands instead of Dialogs(wdDialogFileSaveAs).Show:
	
	     Sub SaveDocPasswordWorkAround()
	
	        Dim dlg As Dialog
	        Dim dlgParm As String
	
	        ' If no documents are open to save, then exit this routine.
	        If Documents.Count = 0 Then Exit Sub
	
	        ' Set object variable to the File Save As dialog box.
	        Set dlg = Dialogs(wdDialogFileSaveAs)
	
	        ' Display the dialog box.
	        dlg.Display
	        ' Extract the name to save as (typed into the File Name text box.)
	        dlgParm = dlg.Name
	        ' Force an update to the dialog box.
	        dlg.Update
	        ' Reset the file name.
	        dlg.Name = dlgParm
	        ' Execute the dialog box commands.
	        dlg.Execute
	
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	
	Additional query words: wordcon vb vba
	
	======================================================================
	Keywords          : kbdta kbdtacode word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
