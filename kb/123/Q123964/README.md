---
layout: page
title: "Q123964: Server Service Hangs When Using GSNW"
permalink: /kb/123/Q123964/
---

## Q123964: Server Service Hangs When Using GSNW

{% raw %}

	Article: Q123964
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
	
	When you access a NetWare server using Gateway Services for NetWare (GSNW)
	running on a Windows NT 3.5 Server installation, the Server service may hang,
	disabling all network access to the Windows NT server from any Microsoft Windows
	networking clients. Access to the NetWare server from the Windows NT 3.5 server
	will still work. A cold boot is required to recover from this situation.
	
	CAUSE
	=====
	
	If two users simultaneously access the same file on a NetWare server through the
	gateway service and both users try to apply a lock to an overlapping range in
	the file, an unrecoverable deadlock occurs in the server service.
	
	This is most commonly seen when database applications such as Microsoft Access or
	Microsoft FoxPro are used where the database files are located on the NetWare
	server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: GSNW novell prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
