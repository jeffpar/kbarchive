---
layout: page
title: "Q85485: PSP.EXE 3.1 or Earlier May Causes Windows 3.1 to Fail"
permalink: /kb/085/Q85485/
---

## Q85485: PSP.EXE 3.1 or Earlier May Causes Windows 3.1 to Fail

{% raw %}

	Article: Q85485
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run PSP.EXE version 3.1 or earlier under Microsoft Windows version 3.1,
	your system may stop responding (hang or lock up). MS-DOS programs lock up and
	you are unable to return to Windows. Windows or Windows applications may
	suddenly fail without an error message.
	
	CAUSE
	=====
	
	The problem is caused by another person on the network sending a print job to
	the non-dedicated print server running PSP.EXE. When the print job is captured
	by PSPrint, the user's machine hangs. The computer locks almost immediately when
	going to the MS-DOS command prompt or within a few commands after starting the
	MS-DOS session through Microsoft Windows when PSPrint is loaded before starting
	Windows.
	
	WORKAROUND
	==========
	
	To work around this problem, disable PSP.EXE before starting Microsoft Windows.
	
	MORE INFORMATION
	================
	
	PSP.EXE is a terminate-and-stay-resident program (TSR) commonly loaded in the
	AUTOEXEC.BAT file or through a network batch file to support printing on a
	non-dedicated print server. PSPrint is a network non-dedicated printer driver
	that is run only on the computer that is physically attached to a shared
	printer. Users that send print jobs to the non-dedicated print server use the
	companion program QSLIM.EXE.
	
	PSPrint is manufactured by Brightwork Development. They are aware of an
	incompatibility problem with Microsoft Windows version 3.1 and are working on
	correcting the problem.
	
	For more information, contact Brightwork.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 3.1 3.11 Novell bright work ps print
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
