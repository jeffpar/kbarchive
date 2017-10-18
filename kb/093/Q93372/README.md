---
layout: page
title: "Q93372: DOCERR: DDEDATA Documentation Error"
permalink: kb/093/Q93372/
---

## Q93372: DOCERR: DDEDATA Documentation Error

	Article: Q93372
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 272 of the Windows SDK (Software Development Kit) version 3.1 "Programmer's
	Reference, Volume 3: Messages, Structures, and Macros" contains an error. The
	fAckReq field of the DDEDATA structure describes what should be the fResponse
	field, and vice versa.
	
	In addition, the DDEDATA structure documented on page 15-11 of the Windows SDK
	version 3.0 "Reference, Volume 2" incorrectly describes what should be the
	fResponse field, as fRequested.
	
	MORE INFORMATION
	================
	
	The Windows SDK versions 3.0 and the 3.1 both define the DDEDATA structure in
	DDE.H as follows:
	
	       typedef struct tagDDEDATA
	       {
	           WORD  unused: 12,
	                            fResponse:1,
	                            fRelease:1,
	                            reserved:1,
	                            fAckReq:1;
	           int            cfFormat;
	           BYTE     value[1];
	       } DDEDATA;
	
	The WM_DDE_DATA documentation for Windows SDK versions 3.0 and 3.1 correctly
	describes the structure's fAckReq field. fAckReq is a flag to indicate whether
	the server application expects to be acknowledged by the client application
	(with a WM_DDE_ACK) when data is received.
	
	The fResponse field, on the other hand, is just a means to distinguish whether
	the WM_DDE_DATA message the client received was sent in response to a
	WM_DDE_REQUEST (if it is, it is set to TRUE) or WM_DDE_ADVISE (in which case it
	is set to FALSE).
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
