---
layout: page
title: "Q192542: XFOR: Notes Connector Crashes Processing Voice Mail Attachment"
permalink: kb/192/Q192542/
---

## Q192542: XFOR: Notes Connector Crashes Processing Voice Mail Attachment

	Article: Q192542
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During normal operation while processing a voice mail attachment, the Microsoft
	Exchange Notes Connector may terminate unexpectedly with an access violation. If
	the correct Windows NT and Microsoft Exchange debug symbols are installed, the
	resulting Dr. Watson log may have a stack dump similar to the following:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  0012ee0c  003109d1  00000010 01251a40 0012ee30
	   LSMEXIF!formatAttachIcon+0xd3
	  0012f158  0030fbad  00000004 017a3e78 0012f1c0
	   LSMEXIF!getIconInfo+0xa1({...})
	  0012f6ec  002e750f  017a3c34 00000000 0012f758
	   LSMEXIF!MEXEGetIPMAttachBinFile+0x1ed
	  0012f988  004044b1  00000000 0012fa2c 0012fab8
	   LSMEXHC!MEXHCMessage::getAttachment+0x1ef({...}, {...}, {...}, {...})
	  0012fef8  004031da  01177438 01178698 00000000
	   LSMEXNTS!MEX2NTSAttachXFM+0x131
	  0012ff34  0024727d  00000000 00406859 00d26cb0
	   LSMEXNTS!recvFromExchange+0x3ea
	  0012ff50  00401c50  00d28170 00000000 932e2053
	   LSCPS!EventManager::process+0x11d
	  0012ff6c  004013dc  00404ddf 00000004 00d20c60
	   LSMEXNTS!runApp+0x380(...)
	  0012ff70  00404ddf  00000004 00d20c60 00d20350 LSMEXNTS!main+0x1c
	  00406859  00000000  00000000 00000000 00000000
	   LSMEXNTS!mainCRTStartup+0xff(...)
	
	CAUSE
	=====
	
	The Octel Unified Messenger product sends voice mail messages as attached wave
	files via Microsoft Exchange. The attachments of these messages do not contain
	all expected information. When a Octel voice message was sent through the Notes
	Connector, the Notes Connector did not handle the case where the attachment
	information was not present and referenced a NULL pointer, resulting in the
	access violation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: NOTESMC
	
	  File Name     Version
	  ------------------------
	  Lsmexif.dll   5.5.2361.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability. Additional query words: Lucent VM
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
