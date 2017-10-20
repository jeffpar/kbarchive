---
layout: page
title: "Q114865: BUG: HEADING Clause on the REPORT FORM Does Not Align Properly"
permalink: /kb/114/Q114865/
---

## Q114865: BUG: HEADING Clause on the REPORT FORM Does Not Align Properly

{% raw %}

	Article: Q114865
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500aBUG kbvfp250bug kbvfp250aBUGkbbuglist
	Last Modified: 29-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The text specified with the HEADING <expC> clause on the REPORT FORM
	command does not align properly with the Page Header or Title band of a quick
	report. The HEADING text is printed or displayed in page preview, but it will be
	printed over the column headings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	WORKAROUND
	==========
	
	The misalignment occurs only when a quick report is printed with the HEADING
	clause.
	
	
	FoxPro 2.x
	----------
	
	Use the following workaround if you are seeing this behavior while using the RQBE
	tool:
	
	1. Using the MODIFY command, open the report created by the query.
	
	2. From the Report menu, choose Data Grouping.
	
	3. Choose Add, and then type _PAGENO in the Group box. Choose OK twice.
	
	4. Move all the fields and text from the Page Header band to the Group Header
	  band.
	
	5. Save the report.
	
	6. Using the MODIFY command, open the query.
	
	7. Choose Options, select Report, clear the Overwrite File checkbox, and choose
	  OK.
	
	8. Using the DO command, execute the query.
	
	Steps to Reproduce Problem
	--------------------------
	
	To reproduce this problem, issue the following code in the Command window:
	
	      CREATE REPORT test.frx FROM C:\FoxProW\Tutorial\Salesman ;
	         WIDTH 637 COLUMN
	      USE C:\FoxProW\Tutorial\Salesman
	      REPORT FORM test.frx HEADING "This is a test" PREVIEW
	
	NOTE: This example assumes that the SALESMAN database resides in the
	FOXPROW\TUTORIAL subdirectory on drive C. If this subdirectory does not exists
	on your C drive, change the pathname and use any database in your FoxPro
	directory.
	
	Additional query words: RQBE crosstab kbFP250 kbFP260 kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp500aBUG kbvfp250bug kbvfp250aBUG kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5x,2.6x,3.0,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
