---
layout: page
title: "Q123372: PC Adm: Err Msg: Notice 19 Error Accessing Post Office..."
permalink: /kb/123/Q123372/
---

## Q123372: PC Adm: Err Msg: Notice 19 Error Accessing Post Office...

	Article: Q123372
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using version 3.2 of Microsoft Mail for PC Networks when attempting to
	update or modify external postoffice definitions, you may receive the following
	error message:
	
	  Notice 19 Error Accessing Post Office Definition
	
	CAUSE
	=====
	
	This error will occur when the access permissions to the XTN subdirectory of the
	postoffice or the *.XTN file itself are too restrictive.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure that the rights are set correctly. For more
	information, see page 18 of the version 3.2 "Administrator's Guide."
	
	MORE INFORMATION
	================
	
	The *.XTN files hold the routing, naming, and sign-on information for external
	services and postoffices. If the ADMIN.EXE program cannot write to this file,
	the changes and updates cannot be made. As a result, the ADMIN.EXE program will
	generate the Notice 19 error.
	
	If the XTN file is missing, the error received will be either
	
	  Notice 10 No external post office names have been defined yet
	
	  -or-
	
	  Notice 92 There are no post offices defined at this network which are
	  connected Direct via modem.
	
	If the XTN file is held open by another process, the error will be:
	
	  Notice -1 Device not Available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
