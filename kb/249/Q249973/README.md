---
layout: page
title: "Q249973: MS00-005: Default RTF File Viewer Interrupts Normal Program Proc"
permalink: kb/249/Q249973/
---

## Q249973: MS00-005: Default RTF File Viewer Interrupts Normal Program Proc

	Article: Q249973
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECBulletin
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a program that calls the default viewer for a Rich Text
	Format (RTF) file that contains an especially malformed control word in the file
	header, the program may not work properly or may generate a general protection
	(GP) fault.
	
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	Windows 95, Windows 98, Windows 98 Second Edition
	-------------------------------------------------
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DownloadDownload 249973usa5.exe for Windows 95 and Windows 95 OSR 2.5 now
	  (http://www.microsoft.com/windows95/downloads/contents/WUCritical/rtfcontrol/Default.asp)
	
	  DownloadDownload 249973usa8.exe for Windows 98 and Windows 98 Second Edition
	  now
	  (http://www.microsoft.com/windows98/downloads/contents/WUCritical/rtfcontrol/Default.asp)
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	For Windows 95:
	
	  Date       Version         Size    File name     
	  -------------------------------------------------
	  12/13/99   5.0.1461.82     203,024   Riched32.dll		
	  11-30-99   1.0325.2180.1   315,152   Usp10.DLL			
	  11-23-99   5.0.153.0       286,208   Riched20.dll
	  -or-
	  12-14-99   5.30.23.1200    431,376   Riched20.dll
	
	For Windows 98:
	
	  Date       Version       File name   Platform
	  -------------------------------------------------
	  12/13/99   5.0.1461.82     203,024   Riched32.dll
	  11/30/99   1.0325.2180.1   315,152   Usp10.dll			
	  11/23/99   5.0.153.0       286,208   Riched20.dll
	  -or- 
	  12-14-99   5.30.23.1200    431,376   Riched20.dll
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	Windows NT 4.0, Windows NT 4.0 Enterprise Edition
	-------------------------------------------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Q249973i.exe for Intel-based computers now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=17510)
	
	  DownloadDownload Q249973a.exe for Alpha-based computers now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=17511)
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time      Size      File name     Platform
	  -------------------------------------------------------------
	  12/23/99    3:52pm   173,328   Riched32.dll   x86
	  12/23/99   12:49pm   268,560   Riched20.dll   x86
	  12/23/99    3:52pm   282,896   Riched32.dll   Alpha
	  12/23/99   12:50pm   482,576   Riched20.dll   Alpha
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Windows 95, Windows 98, Windows 98 Second Edition, Windows NT 4.0, Windows NT 4.0 Enterprise Edition
	----------------------------------------------------------------------------------------------------
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows NT Server 4.0, Terminal Server Edition.
	
	MORE INFORMATION
	================
	
	If you reinstall or upgrade Microsoft Office, you need to reinstall this
	hotfix.
	
	For related information about this problem, please visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/security/bulletins/ms00-005.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	For additional information about Windows 95 hotfixes, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	For additional information about Windows 98 and Windows 98 Second Edition
	hotfixes, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q206071 General Information on Windows 98 and SE Hotfixes
	
	Additional query words: security_patch kbTSESRP
	
	======================================================================
	Keywords          : kbtool kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECBulletin 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
