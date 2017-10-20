---
layout: page
title: "Q119920: ProComm Plus 2.0 for Windows Fax Services"
permalink: /kb/119/Q119920/
---

## Q119920: ProComm Plus 2.0 for Windows Fax Services

{% raw %}

	Article: Q119920
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install DataStorm Technologies ProComm Plus for Windows version 2.0 on
	Windows NT, the following error message may appear:
	
	  The virtual driver file DTASK.386 is not loaded!
	
	  Fax send and receive services will be unavailable under enhanced-mode Windows.
	  Add the line 'device=DSTASK.386' to the [386Enh] section of your SYSTEM.INI.
	
	A message may also appear on the status bar of ProComm Plus for Windows stating
	"Fax cannot open requested port" or errors about the fax service failing if you
	try to use any of the services provided for fax support.
	
	Other services of this product, including the typical communication-related
	functions, work fine.
	
	MORE INFORMATION
	================
	
	Windows NT does not support virtual device drivers that are supported under
	Windows version 3.1 and Windows for Workgroups. These drivers have the .386
	extension and run in enhanced mode in Windows 3.1 and Windows for Workgroups.
	
	
	For more information, contact the DataStorm BBS at (314) 875-0503 or call
	DataStorm Technical Support at (314) 875-0530.
	
	ProComm Plus for Windows is manufactured by DataStorm Technologies, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: wfw wfwg prodnt 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
