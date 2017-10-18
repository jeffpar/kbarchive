---
layout: page
title: "Q75010: Rich Text Format Subset Supported by Windows Help"
permalink: kb/075/Q75010/
---

## Q75010: Rich Text Format Subset Supported by Windows Help

	Article: Q75010
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows Help Compiler version 3.0 does not support all of the formatting
	options that word processors, such as Microsoft Word for Windows or Microsoft
	Word for the Macintosh, are capable of creating. This document briefly lists
	many of these unsupported formats.
	
	The complete specification of the Rich-Text Format (RTF) is included in the
	Microsoft Word for Windows Technical Reference (Microsoft Press).
	
	MORE INFORMATION
	================
	
	Most of the time, unsupported format information is ignored by the Help Compiler
	without any warning messages.
	
	The following items are not supported by Windows Help 3.0 in any form:
	
	  Absolute-positioned objects
	  Annotations
	  Bookmarks
	  Document formatting properties
	  Document information
	  Headers and footers
	  Index entries
	  Style sheets
	  Table of contents entries
	  Tables
	
	NOTE: In Windows Help version 3.1, Word for Windows tables are supported.
	
	The following items are used for specified purposes in the Help Compiler:
	
	Footnotes
	---------
	
	Note that the footnotes are "overloaded" and used for build tags, context
	strings, browse sequences, keywords, alternate keywords, and topic titles by the
	Help Compiler.
	
	The group containing footnote text begins with the control word "\footnote".
	Footnotes are anchored to the character that immediately precedes the footnote
	group. If automatic footnoting is defined, the group can be preceded by a
	footnote reference character, identified by the control word "\chftn". The
	following is an example of a group containing footnotes:
	
	NOTE: The "\chftn" control word is ignored in version 3.1 of the Help compiler.
	
	  ...
	  \ftnb\ftnrestart \sectd \linemod0\linex0\endhere \pard\plain \ri1170
	  \fs20 {\up6 Mead's landmark study has been amply annotated.\chftn
	  {footnote \pard\plain \s246 \fs20 {\up6\chftn }See Sahlins, Bateson,
	  and Geertz for a complete bibliography.}
	  It was her work in America during the Second World War, however, that
	  forms the basis for this paper. As others have noted, \chftn {footnote
	  \pard\plain \s246 \fs20 {\up6\chftn A complete bibliography will be
	  found at the end of this chapter.}
	  this period was a turning point for Margaret Mead.}
	  \par
	  ...
	
	Character Formatting Properties
	-------------------------------
	
	The last group of RTF control words controls character formatting properties. A
	control word preceding plain text turns on the specified attribute. Some control
	words (indicated by an asterisk following the description) can be turned off by
	the control word followed by 0 (zero).
	
	  Control Word   Meaning
	  ------------   -------
	
	  \plain         Resets application's default character formatting
	                 properties
	
	  \b             Bold*
	
	  \i             Italic*
	
	  \strike        Strikethrough. Overloaded. Used to indicate a jump term
	                 (hot spot).
	
	  \scaps         Small capitals*
	
	  \v             Hidden text. Overloaded. Used to indicate the context
	                 string of the jump destination.
	
	  \f#            Font number. (Replace # with the appropriate number.)
	
	  \fs#           Font size in half-points (default is 24) (Replace #
	                 with the appropriate number).
	
	  \ul            Continuous underline*
	
	  \uldb          Double underline Overloaded. Used to indicate a jump
	                 term (hot spot).
	
	In order to read negative \expnd values created by Word for the Macintosh,
	Windows Help uses only the low-order 6 bits of the value read. Word for the
	Macintosh does not emit negative values for \expnd. Instead, it treats values
	from 57 to 63 as -7 to -1, respectively (the low-order 6 bits of 57 to 63 are
	the same as -7 to -1).
	
	Special Characters
	------------------
	
	Special RTF characters are listed below. If a character is not recognized by the
	RTF reader, it is ignored and the text following it is considered plain text.
	The RTF specification is flexible enough to allow new characters to be added for
	interchange with other software.
	
	  Control Word   Meaning
	  ------------   -------
	
	  \'hh           A hexadecimal value, based on the specified character
	                 set (may be used to identify 8-bit values).
	
	An ASCII 9 will be accepted as a tab character. The code \<ASCII10> (line
	feed) or \<ASCII13> (carriage return) is treated as the control word \par.
	The backslashes must be included or RTF will ignore the control word. It is also
	desirable to insert a carriage-return/line- feed pair (without backslashes) at
	least every 255 characters for better text transmission over communication
	lines.
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
