---
layout: page
title: "Q86944: 3COM: Which PC Mail Files Are Accessed by the Gateway"
permalink: kb/086/Q86944/
---

## Q86944: 3COM: Which PC Mail Files Are Accessed by the Gateway

	Article: Q86944
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The files accessed by the Microsoft Mail Gateway to 3Com 3+Mail are the same
	files accessed by the Microsoft Mail File Format API (FFAPI) programs.
	
	  File                          Action
	  ----                          ------
	
	  Open mail file                Verify input file exists.
	  ACCESS2.GLB                   Verify admin ID/password.
	  ACCESS.GLB
	  MASTER.GLB                    Check network type for MS Mail.
	  C850SORT.GLB                  Get sort information.
	  ACCESS2.GLB
	  GROUP.GLB                     Get group information.
	  NETWORK.GLB                   Get network information.
	  Read from mail file
	  CONTROL.GLB                   Get unique filename.
	  Create and write to MAI file  Writes mail message.
	  Create and write to P1 file   Creates envelope file with address.
	  INQUEUE.KEY                   Creates pointer to record in MBG
	                                file.
	  INQUEUE.MBG                   Writes header for P1 file.
	  INQUEUE.KEY
	  Mail file
	  INQUEUE.MBG
	  INQUEUE.KEY                   Get pointer to unprocessed mail.
	  INQUEUE.MBG                   Get P1 and MAI filename.
	  P1 file
	  MAI file
	  Gateway KEY file              Gets pointer to record in MBG file.
	  Gateway MBG file              Writes header for MAI file.
	  Gateway KEY file              Updates pointer.
	  Delete P1 file
	  Close INQUEUE.KEY
	  Close MAI file
	  Close INQUEUE.MBG
	  Close mail file
	  Delete mail file
	
	
	Additional query words: 3.00 pcmail files
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus300
	Version           : :3.0
	
	=============================================================================
	
