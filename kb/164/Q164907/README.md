---
layout: page
title: "Q164907: Backup Host Account Cache Service Hangs on Startup on WinNT BDC"
permalink: /kb/164/Q164907/
---

## Q164907: Backup Host Account Cache Service Hangs on Startup on WinNT BDC

{% raw %}

	Article: Q164907
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the SNA Server Host Account Cache service is installed as a backup on a
	Windows NT Backup Domain Controller server (with a primary host account cache
	installed on a Windows NT Primary Domain Controller server), the Host Account
	Cache service will hang. This may cause the following behavior:
	
	- The SnaBase service will appear as started.
	
	- The SnaRpcService will not start.
	
	- SNA Manager will hang when started.
	
	Forcibly ending the Host Account Cache service will cause the SnaRpcService to
	start correctly.
	
	CAUSE
	=====
	
	The backup Host Account Cache service was attempting to synchronize with the
	primary Host Account Cache service, before notifying service control manager
	that it has started. However, the synchronization between backup and primary was
	failing to complete.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem. The updated
	modules are:
	
	  <Snaroot>\Hssystem\Snaudb.exe
	  <Snaroot>\Hssystem\Snahsmsg.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
