---
layout: page
title: "Q181062: WD97: Cannot Change Default Field Names in Mail Merge Helper"
permalink: kb/181/Q181062/
---

## Q181062: WD97: Cannot Change Default Field Names in Mail Merge Helper

	Article: Q181062
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample kbwordvba word97 kbmerge
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You cannot change the list of default mail merge field names in the Create Data
	Source dialog box.
	
	CAUSE
	=====
	
	You cannot change these defaults because the names are hard-coded in the Word
	program.
	
	
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
	
	Although you cannot change the defaults, you can use the following sample macro
	to automatically change the field names when you create a mail merge data file.
	
	NOTE: Run the following macro to create a new data source instead of using Create
	Data Source (in the Mail Merge Helper, click Get Data). After the data source is
	created using the sample macro, then in the Mail Merge Helper, click Get Data
	and then click Open Data Source to attach the data source you created using your
	custom macro.
	
	This sample macro fills the mail merge Create Data Source dialog list box with
	fields you specify within the macro.
	
	     Sub SetDefaultheaderFields()
	        Set mydialog = Dialogs(wdDialogMailMergeCreateDataSource)
	        With mydialog
	           .HeaderRecord = "one, two, three, etc."
	           .Show
	        End With
	     End Sub
	
	MORE INFORMATION
	================
	
	For more information about working with dialog boxes in Word, click the Office
	Assistant while in the Visual Basic for Applications Editor, type "built-in
	dialogs," click Search, and then click to view "Displaying built- in Word dialog
	boxes."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF97: Office Assistant Not Answering Visual Basic Questions
	
	For additional information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: helper
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample kbwordvba word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
