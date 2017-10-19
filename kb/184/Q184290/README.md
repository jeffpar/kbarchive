---
layout: page
title: "Q184290: XCLN: Unable to Load Out98prf.adm with Poledit"
permalink: /kb/184/Q184290/
---

## Q184290: XCLN: Unable to Load Out98prf.adm with Poledit

	Article: Q184290
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the System Policy Editor (Poledit.exe) to access the file
	Out98prf.adm included with the Microsoft Outlook Deployment Kit (ODK), you
	receive the following error:
	
	  The following error occurred in <path> on line 71:
	  Error 2000 Unexpected keyword
	
	  Found: DEFAULT
	  Expected: KEYNAME, VALUENAME, REQUIRED, ITEMLIST, END, NOSORT
	
	  The file can not be loaded.
	
	CAUSE
	=====
	
	Out98prf.adm is intended for use with the Outlook 98 Deployment Kit Wizard to
	assist in establishing parameters for user profiles. It should not be used with
	Poledit.
	
	RESOLUTION
	==========
	
	The ODK for Microsoft Outlook 98 includes the following templates that work with
	Poledit:
	
	  Conf.adm
	  Inetres.adm
	  Inetset.adm
	  Outlk98.adm
	  Shell.adm
	  Subs.adm
	
	MORE INFORMATION
	================
	
	For more information regarding the ODK, see the Readme.txt file included with
	the ODK. For information regarding system policies, see the Policies and
	Profiles white paper.
	
	
	
	NOTE: System Policy Editor is not included in the floppy disk version of Windows
	95. You can download Policy.exe, a self-extracting file containing Poledit.exe,
	from online services. Please see the following article in the Microsoft
	Knowledge Base for information about downloading Policy.exe:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	
