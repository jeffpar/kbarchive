---
layout: page
title: "Q124878: DOCERR: WNetGetCachedPassword Returns WN_CANCEL (error 12)"
permalink: /kb/124/Q124878/
---

## Q124878: DOCERR: WNetGetCachedPassword Returns WN_CANCEL (error 12)

	Article: Q124878
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbnetwork kbdocerr kb16bitonly kbAPI kbSDKPlatform kbOSWin310 kbWNet kbGrpDSNet
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The WNetGetCachedPassword() function may return WN_CANCEL (error code 12). This
	error is not documented as a possible return value for the
	WNetGetCachedPassword() API call.
	
	CAUSE
	=====
	
	WN_CANCEL will be returned when you request the password for a resource that is
	not in the password cache.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbdocerr kb16bitonly kbAPI kbSDKPlatform kbOSWin310 kbWNet kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
