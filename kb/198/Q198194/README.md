---
layout: page
title: "Q198194: WD97: Page Number Format Doesn't Carry to Other Sections"
permalink: /kb/198/Q198194/
---

## Q198194: WD97: Page Number Format Doesn't Carry to Other Sections

{% raw %}

	Article: Q198194
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert a page number with a format other than the default (1, 2,
	3,...), "Same as Previous" sections in your document do not retain the format
	you applied.
	
	In a document with multiple sections, if you click Page Number on the Insert
	menu, click Format, and then select a number format other than the default (for
	example I, II, III or i, ii, iii), the non-default format appears only in the
	current section. All other sections have the default page number format (1, 2,
	3, ...).
	
	This behavior occurs even if the numbering is continuous throughout the document
	and if "Same as Previous" is selected for headers and footers.
	
	CAUSE
	=====
	
	This behavior occurs because the Page Number Format dialog box does not allow
	you to select where Word applies the numbering format. That is, there is no
	option to apply the formatting to the "Current Section" or the "Whole
	Document".
	
	Page Number Format is a section property. When Word applies page numbering to a
	document, it uses the default numbering scheme of 1, 2, 3, and so on. If the
	Page Number Format is changed when applying the page numbers, only the section
	containing the insertion point receives the format. All other sections retain
	the default numbering format.
	
	WORKAROUND
	==========
	
	To correctly apply a page number format to an entire document that contains no
	current page numbering, use either of the following methods.
	
	Method 1: Use the Field Option on the Insert Menu
	-------------------------------------------------
	
	1. Place the insertion point where you want the numbers to be in the header or
	  footer.
	
	2. On the Insert menu, click Field. Under Categories, click Numbering. Under
	  Field Names, click Page.
	
	3. Click Options. Choose the format that you want, and then click Add To Field.
	
	4. Click OK twice.
	
	Word inserts the page field with the appropriate switch into the header or
	footer. All sections will have page numbering with the chosen format.
	
	Method 2: Add a Formatting Switch to the Page Numbers {page} Field
	------------------------------------------------------------------
	
	1. On the Insert menu, click Page Numbers, and select the Position and Alignment
	  that you want. Click OK.
	
	2. On the View menu, click Header And Footer, and view the field codes (press
	  ALT+F9).
	
	3. You will see the page number field code that looks like this:
	
	  { PAGE }
	
	  Add one of the following switches to the field code:
	
	  Page Number Format     Switch
	  ------------------     ------------
	
	  1,2,3                  \*Arabic
	  a,b,c                  \*alphabetic
	  A,B,C                  \*ALPHABETIC
	  i,ii,iii               \*roman
	  I,II,III               \*ROMAN
	
	  For example, if you want your page number format to be in capital letters, the
	  field code would look like this:
	
	  { PAGE \* ALPHABETIC }
	
	NOTE: The default format is 1, 2, and 3.
	
	The numbering sequence continues correctly, but only the section that contained
	the insertion point has the selected numbering format. This behavior is by
	design for the way Word page numbers a document.
	
	
	Additional query words: section break default format 8.0 8.00
	
	======================================================================
	Keywords          : kbualink97 kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
