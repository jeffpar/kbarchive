---
layout: page
title: "Q108035: WFWG Err Msg: Your Network Adapter MS&#36;AE1 Is Not Working..."
permalink: /kb/108/Q108035/
---

## Q108035: WFWG Err Msg: Your Network Adapter MS&#36;AE1 Is Not Working...

{% raw %}

	Article: Q108035
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an Artisoft AE/1 or AE/2 card network interface card (NIC) is configured for
	IRQ 10 or 15, it does not work with the NE1000.386 NDIS 3 NIC driver that ships
	with Microsoft Windows for Workgroups 3.11. In this situation, the following
	error message appears when you load Windows for Workgroups 3.11:
	
	  Your network adapter MS$AE1 is not working properly. You may need to set it
	  up again.
	
	CAUSE
	=====
	
	The NE1000.386 NDIS 3 NIC driver that ships with Windows for Workgroups 3.11
	does not support extended IRQs. This is because the Novell NE1000 card, for
	which the driver was written, does not support extended IRQs. Therefore, NICs
	that emulate the NE1000 and support IRQ 10 or 15, such as the Artisoft AE/1 or
	AE/2 adapter, do not work with the Windows for Workgroups 3.11 NDIS 3 driver
	when set to these IRQs.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Use IRQ 2, 3, 4, 5, or 7.
	
	  -or-
	
	- Use the NDIS 2 driver, which does support extended IRQs.
	
	Additional query words: 3.11 won't work incompatible interrupts ae-1 ae1 ae/1 ae1000 ae-1000 ae-2 ae/2 ae2
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
