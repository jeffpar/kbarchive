---
layout: page
title: "Q96772: HOWTO: Use WNetGetUser() in Windows for Workgroups"
permalink: /kb/096/Q96772/
---

## Q96772: HOWTO: Use WNetGetUser() in Windows for Workgroups

	Article: Q96772
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbOSWin310 kbWNet kbOSWin311 kbGrpDSNet
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows for Workgroups, versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WNetGetUser() is documented on page 194 in the Microsoft Windows Device Driver
	Kit (DDK) "Device Driver Adaptation Guide" for version 3.1. This function can be
	used to retrieve the current user name of the user logged on to the network
	underlying Windows. However, when using this function in Microsoft Windows for
	Workgroups, WNetGetUser() returns WN_SUCCESS but the user name string is empty.
	Because WFWNET.DRV is a multinet driver, the network that supports WNetGetUser()
	must be activated before using this function.
	
	MORE INFORMATION
	================
	
	Until the release of the Windows for Workgroups SDK, WNetGetUser() was used
	internally by Windows. It is documented in the version 3.1 "Device Driver
	Adaptation Guide" for network device driver developers. Now, the Windows for
	Workgroups SDK allows you to call WNetGetUser() from an application; however,
	when using this function on a system with a multinet driver, the supporting
	network must be activated first using MNetSetNextTarget(). If the target network
	has not been set, the function returns WN_SUCCESS but the returned string for
	the user name is empty. This is documented in the description of
	MNetSetNextTarget() in the Windows for Workgroups SDK.
	
	It is not sufficient to just call MNetSetNextTarget() before WNetGetUser(). The
	current target network may not support WNetGetUser(). To properly set the target
	network to use WNetGetUser(), the networks must be enumerated and WNetGetUser()
	called for each network. If WNetGetUser() does not return WN_SUCCESS, then
	enumerate the next target network and iterate this loop. If the loop iterates
	through all of the networks but WNetGetUser() never returns WN_SUCCESS, then
	none of the target networks support WNetGetUser().
	
	To determine whether a system supports multinet operations, WNetGetCaps() can be
	used with WNNC_NET_TYPE. The return value has the WNNC_NET_MultiNet (0x8000) set
	if the system supports multinet operations.
	
	Sample Code
	-----------
	
	   #include <winnet.h>
	
	     // 
	     // Function:  NetGetCaps
	     // 
	     // Purpose:   Attempts to Call WNetGetCaps from USER.EXE
	     // 
	     // Returns:   See WNetGetCaps.  If the entry point cannot be located,
	     //            returns NULL
	     // 
	
	     WORD NetGetCaps( WORD wCaps )
	     {
	        typedef         WORD (CALLBACK *LPFNWNETGETCAPS)( WORD );
	
	        LPFNWNETGETCAPS lpfnWNetGetCaps;
	        WORD            wNetType = NULL;
	        HINSTANCE       hInst;
	
	        // Get the entry point for WNetGetUser from USER.EXE. USER implements
	        // the function by calling through to the network driver.
	        hInst = LoadLibrary( "USER.EXE" );
	        if ( !( lpfnWNetGetCaps = (LPFNWNETGETCAPS)
	                                  GetProcAddress( hInst, "WNETGETCAPS" )) )
	        {
	           OutputDebugString("Could not locate WNetGetCaps entry point.\n");
	        }
	        else
	           // Make the call
	           wNetType = (*lpfnWNetGetCaps)( wCaps );
	
	        return wNetType;
	     }
	
	     // 
	     // Function:  NetGetUser
	     // 
	     // Purpose:   Attempts to call WNetGetUser from USER.EXE
	     // 
	     // Returns:   TRUE if the function succeeded, otherwise FALSE.
	     // 
	
	     BOOL NetGetUser (LPSTR lpszUserName, int *pcb )
	     {
	        typedef BOOL (CALLBACK *LPFNGETUSER)( LPSTR, int * );
	
	        // Find the entry point for WNetGetUser in USER.EXE
	        HINSTANCE   hInst       = LoadLibrary( "USER.EXE" );
	        LPFNGETUSER lpfnGetUser =
	           (LPFNGETUSER) GetProcAddress( hInst, "WNETGETUSER" );
	
	        if (!lpfnGetUser)
	           return FALSE;
	
	        // See if this computer includes multinet support
	        if ( NetGetCaps( WNNC_NET_TYPE ) & WNNC_NET_MultiNet )
	        {
	           // 
	           // Multinet support found.  Get entry points to the MNet APIs
	           // 
	
	           typedef WORD (CALLBACK *LPFNMNETNETWORKENUM)( HANDLE FAR * );
	           typedef WORD (CALLBACK *LPFNMNETSETNEXTTARGET)( HANDLE );
	
	           LPFNMNETNETWORKENUM   lpfnMNetNetworkEnum;
	           LPFNMNETSETNEXTTARGET lpfnMNetSetNextTarget;
	
	           OutputDebugString("GetUser: WNNC_NET_MultiNet is set.\n");
	
	           // Get the module handle for the network driver
	           hInst = (HINSTANCE) NetGetCaps( 0xFFFF );
	
	           // Get the entry points
	           lpfnMNetNetworkEnum   =
	              (LPFNMNETNETWORKENUM)GetProcAddress(hInst,"MNETNETWORKENUM");
	           lpfnMNetSetNextTarget =
	              (LPFNMNETSETNEXTTARGET)GetProcAddress
	                                                 (hInst,"MNETSETNEXTTARGET");
	
	           // If both entry points were located, use them
	           if ( lpfnMNetNetworkEnum && lpfnMNetSetNextTarget )
	           {
	              HANDLE hEnum   = NULL;
	              WORD   wResult = lpfnMNetNetworkEnum( &hEnum );
	
	              while ( wResult == WN_SUCCESS )
	              {
	                 lpfnMNetSetNextTarget( hEnum );     // activate that network
	                 wResult = lpfnGetUser( lpszUserName, pcb );
	
	                 if ( wResult == WN_SUCCESS )
	                    return TRUE;
	
	                 OutputDebugString
	                               ("WNetGetUser failed, try next provider.\n");
	
	                 // otherwise, try the next one for WNetGetUser support
	                 wResult = lpfnMNetNetworkEnum( &hEnum );
	              }
	
	              return FALSE;
	           }
	
	           // Entry points for the MNet APIs we need weren't located.
	           // Try calling WNetGetUser anyway. Note: Windows NT 3.51 gives
	           // this behavior
	
	           OutputDebugString("Warning - WFWNET.DRV doesn't contain \ 
	              entry points for MNetNetworkEnum and/or MNetSetNextTarget.\n");
	        }
	
	        WORD wResult = lpfnGetUser( lpszUserName, pcb );
	
	        return (wResult) ? FALSE : TRUE;
	     }
	
	Additional query words: username multi-net
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbOSWin310 kbWNet kbOSWin311 kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK311
	Version           : :3.1,3.11
	Issue type        : kbhowto
	
	=============================================================================
	
