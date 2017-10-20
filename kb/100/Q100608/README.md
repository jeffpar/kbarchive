---
layout: page
title: "Q100608: Windows Reboots at Startup on the Texas Instruments SP1000"
permalink: /kb/100/Q100608/
---

## Q100608: Windows Reboots at Startup on the Texas Instruments SP1000

{% raw %}

	Article: Q100608
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows on a Texas Instruments (TI) SP1000, your machine may
	reboot if the statement DOS=HIGH or DOS=HIGH,UMB is in the CONFIG.SYS file.
	
	RESOLUTION
	==========
	
	To work around this problem remove any DOS= commands from your CONFIG.SYS file.
	
	The TI SP1000 may require a machine (/M) switch on the HIMEM.SYS command line in
	the CONFIG.SYS file. Machine number 8 or 12 should correct this problem. Texas
	Instruments Technical Support recommends that you try the machine number 12
	switch first.
	
	The SP1000 is manufactured by Texas Instruments, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	For more information, call Texas Instruments Technical Support.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
