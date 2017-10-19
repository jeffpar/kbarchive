---
layout: page
title: "Q100038: Mac DOS: Drivers Needed for MS-DOS Client for AppleTalk Mail"
permalink: /kb/100/Q100038/
---

## Q100038: Mac DOS: Drivers Needed for MS-DOS Client for AppleTalk Mail

	Article: Q100038
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail for AppleTalk Networks MS-DOS workstation is an MS-DOS-based
	program that relies on AppleTalk protocols to reach the AppleTalk Server. You
	can reach the Macintosh-based server from a PC by using either an AppleTalk Card
	or Ethernet Card.
	
	Cards/Configurations Supported
	------------------------------
	
	- Tops Flashcard (with Tops 2.0 and 3.0 drivers)
	
	- Apple LocalTalk Card (with Farallon AppleShare drivers)
	
	- Daystar Card (with Daystar drivers)
	
	- Hercules Network Card Plus (with Tops drivers)
	
	- EtherLink II or Ethercard (with Tops 3.0 or AppleShare Phase II drivers)
	
	Drivers Necessary to Run Mail
	-----------------------------
	
	For Tops 2.0:
	
	  ALAP /INT=60 - Tops Flashcard FlashTalk Driver
	
	  PSTACK - Tops AppleTalk Protocol Stack
	
	  TOPSPAP - Tops Printer Access Protocol
	
	For Tops 3.0:
	
	  ALAP /INT=60 - Tops Flashcard FlashTalk Driver
	
	  PSTACK - Tops AppleTalk Protocol Stack
	
	  TOPSPAP - Tops Printer Access Protocol
	
	For Daystar:
	
	  DTALK - Daystar LocalTalk Driver
	
	For AppleShare (PhoneNet):
	
	  LSL - Apple Link Support Layer
	
	  ATALK - AppleTalk PC Protocol Stack
	
	  LTALK(P) - Apple LocalTalk MLID
	
	  PAP_WS - AppleTalk PAP Workstation Protocol
	
	  COMPAT.COM - Compatibility Module
	
	NOTE: The MS-DOS client is not supported under Windows 3.1.
	
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN300DOS kbMailATN310DOS
	Version           : :3.0,3.1
	
	=============================================================================
	
