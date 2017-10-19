---
layout: page
title: "Q166428: How to Use the Chinese Code Converter"
permalink: /kb/166/Q166428/
---

## Q166428: How to Use the Chinese Code Converter

	Article: Q166428
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation, Pan Chinese Edition, version 4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Chinese Code Converter is a tool used to convert Chinese plain text to
	different code pages. However, the file must be in .txt format; other document
	formats are not supported.
	
	Code page types include:
	
	- Unicode, CNS11643, IBM PS/55
	
	- GB, TCA, TELEgraph
	
	- BIG5, ETEN, and WANG
	
	Text files can be switched between these coding types. The converter recognizes a
	source file as either a Unicode or non-Unicode file as it is being opened. If it
	is a Unicode based file, the code page will select Unicode; otherwise, it will
	select the current locale code page. For example, Chinese (PRC or Hong Kong)
	locale will set the default to GB code page, and Chinese (Taiwan) locale will
	set the default to BIG5 code page.
	
	CNS11643, IBM PS/55, TCA, TELEgraph, ETEN, and WNAG code page selections are only
	available in Chinese (Taiwan) locale. Unicode, GB, and BIG5 code pages are
	available in all three Chinese locales.
	
	This tool also translates Traditional Chinese Characters to Simplified Chinese
	characters. The reverse is true, as well.
	
	MORE INFORMATION
	================
	
	To convert a .txt file code page:
	
	1. Click the Start button, point to Program, point to Accessories, and then
	  click Chinese Code Converter.
	
	  -or-
	
	  Type Chnuconv.exe at the Command Line.
	
	2. On the Source tab, click Open to access the source file.
	
	3. Select the corresponding code page for the source file, if it is not Unicode
	  or not the same as the current locale code page.
	
	4. Click the Destination tab, and then click the output code page.
	
	5. To convert characters between Simplified and Traditional Chinese, click the
	  Option tab and then select the appropriate option:
	
	  - Do Not Convert
	  - From Traditional to Simplified
	  - From Simplified to Traditional
	
	6. Click Convert Now, and then click Save As.
	
	7. Assign a file name to the converted file with an extension that designates
	  the format.
	
	The following tables show the valid combinations for the Chinese Code Converter
	selections:
	
	Text File Contains Only BIG5 Chinese Characters
	------------------------------------------------------------------
	Option / Destination code page | To BIG5  | To GB   | To Unicode
	------------------------------------------------------------------
	From Simplified to Traditional |   N/A    |   N/A   |   N/A
	------------------------------------------------------------------
	From Traditional to Simplified |   N/A    |   T     |   T
	------------------------------------------------------------------
	Do not convert                 |   N/A    |   T     |   T
	------------------------------------------------------------------
	
	Text File Contains Only GB/GBK Chinese Characters
	------------------------------------------------------------------
	Option / Destination code page | To BIG5  | To GB   | To Unicode
	------------------------------------------------------------------
	From Simplified to Traditional |  M, S    |  M, S   |  M, S
	------------------------------------------------------------------
	From Traditional to Simplified |  N/A     |  M, T   |  M, T
	------------------------------------------------------------------
	Do not convert                 |  T       |  N/A    |  M
	------------------------------------------------------------------
	
	Text File Contains Only Unicode Chinese Characters
	------------------------------------------------------------------
	Option / Destination code page | To BIG5  | To GB   | To Unicode
	------------------------------------------------------------------
	From Simplified to Traditional |  M, S    |  M, S   |  M, S
	------------------------------------------------------------------
	From Traditional to Simplified |  N/A     |  M, T   |  M, T
	------------------------------------------------------------------
	Do not convert                 |  T       | M, S, T |  N/A
	------------------------------------------------------------------
	
	T: Document contains Traditional Chinese characters
	S: Document contains Simplified Chinese characters
	M: Document Mixed with Traditional and Simplified Chinese characters
	N/A: Not a valid selection
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbHLangChinesePan kbWinNT400search
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
