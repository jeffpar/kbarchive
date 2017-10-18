---
layout: page
title: "Q184891: Server.HTMLEncode Garbles Extended Characters"
permalink: kb/184/Q184891/
---

## Q184891: Server.HTMLEncode Garbles Extended Characters

	Article: Q184891
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ASP script using Server.HTMLEncode produces garbled extended characters in
	single-byte character set (SBCS) code pages other than code page 1252 (U.S.
	ANSI).
	
	This affects Eastern European languages, such as Czechoslovakian, Russian, and
	Hungarian.
	
	CAUSE
	=====
	
	This problem may occur due to both of the following causes:
	
	- HTMLEncode incorrectly writes numeric character entities using SBCS codepoint
	  values instead of the Unicode values. In HTML, &#xxx; entities represent
	  Unicode values, not SBCS codepoints. When HTMLEncode determines that a
	  numeric entity must be written, it must simply write the raw Unicode value in
	  decimal, not the local code page equivalent.
	
	  -and-
	
	- HTMLEncode uses the wrong logic in determining when to write out a numeric
	  character entity versus simply inserting the raw character. It appears to do
	  the opposite of what is expected; it writes the incorrect character entities
	  for characters that can be represented in Session.Codepage, and writes the
	  nearest precomposed equivalent for other characters.
	
	Instead, it should write the raw SBCS character for characters that can be
	represented in Session.Codepage, and the Unicode numeric character entity for
	characters that cannot.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	Additional query words: sp hot fix qfe character set code point uni-code code-page 
	code-point scrambled scrambles html encode incorrect wrong erroneous akz
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
