---
layout: page
title: "Q80082: DOCERR: Description of the DDEML Error Codes"
permalink: /kb/080/Q80082/
---

## Q80082: DOCERR: Description of the DDEML Error Codes

	Article: Q80082
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for version 3.1 of the Windows Software Development Kit (SDK)
	only states which of the Dynamic Data Exchange Management Library (DDEML) error
	values can be returned to each of the API functions. No descriptions of the
	different error values is included. Descriptions are included in the Win32 SDK
	documentation.
	
	The following list describes each of the possible error codes that can be
	returned by the DDEML, its corresponding value, and a description of what may
	have caused the error.
	
	Error                         Error Value
	-----                         -----------
	
	DMLERR_ADVACKTIMEOUT          0x4000
	DMLERR_DATAACKTIMEOUT         0x4002
	DMLERR_EXECACKTIMEOUT         0x4005
	DMLERR_POKEACKTIMEOUT         0x400B
	DMLERR_UNADVACKTIMEOUT        0x4010
	
	In each case, a synchronous transaction attempt has timed out.
	
	DMLERR_BUSY                   0x4001
	
	The response to the transaction caused the DDE_FBUSY bit to be set.
	
	DMLERR_DLL_NOT_INITIALIZED    0x4003
	
	- A DDEML API was called without first calling the DdeInitialize function.
	
	- An invalid IdInst parameter was passed to an API.
	
	DMLERR_DLL_USAGE              0x4004
	
	- An application initialized as a MONITOR has attempted DDE transactions.
	
	- An application initialized as CLIENTONLY has attempted SERVER transactions.
	
	DMLERR_INVALIDPARAMETER       0x4006
	
	A parameter failed validation. Some of the possible causes are as follows:
	
	- The application used a data handle initialized with a different hszItem than
	  that required by the transaction.
	
	- The application used a data handle initialized with a different wFmt than
	  that required by the transaction.
	
	- The application used a client-side hConv with a server-side API or vice
	  versa.
	
	- The application used a freed data handle or hsz handle.
	
	- More than one instance of the application used the same object.
	
	
	DMLERR_LOW_MEMORY             0x4007
	
	This error only happens in an XTYP_ERROR callback -- generally after a prolonged
	race condition (where the server application outruns the client) that consumes
	huge amounts of memory.
	
	DMLERR_MEMORY_ERROR           0x4008
	
	A memory allocation failed.
	
	DMLERR_NOTPROCESSED           0x4009
	
	A transaction failed -- generally with a NACK.
	
	DMLERR_NO_CONV_ESTABLISHED    0x400A
	
	A connection attempt failed to receive an ACK in reply.
	
	DMLERR_POSTMSG_FAILED         0x400C
	
	An internal PostMessage call failed.
	
	
	DMLERR_REENTRANCY             0x400D
	
	- A synchronous transaction was initiated while the application instance has
	  another synchronous transaction in progress.
	
	- The DdeEnableCallback function was called from within a callback.
	
	
	DMLERR_SERVER_DIED            0x400E
	
	- A server-side transaction has been attempted on a conversation that was
	  terminated by the client.
	
	- The server died mid-transaction.
	
	DMLERR_SYS_ERROR              0x400F
	
	A system API failed inside of the DDEML.
	
	DMLERR_UNFOUND_QUEUE_ID       0x4011
	
	An invalid transaction ID was passed to an API function. Once the application has
	returned from an XTYP_XACT_COMPLETE callback, the transaction ID for that
	callback is no longer valid.
	
	Additional query words: no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
