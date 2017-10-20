---
layout: page
title: "Q137501: FPNW Server Fails to Replicate Files to NetWare Clients"
permalink: /kb/137/Q137501/
---

## Q137501: FPNW Server Fails to Replicate Files to NetWare Clients

{% raw %}

	Article: Q137501
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use IBM LAN Bridge Manager version 2.0 with File and Print Services for
	NetWare (FPNW) 3.51, the FPNW server fails to download and update files on the
	NetWare client computer (using NETX or VLM).
	
	CAUSE
	=====
	
	When the shareable flag is returned as "yes" for replicating files, the IBM Lan
	Bridge Manager software does not copy some of the server based files to the
	client.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\FPNW\Parameters
	
	3. From the Edit menu, select Add Value.
	
	4. Add the following:
	
	  Value Name: ReturnShareableFlag
	  Data Type: REG_DWORD
	  Data: 0
	
	5. Choose OK and quit Registry Editor.
	
	6. Shutdown and restart Windows NT.
	
	Additional query words: prodnt NetWare Novell FPNW
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	
	=============================================================================
	

{% endraw %}
