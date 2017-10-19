---
layout: page
title: "Q156788: FIX: Report Print Preview Illegible Under Windows NT"
permalink: /kb/156/Q156788/
---

## Q156788: FIX: Report Print Preview Illegible Under Windows NT

	Article: Q156788
	Product(s): Microsoft FoxPro
	Version(s): 2.6a 3.0 3.0b 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500bug kbVS97sp2fix
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Print Preview to view a report in FoxPro running under Windows NT,
	the text in the report is difficult to read when using a low- resolution video
	driver.
	
	RESOLUTION
	==========
	
	One of the following methods can be used to resolve this problem:
	
	- The quality of the Print Preview appears to be directly related to the
	  current video resolution. The higher the video resolution, the better the
	  quality of the Print Preview. Typically, video resolutions of 1024x768 or
	  higher yield satisfactory Print Preview quality.
	
	  -or-
	
	- Create two reports: one for Print Previews and one for printing. In the
	  report for Print Preview, increase the font size so that it is readable in
	  Print Preview mode. Note that there is less information placed on each page
	  in Print Preview mode, which results in the Print Preview showing more pages
	  than the report that prints to the printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug is fixed for Visual FoxPro versions 5.x with
	the Visual Studio 97 Service Pack 2. If using a version of FoxPro or Visual
	FoxPro prior to 5.x, use the resolutions provided in this article.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Your system should be running Windows NT 3.51 or higher, and should be configured
	with a video resolution of 640x480.
	
	1. Create a new report, or open an existing report.
	
	2. Preview the report. Note that the text in the report is illegible.
	
	
	Additional query words: kbvfp300 kbvfp300b kbvfp500 kbvfp500a
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500bug kbVS97sp2fix 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : 2.6a 3.0 3.0b 5.0 5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
