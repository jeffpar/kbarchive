---
layout: page
title: "Q99204: PC Adm: Doc Err: Setting Attributes for High Traffic Network"
permalink: kb/099/Q99204/
---

## Q99204: PC Adm: Doc Err: Setting Attributes for High Traffic Network

	Article: Q99204
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 25 of versions 3.2 and 3.5 of Microsoft Mail for PC Networks
	"Administrator's Guide," under the section heading "Setting File Attributes for
	High-Traffic Networks," the following incorrect statement appears:
	
	  ...we recommend that you take the time to add a shareable attribute to all
	  .KEY files and to .GLB files that are Read/Write.
	
	NOTE: The section, "Setting File Attributes for High-Traffic Networks," has been
	removed in later versions of the Microsoft Mail for PC Networks version 3.2
	"Administrator's Guide" (printed after October 1993).
	
	Please refer to page 439 of the version 3.2 and page 443 of the version 3.5
	Microsoft Mail for PC Networks "Administrator's Guide" for the correct
	information for setting file attributes.
	
	If Shareable attributes are set to the CONTROL.GLB file, message corruption is
	possible. The CONTROL.GLB file contains two long integers, which are used for
	generating new and unique filenames. One integer is for generating names and the
	other is for mail and attachment filenames.
	
	Corruption is possible if two processes try to create messages at exactly the
	same time. These processes can be anything that creates mail, such as the Mail
	clients, Admin program, Gateways, and External and Dir-Sync processes. Although
	this is unlikely, it is possible two processes grab the CONTROL.GLB and allocate
	the same .MAI file name.
	
	MORE INFORMATION
	================
	
	If the same .MAI file name is allocated, External will display the following
	errors:
	
	  05-14-93 11:32 Sending mail (1)
	  05-14-93 11:32 From: TELECOM/NTNETCU1
	  05-14-93 11:32 To: TELECOM/NITGHUB1
	  05-14-93 11:32 Transferring mail: mail file is: I:MAI\MA3\0000D213.MAI.
	  05-14-93 11:32 Sending P2...
	  05-14-93 11:32 Target file: M:MAI\MA7\0005CC17.MAI
	  05-14-93 11:32 Sending P1...
	  05-14-93 11:32 Target file: M:P1\0005CC17.P1
	  05-14-93 11:32 P1 file successfully sent.
	  05-14-93 11:32 Delivering new mail to TELECOM/NITGHUB1.
	  05-14-93 11:32 Processing received mail queue at: M:TELECOM/NITGHUB1.
	  05-14-93 11:32 M:MAI\MA7\0005CC17.MAI was not found.
	  05-14-93 11:32 Notice in LOG\SYSTEM.LOG on: M: TELECOM/NITGHUB1
	  05-14-93 11:32 Error opening FIPS file. Failure to open file.
	  05-14-93 11:32 Delivering of mail from INQUEUE3 is complete.
	  05-14-93 11:32 Delivering new mail to TELECOM/NITGHUB1.
	  05-14-93 11:32 Releasing dynamic drive I:.
	  05-14-93 11:32 Dynamically disconnecting from I:.
	  05-14-93 11:32 Successful.
	
	Correspondingly the SYSTEM.LOG will have an error like this:
	
	  
	
	  System log entry on: 05-14-93 11:32
	  External program has detected a mail problem.
	  Failure queuing diagnostic data back to sender due to:
	   External program has detected a mail problem.
	
	  Message data:
	
	 From: TELECOM/NTNETCU1/POSTMASTER
	 Date: 05-14-93
	 Time: 11:32
	 Subject: Mail failure
	  [012] This corrupt message cannot be delivered. Contact your
	  administrator.
	
	  -------------------------------------------------------------------
	
	  System log entry on: 05-14-93 11:32
	  External program has detected a mail problem.
	  Failure queuing diagnostic data back to sender due to:
	   External program has detected a mail problem.
	  Message data:
	 From: TELECOM/NTNETCU1/POSTMASTER
	 Date: 05-14-93
	 Time: 11:32
	 Subject: Mail failure
	  [016] Message was not sent due to missing message file.
	  Mail item was not delivered to:
	 Mail Probe
	
	Additional query words: 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	
