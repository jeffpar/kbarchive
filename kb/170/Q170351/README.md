---
layout: page
title: "Q170351: WD97: Style List Shows Styles Out of Order"
permalink: kb/170/Q170351/
---

## Q170351: WD97: Style List Shows Styles Out of Order

	Article: Q170351
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbui kbusage
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Style list on the Formatting toolbar may not be displayed in alphabetical
	order.
	
	CAUSE
	=====
	
	In Microsoft Word 97, styles are grouped by their classification. In earlier
	versions of Microsoft Word, they are listed alphabetically.
	
	STATUS
	======
	
	This functionality is a design change in Microsoft Word 97 for Windows.
	
	MORE INFORMATION
	================
	
	Styles are displayed in the following order in the Style list:
	
	1. Heading styles
	
	2. Normal style
	
	3. User-defined styles
	
	4. Body Text styles
	
	5. List styles
	
	6. All other styles listed alphabetically
	
	The following sample list shows how styles are ordered:
	
	  Heading 1                 ---------+
	  Heading 2                          |---------- Heading styles
	  Heading 3                 ---------+
	  Normal                    -------------------- Normal style
	  My Favorite Style         -------------------- User-defined style
	  Body Text                 ---------+
	  Body Text First Indent             |---------- Body Text styles
	  Plain Text                ---------+
	  List Bullet               ---------+
	  List Bullet 2                      |---------- List styles
	  List Number               ---------+
	  Date                      ---------+
	  Default Paragraph Font             |
	  Footer                             |---------- All other styles
	  Header                             |
	  Salutation                ---------+
	
	This order cannot be changed.
	
	For more information about styles, click the Office Assistant, type "style"
	(without the quotation marks), click Search, and then click on one of the
	topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kbui kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
