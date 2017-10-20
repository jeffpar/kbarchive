---
layout: page
title: "Q149405: Real-Mode Compression Driver Not Listed in Memory"
permalink: /kb/149/Q149405/
---

## Q149405: Real-Mode Compression Driver Not Listed in Memory

{% raw %}

	Article: Q149405
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95 using the Safe Mode Command Prompt Only option, you do
	not see the real-mode DriveSpace or DoubleSpace driver listed when you run the
	MEM command with the /C or /D switch, even if you are using a compressed drive.
	
	CAUSE
	=====
	
	When you start Windows 95 using the Safe Mode Command Prompt Only option, the
	memory allocated to the real-mode compression driver appears as part of the IO
	System Data entry instead of appearing separately.
	
	RESOLUTION
	==========
	
	To view the real-mode DoubleSpace or DriveSpace driver in memory, start Windows
	95 with the Command Prompt Only option instead of the Safe Mode Command Prompt
	Only option, and then run the MEM command with the /C or /D switch.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
