---
layout: page
title: "Q178437: VB 5.0 Developer's Workshop, 4th Ed. Commments and Corrections"
permalink: kb/178/Q178437/
---

## Q178437: VB 5.0 Developer's Workshop, 4th Ed. Commments and Corrections

	Article: Q178437
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbdocerr
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Visual Basic 5.0 Developer's Workshop, Fourth Edition ISBN 1-57231-436-2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Microsoft Visual Basic 5.0 Developer's
	Workshop, Fourth Edition," ISBN 1-57231-436-2.
	
	Contents:
	
	- Back Cover Lists Incorrect Version of Internet Explorer
	
	- Secret Application Does Not Work Correctly When Compiled
	
	- Metric Application May Not Work Correctly With Windows NT 4.0
	
	MORE INFORMATION
	================
	
	Back Cover Lists Incorrect Version of Internet Explorer
	-------------------------------------------------------
	
	The back cover indicates that Microsoft Internet Explorer 3.01 is included on the
	companion disc. However, Microsoft Internet Explorer 3.02 is included on the
	companion disc.
	
	Correction:
	Back cover, bullet list in column on right:
	Change: "Microsoft Internet Explorer 3.01"
	To: "Microsoft Internet Explorer 3.02" (without the quotation marks)
	
	
	Symptom:
	
	  When you compile the Secret application as a stand-alone executable file and
	  use the executable file to encrypt and decrypt a text file, the text file may
	  not be encrypted and decrypted correctly.
	
	Cause:
	
	  The encryption and deencryption routines do not work correctly when the
	  program is optimized for fast code.
	
	Resolution:
	
	  When compiling the application in the Visual Basic 5.0 development
	  environment, choose a compile option other than the default "Optimize for
	  Fast Code."
	
	To change the compile option, follow these steps:
	
	1. On the Project menu, click Secret Properties.
	
	2. Click the Compile tab.
	
	3. Change the compile option, and then click OK.
	
	
	Metric Application May Not Work Correctly With Windows NT 4.0
	-------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED, EDITED, OR TESTED BY MICROSOFT. USE ONLY         **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	Symptom:
	
	  When you attempt to run the Metric application under Microsoft Windows NT
	  4.0, you may receive the following error
	
	  This file is not a Windows Help file.
	
	  followed by
	
	  A newer version of Help is needed to read this Help file.
	
	Cause:
	
	  The Metric application uses the WinExec API function to launch WinHelp.
	  WinExec is provided for compatibility with earlier versions of Windows.
	
	Workaround
	
	  Replace all occurrences of the WinExec API function with the CreateProcess
	  API function. The Declare statement for the CreateProcess API function, as
	  with most API functions, can be found in Win32api.txt.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of the book, it may already
	contain the above corrections.
	
	Additional query words: press ms_press 1-57231-436-2
	
	======================================================================
	Keywords          : kberrmsg kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
