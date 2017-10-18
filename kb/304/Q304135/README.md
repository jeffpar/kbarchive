---
layout: page
title: "Q304135: Double-Byte Field Name is Improperly Encoded When Using UTF-8"
permalink: kb/304/Q304135/
---

## Q304135: Double-Byte Field Name is Improperly Encoded When Using UTF-8

	Article: Q304135
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a .asp file as UTF-8, if the file contains fields that have
	double-byte characters in the name, the name is improperly encoded on the
	server-side when the file is posted. Also, you cannot retrieve the file by name
	through the Request.Form collection. However, you can still get the file though
	an index.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q304135_W2K_SP3_x86_en.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=32298)
	
	
	Release Date: August 23, 2001
	
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
	
	  Date         Time   Version        Size    File name
	  --------------------------------------------------------
	  19-Jul-2001  19:09  5.0.2195.3891  333,072  Asp.dll
	  19-Jul-2001  19:09  5.0.2195.3649  299,792  Fscfg.dll
	  19-Jul-2001  19:09  5.0.2195.3649    8,464  Ftpctrs2.dll
	  19-Jul-2001  19:09  5.0.2195.3649    6,416  Ftpmib.dll
	  19-Jul-2001  19:09  5.0.2195.3649    9,488  Httpmib.dll
	  19-Jul-2001  19:09  5.0.2195.3826   13,584  Infoadmn.dll
	  19-Jul-2001  19:09  5.0.2195.3826  245,520  Infocomm.dll
	  19-Jul-2001  19:09  5.0.2195.3826   62,736  Isatq.dll
	  19-Jul-2001  19:09  5.0.2195.3649    7,440  W3ctrs.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information on how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
