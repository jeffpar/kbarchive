---
layout: page
title: "Q88182: Windows: PC Complete Scanner May Not Release COM Port"
permalink: kb/088/Q88182/
---

## Q88182: Windows: PC Complete Scanner May Not Release COM Port

	Article: Q88182
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Complete PC Scanner and Complete PC Communicator modem sharing one
	communications (COM) port. When you switch from the scanner to the modem and
	back again in Microsoft Windows 3.1 enhanced mode, the COM port isn't released.
	
	NOTE: The Complete PC Scanner can be plugged into the back of the Complete PC
	Communicator; allowing the modem and scanner to share one COM port.
	
	RESOLUTION
	==========
	
	Complete PC released the following a version of the scanner driver for its
	scanner to work correctly in 386 enhanced mode of Windows 3.1.
	
	  Filename:       CPCSCAN2.SYS
	  File Date:      5/27/92
	  File Size:      10244 bytes
	  Version Number: 2.1
	
	MORE INFORMATION
	================
	
	According to Complete PC Technical Support, you can install the new driver as
	follows:
	
	1. Download the new file.
	
	2. Exit Windows.
	
	3. Rename the new file to CPCSCAN.SYS.
	
	4. Replace the old driver with the new one by copying it into the Windows\SYSTEM
	  subdirectory.
	
	5. Restart Windows.
	
	If this does not correct the problem, Complete PC technical support suggests you
	reinstall the Complete PC Scanner using the separate interface card that comes
	with the scanner, and set it for a separate COM port.
	
	The PC Complete products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 comm 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
