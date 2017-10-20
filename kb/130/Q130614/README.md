---
layout: page
title: "Q130614: Setup Does Not Install 32-Bit Token Ring Network Components"
permalink: /kb/130/Q130614/
---

## Q130614: Setup Does Not Install 32-Bit Token Ring Network Components

{% raw %}

	Article: Q130614
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from a previous version of Windows to Windows 95, Setup does
	not upgrade real-mode network components to protected-mode components if the
	following conditions are met:
	
	- You use ODI drivers with an IBM Token Ring card. Setup defaults to the
	  generic ODI driver.
	
	  -or-
	
	- You use NDIS drivers with an IBM Token Ring card. Setup defaults to an NDIS 2
	  driver.
	
	For example, if you use Windows for Workgroups 3.11 with ODI drivers and you
	upgrade to Windows 95, Setup does not upgrade the ODI drivers to the Microsoft
	Network redirector (NWREDIR) and NDIS 3.1 network drivers.
	
	CAUSE
	=====
	
	Setup cannot distinguish between PCMCIA Token Ring cards, which require 16-bit
	network drivers, and other Token Ring cards that may be able to use 32-bit
	network drivers. Setup defaults to 16-bit network drivers to ensure that you can
	access your network.
	
	RESOLUTION
	==========
	
	If the network card you use supports 32-bit networking, install the 32-bit
	network components manually.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
