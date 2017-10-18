---
layout: page
title: "Q104423: PC DB: How to Reset the .MAI File Counter of MBG Owners"
permalink: kb/104/Q104423/
---

## Q104423: PC DB: How to Reset the .MAI File Counter of MBG Owners

	Article: Q104423
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.0 and 3.2 of Microsoft Mail for PC Networks database structure,
	there is an MAI subdirectory. This subdirectory contains many other directories
	which hold .MAI files. Each MAI file contains a count of how many users still
	have that message in their MBG file. In an MAI file that is shared between
	multiple users, the counter gets decremented each time a user "deletes" or moves
	the message out of their MBGs. When the last remaining user (counter = 1)
	deletes the MAI file, it is actually erased.
	
	MORE INFORMATION
	================
	
	Before you make any modifications to an active MAI file, make two copies of the
	file (*.TMP and *.BAK). Use the .TMP file as a temporary working file. Use the
	.BAK file to restore if something goes wrong.
	
	To view or modify the counter run the following debug procedure on the specific
	.MAI temporary file:
	
	M:\MAILDATA\MAI\MAD >debug 0000013d.tmp
	-d10b
	:0100                                  2C 01 7F 05 32 ,...2
	:0110 20 02 02 00 7F 05 33 20-02 0A 00 7F 05 37 20 02 .....3 .....7 .
	:0120 0A 00 4C 25 01 02 22 5A-65 57 59 0E 50 74 68 6C ..L%.."ZeWY.Pthl
	:0130 54 18 65 4A 57 52 6E 48-29 CF C4 D6 DA C3 E0 C9 T.eJWRnH).......
	:0140 D3 C8 F8 E7 FA ED DA A2-F3 4C 82 19 C9 05 02 14 .........L......
	:0150 5A 65 57 59 0E 50 74 68-6C 54 18 65 38 71 29 7C ZeWY.PthlT.e8q)|
	:0160 B4 D5 B3 F8 02 14 5A 65-57 59 0E 50 74 68 6C 54 ......ZeWY.PthlT
	:0170 18 65 39 79 28 7D B5 D4-B2 F9 02 14 5A 65 57 59 .e9y(}......ZeWY
	:0180 0E 50 74 68 6C 54 18 65-39 79 29                .PthlT.e9y) 
	
	If you reverse and concatenate together the first two bytes displayed, you will
	get the value the counter is currently set at in Hex. For example, reversing and
	concatenating 2C and 01 gives 012C which in decimal is 300.
	
	Other Examples:
	
	  Bytes       Hex       Decimal
	  -----------------------------
	  05 00  ==>  0005  ==>   5
	  FF 00  ==>  00FF  ==> 255
	  00 01  ==>  0100  ==> 256
	  F4 01  ==>  01F4  ==> 500
	
	To reset the counter to a different number, reverse the process shown in the
	above table and then substitute your own byte values in place of the ones used
	in the following example. In the example, the counter is being reset to 255
	(decimal).
	
	  -e10b
	  32B0:010B 2C.FF 01.00
	  -w
	  Writing 01BF7 bytes
	  -q
	
	Actual keystrokes:
	
	  E,one,zero,B,enter,F,F,spacebar,zero,zero,enter,W,enter,Q,enter
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
