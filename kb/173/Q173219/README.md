---
layout: page
title: "Q173219: Error Message Installing Adobe PhotoShop 4.0.1 in Windows 95"
permalink: kb/173/Q173219/
---

## Q173219: Error Message Installing Adobe PhotoShop 4.0.1 in Windows 95

	Article: Q173219
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you are installing Adobe
	PhotoShop 4.0.1:
	
	  Setup has encountered a problem. Please report file='common/info01.c',
	  line='253' to Microsoft Product Support.
	
	CAUSE
	=====
	
	This error message can occur if you are installing PhotoShop 4.0.1 from a CD-ROM
	drive using real-mode CD-ROM drivers. The error message may occur when PhotoShop
	4.0.1 Setup is installing the Adobe PostScript printer driver.
	
	
	RESOLUTION
	==========
	
	Install a protected-mode CD-ROM driver from your original Windows 95 disks or
	CD-ROM, or from the manufacturer of the CD-ROM drive.
	
	To install a protected-mode driver for your CD-ROM drive, click Start, point to
	Help, click the Index tab, type "cd-rom" (without the quotation marks), and then
	double-click the "Installing" topic. Note that this method works only if your
	CD-ROM drive supports a protected-mode driver included with Windows 95.
	
	For information about determining whether Windows 95 supports your CD-ROM drive
	in protected mode, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q151634 Protected-mode CD-ROM Drive Support in Windows
	
	If Windows 95 does not include a protected-mode driver for your CD-ROM drive,
	contact the manufacturer of the CD-ROM drive to determine whether a
	protected-mode driver is available from the manufacturer.
	
	If your CD-ROM drive does not support protected-mode drivers, contact Adobe for
	other possible resolutions to the issue.
	
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
