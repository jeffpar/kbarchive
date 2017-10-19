---
layout: page
title: "Q78672: Computers That Do Not Maintain Date/Time with MS-DOS 5 or 6"
permalink: /kb/078/Q78672/
---

## Q78672: Computers That Do Not Maintain Date/Time with MS-DOS 5 or 6

	Article: Q78672
	Product(s): Microsoft Disk Operating System
	Version(s): 5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When upgrading some MS-DOS versions (primarily original equipment manufacturer
	[OEM] versions) to MS-DOS 5.0, 6.0, or 6.2 the time and date are no longer
	maintained when the computer is rebooted.
	
	CAUSE
	=====
	
	The CMOS (complementary metal oxide semiconductor) chip was introduced as a
	standard for storing hardware information (including time and date) with
	AT-class machines. When XT machines were introduced, there was no standard for
	saving/accessing the date and time information. Computer manufacturers (OEMs)
	often added hardware to store and maintain the date and time settings. To then
	access this hardware, those OEMs had to modify MS-DOS. Thus, when the upgrade to
	MS-DOS 5.0, 6.0, or 6.2 is made, the modifications are overwritten and the time
	and date are no longer accessible.
	
	WORKAROUND
	==========
	
	Some OEMs have developed device drivers and hardware for their machines that
	allow the time and date to function properly, but others do not support time and
	date in MS-DOS 5.0, 6.0 and 6.2.
	
	The following is a list of computers that have been found to lose the date and/or
	time when booting with MS-DOS 5.0, 6.0, and 6.2. The Workaround column lists
	device drivers/cards that may be used to work around this limitation.
	
	Computer,
	Manufacturer's Phone       Workaround
	--------------------       ----------
	
	8088 Sperry Model 20       Not supported with MS-DOS 5.0, 6.0, or 6.2
	(800) 448-1424
	
	AT&T 6300                  ATTCLOCK.SYS
	(908) 769-6397
	
	AT&T 6300 WGS              ATTCLOCK.SYS
	(908) 769-6397
	
	Canon A200 (8088)          Not supported with MS-DOS 5.0, 6.0, or 6.2
	(800) 423-2366
	
	Hyundai XT                 RTCCLK.SYS
	Model 16T,16E,16X
	Contact dealer
	
	Leading Edge Model D       CLKDVR.SYS
	(900) 370-4800
	
	PC Limited XT        SETCLOCK.SYS
	(512) 338-4400
	BBS: (512) 338-8528
	
	Vendex Headstart XT        8 bit clock card
	(900) 454-5554
	
	Tandy 1400 LT,FD, HD       Not supported with MS-DOS 5.0, 6.0, or 6.2
	(817) 878-6875
	
	Zenith 183 or 184 laptop   Not supported with MS-DOS 5.0, 6.0, or 6.2
	(800) 842-9000
	
	
	For more information on workaround device drivers, query on the computer name,
	model, and driver names in the Microsoft Knowledge Base.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 5 6 stamp 6.2
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : :5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
