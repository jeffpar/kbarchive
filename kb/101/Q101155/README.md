---
layout: page
title: "Q101155: ERR: A20 Hardware Error with FoxBASE+/386"
permalink: /kb/101/Q101155/
---

## Q101155: ERR: A20 Hardware Error with FoxBASE+/386

	Article: Q101155
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+/386 for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may occur when you try to start Microsoft
	FoxBASE+/386 version 2.1 for MS-DOS:
	
	  A20 Hardware Error
	
	CAUSE
	=====
	
	This error is not caused by a hardware problem; it indicates that the
	FoxBASE+/386 program is not compatible with the MS-DOS HIMEM.SYS device driver.
	
	RESOLUTION
	==========
	
	Removing the HIMEM.SYS driver from the CONFIG.SYS file eliminates the message
	and allows FoxBASE+/386 to load.
	
	NOTE: The HIMEM.SYS driver, which is provided with some versions of MS-DOS,
	manages the use of extended memory. It is added to the CONFIG.SYS file when
	Microsoft Windows is installed. The HIMEM.SYS driver is necessary to run
	Microsoft Windows.
	
	For more information on the requirements for running FoxBASE+/386, query on the
	following words here in the Microsoft Knowledge Base:
	
	  " FoxBASE+/386 and requirements " (without the quotation marks)
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, pages 610- 612
	
	Additional query words: 2.10 89061
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASESearch kbFoxBASE386210DOS
	Version           : :2.1
	
	=============================================================================
	
