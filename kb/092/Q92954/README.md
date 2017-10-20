---
layout: page
title: "Q92954: PRB: PWB Hangs Pasting Text from Windowed MS-DOS System Menu"
permalink: /kb/092/Q92954/
---

## Q92954: PRB: PWB Hangs Pasting Text from Windowed MS-DOS System Menu

{% raw %}

	Article: Q92954
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:2.0,2.1.49
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 2.0, 2.1.49 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Programmer's WorkBench (PWB) in a windowed MS-DOS window in Microsoft
	Windows, pasting text into the editor using the Paste command on the window
	system menu causes PWB to experience problems or to hang.
	
	RESOLUTION
	==========
	
	Use the Windows PIF (Program Information File) Editor to modify the PIF for PWB.
	Open the PWB.PIF file from the C/C++ version 7.0 BIN directory (by default,
	C700\BIN or WINDEV\BIN). Choose the Advanced options button. Then remove the
	check from the Allow Fast Paste option. Choose Save from the File menu to save
	the changes. Then close the PIF Editor.
	
	MORE INFORMATION
	================
	
	For more information on the PIF Editor Allow Fast Paste option, see page 274 of
	the "Windows User's Guide" for version 3.1.
	
	Additional query words: 2.00 2.10.49 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB200DOS kbPWB2149DOS
	Version           : MS-DOS:2.0,2.1.49
	
	=============================================================================
	

{% endraw %}
