---
layout: page
title: "Q45624: CodeView &quot;??&quot; Command Can't Show All of Large Structures"
permalink: /kb/045/Q45624/
---

## Q45624: CodeView &quot;??&quot; Command Can't Show All of Large Structures

{% raw %}

	Article: Q45624
	Product(s): See article
	Version(s): 2.20 2.30 | 2.20 2.30
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | SR# G890607-19918 | mspl13_basic
	Last Modified: 8-AUG-1989
	
	Question:
	
	How can I view structures with many members in CodeView with the "??"
	command? It shows only those members that fit on the screen. Is there
	some trick I haven't found?
	
	Response:
	
	Unfortunately, the "??" command is limited in this respect -- there is
	no way to view the last members of a large structure with this
	command. This feature is under review and will be considered for
	inclusion in a future release.
	
	Instead, however, you can view each element of the structure by itself
	by dereferencing the struct and element, i.e., "?structname.field".
	
	There are at least two ways to work around the problem in CodeView
	Versions 2.20 and 2.30. One way is to shrink or nest the structures.
	Another workaround is to use the "?" or Watch command to look at the
	individual member(s) you want to see.

{% endraw %}
