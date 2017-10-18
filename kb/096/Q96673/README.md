---
layout: page
title: "Q96673: Error Messages When Saving Changes to REGEDIT.EXE"
permalink: kb/096/Q96673/
---

## Q96673: Error Messages When Saving Changes to REGEDIT.EXE

	Article: Q96673
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save changes in the Registration Information Editor (REGEDIT.EXE), you
	may receive one of the following error messages:
	
	  Cannot write to file REG.DAT. Make sure there is enough space on the disk.
	
	  -or-
	
	  Cannot write to file REG.DAT. Make sure there is enough space on the disk. Do
	  you want to close Registration Info Editor?
	
	CAUSE
	=====
	
	You may receive these errors under the following conditions even if there is
	sufficient disk space:
	
	- A copy of the REG.DAT is currently open in any editor.
	
	- The REG.DAT file has been set to read only.
	
	- The PATH statement in you AUTOEXEC.BAT file does not contain a fully
	  qualified reference to the Windows directory. For example:
	
	  PATH=C:\;\WINWORD;\DOS;\WINDOWS;
	
	WORKAROUND
	==========
	
	You may receive this error message if you have a copy of REG.DAT open with any
	type of editor, for example, Windows Write. To resolve the problem, switch to
	the editor and close the REG.DAT file before making any changes to REG.DAT from
	REGEDIT.EXE.
	
	If you receive an error and you have verified that there is enough available disk
	space and that you don't have a copy open in an editor, check the file
	properties of the REG.DAT file to see if the file is set to read only.
	
	If the file is marked read only, removing the read-only attribute may eliminate
	the error message. To change the properties of the REG.DAT file through File
	Manager, do the following:
	
	1. In File Manager, select the REG.DAT file in the Windows directory.
	
	2. From the File menu, choose Properties.
	
	3. Change the attributes in the Properties dialog box.
	
	MORE INFORMATION
	================
	
	If removing the read-only attribute doesn't resolve the problem, you may need to
	rename and then rebuild REG.DAT. For more information, query on the following
	words here in the Microsoft Knowledge Base:
	
	  windows and default and REG.DAT and rebuild
	
	Additional query words: 3.10 3.11 err msg reg dat
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
