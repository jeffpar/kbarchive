---
layout: page
title: "Q196962: WD97: How to Number Chapters, Page No., Appendix, and Title"
permalink: kb/196/Q196962/
---

## Q196962: WD97: How to Number Chapters, Page No., Appendix, and Title

	Article: Q196962
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word97 kbnumberingkbfaq
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Word does not support multiple heading numbering schemes in a single
	document or master document. When you work with documents that contain both
	chapter headings and appendix headings, the headings must not use the same
	heading style level.
	
	AUTOMATICALLY NUMBERING CHAPTERS AND INDEXES USING HEADING STYLES
	-----------------------------------------------------------------
	
	When you design a document that contains both chapter headings and appendix
	headings, you can use different heading style levels to apply the different
	number formatting to each section. For instance, to define a chapter and
	appendix heading numbering that resembles the following example
	
	     Chapter One: This is the title to the first chapter
	
	     Chapter Two: This is the title to the second chapter
	
	     Appendix A: This is the title to the first appendix
	
	     Appendix B: This is the title to the second appendix
	
	follow these steps:
	
	1. On the Format menu, click Bullets And Numbering, and then select the Outline
	  Numbered tab.
	
	2. Select one of the choices, for example, Chapter 1.
	
	3. Click the Customize button.
	
	4. Under Level, select Level 7.
	
	5. In the Number Format box, type "Appendix" (without the quotation marks) and
	  then type a blank space after the word Appendix.
	
	6. Under Number Style, select "A, B, C, ...."
	
	  NOTE: In the Number Format box, you should see "Appendix A."
	
	7. Click back into the Number Format box and enter a blank space after Appendix
	  A.
	
	8. Click the More button.
	
	9. In the "Link level to style" box, select Heading 7, and then click OK.
	
	You can now apply Heading 1 to all paragraphs that are chapter styles and Heading
	7 to all paragraphs that are appendix titles.
	
	NOTE: Heading styles are predefined with certain paragraph and character
	formatting attributes. You may need to modify these styles using the Style
	command on the Format menu to obtain the desired appearance.
	
	INSERTING PAGE NUMBERS THAT CORRESPOND TO CHAPTER AND APPENDIX HEADINGS
	-----------------------------------------------------------------------
	
	To insert page numbers of the style "1-1", "A-1" that work with these heading
	styles, use the following steps.
	
	Step 1: Make Sure That the Document Contains a Section Break of Some Type:
	
	The section break you should use is usually "Next Page." Use the section break to
	separate the main document area from the appendix area. If there is not a
	section break there, move your insertion point to a blank area above your
	appendix, and then follow these steps:
	
	1. On the Insert menu, click Break.
	
	2. In the Break dialog box, under Section Breaks, click Next Page.
	
	3. Click OK.
	
	Step 2: Format Page Numbers to Include Chapter Numbering:
	
	1. Move the insertion point to the page containing the first chapter title.
	
	2. On the Insert menu, click Page Numbers.
	
	3. Choose the desired location for the page number using the options provided in
	  the Page Numbers window.
	
	4. Click the Format button.
	
	5. Select the Include Chapter Numbers check box.
	
	6. In the Chapter Start With Style box, select Heading 1.
	
	7. Click OK.
	
	8. Click OK in the Page Numbers dialog box.
	
	Step 3: Format Page Numbers to include Appendix Numbering:
	
	1. Move the insertion point to the page that contains the first appendix title.
	
	2. On the Insert menu, click Page Numbers.
	
	3. Choose the desired location for the page number using the options provided in
	  the Page Numbers window.
	
	4. Click the Format button.
	
	5. Select the Include Chapter Numbers check box.
	
	6. In the Chapter Starts With Style box, select Heading 7.
	
	7. In the Page Numbering box, select Start At and select 1 so that each chapter
	  or section begins with the number 1.
	
	8. Click OK to return to your document.
	
	BUILDING A CUSTOMIZED TABLE OF CONTENTS
	---------------------------------------
	
	To build a table of contents that includes both the chapters and the appendixes
	and also uses the defined page numbering style:
	
	1. Place the insertion point in the desired location for the table of contents.
	
	2. On the Insert menu, click Index And Tables.
	
	3. Click the Table Of Contents tab.
	
	4. Click the Options button.
	
	5. In the TOC Level boxes, in the text box to the right of Heading 7, type "1"
	  (without the quotation marks). This will configure Word to consider Heading 7
	  to be a level 1 entry in the table of contents.
	
	6. Click OK.
	
	7. Click OK in the Index And Tables dialog box.
	
	Additional query words: start renumber incorrect number style different initial reset
	
	======================================================================
	Keywords          : kbdta word97 kbnumbering kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
