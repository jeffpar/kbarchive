---
layout: page
title: "Q177962: SBS Client Add Pack Cannot Be Reused to Upgrade SBS Licenses"
permalink: kb/177/Q177962/
---

## Q177962: SBS Client Add Pack Cannot Be Reused to Upgrade SBS Licenses

	Article: Q177962
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork sbs
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft BackOffice Small Business Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft BackOffice Small Business Server Client Add Pack can only be used
	once to increase the number of client licenses. If the License Add Pack is used
	to bring the server up from a 5 user license to a 10 user license, it will only
	bring the server up to 10 user license and cannot be reused to increase the
	number of user licenses. The disk can, however, be reused if the server has to
	be reinstalled and the number of client licenses needs to be increased to the
	original number.
	
	
	
	MORE INFORMATION
	================
	
	If an attempt is made to reuse the Add Pack (for example, to upgrade from 10
	licenses to 15 licenses), the following message will be displayed:
	
	  This Microsoft Small Business Server Client Add Pack disk was already
	  used to increase client licenses from 5 to 10. This disk can only be
	  reused to restore licenses from 5 to 10 users.
	
	The Microsoft BackOffice Small Business Server has a maximum of 25 user licenses.
	Furthermore, if a customer buys a pack with 25 licenses or upgrades the server
	licenses, using SBS Client Add Packs, to a total of 25 licenses, when he or she
	attempts to apply a new SBS Client Add Pack, the customer will receive a message
	informing the customer that the maximum number of licenses has been exceeded and
	the process will not complete successfully.
	
	
	Additional query words: bumppack
	
	======================================================================
	Keywords          : kbnetwork sbs 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
