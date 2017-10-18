---
layout: page
title: "Q128959: Error Message: This File Could Not Be Found &lt;Filename&gt;"
permalink: kb/128/Q128959/
---

## Q128959: Error Message: This File Could Not Be Found &lt;Filename&gt;

	Article: Q128959
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a file in a 16-bit version of Microsoft Word for Windows or
	Microsoft Excel, you receive the following error message:
	
	  This file could not be found <Filename>.
	
	After you click OK, you receive another similar message:
	
	  This file could not be found <Filename.ext>
	
	CAUSE
	=====
	
	These error messages occur when you try to open a file whose 8.3 filename
	contains a space. The space can be created in the filename by a 16-bit
	Windows-based program that uses a Windows 95 common dialog box. The filename is
	invalid because the 8.3 filename format does not allow spaces.
	
	RESOLUTION
	==========
	
	To correct the problem, rename the file to remove the space. To do so, follow
	these steps:
	
	1. Start Windows Explorer.
	
	2. Locate the file you want to rename.
	
	3. Use the right mouse button to click the file and then click Rename on the
	  menu that appears.
	
	4. Type a new name (or the same name) for the file and then press ENTER.
	
	MORE INFORMATION
	================
	
	If you type the same name for the file in Windows Explorer, Windows Explorer
	creates a long filename with the space, and an 8.3 filename with no space. When
	you open the file in a 16-bit Windows-based program there is no space in the
	filename. For example, if you name a file "Test Doc.doc" in Windows Explorer,
	the 8.3 filename that you see in 16-bit Windows-based programs is Testdo~1.doc.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
