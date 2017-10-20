---
layout: page
title: "Q139096: HOWTO: How to Set Up and Use 320x200x8 and 320x240x8 DDraw Modes"
permalink: /kb/139/Q139096/
---

## Q139096: HOWTO: How to Set Up and Use 320x200x8 and 320x240x8 DDraw Modes

{% raw %}

	Article: Q139096
	Product(s): Miscellaneous Software Development Kits
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Game Software Development Kit (SDK), version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To set up DirectDraw's mode 13 (320x200x8) or mode X (320x240x8), an application
	must use the DDSCL_ALLOWMODEX flag with SetCooperativeLevel() for both modes.
	After calling SetCooperativeLevel(), call SetDisplayMode() for the appropriate
	display mode. SetDisplayMode will return DDERR_INVALIDMODE if DDSCL_ALLOWMODEX
	is not used.
	
	DirectDraw's mode 13 and mode X primary surfaces cannot be locked down for direct
	access. Applications using these two modes should create a primary surface with
	one back buffer. The back buffer is used as the rendering surface. Call Flip()
	for page flipping between the primary surface and the back buffer.
	
	MORE INFORMATION
	================
	
	Example Code to Set Up Mode 13 or Mode X
	----------------------------------------
	
	  LPDIRECTDRAW            lpDD;           // DirectDraw object
	  LPDIRECTDRAWSURFACE     lpDDSPrimary;   // DirectDraw primary surface
	  LPDIRECTDRAWSURFACE     lpDDSBack;      // DirectDraw back surface
	  DDSCAPS                 ddscaps;
	  DDSURFACEDESC           ddsd;
	  HRESULT                 hResult;
	
	  // Create the main DirectDraw object
	
	  hResult = DirectDrawCreate( NULL, &lpDD, NULL );
	
	  if (DD_OK != hResult)
	  {
	      // Handle error
	  }
	
	  // Get exclusive mode
	
	  hResult = lpDD->SetCooperativeLevel(hWnd, DDSCL_EXCLUSIVE |
	          DDSCL_FULLSCREEN | DDSCL_ALLOWMODEX);
	
	  if (DD_OK != hResult)
	  {
	      // Handle error
	  }
	
	  // Use mode 13
	
	  hResult = lpDD->SetDisplayMode( 320, 200, 8 );
	
	  if (DD_OK != hResult)
	  {
	      // handle error
	  }
	
	Example Code to Create a Primary Surface with One Back Buffer
	-------------------------------------------------------------
	
	  ZeroMemory(&ddsd, sizeof(ddsd));
	
	  ddsd.dwSize = sizeof(ddsd);
	
	  ddsd.dwFlags = DDSD_CAPS | DDSD_BACKBUFFERCOUNT;
	  ddsd.ddsCaps.dwCaps = DDSCAPS_PRIMARYSURFACE | DDSCAPS_FLIP |
	          DDSCAPS_COMPLEX;
	
	  ddsd.dwBackBufferCount = 1;
	
	  // Create a primary surface with one back buffer
	
	  hResult = lpDD->CreateSurface( &ddsd, &lpDDSPrimary, NULL );
	
	  if (DD_OK != hResult)
	  {
	      // Handle error
	  }
	
	  // Get a pointer to the back buffer
	
	  ddscaps.dwCaps = DDSCAPS_BACKBUFFER;
	  hResult = lpDDSPrimary->GetAttachedSurface(&ddscaps,  &lpDDSBack);
	
	  if (DD_OK != hResult)
	  {
	      // Handle error
	  }
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbAudDeveloper _IKkbbogus kbSDKSearch kbSDKGame
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
