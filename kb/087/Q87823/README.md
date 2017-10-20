---
layout: page
title: "Q87823: Wired for Sound Pro May Cause System Hangs on Exit"
permalink: /kb/087/Q87823/
---

## Q87823: Wired for Sound Pro May Cause System Hangs on Exit

{% raw %}

	Article: Q87823
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Wired for Sound Pro may cause your computer to stop responding (hang) when you
	exit Windows 3.1.
	
	CAUSE
	=====
	
	If the computer hangs when you exit Windows or you hear a conflict between two
	sounds when a system event occurs, check to see if these problems occur when
	Wired for Sound Pro is not loaded. Wired for Sound Pro may be conflicting with
	Windows Event sounds assigned in the Control Panel Sounds option.
	
	RESOLUTION
	==========
	
	To resolve the problem, either disable the Windows Event sounds or disable Wired
	for Sound Pro.
	
	To disable the Windows Event sounds, proceed as follows:
	
	1. From Control Panel choose the Sound icon.
	
	2. Select the first system event from the Events list box and then choose
	  <None> from the Files menu. Repeat this step for each of the events
	  listed in the Event list box.
	
	3. Choose the OK button.
	
	4. Exit and restart Windows so your changes can take effect.
	
	
	For further information about Wired for Sound Pro, contact Aristosoft.
	
	Wired for Sound Pro is manufactured by a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 3.11 hang lock-up hung stop lock up freeze crash 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
