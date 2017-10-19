---
layout: page
title: "Q82307: Bad Font or Display with PC Tools Version 7.0 or 7.1"
permalink: /kb/082/Q82307/
---

## Q82307: Bad Font or Display with PC Tools Version 7.0 or 7.1

	Article: Q82307
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run a PC Tools version 7.0 or 7.1 MS-DOS-based application in a window in
	Microsoft Windows version 3.1, the display may look garbled or the font may not
	display correctly. This can also happen in Windows in standard mode when you
	switch to a PC Tools application.
	
	RESOLUTION
	==========
	
	To work around the problem, start PC Tools applications by using the /NF, /NG,
	or /NGM options. If PC Tools applications are included in a Program Manager
	group, use the Properties command to add options to the command line.
	
	You can also include the /NF option in the application's program information file
	(PIF) by typing it in the Optional Parameters text box in the PIF Editor. You
	can use the PC Tools PCCONFIG program to specify that PC Tools applications
	should use the Text Font to display information.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	MORE INFORMATION
	================
	
	For more information about changing application properties, see chapter 3,
	"Program Manager," in the "Microsoft Windows User's Guide" for version 3.1.
	
	For more information about changing an application's PIF, see chapter 8, "PIF
	Editor," in the "Microsoft Windows User's Guide."
	
	The PC Tools products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.103.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	
	=============================================================================
	
