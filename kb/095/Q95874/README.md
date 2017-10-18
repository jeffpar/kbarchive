---
layout: page
title: "Q95874: WFWG: Network Applications Unable to Find NetBIOS"
permalink: kb/095/Q95874/
---

## Q95874: WFWG: Network Applications Unable to Find NetBIOS

	Article: Q95874
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using Windows for Workgroups, some MS-DOS-based network applications
	that check for the presence of NetBIOS may not be able to find it.
	
	WORKAROUND
	==========
	
	To allow the application to find NetBIOS present and operate correctly, replace
	the NET START line in your AUTOEXEC.BAT file with the following:
	
	  NET START NETBEUI
	
	NOTE: This workaround may not work for all MS-DOS-based applications that check
	for NetBIOS.
	
	
	MORE INFORMATION
	================
	
	Some MS-DOS applications check for NetBIOS by examining the interrupt vector
	table for the 0x5C entry. If the entry is the default (0 or segment F000), then
	these applications assume the interrupt is not hooked and NetBIOS is not
	present. Microsoft Diagnostics (MSD) is an example of such an application. It
	returns NetBIOS not detected in the NETWORKS section even if the NETBEUI
	protocol is running.
	
	
	The protected mode transport (VNB.386), provided with Windows for Workgroups, may
	not reflect a change to the interrupt vector table. Therefore, when an
	MS-DOS-based application examines the vector table it may not find NetBIOS
	present even when it is present. If you use the real-mode transport (for
	example, by typing NET START NETBEUI at the command prompt), then the vector
	table check will be successful.
	
	Changing NET START command line to NET START NETBEUI means that the real mode
	transport is used instead of the protected mode transport; the protected mode
	redirector is still loaded, which leaves more memory available for MS-DOS
	applications.
	
	For more information on NetBEUI and NetBIOS, query on the following words in the
	Microsoft Knowledge Base:
	
	  netbeui and netbios
	
	Additional query words: 3.10 int
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
