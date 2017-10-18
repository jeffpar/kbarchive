---
layout: page
title: "Q96092: WFWG: Printing with Banyan VINES Connectivity"
permalink: kb/096/Q96092/
---

## Q96092: WFWG: Printing with Banyan VINES Connectivity

	Article: Q96092
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from Windows for Workgroups to a network printer while Banyan
	VINES connectivity is installed, you can print only one job per Windows session.
	If you send a second print job, that job is lost and an error message is
	displayed. For example, if you try to print from Microsoft Windows Write, you
	receive the following error message:
	
	  CANNOT PRINT
	  Be sure that your printer is connected properly & use the Printers option
	  in the Control Panel to verify that the printer is configured properly.
	
	NOTE: If you print from Microsoft Word 2.0 for Windows, the second print job is
	lost but no error message appears.
	
	CAUSE
	=====
	
	This problem is caused by the Banyan VINES redirector, REDIRALL.EXE.
	
	STATUS
	======
	
	Banyan is aware of this problem. We will post new information here in the
	Microsoft Knowledge Base as it becomes available. For more information, contact
	Banyan Systems, Inc.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Open the WIN.INI file in an ASCII text editor, such as Windows Notepad.
	
	2. In the [ports] section, add a universal naming convention (UNC) name for the
	  desired printer. For example:
	
	  \\SERVERNAME\PRINTERNAME=
	
	3. Save the WIN.INI file.
	
	4. Run Control Panel and choose Printers.
	
	5. Select the printer.
	
	6. Choose the Connect button.
	
	7. In the Ports window, choose the network path name you specified in step 2.
	
	8. Choose the OK button, and then close the Control Panel.
	
	MORE INFORMATION
	================
	
	Banyan VINES is manufactured by Banyan Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
