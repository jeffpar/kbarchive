---
layout: page
title: "Q84519: Micronet SCSI Controller Requires MNDOSM.SYS"
permalink: /kb/084/Q84519/
---

## Q84519: Micronet SCSI Controller Requires MNDOSM.SYS

	Article: Q84519
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running a Micronet SCSI controller with EMM386.EXE version 4.44 may lead to loss
	of data when running Microsoft Windows operating system 3.1 or MS-DOS- based
	applications.
	
	RESOLUTION
	==========
	
	MNDOSM.SYS comes with the SCSI controller and should be loaded in the CONFIG.SYS
	file to correct this problem.
	
	You should have received this driver with your controller card. One exception
	would be when the SCSI controller is used on an OS/2 dual boot machine. You may
	have only received the OS/2 driver. Contact Micronet Technical Support to
	receive the driver for MS-DOS.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 3.00a 3.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
