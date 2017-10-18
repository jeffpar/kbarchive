---
layout: page
title: "Q139499: TN3270 Server Doesn't Dynamically Recognize LUA LU Config Change"
permalink: kb/139/Q139499/
---

## Q139499: TN3270 Server Doesn't Dynamically Recognize LUA LU Config Change

	Article: Q139499
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If LUA LUs are added or removed using SNA Server Admin, the TN3270 Server
	configuration utility must be re-run to recognize these changes. The TN3270
	server does not dynamically adjust to LUA LU configuration changes.
	
	
	MORE INFORMATION
	================
	
	TN3270 Server does not update the number of sessions available (Sessions=)
	dynamically. To update TN3270 Server after you add/delete LUs to SNA Server,
	choose Config from the TN3270 Administrator. You are prompted by a dialog box
	stating "SNA Server configuration has been changed since last update." This
	dialog box is displayed when the number of LUs has changed for an SNA resource
	after the resource has been configured for TN3270 Service. The conflicting
	values are displayed. By choosing the default entry, you allow TN3270 Service to
	resolve the conflict. Otherwise enter the correct value for your environment.
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211
	Version           : WINDOWS:2.11
	Issue type        : kbinfo
	
	=============================================================================
	
