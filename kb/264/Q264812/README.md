---
layout: page
title: "Q264812: Client Add Pack Does Not Recognize Small Business Server"
permalink: kb/264/Q264812/
---

## Q264812: Client Add Pack Does Not Recognize Small Business Server

	Article: Q264812
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Small Business Server 4.0 (SBS) on a computer running
	Microsoft Windows NT Server 4.0, and you try to install the Client Add Pack, you
	may not be able to do so and you may receive the following error message:
	
	  Your computer is not running Microsoft BackOffice Small Business Server. You
	  can only add licenses to a computer running Small Business Server.
	
	CAUSE
	=====
	
	This behavior is by design. You cannot install the SBS Client Add Pack on a
	Windows NT Server 4.0 that was not initially installed as an SBS Server.
	
	
	RESOLUTION
	==========
	
	If the SBS install was converted to full Windows NT Server, you cannot apply
	additional SBS Client Add Packs. You can only install SBS Client Add Pack on a
	valid SBS Server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : :4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	
