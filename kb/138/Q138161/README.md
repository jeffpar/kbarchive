---
layout: page
title: "Q138161: NBIPX: Broadcast Datagrams Should Contain Destination Field"
permalink: /kb/138/Q138161/
---

## Q138161: NBIPX: Broadcast Datagrams Should Contain Destination Field

{% raw %}

	Article: Q138161
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.50,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.50, 3.51 
	- Microsoft Windows NT Server versions 3.50, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Interoperability problems occur when existing Windows NT computers send or
	receive broadcast datagrams. Directed datagrams (or group datagrams) are not
	affected.
	
	A supported fix is now available, but is not fully regression-tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the service pack release containing this fix. Contact Microsoft Product
	Support Services for more information. 1, Windows for Workgroups 3.11, or
	Windows 95 client, the client receives 45 bytes (16 bytes extra). When the
	packet is issued from a Windows 3.1, Windows for Workgroups 3.11 or a Windows 95
	computer to a Windows NT 3.5 or 3.51 computer, the Windows NT computer receives
	13 bytes (16 bytes lost).
	
	CAUSE
	=====
	
	The broadcast datagrams do not contain the destination name field in the NBIPX
	portion, therefore the data starts immediately after the source name.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	Broadcast datagrams (0xC) contain the destination field, even though it is
	ignored by the receiver.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. This problem was
	corrected in the latest U.S. Service Pack for Windows NT Workstation or Server
	version 3.51. For information on obtaining this update, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K Contact Microsoft Product
	
	Support Services for more information on the availability of this fix.
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.50,3.51
	
	=============================================================================
	

{% endraw %}
