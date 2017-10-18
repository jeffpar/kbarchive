---
layout: page
title: "Q145594: How to Use the FPNWAUTH.EXE Utility"
permalink: kb/145/Q145594/
---

## Q145594: How to Use the FPNWAUTH.EXE Utility

	Article: Q145594
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a master domain model, if the File and Print Services for NetWare (FPNW)
	server is installed in a Resource domain and the user accounts reside in the
	Accounts domain, you can use the FPNWAUTH.EXE utility to enable the domain
	controllers in the Accounts domain to authenticate logon attempts by FPNW users
	from NetWare client computers.
	
	You may download the FPNWAUTH.EXE utility from one of the following services:
	
	- CompuServe
	
	  1. GO WINNT
	
	  2. Go to the FPNW/DSMN download area
	
	  3. Display results and download
	
	- Internet (anonymous FTP)
	
	  1. ftp ftp.microsoft.com
	
	  2. Go to the following location:
	
	  /bussys/winnt/fpnw-unsup-ed/utilities/fpnwauth
	
	
	MORE INFORMATION
	================
	
	FPNWAUTH.EXE is a command line utility you can use to enable or disable FPNW
	client authentication on a domain controller. This utility enables a domain
	controller on which the FPNW Admin Tools Only have been installed to
	authenticate logon attempts by FPNW users from NetWare client computers. By
	using FPNWAUTH.EXE, you do not need to purchase and install the full FPNW
	product on every domain controller that may authenticate FPNW users.
	
	NOTE: FPNWAUTH.EXE should NOT be run on an NT 4.0 Server.
	
	
	If you want to enable the domain controller to authenticate FPNW users, type the
	following at the command line:
	
	" FPNWAUTH " (without the quotation marks)
	
	If you want to disable the domain controller from authenticating FPNW users, type
	the following at the command line:
	
	" FPNWAUTH /D " (without the quotation marks)
	
	If you want all domain controllers in a domain to authenticate FPNW users:
	
	1. Install the full File and Print Services for NetWare product on at least one
	  domain controller in the domain (This can be, but does not have to be, the
	  primary domain controller).
	
	2. On all domain controllers that do not have full File and Print Services for
	  NetWare:
	
	  a. Install the FPNW Admin Tools (using the Add Software button in Control
	     Panel Network).
	
	  b. Run FPNWAUTH.EXE to enable FPNW authentication.
	
	  c. Reboot the computer.
	
	Once you have completed the steps above for all domain controllers in the domain,
	the domain correctly authenticates FPNW user logon requests passed through from
	trusting domains and standalone servers in this domain.
	
	Additional query words: prodnt novell
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	
