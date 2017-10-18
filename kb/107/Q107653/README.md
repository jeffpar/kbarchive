---
layout: page
title: "Q107653: Writer: Some Borders Print Incorrectly"
permalink: kb/107/Q107653/
---

## Q107653: Writer: Some Borders Print Incorrectly

	Article: Q107653
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a,2.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 12-JUN-2001
	
	1.00 1.10
	WINDOWS
	kb3rdparty kbprint kbprb kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print certain borders (such as Modern Flowers) to an Epson LQ 2550
	printer, the borders may print incorrectly. The flowers may be overprinted with
	a solid border, or incorrectly filled in with solid colors.
	
	This problem can occur with versions of the Epson printer driver prior to Windows
	3.1. The problem may also occur on the Brother M1809 printer at 240 x 72
	resolution, or on the Canon BubbleJet 4000.
	
	CAUSE
	=====
	
	Some printer drivers can't produce graphics that have been created by layering
	white on top of black to create different shapes or outlines such as borders.
	
	RESOLUTION
	==========
	
	To avoid this problem, use one of the following solutions:
	
	Solution 1
	----------
	
	Upgrade to the Windows 3.1 or Windows 95 version of the Epson printer driver.
	
	Solution 2
	----------
	
	Set the Color option to Off in the Print Setup dialog box for the Epson printer
	driver.
	
	Either solution should allow you to print the border correctly.
	
	NOTE: If you are using the Canon BubbleJet 4000, use the standard emulation
	recommended by Canon for the BubbleJet 4000. Check your documentation or call
	Canon for this information.
	
	NOTE: If you are using the Epson emulation with the Canon BJC4000, you need to
	set Dip Switch 11 on the printer to the ON position. This switch tells the
	printer which mode to emulate: Canon (OFF) or Epson (ON). Refer to your Printer
	manual or contact Canon for further instructions on dip switches.
	
	Additional query words: 1.00 1.10 1.10a 2.00 electronic whiteout white-out ugly wrong edges frames printing printout kids win mskids cannon mczee bj bjc4000
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbCreativeWriter100 kbCreativeWriter200 kbCreativeWriter110 kbCreativeWriter110a
	Version           : WINDOWS:1.0,1.1,1.1a,2.0
	Issue type        : kbprb
	
	=============================================================================
	
