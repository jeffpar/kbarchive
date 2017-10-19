---
layout: page
title: "Q128357: PC DB: Err Msg: Not Find Mail System Data Files on Drive M:"
permalink: /kb/128/Q128357/
---

## Q128357: PC DB: Err Msg: Not Find Mail System Data Files on Drive M:

	Article: Q128357
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
	
	When you start the Administration program (ADMIN.EXE) for Microsoft Mail for PC
	Networks, the following message may be received:
	
	  Could Not Find Mail System Data Files on Drive M:
	
	CAUSE
	=====
	
	This may be caused if ADMIN.EXE cannot open the MODEM.GLB with READ/WRITE
	access.
	
	When ADMIN.EXE launches, it tries to open the MODEM.GLB with READ/WRITE access.
	If this fails, either due to corruption or the READ-ONLY attribute having been
	applied, ADMIN.EXE will fail to start, returning the above error.
	
	RESOLUTION
	==========
	
	If this should occur, either remove the READ-ONLY attribute, or remove the
	file.
	
	A new MODEM.GLB can be created by doing the following:
	
	1. Delete MODEM.GLB
	
	2. Restart ADMIN.EXE
	
	  A MODEM.GLB will be recreated automatically.
	
	3. Because the new MODEM.GLB may not have the correct settings, select Config,
	  Serial in ADMIN.EXE to set the baud rate, comm prt, and dial type.
	
	Additional query words: 3.20 error MODEM.GLB
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
