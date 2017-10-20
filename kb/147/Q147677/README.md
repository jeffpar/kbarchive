---
layout: page
title: "Q147677: IBM PC Server 320/520 Hangs Using IBM Tidewater Adapter"
permalink: /kb/147/Q147677/
---

## Q147677: IBM PC Server 320/520 Hangs Using IBM Tidewater Adapter

{% raw %}

	Article: Q147677
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install an IBM Tidewater ISA network adapter on an IBM PC Server 320 or
	520 EISA/PCI computer, the system stops responding (hangs) and a black screen
	appears. No dump file is created.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Reboot your computer and press F2 to enter the BIOS Configuration.
	
	2. Use the Right Arrow key for Advanced BIOS configuration.
	
	3. Select Integrated Peripherals.
	
	4. Use the down arrow key to select Memory Gap. Press the + key to enable Memory
	  Gap.
	
	5. Save the changes and exit the BIOS Configuration.
	
	The Help option for Memory Gap in the BIOS configuration states the following:
	
	  Some ISA network adapters need to be mapped in memory (normally at the end).
	  However, the ISA bus can only address 0-16 megs of Memory. Therefore with 16
	  megs or more of memory installed these cards will not work. When enabled,
	  this selection will create a memory hole between 15 and 16 megs. Only Enable
	  this field if needed.
	
	IBM is aware of the problem on the Tidewater network adapters and plans to
	include instructions on how to enable the Memory Gap in a Readme file. It is
	possible that the Memory Gap option applies to other ISA network adapters in
	these IBM PC Server computers, but they should only be enabled, if needed.
	
	The IBM products discussed here are manufactured by IBM Corp., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: nic
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
