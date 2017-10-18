---
layout: page
title: "Q142013: Adaptec AHA2940 Related Problems"
permalink: kb/142/Q142013/
---

## Q142013: Adaptec AHA2940 Related Problems

	Article: Q142013
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	BIOS revision 1.20 for the Adaptec 2940 is incompatible with systems using
	Phoenix BIOS versions 4.04 and 4.05. This problem has been corrected in the
	Adaptec 2940 BIOS revision 1.21 which is available from Adaptec.
	
	BIOS revision 1.21 for the Adaptec 2940 is incompatible with systems using
	Micronics motherboards with dual processors. Windows NT will load, but will only
	show one processor. There have also been problems with this adapter and
	motherboard combination when only one processor was present.
	
	
	The simplest explanation given from Adaptec is that the Adaptec 2940 card is
	interfering with the communication between NT and the motherboard's BIOS.
	
	MORE INFORMATION
	================
	
	When using an Adaptec 2940 with BIOS revision 1.20 in a system using a Phoenix
	BIOS version 4.04 or 4.05, your system may stop responding (hang) during
	startup.
	
	Usually the computer hangs after displaying the Adaptec BIOS information, but it
	has also been reported to cause problems later in the setup process. This
	behavior may also occur in systems containing a BIOS which utilizes segment
	3000.
	
	This problem has been corrected in the Adaptec 2940 BIOS revision 1.21 which is
	available from Adaptec.
	
	
	Additional query words: prodnt adaptec 2940 aha2940
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
