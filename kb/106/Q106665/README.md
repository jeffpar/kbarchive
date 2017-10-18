---
layout: page
title: "Q106665: Example SYSTEM.INI Configuration Lines for Sound System"
permalink: kb/106/Q106665/
---

## Q106665: Example SYSTEM.INI Configuration Lines for Sound System

	Article: Q106665
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is an example of the [SNDSYS.DRV] section of the
	SYSTEM.INI file for the Windows Sound System. The explanation describes which
	lines determine the DMA, Interrupt, and I/O address of the Windows Sound System
	card:
	
	  [SNDSYS.DRV]
	  DMABufferSize=32
	  EnableAutoAcquireOPL3=1
	  Msft Hardware=1
	  Msft Support=1
	  Auto Select=1
	  Midi Play=1
	  DMA 0=1
	  DMA 1=1
	  DMA 3=1
	  Default DMA=0
	  I/O 530=1
	  I/O 604=1
	  I/O E80=1
	  I/O F40=1
	  Default I/O=530
	  IRQ 7=1
	  IRQ 9=1
	  IRQ 10=1
	  IRQ 11=1
	  Default IRQ=7
	  OldMSDOSGameCompatibility=False
	  DMADAC=0
	  DMAADC=0
	  Interrupt=10
	  IOAddress=530
	
	The DMADAC and the DMAADC lines determine the DMA that Windows Sound System uses.
	The Interrupt and IOAddress lines determine the interrupt and I/O address of the
	board.
	
	Additional query words: 1.0 1.0a 2.0 direct memory access settings snd sys
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
