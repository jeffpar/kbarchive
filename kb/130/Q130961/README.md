---
layout: page
title: "Q130961: TCP/IP Upgrade from Windows NT 3.1 Requires User Interaction"
permalink: /kb/130/Q130961/
---

## Q130961: TCP/IP Upgrade from Windows NT 3.1 Requires User Interaction

	Article: Q130961
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	UNATTEND.TXT, included in the Resource Kit for Windows NT 3.5, implies that you
	can automatically upgrade a Windows NT 3.1 system to Windows NT 3.5 and have the
	system configured with dynamic host configuration protocol (DHCP). You can
	select to install TCP/IP with DHCP using Setup Manager, but during the setup
	process, if you choose to "Upgrade existing Windows NT installation," the
	following warning message appears:
	
	  You have chosen to upgrade an existing Windows NT system. Setup will use the
	  current system information and ignore parameters specified in the unattended
	  answer file.
	
	This does not correlate with the information in the following sections excerpted
	from the default UNATTEND.TXT file:
	
	  ; For unattended UPGRADES of Windows NT 3.1 and Windows NT Advanced
	  ; Server 3.1, you may not need to specify an unattended answer file. You
	  ; should specify an answer file if upgrading TCP/IP. For unattended
	  ; upgrades, do:
	  ;
	  ;    winnt32 /u
	  ;
	  ; For unattended installation using winnt.exe or winnt32.exe do:
	  ;
	  ;    winnt[32] /u:<script_file> /s:<source>
	     .
	     .
	     .
	  ;[GuiUnattended]
	  ;
	  ; You need to define the !UpgradeEnableDhcp if you upgrade from Windows
	    NT 3.1 to Windows NT Workstation v3.5. Specify for upgrades ONLY!
	  ;
	  ; !UpgradeEnableDhcp = YES | NO
	
	The section above implies that the switch, !UpgradeEnableDhcp, will be set to YES
	in the script file for an unattended installation, thereby automatically
	enabling DHCP during the upgrade.
	
	RESOLUTION
	==========
	
	Setup Manager does set !UpgradeEnableDhcp equal to YES. However, if you didn't
	have TCP/IP installed under Windows NT 3.1, you will not have TCP/IP installed
	after you upgrade to Windows NT 3.5. If you did have TCP/IP installed, you are
	prompted during the upgrade process to configure TCP/IP with a static IP address
	or with DHCP.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The help file for Windows NT Setup Manager includes the same incorrect
	information as the UNATTEND.TXT file. Under the heading "Upgrading Windows NT
	using an Unattended Answer File" it states that existing configuration
	information for an upgrade will take precedence over settings in the unattended
	answer file. The help file also states that this precedence applies for network
	configuration information. However, the help file then states:
	
	  The one exception to this case is the Enable DHCP entry which is used only
	  during upgrades.
	
	Additional query words: 3.50 prodnt reskit unattend.txt setupmgr dhcp upgrade tcpip
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : :3.5
	
	=============================================================================
	
