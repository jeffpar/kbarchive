---
layout: page
title: "Q128888: Network Adapter at I/O 320 Not Detected on Acer Computers"
permalink: kb/128/Q128888/
---

## Q128888: Network Adapter at I/O 320 Not Detected on Acer Computers

	Article: Q128888
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows 95, if the network adapter detection routine
	determines that the PC is an Acer, the detection of network adapters at I/O
	address 320h is bypassed.
	
	CAUSE
	=====
	
	Setup does not check the range 320-32f on any computer with an Acer BIOS due to
	restrictions for network adapter detection in the DETLOG.TXT file.
	
	
	WORKAROUND
	==========
	
	To work around this problem, change the network adapter to use a different I/O
	address, or manually configure the network components in Windows 95 using a
	custom Setup or maintenance-mode Setup.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
