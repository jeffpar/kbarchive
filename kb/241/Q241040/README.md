---
layout: page
title: "Q241040: Daylight Saving Time Change Not Applied Immediately"
permalink: kb/241/Q241040/
---

## Q241040: Daylight Saving Time Change Not Applied Immediately

	Article: Q241040
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix kbgraphxlinkcritical
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Windows NT 4.0 Service Pack 4 (SP4) or Service Pack 5 (SP5)
	on some multiple-processor computers, Daylight Saving Time changes may not be
	applied for three or more hours, or until the next time you restart the
	computer.
	
	Note that this behavior is not specific to any one multiple-processor computer
	manufacturer. It may occur on any multiple-processor computer; Microsoft has not
	tested every multiple-processor computer for this behavior.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	For your convenience, a supported software update that corrects this problem is
	also available from Microsoft, but it has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. If you are
	not severely affected by this specific problem, Microsoft recommends that you
	install the latest Windows NT service pack that contains this software update.
	
	If you are running Windows NT 4.0 Service Pack 6:
	
	The Microsoft BIOS3 Y2K Update is installed as part of Windows NT 4.0 Service
	Pack 6.
	
	If you are running Windows NT 4.0 Service Pack 4 or 5:
	
	The following files are available for download from the Microsoft Download Center
	or Microsoft's FTP site. Click the file names below to download the appropriate
	file:
	
	  x86:
	
	  Microsoft Download Center: DownloadDownload Biosfixi.exe now
	  (http://download.microsoft.com/download/winntsrv40/Update/3/NT4/EN-US/Biosfixi.exe)
	
	  FTP: DownloadDownload Biosfixi.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP5/Y2K/BIOS3-fix/Biosfixi.exe)
	
	  Alpha:
	
	  Microsoft Download Center: DownloadDownload Biosfixa.exe now
	  (http://download.microsoft.com/download/winntsrv40/Update/3/ALPHA/EN-US/Biosfixa.exe)
	
	  FTP: DownloadDownload Biosfixa.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP5/Y2K/BIOS3-fix/Biosfixa.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	WINDOWS NT SERVER 4.0, TERMINAL SERVER EDITION
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	WINDOWS NT 4.0
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 6.
	
	WINDOWS NT SERVER 4.0, TERMINAL SERVER EDITION
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server version
	4.0, Terminal Server Edition Service Pack 6.
	
	
	MORE INFORMATION
	================
	
	For additional information on other fixes included in the Microsoft BIOS3 Y2K
	Update, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q216913 BIOS Date Value Does Not Immediately Update on January 1, 2000
	
	Additional query words: savings
	
	======================================================================
	Keywords          : kbWinNT4sp6fix kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
