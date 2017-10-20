---
layout: page
title: "Q165509: CSNW Clients May Get Access Denied Using WHOAMI"
permalink: /kb/165/Q165509/
---

## Q165509: CSNW Clients May Get Access Denied Using WHOAMI

{% raw %}

	Article: Q165509
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Client Services for NetWare (CSNW) users may not be able to get connection
	information using the WHOAMI tool. If the user is not an administrator of his or
	her workstation and he or she selects WHOAMI from the Network Neighborhood menu,
	he or she will receive the following error message:
	
	  Error access is denied occurred while trying to get connection information.
	
	CAUSE
	=====
	
	CSNW attempted to open a handle directly to the NetWare redirector device.
	Because only an administrator, or the system account, can acquire a handle
	directly to the NetWare redirector device, the open would fail and access is
	denied.
	
	RESOLUTION
	==========
	
	CSNW was modified to get a handle to the preferred, or nearest, server instead
	of the NetWare redirector device.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
