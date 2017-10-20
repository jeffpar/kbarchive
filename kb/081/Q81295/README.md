---
layout: page
title: "Q81295: Setup Err Msg: Sector Not Found Error Reading Drive A:"
permalink: /kb/081/Q81295/
---

## Q81295: Setup Err Msg: Sector Not Found Error Reading Drive A:

{% raw %}

	Article: Q81295
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When setting up Windows 3.0 on the Toshiba 1600, you may receive the following
	message:
	
	  Sector Not Found Error Reading Drive A:
	
	CAUSE
	=====
	
	This error is caused by the presence of the disk-caching utility Super PC-Kwik
	Power Pak (Toshiba versions 3.x).
	
	RESOLUTION
	==========
	
	To eliminate this problem, remove the following line from your AUTOEXEC.BAT
	file:
	
	  C:\PCKWIK\SUPERPCK
	
	Also remove the following lines, if they are present:
	
	  C:\PCKWIK\PCKSCRN
	  C:\PCKWIK\PCKSPL
	  C:\PCKWIK\PCKKEY
	
	These lines load other memory-resident utilities that work in conjunction with
	Super PC-Kwik.
	
	MORE INFORMATION
	================
	
	The T1600 is manufactured by Toshiba, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.00 3.00a auto resume t 1600 KBHW 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
