---
layout: page
title: "Q192696: Grace Logins Are Not Reset on FPNW"
permalink: kb/192/Q192696/
---

## Q192696: Grace Logins Are Not Reset on FPNW

	Article: Q192696
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Grace Logins are not reset when the client logs on to a File and Print
	Services for NetWare (FPNW) server and the password has expired. The Grace
	Logins should be reset if a user chooses to change his or her password instead
	of logging on using the old password.
	
	CAUSE
	=====
	
	Windows NT File and Print Services for NetWare does not maintain the Grace Login
	counter properly. Windows NT does not reset the password grace logon count when
	the user changes his or her password.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbServicesNetware400 kbServicesNetwareSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
