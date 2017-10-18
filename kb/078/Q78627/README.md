---
layout: page
title: "Q78627: FIX: Address Label Offset Incorrect in USE32 Data Segment"
permalink: kb/078/Q78627/
---

## Q78627: FIX: Address Label Offset Incorrect in USE32 Data Segment

	Article: Q78627
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.0x,5.1x,5.2; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.0x, 5.1x, 5.2 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a label corresponds to an absolute address and the label is defined in a
	USE32 data segment, LINK generates the incorrect offset for the label. As a
	result, the application accesses incorrect data through the label.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LINK versions 3.6, 3.61, 3.64,
	3.65, 3.69, 5.01, 5.1, 5.11, 5.13, 5.15 and 5.2 for MS-DOS and versions 5.01,
	5.11, 5.13, and 5.15 for OS/2. This problem was corrected in LINK version 5.3
	for MS-DOS.
	
	MORE INFORMATION
	================
	
	A label can represent an absolute address XXXX:YYYY by placing the label in a
	segment with the type "at XXXX" and after an org directive "org YYYY."
	
	The following code example demonstrates this problem. The Microsoft Macro
	Assembler (MASM) generated the first listing. Note that the offset of Vector is
	20h, as it should be. The CodeView debugger generated the second listing. Note
	that the offset of Vector is 28h, which is incorrect.
	
	Sample Code
	-----------
	
	   
	  ; Assemble options needed: none
	
	                            .model small,c
	                            .386
	
	   0000                     Zero segment use32 at 0
	                              org 32
	   0020                       Vector label dword
	   0020                     Zero ends
	
	   0000                     .code
	                            assume es:Zero
	   0000                     start:
	   0000  67& 66| 26: A3         mov [Vector], eax
	         00000020 R
	                            end start
	
	  ; CodeView listing
	
	  1:      .model small,c
	  2:      .386
	  3:
	  4:      Zero segment use32 at 0
	  5:      org 32
	  6:
	  7:          Vector label dword
	  8:
	  9:      Zero ends
	  10:
	  11:     .code
	  12:
	  13:     assume es:Zero
	  14:
	  15:     start:
	  16:
	  17:         mov [Vector], eax
	  6A8F:0000 676626A32800000MOV       DWord Ptr ES:[00000028],EAX
	  18:
	  19:         end start
	
	Additional query words: 3.60 3.61 3.64 3.65 3.69 5.01.20 5.01.21 buglist5.11 buglist5.13 buglist5.15 buglist5.20 fixlist5.30 5.02 5.03 5.05 5.10 5.20
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK50xOS2Search kbLINK520DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:3.x,4.x,5.0x,5.1x,5.2; OS/2:5.0x,5.1,5.11,5.13,5.15
	Solution Type     : kbfix
	
	=============================================================================
	
