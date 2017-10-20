---
layout: page
title: "Q107693: HOWTO: How to Detect Mouse and Mouse Port"
permalink: /kb/107/Q107693/
---

## Q107693: HOWTO: How to Detect Mouse and Mouse Port

{% raw %}

	Article: Q107693
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbInput kbMouse kbSDKPlatform
	Last Modified: 09-JUN-1999
	
	3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Windows-based application can use the GetSystemMetrics() function to determine
	whether or not a serial mouse is connected to the computer. However, there is no
	Windows application programming interface (API) to identify the serial port of
	the computer that the mouse is connected to. Instead, a Windows-based
	application must use the Inquire() function documented in the Windows Device
	Driver Kit (DDK). You do not need the the Windows DDK to call the Inquire()
	function in the MOUSE driver module. Please see "MORE INFORMATION" for details.
	
	Note, however, that the Inquire() function is only part of the Windows DDK and is
	not a standard Windows SDK API. Because this function may change in future
	versions of the Windows DDK, care must be taken in using this function in a
	Windows-based application.
	
	MORE INFORMATION
	================
	
	If GetSystemMetrics() is called with its parameter set to SM_MOUSEPRESENT, it
	will indicate whether or not a serial mouse is connected. However, no
	information is provide as to which port of the computer the serial mouse is
	connected to.
	
	To obtain this information, use the mouse driver function Inquire(), which is
	documented in the Windows DDK "Device Driver Adaptation Guide" as follows:
	
	     WORD Inquire(lpMouseInfo)
	     LPMOUSEINFO lpMouseInfo;
	
	The Inquire() function returns information about the mouse hardware.
	
	     Parameter       lpMouseInfo
	
	Points to a MOUSEINFO structure containing information about the mouse hardware
	that is present, the number of buttons on the mouse, and the rate at which the
	mouse can issue interrupts.
	
	The MOUSEINFO structure has the following form.
	
	     typedef struct {
	
	       char msExist;
	       char msRelative;
	       short msNumButtons;
	       short msRate;
	       short msXThreshold;
	       short msYThreshold;
	       short msXRes;
	       short msYRes;
	       short msMouseCommPort;
	     } MOUSEINFO, far *LPMOUSEINFO;
	
	Return Value: The return value is the number of bytes actually written into the
	MOUSEINFO structure.
	
	Comments: The export ordinal for this function is 1.
	
	This function can be called from within a Windows-based application without the
	presence of the DDK. To call this function, the function address must be
	retrieved as follows:
	
	     typedef WORD (FAR PASCAL * LPFNINQUIRE) (LPMOUSEINFO);
	
	     HANDLE hMouse;
	     LPMOUSEINFO lpMouseInfo;   // far pointer to MOUSEINFO struct
	     LPFNINQUIRE lpfnInquire;  // function pointer to Inquire()
	
	           if ((hMouse = GetModuleHandle ("MOUSE")) != NULL)
	             lpfnInquire = (LPFNINQUIRE) GetProcAddress(hMouse, "Inquire");
	
	Then, the Inquire() function can be called using the lpfnInquire pointer. The
	msExist and msMouseCommPort parameters in the MOUSEINFO structure provide the
	needed information.
	
	Note that the mouse driver is not called MOUSE.DRV on many systems, and therefore
	it is suggested that GetModuleHandle() is used to obtain the handle to the mouse
	driver instead of LoadLibrary, which requires the filename of the mouse driver.
	
	Additional query words: 3.10 mouse port driver detect
	
	======================================================================
	Keywords          : kb16bitonly kbInput kbMouse kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
