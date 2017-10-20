---
layout: page
title: "Q157085: WD97: Limitations of Converting WordPerfect 5.x Documents"
permalink: /kb/157/Q157085/
---

## Q157085: WD97: Limitations of Converting WordPerfect 5.x Documents

{% raw %}

	Article: Q157085
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WordPerfect 5.x converter included with Word 97 is designed to take
	advantage of features and conversion capabilities specifically available in Word
	97. For best results converting to and from Word 97, use the WordPerfect 5.x
	converter that comes with Word 97.
	
	Converting a file from Word format to WordPerfect format and back again may cause
	the loss of some formatting (for example, fonts, justification, styles, and mail
	merge) unless you load, paginate, and save the converted file in WordPerfect
	before converting back to Word.
	
	MORE INFORMATION
	================
	
	The following table lists features that are not completely converted, are not
	supported on one product or the other, or that require some comment.
	
	The key is as follows:
	
	  Yes   The feature is converted from one product to the other
	  
	  No    The feature is not completely converted from one product to the
	        other.
	  
	  N/S   The feature is not supported in one of the products.
	
	              Word 97 to         WordPerfect 5.x
	Features      WordPerfect 5.x    to Word 97         Comments
	------------------------------------------------------------
	
	All caps      Yes                 N/S               All caps formatting
	                                                    becomes all capital
	                                                    letters.
	
	Hidden        Yes                 N/S               Hidden text in Word
	                                                    becomes WordPerfect
	                                                    comment text.
	
	Strikethrough See comment         See comment       WordPerfect strikeout
	                                                    becomes strikethrough
	                                                    formatting in Word and
	                                                    vice versa;
	WordPerfect
	                                                    redlining becomes
	                                                    tracked changes in
	                                                    Word and vice versa.
	
	Underlining   Yes                 Yes               Underlining format is
	                                                    preserved, but the
	type
	                                                    of underlining may be
	                                                    changed.
	
	Spacing       No                  N/S
	(condensed,
	expanded)
	
	Kerning       Yes                 Yes
	
	Alignment     Yes                 Yes               Centering codes may
	                                                    have to be
	individually
	                                                    repositioned in
	                                                    WordPerfect after
	                                                    conversion.
	
	First-line    Yes                 Yes               First-line indents are
	indents                                             created with tabs in
	                                                    WordPerfect.
	
	Page Break    Yes                 N/S               Approximated with a
	Before                                              page break in
	                                                    WordPerfect.
	
	Space         Yes                 N/S               Approximated with
	                                                    blank before/after
	                                                    paragraph lines in
	                                                    WordPerfect.
	
	Tab leaders   See comment         Yes               From WordPerfect to
	                                                    Word, the dot, dash
	                                                    and underscore tab
	                                                    leaders convert to the
	                                                    same in Word. All
	                                                    other WordPerfect tab
	                                                    leaders convert to dot
	                                                    leaders in Word.
	
	Leading/      N/S                 No
	baselines,
	Lines/ 
	baselines
	
	[Center]/     N/S                 See comment       From WordPerfect to
	[Flsh Rgt]                                          Word, Center and Flush
	codes                                               Right codes convert to
	                                                    center- and right-
	                                                    aligned tab stops.
	
	Widow control Yes                 Yes
	
	Margins       Yes                 Yes               Word margins are
	                                                    measured from the
	                                                    paper's edge to body
	                                                    text; WordPerfect
	                                                    margins are measured
	                                                    from the edge to the
	                                                    header. The conversion
	                                                    adjusts the margins as
	                                                    needed to preserve
	                                                    page layout.
	
	Newspaper     Yes                 Yes
	columns
	
	Parallel      N/S                 See comment       From WordPerfect to
	columns                                             Word, parallel columns
	                                                    convert to tables. If
	                                                    a parallel column
	                                                    layout contains a
	                                                    page-anchored box, the
	                                                    entire parallel column
	                                                    layout is converted to
	                                                    newspaper columns.
	
	Tables        Yes                 Yes               Vertical merging of
	                                                    cells is not
	                                                    converted.
	
	Table         No                  No
	formulas/ 
	math
	
	Decimal       N/S               See comment         From WordPerfect to
	table cell                                          Word, decimal table
	alignment                                           cell alignment is
	                                                    converted to right
	                                                    paragraph alignment.
	
	Default       No                Yes
	tab stops
	
	Footnotes     Yes               Yes                 Endnotes placed at the
	                                                    end of sections in
	                                                    Word
	                                                    are placed at the end
	                                                    of the document in
	                                                    WordPerfect because
	                                                    WordPerfect doesn't
	                                                    have sections.
	                                                    Restarted numbers and
	                                                    separators are not
	                                                    converted. Custom
	                                                    footnote marks in Word
	                                                    are added to automatic
	                                                    numbering in
	                                                    WordPerfect.
	
	Gutter        Yes               Yes
	margins,
	paper size
	
	Comments      Yes               N/S                 Word comments become
	                                                    WordPerfect comment
	                                                    text.
	
	Outline,      Yes               Yes                 WordPerfect paragraph
	paragraph                                           numbers convert to
	                                                    Word numbering,
	                                                    sequence fields by
	                                                    default.
	
	Word 7.0 Lists                                      Word's automatically
	                                                    numbered
	                                                    lists convert to
	                                                    paragraph numbers. To
	                                                    convert WordPerfect
	                                                    paragraph numbers to
	                                                    plain text, set this
	                                                    option in the registry
	                                                    FavourSequenceFields=
	                                                    No using the
	                                                    EditConversionOptions
	                                                    macro.
	
	Print merge   Yes               Yes                 Word data source
	commands                                            documents can be
	                                                    either tab or comma
	                                                    delimited or in table
	                                                    format to convert to
	                                                    WordPerfect. Word
	                                                    automatically converts
	                                                    WordPerfect secondary
	                                                    files to Word data
	                                                    source document
	                                                    format. Conditional
	                                                    print merge constructs
	                                                    and macros are lost
	                                                    when converting to
	                                                    Word.
	
	Date/time     Yes               Yes                 Default formats only.
	stamps
	
	Subdocuments  Yes               Yes
	(INCLUDE field)
	
	Equations     No                No
	
	Extended      Yes               See comment         From WordPerfect to
	characters                                          Word, not all extended
	                                                    characters are
	                                                    converted.
	
	Text boxes,   Yes               Yes                 Some text boxes and
	lines                                               lines convert to Word
	                                                    drawing layer objects.
	                                                    Drawing layer objects
	                                                    are visible only in
	                                                    page layout view, in
	                                                    print preview, and
	                                                    when printed. Drawing
	                                                    layer objects do not
	                                                    appear in normal view.
	
	Line draw     Yes               Yes                 WordPerfect line draw
	                                                    characters are
	                                                    converted; however,
	                                                    Word line spacing
	                                                    causes gaps to appear
	                                                    between line draw
	                                                    characters on
	                                                    successive lines. To
	                                                    correct this problem
	                                                    for printing, set line
	                                                    spacing to equal the
	                                                    current font point
	                                                    size.
	
	Macros        No                No
	
	PRIVATE       N/S               See comment         From WordPerfect to
	field codes                                         Word, PRIVATE fields
	                                                    are inserted by the
	                                                    converter to preserve
	                                                    information needed to
	                                                    accurately save the
	                                                    file back to
	                                                    WordPerfect format.
	                                                    These fields shouldn't
	                                                    be edited and have no
	                                                    effect on the
	                                                    document.
	
	Styles        Yes               See comment         From WordPerfect to
	                                                    Word, styles con-
	                                                    -taining
	                                                    paragraph formatting
	                                                    codes convert to
	                                                    paragraph styles.
	                                                    WordPerfect styles
	                                                    containing only
	                                                    character formatting
	                                                    convert to character
	                                                    styles in Word. Text
	                                                    contained in a style
	                                                    is converted as normal
	                                                    text. Other features,
	                                                    such as tables,
	                                                    graphics, and so on,
	                                                    are retained in
	                                                    documents but are not
	                                                    given Word styles.
	
	Document      See Comment       See Comment         WordPerfect can assign
	Titles\                                             a Descriptive Name to
	Descriptive                                         a file; much like Word
	Names                                               can assign a Title.
	                                                    Word imports the
	                                                    Descriptive Name into
	                                                    the document Title
	                                                    property and exports
	                                                    the document Title
	                                                    property into a
	                                                    Descriptive Name.
	
	Additional query words: conversion converts converting transferred transferring transfers import export textconv WordPerfect wpft 6.x 5.2 5.1 5.0 5.x
	
	======================================================================
	Keywords          : kbinterop word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
