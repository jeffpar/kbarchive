---
layout: page
title: "Q299074: BETA FIX: Blank Reports with High Contrast Color Scheme"
permalink: /kb/299/Q299074/
---

## Q299074: BETA FIX: Blank Reports with High Contrast Color Scheme

	Article: Q299074
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbReportWriter kbvfp500bug kbvfp600bug kbGrpDSFox kbCodeSnippet kbvf
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the computer is set to use the Microsoft Windows High Contrast Black color
	scheme, reports that are previewed or printed from Visual FoxPro (VFP) 5.0 and
	6.0 may be blank.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Configure the computer that is running Microsoft Windows to use the High
	  Contrast Black color scheme. To do this, follow these steps:
	
	  1. Right-click the Windows desktop and click Properties.
	
	  2. In the Display Properties dialog box, click the Appearance tab.
	
	  3. Select High Contrast Black and click OK.
	
	2. In VFP 5.0 or 6.0, paste the following code in new program. Save and run the
	  program (the name is unimportant).
	
	  *!* Q299074 FIX: Blank Previewed and Printed Reports With High Contrast Black Color Scheme
	  LOCAL lni
	  ERASE Q299074_REPO.FR?
	  CREATE CURSOR Q299074 (f1 I, f2 c(50))
	  FOR lni = 1 TO 1
	  	INSERT INTO Q299074 VALUES (lni, '')
	  ENDFOR
	
	  CREATE REPORT Q299074_REPRO FROM Q299074
	  REPLACE ALL f2 WITH 'Report as created ' + TTOC(DATETIME())
	  REPORT FORM Q299074_REPRO PREVIEW
	  REPORT FORM Q299074_REPRO TO PRINTER
	
	  KEYB '{ctrl+a}'
	  MODI REPO Q299074_REPRO
	
	  REPLACE ALL f2 WITH 'Report w/ font changes made ' + TTOC(DATETIME())
	  REPORT FORM Q299074_REPRO PREVIEW
	  REPORT FORM Q299074_REPRO TO PRINTER
	
	3. A report previews. Note that the text appears as white with a black
	  background, as expected from the scheme. On the Print Preview toolbar, click
	  Close to print the report.
	
	4. In the report designer that displays, all of the items on the report are
	  selected. On the Format menu, click Font. Click OK in the Font dialog box,
	  then press CTRL+W to close and save the report.
	
	5. The preview again displays, but this time none of the objects are visible. On
	  the Print Preview toolbar, click Close to print the report a second time.
	
	Note that the first printing of the report (where the preview objects were
	visible) is blank. The second printing of the report (where the preview objects
	were not visible) prints correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbReportWriter kbvfp500bug kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fix kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
