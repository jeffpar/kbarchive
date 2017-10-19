---
layout: page
title: "Q135232: CONN: Running MACGATE.EXE as an Idle Process to Dispatch"
permalink: /kb/135/Q135232/
---

## Q135232: CONN: Running MACGATE.EXE as an Idle Process to Dispatch

	Article: Q135232
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MACGATE.EXE can be run as an idle process to Dispatch. The following are the
	requirements:
	
	- It must run for a specified amount of time.
	
	- It must be in a batch file which name must not include the word macgate.
	
	NOTE: MACGATE.EXE must be run via a batch file because of a problem in the way
	that MACGATE.EXE deals with the -BR (break relative) option that is passed to
	the idle process by Dispatch. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q109700 MACGATE.EXE Does Not Accept -BR Command-Line Option
	
	MORE INFORMATION
	================
	
	The following is an example of a valid Dispatch command line:
	
	  dispatch -dm -i"loop.bat"
	
	where the contents of LOOP.BAT would be:
	
	  macgate -dm
	
	You can configure MACGATE.EXE to run for a specified number of minutes by signing
	into the gateway Macintosh Mail Server as Network Manager and running the Mail,
	Gateway, Configuration option. Then set the Runtime variable to the desired
	time.
	
	For additional information on the gateway configuration dialog box, please see
	page 29 of the Microsoft Mail Connection for PC and AppleTalk Networks,
	"Administrator's Guide."
	
	Other external processes can be run within the idle process batch file. For
	example, the following LOOP.BAT will run SCHDIST.EXE for one instance,
	EXTERNAL.EXE for 10 minutes, SMTPGATE.EXE for 10 minutes, and MACGATE.EXE
	
	  schdist -dm -i1
	  external -dm -br00:00:10
	  smtpgate -dm -br00:00:10
	  macgate -dm
	
	
	Additional query words: 3.x break relative
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
