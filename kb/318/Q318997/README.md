---
layout: page
title: "Q318997: FIX: Report Form ASCII Clause Allows No White Space"
permalink: /kb/318/Q318997/
---

## Q318997: FIX: Report Form ASCII Clause Allows No White Space

	Article: Q318997
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the REPORT FORM ASCII clause in Visual FoxPro version 7.0, no white
	space is produced between the detail band and the page footer in the ASCII file
	that is created. This assumes that there is space between the detail band and
	the page footer on the report.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Paste the following code in a program (.prg) file named Test, and then run
	  the program from the Command window:
	
	  CLOSE TABLES ALL
	  DELETE FILE mytest.DBF
	  DELETE FILE myreport.fr?
	  DELETE FILE myreport.txt
	
	  CREATE TABLE mytest (fld1 C(20), fld2 C(20))
	  FOR x = 1 TO 5
	  	INSERT INTO mytest VALUES (REPLICATE(CHR(64+x),10), ;
	                            REPLICATE(CHR(64+x),10))
	  ENDFOR
	
	  CREATE REPORT myreport NOWAIT
	  *Make a quick report
	  KEYBOARD "{ALT+R}Q{PAUSE 1}{ENTER}"
	  ACTIVATE WINDOW 'Report Designer'
	  KEYBOARD "{CTRL+W}"
	  DOEVENTS
	
	  REPORT FORM myreport PREVIEW
	  REPORT FORM myreport TO FILE myreport.txt ASCII
	  MODIFY FILE myreport.txt NOWAIT
	  USE
	
	2. After you run the program, view the Report Preview. Note that the report
	  contains five lines of data, followed by white space, and then a date in the
	  page footer.
	
	3. Close the Report Preview window, and note that the report now shows the date
	  directly below the last line of data in the ASCII text file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
