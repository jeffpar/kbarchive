---
layout: page
title: "Q94592: Novell NetWare Lite Version 1.1 and Windows Compatibility"
permalink: /kb/094/Q94592/
---

## Q94592: Novell NetWare Lite Version 1.1 and Windows Compatibility

{% raw %}

	Article: Q94592
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Microsoft Windows
	with third-party products or configurations that have not been tested and
	are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	Novell NetWare Lite version 1.1 is a peer-to-peer network operating system for 2
	to 25 users. This means that any node on the network has the potential to be
	used both as client and as a server for all other machines attached to the
	network.
	
	NetWare Lite is not a supported network for Microsoft Windows versions 3.0 and
	3.1, and there is no option available for this network when installing Windows.
	
	MORE INFORMATION
	================
	
	This article contains information about using NetWare Lite with Windows. Follow
	the suggestions outlined below to operate your Windows environment. For further
	information on integrating Windows 3.1 and NetWare Lite, contact Novell.
	
	Network vs. Local Installation of Windows
	-----------------------------------------
	
	It is recommended that you install Windows locally. If you want to install to a
	network directory, contact Novell to receive documentation on this process.
	
	Follow the regular installation procedures using Windows disks. Windows Setup may
	indicate the presence of a "Microsoft Network (or 100% compatible)" network.
	Change this selection to "No Network Installed."
	
	Before Entering Windows
	-----------------------
	
	It is suggested that you run STARTNET.BAT before entering Windows. You also
	should map drives and capture ports before entering Windows.
	
	Mapping Drives
	--------------
	
	If a server to which you have mapped a drive goes down, Windows displays a
	message indicating that the drive does not contain any files. Any attempt to
	access that drive fails. With MS-DOS, this error is trapped and the client saves
	enough information to automatically restore the connection to that network
	directory when the downed server returns to the network. Windows prevents MS-DOS
	from trapping this error. To restore connection to your mapped drive, exit
	Windows, and reissue the Net Map command when the server is back on the
	network.
	
	Network Printing
	----------------
	
	Use the Net Capture command described in your NetWare Lite documentation to
	redirect printing from your LPT1 or LPT2 ports to a network printer before you
	enter Windows. Configure your printer in Windows to either the LPT1.OS2 or
	LPT2.OS2 ports, depending on which port you captured before entering Windows.
	Workstations that are configured as both server and client should use LPT1.OS2
	or LPT2.OS2 to print from Windows.
	
	You also need to disable Fast Printing Direct To Port in the Printer Connect
	dialog box. Having this setting enabled bypasses any MS-DOS calls and therefore
	is not able to print to any network printers
	
	To disable the Fast Printing Direct To Port option:
	
	1. In the Control Panel window, choose the Printers icon.
	
	2. In the Printers dialog box, choose the Connect button.
	
	3. Clear the Fast Printing Direct To Port check box.
	
	Local Printing
	--------------
	
	Once a printer is assigned as a network printer, you should only access that
	printer through the network. You may have a printer attached to your workstation
	that has been defined as a Network Printer. In this case, you should capture a
	port when you want to print to it. If you print to it directly (not using
	capture), you may cause print job corruption.
	
	Changes to the SYSTEM.INI
	-------------------------
	
	For Windows 3.1, make sure that the following lines are in the [386Enh] section
	if the SYSTEM.INI file.
	
	     [386Enh]
	     UniqueDOSPSP=ON
	     PSPIncrement=5
	     TimerCriticalSection=10000
	     ReflectDOSInt2A=ON
	     OverlappedIO=OFF
	
	If you do not have these options included in the SYSTEM.INI file, you may not be
	able to get into Windows once NetWare Lite is loaded.
	
	NetWare Lite Messages
	---------------------
	
	Messages sent to network users through NetWare Lite only appear when you are at
	the command prompt or when you exit Windows.
	
	More information on the use of Windows and NetWare Lite can be found in Novell's
	README.TXT file that is included with NetWare Lite. In addition, Novell has set
	up an automated fax system to provide information about using NetWare Lite. This
	service can be accessed by calling (800) 638-9273 and then pressing the ASTERISK
	key (*) on your touch-tone telephone.
	
	The products included here are manufactured by Novell; we make no warranty,
	implied or otherwise, regarding these products' performance or reliability.
	
	
	REFERENCES
	==========
	
	NetWare Lite Automated Fax System Document 210, 204
	
	Additional query words: light 3.00 3.00a 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
