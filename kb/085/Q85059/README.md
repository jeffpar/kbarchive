---
layout: page
title: "Q85059: FFAPI: The Limitations of FFAPI"
permalink: kb/085/Q85059/
---

## Q85059: FFAPI: The Limitations of FFAPI

	Article: Q85059
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Here is a brief summary of the limitations of the File Format Application
	Programming Interface (FFAPI):
	
	1. There is no way to get addressing information. The address of a user or a
	  group must be known before building the FFAPI file.
	
	2. The FFAPI programs are single DOS processes. They must be run from a DOS
	  workstation, and nothing else can be running on that machine. They are not
	  Windows compatible.
	
	3. FFAPI does not limit message size. FFAPI could put a huge file into a user's
	  mailbag, but the mail program itself would be unable to read it because of
	  memory problems.
	
	4. FFAPI processes only the first fifty items found in the queue. Once these
	  have been distributed, FFAPI processes the next fifty items. This applies to
	  both incoming and outgoing mail.
	
	REFERENCES
	==========
	
	"Microsoft Mail for PC Networks Software Development Kit Application File Format
	API"
	
	"Microsoft Mail for PC Networks Software Development Kit Gateway File Format
	API"
	
	
	Additional query words: 3.00 pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:3.0
	
	=============================================================================
	
