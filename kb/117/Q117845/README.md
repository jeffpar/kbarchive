---
layout: page
title: "Q117845: PC Win: Err Msg: MSSPELL.DLL Is Not Compatible"
permalink: kb/117/Q117845/
---

## Q117845: PC Win: Err Msg: MSSPELL.DLL Is Not Compatible

	Article: Q117845
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user tries to choose Spelling from the Edit menu or uses the F7 shortcut
	key, the following error is received:
	
	  STOP The version of MSSPELL.DLL is not compatible
	  with this version of Mail.
	
	CAUSE
	=====
	
	This error occurs if the search path specified in the MS Proofing Tools section
	of the WIN.INI file is pointing to an older version of the MSSPELL.DLL file.
	
	RESOLUTION
	==========
	
	1. Look in the WIN.INI file in the MS Proofing Tools section for the location of
	  MSSPELL.DLL.
	
	2. Go to the specified directory and check the date on the file.
	
	  If using version 3.2 of Mail for PC Networks, the file should be dated no
	  earlier than 03/24/93.
	
	  If using an earlier version of Mail, check the Windows client software
	  directory on the postoffice for the date of the MSSPELL.DLL file located
	  there. The copy of the file that is specified by MS Proofing Tools should be
	  no older than the file that is installed by the Windows client Setup program
	  on the Mail postoffice.
	
	3. Replace the older version of MSSPELL.DLL with the correct version in the
	  directory specified in the WIN.INI file.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
