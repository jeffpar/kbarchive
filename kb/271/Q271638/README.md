---
layout: page
title: "Q271638: BUG: Report Preview Unreadable When Zoom Is Set at 75 Percent"
permalink: /kb/271/Q271638/
---

## Q271638: BUG: Report Preview Unreadable When Zoom Is Set at 75 Percent

	Article: Q271638
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbReportWriter kbvfp300 kbvfp300b kbvfp300bBUG kbvfp500 kbvfp500a kb
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you preview report output in the Print Preview window and the Zoom is set
	to 75 percent, the data in the preview become unreadable after you scroll to the
	bottom of the page. The letters appear broken or distorted.
	
	RESOLUTION
	==========
	
	Sometimes if you press the Home, Page Up, or Page Down keys they refresh the
	Print Preview window and eliminate some of the distortion. However, this may not
	help in all cases.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new report. Use any font you desire, but make sure that the report
	  contains enough data so that you need to scroll to the bottom of page to see
	  it all.
	
	2. Preview the report with Zoom at 100 percent. Scroll to the bottom, and note
	  that you can read the report.
	
	3. Scroll back to the top, change the Zoom to 75 percent, and then scroll to the
	  bottom of the page. Note that the data at the bottom of the page is
	  unreadable. Press one of the keys mentioned in the "Resolution" section and
	  the display may improve.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbReportWriter kbvfp300 kbvfp300b kbvfp300bBUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
