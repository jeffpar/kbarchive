---
layout: page
title: "Q132636: Warning Msg: Windows Cannot Determine if it Can Remove this..."
permalink: /kb/132/Q132636/
---

## Q132636: Warning Msg: Windows Cannot Determine if it Can Remove this...

{% raw %}

	Article: Q132636
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
	
	When you select Eject PC or otherwise try to warm undock your computer, Windows
	prompts you with following warning dialog box:
	
	  Windows cannot determine if it can remove this device safely.
	
	  To try removing this device, make sure you have closed all your documents and
	  programs, and then click Test.
	
	  If the test is successful, you can probably remove this device safely. If you
	  encounter problems, you cannot remove this device safely while Windows is
	  running. You must turn off your computer, and then remove this device.
	
	  What do you want to do?
	
	  Test Cancel
	
	  [ ] Device can be removed safely. Do not display this message again.
	
	CAUSE
	=====
	
	In order to prepare for undocking, Windows must remove the devices in the
	docking station. Windows prompts programs and device drivers if it is safe to
	remove a device before it removes it. However, sometimes Windows is unsure if it
	is safe to remove a device. When this happens, Windows prompts you to test the
	removal of the device.
	
	RESOLUTION
	==========
	
	The first time you see this warning dialog box, click Test. If the warm
	undocking proceeds without any errors, then it is probably safe to remove the
	device, and you can select the "Device can be removed safely. Do not display
	this message again" check box.
	
	If the computer locks up or otherwise malfunctions, click Cancel, and do not try
	warm undocking with this computer in the future.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
