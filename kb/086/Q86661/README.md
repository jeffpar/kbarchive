---
layout: page
title: "Q86661: Disabling System Sounds in Windows 3.1"
permalink: kb/086/Q86661/
---

## Q86661: Disabling System Sounds in Windows 3.1

	Article: Q86661
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Not all system sound events are disabled when the Enable System Sounds check box
	in cleared.
	
	CAUSE
	=====
	
	The Enable System Sounds check box enables or disables the Default Beep event.
	(The Enable System Sounds check box is accessed by choosing the Sounds icon from
	Control Panel.)
	
	To disable an individual system sound in Control Panel, the event's sound should
	be assigned to <none> in the Files list.
	
	The Enable System Sounds option can also be changed manually by editing the
	WIN.INI file and changing the Beep= line in the [windows] section to yes or no.
	
	Additional query words: 3.10 3.11 multimedia mwin sounds card
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
