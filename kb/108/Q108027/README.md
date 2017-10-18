---
layout: page
title: "Q108027: PC DB: Finding MAI File Name from MBG File"
permalink: kb/108/Q108027/
---

## Q108027: PC DB: Finding MAI File Name from MBG File

	Article: Q108027
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 2.1, 3.0, 3.0a, and 3.2 of Microsoft Mail for PC Networks, a mail
	message's MAI file name can be determined by examining the recipient's MBG file
	using DEBUG. The MAI file name will appear in the right hand column of the DEBUG
	dump, 54 bytes after the first character of the subject.
	
	MORE INFORMATION
	================
	
	DEBUG 00000000.MBG
	
	-d
	00 00 4D 61 72 74 69 61-6E 00 00 00 00 54 68 69   ..Martian....Thi
	73 20 69 73 20 74 68 65-20 73 75 62 6A 65 63 74   s is the subject
	00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	00 00 00 00 00 00 00 00-19 00 10 00 08 00 0A 00   ................
	C9 07 00 30 30 30 30 30-30 36 32 00 00 00 28 02   ...00000062...(.
	00 00 00 00 00 00 00 00-18 00 00 00 00 00 00 00   ................
	00 00 00 00 00 00 00 00-00 00 00 00 98 C9 5B 00   ..............[.
	00 00 00 00 00 00 4D 61-72 74 69 61 6E 00 00 00   ......Martian...
	-d
	00 54 68 69 73 20 69 73-20 74 68 65 20 6E 65 78   .This is the nex
	74 20 73 75 62 6A 65 63-74 00 00 00 00 00 00 00   t subject.......
	00 00 00 00 00 00 00 00-00 00 00 00 1A 00 10 00   ................
	08 00 0A 00 C9 07 00 30-30 30 30 30 30 36 33 00   .......00000063.
	00 00 2A 02 00 00 00 00-00 00 00 00 18 00 00 00   ..*.............
	00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00   ................
	82 54 6B 00 00 00 00 00-D4 4A 7F 4D 8A 4D 95 4D   .Tk......J.M.M.M
	A0 4D AB 4D B6 4D C1 4D-00 00 CC 4D D7 4D E2 4D   .M.M.M.M...M.M.M
	
	The first message in this MBG was sent by user "Martian". The MAI file name is
	00000062.MAI. This number is 54 bytes after the first character of the subject
	that is "This is the subject". The file name is stored in the MBG using the
	ASCII code for each character. Therefore, the appropriate MAI filename is
	determined by the ASCII equivalence that appears in the right hand column.
	
	The MAI file will be found in the MAx directory, where x is equal to the least
	significant digit of the MAI file name (the hexadecimal digit furthest to the
	right in the MAI file name).
	
	This information can sometimes be determined by using the MS-DOS TYPE command on
	the MBG. However, this does not always display all of the information in the
	MBG. Therefore, DEBUG is the preferred method for determining an MAI filename.
	
	Additional query words: 2.1x 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0a,3.2
	
	=============================================================================
	
