---
layout: page
title: "Q95119: WindowMagic May Not Operate Correctly with WFWG"
permalink: /kb/095/Q95119/
---

## Q95119: WindowMagic May Not Operate Correctly with WFWG

	Article: Q95119
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	WindowMagic is a Windows utility that allows icons to be easily
	assigned to any of the Program Manager's Groups or application icons.
	When using the WindowMagic application version 1.0b with Windows for
	Workgroups, application icons may not be able to change.
	
	When WindowMagic loads, it expects Program Manager to be the first
	application to be loaded. With Windows for Workgroups, the Clipboard
	Server (CLIPSRV.EXE) and NetDDE (NETDDE.EXE) applications load before
	Program Manager, which prevents WindowMagic from assigning the icons.
	
	For additional information, contact WinWear Corporation.
	
	WindowMagic is manufactured by WinWear, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this
	products' performance or reliability.
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
