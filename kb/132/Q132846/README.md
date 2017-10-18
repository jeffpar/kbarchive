---
layout: page
title: "Q132846: Rodney's Funscreen Does Not Install Properly in Windows 95"
permalink: kb/132/Q132846/
---

## Q132846: Rodney's Funscreen Does Not Install Properly in Windows 95

	Article: Q132846
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Rodney's Funscreen by ActiVision, it asks you to insert disk 1
	even though disk 1 is already in the disk drive. After following the
	instructions, Rodney's Funscreen is not completely installed.
	
	CAUSE
	=====
	
	The Setup program for Rodney's Funscreen is in two parts: a Windows part, and an
	MS-DOS part. When it is time to install the MS-DOS part, Rodney's Funscreen
	starts the MS-DOS program but does not wait long enough for the MS-DOS part to
	finish before trying to continue with the Windows part. Rodney's Funscreen
	thinks that the MS-DOS part (which involves removing disk 1) is finished, when
	in fact it has not yet started. The Setup program then allows you to continue
	through the rest of the setup procedure without ever finishing the MS-DOS part
	of the installation.
	
	RESOLUTION
	==========
	
	To install Rodney's Funscreen successfully, follow these steps:
	
	1. Quit all programs that are running.
	
	2. Restart the Setup program.
	
	3. When the Windows part of the installation prompts you to insert disk 1,
	  switch to the MS-DOS part of the installation and follow the instructions. To
	  switch to the MS-DOS part of the setup, press ALT+TAB or click the MS-DOS
	  button on the taskbar.
	
	4. When the MS-DOS part of the installation is finished, switch back to the
	  Windows part, click the OK button in the message box prompting you to
	  reinsert disk 1, and continue with the installation procedure as before.
	
	If you continue to have problems running or installing Rodney's Funscreen, please
	contact ActiVision.
	
	MORE INFORMATION
	================
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95.
	
	The product discussed here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
