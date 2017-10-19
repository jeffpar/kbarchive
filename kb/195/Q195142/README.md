---
layout: page
title: "Q195142: WD97: Revision Colors May Change Unexpectedly"
permalink: /kb/195/Q195142/
---

## Q195142: WD97: Revision Colors May Change Unexpectedly

	Article: Q195142
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbproof word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The color of your revision marks appears incorrect when you open your document.
	
	NOTE: To turn on revision marks, on the Tools menu, point to Track Changes, and
	then click Highlight Changes. Click to select the Track changes while editing
	check box.
	
	CAUSE
	=====
	
	This behavior is by design in Microsoft Word. Word does not assign a specific
	color to a user. The goal is to make sure that the revisions of multiple authors
	can be distinguished from each other. The colors may change even if you close
	and reopen the document on the same computer.
	
	In addition, Word does not save a specific color with the document if the color
	is changed by using the options for the Track Changes feature. For example, if
	you click Options in the Highlight Changes dialog box to set a particular color,
	that color is not maintained when the document is opened on another computer. To
	see the same color, the color would have to be set on the computer on which the
	document is opened, as well.
	
	NOTE: It is not possible to set the color by using Word Viewer.
	
	
	MORE INFORMATION
	================
	
	A document may travel from an author whose revisions colors are blue to another
	author whose revisions colors are also blue. Word cannot distinguish between
	those two authors unless it applies a different color for each user.
	
	Additional query words: user info revise revised
	
	======================================================================
	Keywords          : kbdta kbproof word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
