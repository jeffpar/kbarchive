---
layout: page
title: "Q248474: Windows NT Server Tools Overwrites Terminal Server Information"
permalink: /kb/248/Q248474/
---

## Q248474: Windows NT Server Tools Overwrites Terminal Server Information

	Article: Q248474
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool kbui win95 win98
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to modify Windows NT 4.0 Terminal Server user accounts from a
	Windows 98/95-based computer using a version of Windows NT Server Tools earlier
	than 4.0, the information in the Terminal Server Profile Path and the Terminal
	Server Home Folder Universal Naming Convention (UNC) boxes is overwritten. Also,
	you are unable to view the information in these boxes using any version of
	Windows NT Server Tools.
	
	CAUSE
	=====
	
	This issue occurs because versions of Windows NT Server Tools earlier than 4.0
	are not able to interpret the Terminal Server information used in the Security
	Accounts Manager (SAM) database. Because of this, the Windows NT Server Tool
	earlier than 4.0 overwrites the information.
	
	RESOLUTION
	==========
	
	To resolve this issue, you must use the Windows NT 4.0, Terminal Server Edition
	Server Tools to modify Windows NT 4.0 Terminal Server user accounts. The Windows
	NT 4.0, Terminal Server Edition Server Tools are located in the
	Clients\Srvtools\Win95 folder of the Windows NT 4.0, Terminal Server Edition
	CD-ROM.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To install Windows NT 4.0, Terminal Server Edition Server Tools on a computer
	running Windows 98/95:
	
	1. Verify that your Windows 98/95 computer has at least 3.0 megabytes (MB) of
	  free disk space on the hard disk where Windows is installed.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs, click the Windows Setup tab, and then click
	  Have Disk.
	
	4. In the Install From Disk dialog box, click Browse under the "Copy
	  manufacturer's files from" box, select the Clients\Srvtools\Win95 folder
	  name, and then click OK.
	
	  NOTE: This folder contains the client-based Network Administration Tools
	  files, and there must be a Srvtools.inf file in this folder.
	
	5. Click Windows NT Server Tools, and then click Install. The Windows NT 4.0,
	  Terminal Server Edition Server Tools are installed in a folder called
	  Srvtools on the Windows 98/95 computer boot drive.
	
	6. Add the Srvtools folder to the path command in the Autoexec.bat file.
	
	7. Restart your computer.
	
	NOTE: Windows NT 4.0 Server Tools do not permit you to view or modify the
	Terminal Server Profile Path and the Terminal Server Home Folder boxes in the
	SAM database, but they do not overwrite the information in these boxes. However,
	it is recommended that you use the Windows NT 4.0, Terminal Server Edition
	Server Tools that permit you to view and modify this information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbui win95 win98 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
