---
layout: page
title: "Q30500: Segment Relative Versus Group Relative"
permalink: kb/030/Q30500/
---

## Q30500: Segment Relative Versus Group Relative

	Article: Q30500
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following sample code will be used to explain segment relative and group
	relative:
	
	     dgroup  GROUP   aseg,cseg
	     ASSUME  cs:dgroup,ds:dgroup
	     aseg    SEGMENT public  byte    'CODE'
	             org 100h
	             start:
	             data_pointer    dw  the_data
	     aseg    ends
	     cseg    SEGMENT public  byte    'CODE'
	             the_data    label   byte
	     cseg    ends
	             end start
	
	When defining data, fixups are relative to the start of the segment. The variable
	data_pointer will have an address relative to the start of the aseg segment. If
	you want the variable to have an address relative to the start of the group, you
	can explicitly state the offset relative to dgroup as follows.
	
	     data_pointer    dw  offset  dgroup:the_data
	
	The exception is when you are using simplified segment directives. In that case,
	group relative fixups always are used rather than segment relative.
	
	In code segments, fixups are relative to either segment or group depending on the
	ASSUME statements. In other words, the ASSUME STATEMENT is checked before the
	fixup is generated. The exception here is the same as above. When using
	simplified segment directives, group relative fixups are the default.
	
	The OFFSET operator is segment relative and is discussed further in the following
	article in the Microsoft Knowledge Base:
	
	  Q30517 OFFSET Operator Is Segment Relative
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	
	=============================================================================
	
