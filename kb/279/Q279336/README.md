---
layout: page
title: "Q279336: MS01-003: Patch Available for Winsock Mutex Vulnerability"
permalink: kb/279/Q279336/
---

## Q279336: MS01-003: Patch Available for Winsock Mutex Vulnerability

	Article: Q279336
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbTSE400preSP7fix kbgraphxlinkcritical KbSECVulnerabilit
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft has released a patch that eliminates a security vulnerability in
	Windows NT 4.0. This vulnerability could allow a malicious user to run a special
	program to disable an affected computer's network functionality.
	
	Like all other objects under Windows NT 4.0, mutexes (synchronization objects
	that govern access to resources) have permissions associated with them that
	govern how they can be accessed. However, a particular mutex that is used to
	govern access to a networking resource has inappropriately loose permissions.
	This could enable an attacker who has the ability to run code on a local
	computer to monopolize the mutex, thereby preventing any other processes from
	using the resource that it controls. This would have the effect of preventing
	the computer from participating on the network.
	
	The attacker would require interactive logon access to the affected computer.
	This significantly limits the scope of the vulnerability because, if normal
	security recommendations have been followed, unprivileged users are not granted
	interactive logon rights to critical computers such as servers. Unprivileged
	users typically are granted interactive logon rights to workstations and
	Terminal Servers. However, a workstation would not be a tempting target for an
	attacker, because the attacker could use this vulnerability to deny service only
	to himself or herself. The computers most likely to be affected would be
	Terminal Servers.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q2769336i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27272)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version        Size    File name    Platform
	  ----------------------------------------------------------------
	  11/15/2000  11:14p  4.0.1381.7086  78,096  Mswsock.dll  Intel
	  11/15/2000  11:14p  4.0.1381.7086  70,928  Ws2_32.dll   Intel
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 4, Service Pack 5, or Service Pack 6a.
	
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, either obtain the hotfix referenced in this section or
	the Windows NT Server 4.0, Terminal Server Edition, Security Rollup Package
	(SRP). For additional information about the SRP, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems that are determined to be at risk of attack. Please evaluate your
	computer's physical accessibility, network and Internet connectivity, and other
	factors to determine the degree of risk to your computer. Please see the
	associated Microsoft Security Bulletin
	(http://www.microsoft.com/technet/security/bulletin/ms01-003.asp) to help make
	this determination. This fix may receive additional testing at a later time, to
	further ensure product quality. If your computer is sufficiently at risk,
	Microsoft recommends that you apply this fix now.
	
	To resolve this problem immediately, download the fix as instructed below or
	contact Microsoft Product Support Services to obtain the fix. For a complete
	list of Microsoft Product Support Services phone numbers and information on
	support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q2769336i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27291)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version         Size    File name    Platform
	  -----------------------------------------------------------------
	  12/19/2000  11:29a  4.0.1381.33472  78,096  Mswsock.dll  Intel
	  12/19/2000  11:23a  4.0.1381.33472  70,416  Ws2_32.dll   Intel
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 4, Service Pack 5, or Service Pack 6a.
	
	
	
	STATUS
	======
	
	WINDOWS NT 4.0
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows NT 4.0.
	
	WINDOWS NT SERVER 4.0, TERMINAL SERVER EDITION
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows NT Server 4.0, Terminal Server Edition.
	
	MORE INFORMATION
	================
	
	For more information, please see the following Microsoft Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms01-003.asp
	
	Additional query words: security_patch kbtsesrp
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbTSE400preSP7fix kbgraphxlinkcritical KbSECVulnerability KbSECBulletin KbSECHack 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
