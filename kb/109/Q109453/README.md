---
layout: page
title: "Q109453: WD97: TOC Field Doesn't Display AUTONUM Fields"
permalink: kb/109/Q109453/
---

## Q109453: WD97: TOC Field Doesn't Display AUTONUM Fields

	Article: Q109453
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Automatic paragraph numbers, AUTONUM fields, are not recognized or included in
	the TOC field when you use TC fields and tables of contents (on the Insert menu,
	click Index And Tables, and then click the Table Of Contents tab).
	
	CAUSE
	=====
	
	When used in conjunction with TC fields, the results of the AUTONUM or
	AUTONUMLGL fields work correctly within the TC field, but the numbers do not
	appear in the table of contents.
	
	For example if you insert
	
	  {TC "{AUTONUMLGL} Proceedings"}
	
	the resulting table of contents entry will look like:
	
	  Proceedings.................................................1
	
	WORKAROUND
	==========
	
	You can use a combination of SEQ fields to generate complex legal paragraph
	numbering in a document. For example, to generate paragraph numbers as 1, 1.1,
	1.1.1, and so forth, use the following sequence fields:
	
	  {seq one}
	     {seq one \c}.{seq two}
	        {seq one \c}.{seq two \c}.{seq three}
	
	Use the \c switch to keep the individual sequence numbers current. The SEQ field
	without the \c switch increments to the next number. For example
	
	  {TC "{seq one} Proceedings"}
	  {TC "{seq one \c}.{seq two} Level2 Proceedings"\l2}
	  {TC "{seq one \c}.{seq two \c}.{seq three} Level3 Proceedings"\l3}
	
	results in the following table of contents:
	
	  1. Proceedings.................................................1
	       1.1 Level2 Proceedings....................................1
	            1.1.1 Level3 Proceedings.............................1
	
	The drawback to this workaround is the loss of automatic renumbering to maintain
	the outline numbering structure. This means that you will need to edit the SEQ
	fields to maintain the correct outline sequence if you move a paragraph. The
	Auto Numbering Fields function is to maintain the numbering structure
	automatically even if the paragraph is moved.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
