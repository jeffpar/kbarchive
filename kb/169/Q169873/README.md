---
layout: page
title: "Q169873: WD97: Object in Header Causes Object in Document to Reposition"
permalink: /kb/169/Q169873/
---

## Q169873: WD97: Object in Header Causes Object in Document to Reposition

{% raw %}

	Article: Q169873
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Word document contains a text box or drawing object in both the header
	and near the top of the main part of the document (body), the object in the body
	of the document may move when you change the zoom percentage.
	
	CAUSE
	=====
	
	This problem occurs when both objects have a wrapping style other than None.
	
	WORKAROUND
	==========
	
	To prevent the repositioning of the object in the document, for each object in
	your document body and header, follow these steps:
	
	1. Click the object to select it.
	
	2. On the Format menu, click <Object> (for example Text Box), and then
	  click the Position tab.
	
	3. In the Format <Object> dialog box, click Page in both the Horizontal
	  From and Vertical From lists.
	
	4. Click OK.
	
	5. Drag your object to the correct position.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
