---
layout: page
title: "Q250302: XFOR: SMTP Mail Causes Information Store to Stop Responding"
permalink: /kb/250/Q250302/
---

## Q250302: XFOR: SMTP Mail Causes Information Store to Stop Responding

{% raw %}

	Article: Q250302
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The information store may stop responding because of an incoming SMTP message.
	The call stack may be similar to the following:
	
	  FramePtr RetAddr Param1 Param2 Param3 Function Name
	  0a97f23c 007e46b0 0a97f320 00003003 0000001e STORE!EcSzProxyFromPrvAddr
	  0a97f344 00843d75 000004e4 00000000 0a97f3c0 STORE!CVTAI::HrSetAdrlist+0x280
	  0a97f3d4 00843b3e 0a97f420 00000002 033bcf10
	  STORE!CMAPIMessage::HrProcessAddressSet+0x1e5
	  0a97f4b0 00842cdd 00000023 033bcf10 00000000
	  STORE!CMAPIMessage::HrProcessInboundProps+0xae
	  0a97f4c8 00866a34 03407118 00000023 033bcae8
	  STORE!CMAPIMessage::SetProps+0x5d
	  0a97f514 0086770a 00000000 00000023 033bcae8 STORE!HrCommitLast+0x54
	  0a97f5d4 0084fb48 ffffffff 00000000 0040c4d0 STORE!HrExtractProperties+0x9ea
	  0a97f5f4 0082a7ed 012d4438 00000002 0040c4d0 STORE!TNEF_ExtractProps+0x208
	  0a97f63c 0083fb71 03403d70 033cd9d0 00000000
	  STORE!CmnBptMessage::hrExtractTNEF+0x1ad
	  0a97f694 00812dbe 03403d70 033cd9d0 0340741d
	  STORE!CmcvtrBptEnd::hrExtract+0x301
	  0a97f6d0 0084c065 033fb85c 000078ac 0a97f6f4 STORE!CINETextr::hrExtract+0x1ee
	  0a97f714 005b1a85 03403830 033fb85c 000078ac
	  STORE!CConvertStream::Write+0x115
	  0a97f738 005aaf65 033fb85c 000078ac 0a97f7ac STORE!CSTREAM::HrWrite+0xc5
	  0a97f780 0045d112 000078ac 033fb85c 0a97f7ac STORE!EcWriteStreamOp+0x125
	  0a97f7b0 0044f526 00000001 0000003d 00000000 STORE!EcWriteStream+0xc2
	  0a97f8bc 004677ad 0a97f934 00007a00 0a97f954 STORE!EcRpc+0x1e46 0a97f950
	  77e11a67 0017a190 033fb720 0019497e STORE!EcDoRpc+0xdd
	
	CAUSE
	=====
	
	There is bad Transport-Neutral Encapsulation Format (TNEF) attached to the
	message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The resolution to this issue is to ignore the TNEF and deliver the plain message
	to the recipient.
	
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q248838engi.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25443)
	  Alpha: DownloadDownload Q248838enga.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=225444)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
