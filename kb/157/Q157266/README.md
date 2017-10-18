---
layout: page
title: "Q157266: Msbatch.inf Parameters: Enabling and Disabling Dual-Boot"
permalink: kb/157/Q157266/
---

## Q157266: Msbatch.inf Parameters: Enabling and Disabling Dual-Boot

	Article: Q157266
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how enable and disable dual-booting using the Msbatch.inf
	file for batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	To Enable Dual-Booting
	----------------------
	
	In the Msbatch.inf file, modify the [Install] section to include the following
	line:
	
	  " UpdateINIs=UpdateMSDosSys" (without the quotation marks)
	
	Also, add the following section and key:
	
	  " [UpdateMSDosSys]
	  %30%\msdos.sys,Options,,"BootMulti=1"" (without the quotation marks)
	
	To Disable Dual-Booting
	-----------------------
	
	In the Msbatch.inf file, modify the [Install] section to include the following
	line:
	
	  " UpdateINIs=UpdateMSDosSys" (without the quotation marks)
	
	Also, add the following section and keys:
	
	  " [UpdateMSDosSys]
	  %30%\msdos.sys,Options,,"BootMulti=0"" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
