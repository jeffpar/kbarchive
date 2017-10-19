---
layout: page
title: "Q61803: INFO: Calculating Free System Resources in Microsoft Windows"
permalink: /kb/061/Q61803/
---

## Q61803: INFO: Calculating Free System Resources in Microsoft Windows

	Article: Q61803
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbSysSettings
	Last Modified: 09-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, the About dialog box in the
	Program Manager displays a value that indicates the amount of free system
	resources available at a given time. The text below documents this calculation
	and the methods that an application can use to calculate this figure.
	
	MORE INFORMATION
	================
	
	Windows uses the same method to calculate the percentage of free system
	resources in each of its operating modes (real mode, standard mode, and enhanced
	mode under Windows 3.0, and standard mode and enhanced mode under Windows 3.1).
	
	In the Windows environment, system resources are the amount of space available in
	the Data Segment (DS) for the user Dynamic-Link Library (DLL) or the GDI DLL.
	Because system resources are exhausted if either of these data segments fills
	up, Windows reports the smaller of the two percentages for the system. The
	following formula describes the calculation for Windows 3.0 and 3.1; this may or
	may not be accurate in future versions of Windows:
	
	  % free = min (% free of user DS, % free of GDI DS)
	
	              (64K - current DS size) + free blocks in Heap
	
	  % free DS = --------------------------------------------- * 100
	
	                    64K - (size of statics and stack)
	
	Or, in other words:
	
	                Current free heap assuming 64K
	
	  % free DS =  -------------------------------- * 100
	
	                  Maximum heap assuming 64K
	
	Under Windows 3.1, an application can call the GetFreeSystemResouces function
	with the GFSR_SYSTEMRESOURCES value to obtain the percentage of free system
	resources. Because this function is not present in Windows 3.0, an application
	that runs in both environments must explicitly import this function from the
	user Dynamic-Link Library (DLL) when the application runs under Windows 3.1.
	
	Under Windows 3.0, an application can use the GetHeapSpaces function to determine
	the percentage of free system resources as follows:
	
	     DWORD cbFree;
	     WORD  wFreeK, wHeapK;
	     WORD  wUserPercent, wGDIPercent, wSysPercent;
	
	     cbFree = GetHeapSpaces(GetModuleHandle("USER"));
	     wFreeK = LOWORD(cbFree) / 1024;
	     wHeapK = HIWORD(cbFree) / 1024;
	     wUserPercent = MulDiv(wFreeK, 100, wHeapK);
	
	     cbFree = GetHeapSpaces(GetModuleHandle("GDI"));
	     wFreeK = LOWORD(cbFree) / 1024;
	     wHeapK = HIWORD(cbFree) / 1024;
	     wGDIPercent = MulDiv(wFreeK, 100, wHeapK);
	
	     wSysPercent = min(wUserPercent, wGDIPercent);
	
	Because this technique does not provide accurate results under Windows 3.1, an
	application must determine the version of Windows with which it is running and
	perform the calculation accordingly.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbSysSettings 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
