---
layout: page
title: "Q132736: Windows 95 Networking Questions and Answers"
permalink: /kb/132/Q132736/
---

## Q132736: Windows 95 Networking Questions and Answers

{% raw %}

	Article: Q132736
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbfile kbnetwork win95 kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	1. Q. What can I do to fix the sporadic network problems I am experiencing?
	
	  A. There may be a problem between the network adapter and the protected-mode
	  driver. Use the following four steps to test the real-mode driver:
	
	  1. Click the Start button, point to Settings, and then click Control Panel.
	
	  2. Double-click the Network icon.
	
	  3. On the Configuration tab, click the network adapter, and then click
	     Properties.
	
	  4. On the Driver Type tab, click the "Real mode (16-bit) NDIS driver" option.
	
	  If you continue to have problems, use Device Manager to change the IRQ, I/O
	  address, and RAM address settings for the network adapter.
	
	2. Q. Why can't I see another Windows 95-based computer on the network?
	
	  A. In order to connect to another Windows 95-based computer, that computer
	  must have the "File and printer sharing for Microsoft Networks" network
	  component installed.
	
	3. Q. How do I connect to an IBM(R) LAN Server computer?
	
	  A. To connect to an IBM LAN Server computer, you must have the Microsoft
	  Client For Microsoft Networks network component installed.
	
	4. Q. Each time I log in I am asked for a password. Is there a way to prevent
	  this?
	
	  A. If you do not want to be prompted for a password, set your primary network
	  logon to Windows Logon. To do so, use the following six steps:
	
	  1. Use the right mouse button to click Network Neighborhood, and then click
	     Properties on the menu that appears.
	
	  2. On the Configuration tab, click Windows Logon in the Primary Network Logon
	     box, then click OK.
	
	  3. When Windows prompts you to restart your computer, click No.
	
	  4. Click the Start button, point to Settings, and then click Control Panel.
	
	  5. Double-click the Passwords icon.
	
	  6. On the Change Passwords tab, click the Change Windows Password button,
	     click OK, then set a blank password.
	
	5. Q. Why can't I see a Windows for Workgroups 3.11-based computer on the
	  network when I use the IPX/SPX network protocol as my only network protocol?
	
	  A. The Windows for Workgroups-based computer uses a frame type of 802.3. You
	  must change the frame type of the IPX/SPX network protocol on your computer
	  to match. To do so, use the following three steps:
	
	  1. Use the right mouse button to click Network Neighborhood, and then click
	     Properties on the menu that appears.
	
	  2. On the Configuration tab, click the IPX/SPX-compatible network protocol,
	     and then click Properties.
	
	  3. On the Advanced tab, click Frame Type in the Property box, and then click
	     the appropriate frame type in the Value box.
	
	6. Q. The TCP/IP network protocol doesn't work with Novell(R) ODI drivers. What
	  can I do?
	
	  A. Make sure that the Ethernet_II frame type is listed in the Net.cfg file.
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q129726 TCP/IP Requires Ethernet_II Frame Type for ODI Driver
	
	7. Q. Is WinPopUp installed in Windows 95?
	
	  A. Yes, if you install either the Microsoft Client for Microsoft Networks or
	  the Microsoft Client for NetWare(R) Networks component, WinPopUp
	  (Winpopup.exe) is installed in the Windows folder.
	
	8. Q. How do I run NetDDE programs (such as Microsoft Chat) in Windows 95?
	
	  A. To run NetDDE programs in Windows 95, you must add a shortcut for
	  Netdde.exe to the Startup group. To do so, use the following four steps:
	
	  1. Use the right mouse button to click an empty space on the taskbar, and
	     then click Properties on the menu that appears.
	
	  2. On the Start Menu Programs tab, click Add.
	
	  3. Use the Create Shortcut Wizard to create a shortcut for Netdde.exe in the
	     Windows folder.
	
	  4. After you create the shortcut, restart your computer.
	
	You can download this document as a self-extracting compressed file named
	Ww1194.exe.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Ww1194.exe now
	
	For additional information about how to download Microsoft Support
	files, click the article number below 
	to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available 
	on the date of posting to scan this file for viruses. Once posted, 
	the file is housed on secure servers that prevent any unauthorized 
	changes to the file.
	
	Additional query words: 95 network logon password
	
	======================================================================
	Keywords          : kbfile kbnetwork win95 kbgraphxlinkcritical 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
