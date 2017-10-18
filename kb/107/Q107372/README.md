---
layout: page
title: "Q107372: Windows for Workgroups: 32-Bit File Access Is Slow with MSIPX"
permalink: kb/107/Q107372/
---

## Q107372: Windows for Workgroups: 32-Bit File Access Is Slow with MSIPX

	Article: Q107372
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Windows for Workgroups 3.11 with MSIPX, you may experience a
	five-second delay when you start applications from the Windows graphical user
	interface (GUI). This delay occurs only if you have 32-bit file access enabled
	on a hard disk drive controlled by the real mode mapper (RMM.D32). In this
	situation, Windows may also load more slowly. This delay does not occur when you
	start MS-DOS applications from an MS-DOS virtual machine (VM).
	
	Real mode mapper controlled drives include drives that are incompatible with
	32-bit disk access and drives that have been compressed with a disk- compression
	program, such as MS-DOS 6.2 DoubleSpace or STAC Electronics' Stacker. (MS-DOS
	6.0 DoubleSpace is incompatible with 32-bit file access).
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Upgrade MSIPX to Novell ODI drivers. This is recommended for Windows for
	  Workgroups 3.11/Novell NetWare users. ODI should provide faster access to
	  NetWare servers and improve Windows for Workgroups performance.
	
	  -or-
	
	- Disable 32-bit file access.
	
	For more information, please query on the following words in the Microsoft
	Knowledge Base:
	
	  32-bit file access and ne2000 and odi
	
	Additional query words: dblspace 3.11 hangs locks hesitates double- click start launch 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
