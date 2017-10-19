---
layout: page
title: "Q228929: WD97: IPF Merging Data File After Numbering Records"
permalink: /kb/228/Q228929/
---

## Q228929: WD97: IPF Merging Data File After Numbering Records

	Article: Q228929
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you number the records contained in your data file, when you merge your
	data file in a Word mail merge, the following error message may be displayed:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details, the following error message is displayed:
	
	  WINWORD caused an invalid page fault in WINWORD.EXE at 015f:301be993.
	
	CAUSE
	=====
	
	This problem occurs when your data file contains either a LISTNUM or an AUTONUM
	field.
	
	WORKAROUND
	==========
	
	Use one of the following methods to number the records or labels.
	
	Method 1: Use the Microsoft Word Numbering Feature
	--------------------------------------------------
	
	1. Open your data file.
	
	2. Select the table column containing the LISTNUM or AUTONUM field and then
	  press DELETE. This removes the LISTNUM or AUTONUM fields from your data file
	  that you used for numbering each record (table row).
	
	  NOTE: If you have other LISTNUM or AUTONUM fields contained in the data file,
	  remove them also.
	
	3. Select just the table cells that you want to contain a record number.
	
	4. On the Format menu, click Bullets and Numbering.
	
	5. On the Numbered tab, select the type of numbering you want and then click OK.
	  Word should number each selected table cell.
	
	  NOTE: If you want to modify the number format (for example, remove the period
	  after the number), on the Numbered tab, select the number style you want and
	  then click Customize to make changes to the number format.
	
	Method 2: Manually Type the Record Number
	-----------------------------------------
	
	1. Open your data file.
	
	2. Select the table column containing the LISTNUM or AUTONUM field and then
	  press DELETE. This removes the LISTNUM or AUTONUM fields from your data file
	  that you used for numbering each record (table row).
	
	  NOTE: If you have other LISTNUM or AUTONUM fields contained in the data file,
	  remove them also.
	
	3. Position the insertion point in the table cell you want to number, and then
	  type in the record (row) number.
	
	4. Repeat step 3 for each table row you want to number.
	
	Method 3: Use Merge Record #
	----------------------------
	
	If you want the number of the record of your data file to appear on your merged
	document (for example, the record number to appear on each label), use the
	following steps:
	
	1. Open your data file.
	
	2. Select the table column containing the LISTNUM or AUTONUM field and then on
	  the Table menu, click Delete Columns. This removes the table column that
	  contained your record numbers (the LISTNUM or AUTONUM fields).
	
	3. Save and close your data file.
	
	4. In your mail merge main document, position your insertion point where you
	  want the record number to appear.
	
	5. On the Mail Merge toolbar, click Insert Word Field and then click Merge
	  Record #.
	
	6. Repeat steps 4-5 for each location that you want the record number to appear
	  (for example, on each label).
	
	When you complete your mail merge, the record number will print for each record
	in your data file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: ipf gpf errmsg errormessage source datasource
	
	======================================================================
	Keywords          : kbdta word8 kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
