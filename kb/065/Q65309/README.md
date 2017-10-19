---
layout: page
title: "Q65309: In-Line Assembler Locks Up C 6.00"
permalink: /kb/065/Q65309/
---

## Q65309: In-Line Assembler Locks Up C 6.00

	Article: Q65309
	Product(s): See article
	Version(s): 6.00   | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist6.00 | mspl13_c
	Last Modified: 31-AUG-1990
	
	The code below will "lock up" C 6.00 regardless of optimizations.
	
	Using the quick compiler (/qc) will allow the program to compile.
	
	Sample Code
	-----------
	
	#define LCPPORT 0
	#define COMREQ 0x14
	#define FOREVER for(;;)
	
	extern void _far _cdecl delay(int ticks);
	
	void clrlcp(void)
	{
	int ticks = 4;
	   FOREVER
	      {
	      _asm
	         {
	         push [ticks]
	         call delay
	         add sp,2
	         mov dx,LCPPORT
	         mov ah,7
	         int COMREQ
	         cmp al,0
	         jz done
	         mov dx,LCPPORT
	         mov ah,6
	         int COMREQ
	         }
	      ticks = 4;
	      }
	   done: return;
	}
	
	Microsoft has confirmed this to be a problem in C version 6.00. We are
	researching this problem and will post new information here as it
	becomes available.
