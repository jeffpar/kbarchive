---
layout: page
title: "Q96149: Installing Wollongong Pathway Access on WfW"
permalink: /kb/096/Q96149/
---

## Q96149: Installing Wollongong Pathway Access on WfW

	Article: Q96149
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Wollongong Group's Pathway Runtime and Pathway Access 1.2 can be used with
	Windows for Workgroups. Pathway Runtime is Wollongong's TCP/IP stack and Pathway
	Access is a set of TCP/IP utilities provided by Wollongong. This article
	provides you with the steps that are needed to install Pathway Runtime 1.2 on
	Windows for Workgroups 3.1.
	
	Note: Microsoft Product Support Services does not support Pathway Runtime or
	Pathway Access. This information is provided for user information only.
	
	MORE INFORMATION
	================
	
	Pathway Runtime is Wollongong Group's TCP/IP stack. The product comes with an
	RFC compliant NetBIOS interface and can be used with Windows for Workgroups.
	
	To install Pathway Runtime from Wollongong Group on Windows for Workgroups, do
	the following:
	
	1. Install Pathway Runtime using PWSETUP.EXE from the DOS Setup Disk.
	
	2. Complete the installation using the complete NDIS installation option. (For
	  more information, please refer to the Pathway Runtime manual.
	
	3. After the installation is complete, change the AUTOEXEC.BAT file such that
	  the "net start" command is executed immediately before the PWTCP command and
	  after the NDIS command. Following is an example of the AUTOEXEC.BAT file
	  after the changes:
	
	  rem #------------------------ The Wollongong Group --------------------#
	  rem #  The following lines are for PathWay Runtime setup. Please DO NOT#
	  rem #  modify or remove any of them. If you DO want to, please run the #
	  rem #  setup program to modify or deinstall PathWay for DOS.           #
	  SET PATH=C:\PATHWAY;%PATH%
	  PWCONFIG -N:65
	  NDIS -I:5 -D:3
	  net start
	  PWTCP
	  c:\pathway\NetBIOS
	  rem #------------------------ The Wollongong Group -------------------#
	
	4. Make sure that the -I option for the NDIS command refers to the IRQ being
	  used by the network card. The -D option refers to the paragraph number in
	  PROTOCOL.INI referring to the network card.
	
	5. Run NETBIOS.EXE after PWTCP.EXE. NETBIOS.EXE is the RFC 1001/1002 compliant
	  driver.
	
	6. Edit the SYSTEM.INI file in the Windows subdirectory and add the following
	  line to the [386enh] section:
	
	     V86ModeLanas=0
	
	  This will indicate that the real mode protocol stack will be using Lana 0.
	  Note that Pathway Runtime can only use Lana 0.
	
	7. Reboot and start Windows.
	
	Pathway Access can now be installed if needed by following instructions provided
	by Wollongong.
	
	Reference(s):
	
	Wollongong Pathway Access Release Notes Windows for Workgroups Resource Kit
	
	Additional query words: wfw wfwg 3.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
