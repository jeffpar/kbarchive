---
layout: page
title: "Q112636: Backup and Restore of COM.CFG"
permalink: kb/112/Q112636/
---

## Q112636: Backup and Restore of COM.CFG

	Article: Q112636
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	The first step to ensuring proper configuration recovery is to back up your
	SNA Server configuration file (COM.CFG). This file resides on your SNA
	Server primary configuration server, and on any SNA Server backup
	configuration servers, in your <SNAROOT>\SYSTEM\CONFIG directory, shared to
	network users as <SERVER NAME>\COMCFG\COM.CFG.
	
	This file contains important configuration information of the SNA Server,
	including SNA Servers in the domain, SNA connections they own, 3270 and
	APPC LUs configured, LU pools, and SNA Server user/group information.
	
	To back up the COM.CFG file, do the following if you are using SNA 2.11:
	
	1. From the File menu of SNA Admin, choose Backup.
	
	2. Type the name of the configuration file.
	
	3. In the dialog box, specify the drive you want to back up. If you want to back
	  up a network drive, select the Network check box, or press ALT+W, to
	  establish a network connection.
	
	When you are satisfied with your options, choose the OK button.
	
	To back up the COM.CFG file, do the following (if you are using SNA 3.0, or
	SNA 4.0):
	
	1. From SNA Server Manager, select: File and Backup Configuration.
	
	2. Type the name of the backup configuration file and select the location where
	  you want the backup configuration file saved.
	
	When you are satisfied with the filename and location choose the Save
	button.
	
	(Note: All backup COM.CFG files have an .SNA extension.)
	
	To restore your configuration (SNA 2.11):
	
	1. From the File menu in SNA Admin, choose Restore.
	
	2. Choose the path and filename you want to restore.
	
	To restore your configuration (SNA 3.0, SNA 4.0)
	
	1. From SNA Server Manager, select: File and Restore Configuration
	
	2. Choose the path and filename you want to restore.
	
	This file replaces the COM.CFG in the <SNAROOT>\SYSTEM\CONFIG directory.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
