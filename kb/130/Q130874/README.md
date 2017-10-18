---
layout: page
title: "Q130874: Troubleshooting LAN Manager for MS-DOS 2.2c and DHCP"
permalink: kb/130/Q130874/
---

## Q130874: Troubleshooting LAN Manager for MS-DOS 2.2c and DHCP

	Article: Q130874
	Product(s): Microsoft Windows NT
	Version(s): 2.2c
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LAN Manager, version 2.2c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides basic troubleshooting tips for configuring the Dynamic
	Host Configuration Protocol (DHCP) with Microsoft LAN Manager for MS-DOS.
	
	MORE INFORMATION
	================
	
	Troubleshooting Tips and Techniques
	-----------------------------------
	
	1. Clean boot your computer by removing terminate-and-stay-resident (TSR)
	  programs, and third party utilities from your CONFIG.SYS and AUTOEXEC.BAT
	  configuration files. Remove or minimize the use of memory managers. Add back
	  functionality until you discover the utility or combination of utilities that
	  is creating undesirable effects.
	
	2. Verify that the client PROTCOL.INI and LANMAN.INI files reflect your
	  configuration. For more information:
	
	   - See the Microsoft LAN Manager Installation and Configuration Guide,
	     Chapter 10.
	
	   - See the Microsoft LAN Manager Administrator's Reference Guide, Appendix B.
	
	   - Type NET HELP at the MS-DOS command prompt.
	
	   - Check the on-line help available in SETUP.EXE. Use the F1 key to get
	     clarification on a specific option.
	
	   - Query in the Microsoft Knowledge Base for the name of your specific
	     network interface card (NIC).
	
	3. Force Microsoft LAN Manager for MS-DOS to recreate the hidden DHCP
	  configuration file (DHCP.PRM):
	
	  a. Use the ATTRIB command to remove the hidden and read-only file attributes.
	
	  b. Delete the file.
	
	  c. Quit and restart Microsoft LAN Manager for MS-DOS to allow the file to be
	     recreated.
	
	  The client automatically creates the DHCP.PRM (a hidden binary file) in the
	  installation directory.
	
	4. Verify the IP is functioning correctly by using PING, NET VIEW, NET CONFIG,
	  and NET DIAG on the client.
	
	  For more information see:
	
	   - The online help available for each command by typing "/?" (without the
	     quotation marks). For example:
	
	  NET VIEW /?
	
	     For PING help, type the command without any parameters.
	
	   - The README.TXT file in the Microsoft LAN Manager for MS-DOS directory.
	     Check the table of contents for sections that pertain to your specific
	     installation.
	
	Troubleshooting Utilities
	-------------------------
	
	You can run IPCONFIG on the client computer to check the client's IP
	configuration. For more information see:
	
	- Section 21: IPCONFIG.EXE and Controlling DHCP Leases, of the README.TXT file
	  in the Microsoft LAN Manager for MS-DOS directory.
	
	- The following Knowledge Base Articles:
	
	   - Q94069 : Microsoft TCP/IP Protocol Comparison and FAQ
	
	   - Q96681 : Troubleshooting TCP/IP Utilities for LAN Manager
	
	   - Q122363 : LAN Manager Version 2.2c Client DHCP Setup Changes May Fail
	
	   - Q123285 : IPCONFIG Displays Invalid Results
	
	   - Q123671 : Not Able to Use DNS IP Address Assigned by DHCP
	
	   - Q130538 : DHCP-Enabled MS-DOS Clients Do Not Resolve Host Names
	
	You can run DHCPADMN on the Windows NT Server to check the DHCP Server
	Configuration. Use the Scope Active Leases option to verify that leasing is
	occurring. For more information see:
	
	- The Microsoft Windows NT Server TCP/IP manual, Chapter 4, Installing and
	  Configuring DHCP Servers.
	
	- Knowledge Base article Q169289 titled "DHCP (Dynamic Host Configuration
	  Protocol) Basics."
	
	Troubleshooting Resources
	-------------------------
	
	- Check the Microsoft Windows NT Server Comprehensive Index for information on
	  Clients.
	
	- Review the README.TXT file in the Microsoft LAN Manager for MS-DOS
	  installation directory.
	
	- If Windows is installed, review the LM22_W3x.HLP help files (where x is 1 or
	  2). This file is located in the LAN Manager Client installation directory in
	  the \NETPROG subdirectory.
	
	- Additional information may be available in the Microsoft Knowledge Base.
	  Query on the following words:
	
	  DHCP and CLIENT and PRODTCP32 and 2.2C
	
	Additional query words: prodlm 2.20c 2.2c
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbLanManSearch kbLanMan220c
	Version           : :2.2c
	
	=============================================================================
	
