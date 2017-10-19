---
layout: page
title: "Q136402: IniFileMapping for 16-Bit Windows Apps Fail in Windows NT 3.51"
permalink: /kb/136/Q136402/
---

## Q136402: IniFileMapping for 16-Bit Windows Apps Fail in Windows NT 3.51

	Article: Q136402
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you add a new key to map Windows 16-bit .INI files to user specific entries
	in the Microsoft Windows NT Registry using the Software\Microsoft\Windows
	NT\CurrentVersion\IniFileMapping key, then mappings have no effect. Mappings
	created with previous versions of Windows NT do not work either.
	
	
	CAUSE
	=====
	
	IniFileMapping does not work if the application calls the Windows Kernel API
	function GetPrivateProfileString with a fully qualified pathname (for example,
	C:\PROGHRAMS\MYAPP\MYAPP.INI).
	
	This functionality changed in Windows NT 3.51 because applications failed if they
	tried to call GetPrivateProfileString with a fully qualified pathname because
	they got their information from the Windows 3.1 WIN.INI entries. The fix
	mentioned below treats references to WIN.INI as a special case. If WIN.INI is
	referenced, the standard WIN.INI file is be used.
	
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.5 prodnt HKEY_LOCAL_MACHINE subtree path name
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
