---
layout: page
title: "Q95112: NIC at I/O Port of 0360h May Prevent Local Printing"
permalink: /kb/095/Q95112/
---

## Q95112: NIC at I/O Port of 0360h May Prevent Local Printing

{% raw %}

	Article: Q95112
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Network Interface Card (NIC) used with Windows for Workgroups (WFWG) is
	set to use an I/O Port address of 0360h, Windows may be unable to print locally.
	Also, this setting may cause lost network connections after a print job is sent
	to the local parallel port or the server may lock up when a job is printed from
	another workstation.
	
	CAUSE
	=====
	
	Parallel port LPT1 normally uses an I/O Port address of 0378h. Some network
	cards (especially NE2000 compatibles) use 20 address segments; this places the
	top of their address space at I/O Port address 0379h. So if a network card is
	set to an I/O Port address of 0360h, there may be a hardware conflict with the
	printer's I/O Port address.
	
	WORKAROUND
	==========
	
	To work around this problem, set the network card to an I/O Port address of
	0340h or lower. For more information on changing this setting on a network card,
	consult the user's manual for the card.
	
	Additional query words: 3.10 3.11 dropped lost
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
