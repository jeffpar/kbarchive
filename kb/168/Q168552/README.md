---
layout: page
title: "Q168552: Allowing WinNT Setup to Detect and Configure 3COM 3C589D"
permalink: /kb/168/Q168552/
---

## Q168552: Allowing WinNT Setup to Detect and Configure 3COM 3C589D

	Article: Q168552
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During Windows NT setup the 3C589D EtherLink III PC Card is not recognized. This
	inhibits you from joining a domain because the network cannot be started.
	
	MORE INFORMATION
	================
	
	Because the 3c589D is not on the Windows NT version 4.0 Hardware Compatibility
	List (HCL) the tuple information for this PC Card is not in the Windows NT
	Registry Database. To add support for this card during Windows NT Setup, perform
	the following:
	
	1. Copy the \i386 directory from the Windows NT Installation CD to your
	  distribution share point or local hard drive.
	
	2. From a computer running Windows NT, uncompress the System._ file in the \i386
	  directory. IE: EXPAND System._ System
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	3. Start Registry Editor (Regedt32.exe) and select the HKEY_LOCAL_MACHINE
	  Window.
	
	4. Select the HKEY_LOCAL_MACHINE key.
	
	5. On the Registry menu, click Load Hive. Browse to and select the SYSTEM
	  registry file in the Windows NT distribution \I386 directory. Click Open,
	  then assign it a name other than SYSTEM, for example, TEST.
	
	6. The newly loaded hive will now appear in the HKEY_LOCAL_MACHINE window as
	  TEST. Double-click on the folder TEST, and then ControlSet001.
	
	7. Use the following Microsoft Knowledge Base article to add 3Com 3C589D entries
	  to the PCMCIA database.
	
	  Q138618 ErrMsg: "No Configuration Info ..." with PCMCIA
	
	8. When finished, select the TEST key, then from the Registry menu, click Unload
	  Hive.
	
	9. Rename the System. file to System._ in the Distribution directory.
	
	10. Run Windows NT Setup, winnt or winnt /B from the distribution directory.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q149305 PCMCIA Network Cards May Fail to Start During NT Installation.
	
	Additional query words: nic unattended prodnt
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
