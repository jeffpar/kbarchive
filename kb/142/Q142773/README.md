---
layout: page
title: "Q142773: Cannot Run NDS Tools Without Running Nwadmin.exe"
permalink: kb/142/Q142773/
---

## Q142773: Cannot Run NDS Tools Without Running Nwadmin.exe

	Article: Q142773
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you attempt to run a NetWare Directory Services (NDS) tool on a computer
	running Windows 95 configured with the Microsoft Service for NDS, you may
	receive one of the following error messages:
	
	- Invalid Context
	
	- Unknown Object Type
	
	- Cannot read object's information
	
	- Program Error Your program is making an invalid dynamic link call to a .dll
	  file
	
	CAUSE
	=====
	
	The Novell NetWare Administrator program (Nwadmin.exe) has not been run.
	Therefore, the following dynamic link libraries (DLLs) are not loaded in
	memory:
	
	- Nwcalls.dll
	
	- Nwlocale.dll
	
	- Nwipxspx.dll
	
	- Nwnet.dll
	
	- Nwgdi.dll
	
	- Nwpsrv.dll
	
	RESOLUTION
	==========
	
	You can edit the registry using System Policy Editor (Poledit.exe) or Registry
	Editor (Regedit.exe). Check with your network administrator before you make any
	changes to the registry.
	
	System Policy Editor (Poledit.exe) is available in the Admin\Apptools\ Poledit
	folder on the Windows 95 CD-ROM. Use the Add/Remove Programs tool in Control
	Panel to install System Policy Editor.
	
	NOTE: System Policy Editor is not included in the floppy disk version of Windows
	95. You can download Policy.exe, a self-extracting file containing Poledit.exe,
	from online services. Please see the following article in the Microsoft
	Knowledge Base for information about downloading Policy.exe:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	Use the following steps to edit the registry with System Policy Editor to ensure
	that the necessary NetWare DLLs are automatically loaded when Windows 95
	starts:
	
	1. Click the Start button, and then click Run.
	
	2. Type "poledit" (without the quotation marks) in the Open box, and then click
	  OK.
	
	3. On the Options menu, click Template.
	
	4. Click Open Template, type the full path for the Maple.adm file that is
	  included with the Microsoft Service for NDS, click Open, and then click
	  Close.
	
	5. On the File menu, click Open Registry, and then double-click Local Computer.
	
	6. Double-click Network, and then double-click Service For NetWare Directory
	  Services.
	
	7. Click the Load NetWare DLLs At Startup check box to select it, and then click
	  OK.
	
	8. Save the changes to the registry, exit System Policy Editor, and then restart
	  Windows 95.
	
	After you complete the above steps, the following DLLs are loaded automatically
	each time you start Windows 95:
	
	- Nwcalls.dll
	
	- Nwlocale.dll
	
	- Nwnet.dll
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	To cause the Nwipxspx.dll, Nwgdi.dll, and Nwpsrv.dll DLLs to be loaded
	automatically each time you start Windows 95, you must create a new string value
	for each DLL that you want to be loaded under the following registry key:
	
	  Hkey_Local_Machine\System\CurrentControlSet\Services\Nwnp32\ 
	  NetworkProvider\PreloadDlls
	
	The name of each new string value should be the name of the DLL that you want to
	be loaded automatically. For example, if you want the Nwipxspx.dll DLL to be
	loaded automatically, the name of the new string value that you create should be
	"Nwipxspx.dll" (without quotation marks). The new registry values that you
	create should not be assigned any data.
	
	MORE INFORMATION
	================
	
	For information about how to obtain the Microsoft Service for NetWare Directory
	Services, please see the following article in the Microsoft Knowledge Base:
	
	  Q138709 Microsoft Service for NetWare Directory Services Available
	
	For information about problems that may occur when you attempt to run Nwadmin.exe
	on a computer running Windows 95 configured with the Microsoft Client for
	NetWare Networks or the Microsoft Service for NDS, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q124712 NetWare Administrator Does Not Work with NWREDIR Loaded
	
	For information about how to merge the Microsoft Service for NDS policy file
	(Maple.adm) with the Admin.adm policy file included with Windows 95, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q142178 How to Use Maple.adm with System Policy Editor
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
