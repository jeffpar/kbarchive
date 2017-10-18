---
layout: page
title: "Q156269: PRB: Quote Marks Cause Error Messages in Setup Wizard"
permalink: kb/156/Q156269/
---

## Q156269: PRB: Quote Marks Cause Error Messages in Setup Wizard

	Article: Q156269
	Product(s): Microsoft FoxPro
	Version(s): 3.00b 5.00
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbvfp300 kbvfp500
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A set of distribution disks or a netsetup has been built with the Visual FoxPro
	Setup Wizard. Running the setup program on those disks produces one of the
	following error messages on the platform(s) specified:
	
	Error message #1 (Windows NT and Windows 95):
	
	  A setup initialization file has been corrupted
	
	Error message#2 (Windows 95):
	
	  Setup Error 945
	  Your setup file may be damaged. Try restarting the setup program.
	
	Followed by:
	
	  Setup Error 723
	  The process of top-level information has failed.
	
	Followed by:
	
	  Was not completed successfully.
	
	Error message #3 (Windows NT):
	
	Dr. Watson starts with the following message:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  ACMSETUP.EXE
	
	  Exception: access violation (0xc000005), Address: <some address>
	
	Error message #4 (Windows NT and Windows 95):
	
	  Setup Initialization Error
	  Setup cannot access the required initialization file:'<path>
	  ACMSETUP.EX_'
	
	CAUSE
	=====
	
	Error message #1 occurs when two quote marks, either double or single, are
	entered in Step #4 of the Setup Wizard for the Setup Dialog Box Caption.
	
	Error messages #2 and #3 occur when a word within double quotation marks is
	entered for the Setup Dialog Box Caption. For example, "Hello" (with the
	quotation marks) causes the error messages.
	
	Error message #4 is caused by placing the word within single quotation marks,
	'Hello,' in the Setup Dialog Box Caption box in Step #4 of the Setup Wizard when
	running Visual FoxPro 5.0 under Windows NT 4.0. A word within single quotation
	marks should not cause the setup of the distribution disks to fail if the Setup
	Wizard runs while Visual FoxPro 5.0 is running on Windows 95.
	
	WORKAROUND
	==========
	
	Do not use quotation marks in the Setup Dialog Box Caption Box in Step #4 of the
	Setup Wizard. For best results, use only alphabetic or numeric characters for
	the Setup Dialog Box Caption.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The setup program uses the information entered in the Setup Dialog Box Caption
	field when it is installing the distributed Visual FoxPro application. Quotation
	marks cause the setup program problems.
	
	The Setup program seems to be able to handle single quotation marks around the
	Setup Dialog Box Caption when using Visual FoxPro 3.0b. In other words, 'Hello'
	should not cause setup of the distributed application to fail if it was created
	with the Visual FoxPro 3.0b Setup Wizard on Windows 95 or Windows NT 4.0.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500
	Version           : 3.00b 5.00
	Issue type        : kbprb
	
	=============================================================================
	
