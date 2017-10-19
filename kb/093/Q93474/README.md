---
layout: page
title: "Q93474: Cinemania Err Msg: There Was an Error Writing This File"
permalink: /kb/093/Q93474/
---

## Q93474: Cinemania Err Msg: There Was an Error Writing This File

	Article: Q93474
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1992 edition
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows 1992 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Microsoft Multimedia Viewer (VIEWER.EXE) from File Manager and open
	CINMANIA.MVB with the File Open command, the following error message displays if
	you attempt to run ListMaker:
	
	  There was an error writing this file. The disk may be full, or it may be
	  write-protected.
	
	Choosing the Cancel button allows you to enter ListMaker; however, another error
	message is then displayed:
	
	  This list has been corrupted.
	
	WORKAROUND
	==========
	
	Start Cinemania by choosing the Cinemania icon in Program Manager or by
	selecting Cinemania from the Windows 95 Start Menu and run ListMaker.
	
	MORE INFORMATION
	================
	
	ListMaker allows you to create a list and add movies; however, if Cinemania is
	opened as describe above, you cannot save the list. This happens because the
	working directory for the ListMaker defaults to the CD-ROM drive.
	
	Microsoft has confirmed this to be a problem in Cinemania 1992. This problem was
	corrected in Cinemania 1994.
	
	Additional query words: 2.00 1992
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1992
	Version           : :1992 edition
	
	=============================================================================
	
