---
layout: page
title: "Q134553: Windows 95 Hangs During First Reboot After Setup"
permalink: kb/134/Q134553/
---

## Q134553: Windows 95 Hangs During First Reboot After Setup

	Article: Q134553
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer stops responding (hangs) during the first reboot after you run
	Setup, while the "Windows 95 is now setting up your hardware and any Plug and
	Play devices you may have" screen is displayed.
	
	CAUSE
	=====
	
	This problem can be caused by a damaged .inf file. The computer hangs when
	Windows 95 tries to index the contents of all the .inf files.
	
	RESOLUTION
	==========
	
	If you know which .inf file is damaged, remove it and then run Setup again with
	the Verify Files option. If you do not know which file is damaged, remove all
	the .inf files in the hidden Windows\INF folder, and then run Setup again with
	the Verify Files option.
	
	This problem can occur if you have installed a device that installs an Oem.inf
	file. You may want to try removing all the .inf files whose name begins with
	"Oem."
	
	To remove all the files in the hidden Windows\INF folder, follow these steps:
	
	1. At an MS-DOS prompt, type the following line and then press ENTER:
	
	  " attrib -h c:\windows\inf " (without the quotation marks)
	
	2. Type the following line, and then press ENTER:
	
	  " cd c:\windows\inf " (without the quotation marks)
	
	3. Type the following line, and then press ENTER:
	
	  " ren *.inf *.old " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	When this problem occurs, the last lines in the Setuplog.txt file are:
	
	  [First Process Tree]
	  [Build Driver Index File]
	  Start
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
