---
layout: page
title: "Q136963: Installation of Cisco CDDI/FDDI EISA Adapter Fails"
permalink: kb/136/Q136963/
---

## Q136963: Installation of Cisco CDDI/FDDI EISA Adapter Fails

	Article: Q136963
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you select the Cisco CDDI/FDDI EISA Adapter for Windows NT, the following
	error message appears when you try to load the driver:
	
	  Setup Operation Failed.
	
	
	RESOLUTION
	==========
	
	If you have an account with Cisco, you can connect to CIO.CISCO.COM and download
	the latest driver for Windows NT (NT_16.EXE). If you do not have an account,
	contact the Cisco technical support office at 1-800-553-2447 for assistance in
	downloading the file from the Cisco bulletin board system (BBS). Their BBS
	number is 408-526-8070. You will not be able to download the file by simply
	dialing in as an unregistered guest. After you have downloaded NT_16.EXE, type
	the following command to expand it:
	
	  NT_16.EXE -d
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: nic installation install
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
