---
layout: page
title: "Q79777: AutoCAD Version 2.62 May Not Function with HIMEM.SYS"
permalink: /kb/079/Q79777/
---

## Q79777: AutoCAD Version 2.62 May Not Function with HIMEM.SYS

{% raw %}

	Article: Q79777
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	AutoCAD version 2.62 may not load, or if it loads, may not show hidden lines,
	garble the text, or exhibit other unusual behavior with HIMEM.SYS installed.
	
	CAUSE
	=====
	
	Autodesk confirms that AutoCAD 2.62 uses an A20 wraparound (when addressing
	memory above 640K) that may conflict with HIMEM.SYS or any other extended memory
	manager that manipulates the A20 address line.
	
	WORKAROUND
	==========
	
	To prevent these problems, either disable the HIMEM.SYS DEVICE= line in the
	CONFIG.SYS file, or upgrade to AutoCAD version 9 or later.
	
	
	MORE INFORMATION
	================
	
	The conflict with AutoCAD version 2.62 and HIMEM.SYS is tied to AutoCAD's method
	of addressing memory. All Intel chips in the 8086 family (8086, 80286, 80386,
	and 80486) address memory in a method known as "overlap and add" addressing. The
	8086 family uses 16-bit registers. Instead of putting them end-to-end for 32-bit
	addressing, 8086 family processors overlap them and add the two registers
	together for 20-bit addressing. Note that this allows for many possible
	combinations of numbers in the two addressing registers, which can result in the
	same 20 bit address.
	
	Example
	-------
	
	Offset F13E
	
	Segment   +203E
	---------------
	
	Address 2F51E
	
	This is the 20 bit address on the 8086. The same result can be realized by adding
	the following together:
	
	Offset E13E
	
	Segment   +213E
	---------------
	
	Address 2F51E
	
	Because there are 4096 different combinations for the two registers that can add
	up to the same result, programmers who use the 8086 family arrived at a
	convention, or agreed-upon standard, to simplify the addressing scheme. In the
	segment register, only the most significant hexadecimal digit is used (far
	left). The other three are set to zero, as follows:
	
	Offset XXXX
	
	Segment   +X000
	---------------
	
	Address XXXXX
	
	This scheme sets up natural 64K groups in memory. The segment register specifies
	which block of 64K to address while the offset register designates how far into
	a block of 64K to address.
	
	To address more than 640K of memory, AutoCAD 2.62 ignores the above convention
	and places hexadecimal numbers in the first three places of the segment register
	to achieve a "wraparound" address. AutoCAD takes a picture of what is in
	conventional memory at the time it loads, and places the information on the hard
	disk. This includes MS-DOS, which is temporarily replaced by AutoCAD as the
	operating system. When AutoCAD finishes, it puts memory back to the way it was
	before loading, thus giving control of the operating system back to MS-DOS.
	Wraparound addressing is in direct conflict with HIMEM.SYS or any third party
	XMS memory manager that uses straight addressing methods.
	
	There are two possible solutions to this situation:
	
	- Have a separate CONFIG.SYS for running AutoCAD 2.62 that does not have the
	  statement:
	
	     device=c:\dos\himem.sys
	
	  (where c: is the drive and \dos is the directory location of the HIMEM.SYS
	  file.)
	
	- Upgrade your AutoCAD software (version 9 follows version 2.62).
	
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 6.22 3rdparty 3.0 3.0a 3.00 3.00a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
