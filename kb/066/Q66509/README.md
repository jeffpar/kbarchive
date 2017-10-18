---
layout: page
title: "Q66509: Mac DOS: Using AppleTalk and Novell Cards on Same Workstation"
permalink: kb/066/Q66509/
---

## Q66509: Mac DOS: Using AppleTalk and Novell Cards on Same Workstation

	Article: Q66509
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.37,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 1.37, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It has been reported that the following AppleTalk card and software driver
	combinations can be used in a PC that is also using Novell workstation software
	(Novell Shell version 3.01 revision A) and a Novell compatible network card:
	
	Card                        Drivers Loaded
	----                        --------------
	
	Apple LocalTalk             LSL.COM, LTALK.COM, ATALK.COM, COMPAT.COM
	with AppleShare 2.0 drivers
	
	DayStar Digital             DTALK.EXE
	
	TOPS FlashCard              ALAP.EXE (version 2.102)
	with version 2.1 drivers   PSTACK.EXE (version 2.102)
	                           TOPSPAP.EXE (version 2.01.01)
	
	TOPS FlashCard              TOPS FlashCard FlashTalk Driver
	with version 3.0 drivers   ALAP.EXE (version 3.0)
	                           PSTACK.EXE (version 3.0)
	                           TOPSTALK.EXE (version 3.0)
	                           PAPSTACK.EXE (version 3.0)
	                           PNETQ.EXE (version 3.0)
	
	MORE INFORMATION
	================
	
	Make sure that both cards used do not share any hardware memory areas or
	interrupts.
	
	Microsoft has not tested these configurations with Novell-compatible network
	cards present and therefore cannot guarantee proper results for Microsoft Mail
	(PC Client).
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN137DOS kbMailATN200DOS kbMailATN300DOS
	Version           : :1.37,2.0,3.0
	
	=============================================================================
	
