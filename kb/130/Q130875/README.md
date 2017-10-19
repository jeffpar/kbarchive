---
layout: page
title: "Q130875: Troubleshooting MS Network Client 3.0 and DHCP"
permalink: /kb/130/Q130875/
---

## Q130875: Troubleshooting MS Network Client 3.0 and DHCP

	Article: Q130875
	Product(s): Microsoft Windows NT
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides basic troubleshooting tips for configuring the Dynamic
	Host Configuration Protocol (DHCP) with Microsoft Network Client for MS-DOS.
	
	MORE INFORMATION
	================
	
	Troubleshooting Tips and Techniques
	-----------------------------------
	
	1. Clean boot your computer by removing terminate-and-stay-resident (TSR)
	  programs, and third party utilities from your CONFIG.SYS and AUTOEXEC.BAT
	  configuration files. Remove or minimize the use of memory managers. Add back
	  functionality until you discover the utility or combination of utilities that
	  is creating undesirable effects.
	
	2. Verify that the clients PROTCOL.INI and SYSTEM.INI files reflect your
	  configuration. For more information:
	
	   - See section 16: Network Settings in SYSTEM.INI of the README.TXT file in
	     the Microsoft Network Client directory.
	
	   - Check the online help available in SETUP.EXE. Use the F1 key to get
	     clarification on a specific option.
	
	   - Query in the Microsoft Knowledge Base for the name of your specific
	     network interface card (NIC).
	
	3. Force Microsoft Network Client to recreate the hidden DHCP configuration file
	  (DHCP.PRM):
	
	  a. Use the ATTRIB command to remove the hidden and read-only file attributes.
	
	  b. Delete the file.
	
	  c. Quit and restart Microsoft Network Client to allow the file to be
	     recreated.
	
	  The client automatically creates the DHCP.PRM (a hidden binary file) in the
	  installation directory.
	
	4. Verify the IP is functioning correctly by using PING, NET VIEW, NET CONFIG,
	  and NET DIAG on the client.
	
	  For more information see:
	
	   - The on-line help available for each command by typing "/?" (without the
	     quotation marks). For example:
	
	  NET VIEW /?
	
	     For PING help, type the command without any parameters.
	
	   - The README.TXT file in the Microsoft Network Client directory. Check the
	     table of contents for sections that pertain to your specific installation.
	
	Troubleshooting Utilities
	-------------------------
	
	You can run IPCONFIG on the client computer to check the client's IP
	configuration.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q183858 Ipconfig.exe Usage for MS-DOS 3.0 Network Client
	
	  Q94069 Microsoft TCP/IP Protocol Comparison and FAQ
	
	  Q123285 IPCONFIG Displays Invalid Results
	
	  Q130538 DHCP-Enabled MS-DOS Clients Do Not Resolve Host Names
	
	You can run DHCPADMN on the Windows NT Server to check the DHCP Server
	Configuration. Use the Scope Active Leases option to verify that leasing is
	occurring. For more information see:
	
	- The Microsoft Windows NT Server TCP/IP manual, Chapter 4, Installing and
	  Configuring DHCP Servers.
	
	- Q169289 DHCP (Dynamic Host Configuration Protocol) Basics
	
	Troubleshooting Resources
	-------------------------
	
	- Check the Microsoft Windows NT Server Comprehensive Index for information on
	  Clients.
	
	- Review the Readme.txt file in the Microsoft Network Client installation
	  directory.
	
	- Additional information may be available in the Microsoft Knowledge Base.
	  Query on the following words:
	
	  DHCP and CLIENT and PRODTCP32 and 3.0
	
	Additional query words: msclient
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : :3.0
	Issue type        : kbinfo
	
	=============================================================================
	
