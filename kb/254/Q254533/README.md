---
layout: page
title: "Q254533: XADM: Incoming Internet Message Shows Corrupted Display Name"
permalink: /kb/254/Q254533/
---

## Q254533: XADM: Incoming Internet Message Shows Corrupted Display Name

	Article: Q254533
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbenv kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an e-mail message that contains a recipient's display name in double-byte
	character set (DBCS) is sent to an Exchange Server user through Internet Mail
	Connector, the recipient's display name may be corrupted.
	
	CAUSE
	=====
	
	Internet Mail Service incorrectly removes backslash characters (\) from the
	string of the display name in the To field. In some DBCS character sets, a
	backslash character does not have a specific meaning but is part of the DBCS
	character set. If the character is removed, the string is corrupted.
	
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
	
	MORE INFORMATION
	================
	
	The new version of Store.exe uses a new registry key that turns on/off the
	checking for the quoted pairs. This should resolve the issue without adding the
	code page overhead.
	
	The registry key is shown below:
	
	  DWORD:
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIs\ParametersSystem\InternetContent\BackSlashIsEscape
	
	When this value is set to 1, all checks for the backslash character are ignored
	(so all backslash characters are kept).
	
	Additional query words: corrupt
	
	======================================================================
	Keywords          : kbenv kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
