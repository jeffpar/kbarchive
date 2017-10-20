---
layout: page
title: "Q153545: How to Pass Unsafe Characters in a URL"
permalink: /kb/153/Q153545/
---

## Q153545: How to Pass Unsafe Characters in a URL

{% raw %}

	Article: Q153545
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to pass unsafe characters in a URL by encoding the characters
	using the following syntax:
	
	  % HEX
	
	where HEX is the hexadecimal value of the unsafe character, for example, %2B.
	
	MORE INFORMATION
	================
	
	For example: ASCII TABLE
	
	+-----------------------+
	| ASCII | HEX | ENCODED | 
	+-----------------------+
	| +     | 2B  | %2B     | 
	+-----------------------+
	| ?     | 3F  | %3F     | 
	+-----------------------+
	
	  + URL: http://server/scripts/script.idc?Param=2+2
	  ENCODED URL: http://server/scripts/script.idc?Param=2%3F2
	
	  ? URL: http://server/scripts/script.idc?Param=Who?
	  ENCODED URL: http://server/scripts/script.idc?Param=Who%2B
	
	RFC 1738 discusses "unsafe characters" in more detail below.
	
	Unsafe:
	
	  Characters can be unsafe for a number of reasons. The space character is
	  unsafe because significant spaces may disappear and insignificant spaces may
	  be introduced when URLs are transcribed or typeset or subjected to the
	  treatment of word-processing programs. The chevron characters, < and >,
	  are unsafe because they are used as the delimiters around URLs in free text;
	  the quotation mark (""") is used to delimit URLs in some systems. The
	  character # is unsafe and should always be encoded because it is used in
	  World Wide Web and in other systems to delimit a URL from a fragment/anchor
	  identifier that might follow it. The character % is unsafe because it is used
	  for encodings of other characters. Other characters are unsafe because
	  gateways and other transport agents are known to sometimes modify such
	  characters. These characters are {, }, |, \, ^, ~, [, ], and `.
	
	  All unsafe characters must always be encoded within a URL. For example, the
	  character # must be encoded within URLs even in systems that do not normally
	  deal with fragment or anchor identifiers, so that if the URL is copied into
	  another system that does use them, it will not be necessary to change the URL
	  encoding.
	
	Additional query words: iis encode dangerous unsafe url HREF
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
