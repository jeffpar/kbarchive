---
layout: page
title: "Q68068: Development Environment Required to Use Windows DDK"
permalink: /kb/068/Q68068/
---

## Q68068: Development Environment Required to Use Windows DDK

{% raw %}

	Article: Q68068
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The tools and documentation in the Microsoft Windows Software Development Kit
	(SDK) version 3.0 or 3.1 are required to develop a device driver or a virtual
	device (including a 386 enhanced-mode virtual device). The documentation for the
	Microsoft Windows DDK includes several references to the SDK documentation. The
	SDK documentation contains detailed information on the new features supported by
	Windows.
	
	For technical assistance while developing a driver or virtual device, contact
	Microsoft Product Support Services regarding its Support Premier or Support
	Professional services.
	
	MORE INFORMATION
	================
	
	The following languages, tools, and software are necessary to produce a device
	driver or a virtual device for Microsoft Windows version 3.0 or 3.1:
	
	1. Microsoft Macro Assembler (MASM) version 5.1 or higher (for all drivers).
	
	2. Microsoft C Compiler version 6.0 or higher (generally used for printer
	  drivers).
	
	3. Version 3.0 of the DDK supports the Microsoft C Compiler version 5.1 for
	  those developers who have not upgraded to a later version of the compiler or
	  who desire to confirm successful DDK installation by building a driver and
	  performing a binary comparison with the corresponding driver included in the
	  DDK. Version 5.1 of the Microsoft C Compiler is no longer commercially
	  available.
	
	4. The tools and files included with the Microsoft Windows DDK and the Microsoft
	  Software SDK.
	
	5. The Windows retail product and various applications (for debugging and
	  testing). Version 3.1 of the Windows DDK includes display, printer and
	  network compatibility tests to assist in debugging a driver.
	
	Additional query words: 3.00 3.10 DDKMISC
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
