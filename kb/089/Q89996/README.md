---
layout: page
title: "Q89996: Windows Sound System Supports ISA/EISA, Not Micro Channel"
permalink: /kb/089/Q89996/
---

## Q89996: Windows Sound System Supports ISA/EISA, Not Micro Channel

	Article: Q89996
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Sound System supports standard ISA/EISA architecture; it does not
	support Micro Channel Architecture (MCA) used by most PS/2 machines.
	
	MORE INFORMATION
	================
	
	The Windows Sound System is an ISA board that can be plugged into the slots of
	AT-compatible buses. The ISA bus provides 8- or 16-bit data transfer at 8 mHz,
	allowing about 1 MB of data to be transferred every second. This data transfer
	rate is sufficient for audio data that may be as high as 176K per second for 44
	kHz 16-bit stereo.
	
	Because the Windows Sound System is an ISA board, it will fit into EISA slots,
	although it will not take full advantage of the EISA compatibility. EISA is
	backwards-compatible with ISA boards but also allows faster 32-bit transfers,
	allowing several megabytes to be transferred per second.
	
	The Windows Sound System board will not work in a Micro Channel Architecture
	(MCA) machine.
	
	Additional query words: 1.00 ibm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
