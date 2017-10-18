---
layout: page
title: "Q249599: Virtual Directory Mapped to UNC Returns Server-Side Script Code"
permalink: kb/249/Q249599/
---

## Q249599: Virtual Directory Mapped to UNC Returns Server-Side Script Code

	Article: Q249599
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWin2000PreSP1Fix kbWinNT400PreSP7Fix kbgraphxlinkcritical
	Last Modified: 30-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a virtual directory on an Internet Information Server (IIS) computer is
	mapped to a Universal Naming Convention (UNC) share, and a request for a file in
	the directory contains one of several particular characters at the end of the
	request, the expected Internet Server Application Programming Interface (ISAPI)
	extension processing may not occur. This can result in the source code of the
	file being sent to the browser.
	
	CAUSE
	=====
	
	This problem can be caused by the use of a varying combination of special
	characters at the end of the clients request.
	
	RESOLUTION
	==========
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	This fix is also available individually. The following files are available for
	download from the Microsoft Download Center:
	
	  US English
	  DownloadDownload Q249599_W2K_SP1_X86_EN.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19982)
	
	  Arabic
	  DownloadDownload Q249599_W2K_SP1_X86_AR.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19983)
	
	  Chinese (Simplified)
	  DownloadDownload Q249599_W2K_SP1_X86_CN.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19985)
	
	  Chinese (Traditional)
	  DownloadDownload Q249599_W2K_SP1_X86_TW.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19995)
	
	  Dutch
	  DownloadDownload Q249599_W2K_SP1_X86_NL.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19993)
	
	  French
	  DownloadDownload Q249599_W2K_SP1_X86_FR.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19989)
	
	  German
	  DownloadDownload Q249599_W2K_SP1_X86_DE.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19986)
	
	  Hebrew
	  DownloadDownload Q249599_W2K_SP1_X86_HE.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19996)
	
	  Italian
	  DownloadDownload Q249599_W2K_SP1_X86_IT.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19990)
	
	  Japanese
	  DownloadDownload Q249599_W2K_SP1_X86_JA.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19991)
	
	  Korean
	  DownloadDownload Q249599_W2K_SP1_X86_KO.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19992)
	
	  Portuguese (Brazil)
	  DownloadDownload Q249599_W2K_SP1_X86_BR.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19984)
	
	  Spanish
	  DownloadDownload Q249599_W2K_SP1_X86_ES.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19988)
	
	  Swedish
	  DownloadDownload Q249599_W2K_SP1_X86_SV.EXE now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19994)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	
	Windows NT 4.0
	--------------
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  US English
	  x86: DownloadDownload Uncsec4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=18900)
	  Alpha: DownloadDownload Uncsec4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=18901)
	
	  Dutch
	  x86: Download Uncsec4i.exe now
	  (http://download.microsoft.com/download/iis40/Patch/4.2.736.1/NT4/NL/Uncsec4i.exe)
	  Alpha: Download Uncsec4a.exe now
	  (http://download.microsoft.com/download/iis40/patch/4.2.736.1/alpha/nl/Uncsec4a.exe)
	
	  French
	  x86: Download Uncsec4i.exe now
	  (http://download.microsoft.com/download/iis40/patch/4.2.736.1/nt4/fr/Uncsec4i.exe)
	  Alpha: Download Uncsec4a.exe now
	  (http://download.microsoft.com/download/iis40/patch/4.2.736.1/alpha/fr/Uncsec4a.exe)
	
	  German
	  x86: Download Uncsec4i.exe now
	  (http://download.microsoft.com/download/iis40/Patch/4.2.736.1/NT4ALPHA/DE/Uncsec4i.exe)
	  Alpha: Download Uncsec4a.exe now
	  (http://download.microsoft.com/download/iis40/Patch/4.2.736.1/NT4ALPHA/DE/Uncsec4a.exe)
	
	  NOTE: Debug symbol files are required by an administrator to do both kernel
	  and user mode debugging, providing a method to resolve global variables and
	  function names in the loaded executable file. Click the file names below to
	  download the symbol files:
	
	  German x86 Symbols: Download Uncsec4is.exe now
	  (http://download.microsoft.com/download/iis40/Patch/4.2.736.1/NT4ALPHA/DE/Uncsec4is.exe)
	  German Alpha Symbols: Download Uncsec4as.exe now
	  (http://download.microsoft.com/download/iis40/Patch/4.2.736.1/NT4ALPHA/DE/Uncsec4as.exe)
	
	  Portuguese (Brazilian)
	  x86: DownloadDownload Uncsec4i.exe now (
	  http://download.microsoft.com/download/iis40/patch/4.2.736.1/nt4/pt-br/Uncsec4i.exe)
	  Alpha: Download Uncsec4a.exe now
	  (http://download.microsoft.com/download/iis40/patch/4.2.736.1/alpha/pt-br/Uncsec4a.exe)
	
	  Spanish
	  x86: Download Uncsec4i.exe now
	  (http://download.microsoft.com/download/iis40/patch/4.2.736.1/nt4/es/Uncsec4i.exe)
	  Alpha: DownloadDownload Uncsec4a.exe now (
	  http://download.microsoft.com/download/iis40/patch/4.2.736.1/alpha/es/Uncsec4a.exe)
	
	  Swedish
	  x86: Download Uncsec4i.exe now
	  (http://download.microsoft.com/download/iis40/patch/4.2.736.1/nt4/sv/Uncsec4i.exe)
	  Alpha: Download Uncsec4a.exe now
	  (http://download.microsoft.com/download/iis40/patch/4.2.736.1/alpha/sv/Uncsec4a.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  12/28/99  06:02p  4.2.736.1  185,248   Infocomm.dll  x86
	  12/28/99  06:03p  4.2.736.1   38,256   Ssinc.dll     x86
	  12/28/99  06:03p  4.2.736.1   25,360   Sspifilt.dll  x86
	  12/28/99  06:03p  4.2.736.1  228,464   W3svc.dll     x86
	
	
	
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
	
	Windows 2000
	------------
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 1.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	There are significant restrictions that increase the difficulty of exploiting
	this vulnerability:
	
	- By design, virtual directories hide the actual location of files. Under most
	  circumstances, there is no way for an attacker to determine which files on a
	  server actually reside on a UNC share.
	
	- Many browsers "correct" requests that contain the trailing characters at
	  issue here by either removing the characters or changing them.
	
	- If recommended security practices are followed, ASP and other files that
	  require server-side processing will not contain any sensitive information to
	  compromise.
	
	This fix eliminates the vulnerability by removing the trailing special characters
	if they are included in the request. This causes the appropriate scripting
	engine to process the file when the request is returned to the browser. If the
	request is improperly formatted, the request is denied, and then returned to the
	client as an invalid request.
	
	For related information about this problem, please visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-019.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	
	Additional query words: tsesrp
	
	======================================================================
	Keywords          : kbSecurity kbWin2000PreSP1Fix kbWinNT400PreSP7Fix kbgraphxlinkcritical 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
