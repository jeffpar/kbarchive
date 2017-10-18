---
layout: page
title: "Q78364: Explanation of Device Contention and Windows"
permalink: kb/078/Q78364/
---

## Q78364: Explanation of Device Contention and Windows

	Article: Q78364
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When more than one application is running at the same time in Microsoft Windows
	386 enhanced mode, the applications sometimes request the use of a device such
	as a printer or a modem at the same time. The device contention options
	determine how Windows responds to these requests.
	
	MORE INFORMATION
	================
	
	The device contention options apply only when a non-Windows application is one
	of the applications requesting access to the device. When more than one Windows
	application requests access to a device, Windows handles their use of the device
	without these options.
	
	The device contention options are described in the following table. Generally, it
	is a good idea to accept the standard settings. Situations that might warrant
	changing the settings are included in the option descriptions.
	
	Use This Option      To Do This
	---------------      ----------
	
	Always Warn          Specify that a warning message be displayed every
	                    time an application tries to use the device when the
	                    device is already in use. The warning message asks
	                    you which application should be given control of the
	                    port.
	
	                    In most situations, you should select this option.
	
	Never Warn           Specifies that any application can use the device at
	                    any time, without a warning message. However, this
	                    means that two applications could conceivably try to
	                    use the same device at the same time; this may produce
	                    undesirable results, such as a garbled printed
	                    document.
	
	                    Select this option when you are absolutely sure
	                    that no more than one printing or communicating
	                    application will try to use the device at the
	                    same time.
	
	Idle                 Specify the number of seconds after an application
	                    stops using a device before another application can
	                    use the same device without causing the warning
	                    message to be displayed. The range is from 1 to 999
	                    seconds.
	
	                    Use this option when the device is capable of
	                    switching back and forth between two applications.
	                    For example, you might use Cardfile to automatically
	                    dial an on-screen service and then switch to another
	                    application to communicate with the service. In this
	                    example, you would specify a short delay, such as two
	                    seconds.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," version 3.0, pages 190-192
	
	"Microsoft Windows User's Guide," version 3.1, page 247
	
	Additional query words: win31 3.00 3.00a 3.10 system.ini control panel 386 enhanced icon wincomm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
