---
layout: page
title: "Q196941: WD97: Changing the Source of a Link May Resize the Object"
permalink: /kb/196/Q196941/
---

## Q196941: WD97: Changing the Source of a Link May Resize the Object

{% raw %}

	Article: Q196941
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Word, a resized linked graphic may return to its original size when
	you update it. This behavior occurs if you move the graphic to another directory
	(folder) and then update the link by clicking Links on the Edit menu, changing
	the source (that is, path), selecting Update Now, and clicking OK.
	
	CAUSE
	=====
	
	When you change the path of the object after clicking Links on the Edit men,
	Word replaces the original field code with a new field code, and the size
	information is lost.
	
	WORKAROUND
	==========
	
	To work around this problem, manually change the path instead of updating the
	location of the graphic by using the Edit Links command:
	
	1. Select the linked graphic, and press SHIFT+F9 to view field codes.
	
	2. In the field code, change the path to reflect the new location.
	
	3. Press F9 to update the field.
	
	4. Press SHIFT+F9 to turn off field codes.
	
	The resized graphic will now appear correctly.
	
	Additional query words: link object graphic
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
