---
layout: page
title: "Q139215: BUG: Labels Truncated When Printable Page Option Is Selected"
permalink: /kb/139/Q139215/
---

## Q139215: BUG: Labels Truncated When Printable Page Option Is Selected

	Article: Q139215
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Data is truncated from the left side of labels if you have selected the
	Printable Page option.
	
	CAUSE
	=====
	
	The Report Writer has data that occupies the non-printable area on the edge of
	the current printer driver's page. Many printers can't print within a certain
	margin from the edge of the page. This distance is generally around 1/4 to 1/2
	inch.
	
	WORKAROUND
	==========
	
	Manually move the fields to the right to avoid the non-printable area of the
	current printer driver's page, or on the File menu, click Page Setup, and set
	the Print Area to Whole Page. Then increase the left margin setting to a larger
	number (at least 0.25 inches).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The problem is specifically that even if the Printable Page option of the Print
	Area (Page Setup dialog box) is selected, the data on labels in the left column
	of certain label layouts are truncated. Changing this option to either Printable
	Page or Whole Page (its two choices) makes no difference in the printed output.
	
	The affected labels are:
	
	  Left Side Truncated
	  -------------------
	  5096
	  5196
	  5260
	  5660
	  5896
	
	  Top Line Truncated
	  ------------------
	  OML  101    (24   x 102mm)
	  Tab1 107.23 (23.4 x 107mm)
	  Tab1  89.23 (23.4 x  89mm)
	  Tab2 107.23 (23.4 x 107mm)
	  Tab2  89.23 (23.4 x 107mm)
	
	Steps to Reproduce Problem
	--------------------------
	
	1. On the File menu, click New, click Label, and then click New File.
	
	2. In the New Label dialog box, scroll down to Avery Label number 5096.
	  Highlight it, and click OK.
	
	3. On the Report menu, click Quick Report.
	
	4. Locate the Customer table in then \Vfp\Samples\Data directory, select it, and
	  click OK.
	
	5. In the Quick Report dialog box, click Fields. Then in the Field Picker dialog
	  box, move cust_id, company, and contact from the All Fields list to the
	  Selected Fields list. Click OK in the Field Picker dialog box.
	
	6. Click the vertical Field Layout button (indicating a column of fields), and
	  click OK in the Quick Report dialog box.
	
	7. On the File menu, click Page Setup, and click Printable Page in the Print
	  Area option group. Click OK.
	
	8. On the File menu, click Print Preview.
	
	Note that the data for labels in the first column are truncated. Changing the
	option in Step 7 from Printable Page to Whole Page makes no difference.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprint kbPrinting kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
