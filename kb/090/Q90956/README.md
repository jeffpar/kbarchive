---
layout: page
title: "Q90956: Specifying a Memo Field Text Editor for FoxBASE+"
permalink: /kb/090/Q90956/
---

## Q90956: Specifying a Memo Field Text Editor for FoxBASE+

{% raw %}

	Article: Q90956
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WP variable in the CONFIG.FX file specifies the text editor for memo fields
	in FoxBASE+. This variable may specify a third-party editor to create and edit
	memo fields.
	
	For example, to edit memo fields with Microsoft Word, place the following line in
	the CONFIG.FX file:
	
	     WP=C:\WORD\WORD.EXE
	
	To load a work processor with FoxBASE+, enough conventional memory to load both
	FoxBASE+ and the word processor is required. (FoxBASE+ uses 512K and requires a
	minimum of 360K free memory.) FoxBASE+ cannot remove itself from memory to free
	space for the word processor. When the user attempts to load the word processor
	and not enough memory is free, an
	
	  Insufficient Memory
	
	error occurs.
	
	To make additional memory available, modify the AUTOEXEC.BAT and CONFIG.SYS files
	to remove unnecessary drivers and terminate-and-stay-resident programs from
	memory.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	

{% endraw %}
