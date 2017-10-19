---
layout: page
title: "Q153946: XADM: Err Msg: Error Encountered Accessing Registry Keys/Value"
permalink: /kb/153/Q153946/
---

## Q153946: XADM: Err Msg: Error Encountered Accessing Registry Keys/Value

	Article: Q153946
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Exchange Server, version 4.0, Japanese version 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error might occur when you run Edbutil.exe /d /ds:
	
	  Error encountered accessing registry keys/values for specified Exchange
	  store.
	
	  Operation terminated with error -1907
	
	CAUSE
	=====
	
	The Edbutil utility assumes that the registry value below has been set. It will
	not be set unless the Microsoft Exchange Optimizer program has been run either
	during the installation process or afterwards:
	
	  HKey_local_machine\system\CCS\services\MSExchangeDS\Parameters:
	     EDB max buffers
	
	WORKAROUND
	==========
	
	Run Microsoft Exchange Optimizer program to set this value or add this value to
	the registry under HKey_local_machine\system\CurrentControlSet
	\services\MSExchangeDS\Parameters:
	
	Value Name: EDB Max Buffers
	Data Type: REG_DWORD
	Data: 64
	Radix: Hex
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: 4.0 edbutil Japanese
	
	======================================================================
	Keywords          :  
	Technology        : kbHLangJapanese kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
