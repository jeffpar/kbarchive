---
layout: page
title: "Q138271: Windows 95 NetBIOS Scope ID Configuration"
permalink: /kb/138/Q138271/
---

## Q138271: Windows 95 NetBIOS Scope ID Configuration

	Article: Q138271
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can only modify the TCP/IP NetBIOS Scope ID through Control Panel if WINS
	Resolution is enabled.
	
	MORE INFORMATION
	================
	
	If you are using Windows 95 as a client in a Windows NT-based network, you may
	need to define a NetBIOS Scope ID.
	
	If WINS is enabled for NetBIOS name resolution, you can modify the Scope ID in
	the Network section of Control Panel. Click on TCP/IP, then click on Properties,
	and then click on the WINS Configuration tab and edit the Scope ID value.
	
	If you do not have WINS enabled, this can only be changed manually, by editing
	the registry as follows:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows 95 to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDIT.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     System\CurrentControlSet\Services\VXD\MSTCP
	
	3. Add the new ScopeID by clicking on Edit, then on New, then select "String
	  Value = ScopeID" and press ENTER. Double-click on the value. A window appears
	  for Edit String. Enter your Scope ID under Value data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95. We are researching
	this problem and will post new information in the Microsoft Knowledge Base as it
	becomes available.
	
	Additional query words: prodwin95 95 win95
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
