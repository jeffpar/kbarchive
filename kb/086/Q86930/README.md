---
layout: page
title: "Q86930: 3COM: What Must Be Done Before Installing the 3Com Gateway"
permalink: kb/086/Q86930/
---

## Q86930: 3COM: What Must Be Done Before Installing the 3Com Gateway

	Article: Q86930
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Before you install the Microsoft Mail Gateway to 3Com 3+Mail, you need to
	perform the following steps:
	
	1. Connect to the network drive where the Microsoft Mail data files are located.
	  You must have full access rights to the mail data files.
	
	2. On the local drive of the dedicated gateway PC, create a subdirectory for the
	  gateway files. You must create a directory before installation; the
	  installation program does not do this for you.
	
	3. Log on to both the 3+Open Network and the 3+Name Service as the
	  administrative user.
	
	4. Make note of the name of the 3+Mail Service that is running.
	
	Once you have done this, make sure you have the following information ready for
	the installation:
	
	- The drive and path to the directory where the gateway files are to go.
	
	- The unique DOMAIN:ORGANIZATION the _GATEWAY user will be defined in.
	
	  This must be a new DOMAIN:ORGANIZATION; it uniquely identifies the 3+Mail
	  gateway. This DOMAIN:ORGANIZATION is created in the 3+Name Service. The
	  _GATEWAY user also is created in this DOMAIN:ORGANIZATION, which acts as the
	  mailbag for all mail going from 3+Mail to MS Mail.
	
	- The full three-part name of the mail server for the _GATEWAY user. This is in
	  the format SERVERNAME:DOMAIN:ORGANIZATION.
	
	The remaining installation questions can be changed later or left at the default.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to 3Com 3+Mail Administrator's Guide"
	
	
	Additional query words: 3.00 pcmail 3com install
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus300
	Version           : :3.0
	
	=============================================================================
	
