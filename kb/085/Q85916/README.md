---
layout: page
title: "Q85916: Using UNC Redirection in the WIN.INI [Ports] Section"
permalink: kb/085/Q85916/
---

## Q85916: Using UNC Redirection in the WIN.INI [Ports] Section

	Article: Q85916
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows and Windows for Workgroups support the use of the universal
	naming convention (UNC) for entries in the [ports] section of the WIN.INI file.
	
	Because Windows supports the UNC, you can take advantage of UNC redirection,
	which means that you can use a network resource without formally connecting to
	it by means of a NET USE command or through use of a program to access network
	resources, such as File Manager or the Control Panel Printers icon.
	
	UNC redirection is supported by Microsoft LAN Manager versions 1.1 and later and
	by 100-percent LAN Manager compatible networks.
	
	MORE INFORMATION
	================
	
	Standard printer connections using UNCs give you easier access to network
	printers, allowing you to choose from a list of printers, rather than browse the
	network or have a handwritten list.
	
	Using UNC in the WIN.INI [ports] Section
	----------------------------------------
	
	This example uses a server called ACCOUNT1, and a printer share called HPIIID.
	The UNC name in this case is \\ACCOUNT1\HPIIID.
	
	To print to a network printer without formally connecting to it, do the
	following:
	
	1. Open the WIN.INI file in an ASCII text editor (such as Windows Notepad).
	
	2. Add the line \\ACCOUNT1\HPIIID= to the [ports] section as follows:
	
	        [ports]
	        LPT1:=
	        LPT2:=
	        \\ACCOUNT1\HPIIID=
	        ...
	
	3. Run Control Panel.
	
	4. Choose the Printers icon and choose the Connect button.
	
	5. Select the new port called \\ACCOUNT\HPIIID.
	
	When you print to this printer, the output is redirected to the network printer
	defined by the UNC entry in the [ports] section.
	
	NOTE: When this port is selected in the Printers Connect dialog box in Control
	Panel, the Network button is dimmed (unavailable). When a standard LPT port is
	selected, the Network button is available again.
	
	Some applications may not be able to understand UNC redirection.
	
	
	Additional query words: gpf 3.10 3.11 unique pipes piping gray grey automate automatic Novell selection
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
