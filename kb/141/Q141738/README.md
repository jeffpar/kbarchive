---
layout: page
title: "Q141738: FIX: Report Form to ASCII Truncates Data After Page 11&quot; Mark"
permalink: /kb/141/Q141738/
---

## Q141738: FIX: Report Form to ASCII Truncates Data After Page 11&quot; Mark

{% raw %}

	Article: Q141738
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the REPORT FORM TO FILE ASCII command when the Report form's page
	layout is set to landscape and you're using legal size paper (8 1/2 x 14), data
	that lies outside the first 11 inches is truncated in the ASCII file. The REPORT
	FORM TO PRINT command prints correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open Customer.dbf located in Vfp\Samples\Data.
	
	2. Create a new Report
	
	3. On the File menu, click Page Setup.
	
	4. In Page Setup, click Print Setup
	
	5. Set the Paper Size to Legal 8 1/2x14 inches and the Orientation to Landscape
	
	6. On the Report menu, click Quick Report, and then click OK
	
	7. Save the Report as Test.
	
	8. On the File menu, click Print Preview. You will see Data for all the fields
	  that were in the Report Designer. Close the Print Preview and the Report
	  Designer.
	
	9. In the Command window, type the following commands:
	
	     _ASCIICOLS = 300
	     REPORT FORM Test TO FILE Test.txt ASCII
	
	  Then open the Test.txt file in a text editor like the MS-DOS Text Editor. You
	  will only see data up to the Country field.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
