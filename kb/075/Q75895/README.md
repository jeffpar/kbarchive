---
layout: page
title: "Q75895: EMM386.EXE Exclude Ranges for IBM Token Ring Card"
permalink: kb/075/Q75895/
---

## Q75895: EMM386.EXE Exclude Ranges for IBM Token Ring Card

	Article: Q75895
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
	
	When using EMM386.EXE on a workstation that is connected to the network by an
	IBM Token Ring card, the card may have trouble initializing if the areas that it
	uses are not excluded in the EMM386.EXE line in the CONFIG.SYS file. One of the
	following exclude statements should be tried:
	
	1. EMM386.EXE X=CC00-CFFF X=D800-DBFF (or X=CC00-DBFF)
	
	2. EMM386.EXE X=D400-D7FF X=DC00-DFFF (or X=D400-DFFF)
	
	MORE INFORMATION
	================
	
	The IBM Token Ring card uses two separate address areas in the upper memory area
	(UMA); one is used to address ROM and the other is used to address RAM. There
	are two possible configurations of these address spaces under the default set
	up:
	
	Primary
	-------
	
	  ROM CC00 (16K)
	  RAM D800 (16K)
	
	Alternate
	---------
	
	  ROM DC00 (16K)
	  RAM D400 (16K)
	
	The ROM address area can be set with the network reference disk or through
	switches on the card. The RAM address area can be set with the LAN support
	program as outlined in the README file that comes with the LAN support program.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
