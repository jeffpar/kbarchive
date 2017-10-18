---
layout: page
title: "Q82455: EMS=0 Parameter Hangs 386MAXs ASQ Program in Standard Mode"
permalink: kb/082/Q82455/
---

## Q82455: EMS=0 Parameter Hangs 386MAXs ASQ Program in Standard Mode

	Article: Q82455
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the parameter EMS=0 with third-party memory managers, ASQ stops
	responding (hangs). ASQ is 386MAXs' system analyzer program. This only occurs
	when ASQ is running from MS-DOS Prompt in full-screen mode in Microsoft
	Windowsin standard mode.
	
	Third-party memory managers that have this parameter include Qualitas 386MAX
	version 6.0, Qualitas 386MAX version 6.1, and BlueMAX.
	
	RESOLUTION
	==========
	
	To run successfully with Windows 3.1 and 386MAX, do one of the following:
	
	- Use the NOFRAME parameter instead of EMS=0. This provides the same
	  functionality with 386MAX.
	
	- Another alternative is to use ASQ outside of Windows 3.1.
	
	MORE INFORMATION
	================
	
	The 386MAX and BlueMAX parameter EMS=0 is used when no EMS memory is needed.
	This provides more upper memory block (UMB) area because no EMS page frame is
	set up. For some reason, when this is done, ASQ hangs if run in standard mode
	from MS-DOS Prompt in full-screen mode.
	
	This can be corrected by running ASQ outside of Windows. This is advisable anyway
	because better information is obtained. Another solution is to use the 386MAX
	parameter NOFRAME instead. This is also advisable because, in theory, it allows
	you to run EMS applications that do not require a page frame. It also provides
	the same amount of extra UMB memory.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Contact Qualitas for more information about 386MAX.
	
	
	Additional query words: 3.10 3.1 386 to the max 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
