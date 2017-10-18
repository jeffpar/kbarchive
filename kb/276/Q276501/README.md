---
layout: page
title: "Q276501: SAMPLE: How to Set a &quot;Page # of #&quot; Counter in VFP Report"
permalink: kb/276/Q276501/
---

## Q276501: SAMPLE: How to Set a &quot;Page # of #&quot; Counter in VFP Report

	Article: Q276501
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbfile kbReportWriter kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PageOf.exe contains a sample Visual FoxPro report that sets a "page # of #"
	counter. To generate the counter, the report dynamically calculates how many
	lines are used on the detail line to accommodate the fields. The records on the
	table are divided by the amount of detail lines and then used to generate the
	counter.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  PageOf.exe
	  (http://download.microsoft.com/download/vfox60/sample/6.0/W9XNT4/EN-US/PageOf.exe)
	
	Release Date: Nov. 1, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The PageOf.exe file contains the following files:
	
	+---------------------+
	| File name    | Size | 
	+---------------------+
	| PageOf.frx   | 7KB  | 
	+---------------------+
	| PageOf.frt   | 4KB  | 
	+---------------------+
	| Employee.dbf | 5KB  | 
	+---------------------+
	
	To use the sample, perform the following steps:
	
	1. Download and save files.
	
	2. Start Visual FoxPro.
	
	3. From the Command window type:
	
	  REPORT FORM PAGEOF PREVIEW
	
	4. Note the "Page 1 of 3" page footer. To see how the sample works, drag the
	  detail down to expand the detail area; this causes fewer records per page and
	  thereby increases the number of pages. You can also expand the header and
	  footer sections of the report, and it automatically performs the
	  calculations.
	
	The core of the calculations are contained in two report variables called
	nLineCount and nLineCalc. The report also uses the Init event of the cursor in
	the Data Environment to save how many records are in the table. You need to
	adjust the code according to whether or not your table is going to hold deleted
	records. Here are two code samples that illustrate these two scenarios:
	
	  *!* Init Event Code to exclude deleted records.
	  Public nRecNo
	  SET DELETED ON
	  COUNT ALL FOR !DELETED() TO nRecNo
	
	-or-
	
	  *!* Init Event Code for all records.
	  nRecNo = RECCOUNT()
	
	This sample has limited functionality, and does not function correctly with data
	grouping or memo fields that stretch with overflow. Data grouping and memo
	fields that stretch with overflow cause an inconsistent detail line length,
	thereby affecting the calculations.
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Additional query words: PageOf
	
	======================================================================
	Keywords          : kbfile kbReportWriter kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
