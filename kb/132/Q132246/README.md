---
layout: page
title: "Q132246: Troubleshooting Windows For Workgroups and DHCP"
permalink: /kb/132/Q132246/
---

## Q132246: Troubleshooting Windows For Workgroups and DHCP

	Article: Q132246
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides basic troubleshooting tips for configuring the Dynamic
	Host Configuration Protocol (DHCP) with Microsoft Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	Troubleshooting Tips and Techniques
	-----------------------------------
	
	1. Clean boot your computer by removing terminate-and-stay-resident (TSR)
	  programs, and third party utilities from your CONFIG.SYS and AUTOEXEC.BAT
	  configuration files. Remove or minimize the use of memory managers. Add back
	  functionality until you discover the utility or combination of utilities that
	  is creating undesirable effects.
	
	  See the SETUP.TXT file included with Windows for Workgroups.
	
	2. Verify that the clients PROTOCOL.INI and SYSTEM.INI files reflect your
	  configuration. For more information:
	
	   - See section 9: Using Windows for Workgroups 3.11 with TCP/IP of the
	     NETWORKS.WRI file in the Windows for Workgroups directory.
	
	   - See the DHCP Automatic Configuration section in the README.TXT file
	     included with Microsoft TCP/IP-32 for Windows for Workgroups.
	
	   - See the Microsoft TCP/IP-32 Help file (MTCPIP32.HLP) included with
	     Microsoft TCP/IP-32 for Windows for Workgroups. See the "Dynamic Host
	     Configuration Protocol (DHCP)" section under Overview of Microsoft TCP/IP
	     and the section titled "Configuration Settings in SYSTEM.INI and
	     PROTOCOL.INI" under More Information On.
	
	   - Check the Network Adapter Card Setup Help file (WFWCARD.HLP) included with
	     the Windows for Workgroups Resource Kit. You can also query in the
	     Microsoft Knowledge Base on the name of your network interface card (NIC).
	
	3. Force the Windows for Workgroups client to recreate the hidden DHCP
	  configuration file (DHCP.BIN):
	
	  a. Use the ATTRIB command to remove the hidden and read-only file attributes.
	
	  b. Delete the file.
	
	  c. Quit and restart Windows for Workgroups to allow the file to be recreated.
	
	  The client automatically creates the DHCP.BIN (a hidden binary file) in the
	  installation directory.
	
	4. Verify the IP is functioning correctly by using ARP, PING, NBTSTAT, NETSTAT,
	  TRACERT, and NET VIEW on the client computer.
	
	   - The on-line help available for each command by typing "/?" (without the
	     quotation marks). For example:
	
	  " NET VIEW /? " (without the quotation marks)
	
	     For PING and TRACERT help, type the command without any parameters.
	
	   - The Microsoft TCP/IP-32 Help file (MTCPIP32.HLP) included with Microsoft
	     TCP/IP-32 for Windows for Workgroups includes specific instructions on
	     using these tools. The help file also contains general troubleshooting
	     tips in the "Troubleshooting with TCP/IP Diagnostics Utilities" topic in
	     the Utilities and Services Reference section.
	
	Troubleshooting Utilities
	-------------------------
	
	You can run IPCONFIG on the client computer to check the client's IP
	configuration. For more information:
	
	- Review the Microsoft TCP/IP-32 Help file (MTCPIP32.HLP) included with
	  Microsoft TCP/IP-32 for Windows for Workgroups. The help file includes
	  specific instructions on using IPCONFIG in the "Troubleshooting with TCP/IP
	  Diagnostics Utilities" topic in the Utilities and Services Reference section.
	
	- Query on the following words in the Microsoft Knowledge Base:
	
	  " DHCP and WFW " (without the quotation marks)
	
	You can run DHCPADMN on the Windows NT Server to check the DHCP Server
	Configuration. Use the Scope Active Leases option to verify that leasing is
	occurring. For more information see:
	
	- The Microsoft Windows NT Server TCP/IP manual, Chapter 4, Installing and
	  Configuring DHCP Servers.
	
	- Knowledge Base article
	
	  Q169289 titled "DHCP (Dynamic Host Configuration Protocol) Basics."
	
	Troubleshooting Resources
	-------------------------
	
	- Check the Microsoft Windows NT Server Comprehensive Index for information on
	  Clients.
	
	- Review the Microsoft Windows for Workgroups NETWORKS.WRI and SETUP.TXT files.
	
	- Review Microsoft TCP/IP-32 Help (MTCPIP32.HLP), included with Microsoft
	  TCP/IP-32 for Windows for Workgroups.
	
	- Review the Microsoft Windows for Workgroups README.TXT file.
	
	- Review the Network Adapter Card Help (WFWCARD.HLP), included with the
	  Microsoft Windows for Workgroups Resource Kit.
	
	- Additional information may be available in the Microsoft Knowledge Base.
	  Query on the following words:
	
	  " DHCP and WFW and CLIENT and 3.11" (without the quotation marks)
	
	Additional query words: 3.11 wfw wfwg
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
