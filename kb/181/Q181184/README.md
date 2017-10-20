---
layout: page
title: "Q181184: WD97: Incorrect Calculation in Drop-Down Form Field Using Macro"
permalink: /kb/181/Q181184/
---

## Q181184: WD97: Incorrect Calculation in Drop-Down Form Field Using Macro

{% raw %}

	Article: Q181184
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform a calculation in a drop-down form field using the SetFormResult
	statement in a macro, the results are incorrect.
	
	CAUSE
	=====
	
	Numbers entered in the list are not treated as numeric values; instead, they are
	considered text strings. Because the macro is performing a calculation on text
	not numbers, the results are incorrect.
	
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
	
	The following Visual Basic for Applications macro retrieves the results of two
	drop-down form field values, converts the values to numeric, performs a
	calculation on the converted values and converts the final calculation to a
	string value. The macro then places the result into a form field text box.
	
	     Sub AddDropDownResults()
	        Dim dDown1 As Integer
	        Dim dDown2 As Integer
	        ' Get value of first drop down form field.
	        dDown1 = Val(ActiveDocument.FormFields("DropDown1").Result)
	        ' Get value of second drop down form field.
	        dDown2 = Val(ActiveDocument.FormFields("DropDown2").Result)
	        ' Calculate results and place in Text form field
	        ActiveDocument.FormFields("Text1").Result = Str(dDown1 + dDown2)
	     End Sub
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: kbcode kbmacro vba
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
