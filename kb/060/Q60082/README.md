---
layout: page
title: "Q60082: Using IBM PC-DOS 4.0 with MS-DOS Hard Disk Partition"
permalink: /kb/060/Q60082/
---

## Q60082: Using IBM PC-DOS 4.0 with MS-DOS Hard Disk Partition

{% raw %}

	Article: Q60082
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IBM PC-DOS versions 4.0, 4.01, and 5.0 do not recognize hard disk partitions
	other than those created with IBM products. If the boot sector's original
	equipment manufacturer (OEM) name field does not have "IBM " as the first four
	characters, an "invalid media" error is returned, and you are not allowed access
	to the hard disk.
	
	MORE INFORMATION
	================
	
	For MS-DOS (and all other non-IBM DOS) partitions, this problem can be corrected
	by backing up the partition and then reformatting the partition with IBM PC-DOS.
	After reformatting, the information backed up can be restored to the partition.
	Because MS-DOS does not distinguish the OEM stamp in the boot sector, the new
	partition (less than 32 MB) is recognized by all versions of MS-DOS that
	recognize a 16-bit file allocation table (FAT).
	
	If reformatting the hard disk drive is not a feasible alternative, you can also
	manually change the boot sector so that IBM PC-DOS versions 4.x and later can
	recognize it. To alter the boot sector manually, enter the following:
	
	1. Type "debug" (without the quotation marks) and press ENTER.
	
	2. Enter the following commands:
	
	   -L 0 n 0 1     ; Loads the boot sector of the drive into
	                  ; address 0, where n is the drive (0=A, etc.).
	   -D 0           ; Displays the boot sector.
	   -E 03          ; Edit starting with the fourth byte.
	
	The fourth byte of the boot sector is displayed in hexadecimal, followed by a
	colon (:). To change the bytes, type the hexadecimal value of the replacement
	character at the prompt.
	
	The prompt appears as "XX:_", where XX is the current value. To enter more than
	one value, press the SPACEBAR after entering the value. To correct the OEM
	stamp, enter the following at the prompt:
	
	49<SPACEBAR>42<SPACEBAR>4D<SPACEBAR>20<ENTER>  ; Puts "IBM " in OEM stamp
	
	   -D 0          ; Displays boot sector with changes.
	   -W 0 n 0 1    ; Writes the boot sector to the drive from
	                 ;  address 0, where n is the drive (0=A, etc.).
	   -Q            ; Exits Debug; the sector is now correct.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
