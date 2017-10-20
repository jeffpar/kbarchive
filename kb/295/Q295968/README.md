---
layout: page
title: "Q295968: WD97: Line Numbers Are Missing from First Page"
permalink: /kb/295/Q295968/
---

## Q295968: WD97: Line Numbers Are Missing from First Page

{% raw %}

	Article: Q295968
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select "Different first page" on the Layout tab in the Page Setup dialog
	box in a document that has only one section, the line numbers for the first page
	of the document may be removed.
	
	CAUSE
	=====
	
	This behavior can occur when the document is created by using the Legal Pleading
	Wizard, which inserts the line numbers in the header. When you select "Different
	first page", the first page uses the first-page header, which is blank.
	
	RESOLUTION
	==========
	
	To work around this issue, use one of the following methods.
	
	Method 1: Copy Line Numbers from the Header to the First-Page Header
	--------------------------------------------------------------------
	
	To copy line numbers from the header to the first-page header, follow these
	steps:
	
	1. Press CTRL+HOME to return the focus to the beginning of the document.
	
	2. On the View menu, click "Header and Footer".
	
	3. On the "Header and Footer" toolbar, click Show Next to open the header.
	
	4. Press CTRL+A, to select all the text in the header.
	
	5. On the Edit menu, click Copy.
	
	6. On the "Header and Footer" toolbar, click Show Previous to open the
	  first-page header.
	
	7. On the Edit menu, click Paste.
	
	  The line numbers now appear on the first page.
	
	Method 2: Create Your Own Template
	----------------------------------
	
	To create a template that allows you to have a different first-page header and
	footer and still view the line numbers on the first page, follow these steps:
	
	1. Open a new blank document.
	
	2. Type "=rand(40)" (without the quotation marks), and then press ENTER to
	  insert some random text.
	
	3. On the File menu, click Page Setup, and then click Line Numbers on the Layout
	  tab.
	
	4. In the Line Numbers dialog box, click to select the "Add line numbering"
	  check box. Under Numbering, click Continuous, and then click OK twice.
	
	5. On the View menu, click "Header and Footer".
	
	6. On the "Header and Footer" toolbar, click "Switch Between Header and Footer"
	  to change the focus to the footer.
	
	7. On the "Header and Footer" toolbar, click Insert Page Number, and then click
	  Close.
	
	8. On the File menu, click Page Setup, and then, on the Layout tab, click to
	  select the "Different first page" check box. Click OK.
	
	9. On the File menu, click Print Preview.
	
	  Notice that the first page contains line numbers but no page number.
	
	10. Click Close.
	
	11. On the File menu, click Save As. In the "Save as type" box, select Document
	  Template. Name the file, and then click Save to create a new template.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
