---
layout: page
title: "Q165822: WD97: Custom Bullet or Number Lost After Save to RTF"
permalink: /kb/165/Q165822/
---

## Q165822: WD97: Custom Bullet or Number Lost After Save to RTF

{% raw %}

	Article: Q165822
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a custom style based on any of the built-in List Bullet or List
	Number styles and then modify the custom style with a new bullet or number
	format, the custom style will lose the new bullet or number format and revert
	back to the default bullet or number definition when you save the document as
	Rich Text Format (RTF).
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Base the Custom Style on "(no style)"
	-----------------------------------------------
	
	When you create a custom style, do not base it on a built-in style. Instead, base
	the new style on "(no style)" and then define the attributes of the style.
	
	Method 2: Change the Built-in List Bullet or List Number Style
	--------------------------------------------------------------
	
	Rather than changing the bullet or number properties of the custom style, change
	the bullet or number properties of the built-in style that the custom style is
	based on. The changes will be applied to the custom style as well.
	
	REFERENCES
	==========
	
	For more information on what formatting is retained when you save in other
	formats, please see the following resources:
	
	Click the Office Assistant, type "Save as Word 7.0" (without the quotation
	marks), click Search, and then click to view "Results of saving Word 97
	documents in other formats."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Chapter 15 of the "Office Resource Kit" also contains information about
	formatting that is retained through the conversion process. The ORK is available
	on the Microsoft Web site at:
	
	  http://www.microsoft.com/office/ork/
	
	For more information about how to obtain the Office Resource Kit (ISBN:
	1-57231-329-3), call (800) MS-PRESS in the United States or (800) 667-1115 in
	Canada.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbualink97 kbusage word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
