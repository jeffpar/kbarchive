---
layout: page
title: "Q152453: Directhosting Affects Powerbuilder Query Performance"
permalink: /kb/152/Q152453/
---

## Q152453: Directhosting Affects Powerbuilder Query Performance

{% raw %}

	Article: Q152453
	Product(s): Microsoft Windows NT
	Version(s): 3.11 3.51 95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Powerbuilder client server applications that utilize the IPX/SPX Compatible
	Protocol (NWLINK) running under Windows for Workgroups or Windows 95 may
	experience a performance problem. The query from this client against SQL Server
	running under Windows NT may take a long time to process. Other similar types of
	applications may encounter the same problem.
	
	CAUSE
	=====
	
	Because the DIRECTHOST feature only supports half-duplex communication (only one
	command outstanding on the IPX session at a time), this feature causes a
	decrease in perfomance with network applications that use named pipes to
	connect.
	
	RESOLUTION
	==========
	
	Disable the DIRECTHOST feature.
	
	Steps to disable the feature in Windows for Workgroups:
	
	1. Open System.ini.
	
	2. Goto the [NETWORK] section.
	
	3. Add a line: DIRECTHOST=NO
	
	This change will take effect when you next start Windows for Workgroups.
	
	Steps to disable the feature in Windows 95:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Click the Start button, then click Run. The Run dialog box appears.
	
	2. Type "regedit" and choose OK. Registry Editor starts.
	
	3. Open (click on the + next to) HKEY_LOCAL_MACHINE, the go to the following
	  subkey:
	
	  System\CurrentControlSet\Services\Vxd
	
	4. Open (click on the + next to) HKEY_LOCAL_MACHINE, then open System,
	  CurrentControlSet, Services, and then finally open VxD.
	
	5. Select VNETSUP.
	
	6. On the Edit menu, select New, then choose String Value. A new value appears
	  in the right-hand pane.
	
	7. If necessary, right click on the new item and choose Rename from the context
	  menu. Type DirectHost and press ENTER.
	
	8. Right click on DirectHost and choose Modify. The Edit String dialog appears.
	
	9. Type 0 (zero) and click OK.
	
	10. Click Registry, then Exit to end the Registry Editor.
	
	This change will take effect when you next start Windows 95
	
	Additional query words: crawl slow
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : 3.11 3.51 95
	
	=============================================================================
	

{% endraw %}
