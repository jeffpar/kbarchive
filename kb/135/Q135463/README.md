---
layout: page
title: "Q135463: IPINFO.INF Values Ignored During Setup"
permalink: /kb/135/Q135463/
---

## Q135463: IPINFO.INF Values Ignored During Setup

	Article: Q135463
	Product(s): Microsoft Windows NT
	Version(s): 3.50
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
	
	You configure IPINFO.INF with TCP/IP address and subnet mask values, but Setup
	ignores them and you have to enter them manually in the TCP/IP configuration
	dialog box after TCP/IP is installed.
	
	This problem occurs when you install TCP/IP using the unattended setup feature of
	Windows NT Setup or Computer Profile Setup (CPS) and you set the [DefaultIPInfo]
	section of IPINFO.INF to include values for DefaultGateway, Number of IP
	Addresses, IP Address, and Subnet Mask.
	
	NOTE: The IPINFO.INF file allows network administrators to provide smart defaults
	for TCP/IP configuration parameters. By modifying this template file, an
	administrator can distribute the Windows NT TCP/IP software over the network or
	on floppy disks to users with some smart default configuration parameters. Users
	may modify these values when installing TCP/IP, however, the default values are
	automatically filled in for them.
	
	CAUSE
	=====
	
	The OEMNXPTC.INF does not read the IPINFO.INF file correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT version 3.51.
	
	To work around this problem:
	
	
	- If you are attempting to automate TCP/IP installation during Windows NT 3.5
	  Setup, copy the OEMNXPTC.INF file from Windows NT 3.51 to your Windows NT 3.5
	  I386 directory. If you do not have Windows NT 3.51, contact Microsoft Product
	  Support Services to obtain OEMNXPTC.INF.
	
	- If you are attempting to install TCP/IP after Windows NT 3.5 is installed,
	  copy the OEMNXPTC.INF file from Windows NT 3.51 to the %SystemRoot%\SYSTEM32
	  directory of the Windows NT 3.5 installation.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q133337
	  TITLE : Automating Setup to Set Up TCP/IP for Static Addressing Fails
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
