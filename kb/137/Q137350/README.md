---
layout: page
title: "Q137350: PRB: Visual FoxPro Quits to MS-DOS If AWFAX Is Running"
permalink: kb/137/Q137350/
---

## Q137350: PRB: Visual FoxPro Quits to MS-DOS If AWFAX Is Running

	Article: Q137350
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro runs for about a minute or two then quits to MS-DOS, and the
	following error message may or may not appear:
	
	  EMM386 has detected error #06 in an application at memory address 00B8:0850.
	
	To minimize the chance of data loss, EMM386 has halted your computer. For more
	information, see the README.TXT file.
	
	To restart your computer, press ENTER.
	
	CAUSE
	=====
	
	This is due to a problem in the Win32s subsystem. It is not a Visual FoxPro bug.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Switch the Com ports for the Fax Modem and the Mouse. However, on some
	  computers this may have no effect
	
	-or-
	
	- Disable AWFAX from MSMAIL by following these steps.
	
	  1. Start MSMAIL.
	
	  2. On the Fax menu, click Mode.
	
	  3. In the Mode dialog box, selecte the Work Offline check box.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Ensure that your Fax Modem is on COM1 and your mouse on COM2. This problem is
	  more likely to occur under thse conditions.
	
	2. On a computer with Windows for Workgroups installed, ensure that Microsoft
	  mail, FAX software, and Schedule Plus are all installed.
	
	3. Using the Control Panel, verify that Comm1 is on 03F8 IRQ4 and Comm2 is on
	  02F8 IRQ3.
	
	4. Change Flow Control of both COM1 and COM2 to Hardware.
	
	5. Install Visual FoxPro selecting the Minimum install.
	
	6. Bring up Control Panel, click the Fax icon, and install FaxModem on Com1.
	
	7. Start Mail, and then minimize it. Running mail automatically starts AWFAX.
	  When it starts AWFAX, it polls COM1 for the fax modem. This doesn't seem to
	  occur if you start FAXMGR.EXE by itself.
	
	8. Start Visual FoxPro. You may find that the problem occurs sooner if a project
	  is open and dragged around the screen.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
