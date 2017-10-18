---
layout: page
title: "Q273027: Gethostbyname() May Return Wrong IP Address"
permalink: kb/273/Q273027/
---

## Q273027: Gethostbyname() May Return Wrong IP Address

	Article: Q273027
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When a client computer that is running Windows NT, Microsoft Windows 95, or
	Microsoft Windows 98 disconnects and then reconnects by using Remote Access
	Service (RAS) and receives a new IP address from the RAS server, the new IP
	address is not discovered by a Windows NT 4.0-based server for a variable time
	interval (usually a few minutes). This problem was initially noted in a
	Microsoft Message Queue (MSMQ) environment, in which the reconnected MSMQ
	clients were not discovered by the MSMQ server for a variable time interval.
	
	CAUSE
	=====
	
	This problem is caused by the NetBIOS Name Cache management (Netbt.sys) on the
	Windows NT 4.0-based server. The lifetime of an entry in the NetBIOS Name cache
	is determined by this registry value :
	
	  HKLM\System\CCS\Services\Netbt\Parametes\CacheTimeout
	
	The default value is 600,000 milliseconds (10 minutes).
	
	When a NetBIOS cache entry (such as name00) is used, its remaining lifetime is
	reinitialized for a new (CacheTimeout + 1 minute) interval. Therefore, if a ping
	name command is issued at a regular time interval that is shorter than
	(CacheTimeout +1 minute), the NetBIOS cache entry is revalidated each time; the
	new IP address is never discovered (by WINS resolution).
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name  Platform
	  ------------------------------------------------
	  10/16/2000  07:24p  124,656  Netbt.sys  Intel
	  10/16/2000  07:22p  224,912  Netbt.sys  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The MSMQ server periodically accesses all the MSMQ clients by using the
	gethostbyname function to discover the new IP address. You can reduce the
	discovery latency to two minutes by using the following settings:
	
	- HKLM\System\CCS\Services\Netbt\Parameters\CacheTimeout = 60000 (60 seconds),
	  type REG_DWORD in milliseconds
	
	- HKLM\System\CCS\Services\Tcpip\ServiceProvider\MaxHostentCacheSize = 0
	  (mandatory, disables the DNS host cache), type REG_DWORD
	
	- HKLM\Software\Microsoft\MSMQ\Parameters\WaitTime = 30000 (30 seconds), type
	  REG_DWORD, in milliseconds
	
	Additional query words: waittime
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
