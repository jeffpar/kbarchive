---
layout: page
title: "Q90245: How to Troubleshoot Hardware Conflicts"
permalink: /kb/090/Q90245/
---

## Q90245: How to Troubleshoot Hardware Conflicts

{% raw %}

	Article: Q90245
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.10
	
	WINDOWS
	
	kbnetwork kbsound kbtshoot kbhw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Hardware conflicts are difficult to diagnose because they manifest themselves in
	different ways depending on the type of network card and what they are
	conflicting with (disk driver, sound board, and so on).
	
	Typical hardware symptoms include:
	
	- Failure of the network card device driver to load; Error 5733 when the NET
	  START command is used, or the network card fails to bind.
	
	- Inconsistent network behavior; the system stops responding (hangs) sometimes,
	  or errors occur copying large files over the network.
	
	- Error 53: trying to connect to servers. (You cannot see anything on the
	  network.)
	
	MORE INFORMATION
	================
	
	If you suspect some type of conflict, try one of the following:
	
	- Switch the network card to a different interrupt.
	
	- Check for memory conflicts between the network card and other devices in the
	  system. Some network cards use an area of upper memory. If the area of
	  memory, the card used is configurable. See the documentation for the network
	  card. You can determine which parts of upper memory are being used by other
	  devices by doing the following:
	
	  1. Remove the network drivers and EMM386.EXE from CONFIG.SYS file.
	
	  2. Restart the computer.
	
	  3. Run Microsoft Diagnostics (MSD.EXE).
	
	  4. Look at the memory map.
	
	  It should show any upper memory being used. If the net card is trying to use
	  the same area as another device, reconfigure the network card to use a
	  different memory area.
	
	- Make sure the memory range for the network card (if it uses one) is excluded
	  with EMM386.EXE if it is being used, or in the [386enh] section of SYSTEM.INI
	  file if EMM386.EXE in not being used.
	
	Additional query words: 3.10 wfwg tshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
