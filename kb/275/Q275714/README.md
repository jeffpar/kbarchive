---
layout: page
title: "Q275714: XADM: Information Store Stops with Multipart or Mixed Message"
permalink: /kb/275/Q275714/
---

## Q275714: XADM: Information Store Stops with Multipart or Mixed Message

	Article: Q275714
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to convert an Internet mail message to native information store
	format, the information store may stop responding (crash) unexpectedly. The
	stack trace is similar to the following:
	
	  
	
	  MSVCRT!_old_sbh_alloc_block_from_page+0x4d
	  STORE!CmnContent::hrAddParm+0xa4
	  STORE!CmcvtrHdrParm::hrAddParm+0x5e
	  STORE!CmcvtrHdrParm::hrExtract+0x2e5
	  STORE!CINETextr::hrExtract+0x1ee
	  STORE!CConvertStream::Write+0x115
	  STORE!CSTREAM::HrWrite+0xc5
	  STORE!EcWriteStreamOp+0x125
	  STORE!EcWriteStream+0xc2
	  STORE!EcRpc+0x1e46
	  STORE!EcDoRpc+0xdd
	  RPCRT4!??0THREAD@@QAE@PAJ@Z+0x6e
	  RPCRT4!NdrDcomAsyncStubCall+0x116
	  RPCRT4!?TransportProtocolArray@@3PADA+0x53
	  RPCRT4!SimpleTypeAlignment+0xb4
	  RPCRT4!UnmarshallRoutinesTable+0xdc
	  RPCRT4!MarshallRoutinesTable+0xce
	  RPCRT4!?ReferenceAssociation@LRPC_ADDRESS@@AAEPAVLRPC_SASSOCIATION@@K@Z+0x39
	  RPCRT4!NdrConformantArrayUnmarshall+0xb
	  RPCRT4!NdrConformantArrayUnmarshall+0x55
	  RPCRT4!?AssociationRequested@OSF_SCONNECTION@@QAEHPAUrpcconn_bind@@I@Z+0x515
	  RPCRT4!?AssociationRequested@OSF_SCONNECTION@@QAEHPAUrpcconn_bind@@I@Z+0x30e
	  RPCRT4!?UnicodeToAnsiString@@YGPAEPAGPAJ@Z+0x6a
	  KERNEL32!ReadConsoleOutputInternal+0x41
	
	CAUSE
	=====
	
	This issue can occur because a header attribute is improperly parsed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Store.exe | 5.5.2653.17 | 
	+-------------------------+
	
	NOTE: When you start this version of the information store, the information store
	databases are automatically upgraded to a new format. After the databases have
	been upgraded, you can restore an earlier version of the Store.exe file on the
	server, but only if it is version 5.5.2652.68 or later. If you restore a
	Store.exe file earlier than version 5.5.2652.68 after the database has been
	upgraded, you are no longer able to start the information store. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q244976 XADM: Event ID 1197 and 1005 When Starting the Information Store
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Intel:
	
	  DownloadDownload Q248838engi.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25443)
	
	  Alpha:
	
	  DownloadDownload Q248838enga.exe now
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
	
	For related information on this issue, please visit the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/MS00-082.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/technet/security/
	
	
	Additional query words: imail crash denial of service DoS patch available for "Malformed MIME Header" Vulnerability
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
