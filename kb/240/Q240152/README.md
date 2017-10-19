---
layout: page
title: "Q240152: XADM: What Determines a Limited Store in Exchange Server 5.5"
permalink: /kb/240/Q240152/
---

## Q240152: XADM: What Determines a Limited Store in Exchange Server 5.5

	Article: Q240152
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 09-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Whether or not an Exchange Server 5.5 information store is unlimited is
	determined by a new non-editable directory attribute called Type, which is
	encoded.
	
	
	
	MORE INFORMATION
	================
	
	How to Determine Whether the Information Store Is Limited or Unlimited
	----------------------------------------------------------------------
	
	To distinguish between Exchange Server Standard Edition (limited information
	store) and Exchange Server Enterprise Edition (unlimited information store),
	check the Windows NT Server Event Viewer application log upon startup.
	
	The following event is logged in the application log when the information store
	starts on a computer running the Standard Edition:
	
	Event ID  1216<BR/>
	Source:   MSExchangeIS Private<BR/>
	Type:     Information<BR/>
	Category: General<BR/>
	Description: Information store with limited storage capacity enabled.
	
	The following event is logged in the application log when the information store
	starts on a computer running the Enterprise Edition:
	
	Event Id:  1217<BR/>
	Source:    MSExchangeIS<BR/>
	Type:      Information<BR/>
	Category:  General<BR/>
	Description: "Information store with unlimited capacity started"<BR/>
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q173889 XADM: Determining if Exchange Server Enterprise or Standard Version
	  Is Installed
	
	NOTE: When the 16-gigabyte (GB) limit is reached on an Exchange Server 5.5
	Standard version computer, the user may receive the following Event ID:
	
	  Event ID:1112
	  Source: MSExchangeIS
	  Description:
	  The database has reached the maximum allowed size. Attempting to stop the
	  Microsoft Exchange Information Store.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q185457 XADM: Information Store Shuts Down; Database at Maximum Size
	
	How to Change the Type Attribute
	--------------------------------
	
	The Type attribute can only be changed by running Setup.exe from an Enterprise
	Edition CD (SrvRmax.exe if using Select CDs), and clicking Reinstall. This
	changes the Type attribute within the Dir.edb file, giving you an unlimited
	store.
	
	NOTE: You need to reapply the last Exchange Server service pack that had been
	applied to the server before the reinstallation, after the reinstallation is
	finished.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
