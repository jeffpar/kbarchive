---
layout: page
title: "Q80279: MS-DOS Window on 8514/a or SuperVGA Monitor Is Small"
permalink: kb/080/Q80279/
---

## Q80279: MS-DOS Window on 8514/a or SuperVGA Monitor Is Small

	Article: Q80279
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use an 8514/a or other SuperVGA type display and place the MS-DOS
	Prompt or an MS-DOS-based application in a window in Windows 3.0 enhanced mode,
	the window and the system font are small.
	
	Modifying an entry in the [386Enh] section of the SYSTEM.INI file may make this
	window larger and the font more readable.
	
	MORE INFORMATION
	================
	
	Windows supplies a number of "system" fonts for use in MS-DOS and Windows
	applications. The default fonts for use in a windowed MS-DOS application are
	EGA40WOA.FON, EGA80WOA.FON, CGA80WOA.FON and CGA40WOA.FON.
	
	When the system fonts intended for EGA are used in a windowed MS-DOS application,
	they show up very small because they are intended for a lower resolution screen
	than the SuperVGA or 8514/a.
	
	If the following lines appear in the [386Enh] section of the SYSTEM.INI file
	
	     EGA80WOA.FON=EGA80WOA.FON
	     EGA40WOA.FON=EGA40WOA.FON
	
	you should change them to:
	
	     EGA80WOA.FON=8514FIX.FON
	     EGA40WOA.FON=8514FIX.FON
	
	Once these modifications have been made, you must restart Windows.
	
	The 8514FIX.FON file should be in the Windows SYSTEM directory. If it is not, use
	the EXPAND.EXE utility to transfer it from the original Windows 3.0 disks.
	
	Additional query words: 3.00 3.00a Small Fonts DOS Super VGA 1024 768
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
