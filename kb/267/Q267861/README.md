---
layout: page
title: "Q267861: MS00-095: RAS Registry Modification Allowed Without Administrati"
permalink: /kb/267/Q267861/
---

## Q267861: MS00-095: RAS Registry Modification Allowed Without Administrati

	Article: Q267861
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbSecurity MSGRAPH kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECBul
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft has released a tool that corrects the permissions on several registry
	values in Microsoft Windows NT 4.0. The default permissions could allow a
	malicious user to gain additional privileges on an affected machine.
	
	The "RAS Administration" key, HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\RAS, provides
	a way to install third-party RAS products that work with the Windows NT native
	RAS service. By changing one of the values in this key, it would be possible for
	a malicious user to specify code of her choice as a third-party management tool.
	The code would then run in the LocalSystem security context. Although it might
	be possible to make the needed registry changes remotely, the malicious user's
	code would need to reside on the affected computer itself. RAS is not installed
	on Windows NT 4.0 machines by default.
	
	For additional information about other registry keys affected by this tool, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q265714 Windows NT 4.0 SNMP Registry Entries Are Readable
	
	  Q267864 MTS Package Administration Key Includes Information About Users
	
	For additional information about this vulnerability, see the following Microsoft
	Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/MS00-095.asp
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the individual package referenced below or
	obtain the Windows NT 4.0 Security Rollup Package. For additional information on
	the SRP, click the article number below to view the article in the Microsoft
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
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this problem could result in some degree of
	security vulnerability in Windows NT 4.0.
	
	Additional query words: security_patch
	
	======================================================================
	Keywords          : kbSecurity MSGRAPH kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECBulletin 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
