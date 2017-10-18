---
layout: page
title: "Q126453: PC Win: Err Msg: Cannot Find XXXXXXXX.DRV"
permalink: kb/126/Q126453/
---

## Q126453: PC Win: Err Msg: Cannot Find XXXXXXXX.DRV

	Article: Q126453
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print from versions 3.2 and 3.2a of Microsoft Mail for Windows,
	you may receive the following error message:
	
	  Cannot find xxxxxxxx.drv
	
	where xxxxxxxx is the name of the default printer driver.
	
	CAUSE
	=====
	
	This error message will occur if the printer driver is not in the working
	directory.
	
	RESOLUTION
	==========
	
	To check the location of the working directory:
	
	1. From Program Manager, select the Microsoft Mail for Windows icon.
	
	2. From the File menu, choose Properties.
	
	MORE INFORMATION
	================
	
	This error message will also occur if there is an older version of the printer
	driver contained in the working directory that is currently being used by the
	Windows system. This is true if there is a shared network Windows installation
	or shared network printing environment where there may be an older version of a
	printer driver in the network directory, but a newer driver on your local or
	user directory.
	
	
	Additional query words: 3.20 3.20a printing problem driver
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
