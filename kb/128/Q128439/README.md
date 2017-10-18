---
layout: page
title: "Q128439: MHS: Err Msg: Cannot Open NETDIR.TAB"
permalink: kb/128/Q128439/
---

## Q128439: MHS: Err Msg: Cannot Open NETDIR.TAB

	Article: Q128439
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear in the MHSGATE.LOG file:
	
	  Cannot open netdir.tab.
	
	Also, hundreds of temporary files may be created in the MHS\SW directory.
	
	CAUSE
	=====
	
	MHS uses the NETDIR.TAB file to assign unique filenames. If the NETDIR.TAB file
	is not available, INPOST.EXE cannot move a message from the Microsoft Mail
	database to the MHS system. If a message cannot be delivered properly to MHS,
	the INPOST.EXE program may create enough files so that the NETDIR.TAB file
	cannot allocate an additional unique filename.
	
	RESOLUTION
	==========
	
	Deleting the hundreds of files in the MHS\SW directory should resolve this
	problem temporarily. Check the MHS queue list (by selecting Queue, MHS from the
	Mail Administrator program) to see if there is a file that is addressed to an
	invalid user. Also, ensure that a POSTMASTER mailbox has been created for the
	gateway postoffice.
	
	MORE INFORMATION
	================
	
	If no POSTMASTER mailbox exists, and if a message is addressed incorrectly, a
	recursive loop will be created. Each attempt to deliver a message to the
	postmaster generates an additional nondelivery message addressed to the
	postmaster. This can cause the MHS\SW directory to become full and will cause
	the above error.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
