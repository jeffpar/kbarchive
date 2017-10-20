---
layout: page
title: "Q265880: FIX: Error Message: Summary Band is Too Large to Fit on Page"
permalink: /kb/265/Q265880/
---

## Q265880: FIX: Error Message: Summary Band is Too Large to Fit on Page

{% raw %}

	Article: Q265880
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you preview or print a report that is created by using the Visual FoxPro
	Report Designer, you may receive the following error message:
	
	  Summary band is too large to fit on page.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain Visual FoxPro 7.0.
	
	A supported fix that corrects this problem for Visual FoxPro 6.0 is also
	available from Microsoft, but it has not been fully regression tested and should
	be applied only to systems experiencing this specific problem.
	
	To obtain this fix, contact Microsoft Product Support Services and refer to
	Q265880.
	
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, see the following address on the World Wide Web:
	
	  http://www.microsoft.com/support/supportnet/overview/overview.asp
	  (http://www.microsoft.com/support/supportnet/overview/overview.asp)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Visual FoxPro 7.0.
	
	MORE INFORMATION
	================
	
	This error message occurs when you choose to print the summary band on a new
	page and the page header band height plus the summary band height is greater
	than the page height. When you choose to print the summary on a new page, you
	expect the allowable summary band height to be less than or equal to the page
	height.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open Visual FoxPro and type the following in the Command window:
	
	For Visual FoxPro 5x:
	
	"OPEN DATABASE HOME()+"data\testdata"
	USE CUSTOMER" (without the quotation marks)
	
	For Visual FoxPro 6.0:
	
	"OPEN DATABASE HOME(2)+"data\testdata"
	USE CUSTOMER" (without the quotation marks)
	
	2. Create new report.
	
	3. On the Report menu, click to select Quick Report, accept the defaults, and
	  then click OK.
	
	4. On the Report menu, click to select Title/Summary.
	
	5. Select both the Summary band and New page options, and then click OK to close
	  the dialog box.
	
	6. Drag the page header to 4 inches.
	
	7. Drag the summary band to 7 inches or greater.
	
	8. Right-click the report and choose Preview.
	
	Note that the error message occurs regardless of the setting of the New page
	check box in the report Title/Summary dialog box. The sum of the header band
	plus the summary band must be less than 11 inches. When you select New page in
	the Title/Summary dialog box, you expect the header and summary to act
	independently.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kenneth
	Robison, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbReportWriter kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
