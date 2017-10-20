---
layout: page
title: "Q120770: STOP: 0x0000000A When CadexNet on LM Clients Stress SRV.SYS"
permalink: /kb/120/Q120770/
---

## Q120770: STOP: 0x0000000A When CadexNet on LM Clients Stress SRV.SYS

{% raw %}

	Article: Q120770
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbnetwork kb3rdparty kbbug3.10 kbfix3.10.sp3 kbfix3.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows NT is heavily stressed by LAN Manager 2.2 clients running CadexNet
	document control software, the following STOP message appears:
	
	  STOP: 0x0000000A(0x004E00CB, 0x00000002,0x00000000,0x801135D8
	  Memory at 0x004E00CB was accessed at IRQL 2 for 0 [r] access from 0x801135D8
	
	  Base 80100000 == NTOSKRNL.EXE
	
	  0x801135D8
	  - 0x80100000
	  -----------------
	  offset: 0x000135D8
	
	
	This only occurs with LAN Manager 2.2 and 2.2b clients. It does not occur with
	Windows for Workgroups 3.11 clients.
	
	CAUSE
	=====
	
	The STOP Message occurs when CadexNet heavily stresses a file with FCB
	open/close operations.
	
	RESOLUTION
	==========
	
	Microsoft has updated the Windows NT file, SRV.SYS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1 and Windows NT Workstation and Windows NT Server
	version 3.5. This problem was corrected in the latest U.S. Service Pack for
	Windows NT version 3.1 and U.S. Service Pack for Windows NT version 3.5. For
	information on obtaining these Service Packs, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	CadexNet is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt wfw wfwg 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
