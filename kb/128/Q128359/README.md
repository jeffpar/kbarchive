---
layout: page
title: "Q128359: PC Adm: Err Msg: Error File Not Accessible"
permalink: kb/128/Q128359/
---

## Q128359: PC Adm: Err Msg: Error File Not Accessible

	Article: Q128359
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you run the Administration program (ADMIN.EXE) for versions 3.2 and 3.2a
	of Microsoft Mail for PC Networks, you may get the following error:
	
	  Notice XXX - Error File not Accessible Check Server Connection
	
	where XXX represents a valid error number based upon the action that was
	attempted.
	
	For example, if you were attempting to add a duplicate user, you would see the
	following error message:
	
	  Notice 21 - Error file not accessible check Server connection.
	
	Rather than the error:
	
	  Notice 21 - Name already defined as a user mailbox.
	
	RESOLUTION
	==========
	
	This problem is caused by the following file being corrupt or missing. It is
	located in the MAILDATA\GLB subdirectory.
	
	    NAME               BYTES                DATE
	   ------             -------              ------
	  ERRORADM.GLB        22,272              03-24-93
	
	This file may be restored from backup, copied from another postoffice, or from a
	dummy postoffice created from the original diskettes.
	
	Additional query words: 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
