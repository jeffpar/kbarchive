---
layout: page
title: "Q162410: FIX: Report Page Headers Print on Summary Page"
permalink: kb/162/Q162410/
---

## Q162410: FIX: Report Page Headers Print on Summary Page

	Article: Q162410
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbprint kbtool kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a report has a summary band that prints on a separate page, the page header
	prints on the summary page. Page headers do not print on the summary page in
	Visual FoxPro Version 3.0.
	
	RESOLUTION
	==========
	
	Place the following expression in the "Print When" for each label or field in
	the page header.
	
	     !EOF()
	
	Select the "Remove line if blank" box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a quick report with the customer table.
	
	2. Create a summary band and check new page.
	
	3. Place the label "this is a test" in the summary band.
	
	4. Preview the report.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbprint kbtool kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
