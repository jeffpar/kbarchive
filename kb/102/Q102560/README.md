---
layout: page
title: "Q102560: PC Win: Err Msg: Notice 8 Error in Transmitting Mail..."
permalink: /kb/102/Q102560/
---

## Q102560: PC Win: Err Msg: Notice 8 Error in Transmitting Mail...

	Article: Q102560
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send mail in versions 3.0, 3.0b, and 3.2 of Microsoft Mail
	for Windows, the following error message may appear:
	
	  Notice 8
	  Error in transmitting mail or Server Disk is full
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Verify that the server disk contains ample free space.
	
	2. Verify the rights and ownership of all files, especially in the following
	  directories:
	
	  GLB
	  ATT\ (and all subdirectories)
	  FOLDERS\ (and all subdirectories)
	  MBG
	  KEY
	  MAI\ (and all subdirectories)
	  P1
	
	3. Verify there are no missing, hidden, or locked files, especially in the
	  following directories:
	
	  GLB (especially the CONTROL.GLB)
	  MBG
	  KEY
	  MAI\ (and all subdirectories)
	
	Additional query words: 3.00 3.00b 3.20 errmsg notice8 transmiting eight
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
