---
layout: page
title: "Q162626: RUI_READ Stops When Processing Buffers Larger Than 3 KB"
permalink: /kb/162/Q162626/
---

## Q162626: RUI_READ Stops When Processing Buffers Larger Than 3 KB

	Article: Q162626
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An RUI_READ (immediate) will stop when an RU size is greater than 3 KB. No
	errors are generated; however, the application does not respond.
	
	CAUSE
	=====
	
	When an application has issued an RUI_BID verb, the WINRUI32 library will post
	the verb as soon as 12 or more bytes of RU data are available to return to the
	application. Normally, due to the nature of the message- passing mechanism
	between SNA Server and the RUI library, this means that the complete RU has been
	received by the RUI library, and when the application issues a subsequent
	RUI_READ(immediate), the RUI_READ will complete successfully.
	
	However, when the RU size on the session exceeds a certain size (just over 3 KB),
	SNA Server will split the messages it sends to the RUI library into smaller
	blocks. The RUI library, however, continues to complete the RUI_BID when it
	receives the first block of a new RU. If the application issues an
	RUI_READ(immediate) before the remainder of the RU arrives, the RUI_READ will
	complete with a return code of UNSUCCESSFUL. This will confuse any application
	that (rightly) expects all the data to be available when the RUI_BID is posted.
	
	RESOLUTION
	==========
	
	A fix to the RUI library has been created to prevent it from posting an RUI_BID
	until all the blocks of a large RU have been received.
	
	
	Updated files:
	
	  Windows NT: <Snaroot>\System\Winrui32.dll
	  Windows 95: <Winroot>\System\Winrui32.dll
	  Windows 3.x: <Winroot>\System\Winrui.dll
	  OS/2: <Snaroot>\System\Rui.dll
	  MS-DOS: <Snaroot>\Dosacs.lib (application must be relinked)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, 2.11 Service Pack 1, and 3.0. This problem was corrected in the latest SNA
	Server for Windows NT, 2.11 and 3.0 U.S. Service Packs. For information on
	obtaining these service packs, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	
	=============================================================================
	
