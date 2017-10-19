---
layout: page
title: "Q157477: WD97: Features Not Available During Web Authoring"
permalink: /kb/157/Q157477/
---

## Q157477: WD97: Features Not Available During Web Authoring

	Article: Q157477
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When authoring Web pages in Word, you can use many familiar Word features, such
	as spelling and grammar checking, AutoText, and tables. Some features are
	customized to make Web authoring easier, such as graphic bullets and lines.
	Features that are not supported by HTML are not available for authoring Web
	pages. The list below explains which features are changed or unavailable when
	you are authoring Web pages.
	
	
	                     Available
	Feature               or changed     Notes
	-------               ----------     -----
	
	Columns               See Notes      Newspaper columns are not supported
	                                    in HTML, but you can use tables to
	                                    create a multicolumn effect.
	
	Comments and Track    See Notes      Word comments and track changes
	Changes                              features are not supported in HTML.
	                                    You can use strikethrough formatting
	                                    to represent text that might be
	                                    deleted. For comments, you can format
	                                    text with the Comments style.
	                                    Comments will not appear in Web
	                                    browsers.
	
	Highlighting          No             Highlighting is not available in
	                                    HTML.
	
	Font sizes            See Notes      Fonts are mapped to the closest HTML
	                                    size available in the <FONT SIZE>
	                                    tag, which ranges from size 1 to 7.
	                                    These numbers are not point sizes but
	                                    are used as instructions for font
	                                    sizes by Web browsers. Word displays
	                                    the fonts in sizes ranging from 9
	                                    to 36.
	
	Bold, strikethrough,  Yes            Special underline effects, such as
	italic, underline                    dotted underline, are not available.
	
	Animated text         See Notes      Animations are not available. For an
	                                    animated effect, insert scrolling
	                                    text.
	
	Emboss, shadow,       No             These font effects are not supported
	engrave, small caps,                 in HTML
	all caps, double
	strikethrough, and
	outline effects
	
	Tabs                  No             Tabs are not available because they
	                                    are often displayed by Web browsers
	                                    as spaces. To control the layout of
	                                    your page, use a table.
	
	Ruler                 See Notes      The ruler does not appear by default
	                                    because margin settings, indents, and
	                                    tabs differ in the Web page authoring
	                                    environment. You can point to the
	                                    gray area at the top of the document
	                                    to display the ruler.
	
	Equations, charts,    See Notes      When you save charts, equations,
	other OLE objects                    organizational charts, and other OLE
	                                    objects in HTML format, a graphic
	                                    image is created. You can use these
	                                    graphics on your Web pages, but you
	                                    won't be able to update the data they
	                                    represent. If you need to later
	                                    update data in a chart or equation
	                                    that you're displaying on a Web page,
	                                    save a backup copy of your file as a
	                                    Word document (.doc format).
	
	Drawing objects,      See Notes      These items are not available on the
	such as AutoShapes,                  Drawing toolbar. They are available
	text effects, text                   as Microsoft Word Picture objects--
	boxes, and shadows                   click Object on the Insert menu, and
	                                    then click Microsoft Word Picture.
	                                    Once you close your document, the
	                                    graphic becomes a GIF image, and you
	                                    will not be able to update it using
	                                    the Drawing toolbar again.
	
	Headers, Footers      No             Headers and footers are not supported
	                                    in HTML.
	
	Footnotes, Endnotes   No             Footnotes and endnotes are not
	                                    supported in HTML.
	
	Cross-references      No             Cross-references are not supported in
	                                    HTML. You can use a hyperlink to jump
	                                    to another part of your web page.
	
	Master documents      No             Master documents are not supported in
	                                    Web page authoring. You can separate
	                                    large amounts of text into unique Web
	                                    pages and then insert hyperlinks to
	                                    these smaller documents onto one Web
	                                    page.
	
	Mail merge            No             Mail merge is not supported in HTML.
	
	Versioning            No             Versioning is not supported in HTML.
	
	Styles                Yes            When you define your own styles, only
	                                    the formatting that's supported in
	                                    Web page authoring will be available.
	
	Paragraph formatting  See Notes      Some paragraph formats, such as
	settings
	                                    to control how paragraphs flow,
	spacing
	                                    before and after paragraphs, and line
	                                    spacing aren't available. To control
	the
	                                    layout of your page you can use a
	table.
	
	Tables of contents,   No             The Word tools for creating these
	tables of                            items are not available. You can
	authorities,                         simulate a table of contents by using
	indexes                              hyperlinks.
	
	Page borders          No             Borders around pages are not
	                                    supported in HTML. You can use a table
	                                    to border a page, or to make the page
	                                    more interesting, you can add a
	                                    background by using the Background
	                                    command on the Format menu.
	
	Page numbering        No             An HTML document is considered a
	                                    single Web page, regardless of its
	                                    length.
	
	Margins               No             To control the layout of a page, you
	                                    can use a table.
	
	Additional query words: 8.0 word8 word97 browser tools menu missing
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
