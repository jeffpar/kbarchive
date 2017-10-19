---
layout: page
title: "Q90726: WinLogin GP Fault in WLDAPI.DLL"
permalink: /kb/090/Q90726/
---

## Q90726: WinLogin GP Fault in WLDAPI.DLL

	Article: Q90726
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Microsoft WinLogin on a workstation (client) and exiting or saving
	the current configuration, you may receive the following error message:
	
	  WINLOGIN caused a General Protection Fault in module WLDAPI.DLL at 0001:AFB3
	
	CAUSE
	=====
	
	This error occurs if the length of any key (entry on the left side of the equal
	sign) in an .INI file that WinLogin is managing exceeds 63 characters in length.
	
	RESOLUTION
	==========
	
	To avoid this error, make sure that there are no key entries exceeding 63
	characters in length in any .INI file managed by WinLogin.
	
	For example:
	
	  [DummySection]
	  ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJK=1
	  ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKL=1
	
	The first entry is a valid key (63 characters), while the second entry (64
	characters) is not and results in the general protection (GP) fault.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	
	Additional query words: gpf 3.10 3.1 winlogin win login ini limit limitation jet err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWinLoginSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinLogin100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
