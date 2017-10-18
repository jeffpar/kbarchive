---
layout: page
title: "Q259496: MS00-008: Incorrect Registry Setting May Allow Cryptography Key"
permalink: kb/259/Q259496/
---

## Q259496: MS00-008: Incorrect Registry Setting May Allow Cryptography Key

	Article: Q259496
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECBulletin Kb
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft BackOffice Server 4.0 
	- Microsoft BackOffice Small Business Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a shared computer, it may be possible for a malicious user to interactively
	log on to the computer and compromise the security of the cryptographic keys of
	other users who subsequently log on to the same computer.
	
	CAUSE
	=====
	
	This vulnerability involves a registry key that is used to specify the
	dynamic-link library (DLL) for a hardware accelerator in the default
	Cryptographic service providers (CSPs) that are included with Cryptography
	Application Programming Interface (CryptoAPI). By design, such a DLL has access
	to users' public and private keys. Although only administrators should have
	permission to add such a DLL, the permissions on the key could allow any user
	who can interactively log on to the computer to do so. By writing a DLL and
	installing it, a malicious user could compromise the keys of other users who
	subsequently use the computer.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q259496i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=20330)
	
	  Alpha: DownloadDownload Q259496a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=20331)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Size    File name     Platform
	  ------------------------------------------------
	  04/11/00  08:19p  41,744  Regacl40.exe  Intel
	  04/12/00  03:43p  95,504  Regacl40.exe  Alpha
	
	
	
	Microsoft Windows NT Server version 4.0, Terminal Server Edition
	----------------------------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	The computers primarily at risk are workstations and servers running Terminal
	Server Edition. If you follow typical security recommendations, typical users
	are not allowed to interactively log on to domain controllers, Web servers,
	database servers, ERP servers, and other security-critical computers. A tool is
	available that resets the permissions on the key to the correct default values.
	In addition, it incorporates the functionality of the tool provided in Microsoft
	Security Bulletin MS00-008 located at the following Microsoft Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-008.asp
	
	This issue affects only computers running Windows NT 4.0; it does not affect
	computers running Microsoft Windows 2000.
	
	For related information about this problem, please visit the following Microsoft
	Web sites:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-024.asp
	
	  http://www.microsoft.com/technet/security/bulletin/fq00-024.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	Additional query words: security_patch
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECVulnerability KbSECBulletin KbSECHack 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ400 kbSBServ400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
