---
layout: page
title: "Q151448: Trap 0x50 and Trap 0xA Under Heavy Stress"
permalink: /kb/151/Q151448/
---

## Q151448: Trap 0x50 and Trap 0xA Under Heavy Stress

{% raw %}

	Article: Q151448
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Trap 0x50 and 0xA occur as network connections are being torn down. The traps
	appear to be timing-related issues. The stackback trace should have routines
	contained in Afd.sys. These traps occurred under very high-stress conditions.
	
	
	MORE INFORMATION
	================
	
	The problem occurs on Compaq multiprocessor computers and appears to be a
	synchronization issue processing through AFD. In one instance, a trap occurred
	while processing the same IO Request Packet (IRP) a second time. The IRP data
	was no longer valid and the associated memory had been freed. In a second
	instance, the failure occurred while a TCP receive indication on an aborted
	connection was being handled.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: kbbug3.51 kbfix3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
