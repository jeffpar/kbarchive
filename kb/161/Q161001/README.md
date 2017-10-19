---
layout: page
title: "Q161001: WD97: Document Macro Shortcut Key Assignments Won't Print"
permalink: /kb/161/Q161001/
---

## Q161001: WD97: Document Macro Shortcut Key Assignments Won't Print

	Article: Q161001
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbdta kbdtacode kbmacroexample kbwordvba
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Word will not print shortcut key assignments for macros stored in a Word
	document.
	
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
	
	To print the active document's keyboard shortcut assignments for macros, create
	the following Microsoft Visual Basic for Applications sample macro.
	
	Macro to Print Shortcut Key Assignments for Macros
	--------------------------------------------------
	
	     Sub GetKBSC()
	        Dim KeyList As String
	        Dim DocName As String
	        KeyList = ""
	        Application.ScreenUpdating = False
	        CustomizationContext = ActiveDocument
	        DocName = ActiveDocument.Name
	        For x = 1 To KeyBindings.Count
	           KeyList = KeyList + KeyBindings(x).KeyString + Chr(9) + _
	              KeyBindings(x).Command + Chr(10)
	        Next x
	        Application.Documents().Add
	        Selection.InsertAfter UCase(DocName) + Chr(13) + Chr(13) + KeyList
	        Application.PrintOut Background:=0
	        ActiveDocument.Close SaveChanges:=wdDoNotSaveChanges
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	Shortcut key assignments can be defined for macros that are stored in a Word
	document.
	
	Defining a Macro Shortcut Key Assignment in a Word Document
	-----------------------------------------------------------
	
	To define a macro shortcut key assignment in a Word document, follow these
	steps:
	
	1. Open the document that contains macros with shortcut key assignments.
	
	2. On the Tools menu, click Customize.
	
	3. Click Keyboard.
	
	  The Customize Keyboard dialog box opens.
	
	4. In the "Save changes in" box, click to select the document that contains the
	  macros you want to assign a shortcut key to.
	
	5. Under Categories, click to select Macros. Under Macros, click to select the
	  macro name.
	
	  NOTE: If the selected macro has a shortcut key already assigned, the shortcut
	  key assignment will be displayed in the Current Keys box.
	
	6. In the "Press new shortcut key" box, type the shortcut keys you want to use
	  with the selected macro, and then click Assign.
	
	7. Click Close twice.
	
	Word does not print macro shortcut key assignments that are stored in a document.
	However, Word does print macro shortcut key assignments that are stored in a
	template.
	
	Printing Shortcut Key Assignments
	---------------------------------
	
	To print shortcut key assignments, follow these steps:
	
	1. Open a document based on the template that contains the shortcut key
	  assignments.
	
	2. On the File menu, click Print.
	
	3. In the Print dialog box, in the Print What list, click to select Key
	  Assignments, and then click OK.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q122230 How to Generate a List of Keyboard Commands for Word
	
	Additional query words: programmatically keystroke key commands quick short cut accelerator hot hotkey
	
	======================================================================
	Keywords          : kbprint kbdta kbdtacode kbmacroexample kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
