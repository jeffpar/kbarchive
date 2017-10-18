---
layout: page
title: "Q81547: DDEML CONVINFO Structure, wConvst Field Description"
permalink: kb/081/Q81547/
---

## Q81547: DDEML CONVINFO Structure, wConvst Field Description

	Article: Q81547
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the Dynamic Data Exchange Management Library (DDEML) lists
	the possible values for the wConvst field, but it does not explain the causes
	for these values. The following table lists the possible values for the wConvst
	field and the causes of each:
	
	wConvst             Cause
	------------------------------------------------------------------------
	XST_ADVACKRCVD      The advise transaction was just completed.
	
	XST_ADVDATAACKRCVD  The advise data transaction was just completed.
	
	XST_ADVDATASENT     Advise data has been sent and is awaiting an
	                   acknowledgement.
	
	XST_ADVSENT         An advise transaction is awaiting an
	                   acknowledgement.
	
	XST_CONNECTED       The conversation has no active transactions.
	
	XST_DATARCVD        The requested data has just been received.
	
	XST_EXECACKRCVD     An execute transaction just completed.
	
	XST_EXECSENT        An execute transaction is awaiting an
	                   acknowledgement.
	
	XST_INCOMPLETE      The last transaction failed.
	
	XST_INIT1           Mid-initiate state 1.
	
	XST_INIT2           Mid-initiate state 2.
	
	XST_NULL            Preinitiate state.
	
	XST_POKEACKRCVD     A poke transaction was just completed.
	
	XST_POKESENT        A poke transaction is awaiting an
	                   acknowledgement.
	
	XST_REQSENT         A request transaction is awaiting an
	                   acknowledgement.
	
	XST_UNADVACKRCVD    An unadvise transaction just completed.
	
	XST_UNADVSENT       An unadvise transaction is awaiting an
	                   acknowledgement.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
