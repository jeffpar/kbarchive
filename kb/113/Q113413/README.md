---
layout: page
title: "Q113413: Windows 3.11 Upgrade Removes User Information"
permalink: kb/113/Q113413/
---

## Q113413: Windows 3.11 Upgrade Removes User Information

	Article: Q113413
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Windows 3.11 update, when you choose About Program Manager
	from the Help menu in Program Manager, the correct licensing information is not
	displayed. The About Program Manager box states that the product is licensed
	to:
	
	  Unknown User
	  Unknown Organization
	
	CAUSE
	=====
	
	The user information entered during Setup is stored in the core file USER.EXE,
	which is replaced with the Windows 3.11 update.
	
	RESOLUTION
	==========
	
	Use the following steps to re-enter the user and company name:
	
	1. From the File menu in Program Manager, choose Run.
	
	2. In the Command Line box, type "setup /f" (without the quotation marks) and
	  press ENTER.
	
	3. Enter the new name and company, and press ENTER to continue.
	
	4. When asked to confirm the name and company, press ENTER to continue.
	
	5. When the Setup options screen is displayed, press ENTER to continue.
	
	6. When the install components screen is displayed, press ENTER to continue.
	
	7. When the swap file screen is displayed, press ENTER to continue.
	
	8. When asked to insert a Windows disk, choose the Exit Setup button.
	
	9. When asked to confirm exiting Setup, choose Yes.
	
	Windows then closes. When you restart Windows, the new name and company name
	appear.
	
	MORE INFORMATION
	================
	
	The Windows 3.11 update replaces the following files:
	
	  COMMDLG.DLL
	  GDI.EXE
	  KRNL386.EXE
	  PSCRIPT.DRV
	  UNIDRV.DLL
	  SHELL.DLL
	  USER.EXE
	
	Additional query words: 3.11 setup/f how to
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
