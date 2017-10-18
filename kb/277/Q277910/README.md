---
layout: page
title: "Q277910: Patch Available for &quot;Terminal Server Login Buffer Overflow&quot;"
permalink: kb/277/Q277910/
---

## Q277910: Patch Available for &quot;Terminal Server Login Buffer Overflow&quot;

	Article: Q277910
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECHack
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft has released a patch that eliminates a security vulnerability in
	Microsoft Windows NT Server 4.0, Terminal Server Edition.
	
	An unchecked buffer in the Terminal Server logon prompt could allow a malicious
	user to cause the Terminal Server-based server to run arbitrary code. The
	ability to run arbitrary code could allow the malicious user to add, change, or
	delete data, run code already on the server, or upload new code to the server
	and run it. The malicious user would not need to successfully log on to the
	Terminal Server-based server to initiate this attack.
	
	This vulnerability could be exploited remotely if connection requests are not
	filtered. By default, Terminal Server listens on TCP port 3389. You should block
	this port at the firewall or router if Terminal Server access from the Internet
	is not required.
	
	RESOLUTION
	==========
	
	To resolve this problem, either obtain the hotfix referenced in this section or
	the Windows NT Server 4.0, Terminal Server Edition, Security Rollup Package
	(SRP). For additional information about the SRP, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q277910i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=25565)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size    File name   Platform
	  ------------------------------------------------
	  10/03/2000  06:21p  42,768  Regapi.dll  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this problem could result in some degree of
	security vulnerability in Windows NT Server 4.0, Terminal Server Edition.
	
	MORE INFORMATION
	================
	
	For related information about this problem, please visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-087.asp
	
	Additional query words: security_patch kbtsesrp
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECHack 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
