---
layout: page
title: "Q71763: BUG: HELPMAKE Allows Only One CrossRef Per Line in RTF Files"
permalink: kb/071/Q71763/
---

## Q71763: BUG: HELPMAKE Allows Only One CrossRef Per Line in RTF Files

	Article: Q71763
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.05,1.06,1.07,1.08; OS/2:1.05,1.06,1.07
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft HELPMAKE Utility for MS-DOS, versions 1.05, 1.06, 1.07, 1.08 
	- Microsoft HELPMAKE Utility for OS/2, versions 1.05, 1.06, 1.07 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A help database source file in rich-text format (RTF) will not compile correctly
	with HELPMAKE versions 1.05, 1.06, 1.07, and 1.08 if the file has multiple cross
	references on a single line.
	
	RESOLUTION
	==========
	
	To have more than one cross reference per line in an RTF-based help file, a
	formatting flag such as bold, italic, or underline must be added to the second
	cross reference.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in HELPMAKE versions 1.05, 1.06,
	1.07, and 1.08.
	
	MORE INFORMATION
	================
	
	If you are using a word processor such as Microsoft Word to create a help file,
	any text that is hidden should be treated as a cross reference. These references
	enable you to switch between topics in the finished help file. When the file is
	saved as RTF, the hidden text is preceded with the \v formatting flag.
	
	When there are multiple cross references on one line, the second reference does
	not work correctly. For example, when the sample RTF help file below is compiled
	and then run in QuickHelp, choosing the Blue option brings up the BlueHelp, but
	choosing the Red option produces the following error:
	
	  "Red" topic not found.
	
	This is the line in the source where HELPMAKE incorrectly compiles the second
	cross reference:
	
	     \par            { Blue}{\v BlueHelp}    { Red}{\v RedHelp}
	
	One of the following workarounds can be used to eliminate this problem:
	
	1. Add an underline (\ul), bold (\b), or italic (\i) formatting flag to the
	  second cross reference on the line with the two cross references. For
	  example, with bold formatting, the line will appear as follows:
	
	        \par            { Blue}{\v BlueHelp}   { Red}{\v\b RedHelp}
	
	-or-
	
	2. Place the cross references in different paragraphs. For example:
	
	        \par   { Blue}{\v BlueHelp} \par  { Red}{\v RedHelp}
	
	-or-
	
	3. Place the cross references on different lines:
	
	        \par   { Blue}{\v BlueHelp} \line { Red}{\v RedHelp}
	
	  Note: Both the \par and the \line options will cause Red to appear below Blue
	  on the help screen (they were originally on the same line).
	
	-or-
	
	4. Create the help file source in QuickHelp format rather than RTF. Information
	  on QuickHelp format is contained in the HELPMAKE documentation and online
	  help.
	
	Sample RTF Help File (TEST.RTF)
	-------------------------------
	
	  HELPMAKE options needed: -s1 -otest.hlp test.rtf
	
	  {\rtf0
	  \par >> QuickHelp
	  \par >>h.default
	  \par >>h.contents
	  \par            { Blue}{\v BlueHelp}    { Red}{\v RedHelp}
	  \par
	  \par >>BlueHelp
	  \par { BlueHelp - Main Screen}{\v h.default}
	  \par
	  \par >>RedHelp
	  \par { RedHelp  - Main Screen}{\v h.default}
	  \par
	
	Additional query words: buglist1.05 buglist1.06 buglist1.07 buglist1.08
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbHELPMAKE kbZNotKeyword3 kbHELPMAKE105DOS kbHELPMAKE106DOS kbHELPMAKE107DOS kbHELPMAKE108DOS kbHELPMAKE105OS2 kbHELPMAKE106OS2 kbHELPMAKE107OS2
	Version           : MS-DOS:1.05,1.06,1.07,1.08; OS/2:1.05,1.06,1.07
	
	=============================================================================
	
