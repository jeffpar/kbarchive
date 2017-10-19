---
layout: page
title: "Q77403: MsgMode.exe Uses Message Mode Services &amp; VMM w/VxD"
permalink: /kb/077/Q77403/
---

## Q77403: MsgMode.exe Uses Message Mode Services &amp; VMM w/VxD

	Article: Q77403
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kb16bitonly kbDDK kbOSWin300
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MsgMode.exe is a sample virtual device that demonstrates how to use the message
	mode services and the virtual machine manager (VMM) Time Out services. MSGMODE
	uses the VMM Hook_Device_Service to detect keyboard and mouse activity.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	MsgMode.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Under Microsoft Windows enhanced mode, a virtual device (VxD) can use the virtual
	keyboard device (VKD) and virtual display device (VDD) message mode services to
	provide user interaction. These services are especially useful to programs that
	implement security systems where the user is required to enter a password before
	any further operation can proceed.
	
	REFERENCES
	==========
	
	The VKD and VDD message mode services are documented in the Microsoft Windows
	Device Driver Kit "Virtual Device Adaptation Guide."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kb16bitonly kbDDK kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
