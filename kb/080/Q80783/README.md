---
layout: page
title: "Q80783: Determining the Version of MS-DOS from a Windows App"
permalink: /kb/080/Q80783/
---

## Q80783: Determining the Version of MS-DOS from a Windows App

{% raw %}

	Article: Q80783
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are at least three ways for an application developed for Windows version
	3.x to determine the version of MS-DOS that is running on the system. Both the
	first and second methods require placing a few lines of inline assembler code
	into the application. The second method requires MS- DOS version 5.0. The third
	method requires changing the GetVersion() function prototype in the WINDOWS.H
	header file distributed with the Microsoft Windows SDK version 3.0 (this change
	is not necessary if the Microsoft Windows SDK version 3.1 is being used).
	
	Even though it is necessary to modify the Windows 3.0 header file, the third
	method is the most removed from the hardware and can be considered the most
	portable. The other two methods assume an underlying Intel 80x86 architecture
	(or emulation).
	
	MORE INFORMATION
	================
	
	Method 1
	--------
	
	This method requires only a few lines of inline assembler code and a call to the
	DOS3Call() function. The following code fragment demonstrates this technique:
	
	      VOID FAR PASCAL DOS3Call(VOID);   // Use instead of INT 21h
	     int nMajor;                       // MS-DOS major version
	     int nMinor;                       // MS-DOS minor version, revision
	     int nOEMNumber;                   // OEM serial number
	     static char szUserMsg[80];        // holds user message
	
	     _asm
	       {
	          mov   ax, 0x3000        ; Get MS-DOS version
	          call  DOS3Call
	          mov   nMajor, al        ; Save major number
	          mov   nMinor, ah        ; Save minor version number
	          mov   nOEMNumber, bh    ; Save OEM Serial number
	       }
	
	     wsprintf(szUserMsg,
	              "Running on MS-DOS %d.%d OEM Serial Number %d",
	              nMajor, nMinor, nOEMNumber);
	     MessageBox(hWnd, szUserMsg, "MS-DOS Version", MB_OK);
	
	Method 2
	--------
	
	This method requires only a few lines of inline assembler code and a call to the
	DOS3Call() function. Additionally, it requires that MS-DOS version 5.0 is
	running on the system. While this function does not report the OEM serial
	number, it does report whether MS-DOS is in ROM or in HMA (the High Memory
	Area). Also the MS-DOS version returned by this method is unaffected by the
	SETVER command. The following code fragment demonstrates this technique:
	
	     #define DOSINROM 0x08
	     #define DOSINHMA 0x10
	     int nMajor    = 0;
	     int nMinor    = 0;
	     int nRevision = 0;
	     int nDOSFlag  = 0;
	     static char msg[120];
	     _asm
	       {
	           mov   ax, 0x3306        ; Get MS-DOS version
	           call  DOS3Call
	           mov   nMajor, bl        ; Save major number
	           mov   nMinor, bh        ; Save minor version number
	           mov   nRevision, dl     ; Revision num in low 3 bits
	           mov   nDOSFlag, dh      ; MS-DOS version flags
	       }
	     wsprintf(msg,
	              "Running on MS-DOS %s %s version %d.%d revision %d ",
	              (LPSTR) (nDOSFlag & DOSINROM ? "in ROM " : ""),
	              (LPSTR) (nDOSFlag & DOSINHMA ? "in HMA " : ""),
	              nMajor, nMinor, (nRevision & 0x03));
	     MessageBox(hWnd, msg, "MS-DOS Version", MB_OK);
	
	Important Note for Methods 1 and 2
	----------------------------------
	
	The DOS3Call() function must be prototyped. In assembly language, the appropriate
	prototype is as follows:
	
	     extrn DOS3CALL: far
	
	Use the DOS3Call() fucntion instead of making a direct call to MS-DOS INT 21h.
	The DOS3Call() function runs a little faster than the equivalent INT 21h call
	under Windows and it ensures that the interrupt will be handled correctly under
	Windows.
	
	Also note that the use of FAR and PASCAL in the definition of DOS3Call() requires
	use of WINDOWS.H, since these macros are defined there.
	
	Method 3
	--------
	
	The last method involves making a slight modification to the Windows SDK version
	3.0 header file, WINDOWS.H. To retrieve the MS-DOS version, change the return
	type in the function prototype of the GetVersion function call from a WORD to a
	DWORD. The modified prototype should resemble the following:
	
	     DWORD FAR PASCAL GetVersion(void);
	
	NOTE: It is not necessary to make the above change to the version of the
	WINDOWS.H file included with the Windows SDK version 3.1.
	
	The following code fragment demonstrates how to use the GetVersion() function to
	display both the MS-DOS version and the Windows version numbers:
	
	     DWORD dwVersion;
	     char szUserMsg[80];
	     dwVersion = GetVersion();
	     wsprintf(szUserMsg,
	              "Window version %d.%d. MS-DOS version %d.%d",
	              LOBYTE(LOWORD(dwVersion)), HIBYTE(LOWORD(dwVersion)),
	              HIBYTE(HIWORD(dwVersion)), LOBYTE(HIWORD(dwVersion)));
	     MessageBox(hWnd, szUserMsg, "GetVersion", MB_OK);
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
