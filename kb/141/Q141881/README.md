---
layout: page
title: "Q141881: PRB: VB 4.0 Doesn't Install on Older 32-Bit Operating System"
permalink: /kb/141/Q141881/
---

## Q141881: PRB: VB 4.0 Doesn't Install on Older 32-Bit Operating System

{% raw %}

	Article: Q141881
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbVBp kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After starting Setup.exe to install the 16-bit version of Visual Basic 4.0, you
	receive the following message:
	
	  This setup program is not intended to be used with this version of Windows.
	
	After starting Setup.exe to install the 32-bit version of Visual Basic 4.0 you
	receive one of the following messages:
	
	  The 32-bit version of Visual Basic requires the released version of Windows
	  NT 3.51.
	
	-or-
	
	  The 32-bit version of Visual Basic requires the released version of Windows
	  95.
	
	The setup program does not continue past this point.
	
	CAUSE
	=====
	
	Visual Basic 4.0 is designed to run only on the released versions of Windows 95,
	Windows 98, and Windows NT 3.51 (build 1057) or later. Setup.exe gives you the
	preceding message if you try to install Visual Basic 4.0 on an earlier version
	of either operating system.
	
	RESOLUTION
	==========
	
	Upgrade your operating system to the released version of Windows 95, Windows 98,
	Windows NT 3.51 or later.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	On a machine running Windows NT 3.5 or earlier or a beta copy of Windows 95, run
	Setup.exe from the VB 4.0 CD-ROM, or disk 1.
	
	Immediately after starting Setup.exe you will receive one of the error messages
	discussed above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVBp kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
