---
layout: page
title: "Q90932: PC Tools May Prevent WFWG From Starting in Enhanced Mode"
permalink: kb/090/Q90932/
---

## Q90932: PC Tools May Prevent WFWG From Starting in Enhanced Mode

	Article: Q90932
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups may not start in 386 enhanced mode if the PC Tools VxD
	VDMAD.386 file is present in either the WINDOWS or WINDOWS\SYSTEM directory.
	
	To correct this problem, remove the PC Tools VDMAD.386 file and expand the
	Windows for Workgroups VDMAD.386 file from the original disks.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups and PC Tools version 7.x use a VxD called VDMAD.386. This
	file should reside in the WINDOWS\SYSTEM directory. This file is referenced in
	the SYSTEM.INI file's [386Enh] section on the line:
	
	     DEVICE=VDMAD.386
	
	The Windows for Workgroups VxD can be identified by its date, which should be
	10/01/92, and its file size, which should be 12246 bytes.
	
	When PC Tools version 7.x is installed after Windows for Workgroups, the PC Tools
	installation may overwrite the Windows for Workgroups VxD file VDMAD.386 with
	the PC Tools VxD file VDMAD.386. If this is the case, delete or rename the
	VDMAD.386 file in the WINDOWS\SYSTEM directory and expand the Windows for
	Workgroups VDMAD.386 file from the original disks.
	
	If the PC Tools VxD VDMAD.386 file is located in the WINDOWS directory, Windows
	for Workgroups may load this file instead of the correct Windows for Workgroups
	VxD from the WINDOWS\SYSTEM directory. If this is the case, first verify that
	the correct VDMAD.386 file is located in the WINDOWS\SYSTEM directory (by
	checking the date), and then delete or rename the VDMAD.386 located in the
	WINDOWS directory.
	
	PC Tools is manufactured by Central Point Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.1 wfwg pc-tools
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
