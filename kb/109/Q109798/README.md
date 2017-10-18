---
layout: page
title: "Q109798: Using the Sound Blaster 16 SCSI-2 with Windows NT"
permalink: kb/109/Q109798/
---

## Q109798: Using the Sound Blaster 16 SCSI-2 with Windows NT

	Article: Q109798
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Creative Labs manufactures the Sound Blaster 16 SCSI-2 audio card. This card
	works properly as a SCSI adapter under Windows NT using drivers included in
	Windows NT. The audio portion of this card works when you use drivers supplied
	by Creative Labs.
	
	MORE INFORMATION
	================
	
	The Sound Blaster 16 SCSI-2 card has an Adaptec AIC 6360 chip on board which
	appears in the hardware compatibility list. If the card is in the machine when
	you install Windows NT, it will be detected as an Adaptec 151x/152x/AIC
	6260/6360 SCSI adapter. When you add the card after Windows NT is installed, you
	need to manually install the driver by doing the following steps:
	
	1. From Program Manager, start the Windows NT Setup program.
	
	2. From the Options menu, choose Add/Remove SCSI Adapters.
	
	3. In the SCSI Adapter Setup window, choose Add.
	
	4. After you read the Setup Message, choose OK.
	
	5. In the Adapter dialog box, select Adaptec 151x/152x/AIC 6260/6360.
	
	6. In the SCSI Adapter Setup dialog box, choose Close.
	
	7. Quit the Windows NT Setup program.
	
	8. Shut down and restart Windows NT.
	
	NOTE: This adapter has to be set to IRQ 11 to work with Sparrow.sys.
	
	
	The audio features of this card are not compatible with the Sound Blaster 1.x
	driver that ships with Windows NT. To get audio functionality from this card
	under Windows NT, you need to obtain the appropriate driver from Creative Labs.
	Currently the driver (SB_NT.EXE) is available on Creative Labs' BBS at (405)
	742-6660 or in the BLASTER forum on CompuServe.
	
	NOTE: Though this card will support SCSI hard drives, it will not support booting
	from a hard drive connected to it.
	
	For more information about these drivers or the card in general, call Creative
	Labs Technical Support at (405) 742-6622.
	
	The product included here is manufactured by Creative Labs, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: prodnt 3.1 3.5 sp2
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
