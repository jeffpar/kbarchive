---
layout: page
title: "Q200983: HOWTO: How to Install Visual C++ on Terminal Server"
permalink: /kb/200/Q200983/
---

## Q200983: HOWTO: How to Install Visual C++ on Terminal Server

	Article: Q200983
	Product(s): Microsoft C Compiler
	Version(s): 4.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbVC600 kbVS600
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 6.0, on platform(s):
	   - Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing Visual C++ on Windows NT Terminal Server for multi-user use, you
	must put the system in install mode either by using the Add/Remove Programs tool
	in Control Panel or by using the "Change User /install" command at the command
	prompt. ("Change user /execute" returns the server to its default running
	state.)
	
	MORE INFORMATION
	================
	
	Use the following steps to install Visual C++ on Windows NT Terminal Server:
	
	1. Log on to the Terminal Server computer as an Administrator.
	
	2. Open a command shell (Cmd.exe) and run:
	
	  "change user /install" (without the quotation marks)
	
	  This sets the machine to install mode ("change user /query" can be used to
	  display the current mode selected).
	
	3. Run the setup program from the Visual Studio CD and install it according to
	  its instructions. If you are prompted to type your name during the
	  installation process, you may want to give a generic name, because the name
	  will be the default for all users. Configure any default program settings you
	  want all users to have.
	
	4. The Visual Studio setup program may need multiple reboots depending on the
	  components you have chosen to install. When Windows restarts, it always
	  starts in execute mode. You need to set the server back to install mode
	  before continuing the setup. Before rebooting the machine, add "change user
	  /install" to the UsrLogon.cmd file in the system32 directory. The
	  UsrLogon.cmd script is always executed when you log in to the Terminal Server
	  machine. This ensures that the machine is in install mode after rebooting.
	
	5. After installation is completed, remove the "change user /install" command
	  from the UsrLogon.cmd file, log off, and log on to the machine. This
	  procedure ensures that the machine is returned to execute mode. Applications
	  should always be run in execute mode.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q186498 Terminal Server Application Integration Information
	
	  Q272755 INFO: Visual C++ Is Not Supported on Terminal Server 4.0
	
	For additional information about issues related to installation of the MSDN
	Library on Terminal Server, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q195878 PRB: MSDN Help Cannot Find Msdn*.col File on Terminal Server
	
	For additional information about issues related to Internet Explorer 4.0 Active
	Desktop and Script Debugging on Terminal Server, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q194396 PRB: Err Msg: Mdm.exe - DLL Initialization Failed Error
	
	For general issues and issues regarding the installation of Internet Explorer 4.0
	on Terminal Server, please refer to Terminal.doc located in the root directory
	of your Windows NT Terminal Server CD.
	
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbsetup kbVC600 kbVS600 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :4.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
