---
layout: page
title: "Q111027: File Write to Network Share Using MS-DOS 21h Function Fails"
permalink: /kb/111/Q111027/
---

## Q111027: File Write to Network Share Using MS-DOS 21h Function Fails

{% raw %}

	Article: Q111027
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use MS-DOS function 21h to write to a file on a network share, the
	following error appears in the event log:
	
	  System Process - Lost Delayed-Write Data
	
	  The system was attempting to transfer file data from buffer to <network
	  share>. The write operation failed, and only some of the data may have
	  been written to the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	

{% endraw %}
