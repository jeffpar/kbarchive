---
layout: page
title: "Q192161: WD97:Squares Appear in Text Form Field Inserted from Userform"
permalink: /kb/192/Q192161/
---

## Q192161: WD97:Squares Appear in Text Form Field Inserted from Userform

	Article: Q192161
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbmacroexample kbwordvba
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert data from a text box on a user form into a Microsoft Word
	document text form field, square characters appear and are printed in the
	document.
	
	CAUSE
	=====
	
	When you press ENTER to begin a new line in a text box on a user form with the
	MultiLine and EnterKeyBehavior properties set to True, a square character is
	used to represent the carriage return character (CHR(10)). This character is not
	visible if the text is displayed in a message box or inserted into the document
	itself.
	
	WORKAROUND
	==========
	
	Do not use a text box on a user form with the MultiLine property set to True to
	get a Microsoft Word document form field result (value or text).
	
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
	
	The following Visual Basic for Applications macro uses the InStr function to take
	the carriage return character (Chr(10)) out of the text string before inserting
	it into a text form field.
	
	The following code is assigned to a command button on the user form.
	
	  Private Sub CommandButton1_Click()
	  ActiveDocument.FormFields("text1").Result = CleanString(TextBox1.Text)
	  UserForm1.Hide
	  End Sub
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	Additional query words: wordcon kbimu
	
	======================================================================
	Keywords          : kbdta kbmacroexample kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
