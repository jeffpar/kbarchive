---
layout: page
title: "Q194342: WINS Error: Denied the Replication Request"
permalink: /kb/194/Q194342/
---

## Q194342: WINS Error: Denied the Replication Request

	Article: Q194342
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a WINS replication partner, you may receive the following error
	when you click Replicate Now:
	
	  The WINS server <IP> denied the replication request because the
	  current
	  WINS server is not listed among it's replication partners. Continue
	  Replication?
	
	CAUSE
	=====
	
	This error message caused if you have not clicked OK and had the changes you
	made applied before clicking Replicate Now.
	
	RESOLUTION
	==========
	
	To resolve this problem, click OK first and then go back and click Replicate
	Now. You will get a message indicating that the replication request has been
	queued and you will not get the error message.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
