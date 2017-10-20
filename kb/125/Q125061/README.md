---
layout: page
title: "Q125061: HP J2577A EISA LAN Adapter Does Not Install on HP NetServer LF"
permalink: /kb/125/Q125061/
---

## Q125061: HP J2577A EISA LAN Adapter Does Not Install on HP NetServer LF

{% raw %}

	Article: Q125061
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Hewlett-Packard (HP) J2577A EISA LAN adapter using the
	driver supplied with Windows NT version 3.5 on an HP NetServer 5/66 LF or
	LanServer 5/66 LC computer, Setup does not detect the network adapter. The
	following error message appears:
	
	  The dependency or group failed to start. This error prevented the network
	  from starting. As a result you will be unable to join a domain at the present
	  time.
	
	The following is written to the system log:
	
	  Event ID: 5003
	  Source: Service Control Manager
	  Type: Error
	  Description: HPFend.sys: Could not find an adapter card.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. During Windows NT Setup, either select the MS Loopback Adapter, or do not
	  install network services.
	
	2. After Windows NT is installed, run Control Panel and choose the Network icon.
	
	3. Choose Add Adapter.
	
	4. In the Network Adapter Card box select "<Other> Requires disk from
	  manufacturer."
	
	5. Specify the following location on the Windows NT Server or Workstation
	  version 3.5 CD and then choose OK:
	
	  DRVLIB\NETCARD\x86\HPVGE
	
	Additional query words: prodnt compact disc event viewer
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
