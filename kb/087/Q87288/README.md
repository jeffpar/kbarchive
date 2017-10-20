---
layout: page
title: "Q87288: CONTROL.INI &#91;MMCPL&#93; Section Can Make Control Panel Disappear"
permalink: /kb/087/Q87288/
---

## Q87288: CONTROL.INI &#91;MMCPL&#93; Section Can Make Control Panel Disappear

{% raw %}

	Article: Q87288
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the X= and/or Y= entry in the [MMCPL] section of the CONTROL.INI file is
	negative, Control Panel may appear to not start, and you receive no error
	messages.
	
	CAUSE
	=====
	
	The X= entry in the CONTROL.INI file is the horizontal window coordinate and the
	Y= entry is the vertical window coordinate. When these numbers are negative, the
	Control Panel starting location is off the edge of the screen.
	
	To correct this problem, use a text editor (for example, Notepad), to open the
	CONTROL.INI file and change any negative numbers to positive numbers.
	
	MORE INFORMATION
	================
	
	If X= and/or Y= entry is a low enough negative number, Control Panel may appear
	to not start. However, if you open the Task List (press CTRL+ESC or double-click
	the Desktop), it shows the Control Panel as a running application. If Control
	Panel is selected and you choose the Switch To button, the application you
	switch to is the one that was active before you opened the Task List. This
	happens because the Control Panel is running outside of the screen area.
	
	Page 222 of the "Microsoft Windows Resource Kit" (WRK) guide for Windows 3.1
	briefly describes the [MMCPL] section of the CONTROL.INI file as the section
	that
	
	  Specifies values related to the multimedia items in Control Panel
	
	However, it makes no mention of the NumApps=, X=, Y=, W=, and H= entries that do
	not pertain to the multimedia items in Control Panel.
	
	For more information on the [MMCPL] section of the CONTROL.INI file, query on the
	following words in the Microsoft Knowledge Base:
	
	  [MMCPL] and Control
	
	KBCategory: kbmm kbdocerr
	KBSubcategory: win31 kbtool
	
	Additional query words: doc err 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
