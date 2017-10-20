---
layout: page
title: "Q78773: FIX: Right Mouse Button Causes Remote Control Menus"
permalink: /kb/078/Q78773/
---

## Q78773: FIX: Right Mouse Button Causes Remote Control Menus

{% raw %}

	Article: Q78773
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 2.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 2.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 1.0 
	- Microsoft Windows 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows version 3.0, the mouse behaves unexpectedly in both Visual Basic
	version 1.0 and 2.0 under the following conditions:
	
	- A Visual Basic program is run from the environment (VB.EXE) or from an
	  executable using the run-time module.
	
	- The program has a form that contains menus.
	
	- While holding a menu open with the left button, if you click the right mouse
	  button, the mouse selection appears to be inactivated.
	
	- Moving up or down the menu while holding the left button down, causes no
	  selection until you get several inches below the pop-up (or pull-down) menu.
	  At that point, the mouse causes selection again from the remote position.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article when used with Microsoft Windows version 3.0. This bug
	was corrected in Microsoft Windows version 3.1.
	
	MORE INFORMATION
	================
	
	This problem occurs when running a Visual Basic program that has menus. It
	requires a mouse with two buttons and has been reported with both the Microsoft
	and the Logitech mouse.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the Cardfile program that comes with Visual Basic. You'll find it in the
	  Samples subdirectory.
	
	2. Put the mouse cursor on one of the menu labels and press the left mouse
	  button to activate it.
	
	3. While continuing to hold down the left button, move the cursor to a menu item
	  within the pop-up menu to highlight the menu item.
	
	4. While holding the left button down, click the right button once. The menu
	  item should no longer be highlighted.
	
	5. Move the mouse from the item you were selecting. Observe that the mouse no
	  longer activates submenus, and the menu does not retract.
	
	6. Continue to move the mouse down from the menu. At some point, the
	  highlighting of the submenu items will be activated again.
	
	7. Upon stopping on a submenu item and releasing the left button, that menu
	  command will execute.
	
	NOTE: This behavior also occurs if you open a menu and, while holding down the
	left button, you use the right button to click the screen.
	
	Additional query words: 2.00 buglist1.00 buglist2.00 fixlist3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbWin3xSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3 kbWin300 kbVB200
	Version           : :1.0,2.0,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
