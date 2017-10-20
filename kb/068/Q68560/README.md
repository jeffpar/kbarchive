---
layout: page
title: "Q68560: DLL Installs an ISR That Can Signal an Application"
permalink: /kb/068/Q68560/
---

## Q68560: DLL Installs an ISR That Can Signal an Application

{% raw %}

	Article: Q68560
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbOSWin310 kbOSWin300 kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows environment, an interrupt service routine (ISR) can
	communicate with an application. n ISR must be in a fixed code segment in a
	dynamic-link library (DLL) to ensure that the code is always in memory and
	available to service the interrupt. In Windows 3.1, an ISR that supports
	hardware should be in an installable device driver to enable Windows to disable
	the hardware when it switches between MS-DOS tasks.
	
	HANDLER is a set of sample programs that demonstrate how to install an ISR, and
	have the ISR communicate with an application. The HANDLER DLL installs an ISR,
	which in turn uses the PostMessage function to notify the DEMO application
	(included with HANDLER) that an event has occurred. The ISR is chained to the
	keyboard interrupt vector, and the DEMO application maintains and displays a
	count of keyboard interrupts.
	
	This sample program illustrates how an application can detect a hardware
	interrupt. This may be useful to a programmer trying to support a hardware
	device in the Windows environment.
	
	HANDLER is one of the advanced samples provided with version 3.1 of the Microsoft
	Windows SDK. HANDLER can also be found in the Download Center.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Handler.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The Microsoft C Compiler and Microsoft Macro Assembler (MASM) are required to
	build the files in HANDLER.
	
	Additional query words: HANDLER.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kbOSWin310 kbOSWin300 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
