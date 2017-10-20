---
layout: page
title: "Q147012: Activating /W Switch to Prevent Restarting in WinNT"
permalink: /kb/147/Q147012/
---

## Q147012: Activating /W Switch to Prevent Restarting in WinNT

{% raw %}

	Article: Q147012
	Product(s): Microsoft Windows NT
	Version(s): Winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetupkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The /W switch no longer works with Winnt.exe in Windows NT 4.0.
	
	CAUSE
	=====
	
	In previous versions of Windows NT, Winnt.exe used the /W switch to prevent
	restarting because this caused problems with the Intel i386 running under
	Windows 3.x. The switch was excluded as unnecessary in Windows NT 4.0, because
	the Intel i386 processor is not supported on that platform.
	
	MORE INFORMATION
	================
	
	In certain situations, it might be desirable to prevent Winnt.exe from
	restarting after you copy files, so that you can do some postprocessing,
	especially when you start Winnt.exe from a batch file.
	
	In previous versions of Windows NT, this could be done by using the /W switch
	with Winnt.exe. This switch does not work with Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kbsetup kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : Winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
