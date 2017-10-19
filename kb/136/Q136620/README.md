---
layout: page
title: "Q136620: Benefit of Storing Printer Info in a Report Table (.FRX File)"
permalink: /kb/136/Q136620/
---

## Q136620: Benefit of Storing Printer Info in a Report Table (.FRX File)

	Article: Q136620
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
	
	This article explains the benefit of storing printer information in the Report
	table (.frx file).
	
	MORE INFORMATION
	================
	
	In FoxPro version 2.x, printer information is stored as binary format in the Tag
	and Tag2 memo fields in the .frx file. There is no easy way for the developer to
	change the orientation, paper size, and so on of the report once the .frx file
	has been created.
	
	In Visual FoxPro, this information is now stored as text in the Expr field of the
	first record in the .frx file. Now, for example, if you need to change the
	orientation of the report from portrait to landscape, you can look for the
	"ORIENTATION=" setting in the first record of the Expr memo field, and change
	the orientation from 0 to 1.
	
	To see what the valid values are for a specified printer setting, use the
	PRTINFO() function. For more information about the PRTINFO() function, search
	for PTRINFO in the Help menu.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
