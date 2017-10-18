---
layout: page
title: "Q142942: IDEA5251/PC Twinax Adapter Does Not Work with Windows NT"
permalink: kb/142/Q142942/
---

## Q142942: IDEA5251/PC Twinax Adapter Does Not Work with Windows NT

	Article: Q142942
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The IDEA5251/PC Twinax adapter that ships with the IDEAcomm 5250 emulation
	package only works with Windows 95 and Windows for Workgroups. It will not
	function under Windows NT.
	
	MORE INFORMATION
	================
	
	Because this Twinax adapter requires that a certain block of memory be reserved
	it will not function under Windows NT. Under Windows for Workgroups and Windows
	95 this can be done using the "EXCLUDE" function of EMM386. There are no
	versions of this card that will work with Windows NT.
	
	IDEA is currently working on a version of the card and driver that will function
	with NT.
	
	For more information, contact IDEAssociates, Inc. at (617) 275-2800.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0
	
	=============================================================================
	
