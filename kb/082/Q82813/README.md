---
layout: page
title: "Q82813: OLE: How Windows 3.1 Searches for Server Applications"
permalink: /kb/082/Q82813/
---

## Q82813: OLE: How Windows 3.1 Searches for Server Applications

{% raw %}

	Article: Q82813
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbother kbole
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Windows version 3.1, OLE clients look for a server application (that is,
	the application associated with the object) in the following order:
	
	1. The location specified in the REG.DAT file.
	
	2. The WIN.INI file.
	
	3. The WINDOWS directory.
	
	4. The WINDOWS\SYSTEM directory.
	
	5. The location specified in the MS-DOS PATH environment variable (which is
	  specified in the AUTOEXEC.BAT file).
	
	A correct path in any of the above locations is sufficient to start the server
	application. If the server application is moved, then do any one of the
	following:
	
	- Locate the application's *.REG file and issue the following command:
	
	  REGEDIT /S <FILENAME>.REG
	
	- Make sure the server's location is specified in the MS-DOS PATH environment
	  variable.
	
	- Reinstall the application to update the REG.DAT file.
	
	- Make sure that the server is in the WINDOWS or WINDOWS\SYSTEM directory.
	
	MORE INFORMATION
	================
	
	If the server application is not found in the location specified in the REG.DAT
	file, the path specified in REG.DAT is ignored and the client looks in the next
	location.
	
	The "synching" properties of the registration file makes it so that it looks in
	the [Embedding] section of the WIN.INI. For example, if you install Microsoft
	Excel 3.0 (not 4.0), then the application writes its OLE information to the
	WIN.INI [Embedding] section. The first time that you use OLE in Excel, it looks
	in the REG.DAT file, doesn't find anything about Excel, then looks in the
	[Embedding] section of the WIN.INI, finds the information, updates the REG.DAT,
	and then launches the program.
	
	If the client doesn't locate the information in the WIN.INI, it looks in the next
	location (the WINDOWS directory). The REG.DAT and WIN.INI files are not changed
	to remove the incorrect location. Therefore, the identical search pattern is
	used the next time the OLE libraries request the location of this particular
	server application. (The entries in the [Embedding] section of the WIN.INI file
	are not used by the OLE libraries because SHELL.DLL keeps the REG.DAT file and
	the WIN.INI [Embedding] section identical.)
	
	If the client still doesn't locate the information, it looks in the
	WINDOWS\SYSTEM directory, and then in the AUTOEXEC.BAT file.
	
	If Windows is unable to find the server application in any of the above
	locations, the following error message is displayed when the client requests the
	server's services:
	
	  The server application cannot be found.
	
	  Make sure that the application is properly installed, or exists in your DOS
	  path, and that it has not been deleted, moved, or renamed.
	
	Additional query words: 3.10 3.1 find search order
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
