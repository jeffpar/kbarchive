---
layout: page
title: "Q165162: WD97: AutoNum Fields Don't Update When Deleted W/ Track Changes"
permalink: kb/165/Q165162/
---

## Q165162: WD97: AutoNum Fields Don't Update When Deleted W/ Track Changes

	Article: Q165162
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbproof kbfield
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you delete a numbered paragraph from a numbered list, Word does not update
	the remaining list numbers correctly. This problem occurs when both of the
	following are true:
	
	- The numbered list was created using an automatic numbering field, such as
	  AutoNum, AutoNumOut, or AutoNumLgl.
	
	  -and-
	
	- The "Track changes while editing" option is selected in the Highlight Changes
	  dialog box (point to Track Changes and then click Highlight Changes on the
	  Tools menu).
	
	CAUSE
	=====
	
	Word cannot reflect changes to a numbered list when the numbering is the result
	of a field. A field displays a result which Word treats as normal text. If you
	are using the "Track changes while editing" option with the automatic numbering
	fields, Word strikes through the deleted text and the field.
	
	WORKAROUND
	==========
	
	To work around this problem, accept the revisions in your document and Word will
	update the remaining fields automatically:
	
	1. On the Tools menu, point to Track Changes, and then click "Accept or Reject
	  Changes."
	
	2. In the "Accept or Reject Changes" dialog box, click Accept All to accept all
	  revisions in the document or click Find and accept or reject each revision
	  individually.
	
	MORE INFORMATION
	================
	
	For more information about Track Changes, click the Office Assistant, type "What
	is Track Changes," click Search, and then click to view "Ways to add comments
	and keep track of changes."
	
	For more information about the AutoNum fields, click the Office Assistant, type
	"AutoNum," click Search, and then click to view either "Field codes: AutoNum
	field", "Field codes: AutoNumOut field", or "Field codes: AutoNumLgl field".
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Word Help is not installed on your computer,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : kbualink97 kbproof kbfield 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
