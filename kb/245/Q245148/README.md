---
layout: page
title: "Q245148: After Installing SP6 Windows NT Appears to Hang When You Log Off"
permalink: /kb/245/Q245148/
---

## Q245148: After Installing SP6 Windows NT Appears to Hang When You Log Off

	Article: Q245148
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kbui kbWinNT400PreSP7Fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP6 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6 
	- Microsoft Windows NT Server version 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log off your computer by clicking "Close all programs and log on
	as a different user" in the Shut Down Windows dialog box after you install
	Windows NT 4.0 Service Pack 6, the screen may appear gray, and your computer may
	appear to stop responding (hang). Also, your mouse pointer may appear as an
	hourglass, indicating your computer is busy.
	
	CAUSE
	=====
	
	This problem occurs because of a change in the WINLOGON service in Windows NT
	4.0 Service Pack 6.
	
	RESOLUTION
	==========
	
	The following files are available for download from the Microsoft Download
	Center or Microsoft's FTP site. Click the file names below to download the
	appropriate file:
	
	  x86:
	
	  Microsoft Download Center: Q245148i.exe
	  (http://download.microsoft.com/download/winntsp/patch/winlogon/nt4/en-us/q245148i.exe)
	
	  FTP: Q245148i.exe
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postsp6a/winlogon-fix/Q245148i.exe)
	
	  Alpha:
	
	  Microsoft Download Center: Q245148a.exe
	  (http://download.microsoft.com/download/winntsp/patch/winlogon/alpha/en-us/q245148a.exe)
	
	  FTP: Q245148a.exe
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postsp6a/winlogon-fix/Q245148a.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  11/18/1999  07:19p             192,272 Winlogon.exe  x86
	  11/18/1999  07:19p             274,704 Winlogon.exe  Alpha
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, log off by pressing CTRL+ALT+DEL, and then clicking
	Logoff.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you log off your computer, programs may prompt you to save data. If you
	click Cancel, the logoff sequence is stopped, and control is returned to the
	program so you can continue working. If you then click Start to log off, you
	receive the behavior noted earlier in this article.
	
	
	Additional query words: sp6
	
	======================================================================
	Keywords          : kbenv kbui kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTS400sp6 kbWinNTS400search kbWinNTW400sp6
	Version           : :4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	
