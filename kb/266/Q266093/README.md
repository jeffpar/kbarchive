---
layout: page
title: "Q266093: XADM: Information Store Stops From Invalid QueryRows Request"
permalink: /kb/266/Q266093/
---

## Q266093: XADM: Information Store Stops From Invalid QueryRows Request

{% raw %}

	Article: Q266093
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
	
	The information store (Store.exe) may suddenly stop and generate an access
	violation. If Dr. Watson is active as the default debugger, a Dr. Watson log and
	a User.dmp file (if Dr. Watson is configured to create a User.dmp file) may be
	generated.
	
	The call stack is similar to the following:
	
	  ChildEBP RetAddr Args to Child
	  141ff8e0 0040e59c 000011ee 1e8ece80 00000000 store!EcFormatMVString8+0x21
	  141ff908 004103ac 000011ee 00000000 141ff934 store!EcFormatValue+0x654
	  141ff938 00445a06 000011ee 00000015 00000048 store!EcFormatRow+0x132
	  141ff998 00445b05 00000001 0000000b 00000000 store!VMSG__EcQueryRows+0x2d0
	  141ff9c8 00445ca9 0000000b 00000000 00000001 store!EcQueryRowsOp+0x65
	  141ffa18 0040f45e 00000001 00002504 1e1d9f68 store!EcQueryRows+0x9e
	  1ef35858 1ef35858 eca10001 00002148 00000000 store!EcRpc+0x81c
	
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
	

{% endraw %}
