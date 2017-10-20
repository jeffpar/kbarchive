---
layout: page
title: "Q309149: XADM: Exchange Server 5.5 Post-SP4 JET Fixes Available"
permalink: /kb/309/Q309149/
---

## Q309149: XADM: Exchange Server 5.5 Post-SP4 JET Fixes Available

{% raw %}

	Article: Q309149
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 25-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article lists the article numbers for Exchange Server 5.5 JET bugs that
	have been fixed after Exchange Server 5.5 Service Pack 4 (SP4) was released.
	
	For information about how to obtain the fixes listed in this article, click the
	article numbers listed in the "More Information" section of this article.
	
	NOTE: Exchange Server fixes for a particular component are cumulative and contain
	all of the previous fixes for that component. Fixes with a particular version
	number contain all of the fixes that have an earlier version number.
	
	MORE INFORMATION
	================
	
	JET fixes include the following files:
	
	  
	  +-------------------------------+
	  | File name   | Current version | 
	  +-------------------------------+
	  | Edbbcli.dll | 5.5.2654.15     | 
	  +-------------------------------+
	  | Ese.dll     | 5.5.2654.91     | 
	  +-------------------------------+
	  | Eseback.dll | 5.5.2654.15     | 
	  +-------------------------------+
	  | Eseperf.dll | 5.5.2655.04     | 
	  +-------------------------------+
	
	Fixes Released on October 2, 2001
	---------------------------------
	
	The following files are modified:
	
	- Edbbcli.dll and Eseback.dll are incremented to version 5.5.2654.15.
	
	- Ese.dll is incremented to version 5.5.2654.91.
	
	- Eseperf.dll is incremented to version 5.5.2655.04.
	
	The following fixes are included:
	
	  Q275885 XADM: Backup Over Network Does Not Work When Computer Name Is 15
	  Characters
	
	  Q284719 XADM: Eseutil/p Causes Access Violation in ESE!OBJIDLIST__ErrAddObjid
	
	  Q294977 XADM: RPC Denial of Service Attack May Cause Information Store to
	  Stop Unexpectedly
	
	  Q297828 XADM: ESEPERF!CollectPerformanceData Causes Winlogon to Stop
	  Responding and Generate an Error Message on a Blue Screen with Int21a
	
	
	Additional query words: rollup
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
