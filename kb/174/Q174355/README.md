---
layout: page
title: "Q174355: XADM: Msf32.dll Error During Migration From MS Mail to Exchange"
permalink: /kb/174/Q174355/
---

## Q174355: XADM: Msf32.dll Error During Migration From MS Mail to Exchange

	Article: Q174355
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are attempting to migrate MS Mail users to Microsoft Exchange Server
	using the Exchange Migration Wizard and you click Next to go to the third page,
	the following pop-up error occurs:
	
	  Unable to use MSFS32.dll. Verify that this DLL exists in the path and
	  that its version matches the version of MLMIG32.dll.
	
	WORKAROUND
	==========
	
	To work around this problem, copy Msfs32.dll from the Exchange Server compact
	disc in the Setup\<platform> directory and paste it into the working
	directory of <drive letter>\exchsrvr\bin.
	
	
	Additional query words: migration, XFOR, MS Mail, MSFS32.DLL, MLMIG32.DLL
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	
	=============================================================================
	
