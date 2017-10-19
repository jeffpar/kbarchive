---
layout: page
title: "Q112144: Installing Synoptics EZ View Net Manager on WFW 3.11"
permalink: /kb/112/Q112144/
---

## Q112144: Installing Synoptics EZ View Net Manager on WFW 3.11

	Article: Q112144
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Synoptics EZ VIEW network management software allows a Windows for Workgroups
	workstation running Chameleon TCP/IP network protocol software to remotely view
	the status of Synoptic concentrators and hubs. Following is the procedure to set
	up Windows for Workgroups to work with Chameleon TCP/IP and EZ VIEW. This
	configuration works for Windows for Workgroups version 3.11 and future
	upgrades.
	
	NOTE: This configuration is NOT supported by Microsoft or Synoptics.
	
	MORE INFORMATION
	================
	
	The following procedures assume that Windows for Workgroups is located in the
	C:\WINDOWS directory.
	
	1. Install WFW 3.11 with the custom option:
	
	  a. Select the proper NIC and NDIS driver.
	
	  b. Do not select TCP/IP as a protocol.
	
	2. In CONFIG.SYS, remove all drivers related to NETMANAGE, such as PROTMAN.DOS
	  and NETMANAG.DOS. The following device driver is needed:
	
	  DEVICE=C:\WINDOWS\IFSHLP.SYS
	
	3. In AUTOEXEC.BAT, make sure that NETBIND is not executed. All binding should
	  be performed by the NET START command.
	
	4. In PROTOCOL.INI, add the following NETMANAGE section and bind it to the NDIS
	  driver section as shown below:
	
	        [NETMANAGE]
	        DRIVERNAME = NETMNGS
	        BINDINGS =  <NDIS driver section name>
	
	5. In SYSTEM.INI, add NETMANAG.DOS to the transport settings in the [NETWORK
	  DRIVERS] section as shown below:
	
	        [NETWORK DRIVERS]
	        .
	        .
	        transport = ndishlp.sys,c:\netmanag\netmanag.dos,*netbeui
	        .
	        .
	
	6. Also in SYSTEM.INI, change the LoadRMDrivers line to YES as shown below:
	
	        Example:
	        LoadRMDrivers = Yes
	
	NOTE: This configuration installs Chameleon's TCP/IP as a single network protocol
	for Windows for Workgroups.
	
	Additional query words: adapter 3.11 tcp wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : 3.11
	
	=============================================================================
	
