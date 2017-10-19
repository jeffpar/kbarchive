---
layout: page
title: "Q48742: Mac DOS: Requirements for Mail and TOPS/DOS 2.1"
permalink: /kb/048/Q48742/
---

## Q48742: Mac DOS: Requirements for Mail and TOPS/DOS 2.1

	Article: Q48742
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail (PC Client) versions 2.00 and 3.00 support TOPS/DOS version 2.1
	or later. For Mail to run correctly under TOPS/DOS 2.1, you must load the
	following TOPS/DOS 2.1 software modules:
	
	  Modules        Description
	  -------        -----------
	
	  ALAP.EXE       (Version 2.102 or later) -- the TOPS AppleTalk
	                 driver. It allows the TOPS FlashCard to provide a
	                 communication interface between the PC and the
	                 AppleTalk network. It is recommended that you
	                 install the ALAP driver at software interrupt
	                 address 60 with the switch /INT=60.
	
	  PSTACK.EXE     (Version 2.102 or later) -- the TOPS Protocol Stack
	                 driver.
	
	  TOPSPAP.EXE    (Version 2.01.01 or later) -- the TOPS Printer
	                 Access Protocol driver.
	
	MORE INFORMATION
	================
	
	The ALAP.EXE and PSTACK.EXE software modules are provided on the TOPS/DOS 2.1
	distribution disks or with version 2.1 TOPS FlashCards on the TOPS FlashCard
	Driver disk.
	
	TOPSPAP.EXE can be found only on the TOPS FlashCard Driver disk provided with the
	TOPS FlashCard. Older TOPS FlashCards (earlier than version 2.1) contain
	versions of TOPSPAP.EXE that are incompatible with Mail for the PC versions 2.00
	and 3.00.
	
	If you have an older TOPS FlashCard, you can receive the latest version of
	TOPSPAP.EXE by contacting Sitka Customer Support at (415) 549-8737. TOPSPAP.EXE
	version 2.01.01 can be obtained by requesting the TOPS/DOS 2.1 Supplemental
	Drivers disk.
	
	
	Additional query words: 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN200DOS kbMailATN300DOS
	Version           : :2.0,3.0
	
	=============================================================================
	
