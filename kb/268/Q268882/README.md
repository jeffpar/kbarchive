---
layout: page
title: "Q268882: Cannot Map to Drive Z if Novell Client32 Is Not Installed"
permalink: /kb/268/Q268882/
---

## Q268882: Cannot Map to Drive Z if Novell Client32 Is Not Installed

	Article: Q268882
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; Win2000:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows 95 and Windows 98, drive Z is not mapped when you use a Windows NT
	logon script. However, if Novell Client32 is installed, drive Z successfully
	maps when you use a Windows NT logon script.
	
	CAUSE
	=====
	
	When a Windows 95- or Windows 98-based computer logs on to a Windows NT 4.0
	domain, the NetLogon share used to log on is mapped to drive Z. Thus, the
	universal naming convention (UNC) sharename is Z:\<Servername>\Netlogon.
	NetWare Client configures the Windows NT logon script to use drive Y instead of
	drive Z. Therefore, drive Z cannot be used. Novell typically uses drive Z as a
	search drive.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Right-click the directory that you want the log on to be mapped to, and then
	  click "Map network drive".
	
	2. Ensure that the "Reconnect at Logon" check box is selected.
	
	3. Type Z as the letter of the drive.
	
	This process takes place after the NetLogon pipe has closed, and drive Z becomes
	available.
	
	To work around this issue, you can migrate to a Windows NT or a Windows 2000
	workstation.
	
	MORE INFORMATION
	================
	
	The steps to resolve this issue that are listed in the section above need to be
	done annually for all users who wish to reconnect to a mapped drive Z when they
	log on. Note that this configuration is part of the user's profile and is mapped
	for each user (not for each computer).
	
	Additional query words: netware client32 logon login
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:; Win2000:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
