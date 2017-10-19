---
layout: page
title: "Q171567: Windows NT 4.0 ServiceProvider Priority Values Not Applied"
permalink: /kb/171/Q171567/
---

## Q171567: Windows NT 4.0 ServiceProvider Priority Values Not Applied

	Article: Q171567
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may notice that changing the ServiceProvider priority values, as specified
	in Knowledge Base article Q139270, "How to Change Name Resolution Order on
	Windows 95 and Windows NT," does not change the hostname resolution order as
	expected.
	
	CAUSE
	=====
	
	Unlike Windows NT 3.x, Windows NT 4.0 does not implement the ServiceProvider
	priority values.
	
	
	RESOLUTION
	==========
	
	Contact Microsoft Technical Support to obtain the updated files mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	In the fix mentioned above, Microsoft has added a new registry value to the
	TCP/IP service that allows an administrator the option of changing the hostname
	resolution order. By default, hostname resolution is performed by Domain Name
	Service (DNS) first, followed by NetBIOS over TCP/IP (NetBT), if DNS fails. With
	the use of this registry value, the order of hostname resolution can be
	reversed.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To change the hostname resolution order (between DNS and NetBT name resolution
	mechanisms), perform the following steps:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	3. On the Edit menu, click Add Value and enter the following value information:
	
	     Value Name: DnsNbtLookupOrder
	     Data Type:  REG_DWORD
	     Value:      1 or 0 (default=0, value of 1 causes NetBT name
	                 resolution to be attempted before DNS)
	
	4. Exit the Registry Editor and restart the computer for the change to take
	  effect.
	
	
	Additional query words: 4.00 multihomed
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
