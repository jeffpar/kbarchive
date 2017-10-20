---
layout: page
title: "Q31489: Tabs Expanded to Eight Spaces; Filetab Switch Changes Spacing"
permalink: /kb/031/Q31489/
---

## Q31489: Tabs Expanded to Eight Spaces; Filetab Switch Changes Spacing

{% raw %}

	Article: Q31489
	Product(s): See article
	Version(s): 1.00   | 1.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | Tar70793 | mspl13_basic
	Last Modified: 1-SEP-1988
	
	Question:
	
	Why are tabs expanded to eight spaces even though I set the tabstop
	variable and the entab switch?
	
	Response:
	
	Neither the tabstops or the entab switch affect how tabs are expanded
	when the file is read. The filetab switch is used to determine how
	many spaces to expand each tab. For example, "filetab:4" will expand
	each tab in the file to four spaces.
	
	The entab switch controls how the editor converts multiple spaces
	into tabs when a line is changed or a file is saved. The default is
	one (1). The following chart shows different values and their
	meanings:
	
	Value   Meaning
	
	0       Tabs are not used to represent white space.
	1       All multiple spaces outside of quoted strings
	        are converted to tabs (default).
	2       All multiple spaces are converted to tabs.
	
	Tabstops control the number of spaces between each logical tabstop
	for the editor. The default is four (4).

{% endraw %}
