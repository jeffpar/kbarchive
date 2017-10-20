---
layout: page
title: "Q145734: Err Msg: RASDDUI.DLL is Not a Valid Windows NT Image"
permalink: /kb/145/Q145734/
---

## Q145734: Err Msg: RASDDUI.DLL is Not a Valid Windows NT Image

{% raw %}

	Article: Q145734
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to install a printer in Windows NT 3.51, the following error
	message appears:
	
	  The application or dll ./devices/<drive>:/<%SystemRoot%>/system32
	  /spool/drivers/w32x86/rasddui.dll is not a valid Windows NT image. Please
	  check this against your installation diskette.
	
	CAUSE
	=====
	
	This problem occurs when Print Manager is not able to load RASDDUI.DLL due to
	heavy I/O stress of the computer. The RASDDUI.DLL is unloaded if Windows NT has
	been using it before installing the printer. This problem may occur with files
	other than RASDDUI.DLL.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest US Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	RESOLUTION
	==========
	
	To work around this problem, remove the file such as RASDDUI.DLL and re- expand
	the file from the Windows NT 3.51 CD-ROM disc.
	
	To correct this problem, upgrade to Windows NT 3.51 Service Pack 2.
	
	Additional query words: prodnt printman.exe
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
