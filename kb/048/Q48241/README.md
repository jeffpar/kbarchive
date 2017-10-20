---
layout: page
title: "Q48241: Relationship Between Map File and Physical Memory"
permalink: /kb/048/Q48241/
---

## Q48241: Relationship Between Map File and Physical Memory

{% raw %}

	Article: Q48241
	Product(s): Microsoft Programming Utilities
	Version(s): 3.x,4.x,5.x
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In situations where memory is very short or where CodeView interacts with your
	program, it is sometimes necessary to use the DEBUG.COM program supplied with
	DOS.
	
	Using DEBUG is more difficult than using SYMDEB or CodeView because DEBUG has no
	symbolic features. You must use the map produced by the /M option when you link
	with a standard DOS overlay linker (i.e., not a segmented executable linker) to
	locate specific parts of your program.
	
	However, since DOS relocates programs when it loads them, the addresses given in
	the map need conversion before you can use them.
	
	This conversion is simple: DOS adds the address of the start segment (defined
	below) to each segment address in the load map. The offsets never change from
	the values shown in the link map -- only the segments change.
	
	MORE INFORMATION
	================
	
	The start segment is the base address of the Program Segment Prefix (PSP) plus
	the size of the PSP in paragraphs. Since the PSP is always 100h (256) bytes
	long, the size of the PSP is 10h paragraphs.
	
	Note: DOS puts the base segment address of the PSP in DS and in ES when a program
	begins execution.
	
	For example, assume that the link map says that the function _funct is at
	0004:05A0 (all values in hex) and that the global variable _errno is at
	0192:00E3. Suppose further that when the program is loaded into DEBUG, the DS
	and ES registers contain 2BA5 -- the segment address of the PSP. (Use the R
	command to display the values of the registers.)
	
	The start segment for loading the program will be 2BB5 -- the value of the PSP
	base address (2BA5) + 10h to allow for the 10h paragraph length of the PSP (100h
	bytes).
	
	Thus, the function _funct will be located as follows:
	
	  0004:05A0   -- address of _funct in the link map
	  2BB5        -- start segment address (PSP + 10h)
	  ---------
	  2BB9:05A0
	
	And _errno will be located as follows:
	
	  0192:00E3   -- address of _funct in the link map
	  2BB5        -- start segment address (PSP + 10h)
	  ---------
	  2D47:00E3
	
	Use this calculation on any address in the link map to find where the symbol is
	located in memory when actually loaded.
	
	The H (Hex Arithmetic) command in DEBUG can be helpful when performing these
	calculations, as can a hex calculator with constant feature.
	
	Additional query words: no32bit kbinf LinkIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK5xDOSSearch
	Version           : :3.x,4.x,5.x
	
	=============================================================================
	

{% endraw %}
