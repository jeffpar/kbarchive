---
layout: page
title: "Q123824: X400: Err Msg: ERROR 1 (TRAN): Invalid TPDU 70 in State 4"
permalink: /kb/123/Q123824/
---

## Q123824: X400: Err Msg: ERROR 1 (TRAN): Invalid TPDU 70 in State 4

	Article: Q123824
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2x of the Microsoft Mail Gateway for X.400 may display the following
	message in the X400xxxx.LOG file if verbose and debug logging are enabled
	(-lvd):
	
	  Incoming ER TPDU on connection xx:
	  0970001A 00C10302 F080
	  ERROR 1 (TRAN): Invalid TPDU 70 in state 4
	
	CAUSE
	=====
	
	The data field in the message has a field length of zero. This is allowed if it
	is the last packet.
	
	RESOLUTION
	==========
	
	The remote X400 message transfer agent (MTA) must be able to accept the last
	packet in the conversation if it has a data field length of zero. Contact the
	administrator of the other X400 MTA to verify it will accept an end packet of
	data field length zero.
	
	MORE INFORMATION
	================
	
	A complete explanation of the TPDU follows:
	
	  rv[ 10] 0970001A 00C10302 F080
	
	     09  length       = 9
	     70  TPDU type    = ER
	     001A             = Destination reference
	     00  reject cause = Not specified
	     C1 03 02 F080    = The invalid TPDU that the other side is
	                        complaining about.
	
	The invalid TPDU:
	
	     02 length        = 2
	     F0 TPDU type     = DT
	     80  EOT or the end flag.
	
	The Microsoft X.400 Gateway may create a zero length data field if the length of
	the message happened to fall on a DT TPDU boundary. This is not a violation of
	the X.400 standard. According to X.224 section 6.3.3.:
	
	  All DT TPDUs except the last DT TPDU in a sequence greater than one shall
	  have a length of data greater than zero.
	
	This is the last DT TPDU in a sequence (the EOT flag being on), so it is allowed
	to have a zero length user data field.
	
	Additional query words: x400 errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex40032xSearch
	Version           : MS-DOS:3.2x
	
	=============================================================================
	
