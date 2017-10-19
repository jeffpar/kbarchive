---
layout: page
title: "Q198371: WD97: How to Use STYLEREF Field to Place Chapter Info in Header"
permalink: /kb/198/Q198371/
---

## Q198371: WD97: How to Use STYLEREF Field to Place Chapter Info in Header

	Article: Q198371
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to use the STYLEREF field. The STYLEREF field can be
	used to create dictionary-style entries at the top of each page or to place the
	chapter title in the heading. This field is useful when you want text in the
	header to match what is typed on the page.
	
	MORE INFORMATION
	================
	
	The STYLEREF field is a specialized reference field designed to let you
	automatically add information to a document, especially in the header or
	footer.
	
	The STYLEREF field consists of the field, the name of the style assigned to the
	text to be returned as the result of the field, and field switches.
	
	  {STYLEREF "StyleName" \* MERGEFORMAT} {STYLEREF "StyleName" <switches>
	
	NOTE: The name of the style must be enclosed in quotation marks to work
	properly.
	
	Word searches the page from top to bottom (by default) for the nearest paragraph
	formatted with the style specified in the STYLEREF field. Word then returns that
	text formatted with the designated style in the location of the field.
	
	STYLEREF Field Switches:
	
	\l - Inserts the last text formatted with the style on the current page instead
	of the first text formatted with this style. Word searches the page from bottom
	to top.
	
	The \l switch only works correctly in headers and footers.
	
	\n - Causes the field to display the entire paragraph number for a referenced
	paragraph without trailing periods. No information about prior levels is
	displayed unless it is included as part of the current level. For example,
	caption numbering is included if caption numbering has been applied to the
	paragraph.
	
	\p - Causes the field to display its position relative to the source bookmark
	using the word "above" or "below". If the STYLEREF field appears in the document
	before the bookmark, it evaluates to "below". If the STYLEREF field appears
	after the bookmark, it evaluates to "above". If the STYLEREF field appears
	within the bookmark, an error is returned.
	
	\r - Inserts the entire paragraph number of the bookmarked paragraph in relative
	context, or relative to the paragraph numbering scheme, without trailing
	periods.
	
	\t - When used with the \n, \r, or \w switch, causes the STYLEREF field to
	suppress nondelimiter, or nonnumerical, text. With this switch, for example, you
	can reference "Section 1.01", and only "1.01" is displayed in the result.
	
	\w - Inserts the paragraph number of the bookmarked paragraph in full context,
	from anywhere in the document. For example, when referencing paragraph "ii.", a
	STYLEREF field with the \w switch returns "1.a.ii" as a result.
	
	The STYLEREF field is most often used in headers and footers. The examples in the
	"Examples" section of this article illustrate the possible uses of the STYLEREF
	field.
	
	How to Insert a STYLEREF Field:
	
	Method 1: To Create a Field Using the Menus
	
	1. Position the insertion point in the document where you want to insert the
	  text to be entered.
	
	2. On the Insert menu, click Field.
	
	3. In the Categories list box, select Links And References.
	
	4. In the Field Names list, select StyleRef.
	
	5. Click Options and then click the Styles tab. Select the style defined by your
	  text that you want to be displayed as the field result, and then click Add to
	  Field.
	
	6. Type quotation marks around the style name.
	
	7. If you want a field switch, click the Field Specific Switches tab. Select the
	  switch you want, click Add To Field, and then click OK.
	
	8. Click OK.
	
	To view the field code you just inserted, press ALT+F9 (Windows) or OPTION+F9
	(Macintosh).
	
	Method 2: To Create a Field Using Keystrokes
	
	1. Position the insertion point in the document where you want to insert the
	  text.
	
	2. Press CTRL+F9 (Windows) or COMMAND+F9 (Macintosh).
	
	  Field code brackets, {}, appear in the document.
	
	3. Type the following inside the field code brackets, where <stylename> is
	  the name of the style applied to the text that you want to be displayed:
	
	  STYLEREF "<stylename>"
	
	  NOTE: You must enclose the style name in quotation marks.
	
	EXAMPLES
	--------
	
	Using STYLEREF Fields to Create a Dictionary Type Entry:
	
	NOTE: This example only works if the field indicated below is in either the
	header or the footer of the document.
	
	Use the STYLEREF field when you want to create the same format you find in a
	dictionary at the top of the page, for example, BEGINNING WORD--LAST WORD.
	
	For example, if you have the word Apple at the top of your document and the word
	Baseball at the bottom of the document and they are both formatted with a
	Heading 2 style, you can enter fields into the header and/or footer to give a
	result of:
	
	  Apple--Baseball
	
	To produce this effect, follow these steps:
	
	1. In the header or footer of the document, enter the following fields by doing
	  these steps:
	
	  a. On the View menu, click Header and Footer.
	
	  b. Press CTRL+F9 (Windows) or COMMAND+F9 (Macintosh) to enter the first set
	     of field code braces {}.
	
	2. Type STYLEREF "Heading 2" into the field braces.
	
	3. Move the insertion point outside the right field brace and press the hyphen
	  key twice. Then press CTRL+F9 (Windows) or COMMAND+F9 (Macintosh) to enter
	  the second set of field code braces {}.
	
	4. Type STYLEREF "Heading 2" \l into the field braces.
	
	The final entry should resemble the following:
	
	  {STYLEREF "Heading 2"}--{STYLEREF "Heading 2" \l}
	
	The result of these fields will be:
	
	  Apple - Baseball (where Apple and Baseball have been formatted with Heading 2
	  style)
	
	Chapter Title to Appear in the Header:
	
	Use this format to insert the current chapter name as part of the header or
	footer.
	
	If the title of the current chapter is File Management and that title is
	formatted with a Heading 1 style and if you place the field below into the
	header
	
	  {STYLEREF "Heading 1"}
	
	the result of the field in the header will be:
	
	  File Management
	
	EFFECTIVE USE OF THE STYLEREF FIELD
	-----------------------------------
	
	To use the STYLEREF field effectively, you need to understand how Word determines
	which paragraph is the nearest one. That determination depends on where the
	STYLEREF field is and on whether the /l (the letter L) switch is being used.
	
	  If STYLEREF
	  Is here            Word searches here
	  -----------------------------------------------------------------------
	
	  Document text      The closest text preceding the STYLEREF field. If the
	                     style isn't found, Word searches for the closest
	                     following text.
	
	  Footnotes,         The closest text preceding the footnote, annotation,
	  annotations,       or endnote reference mark in the document text.
	  and endnotes       If the style isn't found, Word searches for the
	                     closest text following the reference mark.
	
	  Headers and        The current page, from top to bottom. If the style
	  Footers            isn't found, Word searches next from the top of the
	  (during printing)  page to the beginning of the document, and then from
	                     the bottom of the page to the end of the document.
	                     If the \l switch is used, Word searches from the
	                     bottom of the page to the beginning or end of the
	                     document.
	
	  Headers and        The section that contains the STYLEREF field, from
	  Footers            the beginning. If the style isn't found, Word
	  (when not          searches from the end of the section to the end of
	  printing)          the document.
	
	For more information about the STYLEREF field in tables, click the Office
	Assistant, type "styleref", click Search, and then click "Field codes: StyleRef
	field".
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For additional information about this situation in earlier versions of Word,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q141994 How to Use the STYLEREF in Microsoft Word
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
