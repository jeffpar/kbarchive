---
layout: page
title: "Q164618: WD97: Conversion of Bullets and Numbering"
permalink: /kb/164/Q164618/
---

## Q164618: WD97: Conversion of Bullets and Numbering

{% raw %}

	Article: Q164618
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbualink97 kbconversion word97
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article outlines the affect of different conversions on bullets, numbers,
	and outline numbering lists from Word.
	
	MORE INFORMATION
	================
	
	  Converter                    Result
	  ----------------------------------------------------------------------
	
	  WordPerfect 5.0, 5.1, 5.2    WordPerfect paragraph numbers convert to
	                               Word sequence fields by default. Word
	                               automatically numbers lists to convert
	                               to paragraph numbers.
	
	                               To convert WordPerfect paragraph numbers
	                               to plain text, set this option in the
	                               registry as follows:
	
	                                  FavourSequenceFields=No
	
	For additional information on the FavourSequenceFields option, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q158467 Description of Options for Conversion Wizard
	
	  WordPerfect 6.x              All outline and paragraph numbering is
	  Windows or MS-DOS            converted in Word.
	
	  Word 6.0/95                  Bullets and outline numbering lists are
	                               converted to regular text but retain their
	                               appearance.
	
	                               Bulleted lists are converted to regular
	                               text but retain their appearance.
	
	  AmiPro 3.x                  Bullets, numbering, and outline numbering
	                              is converted to plain text.
	
	  Text Only                    Bullets, numbering, outline numbers are
	  MS-DOS Text Only             converted to plain text. Indents are not
	                               retained.
	
	  Text w/Line Breaks           Bullets, numbering, outline numbering are
	  MS-DOS Text w/ Line Breaks   converted to plain text. Indents are not
	                               retained.
	
	  MS-DOS Word 3-6              Bullets, numbering, outline numbering are
	  RTF-DCA                      converted to plain text. Indents are
	                               retained with tabs.
	
	  Text with Layout             Bullets, numbering, outline numbering are
	  MS-DOS Text with Layout      converted to plain text. Indents are
	                               retained with spaces.
	
	  Rich Text Format (RTF)       All bullets, numbering, and outline
	                               numbering are converted in Word.
	
	  Mac Word 4.0, 5.0, 5.1       Bullets, numbering, outline numbering are
	                               converted to plain text. Indents are
	                               preserved with tabs.
	
	  Word for Windows 2.0         Bullets, numbering, outline numbering are
	                               converted in Word.
	
	  HTML Document                Bullets, numbering, outline numbering are
	                               converted to the normal text style.
	                               Indents are preserved with tabs.
	
	  Unicode Text                 Bullets, numbering, outline numbering are
	                               converted to plain text. Indents are
	                               retained with tabs.
	
	  Windows Write 3.0            Bullets, numbering, outline numbering are
	                               converted to plain text. Indents are
	                               retained with tabs.
	
	  Works 3.0 for Windows        Bullets, numbering, outline numbering are
	  Works 4.0 for Windows        converted to plain text. Indents are
	                               retained with tabs.
	
	  WordStar 4.0                 Bullets are not converted. Numbering and
	  WordStar 7.0                 outline numbering is converted to plain
	                               text. Indents are retained with tabs.
	                               Formatting is not retained.
	
	Additional query words: convert
	
	======================================================================
	Keywords          : kb3rdparty kbualink97 kbconversion word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	
	=============================================================================
	

{% endraw %}
