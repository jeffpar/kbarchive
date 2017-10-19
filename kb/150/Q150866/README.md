---
layout: page
title: "Q150866: XADM: Location of Microsoft Exchange Books OnLine"
permalink: /kb/150/Q150866/
---

## Q150866: XADM: Location of Microsoft Exchange Books OnLine

	Article: Q150866
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 26-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Books Online files are located on the Microsoft Exchange
	Server CD under the directory tree:
	
	  \setup\<platform>\bin
	
	where <platform> is specific to the processor type. The files are
	Exchdoc.hlp and Exchdoc.cnt
	
	MORE INFORMATION
	================
	
	Note: If you copy the files to your local hard disk, it is important that
	
	  you copy both the .HLP and the .CNT file. The .CNT file is the table of
	  contents for the Help file.
	
	There are three ways to access Microsoft Exchange Books Online:
	
	- You can run them directly from the CD by running the Exchdoc.hlp file. This
	  will save Hard Disk space.
	
	- You can copy them to your local Hard disk and run Exchdoc.hlp.
	
	- You can install Microsoft Exchange Books Online by running the Microsoft
	  Exchange Setup program, selecting add/remove, selecting Exchange, clicking on
	  the Change Option button, and checking the help check box. This will copy the
	  files to your local hard disk and create an icon called Books Online in the
	  Microsoft Exchange group in Program Manager.
	
	For either of the first two options, you do not need to run the Microsoft
	Exchange Setup program from the Microsoft Exchange Server CD.
	
	Additional query words: On-Line OnLine help
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
