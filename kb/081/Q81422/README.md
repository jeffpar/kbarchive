---
layout: page
title: "Q81422: No Expanded Memory in MS-DOS-Based Applications w/ Windows 3.0"
permalink: /kb/081/Q81422/
---

## Q81422: No Expanded Memory in MS-DOS-Based Applications w/ Windows 3.0

{% raw %}

	Article: Q81422
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If MS-DOS-based applications running under Windows version 3.0 386 enhanced mode
	do not see any expanded memory, the EMS settings in the PIF file may need to be
	increased. Increasing the EMS-required above 700K in the PIF Advanced Options
	box may allow the applications to use expanded memory. The following is an
	example of increasing the EMS settings:
	
	  Settings                Required       Desired
	  ----------------------------------------------
	
	  Default settings:       0K             1024K
	  Increased settings:     1024K          2048K
	
	MORE INFORMATION
	================
	
	EMS Settings
	------------
	
	The EMS settings must increased because of the way expanded memory is counted in
	Microsoft Windows version 3.0. Windows 3.0 supports LIM version 4.0 expanded
	memory. LIM 4.0 expanded memory counts conventional memory as expanded in a
	virtual machine.
	
	MS-DOS-based applications use only LIM version 3.2 expanded memory. LIM 3.2
	expanded memory does not count the conventional memory that it operates in. As a
	result, the MS-DOS-based application displays approximately 400K less expanded
	memory than is allocated through the Advanced PIF settings.
	
	The difference between how LIM 3.2 and LIM 4.0 memory is counted results in the
	higher EMS settings under Windows 3.0 than would normally be expected.
	
	Hardware Considerations
	-----------------------
	
	Note that modifying the Advanced PIF settings cannot override hardware or
	software conflicts. It may be necessary to use an EMMEXCLUDE statement to
	prevent the EMS page frame from conflicting with network cards or other hardware
	in the system. A 64K contiguous block of upper memory is required for windows to
	create an expanded memory page frame.
	
	Additional Considerations
	-------------------------
	
	There is a problem with the Expanded Memory Manager in Windows 3.0. If the
	minimum EMS required is set to above 0, Windows will not release this memory
	back to the minimum memory size pool. To work around this, set the minimum EMS
	required to 0. This forces Windows to use memory from the Global EMS Memory Pool
	(memory it releases when it doesn't need it).
	
	Microsoft has confirmed this to be a problem in Microsoft Windows version 3.0.
	This problem is corrected in version 3.1.
	
	Additional query words: appnote 3.00 3.00a 3.0 3.0a S12782 softlib
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
