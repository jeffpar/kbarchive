---
layout: page
title: "Q89834: Artisoft LANtastic Network Card Support with WFWG"
permalink: /kb/089/Q89834/
---

## Q89834: Artisoft LANtastic Network Card Support with WFWG

{% raw %}

	Article: Q89834
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a general listing of Artisoft LANtastic cards and their
	use with Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	Artisoft's 2Mbps Card (also known as the AEX Card, and most often packaged with
	the LANtastic Starter Kit) DO NOT work with Windows for Workgroups. These are
	proprietary cards that are designed with a NetBIOS chip on the card itself. This
	design does not work with a network driver interface specification (NDIS)
	compliant driver.
	
	The following cards have NDIS drivers supplied with Windows for Workgroups and
	are supported:
	
	- AE-1 Ethernet Card
	
	- AE-2 Ethernet Card
	
	- AE-3 Ethernet Card
	
	- Noderunner 2000
	
	All the above network cards can emulate an NE1000. The AE-2 and AE-3 can also be
	configured to emulate an NE2000. However, emulation for the AE-2 and AE-3 is
	configured through setting physical jumpers on the network card. Specific
	instructions for jumper settings can be found in Artisoft's documentation.
	
	Artisoft's Noderunner 2000 card is configurable through the NRCONFIG.EXE program.
	This adapter works with the NE2000-compatible driver in Windows for Workgroups
	version 3.11.
	
	
	Additional query words: 3.11 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
