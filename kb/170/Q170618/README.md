---
layout: page
title: "Q170618: Virus Detected in the Suhdlog.dat File"
permalink: /kb/170/Q170618/
---

## Q170618: Virus Detected in the Suhdlog.dat File

	Article: Q170618
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Anti-virus programs may detect a virus in the Suhdlog.dat file.
	
	CAUSE
	=====
	
	Your computer was infected with a master-boot-record (MBR) virus before you
	installed Windows 95.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	Method 1
	--------
	
	Remove the virus from the Suhdlog.dat file with an anti-virus program.
	
	NOTE: If the Suhdlog.dat file is damaged when the virus is removed, you cannot
	use the Uninstall tool to remove Windows 95.
	
	For information about how to remove a virus with your anti-virus program, refer
	to the documentation included with your anti-virus program or contact your
	anti-virus program's manufacturer.
	
	Method 2
	--------
	
	NOTE: You cannot use the Uninstall tool to remove Windows 95 when you use this
	method to remove the virus-infected Suhdlog.dat file.
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. On the Install/Uninstall tab, click "Old Windows 3.x/MS-DOS System Files,"
	  and then click Add/Remove.
	
	If after you remove the "Old Windows 3.x/MS-DOS System Files" component the
	Suhdlog.dat file is still present, delete the Suhdlog.dat file using the
	following steps:
	
	1. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	2. type the following lines, pressing ENTER after each line:
	
	  " cd\
	  attrib -s -h -r c:\suhdlog.dat
	  del c:\suhdlog.dat " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	When you upgrade an earlier version of Windows to Windows 95 and you choose to
	back up the system files during the upgrade, your hard disk's original MBR and
	partition tables are copied to the Suhdlog.dat file.
	
	If your computer is infected with an MBR virus before you install Windows 95, the
	virus is copied along with the original MBR and partition tables into the
	Suhdlog.dat file. Even though an anti-virus program removes the virus from your
	current MBR, if the Suhdlog.dat file contains the virus when you use the Windows
	95 Uninstall tool to restore the previous version of Windows and MS-DOS on your
	computer, the MBR becomes infected again.
	
	The virus is not active while it is stored in the Suhdlog.dat file, but
	anti-virus programs may detect its presence and display a warning.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q129972 Description of Computer Viruses
	
	  Q151667 Description of Windows 95 Files Located in the Root Folder
	
	  Q138127 How to Uninstall Windows 95
	
	======================================================================
	Keywords          : kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
