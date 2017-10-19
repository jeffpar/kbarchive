---
layout: page
title: "Q313693: 3270 Client (Win3270.exe) Doesn't Enforce User/Group Assignments"
permalink: /kb/313/Q313693/
---

## Q313693: 3270 Client (Win3270.exe) Doesn't Enforce User/Group Assignments

	Article: Q313693
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 3270 client (Win3270.exe) allows a user to open multiple 3270 sessions even
	though only a single instance of a 3270 logical Unit (LU) pool is assigned to
	the user/group record in the Host Integration Server (HIS) 2000 configuration.
	
	CAUSE
	=====
	
	The 3270 client was not updated to enforce user/group assignments after it was
	enhanced to support multiple 3270 sessions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	MORE INFORMATION
	================
	
	If a single instance of a 3270 LU pool is assigned to a user or group, the user
	should be restricted to opening a single 3270 session. To grant access to
	multiple pooled 3270 sessions, an HIS 2000 administrator can assign multiple
	instances of the 3270 LU pool to the user or group.
	
	This problem has been observed with some third-party emulators, as described in
	the following Microsoft Knowledge Base article:
	
	  Q158775 3270 Emulator Fails to Enforce SNA User/Group Assignments
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
