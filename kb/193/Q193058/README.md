---
layout: page
title: "Q193058: DOC: How to use the RasSecurityDialogReceive API"
permalink: kb/193/Q193058/
---

## Q193058: DOC: How to use the RasSecurityDialogReceive API

	Article: Q193058
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI _IK12469 kbSDKPlatform kbGrpDSNet
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentaion does not explain how to correctly use the third parameter
	(pBufferLength) of the RasSecurityDialogReceive API.
	
	MORE INFORMATION
	================
	
	The documentation does not mention that the third parameter of the
	RasSecurityDialogReceive API should be set to the number of bytes expected to be
	received before the API is called. Upon API completion, this parameter will have
	the number of bytes received (excluding a terminating NULL character).
	
	For example, if the user expects to enter a password up to 10 characters long,
	the following code could be used:
	
	     WORD dwBytes = 10;
	     gfpRasSecurityDialogReceive ( hPort, pRecvBuf, &dwBytes, 0, hEvent);
	     DWORD dwWait = WaitForSingleObject (hEvent, MY_TIMEOUT);
	     if (dwWait == WAIT_OBJECT_0)
	     {
	
	         // We have received data
	         wsprintf (szTemp, "Bytes recevied: %d, buffer received: %s\n",
	         dwBytes, pRecvBuf);
	     }
	
	For more information about using this API, please refer to the RASHOST sample
	located in the Win32 SDK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI _IK12469 kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
