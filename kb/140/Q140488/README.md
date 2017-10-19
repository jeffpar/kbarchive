---
layout: page
title: "Q140488: HOWTO: How to Determine the Number of Supported Colors"
permalink: /kb/140/Q140488/
---

## Q140488: HOWTO: How to Determine the Number of Supported Colors

	Article: Q140488
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes it is necessary to determine how many colors the current video driver
	supports. For example, a distributed application may require 256 color support
	so that it will run correctly. This article explains how to retrieve that
	information using the GetDC(), GetDeviceCaps(), and ReleaseDC() Windows API
	functions.
	
	MORE INFORMATION
	================
	
	GetDeviceCaps() is used to determine the number of colors the current video
	driver will support. The formula for the number of colors is:
	
	  2^(PLANES * BITSPIXEL)
	
	PLANES is number of color planes that the driver supports, and BITSPIXEL is the
	number of adjacent color bits for each pixel. For a more detailed description of
	PLANES and BITSPIXEL, please refer to the Visual C++ manual or Help file and the
	MSDN compact disc.
	
	Visual FoxPro 3.0/5.0a/6.0 Code Sample
	--------------------------------------
	
	The following code can be used in Visual FoxPro for Windows only. See second code
	sample for code that works in FoxPro 2.5x and 2.6x.
	
	  * -- 3.0/5.0a/6.0 Code begins here
	
	     DECLARE INTEGER GetDC IN WIN32API INTEGER piGetDC
	
	     iDCHandle = GetDC(0)
	
	     *-- The following are the constants used by GetDeviceCaps
	     *-- Additional values can be found in C++ and the MSDN compact disc.
	     PLANES = 14
	     BITSPIXEL = 12
	
	     DECLARE INTEGER GetDeviceCaps IN WIN32API INTEGER piDCHandle, ;
	        INTEGER piNumColors
	
	     iPlanes=GetDeviceCaps(iDCHandle, PLANES)
	     iBitsPixel=GetDeviceCaps(iDCHandle,BITSPIXEL)
	
	     *-- Returns the number of colors used by the driver
	     iNumColors = 2^(iPlanes * iBitsPixel)
	     WAIT WINDOW "Number of colors this driver supports is " ;
	        +ALLTRIM(STR(iNumColors))
	
	     *-- The following code releases the GetDC handle
	     DECLARE INTEGER ReleaseDC IN Win32API INTEGER piHandle, ;
	        INTEGER piDCHandle
	     =ReleaseDC(0,iDCHandle)
	
	     *-- 3.0/5.0a/6.0 Code ends here
	
	FoxPro 2.5x and 2.6x Code Sample
	--------------------------------
	
	The following code is written for 2.5x and 2.6x versions of FoxPro.
	
	     *-- Code begins here
	
	     SET LIBRARY TO SYS(2004)+"FOXTOOLS.FLL" ADDITIVE
	
	     *-- Gets a Device Context to the video driver. Zero is
	     *-- used to get the DC for the screen
	     iGetDC = RegFN("GetDC","I","I")
	     iDCHandle = CallFN(iGetDC,0)
	
	     *-- The following are the constants used by GetDeviceCaps
	     *-- Additional values can be found in C++ and the MSDN compact disc.
	     PLANES = 14
	     BITSPIXEL = 12
	
	     iGetDevCaps = RegFN("GetDeviceCaps","II","I")
	     iPlanes=CallFN(iGetDevCaps,iDCHandle, PLANES)
	     iBitsPixel=CallFN(iGetDevCaps,iDCHandle,BITSPIXEL)
	
	     *-- Returns the number of colors used by the driver
	     iNumColors = 2^(iPlanes * iBitsPixel)
	     WAIT WINDOW "Number of colors this driver supports is ";
	          +ALLTRIM(STR(iNumColors))
	
	     *-- The following code releases the GetDC handle
	     iReleaseDC = RegFN("ReleaseDC","II","I")
	     =CallFN(iReleaseDC,0,iDCHandle)
	
	     RELEASE LIBRARY SYS(2004)+"FOXTOOLS.FLL"
	     *-- Code ends here
	
	This code was designed to work under all Windows platforms supported by Microsoft
	FoxPro.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
