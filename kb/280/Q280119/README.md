---
layout: page
title: "Q280119: Patch Available for NTLMSSP Privilege Elevation Vulnerability"
permalink: kb/280/Q280119/
---

## Q280119: Patch Available for NTLMSSP Privilege Elevation Vulnerability

	Article: Q280119
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbpatch kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECHac
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft has released a patch that eliminates a security vulnerability in
	Microsoft Windows NT 4.0. The vulnerability can allow a user who is locally
	logged on to the computer to grant themselves administrator-level privileges.
	
	A flaw in the NTLM Security Support Provider (NTLMSSP) service can potentially
	allow a non-administrative user to gain administrative control of the computer.
	To do this, the user needs a valid logon account and the ability to run
	arbitrary code on the computer.
	
	This vulnerability can be exploited only by a malicious user who can
	interactively log on to the affected computer; however, it is recommended that
	unprivileged users not be allowed to interactively log on to business-critical
	servers like domain controllers, Enterprise Resource Planning (ERP) servers,
	print and file servers, database servers, and so on. If unprivileged users are
	not allowed to interactively log on to business-critical servers,
	business-critical servers are not at risk from this vulnerability and, as a
	result, the computers that are most likely to be affected by this vulnerability
	are workstations and Terminal Servers.
	
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
	
	  US English:
	  DownloadDownload Q280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27804)
	
	  Czech:
	  DownloadDownload Czeq280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27945)
	
	  Danish:
	  DownloadDownload Danq280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27946)
	
	  Dutch:
	  DownloadDownload Nldq280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27952)
	
	  Finnish:
	  DownloadDownload Finq280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27948)
	
	  French:
	  DownloadDownload Frnq280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27949)
	
	  Hungarian:
	  DownloadDownload Hunq280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27950)
	
	  Italian:
	  DownloadDownload Itaq280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27951)
	
	  Norwegian:
	  DownloadDownload Norq280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27953)
	
	  Polish:
	  DownloadDownload PolQ280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27954)
	
	  Portuguese (Brazil):
	  DownloadDownload Braq280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27944)
	
	  Russian:
	  DownloadDownload Rusq280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27955)
	
	  Spanish:
	  DownloadDownload Spaq280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27947)
	
	  Swedish:
	  DownloadDownload Sveq280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27956)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time   Size    File name     Platform
	  -------------------------------------------------
	  11/22/2000  3:20p  36,112  Ntlmssps.dll  Intel
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a (SP6a).
	
	
	
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
	(http://www.microsoft.com/technet/security/bulletin/ms01-008.asp) to help make
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
	
	  US English:
	  DownloadDownload Q280119i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27824)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time    Size    File name     Platform
	  --------------------------------------------------
	  01/26/2001  09:01p  35,600  Ntlmssps.dll  Intel
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT Server
	4.0, Terminal Server Edition Service Pack 6 (SP6).
	
	
	
	STATUS
	======
	
	Windows NT Server 4.0
	---------------------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Microsoft Windows NT 4.0.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows NT Server 4.0, Terminal Server Edition.
	
	MORE INFORMATION
	================
	
	For more information about this vulnerability, view the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms01-008.asp
	
	Additional query words: security_patch _ ntlmssps dll kbtsesrp
	
	======================================================================
	Keywords          : kbpatch kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECHack 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbWinNTSEnt400SP6a
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
