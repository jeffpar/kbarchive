---
layout: page
title: "Q197149: WD97: Mail Merge Helper Behaves Differently When Called by Macro"
permalink: /kb/197/Q197149/
---

## Q197149: WD97: Mail Merge Helper Behaves Differently When Called by Macro

	Article: Q197149
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbmerge
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Mail Merge Helper dialog box is activated by a macro command, some of
	the options either are unavailable or are already activated with the use of
	defaults rather than offering you choices.
	
	For example, when you run the following macro example while you are in a mail
	merge main document
	
	  Sub MyMailMergeHelper()
	     Set mydialog = Dialogs(wdDialogMailMergeHelper)
	     With mydialog
	        .Show
	     End With
	  End Sub
	
	the following problems may occur:
	
	- The Create Document Type option does not allow you to select a new main
	  document. The macro automatically changes the active window to the new mail
	  merge main document that you selected.
	
	- The Restore to Normal Word Document option does not offer a confirmation
	  dialog box. The macro immediately removes all data file and header file
	  information.
	
	- The Edit Data Source button opens the data source in View Source mode rather
	  than the Data Form dialog box. To open the file in the Data Form dialog box,
	  click the Data Form button on the Mail Merge toolbar.
	
	WORKAROUND
	==========
	
	To show the Mail Merge Helper while you are in a mail merge main document, do
	one of the following:
	
	- On the Tools menu, click Mail Merge.
	
	  -or-
	
	- On the Mail Merge toolbar, click Mail Merge Helper.
	
	MORE INFORMATION
	================
	
	The following are descriptions of what Microsoft Word normally does when you
	click in the Mail Merge Helper. The Mail Merge Helper does not respond normally
	when you use a macro to display it, and the problems described in the "Symptoms"
	section of this article may occur.
	
	- When you click Create in the Mail Merge Helper dialog box and click to select
	  a different type main document, Word prompts you with a message similar to
	  the following to verify the change of document type:
	
	  You can change filename from form letters to mailing labels or you can create
	  a new main document.
	
	- When you click Create and click Restore to Normal Word Document in the Mail
	  Merge Helper dialog box, Word prompts you with a message similar to the
	  following to verify that you want to revert the existing document back to a
	  normal Word file and break the link to its data source:
	
	  By restoring filename to a normal Word document, the text from the document
	  will not change. However, filename will no longer be a mail merge main
	  document.
	
	  Do you want to continue?
	
	- When you click Edit (under Data Source) in the Mail Merge Helper and click to
	  select the attached data file, Word displays the Data Form dialog box.
	
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
	
	For more information about how to use the sample code in this article, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
