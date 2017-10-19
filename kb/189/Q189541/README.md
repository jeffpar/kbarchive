---
layout: page
title: "Q189541: Using the Checked Netlogon.dll to Track Account Lockouts"
permalink: /kb/189/Q189541/
---

## Q189541: Using the Checked Netlogon.dll to Track Account Lockouts

	Article: Q189541
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Account lockouts can be very difficult to track for several reasons. One reason
	is that the bad password attempts are only recorded on the domain controller
	that processed the logon attempt (this is for Microsoft Windows 95-based and
	Microsoft Windows 98-based clients). Another problem is that, because Microsoft
	Windows NT-based clients are capable of recording the information locally, a log
	entry is not recorded on any domain controller.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	A relatively easy way to track bad password attempts in a domain is to install
	the checked build of Netlogon.dll on the primary domain controller (PDC). This
	creates a text file on the PDC that can be examined to determine which clients
	are generating the bad password attempts, for both Windows NT-based and Windows
	95-based clients.
	
	The checked build of Netlogon.dll can be obtained from Microsoft Technical
	Support and also in the Microsoft Driver Development Kit (DDK).
	
	
	To install the checked build of Netlogon.dll on Windows NT 4.0:
	
	1. Go to the <Windir\System32> folder.
	
	2. Rename Netlogon.dll to Netlogon.fre.
	
	3. Copy the checked version of Netlogon.dll to the <System32> folder.
	
	4. Start Regedt32, and then locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Netlogon
	  \Parameters\DBFlag
	
	5. Change the DBFlag value to 0x4.
	
	  NOTE: Setting DBFlag to 0x4 only records logon processing. Setting it to
	  0x20000004 records the time stamp in addition to the logon event.
	
	6. Quit Regedt32.
	
	7. Restart the server.
	
	8. Confirm that the debug directory was created under the <Windir> folder
	  and contains a Netlogon.log file.
	
	Examples
	--------
	
	In the examples below:
	
	PORSCHE\example = User Account
	TARGA =           BDC
	928S4 =           Windows NT Workstation
	928WIN95 =        Windows 95
	911Turbo =        PDC
	
	Different clients log different messages.
	
	Windows NT Workstation:
	
	[LOGON] SamLogon: Interactive logon of PORSCHE\example from 928S4 (via
	  TARGA) Entered
	
	[LOGON] SamLogon: Interactive logon of PORSCHE\example from 928S4 (via
	  TARGA) Returns 0xC000006A
	
	[LOGON] SamLogon: Interactive logon of PORSCHE\example from 928S4 (via
	  TARGA) Entered
	
	[LOGON] SamLogon: Interactive logon of PORSCHE\example from 928S4 (via
	  TARGA) Returns 0xC0000234
	
	In the above example, you can see where you try to log on, are unsuccessful with
	a bad password, try to log on again, and then are unsuccessful with a locked out
	account.
	
	The only difference with Windows 95 and Windows 98 is the omission of the domain
	name:
	
	[LOGON] SamLogon: Network logon of (null)\EXAMPLE from \\928WIN95 (via
	  TARGA) Entered
	
	[LOGON] SamLogon: Network logon of (null)\EXAMPLE from \\928WIN95 (via
	  TARGA) Returns 0xC000006A
	
	[LOGON] SamLogon: Network logon of (null)\EXAMPLE from \\928WIN95 (via
	  TARGA) Entered
	
	[LOGON] SamLogon: Network logon of (null)\EXAMPLE from \\928WIN95 (via
	  TARGA) Returns 0xC0000234
	
	A successful account logon can resemble:
	
	[LOGON] SamLogon: Network logon of (null)\EXAMPLE from \\928WIN95 Entered
	
	[LOGON] SamLogon: Network logon of (null)\EXAMPLE from \\928WIN95 Returns
	  0x0
	
	[LOGON] NetrLogonUasLogon of EXAMPLE from 928WIN95 returns 0
	
	The errors you most likely receive are:
	
	  0xC0000234 User logon with Account Locked
	
	  0xC000006A User logon with Misspelled or bad Password
	
	  0xC0000072 User logon to account disabled by Administrator
	
	  0xC0000193 User logon with Expired Account
	
	  0xC0000070 User logon from unauthorized workstation
	
	  0xC000006F User logon Outside authorized hours
	
	  0xC0000224 User logon with "Change Password at Next Logon" flagged
	
	  0xC0000071 User logon with Expired Password
	
	  0xC0000064 User logon with Misspelled or Bad User Account
	
	To track user account lockouts, only the 234 and 6A errors are important to us.
	
	NOTE: These errors are only a partial listing. Ntstatus.h has all the 0xcxxxxxxx
	listings.
	
	After the workstation that has been sending the bad passwords has been
	identified, the workstation can be configured correctly or the user can be
	informed of the correct password.
	
	
	Additional query words: pass thru through authentication
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
