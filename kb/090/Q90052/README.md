---
layout: page
title: "Q90052: Banyan VINES Err Msg: The Switch Has Been Prevented. Cannot..."
permalink: /kb/090/Q90052/
---

## Q90052: Banyan VINES Err Msg: The Switch Has Been Prevented. Cannot...

	Article: Q90052
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Windows version 3.1 in 386 Enhanced or Standard Mode while connected
	to Banyan Vines network version 4.10 or 5.00, and you attempt to run an
	MS-DOS-based application, the following error message may be displayed:
	
	  The switch has been prevented. Cannot start application.
	
	CAUSE
	=====
	
	This error message may occur because Windows has not been set up with the proper
	network driver, or is set up for "No Network" (without the quotation marks).
	
	WORKAROUND
	==========
	
	After receiving the above error message, check the maintenance mode of the
	Windows Setup program, and make sure the system setting for Network is Banyan
	VINES (and the appropriate version). If it is not, change the setting using
	either of the following methods:
	
	1. Choose the Windows Setup icon from the Main group in Program Manager.
	
	2. From the Options menu, select "Change System Settings..."
	
	3. Select "Banyan VINES (Version 4.1 or Version 5.0)" from the available
	  choices, and follow the instructions from the Setup program.
	
	- OR -
	
	1. Exit Windows.
	
	2. Change to the current Windows subdirectory, and type
	
	  setup
	
	3. Use the arrow keys to highlight the network information, and press the ENTER
	  key.
	
	4. Select "Banyan VINES (version 4.1)" and press ENTER.
	
	5. Press ENTER to accept the configuration, then follow the instructions from
	  the Setup program.
	
	If Banyan VINES (Version 4.1) is your selected network, and you still receive the
	error message above, then your setup probably failed. Try removing and
	reinstalling support for network as follows:
	
	1. Choose the Windows Setup icon from the Main group in Program Manager.
	
	2. From the Options menu, select "Change System Settings..."
	
	3. Select "No Network Installed" from the available choices, then follow the
	  instructions from the Setup program.
	
	4. Run Windows Setup again.
	
	5. From the Options menu, select "Change System Settings..."
	
	6. Select "Banyan VINES (version 4.1)" from the available choices, then follow
	  the instructions from the Setup program.
	
	The product included here is manufactured by Banyan, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
