---
layout: page
title: "Q74462: DTC Hard Disk Controllers with BIOS Located in UMA"
permalink: /kb/074/Q74462/
---

## Q74462: DTC Hard Disk Controllers with BIOS Located in UMA

{% raw %}

	Article: Q74462
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following DTC (Data Technology Corporation) hard disk controller cards use
	16K of upper memory area (UMA) for their BIOS:
	
	  RLL            ESDI             EISA
	  ---            ----             ----
	
	  7287           6000             6295
	  5287i          6180
	  7187i          6280
	  5187i          6162-15TX
	                 6282-24
	
	If the MS-DOS version 5.0 EMM386.EXE does not detect the BIOS region for these
	cards, you may experience the following symptoms:
	
	1. The system hangs when EMM386.EXE loads with the RAM option.
	
	2. The system hangs when a DEVICEHIGH statement is attempted.
	
	3. FAT is corrupted after booting with EMM386.EXE.
	
	4. The system hangs and large numbers of lost clusters are reported by CHKDSK.
	
	All of these symptoms indicate that EMM386.EXE may be conflicting with the hard
	drive controller BIOS. The X= parameter should be used to exclude the hard drive
	controller BIOS region.
	
	All of the cards mentioned above use two possible address ranges in the UMA.
	Depending on how the card is configured, one of the two following EMM386.EXE
	parameters should be used:
	
	  X=C800-CC00 (default setup)
	
	  -or-
	
	  X=D800-DC00
	
	The specific address range used is determined by jumpers located on the card in
	question. The technical documentation accompanying the card should be consulted
	to determine which range to exclude.
	
	The products included here, DTC hard disk controller cards, are manufactured by
	vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: 5.00 noupd 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
