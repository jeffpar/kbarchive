---
layout: page
title: "Q157772: WD97: Bitmap Icon Is Lost After Saving to RTF"
permalink: /kb/157/Q157772/
---

## Q157772: WD97: Bitmap Icon Is Lost After Saving to RTF

{% raw %}

	Article: Q157772
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbole
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a Word 97 document that contains a linked bitmap object in the
	Rich Text Format (RTF), the Display As Icon property for the bitmap object is
	lost.
	
	CAUSE
	=====
	
	This problem occurs when the following conditions are met:
	
	- On the Insert menu, you click Object, and click the Create From File tab.
	
	  -and-
	
	- You select the Link To File check box and click OK.
	
	WORKAROUND
	==========
	
	To work around this problem and retain the icon when you convert the document to
	RTF, do the following:
	
	1. On the Insert menu, click Object, and select the Create From File tab.
	
	2. Clear the Link To File check box.
	
	3. Type the path and name of the object in the File Name box and click OK. Or,
	  click Browse, select the file you want, and click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 8.0 word8 word97 convert convtext
	
	======================================================================
	Keywords          : kbole 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
