---
layout: page
title: "Q198384: WD97: Mail Merge Produces Full Page of Labels"
permalink: /kb/198/Q198384/
---

## Q198384: WD97: Mail Merge Produces Full Page of Labels

{% raw %}

	Article: Q198384
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you select a range of records when you are performing a mail merge to
	create mailing labels, Microsoft Word merges a full page of labels. The first
	record on the page is the first record of the selected range, but Word continues
	merging labels until the page is filled, rather than stopping with the last
	record of the selected merge range.
	
	For example, if your mailing label main document contains 30 labels and you
	choose to merge records 1 through 20, Word merges records 1 through 30 to create
	a full page of labels. Similarly, if you choose to merge records 1 through 40,
	Word merges records 1 through 60 to create two full pages of labels.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Method 1: Use an IF Statement
	-----------------------------
	
	To use an IF statement, follow these steps:
	
	1. In place of the merge fields in each of your labels, for example
	
	  {MergeField Name}
	  {MergeField Address}
	  {MergeField City}, {MergeField State} {MergeField Zip}
	
	  insert the following fields into your mail merge main document:
	
	     In the first label of your main document
	     ----------------------------------------
	
	     {Set MaxRecords n}
	     {IF {MERGEREC} <= {MAXRECORDS} "{MERGEFIELD Name}<P>
	     {MergeField Address}<P>
	     {MergeField City}, {MergeField State}  {MergeField Zip}"}
	
	     In the second and remaining labels of your main document
	     --------------------------------------------------------
	
	     {Next}{IF {MERGEREC} <= {MAXRECORDS} "{MERGEFIELD Name}<P>
	     {MergeField Address}<P>
	     {MergeField City}, {MergeField State}  {MergeField Zip}"}
	
	2. On the Mail Merge toolbar, click the "Merge to New Document" or the "Merge to
	  Printer" button to perform the merge.
	
	Method 2: Add Record Numbers to Your Data Document
	--------------------------------------------------
	
	To add record numbers to your data document, follow these steps:
	
	1. In the mail merge data document, add a field named Rec_Num.
	
	2. Number each of the records in your data document in the Rec_Num column, and
	  then save and close your data document.
	
	3. Activate the mailing label main document.
	
	4. On the Tools menu, click Mail Merge, and then click Query Options.
	
	5. In the Query Options dialog box, click the Filter Records tab, and follow
	  these steps:
	
	  a. Under Field, click to select the Rec_Num field.
	
	  b. Under Comparison, click to select "Less than or equal".
	
	  c. Under Compare to, type the number of records you want to merge.
	
	6. Click OK.
	
	7. Complete the mail merge.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: from to limit
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
