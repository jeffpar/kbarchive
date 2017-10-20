---
layout: page
title: "Q157463: WD97: How to Use Calculate on Exit in a Forms Document"
permalink: /kb/157/Q157463/
---

## Q157463: WD97: How to Use Calculate on Exit in a Forms Document

{% raw %}

	Article: Q157463
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Word 97 for Windows, form fields include a Calculate On Exit
	option. This option, when enabled, updates fields and form fields in a form
	document.
	
	Fields not updated by this option include:
	
	  TOC
	  PAGE
	  INDEX
	  PAGEREF
	
	MORE INFORMATION
	================
	
	This option is especially useful when you automate documents and need to update
	calculation of text form fields automatically or to repeat text typed in one
	form field in other locations in the same document.
	
	EXAMPLE OF USING CALCULATION WITH A TEXT FORM FIELD
	---------------------------------------------------
	
	Create a New Document with Text Form Fields:
	
	To create a new document with text form fields, follow these steps:
	
	1. Create a new document. On the View menu, point to Toolbars, and click Forms
	  to enable the Forms toolbar.
	
	2. On the Forms toolbar, click the Text Form Field button to insert a text form
	  field, and then press ENTER.
	
	3. Insert two additional text form fields in the same manner, and press ENTER
	  after you insert each form field.
	
	4. Double-click the first Form Field (or right-click the field and click
	  Properties on the shortcut menu) to access its options. Set the options to
	  the following:
	
	  a. Under Type, select Number.
	
	  b. Under Field Settings, click to select the Calculate On Exit check box, and
	     click OK.
	
	5. Repeat step 4 for the second form field.
	
	6. Double-click the last form field to access its options. Set the options to
	  the following:
	
	  a. Under Type, select Calculation.
	
	  b. For Expression, type:
	
	  "=SUM(Text1,Text2)" (without the quotation marks)
	
	7. Click OK.
	
	NOTE: Word uses Text# bookmark names (where # is a number) to sequentially name
	each new text form field. The first two text form fields have bookmark names of
	Text1 and Text2. Capitalization is important. In this example, the expression
	returns the sum of the first two text form fields.
	
	Save the Document as a Protected Template:
	
	To save and protect the document, follow these steps:
	
	1. Save the document as a template by clicking Save As on the File menu. Under
	  Save As Type, select Document Template, type a name, and then click Save.
	
	2. Protect the template. To do this, click Protect Document on the Tools menu,
	  under Protect Document For, click Forms, and then click OK.
	
	3. Save and close the template.
	
	Test the Template:
	
	To test the template, follow these steps:
	
	1. On the File menu, click New, and open a document based on the newly created
	  template.
	
	2. Type a number in the first form field and press TAB.
	
	3. Type a number in the second form field and press TAB.
	
	Notice that when you exit either of the first two form fields, the calculation
	form field is updated.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  
	
	  Q110014 WD: Calculation Text Fields Within Forms Fail to Update
	
	  Q141990 WD97: How to Create an Online Form Using Form Fields
	
	EXAMPLE OF USING THE REF FIELD
	------------------------------
	
	Creating the Document with the REF Field:
	
	To repeat the result of a form field in another location, use a REF field. To do
	this, follow these steps:
	
	1. Create a new document. On the View menu, point to Toolbars and click Forms to
	  display the Forms toolbar.
	
	2. Click the Text Form Field button on the Forms toolbar to insert a text form
	  field, and then press ENTER.
	
	3. Double-click the form field to access its options.
	
	4. Under Field Settings click to select the Calculate On Exit check box, and
	  then click OK.
	
	  Notice that Word assigns the Text1 bookmark name to the form field.
	
	5. Press the RIGHT ARROW to remove selection from the form field, and press
	  ENTER four times to insert blank lines.
	
	6. On the Insert menu, click Field. Under Categories, select Links and
	  References. Under Field Names, select Ref.
	
	7. In the Field codes box, type "REF Text1" (without the quotation marks), and
	  click OK.
	
	  Note that Text1 is the bookmark name of the form field. Capitalization is
	  important.
	
	Save the Document as a Protected Template:
	
	To save and protect the document, follow these steps:
	
	1. Save the document as a template by clicking Save As on the File menu. Under
	  Save File As Type, select Document Template, type a name, and then click
	  Save.
	
	2. Protect the template. To do this, click Protect Document on the Tools menu,
	  under Protect Document For, click Forms, and then click OK.
	
	3. Save and close the template.
	
	Testing the Template:
	
	To test the template, follow these steps:
	
	1. On the File menu, click New and open a document based on the newly created
	  template.
	
	2. Type a number in the text form field and press TAB.
	
	When you exit the form field, the REF field is updated. This field duplicates the
	contents of the text form field.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  
	
	  Q115607 WD97: How to Update Fields in a Protected Form
	
	Additional query words: table of contents page reference example 8.0
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
