---
layout: page
title: "Q254659: Starting Local COM Server Returns Error Code 0x80080005"
permalink: kb/254/Q254659/
---

## Q254659: Starting Local COM Server Returns Error Code 0x80080005

	Article: Q254659
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:98 Second Edition; :1.2
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 Second Edition 
	- Microsoft Distributed Component Object Model (DCOM), version 1.2 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer without a network and then dynamically add a
	network (by inserting a PCMCIA network adapter or by using Dial-Up Networking),
	the first attempt to start a local COM server is unsuccessful if Distributed
	Component Object Model (DCOM) is installed.
	
	The underlying error message is detailed in the following table.
	
	+-----------------------------------------------------+
	| Type                     | Value                    | 
	+-----------------------------------------------------+
	| Standard Error Text      | Server Execution Failed  | 
	+-----------------------------------------------------+
	| Error Code (hexadecimal) | 0x80080005               | 
	+-----------------------------------------------------+
	| Error Code (decimal)     | -2146959355              | 
	+-----------------------------------------------------+
	| Error code (symbolic)    | CO_E_SERVER_EXEC_FAILURE | 
	+-----------------------------------------------------+
	
	CAUSE
	=====
	
	When there is no network, DCOM identifies the local computer using RPCSS with
	the loopback address (127.0.0.1). When you dynamically add a network, remote
	procedure call (RPC) does not detect the new Internet Protocol (IP) address
	until it is reinitialized. However, COM initializes first and sends a request to
	RPC to locate the local server. This does not trigger an RPC reinitialization,
	and subsequent attempts to start the local server can succeed.
	
	
	WORKAROUND
	==========
	
	To work around this behavior, start the client program a second time.
	
	The following code sample shows how to bypass the problem programmatically:
	
	  #include "stdafx.h"
	
	  int fIsWin9X(void)
	  {
	      OSVERSIONINFO info;
	   
	      ZeroMemory(&info, sizeof(OSVERSIONINFO));
	      info.dwOSVersionInfoSize = sizeof(OSVERSIONINFO);
	      GetVersionEx( &info );
	      if ( 4 == info.dwMajorVersion && VER_PLATFORM_WIN32_WINDOWS == info.dwPlatformId )
	          return TRUE;
	      return FALSE;
	  }
	
	  HRESULT myCoCreateInstance(
	     REFCLSID rclsid,
	     LPUNKNOWN pUnkOuter,
	     DWORD dwClsContext,
	     REFIID riid,
	     LPVOID * ppv
	  )
	  {
	      HRESULT hr = CoCreateInstance( rclsid, pUnkOuter, dwClsContext, riid, ppv );
	      if ( CO_E_SERVER_EXEC_FAILURE == hr && fIsWin9X() )
	          return CoCreateInstance( rclsid, pUnkOuter, dwClsContext, riid, ppv );
	      return hr;
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95 and Windows 98 with
	DCOM 1.3 installed.
	
	Additional query words: nic fail failed dun
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbWin95search kbWin98search kbWin98SEsearch kbDCOM120 kbWin95 kbWin98 kbWin98SE kbDCOMSearch
	Version           : WINDOWS:98 Second Edition; :1.2
	Issue type        : kbprb
	
	=============================================================================
	
