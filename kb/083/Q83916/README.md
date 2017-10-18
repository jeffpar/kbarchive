---
layout: page
title: "Q83916: CONVINFO Data Structure wStatus Field Description"
permalink: kb/083/Q83916/
---

## Q83916: CONVINFO Data Structure wStatus Field Description

	Article: Q83916
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
	
	The documentation for the CONVINFO data structure used by the Dynamic Data
	Exchange Management Library (DDEML) lists the possible values of the structure's
	wStatus field. However, the documentation does not elaborate on the causes of
	these different values.
	
	The following table lists the various values of the wStatus field and the
	conditions under which each status code is reported:
	
	  wStatus        Cause
	  -------------------------------------------------------------------
	  ST_ADVISE      One or more links are in progress.
	
	  ST_BLOCKED     The conversation is blocked.
	
	  ST_BLOCKNEXT   The conversation will block after calling the next
	                 callback.
	
	  ST_CLIENT      The conversation handle passed to the
	                 DdeQueryConvInfo function is a client side handle.
	                 If the ST_CLIENT value is 0, then the conversation
	                 handle passed to the DdeQueryConvInfo function is a
	                 server side handle.
	
	  ST_CONNECTED   The conversation is connected.
	
	  ST_INLIST      The conversation is a member of a conversation list.
	
	  ST_ISLOCAL     Both sides of the conversation are using the DDEML.
	
	  ST_ISSELF      Both sides of the conversation are using the same
	                 instance of the DDEML.
	
	  ST_TERMINATED  The conversation has been terminated by the other
	                 side.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
