---
layout: page
title: "Q191501: HOWTO: Detect If the Floppy Drive Is Ready on Windows NT"
permalink: /kb/191/Q191501/
---

## Q191501: HOWTO: Detect If the Floppy Drive Is Ready on Windows NT

{% raw %}

	Article: Q191501
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following Microsoft Knowledge Base article describes how to verify that a
	disk is in a floppy drive:
	
	  Q170609 PRB: PUTFILE Command to Drive "A" Without a Floppy Causes Fault
	
	However, in some instances a formatted unused diskette may be in the drive with a
	volume serial number of zero. In this case, the code in the article incorrectly
	indicates that there is not a disk in the drive. The article also mentions the
	use of the FoxPro DISKSPACE function. However, on a Microsoft Windows NT-based
	computer or a Microsoft Windows 2000-based computer, the use of the DISKSPACE
	function opens a system error dialog box if there is not a disk in the drive.
	
	MORE INFORMATION
	================
	
	The following code demonstrates how to indicate the floppy disk status,
	regardless of the volume serial number. The code does not cause an error dialog
	box to open on a Windows NT-based computer or a Windows 2000-based computer. The
	WIN32API function SetErrorMode is used to eliminate the error dialog on both a
	Windows NT-based computer or a Windows 2000-based computer.
	
	     *-- Code begins here.
	     *-- Defines from Winbase.h
	     #define SEM_FAILCRITICALERRORS      0x0001
	     #define SEM_NOGPFAULTERRORBOX       0x0002
	     #define SEM_NOALIGNMENTFAULTEXCEPT  0x0004
	     #define SEM_NOOPENFILEERRORBOX      0x8000
	
	     *-- SetErrorMode determines whether the system handles
	     *-- serious errors or whether the program handles them.
	     DECLARE INTEGER SetErrorMode in win32api INTEGER
	
	     *-- SetErrorMode returns to what the flags were last set.
	     *-- You need to store this in lnResult so that you can set them
	     *-- back the way they were before calling SetErrorMode.
	     *-- Failure to do so can produce unpredictable results
	     *-- when encountering future errors.  SetErrorMode only
	     *-- applies to the current process and therefore only affects
	     *-- the FoxPro program that called SetErrorMode.
	     lnResult = SetErrorMode(SEM_FAILCRITICALERRORS)
	
	     *-- Test the FoxPro DISKSPACE() function.  If you get a -1, then
	     *-- there is no disk in the drive.
	     IF DISKSPACE("a:") = -1
	        MESSAGEBOX("No disk present.", 0)
	     ELSE
	        MESSAGEBOX("Drive is ready.", 0)
	     ENDIF
	
	     *-- Put things back the way you found them.
	     lnResult = SetErrorMode(lnResult)
	
	     *-- Test DISKSPACE() again.  If there is no floppy in the drive,
	     *-- a Windows NT system dialog box appears.
	     IF DISKSPACE("a:") = -1
	        MESSAGEBOX("No disk present.", 0)
	     ELSE
	        MESSAGEBOX("Drive is ready.", 0)
	     ENDIF
	     *-- Code ends here.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q170609 PRB: PUTFILE Command to Drive "A" Without a Floppy Causes Fault
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Mike
	Stewart, Microsoft Corporation.
	
	
	Additional query words: removable media kbVFp600 kbAPI kbVFp500a kbVFp500
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
