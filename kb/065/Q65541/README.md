---
layout: page
title: "Q65541: How to Interpret 12-Bit FATs"
permalink: /kb/065/Q65541/
---

## Q65541: How to Interpret 12-Bit FATs

	Article: Q65541
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a description of 12-bit FAT field entries, followed by an
	explanation of how to locate and interpret them.
	
	MORE INFORMATION
	================
	
	=======================================================================
	
	              DESCRIPTION OF 12-BIT FAT FIELD ENTRIES
	
	=======================================================================
	
	The following are some definitions and explanations of FAT field entries:
	
	1. Twelve-bit FAT entries were used exclusively in DOS versions 1.x and 2.x.
	  They are also used in versions 3.00 and later if the medium contains less
	  than 4087 clusters. Media containing 4087 or more clusters use 16-bit FAT
	  fields in DOS versions 3.00 and later. Each field corresponds directly to an
	  assignable cluster on the disk.
	
	2. Several FAT field entries have fixed meanings. They are defined as follows:
	
	     12-Bit Entry     Meaning
	     ------------     -------
	
	       000h           Free cluster
	       001h           Unused code
	     FF0-FF6h         Reserved values
	       FF7h           Bad cluster
	     FF8-FFFh         Last cluster of file
	
	  (Any FAT field entry not found in the table above should be considered the
	  next FAT field number in the chain of the file to be examined.)
	
	3. Also, the first two fields or first three bytes (FAT field numbers 0 and 1)
	  in the FAT are always reserved. The first byte contains a copy of the media
	  descriptor byte and the two remaining bytes contain 0FFh.
	
	4. A broad view of a 12-bit FAT is as follows: if the FAT were divided into
	  groups of three bytes each, each group would contain two FAT field entries.
	
	5. Finally, a FAT field number (n) refers to the nth field in the FAT, not the
	  nth byte in the FAT. A FAT entry is the value stored in the field being
	  examined.
	
	=======================================================================
	
	          HOW TO LOCATE AND INTERPRET A FAT FIELD ENTRY
	
	=======================================================================
	
	Twelve-bit FATs are set up so that if the FAT field number is even, it must be
	interpreted differently than if it is an odd field number.
	
	HOW TO INTERPRET AN EVEN FAT FIELD NUMBER
	-----------------------------------------
	
	Formula
	-------
	
	Multiply the FAT field number by 1.5. Read the next two bytes at the resulting
	offset in the FAT. Strip off the last four bits from the second byte and shift
	the result left 8 bits. OR the resulting value with the first byte. This will
	give you the entry stored in the FAT field. This entry could be a link or a last
	cluster marker depending on the value.
	
	Example
	-------
	
	You are given the FAT field number 306 (132h).
	
	First, perform the following calculations:
	
	  (FAT field number) * 1.5 = FAT byte offset (N)
	
	  132h * 1.5 = 1CBh or 459
	
	Read the 459th (N) and 460th (N + 1) bytes in the FAT table. Suppose they contain
	the values 33h and 41h, respectively. The next field in the chain would be as
	follows:
	
	  (byte N) OR ((strip last 4 bits of byte N + 1) shift left 8 bits) =
	                                                Next FAT field number
	
	  33h | ((41h & 0Fh) << 8) = 133h or the 307th field in the FAT
	
	HOW TO INTERPRET AN ODD FAT ENTRY NUMBER
	----------------------------------------
	
	Formula
	-------
	
	Once again, multiply the FAT field number by 1.5 and floor it down to the next
	integer less than the result. Read two bytes at the resulting offset. Take the
	second byte and shift it left four bits. Then, shift the first byte right four
	bits and AND the two together. The result is the entry for this FAT field.
	
	Example
	-------
	
	You are given the FAT field number 307 (133h).
	
	Multiply and floor it:
	
	  floor ((FAT field number) * 1.5) = FAT byte offset (N)
	
	  floor (307 * 1.5) = 1CCh or 460
	
	Read bytes 460 (N) and 461(N + 1) from the FAT. In this example, they contain the
	values 41h and 14h, respectively. To interpret the entry perform the following:
	
	  (byte N >> 4) OR (byte N + 1 << 4) = FAT Entry
	
	  (41h >> 4) | (14h << 4) = 144h or the 324th field in the FAT
	
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	
