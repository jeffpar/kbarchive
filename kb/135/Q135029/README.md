---
layout: page
title: "Q135029: X400: Doc Err: Incorrect Step in Extracting MAPTBL.OUT"
permalink: /kb/135/Q135029/
---

## Q135029: X400: Doc Err: Incorrect Step in Extracting MAPTBL.OUT

	Article: Q135029
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On page 129 of the Microsoft Mail Gateway X.400 "Administrator's Guide," the
	steps for extracting the MAPTBL.OUT file to ASCII are incorrect.
	
	If you follow the steps in the section "To modify the customized address maps
	file," you will get the following error message for step 1:
	
	  Bad command or Filename
	
	RESOLUTION
	==========
	
	To avoid getting the above error message, include the full path to the
	X400DMAP.EXE file.
	
	MORE INFORMATION
	================
	
	The correct procedure for extracting the MAPTBL.OUT file to ASCII is as
	follows:
	
	1. Change to the X400 subdirectory of your MAILDATA directory.
	
	2. Copy MAPTBL.OUT to MAPOUT.OLD.
	
	3. Type the following:
	
	  " <path>X400dmap > filename " (without the quotation marks)
	
	  where <path> is the path to the executable X400DMAP.EXE, and filename is
	  the name of the ASCII file. Do not name it MAPTBL.OUT.
	
	4. Edit the ASCII file, and save the changes.
	
	5. Copy and/or Move the ASCII file to the directory where X400CMAP.EXE resides.
	
	6. Type the following:
	
	  NOTE: When you execute X400CMAP.EXE, it overwrites the existing customized
	  address maps file. As a result, all existing customized address maps are
	  lost.
	
	  " X400CMAP ADMIN -PPASSWORD -F<filename> -D<drive> " (without the
	  quotation marks)
	
	Additional information on X400CMAP.EXE and X400DMAP.EXE can be found in the
	Microsoft Mail Gateway X.400 "Administrator's Guide," Appendix B. Also, more
	information about X400 address mapping is in Chapter 6 of the "Administrator's
	Guide."
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
