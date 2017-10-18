---
layout: page
title: "Q151978: XADM: EcPropSize-MAPI_E_NOT_ENOUGH_MEMORY Reported by ISINTEG"
permalink: kb/151/Q151978/
---

## Q151978: XADM: EcPropSize-MAPI_E_NOT_ENOUGH_MEMORY Reported by ISINTEG

	Article: Q151978
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:97; winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you import a large number of contacts into the Outlook Contacts folder,
	the folder becomes unusable or inaccessible. The Outlook client may report
	out-of-memory errors when you use the Contacts folder.
	
	Also, when you run ISINTEG -FIX -PRI -VERBOSE against the private information
	store, you may see error messages similar to the following:
	
	  Starting test 2 of 24, 'Restriction Tables'
	
	  Error: ecPropSize-MAPI_E_NOT_ENOUGH_MEMORY, Failed to open ptagSearchFIDs on
	  fid-0001-000000FB07D8.
	
	However, Isinteg.exe fails to correct the problem.
	
	CAUSE
	=====
	
	By creating a separate search/restrict folder for each contact, the Outlook
	client is creating a folder property larger that 32 KB. The Microsoft Exchange
	information store does not check for or handle a folder property larger than 32
	KB.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The Information Store will be corrected to check for and handle folder
	properties over 32 KB; this will prevent future occurrences of this problem.
	Isinteg.exe will also be corrected to fix the folder property in information
	stores that have already encountered this problem.
	
	Additional query words: hang
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:97; winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
