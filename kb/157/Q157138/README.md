---
layout: page
title: "Q157138: WD97: Outline Numbering Is Not Reapplied"
permalink: /kb/157/Q157138/
---

## Q157138: WD97: Outline Numbering Is Not Reapplied

	Article: Q157138
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbualink97 kbnumbering
	Last Modified: 10-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft Word 2002 version of this article, see Q291334.
	
	For a Microsoft Word 2000 version of this article, see Q240138.
	
	For a Microsoft Word 98 version of this article, see Q180504.
	
	SYMPTOMS
	========
	
	When you apply Outline Numbering to a document, remove the numbering format from
	all the paragraphs, and then reapply the format, Word reapplies Outline
	Numbering only to the paragraph that contains the insertion point.
	
	CAUSE
	=====
	
	This problem occurs when you customize the Outline Numbering format to link to
	specific styles in the document. When you do this, Outline Numbering, a
	document-specific attribute, is set only once in the document. (The attribute is
	not cleared when you reset the Outline Numbering to None.)
	
	WORKAROUND
	==========
	
	To reset paragraph formatting and reapply outline numbering, follow these steps
	in the order in which they are presented.
	
	Reset Paragraph Formatting
	--------------------------
	
	1. Select the paragraphs from which you removed the Outline Numbering format.
	
	2. Press CTRL+Q.
	
	  NOTE: If List Styles are used, this step resets the paragraph formatting for
	  the selected paragraphs to the default formatting and reapplies the Numbering
	  format.
	
	Select the Paragraphs and Reapply Outline Numbering
	---------------------------------------------------
	
	1. Select the paragraphs from which you removed the Outline Numbering format.
	
	2. On the Format menu, click "Bullets and Numbering".
	
	3. Click the Outline Numbered tab, select an Outline Numbering format, and then
	  click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	In Microsoft Word 97, Outline Numbering replaces Heading Numbering. Outline
	Numbering is a document-specific attribute that cannot be reset.
	
	How to Link a Numbering Level to a Style
	----------------------------------------
	
	1. On the Format menu, click "Bullets and Numbering".
	
	2. Click the Outline Numbered tab.
	
	3. Select a numbering style, and then click Customize.
	
	4. In the Level box, select a level. In the "Link level to style" list, select
	  the style you want to link to the level.
	
	5. Repeat step 4 for each level that you link to a style.
	
	6. Click OK.
	
	If you did not previously apply Outline Numbering to the document, numbering is
	applied to the document based on the styles you specify.
	
	If you previously applied Outline Numbering, only the paragraph that contains the
	insertion point is renumbered.
	
	
	Additional query words: word97 heading numbering level
	
	======================================================================
	Keywords          : kbualink97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	
	=============================================================================
	
