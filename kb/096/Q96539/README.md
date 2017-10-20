---
layout: page
title: "Q96539: FOXTOOLS.FLL Calls to GetDC, GetDeviceCaps and ReleaseDC"
permalink: /kb/096/Q96539/
---

## Q96539: FOXTOOLS.FLL Calls to GetDC, GetDeviceCaps and ReleaseDC

{% raw %}

	Article: Q96539
	Product(s): Microsoft FoxPro
	Version(s): 2.5x 2.60 2.60a 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The code below demonstrates how to use the FOXTOOLS.FLL library commands to call
	the following Microsoft Windows application programming interface (API)
	functions:
	
	     GetDC()
	     GetDeviceCaps()
	     ReleaseDC()
	
	MORE INFORMATION
	================
	
	The program first loads the FOXTOOLS.FLL library that is supplied with FoxPro
	for Windows and creates some variables. It then retrieves the handle to the
	display device and calls the GetDeviceCaps() function. Next, it displays the
	width and height of the physical display in millimeters in two consecutive
	windows that can be seen by clicking the left mouse button. Finally, it releases
	the handle to the device context and the library.
	
	     set library to sys(2004)+"foxtools.fll" additive
	
	     * create variables to pass index to GetDeviceCaps()
	     * these values are found in the WINDOWS.H file
	
	     HORZSIZE = 4
	     VERTSIZE = 6
	
	     * get the handle to the device context
	
	     gethdc = RegFN("GetDC","I","I")
	     hdc = CallFN(gethdc,0)
	
	     * get the screen size in millimeters
	
	     getsize = RegFN("GetDeviceCaps","II","I")
	     Hsize = CallFN(getsize,hdc,HORZSIZE)
	     Vsize = CallFN(getsize,hdc,VERTSIZE)
	
	     * display the results in two windows
	
	     wait window "Width is: " + alltrim(str(Hsize)) + " mm"
	     wait window "Height is: " + alltrim(str(Vsize)) + " mm"
	
	     * release the handle to the device context
	
	     releasehdc = RegFN("ReleaseDC","II","I")
	     = CallFN(releasehdc,0,hdc)
	
	     release library sys(2004)+"foxtools.fll"
	
	REFERENCES
	==========
	
	Microsoft Windows Software Development Kit, "Programmer's Reference, Volume 2:
	Functions," pages 350-354, 785
	
	FOXTOOLS.WRI located in the C:\FOXPROW\GOODIES\FOXTOOLS subdirectory
	
	WINDOWS.H located in the C:\C700\INCLUDE subdirectory
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b FOXTOOLS SDK kbvfp300
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : 2.5x 2.60 2.60a 3.00
	
	=============================================================================
	

{% endraw %}
