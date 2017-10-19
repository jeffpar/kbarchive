---
layout: page
title: "Q138666: HOWTO: Browse on Demand with Visual C++ Version 4.0"
permalink: /kb/138/Q138666/
---

## Q138666: HOWTO: Browse on Demand with Visual C++ Version 4.0

	Article: Q138666
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0,5.0,6.0;
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC400 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Browsing on demand works differently in Visual C++, versions 4.0 and later, from
	previous versions. If you do not have browse information generated when you
	attempt to use the browser in Visual C++ 4.0 and later, you get a message
	stating that there is no browse information for the project. Then the project is
	rebuilt accordingly to allow you to browse your project information.
	
	One other option is to always build the individual source browser files (.sbr)
	during your builds without generating the combined browser file (.bsc). Then run
	Bscmake.exe as a tool from the Tools menu. This article describes the steps
	required to do this.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. On the Build menu, click Settings to bring up the Project Settings dialog
	  box.
	
	2. Select the desired target in the Settings For tree view.
	
	3. Click the C/C++ tab, and select the Generate browse info check box. This will
	  generate an .sbr file corresponding to each source file. Ensure that the
	  "Build browse info file" check box in the Browse Info tab is cleared.
	
	4. Click OK to accept.
	
	5. On the Tools menu, click Customize to bring the Customize dialog box. Click
	  the Tools tab. In Visual C++, version 4.0, click Add. In Visual C++, versions
	  5.0 and 6.0, click the blank line at the bottom of the Menu Contents list and
	  type &Bscmake.
	
	6. Browse for the Bscmake.exe file. In Visual C++, versions 5.0 and 6.0, you can
	  click the ellipsis beside the Command box to do this.
	
	7. Fill in the fields for the tool as shown here:
	
	  Field                Value
	  -------------------------------------------------------------
	  Menu text            &Bscmake
	  Command              [Full path to BSCMAKE.EXE]\bscmake.exe
	  Arguments            /o$(TargetName).bsc /n *.sbr
	  Initial directory    $(TargetDir)
	
	  NOTE: You can select the custom arguments like $(TargetName) from the menu
	  provided on the right side of the edit box.
	
	8. In Visual C++, version 4.0, select "Redirect to Output Window", and click
	  Close, accepting this tool. In Visual C++, versions 5.0 and 6.0, select "Use
	  Output Window".
	
	NOTE: If you have been browsing the current .bsc file, you will have to close it
	before building a new .bsc file. On the Tools menu, click Close Browse Info
	File.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC400 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINNT:4.0,5.0,6.0;
	Issue type        : kbhowto
	
	=============================================================================
	
