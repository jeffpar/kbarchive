---
layout: page
title: "Q183239: Application Exception in Rasman.exe in Function SnaRasUnbind()"
permalink: kb/183/Q183239/
---

## Q183239: Application Exception in Rasman.exe in Function SnaRasUnbind()

	Article: Q183239
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An SNA Server computer using SNARAS may experience an application exception in
	Rasman.exe in function SnaRasUnbind() after successfully opening and closing a
	number of SNARAS connections in succession.
	
	An entry similar to the following will be written to a Drwtsn32.log file in the
	Windows NT directory when the application exception occurs:
	
	  
	
	  Application exception occurred:
	          App: exe\rasman.dbg (<process id>)
	          When: <date> @ <time>
	          Exception number: c0000005 (access violation)
	
	    <data omitted>
	
	  function: SnaRasUnbind
	
	    <data omitted>
	
	  FAULT ->63701c81 8b7604  mov esi,[esi+0x4]   ds:014bfa0e=????????
	
	    <data omitted>
	
	In one reported instance of this problem, the application exception occurred
	after 20 to 30 SNA Server SNARAS connections were opened and then closed in
	succession. Each connection was established to download files from a remote
	system and was closed after the files were downloaded.
	
	CAUSE
	=====
	
	The application exception is caused when SNARAS attempts to access memory that
	has been released.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
