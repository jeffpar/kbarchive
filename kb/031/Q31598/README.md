---
layout: page
title: "Q31598: Sign-Extended Register and Immediate Form of AND/OR/XOR"
permalink: /kb/031/Q31598/
---

## Q31598: Sign-Extended Register and Immediate Form of AND/OR/XOR

{% raw %}

	Article: Q31598
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Macro Assembler will generate sign-extended encodings whenever
	possible. The following are MASM instructions that will produce sign-extended
	encodings:
	
	Assembler           Sign-Extended               Nonsign-Extended
	Instructions        Encodings                   Encodings
	
	AND bx, 0ffffh      83 E3 FF                    81 E3 FFFF
	ADD bx, 0001h       83 C3 01                    81 C3 0001
	ADC bx, 0fh         83 D3 0F                    81 D3 000F
	OR  bx, 1           83 CB 01                    81 CB 0001
	SBB bx, 0ffffh      83 DB FF                    81 DB FFFF
	SUB bx, 3           83 EB 03                    81 EB 0003
	XOR bx, 0002h       83 F3 02                    81 F3 0002
	CMP bx, 0fff2h      83 FB F2                    81 FB FFF2
	
	MORE INFORMATION
	================
	
	MASM will choose the sign-extended version of the instruction because of the
	1-byte savings in the encoding. The 8088/8086/80186/80286 processors do support
	the sign-extended encoding, but documentation on this feature is limited. The
	support of sign-extended encoding is documented in the "8086/8088/80186/80188
	Programmer's Pocket Reference Guide" on Page 43.
	
	Additional query words: kbinf 5.00 5.10 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500
	Version           : :5.0,5.1,6.0
	
	=============================================================================
	

{% endraw %}
