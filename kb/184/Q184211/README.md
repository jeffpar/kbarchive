---
layout: page
title: "Q184211: NT Option Pack Fails to Install with Turkish Regional Settings"
permalink: /kb/184/Q184211/
---

## Q184211: NT Option Pack Fails to Install with Turkish Regional Settings

	Article: Q184211
	Product(s): Internet Information Server
	Version(s): WINNT:1.0,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Microsoft Windows NT Option Pack Setup program on a computer
	running Windows NT 4.0 or Windows 95 with the regional settings set to Turkish,
	the following error message appears:
	
	  Microsoft Index Server setup internal error: can't get version.
	
	CAUSE
	=====
	
	The Setupapi.dll file is unable to process the "I" character. As a result, Setup
	cannot find the version string in the Is20.inf.
	
	RESOLUTION
	==========
	
	NOTE: You must copy the contents of the Microsoft Windows NT Option Pack (NTOP)
	compact disc to your local hard disk and replace the Setupapi.dll file that
	ships with Windows NT Option Pack version 1.0 with the hotfix.
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to computers
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next service pack.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date     Time    Version      Size     File name   Platform
	  -----------------------------------------------------------
	  05/02/98                      500,496  setupapi.dll (alpha)
	  19/02/98                      323,344  setupapi.dll (intel)
	
	
	NOTE: This fix does not apply to Microsoft Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Windows NT Option
	Pack version 1.0. Microsoft has confirmed this to be a problem in Windows 95.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : WINNT:1.0,2.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix kbnofix
	
	=============================================================================
	
