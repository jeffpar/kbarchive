---
layout: page
title: "Q173226: WD97: Document Containing FILLIN Fields May Not Prompt to Save"
permalink: /kb/173/Q173226/
---

## Q173226: WD97: Document Containing FILLIN Fields May Not Prompt to Save

{% raw %}

	Article: Q173226
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield winword word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a document from a template that contains FILLIN fields,
	Microsoft Word may not prompt you to save your document when you close the
	file.
	
	NOTE: This problem does not occur when you create a new document based on a
	template that does not contain FILLIN fields. If you enter FILLIN fields
	directly into a document, Word prompts you to save your changes when you close
	the file.
	
	WORKAROUND
	==========
	
	Use one of the following methods to work around this problem.
	
	Method 1: Click Save
	--------------------
	
	Before you close your new document, click Save on the File menu.
	
	Method 2: Create an AutoClose macro
	-----------------------------------
	
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
	
	Create and save a macro in the template containing the FILLIN fields and name the
	macro AutoClose. Enter the following lines of Visual Basic for Applications code
	into the AutoClose macro:
	
	     Sub AutoClose()
	        On Error Resume Next
	        ActiveDocument.Save
	     End Sub
	
	When you close an unsaved new document that is based on the custom template
	containing the AutoClose macro, Word will display the Save As dialog box to
	allow you to save your file.
	
	For more information about creating a macro, click the Office Assistant, type
	"How do I create a macro?," click Search, and then click to view "Create a
	macro."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	When you close your new document, Microsoft Word should automatically prompt you
	to save your changes with the following message:
	
	  Do you want to save the changes you made to <filename>?
	
	For additional information about creating a form with FILLIN fields, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q142213 WD: How to Create an Automated Form with Fill-in Fields
	
	Additional query words: 8.0 8.00 vba vbe
	
	======================================================================
	Keywords          : kbfield winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
