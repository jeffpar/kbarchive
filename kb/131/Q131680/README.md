---
layout: page
title: "Q131680: PC Ext: Possible Status Values in F2 and F3 Screens"
permalink: kb/131/Q131680/
---

## Q131680: PC Ext: Possible Status Values in F2 and F3 Screens

	Article: Q131680
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the possible values and meanings of the Status entries
	displayed by the F2 and F3 screens of versions 2.1, 3.0, and 3.2 of Microsoft
	Mail for PC Networks EXTERNAL.EXE program.
	
	MORE INFORMATION
	================
	
	A mail administrator may view information about the postoffice drives the
	EXTERNAL.EXE program is delivering mail to by pressing either the F2 or F3
	function keys during processing. The F2 key displays information about
	postoffices connected via LAN or WAN drives. The F3 key displays information
	about postoffices connected via an asynchronous connection.
	
	When one of these keys is pressed, one of the two EXTERNAL.EXE Mail Postoffice
	Status screens will be displayed. The information displayed is the Network name,
	the Postoffice name, the Postoffice Serial number, the Postoffice Status, the
	Postoffice R# (retry number), and the Postoffice Sent, Session, MTD (month to
	date), and YTD (year to date) values.
	
	The intent of this article is to describe the possible values and meanings
	associated with the Status entry displayed in either one of the Mail Postoffice
	Status screens. The following describes the Status values:
	
	Value           Meaning
	
	START           Displayed during initialization and before
	               EXTERNAL.EXE reads the MASTER.GLB for that postoffice.
	
	UNINIT          Displayed after START but before the routing
	               information is loaded into EXTERNAL.EXEs memory.
	
	OK              Startup and initialization complete.
	
	ERROR           Displayed after a critical error, unable to connect, etc.
	
	FULL            Displayed after the disk is found to be full.
	
	FAILED          EXTERNAL.EXE has given up on the drive.
	
	NO-REF          The postoffice is defined in the ADMIN.EXE program
	               as an externally defined postoffice, but the
	               EXTERNAL.EXE program does not have this postoffice
	               listed in its drive tables.
	
	NOTE: The F2 and F3 screens also show information about each individual
	postoffice at the bottom of the screen (separated by a line). This information
	also includes a Status entry. These Status entries are the same as those
	described in this article.
	
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	
