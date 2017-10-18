---
layout: page
title: "Q99380: NT Account Validation for PCs in the Same Domain"
permalink: kb/099/Q99380/
---

## Q99380: NT Account Validation for PCs in the Same Domain

	Article: Q99380
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article addresses some questions on Windows NT account validation. For a
	model, it uses four PCs in the same domain on a LAN:
	
	    NTAS (PDC)                    NTAS (BDC)
	         |                        |
	         +----+----------+----------+
	              |          |
	            WinNT       WFWG
	
	NTAS (PDC) = NT primary domain controller
	NTAS (BDC) = NT backup domain controller
	WinNT      = Windows NT
	WFWG       = Windows for Workgroups
	
	1. Q. Does the primary NTAS (PDC) duplicate the account table to the backup NTAS
	  (BDC)?
	
	  A. Yes. The PDC replicates the account database to the BDC.
	
	2. Q. Does the WinNT machine function as a standalone server?
	
	  A. No. In the configuration pictured above, the WinNT machine is not
	  standalone, but rather a workstation on this domain. The user and machine
	  accounts are authenticated by the PDC or BDC on this domain or on trusted
	  domains.
	
	3. Q. The WFWG client logs on to the NTAS as default. How do you enable the WFWG
	  computer to access both WinNT and NTAS?
	
	  A. Once a user account authentication takes place, that user can access any
	  resource on the domain--within the range of permissions found in the user
	  account profile--by issuing a simple NET USE to the resource. The logon is
	  logging into the domain, which is really the same as LAN Manager. From there,
	  the user can access the Windows NT machine with a NET USE.
	
	4. Q. To access any Windows NT resource, you must log on using a single user
	  account and password, so how does a user access the WinNT machine and NTAS
	  machine with different privileges, such as ADMIN for the WinNT machine and
	  USER for NTAS?
	
	  A. First of all, no individual administrator-level permissions are given on
	  any particular NTAS machine in a domain separate from domain-wide privileges.
	  That is, all NTAS machines in a domain are either primary domain controllers
	  or backup domain controllers, and, as such, all administrator-level
	  permissions are domain wide and cannot be specifically aimed at a certain
	  NTAS server.
	
	  Here is how the permissions work with Windows NT: A user is granted privileges
	  based on the user account profile on the Domain database. This is for
	  domain-wide access, but each WinNT machine can be set up to give a user
	  different privileges locally. For example, DOMAIN\user may have administrator
	  privileges on WinNT1 but only user privileges on WinNT2 (where WinNT1 and
	  WinNT2 are workstations on the domain called DOMAIN). And, similar to LAN
	  Manager, all WinNT and NTAS machines can set up shares, to which privileges
	  can be attached.
	
	Additional query words: wfw wfwg 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2 domain
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
