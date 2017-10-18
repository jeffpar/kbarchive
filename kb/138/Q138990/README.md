---
layout: page
title: "Q138990: No Ball on Table in 3D Pinball"
permalink: kb/138/Q138990/
---

## Q138990: No Ball on Table in 3D Pinball

	Article: Q138990
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play 3D Pinball, or click Demo to watch a demonstration, no ball may be
	loaded on the table. When this occurs, the flippers, sound, music, and plunger
	still work, and the displayed status is "Awaiting deployment."
	
	CAUSE
	=====
	
	This problem can occur on computers with a faulty math coprocessor, or when an
	incompatibility exists between the math coprocessor and an outdated system BIOS.
	
	RESOLUTION
	==========
	
	To work around this problem, disable the math coprocessor in Device Manager. To
	do so, follow these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, double-click System Devices, and then double-click
	  Numeric Data Processor.
	
	3. On the Settings tab, click "Never use the numeric data processor," and then
	  click OK.
	
	NOTE: This resolution is a temporary workaround only for 3D Pinball. When you use
	the "Never use the numeric data processor" option, you may not be able to run
	programs that depend on the use of a math coprocessor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Plus! for Windows 95,
	version 1.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	3D Pinball uses floating-point calculations, and may attempt to use the math
	coprocessor if one is present.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbPlusSearch kbPlus95
	Version           : 95
	
	=============================================================================
	
