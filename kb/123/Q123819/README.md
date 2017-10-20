---
layout: page
title: "Q123819: File Manager I/O Optimizations Slow other File Transfers"
permalink: /kb/123/Q123819/
---

## Q123819: File Manager I/O Optimizations Slow other File Transfers

{% raw %}

	Article: Q123819
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1,3.1,3.5,3.51,3.5,3.51; :3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation version 3.1,3.5,3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The file I/O optimizations in Windows NT File Manager can cause other processes'
	calls to Raw Write and Raw Read to fail.
	
	RESOLUTION
	==========
	
	To correct This problem:
	
	- Always use File Manager to copy or write files. File Manager will cancel the
	  NTNotifyDirectoryChange SMB before submitting the RAW read/write operation.
	
	- Modify the Windows NT Registry as follows:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  1. Run Registry Editor (REGEDT32.EXE).
	
	  2. From the \HKEY_CURRENT_USER subtree, go to the following key:
	
	  \Software\Microsoft\FileManager\Settings
	
	  3. From the Edit menu, choose Add Value.
	
	  4. Enter the following:
	
	  Value Name: ChangeNotifyTime
	  Data Type: REG_SZ
	  String: 0 (disable; 1 for enable)
	
	MORE INFORMATION
	================
	
	Normal CORE mode read and write operations occur in approximately 8K units. For
	each 8K the redirector must submit a new SMB (server message block). As an
	optimization, Microsoft networks can use RAW mode to send data in 64K units,
	requiring one SMB for every 64K. The transport subdivides this buffer as needed.
	One stipulation of RAW mode is that the Virtual Circuit must be tied up while
	the operation is in progress because the data frames contain no SMB information
	to correlate it. No other SMB can be allowed during this time.
	
	Windows NT introduced a new SMB called NTNotifyDirectoryChange. This causes the
	server to notify the client if directory information changes. For example, if
	another client adds a file to a directory, Windows NT File Manager uses
	NTNotifyDirectoryChange.
	
	This SMB is classified as a long term request. The SMB is received by the server
	but is not returned until a change occurs (or until the SMB is canceled by the
	client). Because the client does not know when the server will complete the SMB,
	it cannot tie up the virtual circuit. Therefore, the client does not use RAW
	mode when an NTNotifyDirectoryChange is pending.
	
	When necessary, File Manager cancels the request to take advantage of RAW mode.
	However, other processes such as NTVDM or SETUP are not aware that RAW mode has
	been disabled.
	
	
	Additional query words: prodnt 3.10 smb pending
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search
	Version           : winnt:3.1,3.1,3.5,3.51,3.5,3.51; :3.1
	
	=============================================================================
	

{% endraw %}
