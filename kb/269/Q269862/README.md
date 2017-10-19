---
layout: page
title: "Q269862: MS00-057: Patch Released for Canonicalization Error Issue"
permalink: /kb/269/Q269862/
---

## Q269862: MS00-057: Patch Released for Canonicalization Error Issue

	Article: Q269862
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix kbWin2000SP2Fix kbgraphxlinkcritical
	Last Modified: 30-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A security patch has been released that resolves a canonicalization error that
	can allow a malicious user to gain additional permissions to certain types of
	files that are hosted on a Web server.
	
	For this vulnerability to be exploited, several factors are involved:
	
	- Only file types that are implemented through ISAPI extensions are affected.
	  It does not affect static Web page or non-Web file types such as .exe, .doc,
	  or .bat.
	
	- It only affects servers that expose a Web folder structure that mirrors the
	  physical folder structure on the server. It does not impact virtual
	  directories.
	
	- It does not allow arbitrary permissions to be selected, only permissions
	  present on an ancestor folder.
	
	- It provides no ability to enumerate the server and locate files that can be
	  affected by the vulnerability.
	
	In addition to the above, this security patch also corrects the vulnerability
	described by the following article in the Microsoft Knowledge Base:
	
	  Q276489 Patch Available for Web Server Folder Traversal Vulnerability
	
	Microsoft Exchange 2000 Server Users and Microsoft SharePoint Portal Server 2001 Users
	--------------------------------------------------------------------------------------
	
	Both Exchange 2000 and SharePoint Portal Server 2001 have problems with an older
	verison of this hotfix. A new update for the security patch for these products
	is available at the following Microsoft Web page:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-086.asp
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	Internet Information Services 5.0
	---------------------------------
	
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q269862_W2K_SP2_x86_en.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23665)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version        Size     File name
	  -----------------------------------------------------
	  08-09-2000  1:02pm  5.0.2195.2103  357,136  W3svc.dll
	
	
	Internet Information Server 4.0 
	-------------------------------
	
	The following files are available for download from the Microsoft Download
	Center:
	
	NOTE: Debug symbol files are required by an administrator to do both kernel and
	user mode debugging, providing a method to resolve global variables and function
	names in the loaded file. The symbol files are denoted with an "s" in the file
	name (for example, Prmcan4is.exe).
	
	
	US English:
	
	  Intel:
	
	  DownloadDownload Prmcan4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23667)
	
	  Intel Symbols:
	
	  DownloadDownload Prmcan4is.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23667)
	
	  Alpha:
	
	  DownloadDownload Prmcan4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23667)
	
	  Alpha Symbols:
	
	  DownloadDownload Prmcan4as.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23667)
	
	German:
	
	  Intel:
	
	  DownloadDownload Prmcan4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23673)
	
	  Intel Symbols:
	
	  DownloadDownload Prmcan4is.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23673)
	
	  Alpha:
	
	  DownloadDownload Prmcan4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23673)
	
	  Alpha Symbols:
	
	  DownloadDownload Prmcan4as.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23673)
	
	Japanese:
	
	  Intel:
	
	  DownloadDownload Prmcan4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23675)
	
	  Intel Symbols:
	
	  DownloadDownload Prmcan4is.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23675)
	
	  Alpha:
	
	  DownloadDownload Prmcan4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23675)
	
	  Alpha Symbols:
	
	  DownloadDownload Prmcan4as.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23675)
	
	Korean:
	
	  Intel:
	
	  DownloadDownload Prmcan4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23676)
	
	  Intel Symbols:
	
	  DownloadDownload Prmcan4is.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23676)
	
	  Alpha:
	
	  DownloadDownload Prmcan4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23676)
	
	  Alpha Symbols:
	
	  DownloadDownload Prmcan4as.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23676)
	
	Simplified Chinese:
	
	  Intel:
	
	  DownloadDownload Prmcan4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23672)
	
	  Intel Symbols:
	
	  DownloadDownload Prmcan4is.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23672)
	
	  Alpha:
	
	  DownloadDownload Prmcan4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23672)
	
	  Alpha Symbols:
	
	  DownloadDownload Prmcan4as.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23672)
	
	Traditional Chinese:
	
	  Intel:
	
	  DownloadDownload Prmcan4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23677)
	
	  Intel Symbols:
	
	  DownloadDownload Prmcan4is.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23677)
	
	  Alpha:
	
	  DownloadDownload Prmcan4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23677)
	
	  Alpha Symbols:
	
	  DownloadDownload Prmcan4as.exe now
	  (http://www.microsoft.com/downloads/release.asp?releaseid=23677)
	
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
	  08/03/2000  05:06p  330,080  Asp.dll       Intel
	  08/03/2000  05:04p  185,792  Infocomm.dll  Intel
	  08/03/2000  05:05p   38,256  Ssinc.dll     Intel
	  08/03/2000  05:05p   25,360  Sspifilt.dll  Intel
	  08/03/2000  05:05p  228,496  W3svc.dll     Intel
	
	  08/03/2000  05:08p  551,696  Asp.dll       Alpha
	  08/03/2000  05:06p  304,912  Infocomm.dll  Alpha
	  08/03/2000  05:07p   60,176  Ssinc.dll     Alpha
	  08/03/2000  05:07p   39,696  Sspifilt.dll  Alpha
	  08/03/2000  05:07p  384,272  W3svc.dll     Alpha
	
	
	Microsoft Windows NT Server version 4.0, Terminal Server Edition:
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0 and Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	Additional information about this issue is available from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-057.asp
	
	You can find frequently asked questions about this vulnerability at the following
	Microsoft Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/fq00-057.asp
	
	Additional query words: security_patch
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbWin2000SP2Fix kbgraphxlinkcritical 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
