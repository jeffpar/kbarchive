---
layout: page
title: "Q158636: STOP 0x1E in Win32k.sys Upgrading from WinNT 3.51 to WinNT 4.0"
permalink: kb/158/Q158636/
---

## Q158636: STOP 0x1E in Win32k.sys Upgrading from WinNT 3.51 to WinNT 4.0

	Article: Q158636
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade Windows NT 3.51 to Windows NT 4.0, you may receive the
	following STOP error message during the initial reboot of Windows NT:
	
	  STOP: 0x0000001E (0xC0000005, 0xA0036FC2, 0x00000000, 0x00000004)
	  KMODE_EXCEPTION_NOT_HANDLED address 0xA0036FC2 in Win32K.sys
	
	This behavior can also occur when you install Windows NT service packs.
	
	CAUSE
	=====
	
	This error message may occur if the following registry keys, installed by
	PCAnyWhere, exists:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\Current
	  Version\Winlogon\Ginadll
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\Current
	  Version\Winlogon\OriginalGinadll
	
	where Ginadll has a value of <Drive>\PCAnyWhere\Awgina.dll : REG_SZ.
	
	NOTE: Please be aware of the following:
	
	- This entry causes a replaceable logon dialog box.
	
	- This error does not occur during a new installation of Windows NT 4.0.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, perform one of the following:
	
	- Restore your previous version of Windows NT 3.51 and delete the Gina.dll
	  key.
	
	  -or-
	
	- Install a second instance of Windows NT 3.51 and run the previous copy of
	  Regedt32.exe to delete the Gina.dll key.
	
	MORE INFORMATION
	================
	
	PCAnyWhere is manufactured by Symantec, a vendor independent of Microsoft; we
	make no warranty, implied of otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: pc anywhere
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
