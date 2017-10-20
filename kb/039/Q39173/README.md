---
layout: page
title: "Q39173: Exe2bin Will Not Support exe Files Created with dosseg"
permalink: /kb/039/Q39173/
---

## Q39173: Exe2bin Will Not Support exe Files Created with dosseg

{% raw %}

	Article: Q39173
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 12-JAN-1989
	
	When creating a com file, the exe2bin utility will not accept an
	executable file if the file was created using the dosseg directive
	in MASM.
	
	This behavior occurs because the dosseg directive places 16 bytes at
	the beginning of the executable to ensure proper byte alignment. This
	format is not acceptable to exe2bin. To work around this problem, do
	not use the dosseg directive when creating an executable to be
	converted into com format.

{% endraw %}
