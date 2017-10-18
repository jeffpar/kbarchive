---
layout: page
title: "Q174459: Windows NT DNS Server Remote Administration"
permalink: kb/174/Q174459/
---

## Q174459: Windows NT DNS Server Remote Administration

	Article: Q174459
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	As with most of the Windows NT services, you can administer a Windows NT Domain
	Name Service (DNS) Server remotely from a computer running Windows NT that is
	not running the DNS Server. This article discusses the method for accomplishing
	this.
	
	MORE INFORMATION
	================
	
	To remotely administer a Windows NT DNS Server, you will need to copy the DNS
	Manager, Dnsadmin.exe, to the %SystemRoot%\System32 folder of the target
	computer where you will do the administration. Dnsadmin.exe can be found in one
	of the following locations:
	
	- In the %SystemRoot%\System32 folder of your current Windows NT DNS Server.
	
	  -or-
	
	- In the <platform> folder of your original Windows NT CD. To expand the
	  DNS Manager from this CD, you will need to insert your Windows NT CD into
	  your CD-ROM drive, type the following at a command prompt, and then press
	  Enter:
	
	     expand D:\<platform>\Dnsadmin.ex_ C:\Winnt\System32\Dnsadmin.exe
	
	  where D: is the letter of your CD drive and C:\Winnt is the folder your target
	  Windows NT installation is located.
	
	NOTE: The computer that you wish to run Dnsadmin.exe from must have the TCP/IP
	protocol installed and configured correctly and you must have local
	Administrative privileges at the DNS Server that you wish to administer.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
