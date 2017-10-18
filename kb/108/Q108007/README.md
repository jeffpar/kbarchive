---
layout: page
title: "Q108007: Using Wollongong TCP/IP with Windows for Workgroups 3.11"
permalink: kb/108/Q108007/
---

## Q108007: Using Wollongong TCP/IP with Windows for Workgroups 3.11

	Article: Q108007
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	The Wollongong Group's Pathway Runtime and Pathway Access version 1.2, which
	comes with an RFC-compliant NetBIOS interface, can be used with Windows for
	Workgroups 3.11. Pathway Runtime is the Wollongong TCP/IP stack, and Pathway
	Access is a set of TCP/IP utilities provided by Wollongong. (The TCP/IP stack is
	a real-mode stack and operates with NDIS 2 drivers.)
	
	This article provides the steps needed to install Pathway Runtime 1.2 on Windows
	for Workgroups 3.11.
	
	MORE INFORMATION
	================
	
	To install Pathway Runtime on Windows for Workgroups, do the following:
	
	WARNING: Although this procedure allows you to run Pathway Runtime with Windows
	for Workgroups version 3.11, it disables the NetBEUI protocol. As a result, your
	machine won't be able to view or access any other Windows for Workgroups
	machines or LAN Manager servers on the network that are running NetBEUI
	exclusively.
	
	1. Install Windows for Workgroups with the default NetBEUI transport.
	
	2. Install Pathway Runtime using PWSETUP.EXE from the setup disk supplied with
	  the Wollongong product.
	
	3. Complete the installation using the complete NDIS installation option. (For
	  more information, please refer to the Pathway Runtime manual.)
	
	4. After the installation is complete, change the AUTOEXEC.BAT file so that the
	  NET INIT command is executed immediately before the NDIS command. Replace the
	  PWBIND command with the NET START NETBIND command, which comes before the
	  PWTCP command. Remove the NET START line added by Windows for Workgroups. The
	  following is an example of the AUTOEXEC.BAT file after these changes:
	
	  rem #----------------------- The Wollongong Group --------------------#
	  rem # The following lines are for Pathway Runtime setup. Please DO NOT#
	  rem # modify or remove any of them. If you DO want to, please run the #
	  rem # setup program to modify or deinstall Pathway for DOS.           #
	
	  SET PATH=C:\PATHWAY;%PATH%
	  c:\pathway\PWCONFIG -N:65
	  net init
	  c:\pathway\ndis -I:5 -D:3
	  net start netbind
	  rem if you are not using the bootp protocol comment out the bootp line.
	  c:\pathway\bootp -d
	  c:\pathway\pwtcp
	  c:\pathway\netbios
	  rem #----------------------- The Wollongong Group --------------------#
	
	5. Make sure that the -I option for the NDIS command matches the IRQ being used
	  by the network card. The -D option refers to the section number in the
	  PROTOCOL.INI file referring to the network card.
	
	6. Run NETBIOS.EXE after PWTCP.EXE. (NETBIOS.EXE is the RFC-compliant driver.)
	
	7. Edit the SYSTEM.INI file in the Windows directory and make the following
	  changes:
	
	  a. In the [386enh] section, change the line
	
	  transport=netbeui.386,nwlink.386,nwnblink.386
	
	     to:
	
	  transport=nwlink.386,nwnblink.386
	
	  b. In the [network drivers] section, change the lines
	
	            transport=ndishlp.sys,*netbeui
	            LoadRMDrivers=No
	
	     to:
	
	            transport=ndishlp.sys
	            LoadRMDrivers=Yes
	
	  These changes indicate that the real-mode protocol stack will use Lana 0.
	  (Pathway Runtime can use Lana 0 only).
	
	8. Edit the CONFIG.SYS file and remark out (using the REM command) the entries
	  added by the Pathway Access installation program:
	
	  rem #---------------------- The Wollongong Group ----------------------#
	  rem #  The following lines are for Pathway Runtime setup. Please DO NOT#
	  rem #  modify or remove any of them. If you DO want to, please run the#
	  rem #  setup program to modify or deinstall Pathway for DOS.          #
	  rem DEVICE=C:\PATHWAY\PROTMAN.EXE /i:C:\PATHWAY\LANMAN
	  rem DEVICE=C:\PATHWAY\LANMAN\ELNK3.DOS
	  rem #---------------------- The Wollongong Group ---------------------#
	
	  The only entry needed is:
	
	        Device=c:\Windows\ifshlp.sys
	      
	
	9. Reboot and start Windows.
	
	You can now install Pathway Access by following the instructions provided by
	Wollongong.
	
	REFERENCES
	==========
	
	Wollongong Pathway Access Release Notes
	Windows for Workgroups Resource Kit
	
	The Wollogong products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.11 TCP 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
