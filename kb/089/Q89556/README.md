---
layout: page
title: "Q89556: Windows for Workgroups Drivers Install in Root Directory"
permalink: /kb/089/Q89556/
---

## Q89556: Windows for Workgroups Drivers Install in Root Directory

	Article: Q89556
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing Windows for Workgroups on a computer that has either a removable
	hard drive, such as Bernoulli or SyQuest, or is using disk compression software,
	such as Stacker, Double Disk, or SpeedStor, the MS-DOS level Windows for
	Workgroups network files are installed to the root of drive C.
	
	MORE INFORMATION
	================
	
	Removable Hard Drives
	---------------------
	
	The Windows for Workgroups Setup program cannot determine whether the removable
	hard drive will be present at all times.
	
	Disk Compression Software
	-------------------------
	
	Windows for Workgroups Setup does not know when the compressed volume will be
	mounted; therefore, it copies the MS-DOS level network drivers to the root of
	drive C. Some of these files include:
	
	  WORKGRP.SYS
	  PROTMAN.EXE
	  PROH.MSG
	  PROTMAN.DOS
	  PROTOCOL.INI
	
	NOTE: Depending on the specific Windows for Workgroups configuration, there may
	also be other .DOS or .EXE files that will be required for Windows for
	Workgroups to operate properly.
	
	These files should not be moved from the directory in which the Windows for
	Workgroups installation program placed them. Relocating these files is not
	reliable and is known to cause problems in some configurations.
	
	KBCategory: kbhw kb3rdparty
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.10 Peer cartridge removeable stac 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
