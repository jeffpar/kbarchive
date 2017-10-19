---
layout: page
title: "Q141030: PRB: Changing _ASCIIROWS Modifies a Report"
permalink: /kb/141/Q141030/
---

## Q141030: PRB: Changing _ASCIIROWS Modifies a Report

	Article: Q141030
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you increase the value of the _ASCIIROWS system variable, the output of a
	report to the text file does not look the way you might expect. There are more
	blank lines in the report. It does not seem that more information is printed on
	one page if the value of _ASCIIROWS is changed from 63 to 120, but there are
	more blank lines.
	
	CAUSE
	=====
	
	The value of _ASCIIROWS does not control the number of records that appear on
	one page. This number is the same regardless of the output selected for the
	report; it does not change when going from a graphical report to an ASCII
	report. _ASCIIROWS defines the number of ASCII lines that the graphical report
	is printed to. If the graphical report defines a page with less lines than the
	ASCII result, blank lines are inserted between detail lines, and the report
	looks double- or triple-spaced.
	
	WORKAROUND
	==========
	
	You can combine increasing _ASCIIROWS with reducing the size of the Detail band
	to increase the number of lines on one page. You can do this by using smaller
	font sizes and collapsing the Detail band.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: scramble
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
