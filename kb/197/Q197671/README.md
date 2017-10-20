---
layout: page
title: "Q197671: HOWTO: How to Enumerate Monitors in Win 98 and Windows 2000"
permalink: /kb/197/Q197671/
---

## Q197671: HOWTO: How to Enumerate Monitors in Win 98 and Windows 2000

{% raw %}

	Article: Q197671
	Product(s): Microsoft Windows NT
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbSDKPlatform kbGrpDSUser kbOSWin98
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	********************************************************************
	BETA INFORMATION BETA INFORMATION BETA INFORMATION BETA
	This article discusses a Beta release of a Microsoft
	product. The information in this article is provided as-is
	and is subject to change without notice.
	No formal product support is available from Microsoft for
	this Beta product. For information about obtaining support
	for a Beta release, please see the documentation included
	with the Beta product files, or check the Web location
	from which you downloaded the release.
	BETA INFORMATION BETA INFORMATION BETA INFORMATION BETA
	********************************************************************
	
	SUMMARY
	=======
	
	Starting with Microsoft Windows 98 and Microsoft Windows 2000, multiple monitors
	could be attached to a computer and connected to the desktop. This article
	contains sample code showing how to enumerate those devices attached to the
	desktop.
	
	MORE INFORMATION
	================
	
	The following code is for a small console-mode application that enumerates the
	attached display devices:
	
	Sample Code
	-----------
	
	     #include <windows.h>
	     #include <stdio.h>
	     #ifndef SM_CMONITORS
	
	         typedef HANDLE HMONITOR;
	
	     #endif
	     #ifndef DISPLAY_DEVICE_PRIMARY_DEVICE
	
	         typedef struct _DISPLAY_DEVICE {
	          DWORD  cb;
	          TCHAR  DeviceName[32];
	          TCHAR  DeviceString[128];
	          DWORD  StateFlags;
	         } DISPLAY_DEVICE, *PDISPLAY_DEVICE, *LPDISPLAY_DEVICE;
	         #define DISPLAY_DEVICE_ATTACHED_TO_DESKTOP 0x00000001
	         #define DISPLAY_DEVICE_MULTI_DRIVER        0x00000002
	         #define DISPLAY_DEVICE_PRIMARY_DEVICE      0x00000004
	         #define DISPLAY_DEVICE_VGA             0x00000010
	
	     #endif
	
	     main (int argc, char**argv)
	     {
	
	      int i;
	     int j=0;
	      BOOL (WINAPI* pEnumDisplayDevices)(PVOID,DWORD,PVOID,DWORD);
	
	      (FARPROC)pEnumDisplayDevices = GetProcAddress(
	          LoadLibrary("USER32"), "EnumDisplayDevicesA");
	
	      if (pEnumDisplayDevices)
	      {
	          DISPLAY_DEVICE dd;
	          ZeroMemory(&dd, sizeof(dd));
	          dd.cb = sizeof(dd);
	
	          printf("*** EnumDisplayDevices\n");
	
	          for (i=0; (*pEnumDisplayDevices)(NULL, i, &dd, 0); i++)
	          {
	           j++;
	              printf("    DeviceName:   '%s'\n", dd.DeviceName);
	              printf("    DeviceString: '%s'\n", dd.DeviceString);
	              printf("    Flags:        %08X %s%s\n",
	                  dd.StateFlags,
	                  ((dd.StateFlags & DISPLAY_DEVICE_ATTACHED_TO_DESKTOP) ?
	  "Desktop " : ""),
	
	                  ((dd.StateFlags & DISPLAY_DEVICE_PRIMARY_DEVICE) ? "Primary
	
	  " : ""));
	
	             }
	         }
	
	     return j;
	     }
	
	REFERENCES
	==========
	
	MSDN VC++ Documentation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbSDKPlatform kbGrpDSUser kbOSWin98 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin98search kbWinAdvServSearch kbWin98
	Version           : :; WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
