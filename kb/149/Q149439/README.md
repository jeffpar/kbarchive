---
layout: page
title: "Q149439: Err Msg: &quot;STOP 0x0000007B&quot; on DEC AXP 2100 Setup"
permalink: /kb/149/Q149439/
---

## Q149439: Err Msg: &quot;STOP 0x0000007B&quot; on DEC AXP 2100 Setup

	Article: Q149439
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up Windows NT version 3.51 on a DEC AXP 2100A, Setup will stop with
	the following error message shortly after you select the computer type:
	
	  STOP 0x0000007B
	
	CAUSE
	=====
	
	The 2100A does not work with the standard 2100 Series 5 hardware abstraction
	layer (HAL) that comes on DEC's version of the 3.51 installation media.
	
	RESOLUTION
	==========
	
	When you select the computer type during Setup, rather than accepting the
	default (2100 Series 5), select Other and use the disk that DEC provides along
	with the installation media. This disk contains the 2100A HAL. Setup will
	continue normally.
	
	MORE INFORMATION
	================
	
	The DEC AXP 2100A is manufactured by Digital Equipment Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt DEC AXP 2100 2100A 0x7B HAL SETUP
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
