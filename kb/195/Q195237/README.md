---
layout: page
title: "Q195237: LABEL Doc Error in MS Excel 97 Developer's Kit"
permalink: /kb/195/Q195237/
---

## Q195237: LABEL Doc Error in MS Excel 97 Developer's Kit

	Article: Q195237
	Product(s): Microsoft Press
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Excel 97 Developer's Kit ISBN 1-57231-498-2 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 325 of the "Microsoft Excel 97 Developer's Kit", the documentation for
	the LABEL record is incomplete and misleading. This article contains the
	clarification of that documentation.
	
	MORE INFORMATION
	================
	
	The documentation on page 325 shows the structure of a LABEL record to be the
	following:
	
	  Offset     Name     Size     Contents
	  -------------------------------------
	
	   4        rw        2         Row
	   6        col       2         Column
	   8        ixfe      2         Index to the XF Record
	   10       cch       2         Length of the string
	   12       rgch      var       The string
	
	This implies that the structure of strings in LABEL records differs from that of
	other strings in BIFF files. The correct format for LABEL records, shown below,
	brings them into compliance with the string format for BIFF files, as described
	on page 264 of the "Microsoft Excel 97 Developer's Kit".
	
	  Offset     Name     Size     Contents
	  -------------------------------------
	
	   4        rw        2         Row
	   6        col       2         Column
	   8        ixfe      2         Index to the XF Record
	   10       cch       2         Length of the string
	   12       grbit     1         Option flags (described on page 264)
	   13       rgb       var       Array of string characters
	
	Additional query words: mspress ISBN 1-57231-498-2
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : WINDOWS:1.0
	
	=============================================================================
	
