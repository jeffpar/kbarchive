---
layout: page
title: "Q71844: Scroll Bars Not Displaying in Program Manager in Windows"
permalink: /kb/071/Q71844/
---

## Q71844: Scroll Bars Not Displaying in Program Manager in Windows

{% raw %}

	Article: Q71844
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows version 3.0, the scroll bars do not update correctly in
	Program Manager groups if either of the following conditions exist:
	
	- The scroll bars were not already present.
	
	- Auto Arrange on the Option menu in Program Manager is not checked.
	
	Vertical and horizontal scroll bars display in Program Manager group windows when
	any icon contained within a group is not fully visible. If an icon is selected
	and dragged out of view so that it appears clipped by the group window border,
	the vertical and/or horizontal scroll bar that should appear do not.
	
	This problem does not occur in later versions of Windows.
	
	MORE INFORMATION
	================
	
	To display the scroll bars in Windows version 3.0, do one of the following:
	
	- Minimize and then restore the group window.
	
	  -or-
	
	- Move a different icon within the group window.
	
	Workaround
	----------
	
	From the Options menu in Program Manager, choose Auto Arrange. The truncated icon
	"snaps back" into the next available icon position.
	
	Additional query words: 3.00 3.0 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
