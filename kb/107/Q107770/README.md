---
layout: page
title: "Q107770: PC Setup: Run OS/2 2.x NetWare Redirector in 3.11 Environment"
permalink: /kb/107/Q107770/
---

## Q107770: PC Setup: Run OS/2 2.x NetWare Redirector in 3.11 Environment

	Article: Q107770
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are running the Novell NetWare Requester for OS/2 2.01 (for IBM OS/2 2.0
	and 2.1) without NetWare 4.0 on the network, you should perform the following
	two actions:
	
	1. Disable directory services by adding or editing the following line in the
	  NET.CFG file:
	
	  NetWare Requester
	  Directory Services OFF
	
	  NetWare Requester for OS/2 2.01 has Directory Services enabled by default
	  because the Requestor was designed to run in a NetWare 4.0 environment.
	
	  If Directory Services are not disabled, logging in to a NetWare server may be
	  slow and the following error may be returned when you try to attach to other
	  servers:
	
	  REQ1040: The requester timed out waiting for reply from server
	
	2. Copy the NetWare 3.11 OS/2 Login Utilities (contained in UT2OS2.EXE found on
	  NetWire, NOVLIB 6) into the directory where the NetWare Requester 2.01 is
	  installed.
	
	  When the NetWare Requester 2.01 is installed, the NetWare 4.0 OS/2 LOGIN
	  utilities are installed in the same directory as the Requester. In a
	  non-NetWare 4.0 environment, you must replace these NetWare 4.0 OS/2
	  utilities with NetWare 3.11 OS/2 Utilities.
	
	  LOGIN Utilities:
	
	  NetWare 4.00 OS/2              NetWare 3.11 OS/2
	  -----------------              -----------------
	  LOGIN.EXE  2-05-93             LOGIN.EXE    6-04-91
	  MAP.EXE    1-31-93             MAP.EXE      7-18-91
	  CX.EXE     2-01-93             ATTACH.EXE   7-18-91
	  NLIST.EXE  2-01-93             SLIST.EXE    7-18-91
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
