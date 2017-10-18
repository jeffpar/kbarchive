---
layout: page
title: "Q30517: OFFSET Operator Is Segment Relative"
permalink: kb/030/Q30517/
---

## Q30517: OFFSET Operator Is Segment Relative

	Article: Q30517
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Macro Assembler version 5.10 The OFFSET operator is segment
	relative. The GROUP operator must be used to make the OFFSET operator group
	relative. In Microsoft Macro Assembler version 6.00 The OFFSET operator is group
	relative by default. This default can be over ridden with the M510 and OFFSET:
	options.
	
	MORE INFORMATION
	================
	
	The following is an example of using the OFFSET operator:
	
	  group_1 GROUP seg_1,seg_2,seg_3
	
	  seg_1 SEGMENT word public 'data'
	  assume ds:group_1
	          dw  0
	  item1   dw  20 dup(0)
	
	  seg_1 ends
	
	  seg_2 SEGMENT word public 'code'
	  assume cs:group_1
	
	  func1   PROC    NEAR
	          mov ax, offset item1
	          lea ax, item1
	          mov ax, offset group_1:item1
	          mov ax, offset item2
	          lea ax, item2
	          mov ax, offset group_1:item2
	
	  func1   ENDP
	
	  seg_2  ENDS
	
	  seg_3  SEGMENT  word  public  'data2'
	  assume ds:group_1
	  item2   dw  0
	  seg_3  ENDS
	
	In MASM 5.1 the following will occur: In the first move instruction, item1 will
	have the offset of 0002 relative to the start of seg_1 segment. The next move
	instruction is using the group name to force the evaluation of item1 relative to
	the start of the group. The offset for item1 will be 0002 because seg_1 is the
	first segment in the group.
	
	The third move instruction containing item2 will have an offset 0002 relative to
	the start of the seg_3 segment. Due to the alignment of the seg_3 segment, which
	is word aligned, the offset for item2 is not 0000. The fourth move instruction
	forces the item2 offset to be calculated from the beginning of the group. The
	seg_3 segment is not the first segment in the group but the third segment. The
	offset for item2 will be 0042.
	
	In MASM 6.0, the first two OFFSET calculations will the same (group relative) and
	the second two OFFSET calulations will be tha same (OFFSET item2 == OFFSET
	group_1:item2). If OPTION M510 is used, the code will behave as specified for
	MASM 5.10.
	
	Additional query words: kbinf 5.10 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600
	Version           : :5.1,6.0
	
	=============================================================================
	
