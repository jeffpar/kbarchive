---
layout: page
title: "Q135325: PPT7: Presentation Conference Troubleshooting Guide"
permalink: kb/135/Q135325/
---

## Q135325: PPT7: Presentation Conference Troubleshooting Guide

	Article: Q135325
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot kbdta kbconf
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a series of questions to help you troubleshoot problems
	using the Presentation Conference feature in PowerPoint.
	
	MORE INFORMATION
	================
	
	1. How many computers--including the audience members and the presenter--are
	  connected to the presentation conference?
	
	2. How many of the audience computers can connect to the presentation conference
	  and how many cannot connect?
	
	3. Can both the presenter and audience members run the Presentation Conference
	  Wizard successfully?
	
	  If either cannot run the Presentation Conference Wizard, the program files may
	  be invalid or damaged.
	
	4. Can those who cannot run the Presentation Conference Wizard, connect to each
	  other's computer? Can each of them transfer files from one computer to the
	  other?
	
	  If you cannot connect to and transfer files between the computers, you may
	  have a network configuration problem. To correct the problem, contact your
	  network system administrator.
	
	  If you can connect to and transfer files between the computers, you have
	  effectively done what presentation conferencing does:
	  a. Connect to another computer.
	
	  b. Transfer a file from one computer to another.
	
	5. Do all participants have a valid SET TEMP statement and a valid TEMP
	  directory? To determine this:
	  a. Open the Autoexec.bat file in a text editor, such as Notepad.
	
	  b. Do you see a statement similar to the following?
	
	  Set Temp=C:\Temp
	
	     If you do not see a line similar to the above, type the statement on a new
	     line.
	
	  c. Save and close the file.
	
	  d. Repeat steps a through c for each participant.
	
	  e. Create the TEMP directory if it does not exist.
	
	  f. Try connecting to the presentation conference again.
	
	6. Is the TCP/IP protocol installed?
	
	  Presentation conference requires that the TCP/IP protocol be installed. The
	  Presentation Conference command on the Tools menu is unavailable (dimmed) if
	  TCP/IP is not installed as a network protocol. You can use the following
	  steps to determine if TCP/IP is installed:
	  a. Right-click the Network Neighborhood icon, and then click Properties.
	
	  b. Click the Configuration tab.
	
	  c. Verify that TCP/IP is listed in the list of installed network components.
	
	     If TCP/IP is not listed, contact your network systems administrator or
	     refer to the network operating system printed documentation.
	
	     If TCP/IP is listed, remove and then reinstall the TCP/IP protocol. For
	     more information, contact your network systems administrator or refer to
	     the network operating system printed documentation.
	
	     For additional information about adding network protocols, click the Index
	     tab in Windows Help, type the following text:
	
	  "protocols" (without the quotation marks)
	
	     and then double-click the selected text. Select a topic from the list.
	
	
	Additional query words: 7.00 ppt95 ppt7 grayed out greyed
	
	======================================================================
	Keywords          : kbnetwork kbtshoot kbdta kbconf 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
