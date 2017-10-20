---
layout: page
title: "Q272113: XADM: Store Causes AV When Processing Outbound Internet Mail"
permalink: /kb/272/Q272113/
---

## Q272113: XADM: Store Causes AV When Processing Outbound Internet Mail

{% raw %}

	Article: Q272113
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
	
	The information store can cause an access violation when it tries to process
	outbound Internet e-mail messages. If the symbols are installed correctly, the
	Dr. Watson log shows the following call stack:
	
	  
	
	  #   FramePtr          RetAddr           Param1   Param2   Param3   Function Name
	  00  000000001319f7c8  0000000000439176  00000000135db218 00000000135e5490 00000000006293da STORE!Cmlist::cmnDelete+0xb
	  01  000000001319f7d4  00000000006293da  00000000135d99f8 0000000000473644 0000000000000001 STORE!Cmlist::~Cmlist+0x27
	  02  000000001319f7dc  0000000000473644  0000000000000001 00000000135d99f8 00000000006260ae STORE!Tlist<CmnHdr>::`scalar deleting destructor'+0xe
	  03  000000001319f7e8  00000000006260ae  00000000135f5b38 00000000004734ee 0000000000000001 STORE!CRFCMIMEemtr::~CRFCMIMEemtr+0x2c
	  04  000000001319f7f0  00000000004734ee  0000000000000001 00000000135f5b38 000000000047364b STORE!CXPMIMEemtr::`scalar deleting destructor'+0xe
	  05  000000001319f7fc  000000000047364b  00000000135f5b38 0000000000628ebf 00000000135cbfd0 STORE!CINETemtr::~CINETemtr+0x4e
	  06  000000001319f804  0000000000628ebf  00000000135cbfd0 0000000000439929 0000000000000001 STORE!CRFCMIMEemtr::~CRFCMIMEemtr+0x33
	  07  000000001319f80c  0000000000439929  0000000000000001 00000000135cbfd8 00000000004392f8 STORE!CRFCMIMEemtr::`scalar deleting destructor'+0x8
	  08  000000001319f818  00000000004392f8  0000000001058578 00000000135f1348 000000000049344f store!0x0000000000439929
	  09  000000001319f824  000000000049344f  00000000135cbfd0 00000000135f1348 0000000000412511 STORE!CConvertStream::UlRelease+0x28
	  0a  000000001319f830  0000000000412511  0000000000000052 0000000000425bf5 0000000000000052 store!0x000000000049344F
	  0b  000000001319f838  0000000000425bf5  0000000000000052 000000001336e160 000000001319f8ec STORE!UNK::Delete+0x184
	  0c  000000001319f854  0000000000425c5f  000000001319000e 0000000000000052 000000000040ed75 store!0x0000000000425BF5
	  0d  000000001319f860  000000000040ed75  0000000000000052 000000001319f8bc 0000000000147950 store!0x0000000000425C5F
	  0e  000000001336e224  0000000000409d6d  0000000000000000 000000001336ecf0 0000000000000076 STORE!EcRpc+0x328
	
	CAUSE
	=====
	
	In this case, the problematic message is caused because the user has a rule to
	forward all e-mail messages to an Internet address. Because of Domain Name
	System (DNS) and firewall issues, the message looped.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191914 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
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
	
	
	WORKAROUND
	==========
	
	The behavior described in the "Symptoms" section only occurs if you select the
	"Automatic replies to the Internet" option the Advanced tab of the Internet Mail
	Properties page. To avoid this behavior, clear the "Automatic replies to the
	Internet" option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
