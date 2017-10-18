---
layout: page
title: "Q81520: Using Golden Bow's Vcache with Windows 3.0"
permalink: kb/081/Q81520/
---

## Q81520: Using Golden Bow's Vcache with Windows 3.0

	Article: Q81520
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Vcache is a caching utility made by Golden Bow that is similar to Microsoft's
	SMARTDRV.SYS. To run effectively with Windows 3.0 in enhanced mode or to run on
	a network in all modes, special parameters are required on the Vcache command
	line.
	
	MORE INFORMATION
	================
	
	When Windows 3.0 is being run on a standalone machine in enhanced mode or in any
	mode on a network, the Vcache default parameter T=2 will need to be disabled and
	set to T=0,(delayed writes = off) to allow normal printing operations. This
	switch is effective for Vcache versions 3.x through 5.06.
	
	According to Golden Bow, this parameter change is necessary because printing and
	background transfer operations being initiated by Vcache cannot be detected by
	either Windows or the networking software.
	
	Using Vcache AT with Windows 2.x
	--------------------------------
	
	Vcache AT is not compatible with some earlier versions of Windows. For example,
	running Vcache AT with Windows versions 2.03, 2.1, or 2.11 generates a fatal
	exit code. The solution is to replace Vcache with the SMARTDRV.SYS file found on
	the Windows disks.
	
	For further information, please contact Golden Bow at (619) 483 0901.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 2.x 3.0 3.0a Veecash v-cashe v-cache golden-bow goldenbow
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a
	Version           : WINDOWS:2.x,3.0,3.0a
	
	=============================================================================
	
