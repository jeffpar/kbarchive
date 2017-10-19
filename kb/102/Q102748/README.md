---
layout: page
title: "Q102748: X400: Err Msg: ERROR 3 (Layer): Open Failed"
permalink: /kb/102/Q102748/
---

## Q102748: X400: Err Msg: ERROR 3 (Layer): Open Failed

	Article: Q102748
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2 of Microsoft Mail Gateway to X.400 may give this error on an
	outbound connection:
	
	  ERROR 3 (layer): Open failed.
	
	The gateway failed to initialize the protocol stack for an outgoing call. An
	earlier message may indicate the problem.
	
	CAUSE
	=====
	
	This error may occur during an attempt to connect to a remote message transfer
	agent (MTA). Some possible reasons for this error are:
	
	- The remote MTA is busy and is not accepting any calls.
	
	- An incorrect X.25 number is specified for the remote MTA.
	
	- An incorrect X.25 user data field is specified for the remote MTA.
	
	- An invalid X.25 facility is specified for the remote MTA.
	
	- There are not enough logical sessions between the MTA and the EiconCard. The
	  number of logical sessions between the MTA and the EiconCard is determined by
	  the n parameter specified in the following command:
	
	  nabios rdr <computername> /n
	
	  To determine if there are enough logical sessions available, run the ECSTATUS
	  program on the computer with the EiconCard.
	
	RESOLUTION
	==========
	
	Check whether the TP4 or the X.25 drivers are loaded. For X.25, also check
	whether the EiconCard server machine is running.
	
	Additional query words: 3.20 ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
