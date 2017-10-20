---
layout: page
title: "Q171485: FIX: Visual Basic 5.0 Title Bar Paints Incorrectly"
permalink: /kb/171/Q171485/
---

## Q171485: FIX: Visual Basic 5.0 Title Bar Paints Incorrectly

{% raw %}

	Article: Q171485
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Two title bar captions will appear on screen: one in Visual Basic IDE, the other
	on background.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE in Visual Basic 5.0.
	
	2. Maximize the IDE.
	
	3. Minimize the IDE.
	
	4. Click the Visual Basic Icon in TaskBar to restore it.
	
	5. Restore the IDE (middle button on upper-right of the IDE).
	
	6. Resize the main IDE window so that it is in mid-screen and much smaller than
	  the screen.
	
	7. Minimize the IDE.
	
	8. Click the Visual Basic Icon in TaskBar to restore it. Note that you now have
	  two Visual Basic Title bars: one on the IDE and another at the top of the
	  screen in the maximized position.
	
	  NOTE 1: When you perform step #7, Visual Basic appears to maximize the top of
	  the IDE window briefly before minimizing. However, only the top of the window
	  is maximized and it doesn't appear as if the process finishes before the
	  entire window is minimized. This is where the left- over repaint is coming
	  from. You can observe this behavior particularly on slower video cards.
	
	  NOTE 2: This bug occurs no matter how many MDI child windows you have opened
	  within the Visual Basic IDE.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
