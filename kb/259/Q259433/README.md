---
layout: page
title: "Q259433: BUG: Wrong Event Is Signaled When Using RAS Custom Script API"
permalink: kb/259/Q259433/
---

## Q259433: BUG: Wrong Event Is Signaled When Using RAS Custom Script API

	Article: Q259433
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbOSWin2000 _IK12469 _IK912 kbSDKPlatform kbSDKWin32 kbDSupport kbGrpDS
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The WAIT_OBJECT_0 event is signaled even when there is no data available on the
	wire to read. This causes the RasRetrieveBuffer function to fill up the
	receiving buffer with a NULL character.
	
	RESOLUTION
	==========
	
	On the client side, when the WAIT_OBJECT_0 event is signaled, if pRecvBuf
	contains a NULL character, just ignore this, and then call the RasReceiveBuffer
	function again.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	  dwErr = pfnRasReceiveBuffer(hPort, pRecvBuf, &dwRecvBufSize, 1, hEvent);  
	
	  dwWait = WaitForSingleObject (hEvent, INFINITE);
	
	  switch (dwWait) {
	          case WAIT_FAILED:
	              OutputDebugString(_T("Wait Failed"));
	              return 1;
	
	          case WAIT_TIMEOUT:
	              dwErr = ERROR_SMM_TIMEOUT;
	              return 1;
	
	          case WAIT_ABANDONED:
	              OutputDebugString(_T("WAIT_ABANDONED\n"));
	              return 1;
	
	          case WAIT_OBJECT_0:
	              OutputDebugString(_T("The state of the object is signaled\n"));
	              break;
	  }
	
	  dwErr = pfnRasRetrieveBuffer(hPort,pRecvBuf,&dwRecvBufSize);
	
	The server side does not send out any data. RasReceiveBuffer returns immediately.
	Even though there is no data on the wire, the WAIT_OBJECT_0 event is signaled.
	RasRetrieveBuffer is executed, and it fills pRecvBuf with NULL character.
	
	REFERENCES
	==========
	
	Please see the Platform SDK\Samples\NetDs\RAS\CustomScript\CustomClient folder
	for the complete sample on how to use the RAS Custom Script APIs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbOSWin2000 _IK12469 _IK912 kbSDKPlatform kbSDKWin32 kbDSupport kbGrpDSNet 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
