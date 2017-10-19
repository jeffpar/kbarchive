---
layout: page
title: "Q136264: PRB: &quot;Record Not Available&quot; When Opening a Table Shared"
permalink: /kb/136/Q136264/
---

## Q136264: PRB: &quot;Record Not Available&quot; When Opening a Table Shared

	Article: Q136264
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows for Workgroups, when a table is opened for SHARED use, the
	scrolling message "Record Not Available" is displayed in the status bar. This
	error also occurs when the Wizard that uses a .VCX file, such as Form Wizard, is
	started.
	
	CAUSE
	=====
	
	Sharing data is not allowed because neither VSHARE nor SHARE.EXE are loaded. By
	default, Visual FoxPro 3.0 uses VSHARE.386. If it is not loaded, the Visual
	FoxPro Setup program adds the following line to the [386Enh] section of the
	SYSTEM.INI:
	
	     Device=VSHARE.386
	
	RESOLUTION
	==========
	
	Ensure that either SHARE or VSHARE are loaded. For more information about
	loading SHARE.EXE, please see page 64 of the Visual FoxPro 3.0 Installation
	Guide, Sharing Tables in a Multiuser Environment.
	
	If you are using Novell DOS 7, you need to load SHARE because VSHARE support is
	built into SHARE.EXE. Refer to your Novell documentation for more information.
	Also, the VFP.EXE file needs to be marked read only.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: exclusive
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
