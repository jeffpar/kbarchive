---
layout: page
title: "Q88755: Windows 3.1 Screen Savers May Be Disabled by AutoSave"
permalink: /kb/088/Q88755/
---

## Q88755: Windows 3.1 Screen Savers May Be Disabled by AutoSave

{% raw %}

	Article: Q88755
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11,4.0,5.0,5.0a,5.0c
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Excel for Windows, versions 3.0, 3.0a, 4.0, 5.0, 5.0a, 5.0c 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Windows 3.1 screen savers do not work while running Microsoft
	Excel with the AutoSave option enabled. AutoSave is a macro that comes with
	Excel that can be loaded as an add-in macro designed to automatically save
	documents at preset times.
	
	NOTE: This information may also apply to other applications that have AutoSave
	functionality or clock or timer functionality.
	
	For example, the hDC Alarm Clock that comes with hDC First Apps version 1.0 for
	Windows also stops the Windows screen savers from operating correctly if the
	Always Visible option is selected under the Preferences Menu of the hDC Alarm
	Clock's control menu.
	
	CAUSE
	=====
	
	The Excel AutoSave feature prevents the Windows 3.1 screen savers from
	functioning when Excel is maximized or is the active Window. If Excel is running
	in an inactive window, AutoSave does not interfere with the screen saver.
	
	MORE INFORMATION
	================
	
	To determine if AutoSave is enabled in Excel, do the following:
	
	1. Run Excel.
	
	2. Open the Options menu. If the AutoSave command appears and is chosen, then it
	  is enabled. If AutoSave does not appear in the menu, or it appears and is not
	  selected, it is disabled.
	
	To disable the Autosave feature in Excel:
	
	1. From the Options menu, choose AutoSave.
	
	2. Under Save Frequency, select Never, then choose the OK button.
	
	Additional query words: 3.10 3.11 3.00a screensaver grey gray dimmed unavailable 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbExcelSearch kbWin3xSearch kbExcel500 kbZNotKeyword3 kbExcel400 kbExcel300 kbExcel300a kbExcel500c kbExcel500a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11,4.0,5.0,5.0a,5.0c
	
	=============================================================================
	

{% endraw %}
