---
layout: page
title: "Q136691: GenMenu Differences Between FoxPro 2.x and Visual FoxPro"
permalink: kb/136/Q136691/
---

## Q136691: GenMenu Differences Between FoxPro 2.x and Visual FoxPro

	Article: Q136691
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	GenMenu.prg has been enhanced in Visual FoxPro by the addition of OLE support
	and long filename support. The menu file format (.mnx) is unchanged in Visual
	FoxPro. All .mnx and .mpr files created in FoxPro versions 2.x will work in
	Visual FoxPro with no changes.
	
	MORE INFORMATION
	================
	
	Because Visual FoxPro supports in-place editing of OLE objects, the NEGOTIATE
	clause was added to the DEFINE PAD command to enable the developer to specify
	where, if anywhere, a menu item should appear when an OLE server such as
	Microsoft Excel has been activated for in-place editing. GenMenu.prg generates
	the appropriate NEGOTIATE clause. It gets this information from the value stored
	in the Location field of the .mnx file created by the Menu Designer.
	
	Previous restrictions on .mnx and .mpr filename length have been updated for the
	long filenames supported by Windows 95 and Windows NT.
	
	Detailed information can be found in the revision history at the end of
	GenMenu.prg.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
