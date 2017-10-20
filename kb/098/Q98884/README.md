---
layout: page
title: "Q98884: Recover from 20CLEAN.CMD when Upgrading from LAN Man 2.1"
permalink: /kb/098/Q98884/
---

## Q98884: Recover from 20CLEAN.CMD when Upgrading from LAN Man 2.1

{% raw %}

	Article: Q98884
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	When upgrading from LAN Manager 2.1 to LAN Manager 2.1a or LAN Manager 2.2, DO
	NOT run the 20CLEAN.CMD program. The Read Me First instructions in the LAN
	Manager 2.1a package are incorrect: step 4 applies only if you are upgrading
	from 2.0 to 2.1a. If you do run 20CLEAN.CMD, this error results when the attempt
	is made to detach LAN Manager:
	
	  Error in SETUP.INF
	
	MORE INFORMATION
	================
	
	The 20CLEAN.CMD file copies newer versions of the following files to your LAN
	Manager root directory (C:\LANMAN by default):
	
	  BACKACC.EXE
	  SETUP.EXE
	  ACLAPI.DLL
	
	If you have already run 20CLEAN.CMD, you need to get your LAN Manager 2.1 OS/2
	Setup disk and copy the file A:\SETUP.EXE to your c:\<lanroot> directory
	(C:\LANMAN by default). This will allow you to run Setup from your lanroot and
	detach the LAN Manager installation. After this step, you must continue with the
	rest of the upgrade instructions.
	
	Additional query words: 2.10a 2.1a 2.20 2.2 upgrade doc err ntdocerr
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	

{% endraw %}
