---
layout: page
title: "Q95937: DLL That is Callable from Microsoft Setup Script"
permalink: kb/095/Q95937/
---

## Q95937: DLL That is Callable from Microsoft Setup Script

	Article: Q95937
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbsetup kb16bitonly kbOSWin310 kbOSWin300
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FILEEDIT demonstrates how to create a function in a dynamic-link library (DLL)
	that is callable from a Microsoft Setup installation script. The entry function,
	FileEditDialog, takes the handle to Setup's frame window and a long pointer to a
	filename. FILEEDIT opens the file and places its contents in a read-only edit
	control. The function then adds the line "REM New File" to the beginning of the
	file and displays the updated file in a list box. Thus, the user can view both
	the old file and the proposed updated file at the same time. The user can update
	the contents of the new file by selecting lines within the list box. When the
	user has completed updating the file, the file can be saved using the common
	dialog boxes. If the file is successfully saved, FILEEDIT creates an entry
	(FILEEDIT) in the global symbol table with the saved filename.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Fileedit.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	A modified version of the SAMPLE1.MST script file is included to demonstrate how
	to call into the FILEEDIT DLL. Additionally, the script has been updated to get
	the symbol FILEEDIT and display the saved filename in a message box.
	
	Additional query words: 3.10 FILEEDIT.EXE softlib
	
	======================================================================
	Keywords          : kbfile kbsample kbsetup kb16bitonly kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
