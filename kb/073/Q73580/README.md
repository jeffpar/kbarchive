---
layout: page
title: "Q73580: Configuring AutoCAD 386 or AutoCAD Release 11 with MS-DOS"
permalink: /kb/073/Q73580/
---

## Q73580: Configuring AutoCAD 386 or AutoCAD Release 11 with MS-DOS

{% raw %}

	Article: Q73580
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Autodesk's AutoCAD 386 running under MS-DOS version 5.0 or later may appear to
	either run very slowly or to hang the machine. AutoCAD 386 is a VCPI (virtual
	control program interface) program; it will access and use all of the extended
	memory on a system without the need for HIMEM.SYS.
	
	AutoCAD 386 is the same product as AutoCAD release 11.
	
	MORE INFORMATION
	================
	
	There are four ways to get AutoCAD 386 to run under MS-DOS 5.0 or later:
	
	- If you are using release 11(c2), run the program NEWDX.EXE found on the
	  AutoCAD disk "Dxfix / Newdx / B1_step". This program updates the Phar Lap
	  386/DOS-Extender. The new updated DOS-Extender allows AutoCAD 386 to use the
	  XMS memory that HIMEM.SYS provides.
	
	  NOTE: If you are also using EMM386.EXE, AutoCAD reverts to the VCPI (as
	  opposed to XMS) specifications for memory allocation. You must use at least a
	  16K page (LIM 4.0) if you use EMM386.EXE.
	
	-or-
	
	- On the HIMEM.SYS line in the CONFIG.SYS file, specify /INT15=xxxx, where xxxx
	  equals the amount of memory you want to allocate to AutoCAD 386. This
	  parameter allows other memory schemes other than the XMS to co-exist. For
	  example:
	
	     device=c:\dos\himem.sys /int15=2048
	
	-or-
	
	- Specify EMM386 to use expanded memory, which AutoCAD 386 can use as well.
	  Make sure HIMEM.SYS is loaded first. An example of choosing expanded memory
	  is
	
	     device=c:\dos\emm386.exe xxxx ram
	
	  where xxxx is equal to the amount of expanded memory you want.
	
	-or-
	
	- Remove HIMEM.SYS from the CONFIG.SYS file altogether; however, there are
	  disadvantages to doing this. You will lose the capability of loading MS-DOS
	  high; also, you will not be able to load TSRs and other programs in the UMA
	  (upper memory area).
	
	For more information on AutoCAD 386 (Release 11), refer to the "AutoCad 386
	Installation and Performance Guide" or contact Autodesk.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 autocadd auto cad 6.21
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
