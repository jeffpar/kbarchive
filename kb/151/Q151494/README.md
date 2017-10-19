---
layout: page
title: "Q151494: PCMCIA Token Ring Adapter Not Detected on Thinkpad 760"
permalink: /kb/151/Q151494/
---

## Q151494: PCMCIA Token Ring Adapter Not Detected on Thinkpad 760

	Article: Q151494
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you attempt to install an IBM 16/4 Token Ring CCA, CCA/II, or IBM Auto 16/4
	PCMCIA Token Ring adapter on an IBM Thinkpad 760, the adapter may not be
	detected by Microsoft Windows NT.
	
	MORE INFORMATION
	================
	
	The Windows NT PCMCIA device driver does not support the IBM 16/4 Token Ring
	CCA, IBM 16/4 Token Ring CCA/II, or the IBM Auto 16/4 PCMCIA Token Ring
	adapters.
	
	In order to use one of these adapters with Microsoft Windows NT, you must install
	the IBM PCMCIA Token Ring Device Driver. The following files are available from
	IBM and may be helpful in using the adapters:
	
	  TRCC.ZIP IBM   PCMCIA Token Ring Device Driver
	  UTTP1WNT.EXE   Thinkpad NT Utility Diskette
	  TPWINNT1.TXT   Thinkpad General Instructions for NT
	
	For best results, obtain the TPWINNT1.TXT file and follow the instructions
	provided.
	
	These files may be obtained from IBM's web site. The last known URL for obtaining
	more information about these files is:
	
	http://www.pc.ibm.com/support/tps/winnt.html
	
	Some models of the IBM Thinkpad 760 may also require a BIOS upgrade. For more
	information on the BIOS upgrade, please see the following article in the
	Microsoft Knowledge Base:
	
	Q141735Windows NT Setup Fails on an IBM ThinkPad 760C P120
	
	or contact IBM for more information.
	
	Files may also be available from IBM's BBS at (919) 517-0001.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
