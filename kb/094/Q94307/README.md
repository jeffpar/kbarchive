---
layout: page
title: "Q94307: FastBack Plus Windows Changes VDMAD.386 to &#42;VDMAD with WFWG"
permalink: kb/094/Q94307/
---

## Q94307: FastBack Plus Windows Changes VDMAD.386 to &#42;VDMAD with WFWG

	Article: Q94307
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install FastBack Plus for Windows, version 1.0, using Windows for
	Workgroups, the following warning message appears:
	
	  SYSTEM.INI Includes Non-Standard Drivers!
	
	  Some other application (possibly a backup product from a different
	  manufacturer) has modified your SYSTEM.INI file to use incompatible,
	  non-standard VDMAD and/or VFD drivers. These drivers may cause failures in
	  many applications, including FastBack Plus Windows.
	
	  Install will first backup your SYSTEM.INI as SYSTEM.FBP, and then restore it
	  to use the Microsoft standard drivers. This change is necessary for correct
	  operation.
	
	FastBack Plus Windows continues installation and changes the virtual DMA device
	entry in the SYSTEM.INI file to device=*VDMAD.
	
	CAUSE
	=====
	
	The warning message is the result of a change in the name of the virtual DMA
	device driver in Windows for Workgroups. Windows versions 3.0 and 3.1 specify
	this device in the [386Enh] section of the SYSTEM.INI file as follows:
	
	       device=*VDMAD
	
	With Windows for Workgroups, this entry is changed to:
	
	       device=VDMAD.386
	
	WORKAROUND
	==========
	
	To allow Windows for Workgroups to function properly, you need to restore the
	default Windows for Workgroups entry. Use any text editor (such as Notepad) and
	change the virtual DMA device entry in the [386Enh] section of the SYSTEM.INI
	file to:
	
	       device=VDMAD.386
	
	STATUS
	======
	
	Fifth Generation Systems has confirmed that FastBack Plus Windows operates
	properly with the default Windows for Workgroups setting for the virtual DMA
	device driver. Future versions of FastBack Plus Windows should recognize this
	change with Windows for Workgroups.
	
	FastBack Plus Windows is manufactured by Fifth Generation Systems, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty fast back +
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
