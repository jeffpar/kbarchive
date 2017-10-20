---
layout: page
title: "Q158590: XCON: Delivery Restrictions Max CPU and Slow Down Msg Delivery"
permalink: /kb/158/Q158590/
---

## Q158590: XCON: Delivery Restrictions Max CPU and Slow Down Msg Delivery

{% raw %}

	Article: Q158590
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During an extended period of time the following behavior might be seen on an
	affected Microsoft Exchange Server computer:
	
	Performance monitor counters
	----------------------------
	
	- MTA Work Queue: 2000.
	
	- Messages/Sec: 0,1.
	
	- Message Bytes/Sec: 500.
	
	- Directory Lookups/sec: 30.
	
	- The MTAs and DS combined CPU is nearly 100%.
	
	- Looking at the MTA queues using the Microsoft Exchange Server Administrative
	  program does not show any items in the queues.
	
	- The MTADATA contains more than 2000 DB*.DAT files.
	
	- Message delivery is very slow.
	
	Note that these results are examples and may vary from those you encounter on
	your computer.
	
	
	CAUSE
	=====
	
	Access to a connector such as the Internet Mail Connector (IMC), located on the
	affected server, is limited using distribution lists (DLs). Due to this
	restriction, transferred messages have to be checked against this access
	limitation and the DLs have to be expanded. Depending on the size and the
	nesting level of the DLs, this may cause a considerable performance degradation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange versions 4.0
	and 5.0. This problem was corrected in the latest Microsoft Exchange Server 4.0
	and 5.0 U.S. Service Packs. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	1. Do not restrict access to connectors such as the IMC.
	
	2. Do not use DLs to restrict access to connectors such as the IMC.
	
	3. Increase the memory and/or number of processors on the affected computer.
	
	4. Introduce a separate computer and operate the connector in question from
	  there.
	
	MORE INFORMATION
	================
	
	Using DLs to restrict access to connectors is very CPU intensive, even though a
	dedicated HUB Server might be used to operate connectors from. As a result, the
	faster the computer and the more memory it has, the faster it will be able to
	process mail. Even after applying the fix, Microsoft strongly suggests that you
	consider adding more memory and/or processors to the computer in question.
	Together with the fix described in this article a new registry value is
	introduced
	
	  DL Member Cache Size <REG_DWORD>
	
	which can be found under
	
	  H_KEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	     \MSExchangeMTA\Parameters
	
	This value limits the cache size to be used for DL-Members. This new entry
	defaults to a value of 15000.
	
	
	Installation
	------------
	
	1. Stop the MSExchangeMTA service.
	
	2. Stop the MSExchangeIMC service.
	
	3. Backup the following files from the <path>\exchsrvr\bin directory by
	  renaming them or copying them to another location:
	
	  Emsmta.exe
	  Mtacheck.exe
	  Mmiext.dll
	  Saalog.dll
	  Ems_rid.dll
	  P2.xv2
	  Address.dll
	
	4. Backup the following file from the \<Path>\Exchsrvr\Mtadata directory
	  by renaming it or copying it to another location:
	
	  P2.xv2
	
	5. Backup the following file from the
	  \<Path>\Exchsrvr\Connect\Msexcimc\Bin directory by renaming it, or
	  copying it to another location:
	
	  Address.dll
	
	6. Copy Emsmta.exe, Mtacheck.exe, Mmiext.dll, Saalog.dll, Ems_rid.dll, P2.xv2,
	  and Address.dll to the \<Path>\Exchsrvr\Bin directory.
	
	7. Copy P2.xv2 to the \<Path>\Exchsrvr\Mtadata directory.
	
	8. Copy Address.dll to the \<Path>\Exchsrvr\Exchsrvr\Connect\Msexcimc\Bin
	  directory.
	
	9. Restart the MSExchangeMTA, MSExchangeIMC, and any additional service possibly
	  stopped in steps 1 and 2.
	
	Additional query words: Distribution List Directory look ups MTA Work Queue
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
