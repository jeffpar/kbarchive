---
layout: page
title: "Q121044: NBTSTAT -R Parameter May Fail in Microsoft TCP/IP-32"
permalink: /kb/121/Q121044/
---

## Q121044: NBTSTAT -R Parameter May Fail in Microsoft TCP/IP-32

{% raw %}

	Article: Q121044
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The NBTSTAT -R command may not appear to function properly in Microsoft
	TCP/IP-32. If you attempt to purge and reload the NetBIOS name cache using
	NBTSTAT -R, the remote name table may be purged without reloading the NetBIOS
	name cache from the LMHOSTS file.
	
	The NBTSTAT -R command appears to function properly and generates the following
	message:
	
	  Successful purge and preload on the NBT Remote Cache Name Table.
	
	However, the NBTSTAT -C command shows that the cache has been purged, but the
	values in the LMHOSTS suffixed with #PRE have not been loaded.
	
	WORKAROUND
	==========
	
	You can work around this problem by enabling the LmHostFile parameter in
	SYSTEM.INI:
	
	1. In the Network window, double-click the Network Setup icon, or use the arrow
	  keys to select Network Setup, and then press ENTER.
	
	2. In the Network Drivers dialog box, choose the Drivers button.
	
	3. In the Network Drivers list, select Microsoft TCP/IP-32 3.11, and then choose
	  the Setup button.
	
	4. In the Microsoft TCP/IP-32 3.11 setup dialog box, choose the Advanced button,
	  and then select the Enable LMHOSTS Lookup check box.
	
	Note that this parameter is not enabled by default when you install Windows for
	Workgroups version 3.11 with the Microsoft TCP/IP-32 protocol.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft TCP/IP-32. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: wfw wfwg prodtcp32 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
