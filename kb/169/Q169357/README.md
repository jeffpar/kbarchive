---
layout: page
title: "Q169357: WinNT SP3 Says Mtxdm.dll Older Than Currently Installed Version"
permalink: /kb/169/Q169357/
---

## Q169357: WinNT SP3 Says Mtxdm.dll Older Than Currently Installed Version

{% raw %}

	Article: Q169357
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Service Pack 3 for Windows NT 4.0, you may get the warning that
	the version of Mtxdm.dll is older than the currently installed version.
	
	CAUSE
	=====
	
	The Mtxdm.dll that comes with Windows NT 4.0 Service Pack 3 is the version that
	was tested with the ODBC drivers that come with the service pack. The changes
	made to Mtxdm.dll did not affect ODBC, and therefore the file was not updated.
	If you have a newer version of this DLL, you do not have to overwrite it with
	the older version. The new version will work fine with Windows NT 4.0 Service
	Pack 3.
	
	RESOLUTION
	==========
	
	When the Service Pack 3 installation program asks if you want to overwrite the
	newer version, select NO so the file will not be overwritten.
	
	Additional query words: prodnt sp sp3 ship shipped install
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
