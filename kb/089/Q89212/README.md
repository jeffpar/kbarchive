---
layout: page
title: "Q89212: Maintenance Mode Setup Can Cause Corrupted WIN.COM"
permalink: /kb/089/Q89212/
---

## Q89212: Maintenance Mode Setup Can Cause Corrupted WIN.COM

{% raw %}

	Article: Q89212
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MS-DOS-based maintenance mode of Windows 3.1 Setup may create a zero length
	WIN.COM file if you change the video driver on a network installation of
	Windows. This occurs only if the SETUP.EXE and SETUP.INF files have been copied
	to and run from the user directory.
	
	MORE INFORMATION
	================
	
	On a network installation of Windows, the Setup files should remain in the
	shared directory on the network server. If WIN.COM has been corrupted, you
	cannot start Windows.
	
	The corrupted WIN.COM can be restored by completing the following steps:
	
	1. Delete WIN.COM from the user directory.
	
	2. Delete the SETUP.INF and SETUP.EXE files from the user directory.
	
	3. Run Setup from the user's directory. Note: The shared directory has to be in
	  the MS-DOS Path.
	
	4. Select the appropriate video driver.
	
	After completing these steps, a new WIN.COM is generated and the Windows
	installation is functional again.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
