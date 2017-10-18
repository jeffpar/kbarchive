---
layout: page
title: "Q137428: Not Enough Memory on 4-MB System When Setup Is Started Again"
permalink: kb/137/Q137428/
---

## Q137428: Not Enough Memory on 4-MB System When Setup Is Started Again

	Article: Q137428
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
	
	When you run Setup again from the MS-DOS prompt after your computer lost power
	(or you turned it off) while you were upgrading Windows version 3.x to Windows
	95, you may receive the following error message:
	
	  Not enough XMS memory to run Setup. Please free up <xxx> amount of XMS
	  and re-run Setup.
	
	CAUSE
	=====
	
	This problem can occur on computers with 4 MB of RAM if the computer loses power
	or is shut off while you are upgrading Windows 3.x to Windows 95. Depending on
	where in the installation process power is lost, Setup may have copied enough
	files to the Windows folder that the original version of Windows does not
	function correctly. When you run Setup from an MS-DOS prompt, a 4-MB computer
	may not have enough extended memory for Setup to run.
	
	RESOLUTION
	==========
	
	Disable all unnecessary programs and TSRs in the Config.sys and Autoexec.bat
	files. If you are running Setup from floppy disks or a flat directory, and no
	special drivers are necessary to start the computer, you can bypass the startup
	files and the loading of drivers by pressing the F5 key when you see the
	"Starting MS-DOS" message.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
