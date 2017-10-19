---
layout: page
title: "Q171883: Runtime Error When Installing Microsoft Cluster Server"
permalink: /kb/171/Q171883/
---

## Q171883: Runtime Error When Installing Microsoft Cluster Server

	Article: Q171883
	Product(s): Microsoft Windows NT
	Version(s): WinNT:1.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Cluster Server, you may observe the following error:
	
	  Microsoft Visual C++ Runtime Library
	  Runtime Error!
	  Program E:\MSCS\cluster\setup.exe
	  Abnormal program termination
	
	NOTE: The drive and the folder listed here may be different on your system.
	
	CAUSE
	=====
	
	The account used when you install Microsoft Cluster Server must have
	administrative rights on the computer on which you are running setup.
	
	RESOLUTION
	==========
	
	To correct this problem, close all programs and log on using an account with
	administrative rights. You may either grant administrative rights to the account
	you were using or use a different account to install Microsoft Cluster Server.
	
	After making any necessary changes, close all programs and log on using the
	proper account with administrative rights and run Microsoft Cluster Server setup
	again.
	
	Additional query words: cluster runtime C++ MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : WinNT:1.0
	
	=============================================================================
	
