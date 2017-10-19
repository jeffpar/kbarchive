---
layout: page
title: "Q138093: PRB: Can't Use SET DEFAULT command to Set Default to UNC Path"
permalink: /kb/138/Q138093/
---

## Q138093: PRB: Can't Use SET DEFAULT command to Set Default to UNC Path

	Article: Q138093
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SET DEFAULT TO <UNC> command where UNC is a network
	connection using the universal naming convention in Windows 95, the following
	error occurs:
	
	  Invalid path or file name.
	
	Or if you click Do on the Program menu and select a program that has a path to a
	network connection not mapped to any drive letter, the following error occurs:
	
	  File '<program name>' does not exist.
	
	CAUSE
	=====
	
	The Visual FoxPro SET DEFAULT command does not support UNC paths used by Windows
	95.
	
	
	RESOLUTION
	==========
	
	Before attempting to use the SET DEFAULT command to set the default to a network
	connection, first map the connection to a drive letter. For example, say you
	have a program named Test.prg located in a directory named Programs on a network
	node named Shared.
	
	1. Open the Windows 95 Explorer.
	
	2. On the Tools menu, click Map Network Drive.
	
	3. From the Map Network Drive dialog box, select a default drive letter. For
	  this example, assume it is drive F: and the Path dialog box has this UNC:
	
	  \\SHARED\PROGRAMS
	
	4. Set the path to this drive in the Visual FoxPro by typing the following in
	  the Command window:
	
	  SET PATH TO F:\ 
	
	Other Ways to Map the Network Drive
	-----------------------------------
	
	In this example, the Windows 95 Explorer is not the only way to map the network
	drive. On the Start menu, click Find, and then click Computer. In the dialog
	box, type:
	
	  \\SHARED
	
	Then click the Program directory to highlight it. On the File menu, click Map
	Network Drive, and select a drive letter. The Map Network Drive option is also
	available in the Network Neighborhood.
	
	You can resolve the problem by mapping the network drive to a drive letter, or by
	adding and removing network connections programmatically from within Visual
	FoxPro by using the Windows application programming interface (API) through
	Foxtools.fll (a library file included with Visual FoxPro). In this way, you can
	programmatically create a connection and map it to a logical drive letter. For
	more information about using Foxtools.fll to make a network connection, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q105042 How to Add/Remove Network Connections in FoxPro
	
	STATUS
	======
	
	This behavior is by design in Visual FoxPro 3.0. In Visual FoxPro 5.0, the SET
	DEFAULT TO command can handle UNC's.
	
	
	MORE INFORMATION
	================
	
	If a shortcut has been created on the Windows 95 desktop that uses a UNC to
	locate a program, the following error will also occur if on the Program menu,
	you click Do, locate the desktop, and then select the desired shortcut.
	
	  File <program name> does not exist.
	
	To resolve this, you must map the shortcut to a network drive. That network drive
	letter must remain the same during all Windows 95 sessions in order for the
	shortcut to be successful.
	
	Steps to Reproduce "Invalid path or filename" Error
	---------------------------------------------------
	
	From the Command window type: "
	
	  SET DEFAULT TO \\SHARED\PROGRAMS
	
	" (without the quotation marks) Here SHARED represents the computer or node name
	and PROGRAMS is a shared directory on that computer or node.
	
	Steps to Reproduce "File <Program name> does not exist" Error
	-------------------------------------------------------------
	
	In Visual FoxPro, click Do on the Program menu. In the Do dialog box, click the
	Network Neighborhood, locate a network computer where a shared program is
	located. Locate the directory and program, double-click the program file. The
	error appears at this point.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
