---
layout: page
title: "Q262775: Installing MSN 5.1 prompts the user to call technical support if"
permalink: kb/262/Q262775/
---

## Q262775: Installing MSN 5.1 prompts the user to call technical support if

	Article: Q262775
	Product(s): The Microsoft Network
	Version(s): WINDOWS:5.0,5.1; Win2000:95,98; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 5.0, 5.1 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you insert the MSN 5.1 disk and the disk installs Internet explorer, after
	which the install process prompts the user with
	
	  We have encountered a problem while setting up your computer with MSN
	  Internet Access 5.1. Please run setup again. If this problem continues, the
	  please contact MSN Technical Support at 1-877-635-7019.
	
	CAUSE
	=====
	
	This behavior can occur if previous versions of MSN were incorrectly installed.
	Or the install fails when it tries to install MSN 5.1.
	
	RESOLUTION
	==========
	
	Delete the MSN folder in Program Files > Online Services.
	
	- In Windows 95 or 98
	
	  1. Click Start, select Programs and then click Windows Explorer.
	
	  2. In the Program Files folder, open the Online Services (or the Online~1)
	     folder.
	
	  3. If the floder is named Online~1, rename it Online Services.
	
	  4. Look for the MSN50 folder and delete it.
	
	- In Windows 2000
	
	  1. Click Start, select Programs, select Accessories and then click Windows
	     Explorer.
	
	  2. In the Program Files folder, open the Online Services folder.
	
	  3. Look for the MSN50 folder and delete it.
	
	- Insert the CD to install or begin the program download a second time.
	
	- When the install detects that 5.1 has been previously installed, select yes
	  to install over the previous version of 5.1.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin2000 kbOSWin98 kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN510 kbMSN500
	Version           : WINDOWS:5.0,5.1; Win2000:95,98; :
	Issue type        : kbprb
	
	=============================================================================
	
