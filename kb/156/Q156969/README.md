---
layout: page
title: "Q156969: Description of DeviceOld Value Under HKEY_CURRENT_USER&#92;Printers"
permalink: /kb/156/Q156969/
---

## Q156969: Description of DeviceOld Value Under HKEY_CURRENT_USER&#92;Printers

	Article: Q156969
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DeviceOld value under HKEY_CURRENT_USER\Printers in the Windows NT registry
	is an entry that points to the default printer set by the most recently logged
	off user.
	
	MORE INFORMATION
	================
	
	The location for the current default printer is:
	
	HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows
	
	These value entries are listed below, with the path noted in the description.
	
	  Device     REG_SZ
	  Range:     output-device-name, device-driver, port-connection
	  Default:   printerName,winspool,LPT1:
	
	  Description: Defines the default printer. An explicit port and driver
	               must be assigned to the device. The device-driver is the
	               file name (without the extension) of the device driver
	               file. To change this entry, use Print Manager.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
