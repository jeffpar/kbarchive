---
layout: page
title: "Q87651: FFAPI: Sending Mail Through the MCI Gateway Using FFAPI"
permalink: /kb/087/Q87651/
---

## Q87651: FFAPI: Sending Mail Through the MCI Gateway Using FFAPI

	Article: Q87651
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (FFAPI), version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to address mail items being sent using Microsoft Mail
	File Format APIs to an MCI Mail address using the Microsoft Mail Gateway to MCI.
	
	MORE INFORMATION
	================
	
	Here is the format of an MCI Mail address, as it should appear in the FFAPI
	file's TO: field:
	
	  TO:MCI:Username^0D EMS:EMSname^0D MBX:MCIMailbox^0D
	
	Here is a description of the options used:
	
	  Option      Description
	  ------      -----------
	
	  TO:         This is a required token for the FFAPI file. Multiple
	              TO: fields are allowed.
	
	  MCI:        This token indicates that the following address is an
	              MCI Mail address.
	
	  Username:   This is the name of the person being sent to.
	
	  ^0D         The ASCII code for a carriage return (required).
	
	  EMS:        This token indicates the name or number of the
	              recipient's REMS account.
	
	  EMSname     The actual EMS should be entered here.
	
	  ^0D         The ASCII code for a carriage return (required).
	
	  MBX         This token indicates any additional information
	              required by the remote system. If the remote system is
	              a Microsoft Mail system, the full Microsoft Mail address
	              is entered here.
	
	  MCIMailbox: The actual MBX of the person being sent to. If the
	              remote system is a Microsoft Mail system, the full
	              Microsoft Mail address is entered here. There can be only
	              one MBX field in an address.
	
	  ^0D         The ASCII code for a carriage return (required).
	
	Note that there is a space before the EMS token and one before the MBX token.
	These are required. The carriage return symbol at the end of the line is in
	addition to whatever code your text editor inserts.
	
	The actual message body requires a header separator after the TEXT: token. That
	is, the first line after TEXT: should be a line of 78 characters, to separate
	the header from the message body. This needs to be included in the TEXT count.
	
	REFERENCES
	==========
	
	"Microsoft Mail File Format API for Gateways and Applications"
	
	
	Additional query words: 3.00 pcmail mci ffapi
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailFFAPI300
	Version           : :3.0
	
	=============================================================================
	
