---
layout: page
title: "Q166206: WD97: Month, Day Transposed After Updating Form Field"
permalink: kb/166/Q166206/
---

## Q166206: WD97: Month, Day Transposed After Updating Form Field

	Article: Q166206
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbProgramming kbdta kbdtacode kbfield kbform kbForms
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you update a text form field that contains a date, the month and day will
	be transposed. For example, if the text form field is specified as date, and the
	date format is M/d/yyyy, and you type 1/8 for January 8, the field result is 8/1
	when the field is updated.
	
	This problem occurs when all of the following are true:
	
	- The text form field type is set for Date.
	
	  -and-
	
	- The text form field date format begins with a month, such as M/d/yyyy.
	
	  -and-
	
	- You type the date without including the year. For example, you type 1/8.
	
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
	
	To work around this problem, use the following macro that formats the text you
	type into a form field in a specified date format:
	
	     Sub FormatDate_OnExit()
	        Dim fField As FormField
	        Dim dDateFormat As String
	        ' Specify the date format.
	        sDateFormat = "M/d/yyyy"
	        ' In the following command, change "Text1"
	        ' to match your formfield bookmark name.
	        Set fField = ActiveDocument.FormFields("Text1")
	        If IsDate(fField.Result) Then
	           fField.Result = Format$(CDate(fField.Result), sDateFormat)
	        End If
	     End Sub
	
	After you create the macro, set up the form using the following steps:
	
	1. On the Tools menu, click Unprotect Document.
	
	2. Double-click the form field.
	
	3. In the Type box, click Regular Text.
	
	4. In the On Exit box, click the macro you created.
	
	5. Click OK.
	
	When the form field is updated, the date is displayed in the format you specified
	in the macro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Word does not contain true date fields; Word contains text with date
	formatting.
	
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
	Keywords          : kbmacro kbProgramming kbdta kbdtacode kbfield kbform kbForms 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
