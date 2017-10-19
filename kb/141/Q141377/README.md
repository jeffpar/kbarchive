---
layout: page
title: "Q141377: Differences Between Regedit.exe and Regedt32.exe"
permalink: /kb/141/Q141377/
---

## Q141377: Differences Between Regedit.exe and Regedt32.exe

	Article: Q141377
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 04-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT provides two utilities that allow you to modify the configuration and
	registration databases. The two utilities are Regedit.exe and Regedt32.exe. This
	article describes the differences between the two utilities.
	
	MORE INFORMATION
	================
	
	Regedit.exe
	-----------
	
	Regedit.exe is the registration editor for 16-bit Windows, which is used to
	modify the Windows registration database. The database is located in the Windows
	directory as REG.DAT. The database contains information about 16- bit
	applications, and is used by File Manager for opening and printing files. It is
	also used by applications that support Object Linking and Embedding (OLE).
	REG.DAT is used and maintained by Windows on Windows (WOW) and 16-bit Windows
	applications. The WOW layer resides on top of the Virtual DOS Machine (VDM).
	
	Regedit.exe is a 16-bit application that is included in Windows NT for
	compatibility with previous 16-bit applications. Regedit provides a method for
	examining REG.DAT under Windows NT. You can migrate the REG.DAT database file to
	the Windows NT registry during the first logon to an initial installation of
	Windows NT.
	
	Regedt32.exe
	------------
	
	Regedt32.exe is the configuration editor for Windows NT, which is used to modify
	the Windows NT configuration database, also known as the Windows NT Registry.
	This editor allows you to view or modify the Windows NT Registry. The editor
	provides views of windows that represent sections of the registry, called hives.
	Each window displays two sections. On the left side, there are folders that
	represent registry keys. On the right side, there are the values associated with
	the selected registry key. Regedt32 is a powerful tool, which you must use with
	extreme caution when changing registry values. Missing or incorrect values in
	the registry can render the Windows NT installation unusable.
	
	For additional information on Regedit and Regedt32, please see the on-line Help
	for these utilities or the Resource Kit Tools Overview Help in the Windows NT
	Resource Kit.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	
