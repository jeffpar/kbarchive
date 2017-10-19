---
layout: page
title: "Q76922: ROM and RAM Error Codes Explained"
permalink: /kb/076/Q76922/
---

## Q76922: ROM and RAM Error Codes Explained

	Article: Q76922
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the event that a RAM or ROM chip fails, a multidigit error code will be
	displayed. The error code is displayed only briefly, then replaced by the
	message
	
	  PARITY CHECK x
	
	where if x=1, the problem is on the system board or is power supply problem, and
	if x=2, the problem is on one of the memory expansion adapters.
	
	The multidigit error codes can be used to determine where the chip error
	occurred.
	
	MORE INFORMATION
	================
	
	ROM Error Codes
	---------------
	
	During power-on-self-test (POST), a failed ROM chip will display an error code in
	the following format
	
	  xx00 ROM
	
	-or-
	
	  xx000 ROM
	
	where xx is the hexadecimal address of the failed ROM.
	
	Not all problems can be identified by an error code, because some problems will
	prevent the computer from booting at all.
	
	The following table shows some of the possible error codes and what they mean:
	
	Error Code    Computer     Location of Faulty ROM
	----------    --------     ----------------------
	
	C800 ROM       All         Hard disk drive adapter
	CC00 ROM       PC,XT       PC network
	IO ROM CC00    XT 286,AT   PC network
	F600 ROM       PC          U29
	F800 ROM       PC          U30
	FA00 ROM       PC          U31
	FC00 ROM       PC          U32
	Fxxx ROM       PC          System board
	ROM Error      all         System board
	IO ROM xxxxxx  XT 286, AT  Power related
	
	RAM Error Codes
	---------------
	
	When the last three numbers of an error code are 201, it indicates an error in
	the RAM area. The numbers preceding 201 are the code that identifies the
	specific chip. Error code formats appear as follows:
	
	Computer          Error Code Format
	--------   -----------------
	PC                xxx 201
	XT                xxxxx xx 201
	AT and PS/2       xxxxxx xxxx 201
	
	Note: x represents hexadecimal characters.
	
	The first one or two characters indicate the bank or expansion adapter, and the
	two to four characters preceding 201 represent the specific chip that failed.
	
	If a chip has failed in one of the first few memory banks, the error code may
	disappear very quickly. Ensure that the display is warmed-up sufficiently to
	show the error code.
	
	For more information, query on the following words:
	
	  parity error and meaning and message
	
	  parity check and error and description
	
	REFERENCES
	==========
	
	"The PC Configuration Handbook," John Woram, pages 259-275, Bantam, 1990
	
	"IBM PC Troubleshooting and Repair Guide," Robert C. Brenner, H.W. Sams &
	Co., 1985
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
