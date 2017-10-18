---
layout: page
title: "Q139840: Users Logging Into FPNW are Not Ask to Change Their Password"
permalink: kb/139/Q139840/
---

## Q139840: Users Logging Into FPNW are Not Ask to Change Their Password

	Article: Q139840
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you use NWCONV.EXE to migrate NetWare users to a backup domain controller
	(BDC) with the "User must change password" option selected, when users log in to
	the BDC/FPNW computer and changes their password, the "NetWare compatible
	password expires" box in User Manager's NWCompat option is cleared on the
	primary domain controller (PDC) but not the BDC. When users log in again to
	Microsoft File and Print Services for NetWare (FPNW) on the BDC they are not ask
	to change their password again. Synchronizing the domain controller does not
	resolve the problem.
	
	This problem does not affect the operation or functionality of FPNW.
	
	WORKAROUND
	==========
	
	To work around this problem, select User Manager on the BDC and clear the
	"NetWare compatible password expires" option in the User Manager NWCompat
	option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and File
	Print Services for NetWare version 192. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
