---
layout: page
title: "Q260069: Malformed HTR Request Returns Source Code for ASP Scripting File"
permalink: /kb/260/Q260069/
---

## Q260069: Malformed HTR Request Returns Source Code for ASP Scripting File

	Article: Q260069
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix kbWin2000PreSP2Fix kbWin2000SP2Fix kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A malformed HTR request may cause the source code of the Active Server Pages
	(ASP) script file to be returned.
	
	
	CAUSE
	=====
	
	The problem occurs because the CreateFile function that is used to open
	requested files deletes all of the trailing spaces in a file name. The file-name
	truncation in the CreateFile function causes the two names
	"C:\Ineptub\Wwroot\Default.asp" and "C:\Ineptub\Wwroot\Default.asp<followed
	by several blank spaces>" to be the same, which causes the source code of the
	Default.asp file to be opened and be returned.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	Windows 2000:
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q267559_w2k_sp2_x86_en.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=22708)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	For additional information about what this package fixes, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q267560 Changing the URL in a Specific Manner May Expose Contents of a File
	
	  Q267559 GET on .Htr File Can Cause a "Denial of Service" or Enable Directory
	  Browsing
	
	  Q260838 IIS Stops Servicing .htr Requests
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version         Size    File name
	  -----------------------------------------------------
	  07/07/2000  03:17p  5.00.2195.2100  46,352  Ism.dll
	
	
	Windows NT 4.0
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Htrdos4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=22709)
	
	  x86 Symbols: DownloadDownload Htrdos4is.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=22709)
	
	  Alpha: DownloadDownload Htrdos4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=22709)
	
	  Alpha Symbols: DownloadDownload Htrdos4as.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=22709)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	For additional information about what this package fixes, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q267560 Changing the URL in a Specific Manner May Expose Contents of a File
	
	  Q267559 GET on .Htr File Can Cause a "Denial of Service" or Enable Directory
	  Browsing
	
	  Q260838 IIS Stops Servicing .htr Requests
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version    Size    File name  Platform
	  ----------------------------------------------------------
	  06/28/2000  09:34p  4.2.748.1  54,544  Ism.dll    x86
	  06/28/2000  09:30p  4.02.0748  84,752  Ism.dll    Alpha
	
	
	
	STATUS
	======
	
	This problem was first corrected in Windows 2000 Service Pack 2.
	
	Internet Information Services 5.0
	---------------------------------
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0.
	
	Internet Information Server 4.0
	-------------------------------
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	For related information about this problem, please visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-031.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	For additional information about other issues that are resolved by this update,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q260838 IIS Stops Servicing .htr Requests
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbWin2000PreSP2Fix kbWin2000SP2Fix kbgraphxlinkcritical 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
