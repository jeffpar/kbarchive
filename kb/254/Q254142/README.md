---
layout: page
title: "Q254142: Sending a Large Escape Sequence Causes 100% CPU"
permalink: /kb/254/Q254142/
---

## Q254142: Sending a Large Escape Sequence Causes 100% CPU

	Article: Q254142
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWin2000PreSP1Fix kbWin2000sp1Fix kbgraphxlinkcritical
	Last Modified: 30-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a large escape sequence to a computer running Internet Information
	Server 4.0 or Internet Information Services 5.0, the computer may use 100
	percent CPU while it is processing the request. During this time, the server may
	not respond to other requests.
	
	CAUSE
	=====
	
	This problem occurs because the Str::unescape function parses the escape
	characters in the request string by processing one character at a time, shifting
	the data over each time, and then starting again from the beginning of the
	request string. This takes a considerable amount of CPU usage, and can cause the
	server to stop processing other requests.
	
	RESOLUTION
	==========
	
	Internet Information Services 5.0 (Windows 2000)
	------------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The following files are available for download from the Microsoft Download
	Center:
	
	US English:
	
	  DownloadDownload Q254142_w2k_sp1_x86_en.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20286)
	
	Arabic:
	
	  DownloadDownload Q254142_w2k_sp1_x86_ar.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20342)
	
	Chinese (Simplified):
	
	  DownloadDownload Q254142_w2k_sp1_x86_cn.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20343)
	
	Chinese (Traditional):
	
	  DownloadDownload Q254142_w2k_sp1_x86_tw.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20349)
	
	German:
	
	  DownloadDownload Q254142_w2k_sp1_x86_de.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20344)
	
	Hebrew:
	
	  DownloadDownload Q254142_w2k_sp1_x86_he.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20345)
	
	Japanese:
	
	  DownloadDownload Q254142_w2k_sp1_x86_ja.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20346)
	
	Korean:
	
	  DownloadDownload Q254142_w2k_sp1_x86_ko.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20348)
	
	Release Date:
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	
	Internet Information Server 4.0
	-------------------------------
	
	The following files are available for download from the Microsoft Download
	Center:
	US English:
	
	  x86: DownloadDownload Escseq4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20292)
	
	  Alpha: DownloadDownload Escseq4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20292)
	
	Chinese (Simplified):
	
	  x86: DownloadDownload Escseq4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20312)
	
	  Alpha: DownloadDownload Escseq4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20312)
	
	Chinese (Traditional):
	
	  x86: DownloadDownload Escseq4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20313)
	
	  Alpha: DownloadDownload Escseq4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20313)
	
	Dutch:
	
	  x86: DownloadDownload Escseq4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20320)
	
	  Alpha: DownloadDownload Escseq4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20320)
	
	French:
	
	  x86: DownloadDownload Escseq4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20319)
	
	  Alpha: DownloadDownload Escseq4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20319)
	
	German:
	
	  x86: DownloadDownload Escseq4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20314)
	
	  Alpha: DownloadDownload Escseq4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20314)
	
	Japanese:
	
	  x86: DownloadDownload Escseq4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20315)
	
	  Alpha: DownloadDownload Escseq4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20315)
	
	Korean:
	
	  x86: DownloadDownload Escseq4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20316)
	
	  Alpha: DownloadDownload Escseq4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20316)
	
	Portuguese (Brazil):
	
	  x86: DownloadDownload Escseq4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20317)
	
	  Alpha: DownloadDownload Escseq4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20317)
	
	Spanish:
	
	  x86: DownloadDownload Escseq4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20318)
	
	  Alpha: DownloadDownload Escseq4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20318)
	
	Swedish:
	
	  x86: DownloadDownload Escseq4i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20321)
	
	  Alpha: DownloadDownload Escseq4a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=20321)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time       Version       Size     File name    Platform
	  -----------------------------------------------------------------
	  2-24-2000 8:15:06pm  4.2.740.1     185,760b Infocomm.dll x86
	  2-24-2000 8:16:02pm  4.2.740.1     38,256b  Ssinc.dll    x86
	  2-24-2000 8:16:10pm  4.2.740.1     25,360b  Sspifilt.dll x86
	  2-24-2000 8:15:50pm  4.2.740.1     228,480b W3svc.dll    x86
	
	  2-25-2000 12:15:19am 4.2.740.1     304,400b Infocomm.dll alpha
	  2-25-2000 12:16:14am 4.2.740.1     60,176b  Ssinc.dll    alpha
	  2-25-2000 12:16:20am 4.2.740.1     39,696b  Sspifilt.dll alpha
	  2-25-2000 12:16:01am 4.2.740.1     383,760b W3svc.dll    alpha
	
	
	
	Microsoft Windows NT Server version 4.0, Terminal Server Edition:
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Windows 2000
	------------
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 1.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	When you install this fix, the Str::unescape function traverses the request
	string only one time.
	
	For additional information, please see the Microsoft Security Bulletin at the
	following Microsoft Web site:
	
	  http://www.microsoft.com/security/bulletins/MS00-023.asp
	
	Additional query words: security_patch tsesrp
	
	======================================================================
	Keywords          : kbSecurity kbWin2000PreSP1Fix kbWin2000sp1Fix kbgraphxlinkcritical 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
