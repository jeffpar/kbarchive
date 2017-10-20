---
layout: page
title: "Q139050: PRB: &quot;Setup not intended for this version of Windows&quot; Error"
permalink: /kb/139/Q139050/
---

## Q139050: PRB: &quot;Setup not intended for this version of Windows&quot; Error

{% raw %}

	Article: Q139050
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When setting up Visual FoxPro version 3.0 on a Windows NT version 3.5 (or later)
	server, the following error message appears:
	
	  This Setup is not intended for this version of Windows.
	
	CAUSE
	=====
	
	Microsoft Windows NT version 3.5 or later is running on a non-x86-based computer
	such as a DEC Alpha, MIPS R4000, or a PowerPC. When Windows NT runs on one of
	these RISC-based processors, only the Intel 286 instruction set is emulated.
	Therefore, only Windows applications that can run in standard mode will run.
	
	RESOLUTION
	==========
	
	An administrative setup of Visual FoxPro can still be accomplished on a
	RISC-based platform on Windows NT. The setup program must be run from a
	workstation running Windows or Windows NT on an Intel-based PC, and then point
	the setup files to the RISC-based server. From there, users can connect and run
	a workstation installation of Visual FoxPro.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Windows NT provides two environments for Windows-based applications:
	
	1. The 32-bit subsystem. These applications are written to the Win32 API
	  standard and therefore must be compiled and linked for the platform on which
	  they will run. This includes Visual FoxPro 3.0.
	
	2. The 16-bit environment. This environment is implemented through Windows NT's
	  NTVDM, the virtual MS-DOS machine manager, and WOWEXEC, the Windows on
	  Windows component that handles loading 16-bit Windows applications.
	  Currently, these components only provide emulation of the Intel 286
	  instruction set on non-Intel platforms. Therefore, any 16-bit Windows- based
	  applications that require 386-specific instructions (enhanced mode Windows),
	  will not run on Windows NT on a non-Intel platform.
	
	To check the processor Windows NT is currently running on, go to the
	Administrative Tools program group, and choose Windows NT diagnostics. Then
	click the Hardware button. The processor type should be listed in the dialog
	box.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
