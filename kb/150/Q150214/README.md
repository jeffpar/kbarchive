---
layout: page
title: "Q150214: BUG: Able to Open Multiple Copies of DBGrid Property Page"
permalink: /kb/150/Q150214/
---

## Q150214: BUG: Able to Open Multiple Copies of DBGrid Property Page

{% raw %}

	Article: Q150214
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Right-clicking the DBGrid control at design time and selecting the Edit option
	causes the Properties dialog to be shown non-modally. This action displays
	multiple instances of the Properties dialog. So it is possible to right-click
	the DBGrid control again and choose Properties to show a second instance of the
	DBGrid Properties page.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a DBGrid control onto Form1.
	
	3. Right-click the DBGrid control, and select Edit from the Context menu.
	
	4. Right-click the DBGrid control again, and choose Properties from the Context
	  menu.
	
	5. The Properties page appears. Leave it displayed and repeat step 4. A second
	  instance of the Properties page is displayed.
	
	Additional query words: 4.00 vb4win vb432 buglist4.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
