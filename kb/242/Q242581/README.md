---
layout: page
title: "Q242581: Y2K Analyzer Tool Does Not Recognize Schedule+ 7.0a"
permalink: kb/242/Q242581/
---

## Q242581: Y2K Analyzer Tool Does Not Recognize Schedule+ 7.0a

	Article: Q242581
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Year 2000 Product Analyzer (Y2K Analyzer) tool identifies
	Microsoft Schedule+ version 7.0a as Schedule+ version 7.0. You should check
	which version of Schedule+ 7.0 you are running by clicking About Microsoft
	Schedule+ on the Help menu.
	
	If you have version 7.0a and you apply the software update for version 7.0, you
	will receive the following error message:
	
	  Schedule+ could not load a required dll. Try running Schedule+ setup again.
	
	CAUSE
	=====
	
	There are three separate Y2K software updates for Schedule+, one for each of the
	three versions, 7.0, 7.0a, and 7.5. Applying the incorrect update causes this
	problem.
	
	RESOLUTION
	==========
	
	Reinstall Schedule+ from its original source, and verify the correct version by
	clicking "About Microsoft Schedule+" on the Help menu. Then apply the correct
	software update for that version.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Y2K Analyzer is a tool to help assess the readiness of your computer system
	by conducting an inventory of Microsoft software installed on your computer. The
	Y2K Analyzer scans your hard drive and creates a report listing the Y2K
	readiness status of all Microsoft software found on your computer.
	
	The Y2K Analyzer mistakenly reports Schedule+ version 7.0a as Schedule+ version
	7.0. This is significant because there are separate Y2K updates for Schedule+
	7.0, 7.0a, and 7.5. If the 7.0 update is incorrectly applied to version 7.0a,
	the error condition described above occurs.
	
	REFERENCES
	==========
	
	For additional information on obtaining the Year 2000 software updates for
	Schedule+, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q197195 XCLN: Schedule+ Two-Digit Date Assumes Twentieth Century
	
	For more information about how Microsoft products are affected by year 2000 (Y2K)
	issues, please see the following Microsoft World Wide Web site:
	
	  http://www.microsoft.com/technet/year2k/product/product.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700a
	Version           : WINDOWS:7.0a
	Issue type        : kbprb
	
	=============================================================================
	
