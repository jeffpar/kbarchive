---
layout: page
title: "Q37924: Mac DOS: Description of the TOPS FlashCard for the PC"
permalink: /kb/037/Q37924/
---

## Q37924: Mac DOS: Description of the TOPS FlashCard for the PC

	Article: Q37924
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a description of the TOPS FlashCard for the PC, which is
	available from Sun Microsystems, Inc. For more information on the TOPS
	FlashCard, call Sitka Technical Support at (415) 549-8737.
	
	MORE INFORMATION
	================
	
	The following are the system requirements for the TOPS FlashCard:
	
	- IBM-compatible computer
	
	- MS-DOS version 2.00 or later
	
	The TOPS FlashCard has six jumpers that can be used to change the board's I/O
	address, IRQ line, and DMA channel. The following diagram shows the relative
	position of the jumpers on the TOPS FlashCard (where X denotes the default
	jumper position):
	
	   ____________________________________
	  |                                    |
	  |  Ja1                               |
	  |  X H                               |
	  |  : L                               |
	  |                                    |
	  |  Ja2   Ja3         Jint  Jd2  Jd1  |
	  |  X :   : X         : X   X :  X :  |
	  |  L H   L H         3 2   1 3  1 3  |
	  |____________________________________|
	
	  Jumper Description       Default
	  ------------------       -------
	
	  Jint   Interrupt            2
	  Jd1    DMA Acknowledge      1
	  Jd2    DMA Request          1
	  Ja1    I/O Address(398)    High
	  Ja2    I/O Address         Low
	  Ja3    I/O Address         High
	
	The AppleTalk driver used by the TOPS FlashCard to communicate with the AppleTalk
	network depends on the version of TOPS/DOS software being used. TOPS/DOS version
	2.0 uses the ATALK.SYS driver, which must by installed from the CONFIG.SYS file
	of the boot disk. TOPS/DOS versions 2.1 and 3.0 uses the ALAP.EXE driver, which
	can be installed from the AUTOEXEC.BAT file of the boot disk or the DOS prompt.
	For more information on these drivers, query on the following words in the
	Microsoft Knowledge Base:
	
	  " TOPS and drivers and Mail " (without the quotation marks)
	
	Both drivers can use the following switch settings for custom installations that
	are different from the default settings of the FlashCard. If there are no
	changes from the default jumper settings, no switches should be used. The
	/FLASHTALK option allows two FlashCards to communicate at high speeds, and is
	not required for running the Microsoft Mail MS-DOS client. The following is a
	list of available options:
	
	Option         Default       Other Possible Values
	  ------------------------------------------------------------------
	
	  /BOARDINT=x        2                  3
	  /DMA=x             1           3 (AT only), none
	  /ADDRESS=xxx     398               390,310
	  /INT=xx           5C         Any unused interrupt (5C-6F)
	  /FLASHTALK=x   Enabled(1)         Disabled(0)
	
	The default factory settings for the TOPS FlashCard for the PC use interrupt 2,
	which conflicts with the hard disk controller of an IBM PC/AT or compatible
	computer. When you run the Mail MS-DOS client with the TOPS FlashCard, it is
	recommended that you set the board interrupt to 3 and the software interrupt to
	60. With these suggested settings, the command to load the AppleTalk driver for
	the TOPS FlashCard should include the /boardint=3 and /int=60 switches.
	
	TOPS FlashCard for the PC is manufactured by Sun Microsystems, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.00 3.10 PC AppleTalk
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN300DOS kbMailATN310DOS
	Version           : :3.0,3.1
	
	=============================================================================
	
