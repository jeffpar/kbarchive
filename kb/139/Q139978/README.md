---
layout: page
title: "Q139978: TN3270 Server Can Incorrectly Terminate a Session"
permalink: kb/139/Q139978/
---

## Q139978: TN3270 Server Can Incorrectly Terminate a Session

	Article: Q139978
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	There are two possible symptoms:
	
	- The TN3270 Server logs an error 309 and terminates the session.
	
	  -or-
	
	- The TN3270 Server encounters an application exception.
	
	CAUSE
	=====
	
	Occasionally, the TN3270 Server can process an RUI_READ completion before the
	verb has actually completed.
	
	The RUI event completion code in the TN3270 Server leaves open timing windows
	where either of these two events might happen:
	
	- If an RUI_READ and RUI_WRITE are outstanding and the RUI_READ completes, the
	  TN3270 Server might act as if the RUI_WRITE has completed.
	
	  -or-
	
	- If an RUI_READ and RUI_WRITE are outstanding and the RUI_WRITE completes, the
	  TN3270 Server might act as if the RUI_READ has completed.
	
	In either case, the TN3270 Server can examine the RUI verb control block at the
	same time the RUI library is filling in the verb control block.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the file to correct this problem.
	
	  EXE\WIN32\TN3SERVR.EXE
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211
	Version           : WINDOWS:2.11
	
	=============================================================================
	
