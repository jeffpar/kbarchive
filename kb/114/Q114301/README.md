---
layout: page
title: "Q114301: Common Questions and Answers for Windows 3.11"
permalink: /kb/114/Q114301/
---

## Q114301: Common Questions and Answers for Windows 3.11

	Article: Q114301
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbdisplay kb3rdparty kbnetwork kbfile kbappnote
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains common questions and answers regarding the differences
	between Windows 3.1 and Windows 3.11. The answers cover why Microsoft released
	Windows 3.11, who can benefit from it, what files changed, and issues with OS/2
	for Windows.
	
	This article is a reprint of the Windows 3.11 Q&A document written by Product
	Management and made available on the online services. This article is reproduced
	in the Knowledge Base for reference only.
	
	MORE INFORMATION
	================
	
	1. What is Windows 3.11? How is it different from Windows 3.1?
	
	  Microsoft Windows 3.11 is a "refresh" release that implements packaging
	  changes designed to reduce counterfeiting. The release also includes some
	  updated device drivers and a few bug fixes to address issues such as diskless
	  workstation support.
	
	2. Why were these changes made?
	
	  It's been nearly two years since Windows 3.1 was introduced to the market.
	  These new drivers and bug fixes will improve the experience of a customer
	  buying Windows for the first time. Also, these changes had already been
	  incorporated in our Windows for Workgroups 3.11 release.
	
	3. Who should update to Windows 3.11?
	
	  There is no new functionality in the 3.11 release of Windows and all of the
	  drivers being added or refreshed have been available on the Windows Driver
	  Library and Microsoft's Download Service. So unless a customer is having a
	  problem related to one of the areas covered by the fixes detailed below,
	  there should be no need for them to update to this release. If a customer
	  does need to update they should call Microsoft at 800) 871-3270 for more
	  information.
	
	4. What is the difference between Windows 3.11 and Windows for Workgroups 3.11.
	
	  Windows 3.11: Windows 3.11 is simply Windows 3.1 plus the additional video and
	  printer drivers and the five bug fixes described below. As mentioned above,
	  there is no new functionality or performance improvements, features, etc.
	
	  Windows for Workgroups 3.11: WFW 3.11 offers a number of enhancements to our
	  Windows 3.1 product. WFW 3.11 includes enhanced performance, from 50-150%
	  faster disk I/O and up to 100% faster network access. It also includes
	  integrated networking, Microsoft Mail, Microsoft Schedule+, Microsoft At Work
	  PC Fax, and Microsoft's Remote Access Services, and a number of other
	  enhancements for both standalone and networked Windows PCs.
	
	5. Does Win 3.11 work with OS/2 for Windows?
	
	  No it does not. From what we have been able to learn without the benefit of
	  source code, which IBM refused to provide Microsoft, OS/2 for Windows patches
	  Windows in memory at fixed address locations. Such a design makes OS/2 for
	  Windows extremely fragile because it depends on Windows code being frozen
	  over time.
	
	  Microsoft encourages developers to write well-behaved Windows applications
	  using documented application program interface (API) functions and good
	  programming practices. By establishing these ground rules we can move the
	  platform forward and maintain support for these applications. Windows 3.11
	  did not break any well-behaved applications that we are aware of.
	
	  Though we regret the inconvenience to customers, IBM has to be responsible for
	  writing well-behaved applications -- they have taken shortcuts with OS/2 for
	  Windows that have put their customers in a bad position. We presume that one
	  or more of the bug fixes incorporated in Windows 3.11 (which were included in
	  Windows for Workgroups 3.11 released November 6, 1993) changed the fixed
	  address locations that are patched by OS/2 for Windows. As a result, OS/2 for
	  Windows no longer runs correctly.
	
	6. Did Microsoft do this to thwart IBM?
	
	  No we did not. We have been talking publicly about this release since August
	  of last year -- well before IBM even announced their OS/2 for Windows
	  product. Negotiations with Novell and a desire not to interrupt the Christmas
	  selling season caused us to delay, but Windows has been on the market for
	  nearly two years now and we felt that customers would benefit from a refresh
	  of the product.
	
	7. What should customers do that have purchased OS/2 for Windows and want to
	  update to Windows 3.11?
	
	  IBM has the means at its disposal to permit purchasers of OS/2 for Windows to
	  use it with Windows 3.11. First IBM can release a new version of OS/2 for
	  Windows that patches Windows 3.11 at the appropriate address locations in
	  memory. Second, IBM can provide customers with the KERNEL, USER, and GDI
	  modules from Windows 3.1 that do not contain the bug fixes which apparently
	  are the source of the problem. Alternatively customers can purchase the full
	  OS/2 2.1 product from IBM.
	
	8. What about customers who buy Windows 3.11 and then want to run OS/2 for
	  Windows?
	
	  We think IBM bears the responsibility for designing OS/2 for Windows in such a
	  way that virtually guaranteed it would break if Microsoft made any changes in
	  Windows. Nonetheless, in an effort to assist our mutual customers, Microsoft
	  will provide purchasers of Windows 3.11 who experience difficulty running the
	  product with OS/2 for Windows with the unimproved Windows 3.1 files which we
	  modified in Windows 3.11 to fix various bugs. Our Product Support Services
	  will distribute these as soon as a diskette can be made available.
	
	9. What exactly are the code changes made to Win 3.11 and what do they do?
	
	  First the following drivers have been added or refreshed in the Windows 3.11
	  release:
	
	   - HPLJIV driver
	
	   - 256 Color generic SVGA video driver - which will support TSENG ET4000 chip
	     sets and V7, but not ATI Ultra or S3 chip sets.
	
	   - As well as the following drivers:
	
	  PSCRIPT.DRV             UNIDRV.DLL
	  PSCRIPT.HLP             UNIDRV.HLP
	  HPPCL5MS.DRV            HPDSKJET.DRV
	  HPPCL5E.DRV             HPPCL.DRV
	  HPPCL5E.HLP             PAINTJET.DRV
	  HPPCL5E1.DLL            L100_425.WPD
	  HPPCL5E2.DLL            L300_471.WPD
	  HPPCL5E3.DLL            L300_493.WPD
	  HPPCL5E4.DLL            L500_493.WPD
	  HPPCL5EO.DLL            L200230&.WPD
	  FINSTALL.DLL            L330_52&.WPD
	  FINSTALL.HLP            L630_52&.WPD
	  EPSON24.DRV             EPSON9.DRV
	  V7VDD.386               V7VGA.DRV
	
	In addition, the following 5 files were changed:
	
	- KRNL386.EXE: Minimal kernel changes to more gracefully shut down the Windows
	  system after installing products which call the ExitWindows API to shut
	  Windows down before returning focus to program manager.
	
	- GDI.EXE: Changes which assist ISVs currently writing graphics applications,
	  especially those that call the 'draw rectangle function'. This will minimize
	  the number of API calls the programmer needs to write and maximize the system
	  resources available on the system when using graphics intensive applications.
	
	- COMMDLG.DLL: Changes which allow Windows applications on diskless
	  workstations to use common dialog boxes. (Formerly available as a PSS
	  application note).
	
	- PSCRIPT.DRV and UNIDRV.DLL: These files were updated to eliminate a font
	  enumeration conflict that occurred with many word processors when 60 or more
	  fonts are used in a single document.
	
	- VTDA.386: The updated VTDA.386 solves a very small percentage of timer-
	  related problems that occur when starting an MS-DOS-based application under
	  Windows on a Novell NetWare network.
	
	Additional query words: appnote 3.11 awfax RAS
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
