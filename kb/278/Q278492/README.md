---
layout: page
title: "Q278492: BUG: List Window Pane in Project Explorer Highlights Wrong Item"
permalink: /kb/278/Q278492/
---

## Q278492: BUG: List Window Pane in Project Explorer Highlights Wrong Item

{% raw %}

	Article: Q278492
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbide kbTreeView kbIDEProject kbGrpDSVB kbDSupport
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to click a node in the List window pane of Project Explorer, the
	node that you previously clicked remains highlighted, and the newly selected
	node appears outlined.
	
	CAUSE
	=====
	
	This problem is caused by a bug in version 5 of the Comctl32.dll file. The
	problem does not occur with version 4 of the file.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, close and restart the development environment.
	
	IMPORTANT: Do not replace version 5 of Comctl32.dll with an older version to
	resolve this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. In the Project Explorer window, right-click Project1.
	
	3. Leave the context menu that is displayed, and click Form1 in Project
	  Explorer. Project1 remains highlighted.
	
	4. Click other nodes in Project Explorer, and the object is selected, but
	  Project1 remains highlighted.
	
	Additional query words: treeview
	
	======================================================================
	Keywords          : kbCmnCtrls kbide kbTreeView kbIDEProject kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
