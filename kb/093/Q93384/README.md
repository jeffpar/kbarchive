---
layout: page
title: "Q93384: Device Error Upgrading WFWG Over Windows with Intel Faxability"
permalink: /kb/093/Q93384/
---

## Q93384: Device Error Upgrading WFWG Over Windows with Intel Faxability

{% raw %}

	Article: Q93384
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading to Microsoft Windows for Workgroups (WFWG) version 3.1 from
	Microsoft Windows version 3.0 or 3.1 with Intel Faxability installed, the
	following error message occurs when you try to run Windows for Workgroups in
	enhanced mode:
	
	  A device has been specified more than once in the SYSTEM.INI file or a device
	  specified in SYSTEM.INI conflicts with a device that is being loaded by an
	  MS-DOS device driver or application. Remove the duplicate entry from the
	  SYSTEM.INI file and restart Windows.
	
	CAUSE
	=====
	
	Both Intel Faxability for Windows and Windows for Workgroups install a virtual
	communications driver (VxD). When Windows for Workgroups upgrades, it places a
	second VxD in the [386Enh] section of the SYSTEM.INI file. Even though these
	drivers have different filenames, Windows for Workgroups sees them as duplicates
	because they are both virtual communications drivers.
	
	Intel Faxability originally adds:
	
	     DEVICE=CAS31VCD.386
	
	Windows for Workgroups upgrade then adds:
	
	     DEVICE=VCD.386
	
	WORKAROUND
	==========
	
	The following procedure eliminates the above error message:
	
	1. Edit the SYSTEM.INI file with any text editor (such as Notepad).
	
	2. Locate the [386Enh] section and find the following lines:
	
	        DEVICE=CAS31VCD.386
	        DEVICE=VCD.386
	
	3. To enable the default Windows for Workgroups driver, insert a semicolon (;)
	  at the beginning of the DEVICE=CAS31VCD.386 line, as follows:
	
	        ;DEVICE=CAS31VCD.386
	
	Intel Faxability is manufactured by Intel Corp., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	For additional information concerning functionality of Intel Faxability and
	Windows for Workgroups, contact Intel Corp. technical support.
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
