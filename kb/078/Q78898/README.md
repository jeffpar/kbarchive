---
layout: page
title: "Q78898: Model LXT Maxtor IDE Drives Require Special Low-Level Utility"
permalink: /kb/078/Q78898/
---

## Q78898: Model LXT Maxtor IDE Drives Require Special Low-Level Utility

	Article: Q78898
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A low-level format of a Maxtor IDE hard drive with the model letters "LXT" can
	only be safely done with a special low-level formatting file available from the
	Maxtor Corporation. Using any other low-level format utility results in
	unpredictable behavior from the hard drive, including losing the ability to run
	Microsoft Windows correctly on the machine.
	
	MORE INFORMATION
	================
	
	Maxtor technical support indicates that there is no inherent Windows
	compatibility problem with Maxtor IDE drives that use a data buffer to transfer
	information to and from the hard disk. According to Maxtor, application data
	transfers to and from the hard drive through the data buffer or "fast cache" is
	transparent to the application itself. In effect, the hard drive completely
	emulates a ST506 MFM or RLL hard drive for which Windows is tested. However, if
	a low-level format is performed by a utility from another manufacturer, serious
	problems with the hard drive may result.
	
	The latest version of the Maxtor low-level format utility, MFORMAT2.EXE, can be
	downloaded from the Maxtor bulletin board service (BBS).
	
	For additional information about this low-level utility, contact Maxtor technical
	support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.0 3.0a 3.00 3.00a maxstore low-level 3rdparty max store KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
