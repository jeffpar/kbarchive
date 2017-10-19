---
layout: page
title: "Q198365: WD97: Parentheses Missing, Decimal Appears in Number Form Field"
permalink: /kb/198/Q198365/
---

## Q198365: WD97: Parentheses Missing, Decimal Appears in Number Form Field

	Article: Q198365
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to enter a number into a number form field formatted with
	parentheses, the parentheses are lost, and the number is changed to a decimal
	value.
	
	For example, when you insert a number form field into a Word document and change
	the Number Format to include parentheses, as in a telephone number
	
	  (###) ###-####
	
	the number you type into the protected form field does not include the
	parentheses and is changed to a decimal value as in the following example:
	
	  8005551212.00
	
	WORKAROUND
	==========
	
	Use a different character in the Number Format. Do not use parentheses in the
	Number Format of the Number Form Field.
	
	For example, in the Number Format of the Number Form Field, use a dash to
	separate the area code, as in this example
	
	  ###-###-####
	
	which results in the following when you type your number in the protected forms
	document:
	
	  800-555-0188
	
	To change the number format, follow these steps:
	
	1. On the Forms toolbar, click the Protect Form button to unprotect your form
	  document.
	
	  NOTE: If the Forms toolbar is not showing, on the View menu, point to
	  Toolbars, and then click Forms.
	
	2. Double-click your number form field to access the Text Form Field Options
	  dialog box.
	
	3. In the Number Format box, delete the parentheses and type a different
	  character to separate the area code from the rest of the telephone number,
	  and then click OK.
	
	4. On the Forms Toolbar, click the Protect Document button to re-protect your
	  form document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	For more information about how to insert a form field, click the Office
	Assistant, type "How do I insert a form field?" (without the quotation marks),
	click Search, click the "Insert form fields or ActiveX controls in a form"
	topic, and then click to view "Insert form fields in a form."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: formfield parenthesis
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
