---
layout: page
title: "Q192192: XADM: Setup Fails with &quot;Self Registration.Cdonts.dll Failed&quot; Err"
permalink: kb/192/Q192192/
---

## Q192192: XADM: Setup Fails with &quot;Self Registration.Cdonts.dll Failed&quot; Err

	Article: Q192192
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message may appear during the installation of Service Pack 1 or
	the set up of the Internet Mail Service:
	
	  Self registration of the DLL <Winnt root>\system32\cdonts.dll failed:
	  0d
	
	CAUSE
	=====
	
	Cdonts.dll is not present in the <Winnt root>\System32 directory.
	
	WORKAROUND
	==========
	
	To work around this problem, copy Cdonts.dll from the Exchange Server
	installation disc to the System32 directory.
	
	It may also be necessary to register Cdonts.dll using the following command:
	
	  <Winnt root>\System32\Regsvr32.exe <Winnt root>\System32\
	  Cdonts.dll.
	
	This registration takes only a few seconds to complete.
	
	MORE INFORMATION
	================
	
	Cdonts.dll is installed by default when Exchange Server 5.5 is installed.
	Uninstalling other programs may cause this file to be removed. For example, the
	Windows NT Option Pack uninstaller may remove Cdonts.dll.
	
	Note that the versions of Cdonts.dll included with the Option Pack and on the
	Exchange Server 5.5 installation disc are identical, although they have
	different file dates (11-2-97 versus 11-4-97).
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
