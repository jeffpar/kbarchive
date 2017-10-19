---
layout: page
title: "Q197761: WD97: View Merged Data Doesn't Suppress Blank Lines"
permalink: /kb/197/Q197761/
---

## Q197761: WD97: View Merged Data Doesn't Suppress Blank Lines

	Article: Q197761
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
	
	In a label mail merge main document, Word may not suppress blank lines when you
	view merged data (on the Mail Merge toolbar, click View Merged Data).
	
	NOTE: The blank lines are correctly suppressed when the document is merged to a
	new document or merged to printer.
	
	CAUSE
	=====
	
	When a MERGEFIELD is followed by a end-of-cell marker in labels or a Word table,
	Word cannot suppress a blank line when the MERGEFIELD is blank. However, Word
	will suppress a blank line when the MERGEFIELD is followed by a paragraph mark.
	
	NOTE: To view paragraph marks and end-of-cell markers, do one of the following:
	
	- On the Tools menu, click Options. On the View tab, click to select the All
	  check box (listed under "Non-printing characters") and then click OK.
	
	  -or-
	
	- On the Standard toolbar, click Show/Hide.
	
	WORKAROUND
	==========
	
	To allow Word to suppress blank lines when you use View Merged Data, in your
	mail merge main document, position the insertion point immediately after the
	MERGEFIELD in a label or table cell and press ENTER to create a paragraph mark.
	Do this for each of the labels or table cells that contain MERGEFIELDS.
	
	MORE INFORMATION
	================
	
	NOTE: In the following examples, <P> represents a paragraph mark and []
	represents a label (table) end-of-cell marker.
	
	In the following example, Word will not suppress blank lines correctly when the
	result of a MERGEFIELD is blank:
	
	     {Mergefield Name}<P>
	     {Mergefield Number}[]
	
	In the following example, Word will suppress blank lines correctly when the
	result of a MERGEFIELD is blank:
	
	     {Mergefield Name}<P>
	     {Mergefield Number}<P>
	     []
	
	Additional query words: suppression 8.0 8.00
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
