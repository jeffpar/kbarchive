---
layout: page
title: "Q84535: Roland MPU IMC Sound Card Driver Not Available"
permalink: kb/084/Q84535/
---

## Q84535: Roland MPU IMC Sound Card Driver Not Available

	Article: Q84535
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your computer has a Roland Micro Channel MPU IMC sound card, it may stop
	responding (hang) during installation of the Windows 3.1 Roland MPU-401 driver
	after you specify the IRQ for the driver to use.
	
	CAUSE
	=====
	
	The Roland Micro Channel MPU IMC sound card does not operate with the Roland
	MPU-401 driver included with Windows version 3.1.
	
	RESOLUTION
	==========
	
	Roland now offers a driver for the Micro Channel version of this card. It is
	available free of charge from Roland Technical Support/Customer Service.
	
	MORE INFORMATION
	================
	
	Roland manufactures a Micro Channel equivalent to its MPU-401 card, called the
	MPU IMC. Even though it is considered MPU-401-compatible, it does not work with
	the MPU-401 driver included with Windows 3.1. The Windows driver was written for
	an ISA card and cannot be used with a Micro Channel card.
	
	To obtain the correct driver for this card, contact Roland Technical
	Support/Customer Service.
	
	The products included here are manufactured by Roland, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty lock up freeze MPU401
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
