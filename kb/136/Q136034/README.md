---
layout: page
title: "Q136034: Updated MODEM.INF Available For Megahertz Modems"
permalink: kb/136/Q136034/
---

## Q136034: Updated MODEM.INF Available For Megahertz Modems

	Article: Q136034
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use Windows NT Remote Access Service (RAS) and a Megahertz modem, you can
	obtain a software support release from Megahertz Corporation that contains a new
	MODEM.INF file with updated drivers for all Windows NT supported Megahertz
	modems. This release also contains a README.TXT file that covers several topics,
	for example:
	
	- The new MODEM.INF file also supports the Megahertz XJ2288/CC3288 modems.
	
	- RAS modem auto-detection may not work with certain modem revisions.
	
	To obtain the release, connect to CompuServe and download RASMODNT.EXE from the
	Megahertz (9) file library in the Modem Vendor Forum (GO MODEMVENDOR). For
	additional information, contact Megahertz Technical Support at (801) 320-7777.
	
	NOTE: Although your modem operates correctly under Windows Terminal or another
	terminal program, if you configure your modem for the wrong modem driver in RAS
	or if you have a modem model that received a new BIOS revision or chip set since
	the creation of the RAS modem driver, the following error message appears when
	you dial a RAS server:
	
	  Error 652 Unrecognized Response From Device
	
	
	To correct this problem, try one or more of the following:
	
	- Configure your modem for the correct or compatible modem model in RAS.
	
	- Contact the modem manufacturer for an updated MODEM.INF section, if the
	  RASMODNT.EXE did not correct the problem.
	
	- Customize the existing MODEM.INF section for your modem to comply with the
	  new BIOS chip set.
	
	- Create a new MODEM.INF section for your modem at the end of the MODEM.INF
	  file
	
	
	Megahertz modems are manufactured by Megahertz Corporation, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt hcl async
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
