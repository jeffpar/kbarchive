---
layout: page
title: "Q174071: WD97: Strange Behavior with Equation Toolbar in Arrange All Vie"
permalink: kb/174/Q174071/
---

## Q174071: WD97: Strange Behavior with Equation Toolbar in Arrange All Vie

	Article: Q174071
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word, when you double-click an equation and then click Arrange All
	on the Window menu to view two documents containing equations, you may notice
	the following behavior with the Equation toolbar:
	
	- You are unable to close the toolbar.
	
	  When you activate the Microsoft Equation Editor in one document, click the
	  second document to activate it, and then click to re-activate the first
	  document, you will not be able to close the Equation toolbar by clicking the
	  close button (the "X") on the title bar.
	
	- The buttons disappear from the toolbar.
	
	  When you first view the two documents containing equations in the arrange all
	  view, the Equation toolbar will appear as expected. However, after you click
	  the insertion point several times between the two document windows, the
	  Equation Editor toolbar will not be refreshed properly and buttons will
	  disappear.
	
	WORKAROUND
	==========
	
	To work around this problem, use the appropriate method for the behavior you are
	experiencing.
	
	Cannot Close the Equation Toolbar
	---------------------------------
	
	Method 1: View One Document at a Time:
	
	Do not click Arrange All on the Window menu. Work on equations in one document at
	a time.
	
	Method 2: Keep the Insertion Point Within a Single Document:
	
	If you must use the Arrange All feature, follow these steps to re-enable the
	close button:
	
	1. In the document in which Equation Editor is active, click outside the
	  Equation object to move the insertion point into that document.
	
	  This will close the Equation Editor and its toolbar in that document.
	
	2. Double-click the same equation to re-activate equation editor.
	
	3. Keep the insertion point in the document in which Equation Editor is active.
	
	You should be able to close the Equation toolbar by clicking the close button
	("X") in the title bar of the Equation toolbar.
	
	Method 3: Use the Menu to Close the Toolbar:
	
	1. Click the insertion point in the document in which you first activated
	  Equation Editor.
	
	2. On the View menu, click Toolbar.
	
	  The check mark next to the command should be removed.
	
	3. Click the document to select it.
	
	  This will remove the focus from the equation object.
	
	4. Double-click the same equation to re-activate equation editor.
	
	5. Keep the insertion point in the document in which Equation Editor is active.
	
	You should be able to close the Equation toolbar by clicking the close button
	("X") in the title bar of the Equation toolbar.
	
	Equation Editor Buttons Missing
	-------------------------------
	
	To display the Equation Editor buttons, move the mouse pointer over the space
	where the buttons should be displayed. The buttons should reappear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about Equation Editor problems, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q167945 OFF97: Equation Editor 3.0 Toolbar Disappears
	
	
	  Q170877 WD97: Equation Editor Error: Elements That Are Not Available
	
	Additional query words: equation object math formula
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
