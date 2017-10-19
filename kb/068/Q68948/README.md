---
layout: page
title: "Q68948: PPT: Importing Word for Windows Document into PowerPoint"
permalink: /kb/068/Q68948/
---

## Q68948: PPT: Importing Word for Windows Document into PowerPoint

	Article: Q68948
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbconversion
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 2.0, 3.0, 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to import an entire Word for Windows document, complete with body
	text, and have the paragraphs of text placed correctly on the slides during the
	initial generation of a PowerPoint presentation. The Word document has to be
	formatted as an outline with different indentation levels and saved as a Rich
	Text Format (RTF) file.
	
	MORE INFORMATION
	================
	
	PowerPoint 4.0 and 7.0
	----------------------
	
	1. In Outline view, give the first heading a first-level indent, which
	  corresponds with Word for Windows "heading 1" style. You must drag the
	  heading to the left of its initial position.
	
	2. Select the entire paragraph you want to have as body text on that slide. Set
	  it as indent level 2, which corresponds with Word for Windows "heading 2"
	  style. Typically, you must drag the paragraph to the right of its initial
	  position.
	
	  You can tell if the items are in the correct position by noting that the
	  heading line has a plus next to it, and is as far to the left as possible.
	  The body paragraph has a dash next to it, and should be indented so that it
	  is about five spaces to the right of the beginning of the text on the heading
	  line.
	
	3. Repeat these steps for the entire document. Save it as an RTF file.
	
	4. Start a new presentation in PowerPoint.
	
	5. On the View menu, point to Master, and then click Slide Master.
	
	  Change the body text to a smaller point-size so that when the text is imported
	  it is less likely to overflow the slide area. You can later modify this text
	  style.
	
	6. While in Title Sorter or Slide Sorter view, click Slides from Outline on the
	  Insert menu and select your RTF file.
	
	7. The slides are generated, complete with body text.
	
	PowerPoint 2.0 and 3.0
	----------------------
	
	1. In Outline view, give the first heading a first-level indent, which
	  corresponds with Word for Windows "heading 1" style. You must drag the
	  heading to the left of its initial position.
	
	2. Select the entire paragraph you want to have as body text on that slide. Set
	  it as indent level 2, which corresponds with Word for Windows "heading 2"
	  style. Typically, you must drag the paragraph to the right of its initial
	  position.
	
	  You can tell if the items are in the correct position by noting that the
	  heading line has a plus next to it, and is as far to the left as possible.
	  The body paragraph has a dash next to it, and should be indented so that it
	  is about five spaces to the right of the beginning of the text on the heading
	  line.
	
	3. Repeat these steps for the entire document. Save it as an RTF file.
	
	4. Start a new presentation in PowerPoint.
	
	5. Create a default text style using the Define Styles option on the Style menu.
	  Give your body text a small point-size so that when the text is imported it
	  is less likely to overflow the slide area. You can later modify this text
	  style.
	
	6. While in Title Sorter or Slide Sorter view, click Paste From on the File menu
	  and select your RTF file.
	
	7. The slides are generated complete with body text.
	
	NOTE: You can do this with text-only files also, by using tabs and hard returns.
	However, paragraphs that contain hard returns may not automatically word-wrap in
	the correct locations when you import the file.
	
	Additional query words: 2.00 3.00 4.00 4.00a 4.00c 7.00 ppt95 winppt
	
	======================================================================
	Keywords          : kbinterop kbdta kbconversion 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt200 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
