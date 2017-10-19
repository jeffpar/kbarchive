---
layout: page
title: "Q107865: Preventing Windows NT Clients from Installing SNA Admin"
permalink: /kb/107/Q107865/
---

## Q107865: Preventing Windows NT Clients from Installing SNA Admin

	Article: Q107865
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SNA Server setup program for Windows NT clients automatically copies the SNA
	Server Admin program. This article describes how to disable this.
	
	MORE INFORMATION
	================
	
	When installing SNA Server client software on a Windows NT client machine, the
	SNA Server 2.0 setup program assumes the user will also want to install the SNA
	Server Admin to configure and manage SNA Servers in the domain.
	
	However, administrators may want to limit Windows NT users to SNA Server client
	functionality only and prevent users from installing the SNA Server Admin
	program. To do this, do the following:
	
	1. Locate the SNA Server machine(s) that are supporting SNA Server client
	  installation over the network.
	
	2. Locate the <snaroot>\CLIENTS\WINNT\SETUP.INF file.
	
	3. Using a text editor (such as EDIT), open SETUP.INF, locate the [DoAdminFiles]
	  section (located on line 3450) and add the following two lines, marked with
	  ">" (but do not add the ">" character):
	
	  [DoAdminFiles]
	  set Status = STATUS_SUCCESSFUL
	  > set !InstallAdminFiles = $(!False)
	  > return $(Status)
	  read-syms AdminFilesDlg
	  ...
	
	Once these two lines are added, the Windows NT user will no longer have the
	option of installing the Admin program and it will not be copied to the client
	machine.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
