---
layout: page
title: "Q300432: HOWTO: Promote a Member Server Running IIS to a DC Running IIS"
permalink: kb/300/Q300432/
---

## Q300432: HOWTO: Promote a Member Server Running IIS to a DC Running IIS

	Article: Q300432
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbgrpdsvc
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the implications of promoting an Internet Information
	Services (IIS) 5.0 computer that is a member server of a domain to a domain
	controller, and what you must do if you want the IIS member server to remain a
	Web server after you promote it to a domain controller.
	
	It is recommended that you run IIS 5.0 on either a member server of a domain, or
	a workgroup server (where no domain is present).
	
	MORE INFORMATION
	================
	
	After you execute Dcpromo.exe to start the domain controller promotional
	process, you are warned that all user accounts on the computer will be deleted.
	This includes the two user accounts that IIS uses, IUSR_<computer_name>
	and IWAM_<computer_name>.
	
	This is by design. To resume using IIS after the computer has been promoted to a
	domain controller, you can either use existing domain accounts for the IUSR and
	IWAM accounts, or you can create these accounts. You need to ensure that the
	anonymous user account information in the metabase can be accessed within the
	Internet Services Manager at the Master Properties level, as well as by the IIS
	Out-Of-Process Pooled Applications package that is within Component Services, or
	by any other package that you have set to use the IWAM account.
	
	You should ensure that you grant the following user rights for these accounts:
	
	- Access this computer from the network.
	
	- Log on as a batch job.
	
	- Log on locally.
	
	You also need to assign the appropriate NTFS permissions to any resource that
	will be accessed anonymously.
	
	Additional query words: DCPROMO,IIS,Upgrade
	
	======================================================================
	Keywords          : kbgrpdsvc 
	Technology        : kbiisSearch
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
