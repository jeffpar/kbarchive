---
layout: page
title: "Q138744: Policy Editor Adds Incorrect Value for NetWare Search Mode"
permalink: /kb/138/Q138744/
---

## Q138744: Policy Editor Adds Incorrect Value for NetWare Search Mode

{% raw %}

	Article: Q138744
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you use Policy Editor to modify the search mode used by the Microsoft
	Client for NetWare Networks, the registry key relating to the search mode is
	modified, but the search mode functionality provided by the Microsoft Client for
	NetWare Networks is unchanged.
	
	CAUSE
	=====
	
	When you use Policy Editor to modify the search mode used by the Microsoft
	Client for NetWare Networks, the SearchMode value under the following registry
	key is changed to a DWORD value, and assigned the value that you specify in
	Policy Editor:
	
	  Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\Nwredir
	
	This registry value is given a value of 0, 1, 2, 3, 5, or 7, which normally
	causes the Microsoft Client for NetWare Networks to use the appropriate search
	mode. However, for the search mode to be properly modified, the SearchMode value
	must be a binary value, not a DWORD value.
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	To correct the problem described in this article, use Registry Editor to delete
	the existing SearchMode value under the following registry key:
	
	  Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\Nwredir
	
	After you delete the SearchMode value, create a new binary value with the same
	name, and assign it one of the following values:
	
	  Value    Description
	  -----------------------------------------------------------------------
	  0 or 1   Uses the default search mode. The Microsoft Client for NetWare
	           Networks searches the search drives only when no path is
	           specified in the program and after the default directory has
	           been searched.
	
	  2        Causes the Microsoft Client for NetWare Networks not to search
	           any search drives to find supporting files. The program
	           behaves as if you were running it without networking. If the
	           program has a defined directory path for searching and opening
	           files, the program searches for the files in that path.
	
	  3        The same as 1, except that if the program has no defined
	           directory path to search and open files, the Microsoft Client
	           for NetWare Networks searches the search drives only if the
	           open request is a read-only request.
	
	  5        Causes the Microsoft Client for NetWare Networks to always
	           search the search drives, even if the program specifies a
	           path.
	
	  7        The same as 5, except that the Microsoft Client for NetWare
	           Networks searches the search drives only if the open request
	           is a read-only request.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: poledit novell
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
