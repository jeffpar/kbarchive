---
layout: page
title: "Q157683: XCLN: Forms Designed with Many Fields Might not Show Them All"
permalink: kb/157/Q157683/
---

## Q157683: XCLN: Forms Designed with Many Fields Might not Show Them All

	Article: Q157683
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating a Microsoft Exchange custom form containing a large number of objects
	might not show all the fields when the form is displayed.
	
	CAUSE
	=====
	
	The problem is that forms registry allocates a 1024 byte buffer to read in all
	the keys under the [Properties] section. We are writing out the keys as
	Property'N' and this uses up that buffer quickly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	In Microsoft Exchange Service Pack 4 (SP4), these files are not automatically
	installed by the Setup program. You need to copy two files, Msajt200.dll and
	Vbfsm.dll, to your Windows\System directory for Windows 3.x and Windows 95 or
	the <system-root>\System directory for Windows NT.
	
	Please note that since these are 16-bit files, they should NOT be copied to the
	System32 directory. For additional information about how to obtain this file,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q152858 XGEN: How to Obtain Exchange Server 4.0 U.S. Service Pack 2
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
