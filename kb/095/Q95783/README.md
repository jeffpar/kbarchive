---
layout: page
title: "Q95783: Compatibility Issues for Microsoft Windows Versions 3.x"
permalink: /kb/095/Q95783/
---

## Q95783: Compatibility Issues for Microsoft Windows Versions 3.x

{% raw %}

	Article: Q95783
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
	
	This article provides guidelines for writing applications for the Microsoft
	Windows versions 3.x operating system in a manner that will produce the fewest
	compatibility problems when the application is run on future versions of
	Windows. The discussion focuses on compatibility issues involving Windows-based
	applications, Windows display drivers, and MS-DOS-based applications.
	
	MORE INFORMATION
	================
	
	Guidelines for Windows-Based Application Developers
	---------------------------------------------------
	
	Keep these general rules in mind when developing applications for Microsoft
	Windows:
	
	- The golden rule of application compatibility is to adhere to the Microsoft
	  Windows Software Development Kit (SDK) documentation. That is, do not use an
	  application programming interface (API) that is not documented, and use only
	  the features of an API that are documented.
	
	- Do not depend on the format of internal data structures to remain the same in
	  the future. For example, the format of the internal structures used for
	  windows (HWND), menus (HMENU), device contexts (HDC), regions (HRGN), bitmaps
	  (HBITMAP), and tasks (HTASK) are guaranteed to change in a future version of
	  Windows. Other internal structures may also change.
	
	- Do not assume objects are allocated in User's or GDI's data segment. In an
	  attempt to remove system resource limitations, objects that are currently
	  allocated in these data segments may be allocated elsewhere in the future.
	  For example, assuming a window handle is an offset in User's data segment
	  will probably be incorrect in future versions of Windows.
	
	- Do not replace system dynamic-link libraries (DLLs) such as TOOLHELP.DLL,
	  SHELL.DLL, and COMMDLG.DLL unless you use the version APIs (VER.DLL). These
	  DLLs will change in the future. The system will malfunction if applications
	  replace these DLLs with the earlier 3.0 or 3.1 version. If your application
	  installs these DLLs, double-check the code for correctness; many applications
	  that attempt this do not do it correctly.
	
	- Test the Windows version number properly. The following code, for example,
	  does not work correctly if it is run on a version of Windows that is numbered
	  4.0 because the first test of the minor version will fail. Surprisingly, this
	  is a very common mistake.
	
	        winVer = LOWORD(GetVersion());
	        if (HIGHBYTE(winVer) >= 10 && LOWBYTE(winVer) >= 3)
	            // run
	        else
	            // exit
	
	  Use the following code instead:
	
	        winVer = LOWORD(GetVersion());
	        winVer = (((WORD)(LOBYTE(winVer))) << 8)|(WORD)HIBYTE(winVer);
	        if (winVer >= 0x030A)    // NOTE: Always use a HEX value here!!!
	            // run
	          else
	            // exit
	
	- Applications written for Windows versions 2.x will not be supported under
	  future versions of Windows. Make sure your applications have been tested and
	  built using any of the Windows versions 3.x SDKs so that they are marked as
	  applications written for Windows version 3.0 or later and can run in
	  protected mode.
	
	- Do not copy Program Manager group files onto a user's disk. Use the Program
	  Manager's DDE interface to add groups and group items for your application.
	
	- Do not assume minimized application windows have icon title windows. If your
	  application walks the window list and assumes that a window with a class name
	  of "0x8004" or "#32772" is an icon title, the application will not function
	  properly in future versions of Windows. If your application needs to perform
	  this operation when running on Windows version 3.1, write your code so that
	  the application will continue to work even if it does not find the icon title
	  windows.
	
	- Do not hard-code the pixel dimensions of menus, scroll bars, sizes of
	  captions, and so on. Instead, use GetSystemMetrics to get these sizes. The
	  sizes will change depending on the active display driver, and may be
	  user-adjustable in the future. Also, your code should watch for the
	  WM_WININICHANGED message and reinitialize the values accordingly.
	
	- Do not hard-code button colors to be the standard three shades of gray. Use
	  the GetSystemColors function to obtain these colors. Again, watch for the
	  WM_WININICHANGED message, and reinitialize these colors accordingly.
	
	- Those writing debuggers must use the services provided by TOOLHELP.DLL,
	  rather than the services provided by the earlier WINDEBUG.DLL. WINDEBUG.DLL
	  will not work in future versions of Windows.
	
	- Do not assume that GlobalWire allocates MS-DOS addressable memory. Your
	  application must use GlobalDOSAlloc to obtain this type of memory.
	
	- Do not assume that GlobalAlloc with the GMEM_FIXED option allocates MS-DOS
	  addressable memory. Your application must use GlobalDOSAlloc to obtain this
	  type of memory.
	
	- Printer soft font information is currently stored in WIN.INI and is
	  associated with a particular port (LPT1, for example). In the future, this
	  information will be associated with a printer in order to be independent of
	  the port to which the printer is connected.
	
	- Your application must not assume the contents of any WINOLDAP (MS-DOS-based
	  application manager) data structures allocated in WINOLDAP's data segment.
	  These structures may change in the future.
	
	- Do not over tune your application's STACKSIZE or HEAPSIZE settings in the
	  application's .DEF file. Some developers have tuned these settings
	  (STACKSIZE, in particular) in their applications to supply exactly enough
	  space to run on Windows version 3.0 or 3.1. These applications sometimes have
	  problems because different Windows display drivers have different stack depth
	  characteristics. Future versions of Windows will compound this problem
	  because the stack depth will change for most of the core components (GDI,
	  Kernel, User, and so forth). It is recommended that at least an additional 2K
	  be added to the minimum STACKSIZE and HEAPSIZE settings.
	
	Guidelines for Display Driver Developers
	----------------------------------------
	
	Keep these points in mind when developing display drivers for Windows:
	
	- The meaning of the WindHand field in EXTPAINTSTRUC may be changed for
	  enhanced-mode grabbers. WindHand is the HWND of the grabber child window
	  inside the WINOLDAP window. All grabber painting should be restricted to this
	  window. Grabbers were not supposed to use WindHand for anything beyond
	  calling GetClientRect, GetDC, and so on.
	
	- Grabbers should not use the EPStatusFlags bits other than fFocus, fVValid,
	  fSelect, and fGrbProb. Some bits that are private to WINOLDAPP were
	  accidentally included in the DDK header files although not used in any
	  Microsoft-distributed grabber sample source.
	
	Guidelines for MS-DOS-based Application Developers
	--------------------------------------------------
	
	If you develop applications for MS-DOS, keep these rules in mind:
	
	- Make sure your application works properly in a Windows version 3.1 MS-DOS
	  box. Especially, make sure your Setup program functions in a Windows MS-DOS
	  box. For example, writing over Program Manager group files or altering
	  WIN.INI or SYSTEM.INI while Windows is running would be improper things to
	  do. Even though the application is MS-DOS-based, consider writing a
	  Windows-based Setup program, especially if your setup process needs to
	  perform operations such as altering WIN.INI or SYSTEM.INI.
	
	- Do not assume the location of the system file table (SFT) or MS-DOS buffers.
	  These may be moved into high memory to provide extra conventional memory. In
	  general, all internal MS-DOS data structures may be moved into high memory in
	  the future.
	
	- Do not assume sizes of internal MS-DOS data structures. For example, do not
	  assume that a drive parameter block (DPB) is 21h bytes long as some
	  applications have. The format of data structures, such as these that are easy
	  to find and traverse, may change in future versions of MS-DOS. Use documented
	  Interrupt 21h calls to obtain information such as this. For example, DPBs can
	  be obtained using Interrupt 21h functions, 1Fh, and 32h.
	
	Additional query words: no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
