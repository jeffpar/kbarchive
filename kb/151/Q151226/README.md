---
layout: page
title: "Q151226: FPNW Grace Logins Are Not Reset When Password Is Changed"
permalink: /kb/151/Q151226/
---

## Q151226: FPNW Grace Logins Are Not Reset When Password Is Changed

	Article: Q151226
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your NetWare compatible password on a File and Print Services for NetWare (FPNW)
	server expires. If you type the password incorrectly several times, using up all
	or most of the grace logins, and then change the password, you may be locked out
	next time you type the password.
	
	CAUSE
	=====
	
	A password change does not reset the grace logins properly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: fpnw netware setpass password prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	
