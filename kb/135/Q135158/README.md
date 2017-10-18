---
layout: page
title: "Q135158: Titanium Seal Menu Program Does Not Run Properly"
permalink: kb/135/Q135158/
---

## Q135158: Titanium Seal Menu Program Does Not Run Properly

	Article: Q135158
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run a program from the MS-DOS-based menu program Titanium Seal,
	rather than running the program, Titanium Seal exits.
	
	CAUSE
	=====
	
	The Titanium Seal program does not work properly if you try to run it by
	double-clicking the program's icon or by clicking the Start button, clicking
	Run, and then typing its name in the Run dialog box.
	
	RESOLUTION
	==========
	
	To ensure that the Titanium Seal program runs properly, run it from an MS- DOS
	prompt. To do so, follow these steps:
	
	1. Click the Start button, point to Programs, and then click MS-DOS Prompt on
	  the menu that appears.
	
	2. At the MS-DOS prompt, type "seal" (without the quotation marks).
	
	NOTE: You may also have to type the path to the program. For example, you may
	have to type "c:\seal\seal" (without the quotation marks).
	
	MORE INFORMATION
	================
	
	Titanium Seal assumes that Command.com is present to accept keystrokes that are
	left behind by the program when it terminates. If you run the program from the
	Windows 95 interface instead of from the MS-DOS Prompt, Command.com is not
	present to handle the leftover keystrokes; therefore, the program is unable to
	run other programs from its menu.
	
	The product discussed here is manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
