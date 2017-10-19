---
layout: page
title: "Q162987: WD97: Supported Non-Word File Formats"
permalink: /kb/162/Q162987/
---

## Q162987: WD97: Supported Non-Word File Formats

	Article: Q162987
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbualink97 kbdtakbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Word 97 supports conversion to and from a number of non-Word file formats,
	including word processor, spreadsheet, and database files. Word interprets some
	non-Word formats using built-in converters and other formats through the use of
	external converter files or ODBC drivers.
	
	The "More Information" section of this article contains information about:
	
	- Converters That Are Available on the Word 97 CD-ROM
	
	- Supplemental File Converters Available for Download (Word Version 97 Release)
	
	- Microsoft SGML Author Add-on Designed for Word 97 for Windows
	
	- Discontinued File Converters
	
	- Microsoft Office Converter Pack
	
	MORE INFORMATION
	================
	
	Converters That Are Available on the Word 97 CD-ROM
	---------------------------------------------------
	
	The converters listed in the following table are available on the Word 97
	CD-ROM.
	
	Supported                               File
	Formats         Converter      Date     Size     Comments
	--------------------------------------------------------------------------
	Office Folder:
	Index filter    IFILTER.CNV    12/9/96  45 KB    Microsoft Office Filter
	                                                 to RTF Converter
	
	Address Book    WWPAB.CNV      12/9/96  40 KB    Personal Address Book
	Converter                                        import converter
	
	Os\MSApps\Textconv Folder:
	Microsoft Excel EXCEL32.CNV    12/9/96  133 KB   Excel Worksheet Converter
	3.x-5.x,95,97                                    Can be used only to open
	(Win, Mac)                                       documents, not to save
	                                                 them.
	
	HTML            HTML32.CNV     12/9/96  369 KB   Converts documents to
	                                                 and from HTML format.
	                                                 Supports all versions up
	                                                 to HTML 2.0, some
	                                                 Internet Explorer, and
	                                                 Netscape extensions.
	
	Lotus 1-2-3     LOTUS32.CNV    12/9/96  107 KB   Import only
	2.0-4.0
	
	Lotus Notes     NIMS32.DLL                       Allows Lotus Notes to
	3.X-4.X         MSCTHUNK.DLL                     import documents from
	                MSWRD632.CNV                     Microsoft Word 6.0, 7.0,
	                MSWRD832.CNV                     and 97
	
	Microsoft Word  MACWRD32.CNV   12/9/96  177 KB   Can be used to save
	4.x and 5.x                                      documents in these file
	for Macintosh                                    formats. No converter is
	                                                 required for opening
	                                                 these formats in Word 97.
	
	Microsoft       MSWRD632.CNV   12/9/96  133 KB   The import converter is
	Word6/95 Import                                  used by non-Far East
	                                                 versions of Word 97 to
	                                                 open files created in the
	                                                 Far East versions of Word
	                                                 6.0 and 7.0.
	
	Microsoft       MSWRD832.CNV   12/9/96  253 KB   Used by Word 6.0, 7.0 and
	Word 97 Import                                   other applications to 
	                                                 open Word 97 files.
	
	Text Recovery   RECOVR32.CNV   12/9/96  38 KB    Recovers text from
	                                                 damaged documents
	
	MS-DOS          TXTLYT32.CNV   12/9/96  185 KB   Import and export text
	Text with                                        files
	Layout
	
	Text with Layout TXTLYT32.CNV  12/9/96  185 KB   Import and Export.
	                                                 Preserves line breaks.
	                                                 Inserts spaces in a
	                                                 converted document to
	                                                 approximate indents,
	                                                 tables, line spacing,
	                                                 paragraph spacing, and
	                                                 tab stops. Converts
	                                                 section breaks and page
	                                                 breaks to paragraph
	                                                 marks. Use this format to
	                                                 convert a document to a
	                                                 text file format while
	                                                 preserving the page
	                                                 layout.
	
	Text Only       INTERNAL                         Saves text without its
	                                                 formatting. Converts all
	                                                 section breaks, page
	                                                 breaks, and new line
	                                                 characters to paragraph
	                                                 marks. Uses the ANSI
	                                                 character set. Select
	                                                 this format only if the
	                                                 destination program
	                                                 cannot read any of the
	                                                 other available file
	                                                 formats.
	
	MS-DOS Text     INTERNAL                         Converts files the same
	                                                 way as Text only format.
	                                                 Uses the extended ASCII
	                                                 character set, which is
	                                                 the standard for MS-DOS-
	                                                 based programs. Use this
	                                                 format to share documents
	                                                 between Word and non-
	                                                 Windows-based programs.
	
	Text Only       INTERNAL                         Saves text without
	With Line                                        formatting. Converts all
	Breaks                                           line breaks, section
	                                                 breaks, and page breaks
	                                                 to paragraph marks. Use
	                                                 this format when you want
	                                                 to maintain line breaks
	                                                 3/4 for example, when
	                                                 transferring documents to
	                                                 an electronic mail
	                                                 system.
	
	MS-DOS Text     INTERNAL                         Saves text without
	With Line                                        formatting. Converts all
	Breaks                                           line breaks, section
	                                                 breaks, and page breaks
	                                                 to paragraph marks. Use
	                                                 this format when you want
	                                                 to maintain line breaks
	                                                 3/4 for example, when
	                                                 transferring documents to
	                                                 an electronic mail
	                                                 system.
	
	Rich Text       INTERNAL                         Saves all formatting.
	Format (RTF)                                     Converts formatting to
	                                                 instructions that other
	                                                 programs, including
	                                                 compatible Microsoft
	                                                 programs, can read and
	                                                 interpret.
	
	Word 2.x for   WNWRD232.CNV   12/9/96   180 KB   Can be used to save
	Windows                                          documents in this file
	                                                 format. No converter is
	                                                 required for opening
	                                                 documents in Word 2.x
	                                                 format in Word 97.
	
	Works 3.x       WORKS332.CNV   12/9/96  116 KB   Import and Export of Word
	                                                 for Windows processing 
	                                                 files only.
	
	For more information about how to convert spreadsheet and database files, please
	see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q138416 How to Convert Works Files for Use with Word Mail Merges
	
	Works 4.0       WORKS432.CNV   12/9/96  254 KB   Import and Export of Word
	                                                 for Windows processing
	                                                 files only.
	
	WordPerfect 5.x WPFT532.CNV    12/9/96  333 KB   WordPerfect 5.x Converter
	                                                 for MS-DOS Import and
	                                                 Export and Windows
	
	WordPerfect 6.x WPFT632.CNV    12/9/96  247 KB   WordPerfect 6.x Converter
	                                                 Can be used only to open
	                                                 version 6.x documents,
	                                                 not to save them.
	
	
	Word 6/95       WRD6EX32.CNV   12/9/96  19 KB    Required for export in a
	                                                 special RTF format for
	                                                 Word6.0 and 7.0
	
	Valupack\Wrd97cnv Folder:
	Setup program   WRD97CNV.EXE   12/9/96  953 KB   Word 97 Converter Setup
	to install                                       for Word 6.0 or 7.0.
	Word import                                      Includes Word 97 import
	converter                                        converter (and
	                                                 accompanying .dll) as
	                                                 well as new graphics
	                                                 filters (pict, emf, jpeg,
	                                                 png).
	
	For more information about the Word 97 import converter, please see the following
	article in the Microsoft Knowledge Base:
	
	  
	
	  Q162214 WD: How to Obtain the Word 97-2000 Import Converter
	
	Supplemental File Converters for Word 97
	----------------------------------------
	
	For additional information about how to obtain supplemental converters, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q212265 WD: Additional Text Converters and Image Filters Available in
	  Microsoft Office Converter Pack
	
	Supported
	Formats         Converter      Size         Comments
	--------------------------------------------------------------------------
	Ami Pro 3.0     AMI332.CNV     238 KB       Ami Pro 3.0 Converter - 32
	                                            Same converter available for
	                                            Microsoft Word 7.0.
	
	Microsoft Word  DOSWRD32.CNV   209 KB       Word for MS-DOS Converter.
	3.x, 4.x, 5.x,                              Same converter that was
	and 6.x for                                 available for Microsoft Word 
	MS-DOS                                      7.0.
	
	RFT-DCA         RFTDCA32.CNV   163 KB       Same converter that was
	Converter                                   available for Microsoft Word
	                                            7.0.
	
	WordStar        WRDSTR32.CNV   268 KB       Import Only. Same converter
	1.0-2.0 for                                 that was available for
	Windows                                     Microsoft Word 7.0
	
	WordStar        WRDSTR32.CNV   268 KB       Import and Export. The Save
	3.3-7.0 for                                 As File Type list references
	MS-DOS                                      only WordStar versions 4.0 and
	                                            7.0 for MS-DOS, but WordStar
	                                            for MS-DOS releases 3.3, 5.0,
	                                            5.5, and 6.0 can also open
	                                            files saved in WordStar 4.0
	                                            and 7.0 formats. Same
	                                            converter that was available
	                                            for Microsoft Word 7.0.
	
	Write for       WRITE32.CNV    76 KB        Windows Write import and
	Windows                                     export converter. Same
	2.x-3.x                                     converter that was available
	                                            for Microsoft Word 7.0
	
	Microsoft SGML Author Add-on Designed for Word 97 for Windows
	-------------------------------------------------------------
	
	SGML Author is an easy-to-use add-on tool and converter for Word for Windows that
	allows users to save the documents as SGML from within Word. The unique
	validation engine in SGML Author provides users with a friendly feedback loop
	using the built-in Annotation feature in Word to identify and correct DTD
	compliance errors.
	
	For more information about SGML Authoring, please see the following article in
	the Microsoft Knowledge Base:
	
	  
	
	  Q195011 WD97: General Information About SMGL Author for Word
	
	Discontinued File Converters
	----------------------------
	
	File formats previously supported by Word 6.x for which support has been
	discontinued in Word 7.0, Office 95, Word 97, and Office 97 include the
	following:
	
	- DisplayWrite
	
	- MultiMate
	
	NOTE: Conversion of DisplayWrite and MultiMate documents can be accomplished by
	saving from DisplayWrite and MultiMate in RFT-DCA format and then using the
	RFT-DCA supplemental converter described above to import the RFT-DCA into
	Microsoft Word 97.)
	
	- MultiPlan
	
	- Works 2.x/3.x for MS-DOS
	
	- Word 1.x for Windows export
	
	- Office Document Architecture (ODA)
	
	- Publisher 2.0
	
	- Works for Windows 2.X
	
	
	Microsoft Office Converter Pack
	-------------------------------
	
	The Microsoft Office Converter Pack installs some additional text converters and
	graphic (image) filters that may not be available in your installation of
	Microsoft Word 97 for Windows.
	
	For additional information the Microsoft Office Converter Pack, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q212265 WD: Additional Text Converters and Image Filters Available in
	  Microsoft Office Converter Pack
	
	REFERENCES
	==========
	
	For more information about supported file formats, click the Office Assistant,
	type "File Format Converters Supplied with Word" click Search, and then click to
	view "File Format Converters Supplied with Word."
	
	Additional query words: foreign convert shipped text
	
	======================================================================
	Keywords          : kbinterop kbualink97 kbdta kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
