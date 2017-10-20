---
layout: page
title: "Q156976: PRB: A Required .DLL file, MSVCRT.DLL, Was Not Found"
permalink: /kb/156/Q156976/
---

## Q156976: PRB: A Required .DLL file, MSVCRT.DLL, Was Not Found

{% raw %}

	Article: Q156976
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup kbDSSTools kbVBp kbVBp400 kbVBp500 kbGrpDSVB kbOSWinME
	Last Modified: 26-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic setup program displays the error message:
	
	  A required .DLL file, MSVCRT.DLL, was not found.
	
	The program then terminates.
	
	CAUSE
	=====
	
	The version of files MSVCRT40.DLL and OLEPRO32.DLL in Windows 2000, Windows NT
	4.0, and Visual C++ 4.2 are wrapper DLLs that call functions in a new file,
	MSVCRT.DLL. The file MSVCRT.DLL is included in Windows 2000, Windows 98, and
	Windows Me, but not in Windows 95 or Visual Basic 4.0.
	
	RESOLUTION
	==========
	
	Create the \VB\SETUPKIT\KITFIL32\SYS32 directory and copy the following files
	from the \VB\SYSTEM directory of the Visual Basic distribution disks:
	
	  FILE                     VERSION NUMBER
	  --------------------------------------------
	  MSVCRT40.DLL          4.00.5209 or 4.00.5270
	  OLEPRO32.DLL          4.00.5208 or 4.00.5277
	
	
	The versions of these files in Visual C++ 4.2, Windows 2000, and Windows NT 4.0
	are forwarder DLL files that call functions in MSVCRT.DLL. If you include the
	versions of MSVCRT40.DLL and OLEPRO32.DLL from Visual C++ 4.2, Windows 2000, or
	Windows NT 4.0, then this error will occur because these files are looking for
	MSVCRT.DLL.
	
	The versions of MSVCRT40.DLL and OLEPRO32.DLL included with Visual Basic 4.00 do
	not require MSVCRT.DLL. Your setup program should install these versions to
	prevent this error.
	
	NOTE: If your setup program still fails on a target system, delete or rename the
	files, MSVCRT40.DLL and OLEPRO32.DLL on the target system. The target system has
	the newer versions of these files. The setup program created using the Setup kit
	is designed so that older files do not overwrite existing newer files on the
	target system.
	
	After deleting or renaming these files, your setup program should function
	properly.
	
	STATUS
	======
	
	This is a known problem that occurs when components from Windows 2000, Windows
	NT 4.0 and Visual C++ 4.2 are used by the Visual Basic 4-32 Setup Kit to create
	distribution disks. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To Check the Version Number of a File
	-------------------------------------
	
	1. From the Start Menu, click Explorer.
	
	2. Find the file whose version you want to check.
	
	3. Right-mouse click the file, and click Properties. The Properties dialog box
	  displays.
	
	4. Click the Version tab. The version number of the file is displayed.
	
	
	Additional query words: SetIns NT VC++ 4.2
	
	======================================================================
	Keywords          : kbsetup kbDSSTools kbVBp kbVBp400 kbVBp500 kbGrpDSVB kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
