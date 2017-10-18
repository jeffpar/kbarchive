---
layout: page
title: "Q79889: Using Stacker XT/8 Coprocessor and Windows 3.0"
permalink: kb/079/Q79889/
---

## Q79889: Using Stacker XT/8 Coprocessor and Windows 3.0

	Article: Q79889
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using the Stacker XT/8 Coprocessor with Microsoft Windows running in
	386 enhanced mode, you need to add an EMMExclude statement to the [386Enh]
	section of the SYSTEM.INI file.
	
	NOTE: This does not apply to the Stacker AT/16 Coprocessor because it does not
	use a RAM address.
	
	MORE INFORMATION
	================
	
	The range of memory addresses depends on the base address of the Stacker XT/8
	card. The base address is found on the Stacker DEVICE statement in the
	CONFIG.SYS file and is identified by the /B parameter.
	
	The following table lists the seven possible memory ranges, based on the base
	address of the XT/8 Coprocessor card:
	
	  Base Address     <range> to Exclude
	  ------------     ------------------
	
	  c400             c400-c7ff
	  c800             c800-cbff
	  cc00             cc00-cfff
	  d000             d000-d3ff
	  d400             d400-d7ff
	  d800             d800-dbff
	  dc00             dc00-dfff
	
	For example, if the Stacker XT/8 Coprocessor base address is d000, using Notepad,
	add the parameter listed below to the SYSTEM.INI file under the heading
	[386Enh]:
	
	     EMMEXCLUDE=d000-d3ff
	
	The Stacker products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	REFERENCES
	==========
	
	Stacker version 2.0 README.DOC
	
	Additional query words: 3.0 3.0a 3.00 3.00a 1.1 3.1 3.10 2.0 coprocessor 3.11 co processor
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
