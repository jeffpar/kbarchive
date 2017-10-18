---
layout: page
title: "Q105227: Colors Display Strangely with Dell 16 Color Driver"
permalink: kb/105/Q105227/
---

## Q105227: Colors Display Strangely with Dell 16 Color Driver

	Article: Q105227
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Setup programs for the applications listed above do not correctly detect the
	Dell S3 16-color video driver. If this driver is installed, the Setup programs
	for the applications listed above incorrectly assume that your system is running
	in 256-color mode, and they install 256-color versions of the bitmap files
	included with the application. As a result, these programs display incorrectly.
	
	Microsoft has confirmed this to be a problem in Schubert, Strauss, Stravinsky,
	and Mozart version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	To eliminate this problem, use one of the two following procedures:
	
	1. If your video card supports 256 colors, install a compatible 256-color
	  driver. When you restart Windows in 256-color mode, Mozart should display
	  correctly.
	
	  -or-
	
	2. If your video card is not capable of running in 256-color mode, install the
	  standard Windows VGA video driver. Then restart Windows and reinstall the
	  applications listed above. Setup will correctly detect that you are running
	  in 16-color mode, and will install 16-color versions of the bitmap files.
	
	NOTE: The following statement is included in the system requirements listed on
	the back of the Schubert, Strauss, and Mozart box:
	
	  VGA display (display capable of 256 colors recommended).
	
	MORE INFORMATION
	================
	
	The following information is extracted from the Mozart readme file.
	
	  Some screen drivers that are capable of 256 colors appear to the Mozart
	  program as if they are in 256-color mode when they are running in 16-color
	  mode. When running with these drivers in 16-color mode, the product will look
	  very strange because the colors will be wrong. To solve the problem, run
	  Windows Setup to change to 256-color mode.
	
	The above information is also in the Schubert readme file.
	
	Additional query words: multi media multimedia multi-media screen monitor video incorrect corruption strange weird Viewer 2.0 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
