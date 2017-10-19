---
layout: page
title: "Q157086: WD97: Limitations of Converting from Word Format to HTML"
permalink: /kb/157/Q157086/
---

## Q157086: WD97: Limitations of Converting from Word Format to HTML

	Article: Q157086
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you save a Microsoft Word document as HTML, Word displays the Web page
	similar to the way it will appear in a Web browser. Formatting and other items
	that are not supported by HTML or the Web page authoring environment are removed
	from the file.
	
	
	MORE INFORMATION
	================
	
	The following table shows the elements that Word changes or removes upon
	conversion.
	
	  Element           Word to HTML   Comments
	  -------           ------------   --------
	
	  Comments          See Comment    Comments you insert with the Comments
	                                   command on the Insert menu are removed.
	                                   After saving the document in HTML
	                                   format, however, you can enter comments
	                                   and apply the Comments style. The
	                                   comments will not appear when the Web
	                                   page is displayed by a Web browser.
	
	  Font sizes        See Comment    Fonts are mapped to the closest HTML
	                                   size available, which ranges from size
	                                   1 to 7.
	                                   These numbers are not point sizes but
	                                   are used as instructions for font sizes
	                                   by Web browsers. Word displays the
	                                   fonts in sizes ranging from 9 to 36.
	
	  Emboss, shadow,   No             These character formats are lost, but
	  engrave, all                     all text is retained.
	  caps, small
	  caps, double
	  strikethrough,
	  and outline
	  text effects
	
	  Bold,             Yes            Some special underline effects, such as
	  strikethrough,                   dotted underlines, are converted to a
	  italic, and                      single underline, and some underline
	  underline                        effects aren't converted.
	  effects
	
	  Animated text     See Comment    Animations are lost, but the text is
	                                   retained. For an animated effect,
	                                   insert scrolling text into your page in
	                                   the Web page authoring environment.
	
	  Graphics          See Comment    Graphics, such as pictures and clip
	                                   art, are converted to GIF (.gif)
	                                   format, unless the graphics are already
	                                   in JPEG (.jpg) format. Drawing objects,
	                                   such as text boxes and shapes, are not
	                                   converted.
	                                   Lines are converted to horizontal
	                                   rules.
	
	  Tabs              Yes            Tabs are converted to the HTML tab
	                                   character, represented in HTML source
	                                   as &#9;. Tabs may appear as spaces in
	                                   some web browsers, so you may want to
	                                   use indents or a table instead.
	
	  Fields            See Comment    Field results are converted to text;
	                                   field codes are removed. For instance,
	                                   if you insert a DATE field, the text of
	                                   the date converts, but the date will
	                                   not continue to update.
	
	  Tables of         See Comment    The information is converted, but
	  contents,                        indexes and tables of contents,
	  tables of                        figures, and authorities can't be
	  authorities,                     updated automatically after conversion
	  and indexes                      because they are based on field codes.
	                                   The table of contents displays
	                                   asterisks in place of the page numbers;
	                                   these asterisks are hyperlinks that the
	                                   reader can click to navigate through
	                                   the Web page. You can replace the
	                                   asterisks with text that you want to
	                                   have displayed for the hyperlinks.
	
	  Drop caps         No             Drop caps are removed. In the Web page
	                                   authoring environment, you can increase
	                                   the size of one letter by selecting it
	                                   and then clicking Increase Font Size.
	                                   Or, you can use a graphic image in
	                                   place of the letter.
	
	  Frames            No             The frame and the text or objects
	                                   contained in the frame are lost when
	                                   the document is saved as HTML.
	
	  Drawing objects   No             Drawing objects are not retained. You
	  (AutoShapes,                     can use drawing tools in the Web page
	  WordArt, text                    authoring environment by inserting Word
	  effects, text                    Picture Objects. The object is
	  boxes, and                       converted to GIF format.
	  Shadows)
	
	  Equations,        See Comment    These items are converted to GIF
	  charts, and                      images. The appearance is retained, but
	  other OLE                        you won't be able to update these
	  objects                          items.
	
	  Tables            Yes            Tables are converted, although settings
	                                   that aren't supported in the Web page
	                                   authoring environment are lost. Colored
	                                   and variable width borders are not
	                                   retained.
	
	  Table widths      See Comment    By default, tables are converted with a
	                                   fixed width. To convert a table with a
	                                   percentage width (so that the table is
	                                   sized relative to the browser window),
	                                   set the option PercentageTableWidth=1
	                                   in the following Windows 95 Registry
	                                   location:
	                                   HKEY_LOCAL_MACHINE\Software\Microsoft\                                      Shared Tools\Text Converters\Export\                                      HTML\Options
	
	  Highlighting      No             Highlighting is lost.
	
	  Revision marks    No             Changes entered with the track changes
	                                   feature are retained, but the revision
	                                   marks are removed.
	
	  Page numbering    No             Because an HTML document is considered
	                                   a single Web page, regardless of its
	                                   length, page numbering is removed.
	
	  Margins           No             To control the layout of your page, you
	                                   can use a table.
	
	  Borders around    No             You can place borders around a table,
	  paragraphs and                   and you can use horizontal lines to
	  words                            help emphasize or separate parts of
	                                   your Web page.
	
	  Page borders      No             There isn't an HTML equivalent for a
	                                   page border. You can make your pages
	                                   more attractive by adding a background
	                                   using the Background command on the
	                                   Format menu. You can also place borders
	                                   around a table, and you can use
	                                   horizontal lines to help emphasize or
	                                   separate parts of your Web page.
	
	  Headers and       No             There aren't equivalents for headers
	  footers                          and footers in HTML.
	
	  Footnotes and     No
	  endnotes
	
	  Newspaper         No             For a multicolumn effect, use tables.
	  columns
	
	  Styles            See Comment    User-defined styles are converted to
	                                   direct formatting, provided the
	                                   formatting is supported in HTML. For
	                                   instance, if you convert a style that
	                                   includes bold and shadow formatting,
	                                   bold formatting is retained as a direct
	                                   formatting, but shadow formatting is
	                                   lost.
	
	  Hyperlink TARGETS No             Hyperlink Targets allow users to
	                                   populate a single frame with a new HTML
	                                   document.
	                                   Because of Word's limitation on
	                                   converting frames, Word also strips out
	                                   the TARGET tag in HTML Documents.
	
	  Smart Quotes      See Comment    Smart quotes are replaced with straight
	                                   quotes when you save and reopen
	                                   (convert) the HTML document.
	
	Additional query words: 8.0 converting conversion converts converted transferring transfers transferred import export hypertext markup language
	
	======================================================================
	Keywords          : kbdta kbconversion word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
