---
layout: page
title: "Q107696: Modifying COMM.DRV to Support up to Nine Ports"
permalink: kb/107/Q107696/
---

## Q107696: Modifying COMM.DRV to Support up to Nine Ports

	Article: Q107696
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 3.1 communications application programming interface (API) supports
	up to nine communications (COM) ports. However, COMM.DRV that is included with
	Windows 3.1 handles only four COM ports. With the Windows 3.1 DDK, COMM.DRV can
	be modified to handle up to nine ports. This information is specific to COMM.DRV
	for Windows 3.1 and Windows for Workgroups 3.1.
	
	
	Please note: If a system has more than four COM ports, it probably has a
	nonstandard multiport serial board, which will require more extensive changes
	than listed below. Contact the hardware vendor to see if a modified
	communications driver already exists for the specific hardware.
	
	MORE INFORMATION
	================
	
	The Windows DDK contains the source for COMM.DRV. The necessary changes to
	support nine COM ports are listed below. Also, a few lines must be added to
	SYSTEM.INI.
	
	In the [386Enh] section of SYSTEM.INI, the following entries must be made:
	
	  COMxBASE = address - "x" is the COM port number, and "address" is the base
	  port address for the port.
	
	  COMxIrq = number - "x" is the COM port number, and "number" is the IRQ used by
	  the port.
	
	  MaxCOMPort = number - "number" is the maximum number of COM ports supported in
	  386 enhanced mode.
	
	Below are the changes that must be made to the COMM.DRV source. Please remember
	that by modifying the source, the driver is no longer a Microsoft product, and
	therefore the name of the driver must be changed. However, do not change the
	module name; it must be COMM.
	
	The following changes are shown in comparison to the original files. These files
	are contained in the \286\COMM subdirectory of the Windows 3.1 DDK.
	
	This change notifies COMM.DRV that there are nine ports:
	
	Comparing Files IBMCOM.INC and \COMM\IBMCOM.INC
	-----------------------------------------------
	
	IBMCOM.INC
	
	  11:  MAXLPT   equ   2        ;Three LPTs supported (LPT1, 2 ,3)
	  12:  MAXCOM   equ   8        ;Nine COMs supported
	  13:
	
	\COMM\IBMCOM.INC
	
	  11:  MAXLPT   equ   2        ;Three LPTs supported (LPT1, 2 ,3)
	  12:  MAXCOM   equ   3        ;Four COMs supported (COM1, 2, 3, 4)
	  13:
	
	This change fixes a bug that occurs when COM ports are sharing IRQs. For more
	information on this bug, query on the following words in the Microsoft Knowledge
	Base:
	
	  " sharing and IRQ and COM1 and reboot " (without the quotation marks)
	
	
	Comparing Files IBMSETUP.ASM and \COMM\IBMSETUP.ASM
	---------------------------------------------------
	
	IBMSETUP.ASM
	
	 142:
	 143:  Dummy   dw      0         ; Make sure COM1 is not 0!
	 144:
	
	\COMM1\IBMSETUP.ASM
	
	 142:
	 143:
	
	Change the version, so this version of the driver is identified as the nine- port
	version:
	
	Comparing Files COMM.RCV and \COMM\COMM.RCV
	-------------------------------------------
	
	COMM.RCV
	
	  10:  #define VER_FILESUBTYPE          VFT2_DRV_COMM
	  11:  #define VER_FILEDESCRIPTION_STR  "Windows COMM Driver - 9 Port Ver"
	  12:  #define VER_INTERNALNAME_STR     "COMM"
	
	\COMM1\COMM.RCV
	
	  10:  #define VER_FILESUBTYPE           VFT2_DRV_COMM
	  11:  #define VER_FILEDESCRIPTION_STR   "Windows COMM Driver"
	  12:  #define VER_INTERNALNAME_STR      "COMM"
	
	There are a few jumps here that are "short" in the retail COMM.DRV. Because of
	the changes, they need to be changed to "near".
	
	Comparing Files IBMINT.ASM and \COMM\IBMINT.ASM
	-----------------------------------------------
	
	IBMINT.ASM
	
	 147:          mov     di, DataOFFSET IRQhook&num
	 148:          jmp     NEAR PTR DEF_RM_Handler
	 149:  DEF_RM_COM_INT_&num endp
	
	\COMM1\IBMINT.ASM
	
	 147:          mov     di, DataOFFSET IRQhook&num
	 148:          jmp     short DEF_RM_Handler
	 149:  DEF_RM_COM_INT_&num endp
	
	IBMINT.ASM
	
	 155:          mov     di, DataOFFSET IRQhook&num
	 156:  IF MAXCOM-num LE 4
	 157:          jmp     short DEF_Handler
	 158:  ELSE
	 159:          jmp NEAR PTR DEF_Handler
	 160:  ENDIF
	 161:  DEF_COM_INT_&num endp
	
	\COMM1\IBMINT.ASM
	
	 155:          mov     di, DataOFFSET IRQhook&num
	 156:          jmp     short DEF_Handler
	 157:  DEF_COM_INT_&num endp
	
	IBMINT.ASM
	
	 177:          mov     di, DataOFFSET IRQhook1
	 178:          jmp     NEAR PTR DEF_RM_Handler
	 179:  DEF_RM_COM_INT_1 endp
	
	\COMM1\IBMINT.ASM
	
	 173:          mov     di, DataOFFSET IRQhook1
	 174:          jmp     short DEF_RM_Handler
	 175:  DEF_RM_COM_INT_1 endp
	
	Additional query words: 3.10 COMM.DRV 9 PORT
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310
	Version           : :3.1
	
	=============================================================================
	
