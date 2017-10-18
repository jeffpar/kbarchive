---
layout: page
title: "Q88763: Display Options for 286 Machines with Windows 3.0, 3.0a"
permalink: kb/088/Q88763/
---

## Q88763: Display Options for 286 Machines with Windows 3.0, 3.0a

	Article: Q88763
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The display options available when installing Microsoft Windows vary for 80386
	and 80286 machines. The following display choices are for 80286 machines and do
	not appear when installing Windows on an 80386 computer:
	
	  Display                      Driver
	  -----------------------------------
	
	  CGA                          CGA.DRV
	  EGA black and white          EGAHIBW.DRV
	  EGA monochrome               EGAMONO.DRV
	  IBM MCGA                     VGAMONO.DRV
	  Olivetti OEC color display   SV400A.DRV
	     or AT&T VDC750
	
	All of these displays, except the Olivetti OEC Color Display or AT&T VDC750
	have the designation of (286 only). These options are available on 8086 and 8088
	computers as well.
	
	When installing Windows on a Olivetti M24, M240, and AT&T 6300 (8086
	processor machines), Setup may detect the display as EGA. These computers should
	be set up for Olivetti/AT&T Monochrome or PVC Display.
	
	Additional query words: 3.00 3.00a 3.0 3.0a olibw.drv
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
