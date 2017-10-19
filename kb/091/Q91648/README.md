---
layout: page
title: "Q91648: CONN: Err Msg: Alias Already Exists"
permalink: /kb/091/Q91648/
---

## Q91648: CONN: Err Msg: Alias Already Exists

	Article: Q91648
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error can occur when version 1.0 of the Microsoft Mail Connection
	imports names from Microsoft Mail for AppleTalk Networks into the postoffice for
	Microsoft Mail for PC Networks
	
	  Error 900: (line X) Alias already exists.
	
	where the X in (line X) is a line number corresponding to an AppleTalk name in
	the import stream.
	
	CAUSE
	=====
	
	There are three possible causes (see the RESOLUTION section below for
	corrections):
	
	1. Two names in the AppleTalk Mail directory are not unique within the first 30
	  characters. PC Mail limits alias names to a maximum of 30 characters, so the
	  first 30 characters must be unique. Otherwise, PC Mail generates the error to
	  prevent a duplicate alias. PC Mail generates the error regardless of whether
	  you use automatic or manual propagation.
	
	  For example, the following names in the MSIMPORT.IMP file sent across the
	  gateway cause PC Mail to generate two Error 900 messages:
	
	  A Network Manager@MSMail Server #04455
	  A Network Manager@MSMail Server #09876
	  A Network Manager@MSMail Server #9656867
	
	2. Version 1.0 of the Microsoft Mail Connection may sort the AppleTalk user list
	  incorrectly prior to exporting changes to the PC Network. As a result, the
	  Microsoft Mail Connection may export names that it exported previously.
	  Because the names already exist, PC Mail generates the Error 900 message.
	
	3. If you add one or more AppleTalk names to the Postoffice Address List (POL)
	  using the -A option for IMPORT.EXE and an alias identical to that name
	  already exists in the POL, PC Mail reports the Error 900 message. It does
	  this for any type of alias supported by Mail for PC Networks and its
	  gateways.
	
	RESOLUTION
	==========
	
	The following resolutions correspond with the causes listed above:
	
	1. Make all AppleTalk names unique within the first 30 characters before you
	  export them.
	
	2. Incorrect sorting: Update the gateway to version 1.0b.
	
	3. Alias conflict: Choose an appropriate solution from these three:
	
	   - Exclude one of the names from the POL.
	
	   - Rename the UserID or ServerID on the Macintosh to make it unique.
	
	   - Change the alias for the name already in the POL.
	
	For more information about MSIMPORT.EXE and automatic name propagation, refer to
	the appendix of the "Microsoft Mail Connection" manual.
	
	
	Additional query words: 1.00 1.00b Connection PCMail MACMail
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn100
	Version           : :1.0
	
	=============================================================================
	
