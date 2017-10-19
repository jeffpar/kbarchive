---
layout: page
title: "Q61976: -Gi with Certain Optimizations Creates No .MDT File"
permalink: /kb/061/Q61976/
---

## Q61976: -Gi with Certain Optimizations Creates No .MDT File

	Article: Q61976
	Product(s): See article
	Version(s): 6.00   | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 29-MAY-1990
	
	The compile option -Gi (incremental compile) normally produces two
	files, a module-description table (.MDT) and an incremental link table
	(.ILK). However, with -Ol (loop optimization) and either -Os (optimize
	for space) or -Ot (optimize for speed) turned on, the -Gi option fails
	to produce the .MDT file. Note that the -Ox option behaves similarly
	because it includes -Ol and -Ot.
	
	This behavior is by design and is due to code generation differences,
	which the .MDT file cannot track from compilation to compilation.
