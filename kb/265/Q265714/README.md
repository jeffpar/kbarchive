---
layout: page
title: "Q265714: SNMP Registry Entries Are Saved in Plain Text Format"
permalink: /kb/265/Q265714/
---

## Q265714: SNMP Registry Entries Are Saved in Plain Text Format

	Article: Q265714
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECBulletin
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	For additional information about how to resolve this problem in Microsoft Windows 2000, click the article number below 
	to view the article in the Microsoft Knowledge Base:
	
	  Q266794 Windows 2000 SNMP Registry Entries Are Saved in Plain Text Format and
	  Are Readable
	
	SYMPTOMS
	========
	
	Microsoft has released a tool that corrects the permissions on several registry
	values in Microsoft Windows NT 4.0. The default permissions could allow a
	malicious user to gain additional privileges on an affected machine.
	
	After you create the PermittedManagers and ValidCommunities registry keys for the
	Simple Network Management Protocol (SNMP) service, any user has permission to
	read the contents of the keys. The keys should only be accessible to
	administrators. SNMP is not installed on Windows NT 4.0 computers by default.
	
	For additional information about other registry keys affected by this tool, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q267861 RAS Registry Modification Allowed Without Administrative Rights
	
	  Q267864 MTS Package Administration Key Includes Information About Users
	
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
	
	  DownloadDownload Q265714i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=24501)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	NOTE: Due to file dependencies, this patch requires Windows NT 4.0 Service Pack 5
	or later.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name     Platform
	  ---------------------------------------------------
	  06/23/2000  08:28p   42,256  Regacl40.exe  Intel
	
	  06/23/2000  08:28p  161,040  Tcpcfg.dll    Intel
	
	  06/23/2000  08:27p   96,016  Regacl40.exe  Alpha
	  06/23/2000  08:26p  242,960  Tcpcfg.dll    Alpha
	
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems that are determined to be at risk of attack. Please evaluate your
	computer's physical accessibility, network and Internet connectivity, and other
	factors to determine the degree of risk to your computer. Please see the
	associated Microsoft Security Bulletin () to help make this determination. This
	fix may receive additional testing at a later time, to further ensure product
	quality. If your computer is sufficiently at risk, Microsoft recommends that you
	apply this fix now.
	
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
	
	  DownloadDownload Q265714i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=28812)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name     Platform
	  ---------------------------------------------------
	  07/26/2000  04:46p   42,256  regacl40.exe  Intel
	  02/19/2001  03:39p  161,040  tcpcfg.dll    Intel
	
	
	
	STATUS
	======
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows NT 4.0.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows NT Server 4.0, Terminal Server Edition.
	
	MORE INFORMATION
	================
	
	For additional information about this vulnerability, see the following Microsoft
	Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/MS00-095.asp
	
	Additional query words: security_patch
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECBulletin 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
