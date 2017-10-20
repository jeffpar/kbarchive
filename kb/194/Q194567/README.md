---
layout: page
title: "Q194567: WD97: What Happens to Fields When You Save As Text Only"
permalink: /kb/194/Q194567/
---

## Q194567: WD97: What Happens to Fields When You Save As Text Only

{% raw %}

	Article: Q194567
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following table outlines if the result of the field is saved when you save a
	Word 97 document as Text Only, MS-DOS Text, Text Only With Line Breaks, MS-DOS
	Text Only With Line Breaks, or Text With Layout.
	
	                Text
	                Only /      Text
	                with        with
	Field            breaks      layout    Comments
	-----            ---------   ------    --------
	
	Advance          No          No        An Advance field has no text
	                                      result. The positioning effect
	                                      is ignored.
	
	Ask              See         See       An Ask field itself has no result.
	                Comment     Comment   Only the result of a REF field that
	                                      references the result of an Ask
	                                      field should appear in text output.
	                                      However, the result of an Ask field
	                                      currently does appear at the Ask
	                                      field location when saving as Text
	                                      Only, MS-DOS Text, Text with
	                                      Layout, or MS-DOS Text with Layout.
	                                      The problem does not occur when
	                                      saving as Text with Line Breaks or
	                                      MS-DOS Text with Line Breaks.
	
	Author           Yes         Yes
	
	AutoNum          No          No
	
	AutoNumLgl       No          No
	
	AutoNumOut       No          No
	
	AutoText         Yes         Yes
	
	Barcode          No          No
	
	Comments         Yes         Yes
	
	Compare          Yes         Yes
	
	CreateDate       Yes         Yes
	
	Database         Yes         Yes
	
	Date             Yes         Yes
	
	EditTime         Yes         Yes
	
	EQ               No          No
	
	FileName         Yes         Yes
	
	FileSize         Yes         Yes
	
	Fill-in          Yes         Yes
	
	GoToButton       No          No        GoToButton display text is not
	                                      retained.
	
	If               Yes         Yes       The text that results when the
	                                      comparison is true or false is
	                                      retained.
	
	IncludePicture   No          No        There is no way to retain a picture
	                                      in a plain text file.
	
	IncludeText      Yes         Yes
	
	Index            Yes         Yes
	
	Info             Yes         Yes
	
	Keywords         Yes         Yes
	
	LastSavedBy      Yes         Yes
	
	Link             No          No        A linked object is an OLE object,
	                                      and there is no way to retain the
	                                      pictorial result of an OLE object
	                                      in a plain text file.
	
	MacroButton      No          No        MacroButton display text is not
	                                      retained.
	
	MergeField       See         See       The field name is retained and is
	                Comment     Comment   delimited by two less than and two
	                                      greater than signs. For example,
	                                      { MERGEFIELD Name \* MERGEFORMAT }
	                                      becomes <<Name>>.
	
	MergeRec         See         See       Same as above.
	                Comment     Comment
	
	MergeSeq         See         See       Same as above.
	                Comment     Comment
	
	Next             No          No
	
	NextIf           No          No
	
	NoteRef          Yes         Yes
	
	NumChars         Yes         Yes
	
	NumPages         Yes         Yes
	
	NumWords         Yes         Yes
	
	Page             Yes         Yes
	
	PageRef          Yes         Yes
	
	Print            No          No
	
	PrintDate        Yes         Yes
	
	Private          No          No
	
	Quote            Yes         Yes
	
	RD               No          No
	
	Ref              Yes         Yes
	
	RevNum           Yes         Yes
	
	SaveDate         Yes         Yes
	
	Section          Yes         Yes
	
	SectionPages     Yes         Yes
	
	Seq              Yes         Yes
	
	Set              See         See       A Set field itself has no result.
	                Comment     Comment   Only the result of a REF field that
	                                      references the result of a Set
	                                      field should appear in text output.
	                                      However, the result of a Set field
	                                      currently does appear at the Set
	                                      field location when saving as Text
	                                      Only, MS-DOS Text, Text with
	                                      Layout, or MS-DOS Text with Layout.
	                                      The problem does not occur when
	                                      saving as Text with Line Breaks or
	                                      MS-DOS Text with Line Breaks.
	
	SkipIf           No          No
	
	StyleRef         Yes         Yes
	
	Subject          Yes         Yes
	
	Symbol           No          No
	
	TA               No          No
	
	TC               No          No
	
	Template         Yes         Yes
	
	Time             Yes         Yes
	
	Title            Yes         Yes
	
	TOA              Yes         Yes
	
	TOC              Yes         Yes
	
	UserAddress      Yes         Yes
	
	UserInitials     Yes         Yes
	
	UserName         Yes         Yes
	
	XE               No          No
	
	Additional query words: save saves saving saved convert converts converting converted translate translates translating translated conversion
	
	======================================================================
	Keywords          : kbdta kbfield winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
