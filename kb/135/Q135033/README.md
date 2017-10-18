---
layout: page
title: "Q135033: PC NTMMTA: Service Account Cannot Be a Group"
permalink: kb/135/Q135033/
---

## Q135033: PC NTMMTA: Service Account Cannot Be a Group

	Article: Q135033
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Microsoft Windows NT Multitasking MTA (NT MMTA), you cannot
	assign the Service Account to a group. The Service Account option must be a
	user. This user can belong to a group that has log on as service privileges to
	centralize administration, but it must be a user.
	
	If a group is entered in the Service Account option from the Edit Service dialog
	box, then you will get the following error when you start the service:
	
	  Could not start the MS Mail External - (instance)
	  service on \\computername.
	
	  Error 1069: The service did not start due to logon failure.
	
	MORE INFORMATION
	================
	
	When the Services start, they log on. Although most services must log on to the
	system account, some services can be configured to log on to special user
	accounts. (Usually, of the default Services provided with Windows NT, only the
	Directory Replicator and Schedule Services will be configured in this manner.)
	
	A user account used to log on a Service should be created in the User Manager
	specifically for that purpose. Make certain that the user account has the
	Password Never Expires option selected, and it has membership in the appropriate
	groups. The particular group memberships assigned will depend on the operations
	that must be accomplished by the service.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
