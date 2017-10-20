---
layout: page
title: "Q249148: XADM: Handles Leak During Online Backup"
permalink: /kb/249/Q249148/
---

## Q249148: XADM: Handles Leak During Online Backup

{% raw %}

	Article: Q249148
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
	
	If you monitor the Exchange Server computer by using Performance Monitor, you
	find that many handles leaked after an online backup.
	
	CAUSE
	=====
	
	Several registry keys are opened during an online backup. Some of them come from
	the Mdbrest.dll file. After the query, the keys are not closed. They remain open
	for later use for performance reasons. But if the Mdbrest.dll has been relocated
	because of a memory address collision, those keys are not closed. They are
	reopened, and the previous handles leak when they are queried again.
	
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
	
	If you use CDB to attach to the Mad.exe file, the following information is
	displayed:
	
	  LDR: Automatic DLL relocation in Mad.exe
	  LDR: Dll mdbrest.dll base 004b0000 relocated due to collision with Dynamically
	  Allocated Memory
	  CDB ModLoad: 0b950000 0b982000 Mdbrest.dll
	  CDB ModLoad: 6fcc0000 6fcd4000 C:\Exchsrvr\Bin\Netif.dll
	  CDB ModLoad: 6fcb0000 6fcb8000 C:\Exchsrvr\Bin\Isatq.dll
	
	If you use the Oh.exe file to check the handles that are held by the Mad.exe
	file, you find that the leaked handles are from the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CCS\Service\MSExchangeIS\ParametersPrivate
	
	The fix closes all such keys when the .dll file is detached.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
