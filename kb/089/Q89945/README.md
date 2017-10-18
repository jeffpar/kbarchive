---
layout: page
title: "Q89945: Windows 3.1 Automated Setup May Show Incorrect Machine Type"
permalink: kb/089/Q89945/
---

## Q89945: Windows 3.1 Automated Setup May Show Incorrect Machine Type

	Article: Q89945
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the automated Setup feature to install Windows 3.1, the machine
	type appears as an "MS-DOS System" in the System Information screen, regardless
	of the machine type specified in the SETUP.SHH file. However, Windows does set
	up properly and the correct machine type installs. (You can verify this by
	running the maintenance mode of Setup after installation.)
	
	MORE INFORMATION
	================
	
	The automated Setup feature of Windows 3.1 allows you to set up a large number
	of identical machines more efficiently. The choices that you would normally make
	during installation default to the value specified in the SETUP.SHH file. All
	system information values specified in the SETUP.SHH file appear correctly
	during installation except for the machine type. You can accept the
	configuration and continue, and the correct machine type (the one specified in
	the SETUP.SHH) is installed.
	
	To verify that Windows was installed correctly, run the maintenance mode of Setup
	after installation.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
