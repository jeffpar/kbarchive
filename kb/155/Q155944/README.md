---
layout: page
title: "Q155944: WD97: Display Icon Changes After Clicking Undo Convert Object"
permalink: /kb/155/Q155944/
---

## Q155944: WD97: Display Icon Changes After Clicking Undo Convert Object

{% raw %}

	Article: Q155944
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbole kbualink97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you convert an object that displays an icon and then click Undo, the icon
	that Word uses to represent the object is smaller in size and different in
	appearance.
	
	CAUSE
	=====
	
	This problem occurs when you use the following steps:
	
	1. On the Insert menu, click Object.
	
	2. Click the type of object you want to insert.
	
	3. Click Float Over Text and click Display as Icon.
	
	4. Click OK.
	
	5. Select the object in the document.
	
	6. On the Edit menu, point to the type of object you inserted and click Convert.
	
	7. Clear the Display As Icon check box and click OK.
	
	8. On the Edit menu, click Undo Convert Object.
	
	
	This problem does not occur if you clear the Float Over Text check box.
	
	WORKAROUND
	==========
	
	To work around this problem after you insert the object, use the following
	steps:
	
	1. Select the object in the document.
	
	2. On the Edit menu, point to the object type, and click Convert.
	
	3. Select the Display As Icon check box, and clear the Float Over Text check
	  box.
	
	4. Click OK.
	
	The icon should appear with the correct size and appearance.
	
	To work around this problem before you insert the object, clear the Float Over
	Text check box in the Insert Object dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	
	Additional query words: 8.0 word8 word97 winword
	
	======================================================================
	Keywords          : kbole kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
