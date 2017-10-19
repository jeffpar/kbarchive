---
layout: page
title: "Q112270: PC MAPI: Err Msg: Cannot Open Help File"
permalink: /kb/112/Q112270/
---

## Q112270: PC MAPI: Err Msg: Cannot Open Help File

	Article: Q112270
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Choose Send from the File menu of version 2.0c of Microsoft Word for Windows.
	Choose Help from the Send Note dialog box and then choose Contents. The
	following error message appears:
	
	  Cannot Open Help File
	
	CAUSE
	=====
	
	The MAPIHELP= parameter in the MSMAIL.INI file points to the location of the
	Simple MAPI help file, MSMAIL.HLP. This parameter is created by Mail. If you run
	Word prior to running Mail, the parameter is not created and the location of
	MSMAIL.HLP remains unknown.
	
	RESOLUTION
	==========
	
	Add the MAPIHELP= line with the full path of MSMAIL.HLP to the MSMAIL.INI file
	in the [Microsoft Mail] section.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
