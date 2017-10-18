---
layout: page
title: "Q157596: How to Import a BOOTP Database into DHCP"
permalink: kb/157/Q157596/
---

## Q157596: How to Import a BOOTP Database into DHCP

	Article: Q157596
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Server version 4.0 Service Pack 2 includes new DHCP server
	functionality that provides the ability to respond to BOOTP clients. This
	article explains how to import a text file of BOOTP reservations into the DHCP
	database.
	
	NOTE: Service Pack 2 for Windows NT Server 4.0 is required to respond to BOOTP
	requests. Versions of Windows NT Server earlier than 4.0 Service Pack 2 only
	respond to DHCP client requests. Additionally, the Windows NT Resource kit
	utility Dhcpcmd.exe is required to perform DHCP Manager options from the command
	line (this article provides more information on this).
	
	MORE INFORMATION
	================
	
	NOTE: In Windows NT Server 4.0 Service Pack 2, BOOTP addresses currently must be
	reserved in advance by creating an IP address reservation. Future versions of
	Microsoft DHCP server will be capable of leasing dynamic addresses to BOOTP
	clients.
	
	The Windows 4.0 Resource Kit utility Dhcpcmd.exe provides the ability to view and
	modify the DHCP database from the command line. One of the Dhcpcmd.exe
	command-line options is AddReservedIp. The AddReservedIp parameter adds a
	reserved IP address to an already existing scope.
	
	For more information on Dhcpcmd.exe, see the Dhcpcmd.txt file in the Windows NT
	Resource Kit.
	
	The following is the syntax for the DHCPCMD AddReservedIP switch:
	
	AddReservedIp <scope address> <reserved ip> <hardware string>
	
	The following is an example that reserves IP address 11.101.13.53 in the
	11.101.0.0 scope to a client with a hardware address of 08002B30369B:
	
	dhcpcmd AddReservedIP 11.101.0.0 11.101.13.53 08002B30369B
	
	It is possible to use the DHCPCMD utility to create a batch file. One way to
	create this batch file is to perform the following steps:
	
	1. Import the text file containing the BOOTP client information into a
	  spreadsheet.
	
	2. Add a column with the text "DHCPCMD AddReservedIP" (without the quotation
	  marks) to the left of the columns that contain the additional required
	  parameters, which are:
	
	   - Scope address.
	
	   - IP address of client.
	
	   - Hardware (media access control) address.
	
	     NOTE: The text "DHCPCMD AddReservedIP" must appear in each row for which
	     you have data. Each line should be similar to the example shown above.
	
	3. Save the file in a text format and rename it to a .bat file.
	
	4. Run the .bat file.
	
	5. Use DHCP Manager to verify that the reservations were entered correctly.
	
	Additional query words: prodnt sp sp2 MAC
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
