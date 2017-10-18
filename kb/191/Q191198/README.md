---
layout: page
title: "Q191198: SAMPLE: SFOLDER.EXE Gets the Path of a Special Folder"
permalink: kb/191/Q191198/
---

## Q191198: SAMPLE: SFOLDER.EXE Gets the Path of a Special Folder

	Article: Q191198
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0,97,97sp3
	Operating System(s): 
	Keyword(s): kbfile kbprogramming kbsample kbVBp kbVBp500 kbVBp600
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sfolder.exe is a self-extracting compressed file that contains a sample project
	demonstrating how to find the directory path of a special folder, such as the
	Programs folder. You can use this sample to find the directory path of these
	special folders so that your program can search for or load files into these
	folders. The project uses Windows API functions to access the special folders.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Sfolder.exe
	  (http://download.microsoft.com/download/vb60ent/Sample17/1/W9XNT4/EN-US/Sfolder.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	When you run the self-extracting executable file, the following files are
	expanded into the Special Folders Path Sample Project directory:
	
	- Form1.frm (14K) - The main form of the project.
	
	- ITMalloc.tlb (3K) - The type library required to expose the Free method of
	  the IMalloc operating system object. See the next section for more details.
	
	- Project1.vbp (2K) - The project file.
	
	- Project1.vbw (1K) - The workspace file.
	
	- Readme.txt - You are currently reading this file.
	
	How to Run the Sample
	---------------------
	
	After expanding all the files, open the project file in the Visual Basic
	Integrated Development Environment (IDE). You need to make a reference to the
	ITMalloc.tlb type library and add the Microsoft Windows Common Controls 5.0
	ActiveX component to the project.
	
	1. Load the sample project into Visual Basic.
	
	2. Press the F5 key or click Start from the Run menu to start the project. The
	  ListView controls display a list of all special folders, their constant names
	  and values, and the operating systems or browsers that use these folders.
	
	3. Click a Special folder name to display the directory path. If the constant
	  does refers to a virtual folder, such as Control Panel
	  Programs-CSIDL_CONTROLS, text indicating a function failure appears in the
	  text box.
	
	How the Sample Works
	--------------------
	
	Each special folder has a unique identification number that can only be accessed
	by a pointer to this number. This pointer is called a PIDL. Some of these
	folders map to a directory in your computer while others, such as CSIDL_DRIVES
	that is equivalent to the My Computer icon, do not have a directory. The list of
	special folders are shown in the code section of the sample project.
	
	To get the a pointer to the PIDL of any special folder, use the
	SHGetSpecialFolderLocation function. This function fills the SHELLEXECUTEINFO
	user defined type with information about the special folder.
	
	However, when you call the SHGetSpecialFolderLocation function, the calling
	application is responsible for freeing this pointer. You can free the pointer by
	using the Free method of the IMalloc operating system object through the
	SHGetMalloc function. Visual Basic can only access the Free method if the method
	is exposed through a type library. The ITMalloc.tlb type library to expose the
	Free method is included with the self-extracting file.
	
	Once you have the PIDL of a special folder, you can get the directory path of
	this folder through the SHGetPathFromIDList function. This function fills a
	string buffer with the directory path of a special folder if the folder exists
	on the system. The function fails if you pass a special folder without a
	directory, such as My Computer.
	
	
	REFERENCES
	==========
	
	For more information about working with special folders, please see the
	following:
	
	  Platform SDK documentation on the following topics:
	
	     Files and I/O
	     SHGetSpecialFolderLocation
	     SHGetPathFromIDList
	     SHGetMalloc
	     SHGetMalloc
	
	"Walking Through Folders Topic", Chapter 11, "Stir Fry in Hardcore Visual Basic",
	Second Edition by Bruce McKinney, Microsoft Press.
	
	Additional query words: kbWin32 kbAPI kbVBp500 kbVBp600 kbsample kbVBp kbvs97 kbvs97sp3
	
	======================================================================
	Keywords          : kbfile kbprogramming kbsample kbVBp kbVBp500 kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0,97,97sp3
	Issue type        : kbhowto
	
	=============================================================================
	
