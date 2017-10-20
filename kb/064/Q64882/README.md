---
layout: page
title: "Q64882: Logitech Serial Mouse and Proteon P-1340 Card with Windows"
permalink: /kb/064/Q64882/
---

## Q64882: Logitech Serial Mouse and Proteon P-1340 Card with Windows

{% raw %}

	Article: Q64882
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using the Logitech Serial Mouse and also the Proteon P-1340 card to
	emulate a Token Ring, you may experience problems with your mouse when switching
	between MS-DOS applications under Microsoft Windows. Symptoms include erratic
	mouse movements when you use ALT+TAB or ALT+ESC to switch between applications.
	
	To correct this problem, verify that HIMEM.SYS and SMARTDRV.SYS are listed after
	DXMA.SYS, PRO4EUI.SYS, and DXMT.SYS (optional driver) in the CONFIG.SYS file.
	The following is an example of a CONFIG.SYS file that contains these drivers:
	
	  DEVICE=C:\DXMA.SYS
	  DEVICE=C:\PRO4EUI.SYS
	  DEVICE=C:\HIMEM.SYS
	  DEVICE=C:\SMARTDRV.SYS
	
	This example only applies if you are running on an IBM/PC LAN network. IBM/PC LAN
	requires the PRO4EUI.SYS driver. If you are running on a Novell network, remove
	the PRO4EUI.SYS driver.
	
	MORE INFORMATION
	================
	
	For more information, contact Proteon.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
