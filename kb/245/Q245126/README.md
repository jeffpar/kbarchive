---
layout: page
title: "Q245126: How to Export the Contents of a DHCP Database to a Text File"
permalink: /kb/245/Q245126/
---

## Q245126: How to Export the Contents of a DHCP Database to a Text File

	Article: Q245126
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:97; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to export the contents of a Dynamic Host Configuration
	Protocol (DHCP) database to a text file.
	
	MORE INFORMATION
	================
	
	To export the contents of a DHCP database to a text file, you can use the
	Dhcpcmd.exe utility that is included with Microsoft Windows NT Server 4.0
	Resource Kit Supplement 3.
	
	To use this utility, using an account that has administrative privileges on the
	DHCP server, type the following command at a command prompt, and then press
	ENTER:
	
	  dhcpcmd IPAddress enumclients ScopeNetAddress -option > textfile.txt
	
	where:
	
	- IPAddress is the Internet Protocol (IP) address of the DHCP server.
	- ScopeNetAddress is the network address of the DHCP scope.
	- option is either v or h. The v option lists detailed lease information; the h
	  option lists lease information with hardware information.
	- textfile.txt is the name of the destination text file.
	
	For example, to export the contents to a text file named 'export.txt', type:
	
	  dhcpcmd 127.0.0.1 enumclients 11.101.0.0 -h >export.txt
	
	You can then import the text file in Microsoft Excel, Microsoft Word, or
	Microsoft Access for ease of use.
	
	Additional query words: superscope
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINDOWS:97; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
