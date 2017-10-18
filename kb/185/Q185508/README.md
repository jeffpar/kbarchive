---
layout: page
title: "Q185508: Error Message: Service Pack Setup Error"
permalink: kb/185/Q185508/
---

## Q185508: Error Message: Service Pack Setup Error

	Article: Q185508
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbFEA kbWinNT400sp4fea
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Service Pack 4 for Windows NT 4.0, you may receive
	the following error message:
	
	  Service Pack Setup Error. You do not have permission to update Windows
	  NT. Please contact your system administrator.
	
	CAUSE
	=====
	
	This behavior can occur if you run the Update.exe file from a folder other than
	the Update folder. The Update.exe file must be run from the Update folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, run the Update.exe file from the Update folder.
	
	The affected files are Update.exe and Update.inf. These files must be in the
	Update folder or the error messages will occur.
	
	MORE INFORMATION
	================
	
	The Update folder is located in the folder to which you extracted the Service
	Pack files, and contains the following files:
	
	  Update.exe
	  Update.inf
	  Update.nvt
	
	
	This error only applies when the registry's RunOnce key is used to run a batch
	file.
	
	The batch file maps a network drive back to a server location where the Service
	Pack 4 files are located (not under the $oem$ directory on the distribution
	server) and then runs Update.exe. For more information concerning deployment
	configurations, see the "Guide to Automating Windows NT Setup" deployment guide
	located under Deployment Tools at the following Web site:
	
	  http://www.microsoft.com/ntworkstation/
	
	The other method most commonly used is to run the Update.exe program from the
	Cmdlines.txt file. This will not work with Service Pack 4 because it contains
	long file names that would be truncated during the text mode copy phase of
	setup.
	
	For additional information, see the following article in the Microsoft Knowledge
	Base:
	
	  ARTICLE-ID: Q194986
	  TITLE : File Copy Error Using Update.exe With Service Pack 4
	
	
	Additional query words: sp4 4.00
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbFEA kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbinfo
	
	=============================================================================
	
