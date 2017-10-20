---
layout: page
title: "Q127816: NWCONV Ignores Prefix for Duplicate Names"
permalink: /kb/127/Q127816/
---

## Q127816: NWCONV Ignores Prefix for Duplicate Names

{% raw %}

	Article: Q127816
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Migration Tool for NetWare (NWCONV.EXE) in Windows NT Server
	version 3.5 to convert user names and group names from a NetWare server, the
	following error message appears in the LOGFILE.LOG file:
	
	  ERROR: Saving Group Name
	
	Error messages also appear in the LOGFILE.LOG file as follows:
	
	  ERROR: Adding user <user name> to group <group name>
	
	CAUSE
	=====
	
	This problem occurs when duplicate group names are detected in the Windows NT
	Server during the conversion from the NetWare server, such as USERS. In order to
	prevent this problem, you add a prefix for group name in the Migration Tool for
	NetWare. However, the prefix is ignored during the conversion and the groups are
	not migrated to the Windows NT Server.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Create a new group at the NetWare server.
	
	2. Move or add the user names from the duplicate group name to the new group
	  name.
	
	3. Run NWCONV.EXE again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
