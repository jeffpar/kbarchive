---
layout: page
title: "Q194597: WD97: IF Fields Not Visible in Mail Merge Documents"
permalink: /kb/194/Q194597/
---

## Q194597: WD97: IF Fields Not Visible in Mail Merge Documents

{% raw %}

	Article: Q194597
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a Microsoft Word for the Macintosh version 5.1 print merge
	document in Word 97, and the document contains IF and ENDIF fields, a blank line
	appears in place of the IF fields.
	
	CAUSE
	=====
	
	Word97 converts these fields to IF fields, which do not require ENDIF fields.
	The conditional fields are still part of the document; however, by default, they
	may not be visible.
	
	RESOLUTION
	==========
	
	View the conditional IF fields by showing field codes. To turn on display of
	field codes, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the View tab.
	
	3. Click to select (put a check in) the Field Codes check box.
	
	4. Click OK.
	
	The conditional statements should now be visible in the document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	MORE INFORMATION
	================
	
	For more information about creating conditional statements, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q105888 WD97: How to Merge Conditional Number of Records to the Same Page
	
	  Q90393 WD97: How to Use Nested IF Fields in a Print Merge Document
	
	Additional query words: mail
	
	======================================================================
	Keywords          : kbdta kbfield winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
