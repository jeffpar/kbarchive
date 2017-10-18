---
layout: page
title: "Q168804: WD97: Operating Parameter Limitations and Specifications"
permalink: kb/168/Q168804/
---

## Q168804: WD97: Operating Parameter Limitations and Specifications

	Article: Q168804
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenv kbusage winword word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists some of the operating parameter limits of Word 97 and Visual
	Basic for Applications.
	
	MORE INFORMATION
	================
	
	Visual Basic for Applications Limits
	------------------------------------
	
	  Operating parameter                   Limit
	  -------------------------------------------
	
	  Macro size                            Limited only by available memory
	
	  Number of macros per template         150
	
	  Number of global macros               150
	
	  Length of variable, subroutine,
	  and user-defined function names       80
	
	  Length of string variables            65,280 characters
	
	  Highest number                        1.7976931348623 x 10308
	
	  Number of nesting levels for
	  conditionals and loops                16
	
	  Number of nesting levels for
	  calls to subroutines or functions
	  in another macro                      5
	
	  Number of arguments that can be
	  passed to a subroutine or function    20
	
	Word Limits
	-----------
	
	  Operating parameter                   Limit
	  -------------------------------------------
	
	  Number of open windows                Limited only by available memory
	
	  Maximum file size                     32 MB (see note 1)
	
	  Number of words in custom
	  dictionaries                          5,000
	
	  Maximum custom dictionary
	  file size                             65,593 bytes (64KB)
	
	
	
	  Main dictionary (U.S. English)        137,000 words
	
	  Thesaurus (U.S. English)              44,000 key words
	
	  Thesaurus (U.S. English)              458,000 synonyms
	
	  Length of bookmark names              40 characters
	
	  Number of bookmarks per document      16,379
	
	  Length of AutoText entry names
	  (including spaces)                    32 characters
	
	  Number of AutoText entries per        limited by template file
	  document template                     size/available memory
	
	  Number of global AutoText entries     limited by template file
	                                        size/available memory
	
	  Length of style names                 255 characters
	
	  Number of styles per document
	  or template                           10,000
	
	  Number of fields per document         32,000
	
	  Number of general switches in
	  a field                               10
	
	  Number of field-specific switches
	  in a field                            10
	
	  Number of nesting levels for fields   20
	
	  Number of subdocuments in a master
	  document                              255
	
	  Number of columns in a table          63
	
	  Number of newspaper columns           45 (number of columns is affected
	                                        by page size and margin settings)
	
	  Number of tabs set in a paragraph     64
	
	  Minimum page height                   0.1 inch
	
	  Maximum page height                   22 inches
	
	  Minimum page width                    0.1 inch
	
	  Maximum page width                    22 inches
	
	  Number of custom toolbars             Limited only by available memory
	
	  Number of custom toolbar buttons      Limited only by available memory
	
	  Number of characters per line         768
	
	  Minimum Font size                     1 point
	
	  Maximum Font size                     1,638 point (22 inches)
	
	  Number of fonts per document          32,767
	
	  Amount of space between characters    1,584 point
	
	  Distance text can be raised or
	  lowered                               1,584 point
	
	  Maximum color palette                 256 colors
	
	  Maximum number of Font Colors         16 (auto not included)
	
	  Default CacheSize                     64K
	
	  Default Bitmap Cache (Bitmapmemory)   1 MB
	
	Note: Maximum File Size
	-----------------------
	
	The maximum file size is limited to 32 MB for the total document text only and
	does not include graphics regardless of how the graphic is inserted (Link to
	file, Save with document, or Float over text) into the document. Therefore, if
	the file contains graphics, the maximum file size can be larger than 32 MB.
	Note: This maximum file size is different from previous versions of Word.
	
	For additional information about graphic compression, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q132271 Importing Bitmaps: Determining Size and Memory Requirements
	
	
	Additional query words: 8.0 specs environment
	
	======================================================================
	Keywords          : kbenv kbusage winword word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
