---
layout: page
title: "Q200910: How to Install Network Monitor in Windows 95/98"
permalink: /kb/200/Q200910/
---

## Q200910: How to Install Network Monitor in Windows 95/98

	Article: Q200910
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool win95 win98
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install the Microsoft Network Monitor tool
	(NetMon) on a computer that is running Windows 95 or Windows 98.
	
	Network Monitor is available on the following Microsoft BackOffice CD-ROMs:
	
	- BackOffice version 2.5 on CD-ROM 4, in the SMS12\NMext\Disk1 folder.
	
	- BackOffice version 4.0 on CD-ROM 5, in the SMS\NMext\Disk1 folder.
	
	- BackOffice version 4.0 on CD-ROM 6, in the SMS20\NMEXT\I386 folder
	
	NOTE:These locations will correspond to where they are found on the respective
	versions of SMS.
	
	MORE INFORMATION
	================
	
	To install Network Monitor, run the Setup program from one of the following
	locations:
	
	- From the Disk1 folder where Netmon.zip was expanded.
	
	- From disk 1 of the three Network Monitor Setup disks.
	
	- From the Disk1 folder in the locations mentioned above on the Back Office
	  CD-ROM.
	
	After the Setup program finishes, you are prompted to install the supporting
	Network Monitor drivers. To do this:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network. (This step is necessary only if the Network Properties dialog box is
	  not displayed at the end of Network Monitor Setup).
	
	2. Click Add, double-click Protocol, and then click Have Disk.
	
	3. Click Browse.
	
	4. Browse to the following folder (depending on your operating system version):
	
	   - Windows 98 CD-ROM: CD-ROM drive:\Tools\ResKit\NetAdmin\NetMon
	
	   - Windows 95 CD-ROM: CD-ROM drive:\Admin\NetTools\NetMon
	
	5. Click OK, and then restart the computer when you are prompted.
	
	To ensure proper parsing of Point-to-Point Tunneling Protocol (PPTP) packets:
	
	1. Using a standard text editor (such as Notepad), edit the Tcpip.ini file
	  located in the Parsers folder in which Network Monitor is installed. The
	  default location is C:\Nm\Parsers.
	
	2. Locate the [TCP_HandoffSet] section.
	
	3. Locate the line containing the text "5678 = PPTP" (without the quotation
	  marks). Change this to "1723 = PPTP" (without the quotation marks).
	
	4. Save the file, and then quit Notepad.
	
	For additional information about Network Monitor, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q148942 How to Capture Network Traffic with Network Monitor
	
	  Q124837 Connecting to a Remote Network Monitor Agent Across a Router
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool win95 win98 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
