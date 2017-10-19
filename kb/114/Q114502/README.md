---
layout: page
title: "Q114502: FIX: Error Occurs When Previewing an Untransported DOS Report"
permalink: /kb/114/Q114502/
---

## Q114502: FIX: Error Occurs When Previewing an Untransported DOS Report

	Article: Q114502
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; WINDOWS:2.5b,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp kbvfp500fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a FoxPro for Windows .EXE file, untransported FoxPro for MS-DOS reports will
	cause an "Internal Consistency Error" message when the report is being previewed
	and the horizontal scroll bar is clicked.
	
	RESOLUTION
	==========
	
	Transport the report to the current platform.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. At the MS-DOS prompt, type the following commands:
	
	         C:
	         CD\ 
	         MD rpt_test
	
	2. Start FoxPro 2.0 or 2.5x for MS-DOS.
	
	3. Create a table with one memo field and populate the field with data. In
	  FoxPro for MS-DOS, type the following commands in the Command window:
	
	         SET DEFAULT TO c:\rpt_test
	         CREATE TABLE test_tbl (field1 M)
	         INSERT INTO test_tbl (field1);
	             VALUES (REPLICATE('W',500))
	         CREATE REPORT test_rpt.frx
	
	4. From the Report menu, choose Page Layout. In the Page Layout dialog box, set
	  the right margin column to 200.
	
	  NOTE: Setting the Right margin column to 200 is not necessary to generate the
	  error. However, it guarantees that the Preview mode will display a horizontal
	  scroll bar using video drivers with resolutions up to 1024 x 768.
	
	5. From the Report menu, choose Quick Report, and choose the OK button to create
	  a quick report.
	
	6. Move the mouse cursor to the right edge of TEST_TBL.FIELD1 and hold down the
	  CTRL key. Drag the mouse to the right edge of the report. You probably won't
	  be able to see the right edge of the report form by default. However, when
	  the mouse is moved to the right edge of the report, the report will scroll
	  until the far edge is reached.
	
	7. Save the report. When prompted to save the environment, choose Yes.
	
	8. Quit FoxPro for MS-DOS and start FoxPro for Windows.
	
	9. Type the following commands in the Command window:
	
	         SET DEFAULT TO c:\rpt_test
	         CREATE PROJECT test_app
	         MODIFY COMMAND main.prg
	
	10. Enter the following line of code in MAIN.PRG. Then save and close MAIN.PRG.
	
	        REPORT FORM test_rpt PREVIEW ENVIRONMENT
	
	11. Add MAIN.PRG to the TEST_APP project by choosing the Add button. Choose the
	  Build button.
	
	12. In the Build Option dialog box, select the Build Executable radio button.
	  Then choose the OK button. Accept the defaults, and choose the Build button.
	
	13. After the build process has been completed, quit FoxPro for Windows.
	
	14. Go to Program Manager and choose Run from the File menu. In the Command Line
	  field, type the following, and then choose OK:
	
	        c:\rpt_test\test_app.exe
	
	15. When the Page Preview window appears, click the horizontal scroll bar at the
	  bottom of the window.
	
	The error message appears, followed by a general protection (GP) fault.
	
	Additional query words: gpf ice errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg kbvfp kbvfp500fix 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro260 kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.5b; WINDOWS:2.5b,2.6,2.6a,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
