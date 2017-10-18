---
layout: page
title: "Q79989: DPMI0301.exe Simulates Real Mode Interrupts"
permalink: kb/079/Q79989/
---

## Q79989: DPMI0301.exe Simulates Real Mode Interrupts

	Article: Q79989
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DPMI0301.exe is a sample that demonstrates how an application developed for the
	Microsoft Windows operating system can use MS- DOS Protected Mode Interface
	(DPMI) functions 0300h (Simulate Real Mode Interrupt) and 0301h (Call Real Mode
	Procedure with Far Return Frame). DPMI0301.exe contains source code for a TSR
	and an application for the Microsoft Windows graphical environment that
	demonstrate simulating real mode interrupts using DPMI.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Dpmi0301.exe
	  (http://download.microsoft.com/download/winddk/samp1/1/W31/EN-US/Dpmi0301.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The DPMI0301 example has two parts. One part is an MS-DOS terminate-and-
	stay-resident (TSR) program that must be run before Windows is started. The TSR
	hooks Interrupt 72h.
	
	The second part of the example is an application that runs under Windows and
	communicates with the TSR program. When the application starts, it issues a
	software Interrupt 72h by calling DPMI Function 0300h (Simulate Real Mode
	Interrupt).
	
	When the TSR program receives this interrupt, it returns the address of an
	internal routine in the DX:BX register pair. The application takes the address
	and saves it in the CS and IP structure variables.
	
	Then, when the user selects the menu item in the application, the application
	calls DPMI function 0301h (Call Real Mode Procedure with Far Return Frame). At
	various points, the application and the TSR program send messages to the serial
	port to indicate the progress of the application-TSR program communication.
	
	Additional query words: DDKDPMI
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
