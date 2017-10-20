---
layout: page
title: "Q83680: Assigning a Shortcut Key to Program Manager"
permalink: /kb/083/Q83680/
---

## Q83680: Assigning a Shortcut Key to Program Manager

{% raw %}

	Article: Q83680
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A hot key can be assigned to Program Manager by placing PROGMAN.EXE in the
	startup group and assigning a hot key through the properties dialog.
	
	MORE INFORMATION
	================
	
	To do so:
	
	1. Double click the startup group to make it active.
	
	2. From Program Manager, choose File and then New.
	
	3. Select Program Item and then OK.
	
	4. In the Description text box, type:
	
	  Program Manager
	
	5. In the Command Line text box, type:
	
	  PROGMAN.EXE
	
	6. Choose OK.
	
	7. Choose the Program Manager icon in the startup group to make it active.
	
	8. From File Menu, choose Properties.
	
	9. Select the Shortcut Key section.
	
	10. Assign a shortcut key combination.
	
	This works because Program Manager is a single instance application. A "single
	instance application" is one that will run only once; even if you double click
	the icon a second time, this merely makes the application active. Some
	applications allow you to run multiple instances, the application WRITE.EXE is
	an example.
	
	Additional query words: 3.10 3.11 hotkey progman shortcut
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
