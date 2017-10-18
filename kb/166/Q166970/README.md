---
layout: page
title: "Q166970: WD97: &quot;...Invalid Page Fault in Excel32.cnv&quot; When Opening a File"
permalink: kb/166/Q166970/
---

## Q166970: WD97: &quot;...Invalid Page Fault in Excel32.cnv&quot; When Opening a File

	Article: Q166970
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Word 97, if you open a Microsoft Excel 97 worksheet, you may receive the
	following error:
	
	  This program has performed an illegal operation and will be shut down.
	
	  WinWord has caused an invalid page fault in module Excel32.cnv
	
	CAUSE
	=====
	
	The error occurs during the conversion of a formula that is used to mask formula
	results.
	
	RESOLUTION
	==========
	
	Open the worksheet in Microsoft Excel and copy and paste the information from
	Microsoft Excel to Word.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following example illustrates a formula that may cause the problem:
	
	1. In cell A1 type "test" (without the quotation marks).
	
	2. In cell A2, type the following:
	
	  =IF(B2=0, "", B2/B2)
	
	3. Save the worksheet and open it in Word 97.
	
	NOTE: The sample workbook that ships with Office 97 contains a Microsoft Excel
	example worksheet demonstrating how to mask results. This worksheet will
	generate an invalid page fault in excel32.cnv because of the formulas in the
	worksheet.
	
	
	REFERENCES
	==========
	
	For information on converting files, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q162987 WD97: Supported Non-Word File Formats
	
	  Q114168 Troubleshooting Guide: Converting Docs in Word for Windows
	
	Additional query words: IPF crash gpf general protection fault
	
	======================================================================
	Keywords          : kbinterop word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
