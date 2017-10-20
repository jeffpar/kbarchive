---
layout: page
title: "Q151418: WinNT TCP/IP May Reuse TIME-WAIT Connections Prior to 2MSL"
permalink: /kb/151/Q151418/
---

## Q151418: WinNT TCP/IP May Reuse TIME-WAIT Connections Prior to 2MSL

{% raw %}

	Article: Q151418
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under sufficiently high TCP connection rates the Windows NT TCP/IP stack may
	reuse TCP Control Blocks that are in the TIME-WAIT (also called the 2MSL state)
	table. This can happen on a heavily loaded Web or FTP server when using graceful
	TCP closes. Reuse of the Control Blocks may terminate a TCP connection in its
	TIME-WAIT state prior to the 2MSL time period expiring.
	
	There have been no reports of problems related to this symptom; however the
	behavior is not RFC-compliant.
	
	CAUSE
	=====
	
	In Windows NT the system starts to reuse TCP Control Blocks in TIME-WAIT when
	the number of active connections goes over 1000. Windows NT 4.0 Service Pack 3
	increased this threshold to 2000.
	
	For more information on configuring the TIME-WAIT period for Windows NT, please
	see the following article(s) in the Microsoft Knowledge Base:
	
	Q149532Windows NT Clients Run Out of Ports
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	This hotfix allows sites with heavy TCP connection rates to configure the
	threshold of active TCP connections necessary before TCP control blocks are
	reused.
	
	There are two registry keys that control the use of the TIME-WAIT table:
	
	- MaxFreeTcbs is the threshold number of active TCP connections required before
	  TCP Control Blocks in the TIME-WAIT state are reused. Changing MaxFreeTcbs
	  allows the system to avoid reusing TCP Control Blocks.
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip
	        \Parameters\MaxFreeTcbs
	
	     Value Type: REG_DWORD
	     Valid Range: 0-0xFFFFFFFF
	     Default: 1000 (Windows NT 4.0), 2000 (Windows NT 4.0 Service Pack 3)
	     Description: Controls the number of active TCP connections required
	                  before TCP control blocks in the TIME-WAIT state are
	                  reused.
	
	- MaxHashTableSize controls the size of an internal system data structure that
	  controls how fast the system can find a TCP Control Block. The hash table
	  allows the system to access TCP Control Blocks faster and this table should
	  grow if MaxFreeTcbs is configured higher than the default value.
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip
	        \Parameters\MaxHashTableSize
	
	     Value Type: REG_DWORD
	     Valid Range: 64-65536 (0x40-0x10000)
	     Default: 512
	     Description: This value should be set to a power of 2 (e.g. 512,
	                  1024, 2048, and so on.) If this value is not a power of
	                  2, the system will configure the hash table to the next
	                  power of 2 value (for example, a setting of 513 is
	                  "rounded up" to 1024.) This value controls how fast the
	                  system can find a TCP control block and should be
	                  increased if MaxFreeTcbs is increased from the default.
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
