---
layout: page
title: "Q91031: WD97: NUMPAGES Field Does Not Work During Mail Merge"
permalink: /kb/091/Q91031/
---

## Q91031: WD97: NUMPAGES Field Does Not Work During Mail Merge

	Article: Q91031
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta word8 kbfield word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a mail merge operation by using a main document that contains a
	NUMPAGES field, the number "1" appears in the merged documents, regardless of
	how many pages are in the main document.
	
	This occurs regardless of whether you insert the NUMPAGES field in the header,
	footer, or body of your main document.
	
	WORKAROUND
	==========
	
	To work around this behavior, use one of the following methods:
	
	- Before you perform the mail merge, change the NUMPAGES field to text in your
	  main document by selecting the field, pressing F9 to update the field, and
	  then pressing CTRL+SHIFT+F9 to change the result of the field to text. Use
	  this workaround if all your merged documents contain the same number of
	  pages. This workaround is inappropriate if the number of pages in your merged
	  document varies from record to record.
	
	  -or-
	
	- In place of the NUMPAGES field, use a PAGEREF field that references a
	  bookmark inserted at the end of your main document. To do this, position the
	  insertion point at the end of your document and click Bookmark on the Insert
	  menu. Type "MergedNumber" (without the quotation marks) in the Bookmark name
	  box, and then click the Add or OK button. In place of the NUMPAGES field,
	  insert the following field:
	
	  {PAGEREF MergedNumber}
	
	  NOTE: This workaround provides incorrect PAGEREF field results if you use the
	  Merge To New Document option when you perform the mail merge. It only works
	  if you use the Merge To Printer option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	By design, Word does not insert the NUMPAGES field in merged documents, because
	the field result would reflect the total pages in the merged document instead of
	the total pages for each record. Therefore, the NUMPAGES field is often
	inappropriate for print merge main documents.
	
	NOTE: The NUMPAGES field obtains its result from the Document Statistics dialog
	box. You cannot modify Document Statistics information; therefore, you cannot
	affect the result of the NUMPAGES field.
	
	Additional query words: wrong unlink
	
	======================================================================
	Keywords          : kbualink97 kbdta word8 kbfield word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
