---
layout: page
title: "Q245678: Winsock Call Fails When You Have No Local Administrator Rights"
permalink: kb/245/Q245678/
---

## Q245678: Winsock Call Fails When You Have No Local Administrator Rights

	Article: Q245678
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6 
	- Microsoft Windows NT Workstation version 4.0 SP6 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 6, Winsock calls may not work
	properly. Generally the problem manifests itself when a program attempts to
	connect to a server. You may see an application layer error like:
	
	  Could not connect to server.
	
	  or
	
	  Access denied.
	
	CAUSE
	=====
	
	The problem only occurs if the user does not have full administrative rights to
	the computer.
	
	RESOLUTION
	==========
	
	Windows NT 4 Service Pack 6a has been released to fix this problem. A hotfix is
	available to update SP6 systems to SP6a. For more information, please click the
	ariticle link below to view the article in the Microsoft Knowledge Base:
	
	  Q246009 Windows NT 4.0 Service Pack 6a Available
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time     Size       File name   Platform
	  -----------------------------------------------------
	  11/11/1999  05:18p    66,352    Afd.sys     x86
	  11/11/1999  05:23p   115,184    Afd.sys     Alpha
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Pack 6.
	
	Additional query words: winsock connection refused lotus notes kbfaqw2knet
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTS400sp6 kbWinNTS400search kbWinNTW400sp6
	Version           : winnt:4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
