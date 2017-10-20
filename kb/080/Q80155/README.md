---
layout: page
title: "Q80155: PaintJet Printing May Default to LPT1 with Other Port Selected"
permalink: /kb/080/Q80155/
---

## Q80155: PaintJet Printing May Default to LPT1 with Other Port Selected

{% raw %}

	Article: Q80155
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When trying to print to LPT2, COM1, or a printer port other than LPT1, Microsoft
	Windows version 3.0 may default to the LPT1 port when using a Hewlett-Packard
	(HP) PaintJet driver.
	
	To print to ports other than LPT1, disable the PaintJet High Speed Print option.
	
	This information applies to the Microsoft Windows operating system versions 3.0
	and 3.0a. This information does not apply to later versions of Windows.
	
	MORE INFORMATION
	================
	
	The HP PaintJet driver has an option that allows high-speed printing on LPT
	(parallel) ports. This setting, if selected, defaults to LPT1. To circumvent
	this problem, do not select this option.
	
	To verify the High-Speed Direct LPT option is not selected:
	
	1. Run the Control Panel.
	
	2. Select Printers.
	
	3. Select the PaintJet Series Driver.
	
	4. Choose the Configure button.
	
	5. Choose the Setup button.
	
	6. Choose the Options button.
	
	7. Verify that the High-Speed Direct LPT option is not selected.
	
	Additional query words: CANNOT COM2 LPT3 parallel paint jet serial
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
