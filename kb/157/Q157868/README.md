---
layout: page
title: "Q157868: WD97: Custom Style Based on List Style Drops Numbering"
permalink: /kb/157/Q157868/
---

## Q157868: WD97: Custom Style Based on List Style Drops Numbering

{% raw %}

	Article: Q157868
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The numbering property of a custom style that is based on a List Number style is
	lost when the custom style is copied from one document (or template) to
	another.
	
	NOTE: This problem occurs when you create a custom style that is based on any of
	the following List styles:
	
	  List Number
	  List Number 1
	  List Number 2
	  List Number 3
	  List Number 4
	  List Number 5
	  List Bullet
	  List Bullet 1
	  List Bullet 2
	  List Bullet 3
	  List Bullet 4
	  List Bullet 5
	
	
	WORKAROUND
	==========
	
	Use one of the following methods to work around this problem:
	
	Method 1: Reapply the Numbering to the Custom Style
	---------------------------------------------------
	
	Modify the custom style in the new document to include numbering.
	
	Method 2: Paste Text That Contains the Custom Style
	---------------------------------------------------
	
	Copy text that is formatted with the custom style from the original document, and
	paste the text in your new document. The style will be "copied" to your new
	document and will retain the numbering format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
