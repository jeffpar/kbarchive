---
layout: page
title: "Q84146: Xircom Pocket Ethernet Adapter Requires Updated Drivers"
permalink: /kb/084/Q84146/
---

## Q84146: Xircom Pocket Ethernet Adapter Requires Updated Drivers

	Article: Q84146
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use a Xircom pocket Ethernet card with Microsoft Windows operating system
	version 3.1 on a Novell network, you may experience printing problems if an
	outdated Xircom low-level driver was used during the WSGEN process. The latest
	drivers are dated 4/92.
	
	RESOLUTION
	==========
	
	To correct this problem, use one of the following workarounds:
	
	- Contact Xircom to obtain the IPX.COM file that Xircom has created with the
	  updated low-level driver for your particular Xircom adapter, or download this
	  file from the Xircom bulletin board service (BBS).
	
	  -or-
	
	- Contact Xircom to obtain the necessary updated PxShell.OBJ for your
	  particular Xircom adapter, or download this file from the Xircom BBS. Then,
	  generate a new IPX.COM file using the PxSHELL.OBJ file and the Windows 3.1
	  IPX.OBJ file. (The "x" in PxSHELL.OBJ varies depending on the card type.)
	
	NOTE: With the new low-level drivers, IPX is still version 3.1.
	
	Windows 3.0
	-----------
	
	The drivers for Windows 3.0 and 3.0a should be as follows:
	
	  Drivers         Networks        Versions
	  -------         --------        --------
	
	  IPXPA.COM       ArcNet          Version 1.03
	  IPXPE.COM       Ethernet        Version 4.01
	  SMARTIPX.COM    Token Ring      Version 1.03
	
	
	Xircom makes Ethernet and token ring adapters for laptop computers. For more
	information, call Xircom Technical Support.
	
	The products included here are manufactured by Xircom, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 zircom novell shellgen 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
