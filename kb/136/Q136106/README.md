---
layout: page
title: "Q136106: Re-enabling CMD PCI IDE Controller Hangs Computer"
permalink: /kb/136/Q136106/
---

## Q136106: Re-enabling CMD PCI IDE Controller Hangs Computer

{% raw %}

	Article: Q136106
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
	
	If you re-enable a disabled CMD PCI controller in Device Manager and click OK
	when you are prompted "Do you want to restart your computer now," the computer
	beeps repeatedly and stops responding (hangs). Or, the computer may restart
	normally but the CMD PCI controller may remain disabled in Device Manager.
	
	CAUSE
	=====
	
	Windows 95 does not support dynamic disabling and re-enabling of PCI IDE
	controllers.
	
	RESOLUTION
	==========
	
	To re-enable the CMD PCI controller, use either of the following methods:
	
	Method 1
	--------
	
	Reinstall Windows 95. To do so, run Setup from the command prompt.
	
	Method 2
	--------
	
	1. Restart your computer in Safe Mode. To do so, restart your computer, press
	  the F8 key when you see the "Starting Windows 95" message, and then choose
	  Safe Mode from the Startup menu.
	
	2. In Control Panel, double-click System.
	
	3. On the Device Manager tab, double-click the Hard Disk Controllers branch to
	  expand it.
	
	4. Click the CMD PCI IDE controller, and then click Remove.
	
	5. Once the device is removed, restart Windows 95 normally. The CMD PCI
	  controller should be redetected automatically. After Windows 95 installs the
	  drivers for the controller, restart the computer.
	
	
	Additional query words: cmd640 cmd640x
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
