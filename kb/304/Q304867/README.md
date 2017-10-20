---
layout: page
title: "Q304867: Server Configuration Error Appears When Viewing a Web Page"
permalink: /kb/304/Q304867/
---

## Q304867: Server Configuration Error Appears When Viewing a Web Page

{% raw %}

	Article: Q304867
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbCOMIS kbWin2000PreSP3Fix KbSECVulnerability KbSECHack KbSECDOS kbWin2000sp
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A denial of service vulnerability exists in Internet Information Services (IIS)
	5.0 because of the way IIS interprets content that contains a particular type of
	invalid MIME header. If an attacker places content that contains this type of
	defect onto a server, and then requests it, the IIS service is unable to serve
	any content until a spurious entry is removed from the File Type table for the
	site.
	
	In order to exploit this vulnerability, the attacker must have the ability to
	place content onto an affected Web server. However, best practices strongly
	recommend that you never allow an untrusted user to install content on a Web
	server. The vulnerability affects only IIS 5.0 servers, and does not allow an
	attacker to gain any privileges on the server.
	
	CAUSE
	=====
	
	This vulnerability occurs because of the way IIS handles MIME information when
	serving content. If the MIME content-type information is malformed in a
	particular way, the service fails when trying to process it.
	
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
	
	  Date         Time   Version        Size     File name
	  -------------------------------------------------------
	  30-Jul-2001  17:46  5.0.2195.3785  246,032  Httpext.dll
	
	
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
	Keywords          : kbSecurity kbCOMIS kbWin2000PreSP3Fix KbSECVulnerability KbSECHack KbSECDOS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
