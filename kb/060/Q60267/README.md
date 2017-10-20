---
layout: page
title: "Q60267: FIX: Error A2057 With DOS.INC, .386, and MASM 5.1 or 5.1a"
permalink: /kb/060/Q60267/
---

## Q60267: FIX: Error A2057 With DOS.INC, .386, and MASM 5.1 or 5.1a

{% raw %}

	Article: Q60267
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) versions 5.1 and 5.1a generate the
	following error when the DOS.INC include file is used in conjunction with the
	.386 or .386P directive.
	
	  error A2057: Illegal size of operand
	
	RESOLUTION
	==========
	
	No errors occur if the USE16 use type is used in the SEGMENT statement. This
	generates a 16-bit offset for the DOS.INC macros, whereas a 32-bit offset is
	generated without the USE16, and produces an error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1 and 5.1a. This
	problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The DOS.INC files are provided on disk 2 of the MASM version 5.1 disks, for
	simplified use of the DOS calls.
	
	The following assembly listing produces the error mentioned above:
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .386
	  INCLUDE dos.inc
	
	  _datas  SEGMENT word 'data'     ; add USE16 for a work-around
	  msg     DB      'Hi,there'
	  msglen  EQU     $-msg
	  _datas  ENDS
	
	          ASSUME  cs:_codes
	  _codes  SEGMENT word 'code'
	  start:  MOV     ax, _datas
	          MOV     ds, ax          ; set ds to point to message
	
	          @write  msg, msglen     ; error A2057 occurs here
	          @exit
	
	  _codes  ENDS
	
	  END start
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
