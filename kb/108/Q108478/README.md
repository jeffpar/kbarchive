---
layout: page
title: "Q108478: After Dark AD-DOS.COM and Novell NetWare LSL.COM"
permalink: /kb/108/Q108478/
---

## Q108478: After Dark AD-DOS.COM and Novell NetWare LSL.COM

	Article: Q108478
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups 3.11 includes support for Novell NetWare connectivity
	using the Novell NetWare ODI workstation configuration files (including
	LSL.COM). If you are using this configuration with a version of the Berkeley
	Systems MS-DOS-based screen saver After Dark earlier than 2.0, you may encounter
	problems.
	
	Early versions of the screen saver terminate-and-stay-resident (TSR) program,
	AD-DOS.COM versions 1.0x, do not load if the Novell NetWare LSL.COM file has
	been loaded first. LSL.COM does load after AD-DOS.COM, however, this may cause
	unreliable network functionality and application performance.
	
	The AD-DOS.COM file included with After Dark version 2.0 does not appear to
	generate these properties. For more information, contact Berkeley Systems
	Technical Support.
	
	MORE INFORMATION
	================
	
	If LSL.COM is loaded into memory first, it occupies INT 2f/CO; when AD-DOS.COM
	detects that this interrupt is in use, it fails to load. The following message
	is displayed when the AD-DOS.COM TSR program cannot load:
	
	  Another TSR is currently using our ID code.
	
	If AD-DOS.COM loads first, LSL.COM loads without generating an error message.
	LSL.COM may then pass calls to AD-DOS.COM, which may return inappropriate values
	and cause network applications to fail to detect the presence of LSL.COM or
	otherwise cause the applications to receive unreliable information (such as
	pointers to information structures) from LSL.COM.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.11 AD-DOS After Dark
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
