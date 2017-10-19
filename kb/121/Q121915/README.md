---
layout: page
title: "Q121915: CONN: Err Msg: Exiting on (date time) with Status 70  (118)"
permalink: /kb/121/Q121915/
---

## Q121915: CONN: Err Msg: Exiting on (date time) with Status 70  (118)

	Article: Q121915
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 1.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to launch the Microsoft Mail Connection MACGATE.EXE program with an
	invalid entry in the MSGATE.INI file, you may get an error similar to the
	following:
	
	  exiting on 06-15-94 06:24:33 with status 70 (118)
	
	CAUSE
	=====
	
	The above error may be caused by the following situations:
	
	1. This error is generated when the following MSGATE.INI lines
	
	        User = Admin
	        Password = Password
	
	  accidentally get placed on the same line, as shown below
	
	        User = Admin Password = Password
	
	2. You have enhanced security enabled on your version 3.x Microsoft Mail for PC
	  Network postoffice.
	
	RESOLUTION
	==========
	
	1. This can easily be remedied by editing the MSGATE.INI file.
	
	  NOTE: If you edit it, be sure that you do not leave a space at the end of the
	  User = Admin line; this will be interpreted as an incorrect administrative
	  mailbox name. A trailing space will not show up on a visual inspection of the
	  MSGATE.INI file so you should double check this when you edit the file.
	
	2. The 1.0b Connection Gateway was not enhanced security aware so you must
	  re-run the Setup program for Microsoft Mail to turn off enhanced security
	  before the Connection Gateway will run properly.
	
	Additional query words: 1.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn100b
	Version           : :1.0b
	
	=============================================================================
	
