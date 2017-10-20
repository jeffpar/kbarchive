---
layout: page
title: "Q77934: Determining That Display Driver Supports Transparent Mode"
permalink: /kb/077/Q77934/
---

## Q77934: Determining That Display Driver Supports Transparent Mode

{% raw %}

	Article: Q77934
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some display drivers compatible with Microsoft Windows, the BitBlt and
	StretchBlt functions support transparent mode. Before using this feature, an
	application must determine whether the display driver supports this mode by
	calling the GetDeviceCaps function.
	
	MORE INFORMATION
	================
	
	Two of the multimedia display drivers, MMV7VGA.DRV and MMWD480.DRV, support
	transparent mode. When using GetDeviceCaps to determine the capabilities of
	these drivers, it is common to use the RASTERCAPS index. However, to determine
	if transparent mode is supported, an application must use the CAPS1 index.
	
	Use the bitwise AND operator with C1_TRANSPARENT mask to determine if the
	appropriate bit is set; if it is, the driver supports transparent mode. The
	following code fragment demonstrates this test:
	
	     bTransSupport = (GetDeviceCaps(hDC, CAPS1) & C1_TRANSPARENT)
	                      ? TRUE : FALSE;
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
