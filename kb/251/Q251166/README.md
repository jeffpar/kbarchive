---
layout: page
title: "Q251166: NetBIOS Connections Using IP Address Fail After Applying SP5"
permalink: kb/251/Q251166/
---

## Q251166: NetBIOS Connections Using IP Address Fail After Applying SP5

	Article: Q251166
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT4sp6fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 5, you may no longer be able to
	establish NetBIOS connections using an IP address, such as in the following
	examples:
	
	  NET VIEW \\192.168.0.1
	  NET USE * \\192.168.0.1\SHARENAME
	
	CAUSE
	=====
	
	This issue can occur because Windows NT 4.0 Service Pack 5 does not establish
	NetBIOS connections like earlier versions of Windows NT.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. service pack for Windows NT
	version 4.0. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	STATUS
	======
	
	This problem was first corrected in Windows NT 4.0 Service Pack 6.
	
	MORE INFORMATION
	================
	
	Before you install Windows NT 4.0 Service Pack 5, Windows NT follows these steps
	to establish a NetBIOS connection for an IP address:
	
	1. Establish a TCP session on port 139 (the NetBIOS session port).
	
	2. Attempt to set up a NetBIOS session using the special "*SMBSERVER" name. If
	  this succeeds, Windows NT proceeds with the NetBIOS session as normal.
	
	3. If step 2 does not work, a NetBIOS Adapter Status Query is issued to the IP
	  address that was specified. This query occurs on UDP port 137 (the NetBIOS
	  name resolution port). The Adapter Status Query returns a list of all NetBIOS
	  names registered by the target system. This list is parsed for the NetBIOS
	  name registered by the Server Service (<computername>[0x20]).
	
	4. If step 3 is successful, the TCP session to port 139 is established, and the
	  NetBIOS session is set up using the NetBIOS name found in step 3.
	
	After you apply Windows NT 4.0 Service Pack 5, Windows NT does not perform the
	first two steps to esablish a NetBIOS connection. However, if step 3 is
	successful, the connection is established and NetBIOS functions properly.
	
	For security reasons, Network Administrators may want to disable UDP port 137. If
	this is done, NetBIOS commands that specify an IP address and are initiated from
	a computer running Windows NT 4.0 Service Pack 5 may not work even though other
	operating systems or service pack versions may be able to complete the command
	successfully. For additional information, please see the following article(s) in
	the Microsoft Knowledge Base:
	
	  Q161431 Connecting to NetBIOS Resources Using DNS Names or IP Addresses
	
	Additional query words: SMB
	
	======================================================================
	Keywords          : kbnetwork kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
