---
layout: page
title: "Q86308: Unable to Test Idlewild Screen Savers from Control Panel"
permalink: /kb/086/Q86308/
---

## Q86308: Unable to Test Idlewild Screen Savers from Control Panel

{% raw %}

	Article: Q86308
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Idlewild is running under Windows version 3.1, you are unable to test the
	Idlewild screen saver from Control Panel's Desktop. When you choose the Test
	button, instead of running the screen saver, the screen goes blank.
	
	CAUSE
	=====
	
	For the screen saver selections in the Desktop dialog box to work correctly,
	Idlewild must be disabled.
	
	NOTE: This only happens with the Idlewild screen saver selections. The screen
	savers that come with Windows 3.1 work correctly.
	
	WORKAROUND
	==========
	
	To disable Idlewild, delete IDLEWILD.EXE from the LOAD= line in the WIN.INI
	file.
	
	Additional query words: 3.10 3.11 screensaver idle wild 1.00 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
