---
layout: page
title: "Q103942: SNA Server Identifies Netflex Adapter as Ethernet"
permalink: /kb/103/Q103942/
---

## Q103942: SNA Server Identifies Netflex Adapter as Ethernet

{% raw %}

	Article: Q103942
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install and configure an SNA Server 802.2 DLC link service and connect
	a COMPAQ Netflex adapter, the SNA Server Admin program shows the 802.2
	connection as Ethernet, even though the Netflex adapter is Token Ring. This is a
	cosmetic problem only because the Netflex adapter automatically detects the
	media type and any network software (including SNA Server) will continue to work
	correctly.
	
	CAUSE
	=====
	
	After installation, the Netflx02 registry entry for MediaType is always set to 1
	(Ethernet). This value is then used by SNA Server setup (and passed to the SNA
	Admin program) to indicate the media type of the 802.2 link.
	
	RESOLUTION
	==========
	
	There are two workarounds to this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	- Before you run SNA Server Setup to install an 802.2 DLC link service, run
	  REGEDT32 and modify the following registry setting:
	  1. Go to HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/
	     Netflx02/Parameters/MediaType.
	
	  2. Change MediaType from 1 (Ethernet) to 0 (Token Ring).
	
	  SNA Server Setup will properly detect the Netflex adapter as a Token Ring.
	
	  -or-
	
	- If the SNA Server configuration file already includes an Ethernet connection
	  that should be Token Ring:
	  1. Using SNA Admin, delete any erroneous Ethernet 802.2 connections from the
	     configuration file.
	
	  2. Using REGEDT32, modify the following registry setting:
	     a. Go to HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/
	        &lt;SNADLC1&gt;/Parameters/ExtraParameters/MACType.
	
	     b. Change MACType from 1 (Ethernet) to 0 (Token Ring) (where
	        &lt;SNADLC1&gt; is the name of the 802.2 link service specified
	        during SNA Server setup, which is using AdapterName of
	        \Device\NETFLX02).
	
	     c. Rerun SNA Admin, remove the old Ethernet connection and re-add a new
	        802.2 connection, which will now appear as Token Ring.
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ210
	Version           : WINDOWS:2.0,2.1
	
	=============================================================================
	

{% endraw %}
