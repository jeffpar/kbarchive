---
layout: page
title: "Q100998: BUG: ? Command with FONT Clause Prints Double Spaced"
permalink: /kb/100/Q100998/
---

## Q100998: BUG: ? Command with FONT Clause Prints Double Spaced

{% raw %}

	Article: Q100998
	Product(s): Microsoft FoxPro
	Version(s): 2.5,2.5a,2.5b,2.6,3.0,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp500aBUG kbvfp250bug kbvfp250aBUG kbvfp250bBUGkbbuglist
	Last Modified: 08-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a ? print command with a FONT clause sometimes prints the text double
	spaced.
	
	CAUSE
	=====
	
	The screen font or print font is smaller than the font used by the question mark
	command.
	
	RESOLUTION
	==========
	
	Make sure the screen font or the print font is the same as the font used in the
	question mark command. You can change the print font by issuing the SET PRINT
	FONT command. Actually if you set the screen or printer font ahead of time,
	there is no need to use the font clause on the question mark command unless you
	wish to change fonts briefly.
	
	In FoxPro for Windows 2.6 the screen font can be changed by issuing the following
	command:
	
	  MODIFY WINDOW SCREEN FONT "ARIAL", 10
	
	In Visual FoxPro the screen font can be changed by issuing the following
	command:
	
	  _SCREEN.FONTNAME="ARIAL"
	  _SCREEN.FONTSIZE=10
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FoxPro 2.5, 2.5a, 2.5b, and 2.6
	for Windows. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Issue the following commands:
	
	     MODIFY WINDOW SCREEN FONT "ARIAL", 8    && FoxPro 2.6
	
	  -or-
	
	     _SCREEN.FONTNAME="ARIAL"                && Visual FoxPro
	     _SCREEN.FONTSIZE=8
	
	     ? "Hello there?"
	     ? "Hello there?"
	
	  These commands cause the text to be displayed single spaced, with one line of
	  text directly on top of the next.
	
	2. Issue the following commands:
	
	     ? "Hello there?" FONT "arial",10
	     ? "Hello there?" FONT "arial",10
	
	  The text appears double spaced with one full blank line between each line.
	  This phenomenon occurs both on screen and in printed output.
	
	Additional query words: doublespace singlespace double-space single-space two lines kbFP250 kbFP260 kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp500aBUG kbvfp250bug kbvfp250aBUG kbvfp250bBUG kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :2.5,2.5a,2.5b,2.6,3.0,5.0,5.0a,6.0,7.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
