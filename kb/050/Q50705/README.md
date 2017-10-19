---
layout: page
title: "Q50705: DOCERR: L4011, L1005 Errors When /PACKCODE Value Too Large"
permalink: /kb/050/Q50705/
---

## Q50705: DOCERR: L4011, L1005 Errors When /PACKCODE Value Too Large

	Article: Q50705
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.6x,4.x,5.0x,5.1x,5.2x,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.6x, 4.x, 5.0x, 5.1x, 5.2x, 5.3x, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates one of the
	following messages:
	
	  L4011: PACKCODE value exceeding 65500 unreliable
	  L1005: packing limit exceeds 65536 bytes
	
	CAUSE
	=====
	
	The L4011 error occurs when the linker command line specifies the /PACKCODE:n
	option and the value of "n" is between 65,501 and 65,536. The L1005 error occurs
	when the value of "n" exceeds 65,536.
	
	RESOLUTION
	==========
	
	Modify the linker command line to specify a value for "n" between 0 and 65,500.
	
	MORE INFORMATION
	================
	
	The Microsoft LINK code-packing option, /PACKC[ODE][:n], combines neighboring
	code segments into one segment that has a maximum size of "n" bytes. The /PACKC
	option produces reliable results only when "n" is between 0 and 65,500.
	
	According to page 278 of the Microsoft C "CodeView and Utilities" manual for
	version 5.1, the default value for "n" is 65,530. This incorrect statement is
	repeated in the Microsoft Macro Assembler (MASM) "CodeView and Utilities" manual
	for version 5.1 and in the Microsoft Pascal documentation.
	
	Prior to LINK version 5.03, the abbreviation for the /PACKCODE option was /PAC.
	The abbreviation was changed in version 5.03 to differentiate /PACKC[ODE] from
	the new /PACKD[ATA] option.
	
	Additional query words: 3.60 3.61 3.64 3.65 3.69 4.06 4.07 4.10 kbtool kbdocerr kberrmsg 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK520xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK550DOS kbLINK560DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:3.6x,4.x,5.0x,5.1x,5.2x,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	
