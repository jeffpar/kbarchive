---
layout: page
title: "Q147135: CONN: Err Msg: The User Is Not the Network Manager"
permalink: /kb/147/Q147135/
---

## Q147135: CONN: Err Msg: The User Is Not the Network Manager

	Article: Q147135
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get the following error message when you run the Macintosh Connection
	Name Utility (CNU):
	
	  The user is not the Network Manager.
	
	CAUSE
	=====
	
	This error can occur on two conditions:
	
	- The account and/or password supplied is not correct for the Network Manager
	  of the AppleTalk Mail Server currently selected.
	
	- The Network Manager account has recently been modified and the modifications
	  have not yet been reflected in the All list. Because the CNU verifies the
	  supplied account and password information against the All list, the list must
	  be current for the login to succeed.
	
	RESOLUTION
	==========
	
	If the account and/or password is not correct, specify the correct target
	AppleTalk Mail server, and re-enter the Network Manager's account and password.
	
	If the Network Manager account has been recently modified, and the changes are
	not reflected in the All list, wait with the AppleTalk Mail Server idle until
	the All list has been updated (usually within 15-20 minutes) and try again.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
