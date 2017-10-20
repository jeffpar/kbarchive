---
layout: page
title: "Q73187: Using Huge Memory Model and Huge Arrays in MASM"
permalink: /kb/073/Q73187/
---

## Q73187: Using Huge Memory Model and Huge Arrays in MASM

{% raw %}

	Article: Q73187
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.0,5.10,5.10a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.10, 5.10a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Macro Assembler (MASM) versions 5.0, 5.1, 5.1a, 6.0, 6.0a, and
	6.0b allow you to specify the huge memory model by using the ".model huge"
	directive. However, this is essentially the same as specifying the large memory
	model with ".model large". The actual handling of huge arrays must be performed
	by the programmer.
	
	MORE INFORMATION
	================
	
	Huge model is provided for code documentation and consistency with high-level
	languages. The symbol @DataSize is defined as 1 under the large model and as 2
	under the huge model. Also, under MASM 6.0, @Model is defined as 5 under large
	model and as 6 under huge model.
	
	Pages 84 and 85 of the "Microsoft Macro Assembler Programmer's Guide" for MASM
	versions 5.0 and 5.1 describes the memory models that are used by Microsoft
	high-level languages. Huge model is described as a model where:
	
	  Both code and data may be greater than 64K. In addition, data arrays may be
	  larger than 64K. Both code and data are far, and pointers to elements within
	  an array must also be far. Segments are the same for large and huge models.
	
	Page 41 of the "Microsoft Macro Assembler Programmer's Guide" shipped with MASM
	version 6.0 discusses the limitations of huge model in assembly language:
	
	  Huge model implies individual data items larger than a single segment, but
	  the implementation of huge data items must be coded by the programmer. Since
	  the assembler provides no direct support for this feature, huge model is
	  essentially the same as large model.
	
	The two sample programs below demonstrate the creation of a huge array and how to
	handle incrementing a pointer to the array under MS-DOS and OS/2. The MS-DOS
	program allocates a huge data item of 100000 bytes and loads every 10000th
	(ten-thousandth) element into the DL register. The OS/2 program allocates a huge
	data item and sets every 10000th element to 1. Viewing the execution in CodeView
	provides the best understanding of the process.
	
	The following are the basic steps used in the sample programs:
	
	1. MS-DOS: Statically declare multiple, adjacent segments using full segment
	  declarations. This example needs one full 64K segment and another segment for
	  the remainder of the 10000 bytes. The huge array has been declared in two
	  portions. These portions can be treated as a single array. (To do dynamic
	  allocation instead, use int 21h function 48h to request a block the desired
	  size and receive a pointer to the beginning of the allocated area).
	
	  OS/2: Use the function DosAllocHuge() to dynamically allocate a huge array.
	  (To do static allocation instead, use multiple, adjacent segments using full
	  segment declarations as in the DOS example).
	
	2. The segment and offset of the first element are placed in ES and BX,
	  respectively.
	
	3. When the offset is incremented to advance to another element, the program
	  must handle the case where it wraps at the end of a segment. That is, when
	  the offset value exceeds FFFFh.
	
	  MS-DOS: The segment must be incremented by 4096 when addition to the offset
	  sets the carry flag. The 16-bit segment is shifted 4 bits and added to the
	  16-bit offset to produce a 20-bit address. The maximum value that the 16-bit
	  offset can hold is FFFFh. When the offset wraps, the carry should be added to
	  the bit of the segment that would line up with the 17th bit of the true
	  20-bit address. This is bit 12 of the segment. Since 2 to the power of 12 is
	  4096, you add 4096 to the segment when the offset wraps.
	
	  OS/2: The segment register is actually a selector into a descriptor table. The
	  descriptor contains segment access rights, the segment base address, and the
	  segment limit. The physical address is computed from the segment base address
	  and the offset. Since you do not have access to the actual address, you
	  cannot modify bit 17 when the offset overflows. Therefore, OS/2 provides a
	  mechanism to get a new selector to the next segment: the DosGetHugeShift()
	  API function. You shift the number 1 left by the value returned from
	  DosGetHugeShift() in order to get the amount of the increment for subsequent
	  selectors. That increment amount added to the original selector value will
	  give you the selector for the segment that contains the rest of the array.
	  (For further details, see page 128 of the Microsoft Press book "Inside OS/2"
	  by Gordon Letwin.)
	
	Sample Code (MS-DOS)
	--------------------
	
	  ; Huge array example for MS-DOS
	  ; Data is declared statically; every 10000th element is loaded into dl
	
	      .model huge
	      .stack
	
	  huge_data1 segment para public 'fardata'  ; segment size is 64K
	      huge_array1 db  65535 dup( 1 )        ; can't dup 65536 elements
	                  db  1     dup( 1 )        ;   since max word is 65535
	  huge_data1 ends
	
	  huge_data2 segment para public 'fardata'
	      huge_array2 db  34464 dup( 2 )        ; remainder of 100000 bytes
	  huge_data2 ends
	
	      .code
	
	  Start:
	      mov ax, huge_data1
	      mov es, ax
	      mov bx, offset huge_array1        ; start at element 1
	      mov cx, 10                        ; do this 10 times
	      sub dx, dx
	  again:
	      mov dl, es:[bx]           ; es:[bx] is the array element
	      add bx, 10000             ; skip 10000 elements
	      jnc testcx                ; test for wrap of offset
	      mov ax, es                ; add 4096 to seg if offset wrapped
	      add ax, 4096
	      mov es, ax
	  testcx:
	      loop again
	
	      mov ax, 4c00h             ; terminate program
	      int 21h
	
	      end Start
	
	Sample Results (MS-DOS)
	-----------------------
	
	The following is a summary of execution (as viewed from CodeView):
	
	  CX   ES:[BX]     ADDRESS
	  =========================
	  A       1       67E8:0000    ; values from huge_array1
	  9       1       67E8:2710    ;
	  8       1       67E8:4E20    ;        .
	  7       1       67E8:7530    ;        .
	  6       1       67E8:9C40    ;        .
	  5       1       67E8:C350    ;
	  4       1       67E8:EA60    ;
	  3       2       77E8:1170    ; values from huge_array2
	  2       2       77E8:3880    ;        .
	  1       2       77E8:5F90    ;        .
	
	Sample Code (OS\2)
	------------------
	
	  ; Huge array example for OS/2
	  ; Data is declared dynamically; every 10000th element is set to 1
	  ; Elements of the code are specific to MASM 6.0 for readability.
	
	      .model huge, pascal, OS_OS2
	      .286
	
	  INCL_BASE  equ    1              ; include kernel, keyboard, video
	                                   ;   and mouse definitions
	  include    os2.inc
	  includelib os2.lib
	
	      .stack
	      .data
	      i           word     1
	      selector    SEL      ?       ; SEL is defined in include file
	      ShiftCount  ushort   ?
	      .code
	      .startup
	
	      invoke DosAllocHuge,         ; call DosAllocHuge
	             1,                    ;   # of full segments
	             34464,                ;   # of bytes in last segment
	             addr selector,        ;   ptr to var for allocated selector
	             0,                    ;   max segments to be reallocated
	             SEG_NONSHARED         ;   sharable/discardable flag
	      invoke DosGetHugeShift,      ; call DosGetHugeShift
	             addr ShiftCount       ;   ptr to var for shift count
	      mov cx, ShiftCount
	      shl i, cl                    ; i contains value to inc selector
	      mov ax, selector
	      mov es, ax
	      mov bx, 0                    ; start at element 1
	      mov cx, 1
	      sub dx, dx
	      mov dl, 1
	
	      .while cx <= 10              ; set every 10000th element to 1
	          mov es:[bx], dl          ; es:[bx] is the array element
	          add bx, 10000            ; skip 10000 elements
	          inc cx
	          jnc testcx               ; test for wrap of offset
	          mov ax, es
	          add ax, i                ; add i to selector
	          mov es, ax
	      testcx:
	      .endw
	  .exit 0
	  end
	
	Sample Results (OS/2)
	---------------------
	
	The following is a summary of execution (as viewed from CodeView):
	
	  CX   ES:[BX]     ADDRESS
	  =========================
	  1       1       0147:0000    ; Values from 1st segment
	  2       1       0147:2710    ;
	  3       1       0147:4E20    ;           .
	  4       1       0147:7530    ;           .
	  5       1       0147:9C40    ;           .
	  6       1       0147:C350    ;
	  7       1       0147:EA60    ;
	  8       1       0167:1170    ; Value from 2nd segment
	  9       1       0167:3880    ;           .
	  A       1       0167:5F90    ;           .
	
	Additional query words: kbinf 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM500 kbMASM600a kbMASM600b
	Version           : MS-DOS:5.0,5.10,5.10a,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
