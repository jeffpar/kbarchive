---
layout: page
title: "Q72595: Using Weitek Math Coprocessor with MS-DOS"
permalink: /kb/072/Q72595/
---

## Q72595: Using Weitek Math Coprocessor with MS-DOS

{% raw %}

	Article: Q72595
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default setting in EMM386.EXE for the Weitek coprocessor is Off. If the
	switch for the Weitek coprocessor is not set to On when EMM386.EXE is loaded and
	the machine contains a Weitek coprocessor board, the machine may stop responding
	(hang) on boot.
	
	MS-DOS must be loaded low if the W=ON switch is specified for EMM386.EXE. If
	Weitek support is enabled, EMM386 will attempt to allocate the high memory area
	(HMA) and map the memory locations used by the Weitek coprocessor to this
	location. If MS-DOS is already loaded high, this will not be possible.
	
	NOTE: Weitek can be used in conjunction with the 80387 math coprocessor, although
	special code must be written to use each device.
	
	MORE INFORMATION
	================
	
	The WTL 1167 is a set of three chips found on the Weitek coprocessor board that
	are used as a replacement for the Intel 80387. To use EMM386.EXE on a machine
	with the Weitek coprocessor installed:
	
	1. Add EMM386.EXE to the CONFIG.SYS file as follows:
	
	        device=c:\dos\emm386.exe w=on
	
	  This example assumes that EMM386.EXE is located in the C:\DOS directory.
	
	2. If the EMM386 device driver has been loaded in CONFIG.SYS, you can toggle
	  Weitek coprocessor support on and off by typing the following at the DOS
	  prompt:
	
	  " emm386 w=on " (without the quotation marks)
	
	  -or-
	
	  " emm386 w=off " (without the quotation marks)
	
	The following machines may be shipped with the Weitek coprocessor board
	installed:
	
	  Compaq Deskpro 386/20e, Model 110
	  HP Vectra RS/16 PC
	  HP Vectra RS/20 PC
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 6.21
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
