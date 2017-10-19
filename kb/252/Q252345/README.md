---
layout: page
title: "Q252345: XADM: Information Store Stops with Access Violation in FEqCAI"
permalink: /kb/252/Q252345/
---

## Q252345: XADM: Information Store Stops with Access Violation in FEqCAI

	Article: Q252345
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server information store may unexpectedly stop responding and an
	access violation may occur.
	
	When you view the call stack by using a debug utility, it may appear similar to
	the following call stack:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  1d4ff610  004273f8  153efff9 00000008 153c2369 0x780350a4
	  1d4ff610  00428360  153efff9 00000008 153c2369 STORE!FEqCAI+0x214
	  1d4ff660  00440588  153efff9 00000008 153c2369 STORE!OMSG::EcConfig+0xf3c
	  1d4ff7b0  00440300  153efff9 00000008 153c2369 STORE!EcCreateOMSG+0x19c
	  1d4ff820  00440878  153efff9 00000008 153c2369 STORE!EcOpenMessageOpX+0x100
	  1d4ff880  00408608  153efff9 00000008 153c2369 STORE!EcOpenMessage+0x210
	  1d4ff980  004080dc  153efff9 00000008 153c2369 STORE!EcRpc+0x4b8
	  1d4ffa60  77d13040  153efff9 00000008 153c2369 STORE!EcDoRpc+0x74
	  1d4ffa90  77d13044  153efff9 00000008 153c2369 0x77d13044
	
	CAUSE
	=====
	
	Exchange Server creates compressed addresses, and handles them as strings. The
	issue is caused by the way strings in the address of the mailbox and logon user
	object (distinguished name as based on X.500 directory name) are handled. This
	may cause the access violation.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191914 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
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
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
