---
layout: page
title: "Q130739: Print Jobs From Pagemaker for Macintosh Fail"
permalink: /kb/130/Q130739/
---

## Q130739: Print Jobs From Pagemaker for Macintosh Fail

	Article: Q130739
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you print an Aldus Pagemaker for Macintosh document that contains embedded
	graphics (such as TIFF images), to a Windows NT printer queue, the print job
	fails.
	
	CAUSE
	=====
	
	Pagemaker, by default, sends embedded graphics as binary, whether or not the
	PostScript printer description (PPD) file supports it. Embedded binary data in a
	PostScript job is protocol dependent. This problem occurs if a Windows NT print
	server forwards a binary PostScript print job from a Macintosh client to a
	non-AppleTalk print device.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. In Pagemaker, select Print from the File menu.
	
	2. Choose Options.
	
	3. In the Send Data field, change the option to Normal (hex).
	
	MORE INFORMATION
	================
	
	To verify if your printer queue supports binary print jobs, use the LaserWriter
	8.x Chooser to view the printer information as follows:
	
	1. Select Printer Info from Setup to view the Windows NT printer queue.
	
	2. View one of the entries in the information window for binary communication
	  support.
	
	Pagemaker is manufactured by Aldus, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: AppleTalk Mac prodnt sfm
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
