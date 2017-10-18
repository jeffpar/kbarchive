---
layout: page
title: "Q79909: Entertainment Pack Volumes 2 and 3 Setup Hangs in Real Mode"
permalink: kb/079/Q79909/
---

## Q79909: Entertainment Pack Volumes 2 and 3 Setup Hangs in Real Mode

	Article: Q79909
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	To run Microsoft Entertainment Pack for Windows volumes 2 and 3, make sure
	Windows is installed in standard or enhanced mode. When setup for either volume
	is run on a machine running in real-mode Windows, the floppy drive will be
	accessed momentarily, the computer will hang, and the drive light will remain
	on.
	
	MORE INFORMATION
	================
	
	Before running, the Windows Entertainment Pack volume 1 and 2 Setup programs do
	not check to see what mode Windows is running. In addition, the Setup programs
	do not issue an error message when they determine that Windows is running in
	real mode.
	
	To run Setup successfully, Windows must be run in standard or enhanced mode.
	
	Microsoft has confirmed this to be a problem in the Windows Entertainment Pack
	version 1.0 volumes 2 and 3. We are researching this problem and will post new
	information here as it becomes available.
	
	Additional query words: 1.00 set issue wep
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
