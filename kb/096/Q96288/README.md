---
layout: page
title: "Q96288: How FoxPro for Windows Uses the FOXPRO.INI File"
permalink: /kb/096/Q96288/
---

## Q96288: How FoxPro for Windows Uses the FOXPRO.INI File

{% raw %}

	Article: Q96288
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	When FoxPro for Windows is started, it searches in the Windows directory
	for the FOXPRO.INI file. This file contains information about the main
	FoxPro window, including its position, size, and default font.
	
	If the FOXPRO.INI file cannot be found in the Windows directory, FoxPro
	will be started with the default settings.
	
	The information in the FOXPRO.INI file is updated each time you quit
	FoxPro. If the file has been removed, renamed, or deleted, a new one will
	be created in the Windows directory when you quit FoxPro.
	
	To change the contents of the FOXPRO.INI file:
	
	1. Start FoxPro for Windows.
	
	2. Position and size the main FoxPro window as desired.
	
	3. Change the FoxPro desktop font to the desired font by using the MODIFY WINDOW
	  SCREEN command with the FONT clause.
	
	4. Quit FoxPro.
	
	Additional query words: VFoxWin FoxWin 2.50 exit
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : 2.50 2.50a 3.00
	
	=============================================================================
	

{% endraw %}
