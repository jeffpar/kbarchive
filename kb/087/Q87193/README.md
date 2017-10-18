---
layout: page
title: "Q87193: PROFS: How Is the LAN Connected to the VM Systems?"
permalink: kb/087/Q87193/
---

## Q87193: PROFS: How Is the LAN Connected to the VM Systems?

	Article: Q87193
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to IBM PROFS and OfficeVision's LAN side gateway
	program (HostDisp or VMGATE) communicates with the VM system using 3270 terminal
	emulation and file transfer programs.
	
	On the mainframe, you must have IBM file transfer program 5664-281 (IND$FILE) or
	a compatible program. On the local-area network (LAN), you can use a variety of
	3270 emulation software on your gateway PC. A card supporting one of the
	following 3270 APIs is required in the gateway PC:
	
	  IBM High Level
	  IBM Low Level
	  DCA CUT-mode
	  DCA Non-CUT (DFT)
	  Novell NetWare 3270
	  Microsoft Comm Server version 1.1 with the DCA-DFT emulation API
	
	The gateway program (HostDisp or VMGATE) will spawn the 3270 emulation programs
	SEND and RECEIVE to perform the file transfer with the mainframe.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan SEND RECEIVE API 3270
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
