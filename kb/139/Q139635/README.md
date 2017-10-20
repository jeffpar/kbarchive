---
layout: page
title: "Q139635: RAS Authentication of Third Party PPP SPAP Clients Fail"
permalink: /kb/139/Q139635/
---

## Q139635: RAS Authentication of Third Party PPP SPAP Clients Fail

{% raw %}

	Article: Q139635
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT 3.51 Service Pack 2, third party remote access
	service (RAS) clients using Shiva's Password Authentication Protocol (SPAP) fail
	to authenticate to the Windows NT 3.51 RAS server. RAS clients using SPAP
	authentication include Shiva Lanrover and Shiva PPP Dialer packaged with
	NetScape Navigator 1.2 (Personal Edition).
	
	CAUSE
	=====
	
	The RASPPPEN.DLL that ships with Service pack 2 has changed.
	
	
	RESOLUTION
	==========
	
	Microsoft has modified the file, RASPPPEN.DLL, to correct this problem. Upgrade
	to the latest Windows NT 3.51 U.S. Service Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.51 U.S. Service
	Pack 3. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt sp2
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
