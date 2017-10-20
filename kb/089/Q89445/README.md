---
layout: page
title: "Q89445: INFO: Causes for Failure of DC-Creation Functions"
permalink: /kb/089/Q89445/
---

## Q89445: INFO: Causes for Failure of DC-Creation Functions

{% raw %}

	Article: Q89445
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKWin16
	Last Modified: 16-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DC-creation functions [CreateDC(), CreateIC(), and CreateCompatibleDC()] can
	fail for several reasons. When one of these functions fails, it returns NULL.
	This article discusses eight causes for DC-creation failure and provides a
	resolution or explanation for each.
	
	NOTE: Since the device driver would have already been loaded when
	CreateCompatibleDC() is used, causes 1, 3, 5, 6, and 7 do not apply to it.
	
	Causes for Failure
	------------------
	
	- Application runs out of file handles.
	
	- Insufficient system resources.
	
	- Insufficient global memory.
	
	- Global atom tables are full.
	
	- Not enough selectors are free.
	
	- The DEVMODE structure passed in is not the right size.
	
	- The logical device (device driver) or the physical device is not found.
	
	- The function cannot initialize the created DC.
	
	MORE INFORMATION
	================
	
	The order in which the causes are listed below does not provide any indication
	of how often each cause occurs.
	
	Cause 1: Application Runs Out of File Handles
	---------------------------------------------
	
	Resolution 1: Use the SetHandleCount() function to open more file handles. For
	more information on the file limit, query in the Microsoft Knowledge Base on the
	following words:
	
	  limits and open and files
	
	
	Explanation 1: The GDI requires a file handle to load the device driver and other
	files from disk.
	
	Cause 2: Insufficient System Resources
	--------------------------------------
	
	Resolution 2: Verify that system resources are not lost because an application
	does not delete objects that it creates. If you are developing for Windows 3.1,
	use the debugging version of Windows 3.1. For other information on tracking down
	lost system resources, query in the Microsoft Knowledge Base on the following
	words:
	
	  lost and heapwalk and system and resources
	
	
	The article "Careful Windows Resource Allocation and Cleanup Improves Application
	Hygiene," in the September 1991 issue of the "Microsoft Systems Journal"
	discusses this issue further.
	
	Explanation 2: These functions use the GDI's heap. Unless each application frees
	all the resources that it allocates, eventually Windows does not have enough
	memory to support the creation of DCs.
	
	Cause 3: Insufficient Global Memory
	-----------------------------------
	
	Resolution 3: Close some applications and try again.
	
	Explanation 3: The driver must be loaded into global memory.
	
	Cause 4: Global Atom Tables Are Full
	------------------------------------
	
	Resolution 4: Minimize the creation of global atoms. Try closing some
	applications.
	
	Explanation 4: The GDI uses global atoms during the DC-creation process.
	
	Cause 5: Not Enough Selectors Are Free
	--------------------------------------
	
	Resolution 5: Minimize the use of GlobalAlloc(). Each GlobalAlloc()call uses one
	of the limited selectors available to Windows (4096 in protected mode and 8192
	in 386 enhanced mode). For more information, query in the Microsoft Knowledge
	Base on the following words:
	
	  handle and limits and protected and enhanced mode
	
	
	Cause 6: The DEVMODE Structure Passed In Is Not the Right Size
	--------------------------------------------------------------
	
	Resolution 6: The size of the DEVMODE structure varies from printer to printer.
	You can find the size of the DEVMODE structure for a particular printer by
	calling ExtDeviceMode() with wMode equal to zero.
	
	Cause 7: The Logical Device (Device
	
	Driver) or the Physical Device Is Not Found
	-------------------------------------------
	
	Resolution 7: Check to see if you have the device driver and that the physical
	device is connected and ready for use. You can check this by attempting to print
	to that printer from other applications.
	
	Cause 8: The Function Cannot Initialize the Created DC
	------------------------------------------------------
	
	Resolution 8: Restart Windows and try again.
	
	Explanation 8: The objects used to initialize a DC are predefined. This problem
	is likely to occur only when one of the applications in the system has corrupted
	Windows' internal data.
	
	REFERENCES
	==========
	
	
	
	Additional query words: 3.00 3.10 fails
	
	======================================================================
	Keywords          : kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
