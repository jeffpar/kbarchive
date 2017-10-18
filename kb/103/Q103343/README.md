---
layout: page
title: "Q103343: MkeGroup.exe Creates Program Manager Groups/Items w/DDE"
permalink: kb/103/Q103343/
---

## Q103343: MkeGroup.exe Creates Program Manager Groups/Items w/DDE

	Article: Q103343
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDDE kbOSWinNT kbOSWin kbshell kbGrpDSShell
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MkeGroup.exe (Make Group) sample application demonstrates the ease of
	creating Microsoft(R) Windows(TM) Program Manager groups and items with dynamic
	data exchange (DDE).
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	MkeGroup.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	The application displays a form from which the user can select a program group
	name (for example, Games) and a bunch of files. Clicking on the Make Group
	button either creates a new group with the specified name in the Program Manager
	or opens a group by that name, if one already exists. The application then
	creates program items in the group for each selected file.
	
	Of course, the user can create groups and items manually using the Program
	Manager File New command or by dragging files from the File Manager to the
	Program Manager. However, as an added bonus, Mkegroup provides an Iterate button
	that scans all of the subdirectories below the current directory, looking for
	files that match the currently selected pattern (for example, *.EXE), and adds
	all matching files to the list of selected files.
	
	For example, let's say you have a directory called C:\VB\VBSAMPLE on your hard
	disk that contains a subdirectory for each sample program you have written. If
	you want to create a program group that contains program items for all of the
	samples, open Mkegroup, select C:\VB\VBSAMPLE in the directory list box, and
	choose the Iterate button. This is much easier than opening each subdirectory
	individually.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDDE kbOSWinNT kbOSWin kbshell kbGrpDSShell 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
