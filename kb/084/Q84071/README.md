---
layout: page
title: "Q84071: SAMPLE: WNBDemo.exe Uses NetBIOS Under Microsoft Windows"
permalink: /kb/084/Q84071/
---

## Q84071: SAMPLE: WNBDemo.exe Uses NetBIOS Under Microsoft Windows

{% raw %}

	Article: Q84071
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbnetwork kbsample kbNetBIOS kbGrpDSNet
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WNBDemo.exe is a sample that contains sample source code and additional
	documentation for NetBIOS under Windows. In the Microsoft Windows operating
	system, an application can use NetBIOS functions in every Windows mode (real,
	standard, or 386 enhanced). However, the application must conform to some rules,
	which are briefly discussed in the text below.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  WNBDemo.exe
	  (http://download.microsoft.com/download/platformsdk/sample97/3.1/W31/EN-US/WNBDemo.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	NOTE: Microsoft C Optimizing Compiler version 6.0 or later and Microsoft Macro
	Assembler (MASM) version 5.1 or later are required to build the source code in
	WNBDEMO.
	
	Windows provides access to NetBIOS through the NetBIOSCall function. This
	function is equivalent to issuing Interrupt 5Ch under MS-DOS. Although it is
	legal to call Interrupt 5Ch directly from within Windows, this is not the
	recommended practice; use NetBIOSCall.
	
	An application should call the NetBIOSCall() function from assembly language to
	ensure that the registers are preserved for the call. The following is a short
	stub function that can be used to issue NetBIOS calls under Windows:
	
	      extrn     NETBIOSCALL : FAR
	     extrn     DOS3CALL : FAR
	     
	               assume  cs: _TEXT
	     
	     _TEXT     SEGMENT WORD PUBLIC 'CODE'
	     
	     
	     ; WORD FAR PASCAL nbNetBIOS(LPNCB lpNCB)
	     
	               PUBLIC  nbNetBIOS
	     
	     nbNetBIOS proc FAR
	     
	               push    bp                    ; save bp
	               mov     bp, sp                ; sp into bp for stack access
	               push    es                    ; save es
	               push    bx                    ; save bx
	     
	               mov     es, word ptr [bp + 8] ; put HIWORD into es
	               mov     bx, word ptr [bp + 6] ; put LOWORD into bx
	     
	               call    NetBIOSCall           ; shazam!
	     
	               xor     ah, ah
	               mov     al, byte ptr es:[bx + 1] ; return the return code
	     
	               pop     bx                    ; restore bx
	               pop     es                    ; restore es
	               mov     sp, bp                ; restore sp
	               pop     bp                    ; restore bp
	               ret     4                     ; return to caller
	                                             ; fix-up stack
	     
	     nbNetBIOS endp
	     
	     
	     _TEXT     ENDS
	     
	     END
	
	This function takes a FAR pointer to an initialized network control block (NCB)
	and returns the NCB's return code from the NetBIOS driver.
	
	Unlike MS-DOS, Windows also has special memory requirements for NCBs and post
	routines. The general rule of thumb is to fix the NCBs and post routines in
	memory as much as possible to prevent paging, banking, or other time-consuming
	operations during the time that the application uses the NCBs and post
	routines.
	
	For post routines, all code and data segments used by the routine must be placed
	into FIXED segments of a dynamic-link library (DLL). This causes the segments to
	be page locked, not banked, and to have other attributes appropriate to the mode
	in which Windows is running. Because the FIXED keyword is ignored for
	applications, this code must be placed in a DLL.
	
	Remember that the post routine may call only the PostMessage(), PostAppMessage(),
	and NetBIOSCall() functions; it cannot call any other functions in Windows. To
	call the nbNetBIOS function given above from the post routine, nbNetBIOS must be
	placed into a FIXED segment of a DLL and the function must be reentrant.
	
	NCBs should be allocated such that they are also page locked, not banked, and
	have other attributes appropriate to the mode in which Windows is running. The
	easiest way to do this is to use GlobalAlloc() to allocate memory for the NCB
	either as GMEM_FIXED or to call the GlobalWire() function to move the memory as
	low as possible in the address space (followed by a call to GlobalPageLock() in
	386 enhanced mode). If the memory is allocated from a DLL with the GMEM_FIXED
	flag, then the memory will also be page locked--this is true only for
	allocations from DLLs.
	
	As stated above, for further information, refer to the WNBDEMO.exe in the
	Microsoft Download Center.
	
	REFERENCES
	==========
	
	"An Introduction to Network Programming Using the NetBIOS Interface," by Alok
	Sinha and Ray Patch, March-April 1992 Microsoft Systems Journal
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbnetwork kbsample kbNetBIOS kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
