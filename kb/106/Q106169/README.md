---
layout: page
title: "Q106169: Windows NT and HP LAN Manager/X Version 1.4 Interoperability"
permalink: /kb/106/Q106169/
---

## Q106169: Windows NT and HP LAN Manager/X Version 1.4 Interoperability

	Article: Q106169
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may experience difficulty connecting to computers with HP LAN Manager/X
	version 1.4. Several different issues have been identified and are detailed with
	workarounds below.
	
	NOTE: The #NOFNR flag does not apply to Windows NT version 3.5 systems, which do
	not use directed name queries.
	
	MORE INFORMATION
	================
	
	Idle NetBIOS Sessions Become Unusable After Five Minutes
	--------------------------------------------------------
	
	SYMPTOMS
	========
	
	Idle NetBIOS sessions between Windows NT clients and HP LAN Manager/X servers
	become unusable after about five minutes.
	
	You cannot connect from a Windows NT computer to an HP LAN Manager/x computer by
	adding entries to the LMHOSTS file.
	
	You cannot view files on an HP LAN Manager/X server located in a directory that
	has a name with more than three characters following the period. If you try to
	run the DIR command a "file not found" message appears.
	
	You may be prompted for a password when you connect from a Windows NT computer to
	a LAN Manager or HP LAN Manager/X version 1.x server.
	
	CAUSE
	=====
	
	HP LAN Manager/X does not recognize NetBIOS "keep alive" messages.
	
	HP LAN Manager/X computers do not respond to directed name queries.
	
	HP LAN Manager/X version 1.4 negotiates by the SMB Specification Ext 2.0 (or LAN
	Manager 1.x). This specification does not support long file names.
	
	
	For security reasons Windows NT does not send an un-encrypted password over the
	network unless you type it in. Since HP LAN Manager/X machines do not support
	encrypted passwords, Windows NT asks for a password with the following prompt:
	
	  The password is invalid for \\servername\sharename.
	  Type the password for \\servername\sharename:
	
	Solution:
	
	Typing the correct password will allow you to log in.
	
	WORKAROUND
	==========
	
	Disable NetBIOS "keep alive" messages in Windows NT by using the following
	procedure:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor.
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services \Nbt\Parameters
	
	3. Choose Add Value from the Edit menu.
	
	4. Add a value using the following information:
	
	     Value Name: NbtKeepAlive
	     Data Type:  REG_DWORD
	     Data:       0
	
	5. Exit Registry Editor.
	
	Cannot Connect Using LMHOSTS File
	---------------------------------
	
	Add the "#NOFNR" flag to the LMHOSTS entries for these computers. For more
	information see article Q103765 in the Microsoft Knowledge Base.
	
	Cannot See Files Under Some Directory Names
	-------------------------------------------
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. There is a fix for this problem that has not been
	regression-tested. Contact Microsoft Product Support Services for more
	information.
	
	
	Prompted for Password on Connection
	-----------------------------------
	
	Additional query words: prodnt HP LM/X 1.4
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :
	
	=============================================================================
	
