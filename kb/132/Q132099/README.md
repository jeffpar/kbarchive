---
layout: page
title: "Q132099: PC NTMMTA: Cannot Use NT System Account with NT MMTA"
permalink: /kb/132/Q132099/
---

## Q132099: PC NTMMTA: Cannot Use NT System Account with NT MMTA

	Article: Q132099
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Windows NT System account cannot be used as the service account
	with the Microsoft Mail Multitasking MTA for Windows NT (NT MMTA).
	
	The LocalSystem account is the account used by the operating system; it has a
	security identifier (SID) that contains all zeroes. By default, this account has
	almost complete control of the local computer, but no rights in the network.
	
	Because this user account has no rights to access the network, the following
	error will occur when you start the service:
	
	  Could not start the MS Mail External - (Instance Name) service on \\Computer
	  Name
	
	  Error 2140: An internal Windows NT error occurred.
	
	This error can also occur when the universal naming convention (UNC) is not valid
	in the Home PO Path (UNC): field.
	
	When the service is started the NT MMTA allows Win32 to validate the UNC;
	however, the NT MMTAs Service Type is what validates that the path specified is
	actually a valid PO.
	
	WORKAROUND
	==========
	
	To workaround this problem, create a Windows NT user and assign the Log On as
	Service right.
	
	To assign the service account the right to log on as a Windows NT service, follow
	the steps below:
	
	1. From the Administrative Tools group, run User Manager.
	
	2. From the Policies menu, choose User Rights.
	
	3. In the User Rights Policy dialog box, select the Show Advanced User Rights
	  check box. Select Log On as a Service, and choose the Add button.
	
	  If Log On as a Service does not appear, make sure the Show Advanced User
	  Rights check box is selected.
	
	4. In the Add Users and Groups dialog box, select the domain name. Select the
	  Show Users button. Select the user account, and select the Add button.
	
	  If the newly created service account does not appear in the Names box, make
	  sure the List Names From box displays the computer name of the local server
	  under which the user was logged onto.
	
	5. When the User Rights Policy dialog box displays the service account name in
	  the Grant To box, select the OK button.
	
	6. When the User Rights Policy dialog box correctly displays the service account
	  with the Log On as a Service, select the OK button.
	
	  The service account for this site is now ready to use.
	
	Additional query words: 3.50 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
