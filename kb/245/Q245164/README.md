---
layout: page
title: "Q245164: Imaging Program May Not Load Some TIFF Files"
permalink: kb/245/Q245164/
---

## Q245164: Imaging Program May Not Load Some TIFF Files

	Article: Q245164
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to load some Tag Image File Format (TIFF) files into the
	imaging program included with Windows NT 4.0 (Wangimg.exe), the operation is
	unsuccessful and a "The file is open and being used by another application"
	error message is displayed even though no other program actually has the file
	open.
	
	CAUSE
	=====
	
	This behavior occurs because TIFF files stored in some compression formats are
	not decompressed correctly by the imaging software.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time    Size      File name      Platform
	  ----------------------------------------------------
	  11/01/99   19:39    70,416   Oigfs400.dll   Intel
	  11/01/99   19:38   115,472   Oigfs400.dll   Alpha
	
	
	
	WORKAROUND
	==========
	
	To work around this behavior decompress the TIFF file using an alternative
	imaging tool (such as the viewer included with Microsoft Windows 98), and then
	save the file in an alternative format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: wang fail fails
	
	======================================================================
	Keywords          : kberrmsg kbtool kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
