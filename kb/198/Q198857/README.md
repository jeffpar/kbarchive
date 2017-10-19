---
layout: page
title: "Q198857: XFOR: 8007010b Err: Notes/SNADS/PROFS Connector Fails To Install"
permalink: /kb/198/Q198857/
---

## Q198857: XFOR: 8007010b Err: Notes/SNADS/PROFS Connector Fails To Install

	Article: Q198857
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During installation of the Microsoft Exchange Notes, Microsoft Exchange SNADS,
	or Microsoft Exchange PROFS (OV/VM) connectors, you might receive the following
	error message:
	
	  Severe. Install Failed. Check the log
	  C:\exchsrvr\CONNECT\Exchconn\setup\lmeilog.txt and the NT Event Log for
	  further details. Setup is exiting...
	
	Examining the Lmeilog.txt file, you find the following:
	
	  
	
	  MEXIEXTN: Started: Tue Apr 14 09:37:26 1998
	  PARAMETER: ORG=ORG
	  PARAMETER: SITE=SITE
	  PARAMETER: SERVER=SERVER001
	  PARAMETER: MACHINE=I386
	  PARAMETER: DISPLAYNAME= Extension for Lotus Notes Connector for i386
	  PARAMETER: NAME=lsntscp0
	  PARAMETER: EXTDLL=C:\exchsrvr\CONNECT\Exchconn\install\lsntscp0.dll
	  INFO: SITE DN=/o=ORG/ou=SITE
	  ERROR: unable to install lsntscp0 admin extension [8007010b]
	  MEXIEXTN: Failed [106]: Tue Apr 14 09:37:26 1998
	  MEXIEXTN: Please check the NT Application Event Log for any additional information.
	
	CAUSE
	=====
	
	The problem is caused by the lack of a Temp directory in the root of the drive,
	for example, C:\Temp.
	
	WORKAROUND
	==========
	
	Create a Temp directory in the root of the drive.
	
	
	Additional query words: TEMP PROFS LOTUS IBM
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
