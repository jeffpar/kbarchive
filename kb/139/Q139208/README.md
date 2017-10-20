---
layout: page
title: "Q139208: Instability in RAS using TAPI X25 Ndiswan Driver"
permalink: /kb/139/Q139208/
---

## Q139208: Instability in RAS using TAPI X25 Ndiswan Driver

{% raw %}

	Article: Q139208
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an X25 Ndiswan driver that uses TAPI (Telephony APIs) for its
	configuration, unpredictable behavior occurs when you attempt to view the
	configuration of the X25 port using the Status button in RASPhone while a RAS
	connection is active on the port.
	
	CAUSE
	=====
	
	This problem occurs because the status of the X25 port is not returned correctly
	by Rastapi.dll when it attempts to read the X25 port configuration structure.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt x.25
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
