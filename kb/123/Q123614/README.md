---
layout: page
title: "Q123614: File Manager Err Msg: Menu File Open Error...."
permalink: /kb/123/Q123614/
---

## Q123614: File Manager Err Msg: Menu File Open Error....

{% raw %}

	Article: Q123614
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove File Commander from Windows NT and run File Manager, the
	following error message appears:
	
	  Menu file file open error. Maybe it does not exist???
	
	
	File Commander is an add-on utility for File Manager.
	
	CAUSE
	=====
	
	You deleted the File Commander directory (FILECMDR) but did not remove its
	Registry settings.
	
	RESOLUTION
	==========
	
	In order to correct this problem, use the Uninstall feature for File Commander
	and verify that entries in the Registry for the program are removed.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start Registry Editor and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT \CurrentVersion\File
	  Manager\Addons
	
	2. Verify and remove the entries for the following DLL files:
	
	  WFC32I1.DLL WFC32I2.DLL WFC32I3.DLL WFC32I4.DLL WFC32I5.DLL (Some versions of
	  File Commander may not use this file)
	
	  NOTE: For Intel-based computers, the file name is WFC32Ix.DLL where x is a one
	  digit number. The file name is different for other platforms.
	
	3. Exit Registry Editor and restart Windows NT.
	
	You should now be able to run File Manager successfully.
	
	For additional information, contact Wilson Windowware Technical Support at (206)
	937-9335 or (800) 762-8383.
	
	The product discussed here is manufactured by Wilson Windowware, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
