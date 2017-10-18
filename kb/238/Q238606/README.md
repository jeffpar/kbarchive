---
layout: page
title: "Q238606: Page Contents Visible For Certain Virtual Directory Name"
permalink: kb/238/Q238606/
---

## Q238606: Page Contents Visible For Certain Virtual Directory Name

	Article: Q238606
	Product(s): Internet Information Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix kbIIS kbgraphxlinkcritical
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Site Server version 3.0 
	- Microsoft Site Server version 3.0, Commerce Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If either .com, .exe now, .dll, .cgi or .sh are at the end of a physical
	directory name that is present in a virtual directory, the contents of the page
	pointed to by the URL are returned to the browser. If the URL points to an
	Active Server Page (ASP) page, the contents of the ASP script file are returned
	to the browser instead of the processed results of the ASP page.
	
	
	RESOLUTION
	==========
	
	Microsoft Internet Information Server
	-------------------------------------
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  US English:
	
	  x86: DownloadDownload Vrdcon4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16378)
	  Alpha: DownloadDownload Vrdcon4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16379)
	
	  Simplified Chinese:
	
	  x86: DownloadDownload Vrdcon4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16374)
	  Alpha: DownloadDownload Vrdcon4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16375)
	
	  Traditional Chinese:
	
	  x86: DownloadDownload Vrdcon4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16376)
	  Alpha: DownloadDownload Vrdcon4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16377)
	
	  German:
	
	  x86: DownloadDownload Vrdcon4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16380)
	  Alpha: DownloadDownload Vrdcon4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16381)
	
	  Japanese:
	
	  x86: DownloadDownload Vrdcon4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16389)
	  Alpha: DownloadDownload Vrdcon4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16390)
	
	  Korean:
	
	  x86: DownloadDownload Vrdcon4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16391)
	  Alpha: DownloadDownload Vrdcon4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16392)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time                   Size    File name     Platform
	  ---------------------------------------------------------------
	  10/15/99  04:00p               329,024 Asp.dll         x86
	  10/15/99  03:58p               184,736 Infocomm.dll    x86
	  10/15/99  03:59p                11,248 Iwrps.dll       x86
	  10/15/99  03:59p                38,256 Ssinc.dll       x86
	  10/15/99  03:59p               228,464 W3svc.dll       x86
	  10/15/99  03:59p                87,504 Wam.dll         x86
	
	  10/15/99  04:00p               549,648 Asp.dll         Alpha
	  10/15/99  03:58p               303,888 Infocomm.dll    Alpha
	  10/15/99  03:59p                16,656 Iwrps.dll       Alpha
	  10/15/99  03:59p                60,176 Ssinc.dll       Alpha
	  10/15/99  03:59p               383,760 W3svc.dll       Alpha
	  10/15/99  03:58p               149,264 Wam.dll         Alpha
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 4, Service Pack 5, or Service Pack 6a.
	
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	4.0.
	
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	For related information about this problem, please visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/security/bulletins/MS99-058.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	Additional query words: iisscript asp iiswww iisvirtual kbDotCom
	
	======================================================================
	Keywords          : kbWinNT4sp6fix kbIIS kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbSiteServSearch kbiisSearch kbAudDeveloper kbiis400 kbSiteServ300 kbSiteServ300Search
	Version           : :3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
