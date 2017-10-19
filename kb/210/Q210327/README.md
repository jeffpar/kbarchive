---
layout: page
title: "Q210327: Manually Populating Network Neighborhood with Static Entries"
permalink: /kb/210/Q210327/
---

## Q210327: Manually Populating Network Neighborhood with Static Entries

	Article: Q210327
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Browse lists often do not consistently contain all computers in a Windows NT
	network. This is caused by a variety of factors that range from individual
	computer configurations to inadequate name resolution.
	
	This article describes the browsing functions within Network Neighborhood. You
	may have computers running Windows NT Server or Windows NT Workstation that
	require constant enumeration in Network Neighborhood. It is possible to obtain
	this functionality statically.
	
	NOTE: The remainder of this article assumes that basic network connectivity is
	already established throughout the network, especially for the target computers.
	
	MORE INFORMATION
	================
	
	Use the following steps to ensure that computers are consistently listed and
	available in Network Neighborhood. This operation requires that the target
	computers are running and connected to the network. Because this method of
	creating a static Network Neighborhood involves creating .lnk files on your hard
	disk, you can populate other computers in the network by simply copying these
	files as shortcuts. The .lnk files need to be stored in the
	%SystemRoot%\Profiles\%Username%\NetHood folder.
	
	NOTE: The NetHood folder is located in the %SystemRoot% folder in Windows 95 and
	Windows 98. This folder is hidden by default in Windows NT.
	
	Performing these steps does not affect the ability of a workstation to work with
	or connect to other workstations or servers in the network, and it does not
	affect administration of the computers in question.
	
	1. Configure network connectivity. At a minimum, the computer you use to create
	  the static Network Neighborhood entry must be able to use NetBIOS name
	  resolution with the target computer. This involves the installation and
	  configuration of protocols such as NetBEUI, IPX/SPX, and TCP/IP on the
	  computer involved in nonrouted environments. Proper name resolution is needed
	  in routed environments. This scenario includes Windows Internet Name Service
	  (WINS), Domain Name System, and the Lmhosts files.
	
	2. Click Start, point to Find, and then click Computer.
	
	3. In the Named box, type "ComputerName" (without the quotation marks) (where
	  ComputerName refers to the name of the computer you are statically adding to
	  Network Neighborhood), and then click Find Now.
	
	4. After the computer is found, drag the computer icon into Network
	  Neighborhood. Click Yes, when you are prompted to create a shortcut.
	
	5. After you put the icon into Network Neighborhood, you can rename it. To
	  populate many computers on the LAN/WAN, the .lnk files created during this
	  process can be copied to the NetHood folder of any user profile. After you
	  log off and then log back on, the static entries in Network Neighborhood are
	  permanently listed.
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q152562 How to Use Windows 95 to Connect Computers on a Network
	
	  Q102908 How to Troubleshoot TCP/IP Connectivity with Windows NT
	
	  Q128233 Comparison of Windows NT Network Protocols
	
	  Q185786 Recommended Practices for WINS
	
	  Q150800 Domain Browsing with TCP/IP and LMHOSTS Files
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
