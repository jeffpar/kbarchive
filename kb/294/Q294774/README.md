---
layout: page
title: "Q294774: ISAPI Extension In-Process w/ Application Marked High Isolation"
permalink: kb/294/Q294774/
---

## Q294774: ISAPI Extension In-Process w/ Application Marked High Isolation

	Article: Q294774
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbCOMIS kbWin2000PreSP3Fix KbSECVulnerability KbSECHack kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an ISAPI DLL has the same name as a DLL that is listed in the
	InProcessIsapiApps metabase entry, Internet Information Services (IIS) loads the
	ISAPI extension in-process even when the Application is marked for High
	Isolation.
	
	CAUSE
	=====
	
	When IIS reads the list of InProcessIsapiApps from the metabase, it makes two
	copies of each entry: one copy of the entire path and one copy of only the DLL.
	This allows for relative path matching.
	
	RESOLUTION
	==========
	
	To resolve this problem, either obtain the hotfix referenced in this section or
	Windows 2000 Security Rollup Package 1 (SRP1). For additional information about
	SRP1, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q311401 Windows 2000 Security Rollup Package 1 (SRP1), January 2002
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q301625_W2K_SP3_x86_en.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=32011)
	
	NOTE: This patch can be installed on systems running Windows 2000 Service Pack 1
	or Windows 2000 Service Pack 2. You must reapply the security rollup patch after
	you install a Windows 2000 Service Pack.
	
	Release Date: August 15, 2001
	
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
	
	  Date        Time   Version        Size     File name
	  ----------------------------------------------------
	  31-May-2001 15:32  5.0.2195.3649  353,040  W3svc.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Internet Information Services 5.0. This problem was first
	corrected in Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	This patch also contains fixes for the problems described in the following
	Microsoft Knowledge Base article:
	
	  Q297860 IIS 5.0 Security and Post-Windows NT 4.0 SP5 IIS 4.0 Patch Rollup
	
	For more information on this vulnerability, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms01-044.asp
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 The Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	Additional query words: kbIISCom security_patch kbWin2000srp1
	
	======================================================================
	Keywords          : kbSecurity kbCOMIS kbWin2000PreSP3Fix KbSECVulnerability KbSECHack kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
