---
layout: page
title: "Q84994: Highlight Order of Movement Not Preserved in Program Manager"
permalink: /kb/084/Q84994/
---

## Q84994: Highlight Order of Movement Not Preserved in Program Manager

{% raw %}

	Article: Q84994
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The order in which the cursor highlights cycles through the Group icons in
	Program Manager (when you press CTRL+TAB or CTRL+F6) cannot be set, changed, or
	preserved in any way. Although you may prefer the cursor highlight to always
	move from left to right through the icons on the bottom of the program manager,
	this logical order (left to right) is not always present and cannot be set.
	
	MORE INFORMATION
	================
	
	You cannot set or preserve the order in which the cursor selection moves. An
	order does exist, but it results from a nonlinear algorithm within the Windows
	internal code (USER.EXE). This order, by nature of the algorithm, is not always
	predictable.
	
	The order assignment that USER.EXE issues is called the "z-order". This name was
	chosen by analogy to the z-axis on a multidimensional Cartesian coordinate
	system. As you look at a representation of such a coordinate system illustrated
	on the printed page, you must visualize the z-axis rising up vertically toward
	you perpendicular to the plane of the page. Similarly, opening all of the group
	windows in Program Manager and selecting the Cascade command from the Windows
	menu results in the z-order arrangement of the open document windows.
	
	When you cycle through the selections by pressing CTRL+TAB, you will find the
	highlight moves sequentially through the stack.
	
	The z-order may be temporarily reflected in the closed group icons if you were to
	close each of the windows following the cascaded arrangement. The highlight
	movement would then proceed from left to right using CTRL+TAB, but the order
	would eventually be lost as you continue to use the Program Manager.
	
	The z-order associated with the movement of the cursor highlight in the Program
	Manager should not be confused with the left to right arrangement of the group
	icons themselves or the order in which they are displayed in the Window menu of
	the Program Manager. These settings can be saved by selecting Save Settings On
	Exit from the Options menu in Program Manager.
	
	For more information on the arrangement of icons, query on the following words in
	the Microsoft Knowledge Base:
	
	  Program and Manager and group and window and order
	
	Additional query words: layout arranging arrangement sequence 3.10 3.11 highlight
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
