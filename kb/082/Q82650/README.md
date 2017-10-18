---
layout: page
title: "Q82650: OLE: SETUP.REG Can Be Used to Repair REG.DAT"
permalink: kb/082/Q82650/
---

## Q82650: OLE: SETUP.REG Can Be Used to Repair REG.DAT

	Article: Q82650
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some object-linking-and-embedding (OLE) servers may provide a text file called
	SETUP.REG, or a similarly-named file. This file contains information about the
	particular server application and can be used to repair an application's entry
	in the Windows REG.DAT file. This is necessary only if you think the entry is
	incorrect or the REG.DAT file is corrupted.
	
	MORE INFORMATION
	================
	
	The REG.DAT file is the registration database. The database is a source of
	information about server applications in a binary format. Information in REG.DAT
	includes:
	
	1. Class name - This describes the type of information contained within an
	  object.
	
	2. The path to the server
	
	3. Any verbs supported by the server - This includes actions the server can take
	  on the object.
	
	The information in REG.DAT is used when you open or print a file from File
	Manager. This information is also used by applications that support OLE. The
	registration database (REG.DAT) is set up and maintained by Windows and Windows
	applications. It is located in the WINDOWS directory. This file should not be
	moved or deleted. Doing so may result in loss of functionality in File Manager,
	Program Manager, and applications that support OLE.
	
	SETUP.REG is a text file that contains the same information as REG.DAT except its
	format is ASCII instead of binary. SETUP.REG can be merged with an existing
	REG.DAT file to repair or update an individual entry in the REG.DAT file. If
	REG.DAT or OLESVR.DLL is damaged or corrupted you may get the following error
	message.
	
	  Failed to register server.
	
	Sample SETUP.REG Entries for PaintBrush
	---------------------------------------
	
	Note: PaintBrush can only act as a server application.
	
	  HKEY_CLASSES_ROOT\.bmp = PBrush
	  HKEY_CLASSES_ROOT\.msp = PBrush
	  HKEY_CLASSES_ROOT\.pcx = PBrush
	  HKEY_CLASSES_ROOT\PBrush = Paintbrush Picture
	  HKEY_CLASSES_ROOT\PBrush\shell\print\command = PBRUSH.EXE /P %1
	  HKEY_CLASSES_ROOT\PBrush\shell\open\command = PBRUSH.EXE %1
	  HKEY_CLASSES_ROOT\PBrush\protocol\StdFileEditing\verb\0 = Edit
	  HKEY_CLASSES_ROOT\PBrush\protocol\StdFileEditing\server = PBRUSH.EXE
	
	Steps to repair REG.DAT with an application's SETUP.REG file:
	
	1. Open Program Manager. From the File menu, choose Run.
	
	2. Type REGEDIT .
	
	3. Choose the OK button.
	
	4. From the File menu, choose Merge Registration File.
	
	5. Select the .REG file that needs to be merged into the existing REG.DAT file.
	
	The Merge Registration File command merges the selected registration (SETUP.REG)
	file with the currently displayed database (REG.DAT). The merged information is
	not written to the REG.DAT file until you choose the Save Changes command.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
