---
layout: page
title: "Q150733: FPNW Groups Not Recognized from Trusted Domain"
permalink: kb/150/Q150733/
---

## Q150733: FPNW Groups Not Recognized from Trusted Domain

	Article: Q150733
	Product(s): Microsoft Programming Utilities
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NetWare clients running login scripts that contain IF MEMBER_OF statements do
	not work properly when run from File and Print Services for NetWare (FPNW)
	servers participating in a master domain model. The IF MEMBER_OF statements are
	always false, as if the user did not belong to any of the groups being tested.
	
	
	CAUSE
	=====
	
	FPNW uses pass-through authentication for verifying user accounts only. Group
	accounts are only verified locally and, therefore, must be in the local bindery
	of the FPNW server.
	
	Adding the user to a group account that exists locally does not work around the
	problem because the user accounts belong to the master domain, not the resource
	domain. Therefore, there is no user-to-group relationship in the local bindery
	of the FPNW server in the resource domain.
	
	The problem is also true for member servers in a single domain. Group membership
	is not verified from the domain account database because the user and the group
	accounts do not exist in the local bindery of the FPNW server.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Windows NT service pack. This fix is
	available only for MS-DOS based clients.
	
	This fix should have the following time stamp:
	
	  09/10/97  04:47p               244,128 fpnw.dll    (Intel)
	  09/10/97  04:47p               222,656 fpnwsrv.sys (Intel)
	  09/10/97  04:45p               438,544 fpnw.dll    (Alpha)
	  09/10/97  04:44p               437,488 fpnwsrv.sys (Alpha)
	  09/10/97  04:43p               265,676 login.exe   (Intel or Alpha)
	
	A fix is not available for other FPNW clients at this time. To work around the
	problem with Windows 95 or Windows NT clients, you must use a Windows NT logon
	script to test for group membership.
	
	To test group memberships in a Windows NT logon script, you can use the
	Ifmember.exe utility from the Windows NT resource kit. For information on using
	this utility, see the Resource Kit Utilities Overview help file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 4.0. A supported fix is now available, but has not been fully
	regression tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next service pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	Microsoft has confirmed this to be a problem in File and Printer Services for
	NetWare version 3.51. We are researching this problem and will post additional
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetware400 kbServicesNetwareSearch kbFPNW351
	Version           : :3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
