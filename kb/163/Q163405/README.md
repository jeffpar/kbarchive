---
layout: page
title: "Q163405: Writer 2: Shared Graphic Filters not Compatible with Paint"
permalink: /kb/163/Q163405/
---

## Q163405: Writer 2: Shared Graphic Filters not Compatible with Paint

	Article: Q163405
	Product(s): Microsoft Home Kids Products
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creative Writer, version 2.0 installs the Paint It! application as well as
	installing an updated version of the PC Paintbrush (PCX) filter. The PCX filter
	is installed to the shared graphic filter location. This filter works correctly
	with Paint It!, but may be incompatible with Microsoft Paint, the generic paint
	application that ships with Windows 95.
	
	When you try to open a PCX graphic in Microsoft Paint using the updated filter,
	you may receive a fatal exception error, and the application will close.
	
	-or-
	
	You may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click the Details button, you may see the following:
	
	  MSPAINT caused an invalid page fault in module MSPAINT.EXE at 0137:...
	
	RESOLUTION
	==========
	
	Restore the original version of the PCX filter. The original version will work
	with both Creative Writer and Microsoft Paint. Use the following steps to
	restore the filter:
	
	1. Rename the PCX filter (.flt) files located in the Program Files\ Common
	  Files\Microsoft Shared\Grphflt folder.
	
	  For more information about how to accomplish this task in Windows, please see
	  your Windows printed documentation or online Help.
	
	2. After you have renamed the .flt files, click the Start button, point to
	  Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs, and then click the Windows Setup tab.
	
	4. Under Components, click Accessories, and then click the Details button.
	
	  NOTE: Do not remove the check mark from the Accessories check box.
	
	5. Clear the check box for Paint, click OK, click Apply, and then click OK.
	
	6. Repeat Steps 3 and 4.
	
	7. Select the check box for Paint, click OK, click Apply, and then click OK.
	
	8. Restart your computer.
	
	Your original shared graphic filters are now restored and will work with both
	applications.
	
	Microsoft has confirmed this to be a problem in Creative Writer for Windows,
	version 2.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kids kidsplus kidsplus! pack plus plus!
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbCreativeWriter200
	Version           : 2.0
	
	=============================================================================
	
