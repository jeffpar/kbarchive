---
layout: page
title: "Q241482: XADM: Invalid TNEF from Internet Mail Service Makes Store Crash"
permalink: /kb/241/Q241482/
---

## Q241482: XADM: Invalid TNEF from Internet Mail Service Makes Store Crash

	Article: Q241482
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server information store service may stop responding unexpectedly
	when processing incoming SMTP messages with a transport-neutral encapsulation
	format (TNEF) body part.
	
	The Drwtsn32.log may show a failure of Store.exe with an entry similar to the
	example in the "More Information" section of this article.
	
	CAUSE
	=====
	
	This behavior only occurs when the information store is processing incoming
	messages with a TNEF body part under stress. The TNEF body part may contain
	zero-length string data.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q248838engi.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25443)
	  Alpha: DownloadDownload Q248838enga.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25444)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	The Dr. Watson log may include information similar to the following example.
	
	Application exception occurred:
	
	      App: store.dbg (pid=117)
	      When: 8/29/1997 @ 16:1:58.640
	      Exception number: c0000005 (access violation)
	
	 *----> Stack Back Trace <----*
	 FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4 Function
	 0869f660 00402aea 34322d31 073097e0 073095d8 00402f87 store!MDB_BASE::
	   FreeLockid [omap]  (FPO: [EBP 0x77f574e0] [1,0,4])
	 0869f670 00402f87 0869f6ac 073095d8 08ac5150 00000000 store!JSES_BASE::
	   FreeLockidTx [omap]  (FPO: [0,0,2])
	 0869f684 00402d5c 00000001 0869f6ac 00390026 07349741 store!JSES_BASE::
	   EcCommitTransaction [omap]  (FPO: [EBP 0x0869f6ac] [2,0,4])
	 0869f6a0 004465cd 00000001 00000000 0132d188 08ab43c8 store!JSES::
	   EcCommitTransaction [omap]  (FPO: [EBP 0x00390026] [2,0,4])
	 0869f724 004b13eb 00000021 000035ba 00427fa0 0132d188 store!ATTACH::
	   EcSaveChanges [omap]  (FPO: [EBP 0x0132d188] [2,26,4])
	 0869f730 00427fa0 0132d188 0132f420 0132f178 004280b4 store!CVTATTACH::
	   HrSaveChanges [omap]  (FPO: [0,0,0])
	 0869f740 004280b4 0132d188 0132db99 0132d188 00005493 store!CmnBpt::
	   hrCommitBpt [omap]  (FPO: [1,0,3])
	 0869f75c 004284db 0132d188 00000000 0132db99 00000005 store!CmcvtrBptEnd::
	   hrExtract [omap]  (FPO: [EBP 0x0132db99] [5,1,4])
	 0869f78c 0045d431 08aa7015 00005493 0869f7b4 0132e6e8 store!CINETextr::
	   hrExtract [omap]  (FPO: [EBP 0x0132cfc0] [3,2,4])
	 0132cfc0 01312fb8 00000001 00688cd8 0132cee0 0132d000 store!CConvertStream::
	   Write [omap]
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
