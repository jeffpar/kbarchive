---
layout: page
title: "Q163157: WD97: Pleading Wizard Uses Negative Margins"
permalink: /kb/163/Q163157/
---

## Q163157: WD97: Pleading Wizard Uses Negative Margins

	Article: Q163157
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbtemplate word97 kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The top and bottom margins of a document created by using the Pleading Wizard
	are a negative measurement.
	
	CAUSE
	=====
	
	This functionality is by design. The top and bottom margins are set to a
	negative measurement to prevent changes in the header and footer from causing
	alignment problems with the body text and the line numbers. The negative
	measurement prevents the header or footer area from growing.
	
	MORE INFORMATION
	================
	
	Word normally sets a positive measurement for the header or footer area. If the
	footer content expands outside of the footer area--the distance between the edge
	of the page and the measurement defined for the footer-- then as the bottom
	margin increases, the body text area decreases. This would negatively affect
	line numbering.
	
	When you use a standard bottom margin, and the footer content exceeds the margin
	size, the bottom margin increases in size, allowing for a smaller text area.
	This smaller text area may cause problems with the line numbers in the body of
	the document. For example, if the bottom margin is increased, the body area
	decreases allowing for fewer line numbers.
	
	If you have margins that are set to negative values, Word defines the footer to
	be a certain size. If the footer contents exceed the bottom margin size, the
	footer contents are clipped if they exceed the size of the bottom margin and
	Word does not change the size of the body area. That way the line numbers are
	not disturbed.
	
	In most pleading documents, the footer size is not as important as the line
	numbers. If the footer content is truncated, you modify the footer content
	rather than trying to adjust the line numbers (modifying the footer content is
	easier than adjusting the line numbers).
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q181365 WD97: Pleading Wizard Font Point Size Is Too Small or Too Large
	
	  Q181384 WD97: Text, Line Numbering Don't Line Up in Pleading File
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtemplate word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
