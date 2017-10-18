---
layout: page
title: "Q104790: Using Int 21h Get/Set Media ID in the Windows Environment"
permalink: kb/104/Q104790/
---

## Q104790: Using Int 21h Get/Set Media ID in the Windows Environment

	Article: Q104790
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): _IK kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Interrupt 21h Generic IOCTL for Block Devices functions Get Media ID and Set
	Media ID cannot be used directly from a protected mode application in the
	Windows operating environment. However, these functions can be used in
	conjunction with the DPMI function Simulate Real Mode Interrupt.
	
	MORE INFORMATION
	================
	
	The following Interrupt 21h AX=440Dh Generic IOCTL for Block Devices functions
	are automatically translated from protected mode by the DOSMGR VxD:
	
	  40h - Set Device Parameters
	  41h - Write Track on Logical Drive
	  42h - Format Track on Logical Drive
	  60h - Get Device Parameters
	  61h - Read Track on Logical Drive
	  62h - Verify Track on Logical Drive
	  68h - Sense Media Type
	
	The following are not automatically translated by the DOSMGR VxD:
	
	  46h - Set Media ID
	  66h - Get Media ID
	
	To use the Get Media ID or Set Media ID functions from a protected mode
	application in the Windows operating environment, the DPMI function Simulate
	Real Mode Interrupt must be used to manually translate the buffer pointer from
	protected mode to real mode.
	
	The sample code below illustrates how the Get Media ID function can be manually
	translated by:
	
	1. Allocating a real mode addressable buffer using GlobalDosAlloc().
	
	2. Initializing a DPMI real mode register structure with a real mode pointer to
	  the buffer.
	
	3. Issuing the interrupt in real mode using the DPMI function Simulate Real Mode
	  Interrupt.
	
	4. If successful, the content of the real mode addressable buffer is copied to
	  the protected mode destination buffer.
	
	5. The real mode addressable buffer is freed.
	
	To translate the Set Media ID function, the contents of the protected mode source
	buffer would be copied to the real mode addressable buffer before issuing the
	interrupt in real mode.
	
	Sample Code
	-----------
	
	  // This is a standard MS-DOS structure.
	  typedef struct tagMEDIAID
	  {
	      WORD  wInfoLevel;
	      DWORD dwSerialNum;     // Serial number
	      char  VolLabel[11];    // ASCII volume label
	      char  FileSysType[8];  // File system type
	  } MEDIAID, far *LPMEDIAID;
	
	  // This is a standard DPMI structure.
	  typedef struct tagREALMODEREG {
	      DWORD rmEDI, rmESI, rmEBP, Reserved, rmEBX, rmEDX, rmECX, rmEAX;
	      WORD  rmCPUFlags, rmES, rmDS, rmFS, rmGS, rmIP, rmCS, rmSP, rmSS;
	  } REALMODEREG, FAR *LPREALMODEREG;
	
	  //********************************************************************
	  // RealInt()
	  // 
	  // Simulate an interrupt in real mode using DPMI function 0300h
	  // When the interrupt is simulated in real mode, the registers will
	  // contain the values in lpRealModeReg. When the interrupt returns,
	  // lpRealModeReg will contain the values from real mode.
	  // 
	  //********************************************************************
	
	  BOOL RealInt (BYTE intnum, LPREALMODEREG lpRealModeReg)
	  {
	     BOOL bRetVal = TRUE;
	
	     _asm
	     {
	         mov  ax, 0300h  // Simulate real mode interrupt
	         mov  bl, intnum // Interrupt number to simulate
	         mov  bh, 0      // Flags
	         mov  cx, 0      // Number of words to copy on stack
	         les  di, lpRealModeReg
	         int  31h
	         jnc  Done
	         mov  bRetVal, FALSE
	     Done:
	     }
	     return bRetVal;
	  }
	
	  //********************************************************************
	  // GetMediaID()
	  // 
	  // Get Media ID by simulating an Interrupt 21h, AX=440Dh, CX=0866h in
	  // real mode. Set up RealModeReg to contain a real mode pointer to a
	  // MediaID structure.
	  //********************************************************************
	
	  BOOL GetMediaID (WORD      Drive,
	                   LPMEDIAID lpMediaID)
	  {
	     REALMODEREG RealModeReg;
	     DWORD       dwGlobalDosBuffer;
	     LPMEDIAID   lpRMMediaID;
	     BOOL        bRetVal;
	
	     // (1) Get a real mode addressable buffer for the MediaID structure.
	     // 
	     dwGlobalDosBuffer = GlobalDosAlloc(sizeof(MEDIAID));
	     if (dwGlobalDosBuffer == NULL)
	     {
	         return FALSE;
	     }
	
	     // (2) Initialize the real mode register structure.
	     // 
	     memset(&RealModeReg, 0, sizeof(RealModeReg));
	     (WORD)RealModeReg.rmEAX = 0x440D;  // IOCTL for Block Device
	     (WORD)RealModeReg.rmEBX = Drive;   // 0 = default, 1 = A, 2 = B
	     (WORD)RealModeReg.rmECX = 0x0866;  // Get Media ID
	     // Set the real mode DS:DX to a real mode pointer to the buffer.
	     // The offset in DX is zero from the memset().
	     RealModeReg.rmDS  = HIWORD(dwGlobalDosBuffer);
	
	     // (3) Simulate the real mode interrupt.
	     // 
	     if (RealInt(0x21, &RealModeReg) &&         // Int simulation ok?
	         (RealModeReg.rmCPUFlags & 0x0001)==0)  // Carry clear?
	     {
	         // (4) Copy the content of the real mode addressable buffer
	         //     to the protected mode destination buffer.
	         // 
	         lpRMMediaID = (LPMEDIAID) MAKELP(LOWORD(dwGlobalDosBuffer), 0);
	         *lpMediaID = *lpRMMediaID;  // Structure copy
	         bRetVal = TRUE;
	     }
	     else
	     {
	         bRetVal = FALSE;
	     }
	
	     // (5) Free the real mode addressable buffer.
	     // 
	     GlobalDosFree(LOWORD(dwGlobalDosBuffer));
	
	     return bRetVal;
	  }
	
	For more information on the DOS Protected Mode Interface (DPMI), see the DPMI
	version 0.9 specification, which is available on the Microsoft Developer Network
	CD Disk Four.
	
	Additional query words: serial number volume label
	
	======================================================================
	Keywords          : _IK kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	
