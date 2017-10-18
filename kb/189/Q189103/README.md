---
layout: page
title: "Q189103: DHCP Manager in Server Tools Does Not List Superscopes Option"
permalink: kb/189/Q189103/
---

## Q189103: DHCP Manager in Server Tools Does Not List Superscopes Option

	Article: Q189103
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Windows NT Client Server Tools on a computer running
	Windows NT Workstation 4.0 so that you can perform Dynamic Host Configuration
	Protocol (DHCP) administration, you notice that the superscoping feature is
	missing.
	
	RESOLUTION
	==========
	
	To be able to set up and administer superscopes from a computer running the
	Windows NT Client Server Tools, you will need to copy Dhcpadmn.exe and
	Dhcpsapi.dll from the %SystemRoot%\System32 folder on an NT 4.0 SP3 (or higher)
	DHCP server to the %SystemRoot%\System32 folder on the Windows NT Workstation
	computer running the Client Server Tools.
	
	MORE INFORMATION
	================
	
	Dynamic Host Configuration Protocol (DHCP) administration can be performed from
	a Microsoft Windows NT Workstation 4.0 computer by installing the Windows NT
	Client Server Tools (located on the Windows NT Server CD in the
	\Clients\SrvTools\WinNT folder).
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q173673
	  TITLE : Windows NT Server Tools for Windows NT Workstation 4.0 Available
	
	Additional query words: DHCP Superscope
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
