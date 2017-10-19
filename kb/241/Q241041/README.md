---
layout: page
title: "Q241041: Enabling NetBT to Open IP Ports Exclusively"
permalink: /kb/241/Q241041/
---

## Q241041: Enabling NetBT to Open IP Ports Exclusively

	Article: Q241041
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user-mode program can listen to TCP port 139 as well as UDP ports 137 and 138.
	Because these ports are used by Windows NT services, it is a Trusted Computer
	System Evaluation Criteria (TCSEC) C2 requirement that an unprivileged user-mode
	program should not be able to listen to these ports used by Windows NT services,
	regardless of the cryptographic protection applied to the Windows NT service
	traffic using these ports.
	
	CAUSE
	=====
	
	This problem occurs because Netbt.sys (NetBIOS over TCP/IP) is responsible for
	opening the following TCP and UDP ports that subsequently are used by Windows NT
	services:
	
	- UDP Port 137
	
	- UDP Port 138
	
	- TCP Port 139
	
	For additional information about Windows NT services that use these ports, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q150543 WinNT, Terminal Server, and Exchange Services Use TCP/IP Ports
	
	As explained in the Windows NT 4.0 Device Development Kit (DDK) for network
	driver development, Netbt.sys (as a TDI client) begins communicating with its
	local-node transport by opening a file object that represents a transport
	address. Netbt.sys calls ZwCreateFile, passing the address specification in the
	extended attributes (EA) buffer parameter to ZwCreateFile.
	
	In Windows NT 4.0 Service Pack 6a and earlier, Netbt.sys allows file share access
	to file objects representing the aforementioned TCP and UDP ports when calling
	ZwCreateFile. Subsequently, a user-mode program installed on a computer running
	Windows NT 4.0 Service Pack 6a and earlier can gain access to a share and listen
	to the TCP and UDP ports. The Post-SP6a hotfix, C2 Update, allows the option to
	change the Netbt.sys behavior so that it does not allow file share access to
	files objects representing the aforementioned TCP and UDP ports when calling
	ZwCreateFile. The option is selected through the use of the following registry
	key and key value:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NetBT\Parameters
	</B>
	EnablePortLocking:REG_DWORD
	
	Default: 0 - NetBt allows file share access
		 1 - NetBt disallows file share access
	
	When EnablePortLocking is set to 1, Netbt.sys passes in zero (ULONG) in the
	ShareAccess parameter of ZwCreateFile. After the application of Netbt-fix and
	the setting of the REG_DWORD value to 1 for EnablePortLocking, a user-mode
	program cannot gain share access and listen to the TCP and UDP ports.
	
	NOTE: NETBT in Windows 2000 does not support this option and the above registry
	key and value. The default behaviour in Windows 2000 is to disallow file share
	access to all ports created by NETBT.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The individual hotfix is available for download from the Microsoft Download
	Center or Microsoft's FTP site. Click the file names below to download the
	appropriate file:
	
	English:
	
	  x86:
	
	  Microsoft Download Center: DownloadDownload Q244599i.exe now
	  (http://download.microsoft.com/download/winntsp/Patch/SP6a_C2/NT4/EN-US/Q244599i.exe)
	
	  FTP: DownloadDownload Q244599i.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postsp6a/c2-fix/Q244599i.exe)
	
	  Alpha:
	
	  Microsoft Download Center: DownloadDownload Q244599a.exe now
	  (http://download.microsoft.com/download/winntsp/Patch/SP6a_C2/ALPHA/EN-US/Q244599a.exe)
	
	  FTP: DownloadDownload Q244599a.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postsp6a/c2-fix/Q244599a.exe)
	
	French:
	
	  x86:
	
	  
	
	
	  FTP: DownloadDownload Q244599i.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/frn/nt40/hotfixes-postsp6a/c2-fix/Q244599i.exe)
	
	  Alpha:
	
	  
	
	
	  FTP: DownloadDownload Q244599a.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/frn/nt40/hotfixes-postsp6a/c2-fix/Q244599a.exe)
	
	Spanish:
	
	  x86:
	
	  
	
	
	  FTP: DownloadDownload Q244599i.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/spa/nt40/hotfixes-postsp6a/c2-fix/Q244599i.exe)
	
	  Alpha:
	
	  
	
	
	  FTP: DownloadDownload Q244599a.exe now
	  (ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/spa/nt40/hotfixes-postsp6a/c2-fix/Q244599a.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time      Size   File name  Platform
	  ------------------------------------------------
	  10/07/1999  03:13p  123,152  Netbt.sys  x86
	  10/07/1999  03:11p  222,800  Netbt.sys  Alpha
	
	
	
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
	
	Microsoft has confirmed that this problem could result in some degree of
	security vulnerability in Windows NT 4.0.
	
	Additional query words: c2 security_patch kbTSE400SRP
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
