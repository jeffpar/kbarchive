---
layout: page
title: "Q149559: FPNW LOGIN.EXE Doesn't Handle Password Expiration"
permalink: /kb/149/Q149559/
---

## Q149559: FPNW LOGIN.EXE Doesn't Handle Password Expiration

	Article: Q149559
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Login.exe file in Microsoft File and Print Services for NetWare (FPNW) does
	not prompt the user to change the password after the password has expired. This
	only occurs when the exit command is entered into the system login script (the
	exit command is put into the system login script to ensure no user scripts are
	run at login).
	
	CAUSE
	=====
	
	The Login.exe file ignores the response of the client logging on.
	
	WORKAROUND
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	Remove the exit command from the system login script.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: FPNW login exit script
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	
