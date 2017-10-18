---
layout: page
title: "Q116157: TRXNET.COM ODI Driver Needs Update with SMC ArcNet PC130"
permalink: kb/116/Q116157/
---

## Q116157: TRXNET.COM ODI Driver Needs Update with SMC ArcNet PC130

	Article: Q116157
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
	
	When you use Windows for Workgroups 3.11 and the ODI driver TRXNET.COM with the
	Standard Micro Systems (SMC) ArcNet PC130 network card, you receive one of the
	following error messages:
	
	  Invalid DOS Function
	
	  -or-
	
	  Cannot Read From Device Network
	
	  -or-
	
	  This application has been stopped by DOSMGR device. Quit all applications,
	  Quit Windows, and restart the computer.
	
	CAUSE
	=====
	
	TRXNET.COM ODI is a generic Turbo ArcNet ODI driver supplied by Novell. This
	driver is designed to be used with Novell and ArcNet cards running under ODI.
	The SMC ArcNet PC130 generates this error when copying files in Windows for
	Workgroups 3.11 from the Novell server. (Accessing the Novell server at MS-DOS
	generates no errors.)
	
	RESOLUTION
	==========
	
	SMC has an updated driver that corrects this problem (SMCARWS.COM) available on
	its bulletin board service (BBS) at (516) 434-3162. Download ARC320.EXE, which
	is a self-extracting file that contains SMCARWS.COM. For more information,
	contact SMC Technical Support by phone or through the SMC CompuServe support
	forum (type GO SMC7 at the $ prompt).
	
	Additional query words: 3.11 IPXODI NetWare arc32.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
