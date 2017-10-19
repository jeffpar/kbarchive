---
layout: page
title: "Q173669: NetWare Users or Groups Not Migrated"
permalink: /kb/173/Q173669/
---

## Q173669: NetWare Users or Groups Not Migrated

	Article: Q173669
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you perform a trial migration from a NetWare 4.10 or 4.11 server using the
	Migration Tool for NetWare (Nwconv.exe), the migration summary window appears
	with the following message:
	
	Transfer Completed
	Totals
	Migrations Completed  1
	Groups Transferred:   0
	Users Transferred:    0
	Files Transferred:    xxxxxx
	Errors:               2
	
	In addition, the Error.log file reports:
	
	  [NWServer Name -> NT Server Name]
	  Error: Getting Groups on Server: NWServer Name
	  Error: Getting Users on Server: NWServer Name
	
	CAUSE
	=====
	
	Even though Gateway Services for NetWare (GSNW) and Client Services for NetWare
	(CSNW) support NDS-style logon capabilities on Windows NT version 4.0, the
	Migration Tool for NetWare does not. You must have bindery emulation configured
	on the NetWare server you want to migrate. With bindery services, NDS imitates a
	flat structure for leaf objects within a set of Organization (O) and
	Organizational Unit (OU) objects.
	
	Thus, when bindery services are enabled, all objects within the specified
	container's bindery context can be accessed both by NDS objects and by
	bindery-based servers and client workstations.
	
	RESOLUTION
	==========
	
	To check whether bindery emulation has been configured on the NetWare server to
	be migrated, follow these steps:
	
	1. Load Servman at the NetWare server console.
	
	2. Select Server Parameters, and then select Directory Services.
	
	3. In the Directory Service Parameters, select Bindery Emulation. If there is no
	  SET statement to the right of this entry, bindery emulation has not been
	  enabled.
	
	NOTE: You can also type the command CONFIG at the NetWare server console to find
	out if a bindery context has been set.
	
	The bindery context is the container object where bindery services are set. You
	can change the bindery context by using the SET or SERVMAN server utility to set
	the relevant parameters. Specify one or more containers to be used by NetWare
	Directory Services when it provides bindery services. The containers should have
	a maximum of 256 characters and a maximum of 16 contexts, and should use
	semicolons to separate multiple contexts.
	
	Examples:
	
	SET BINDERY CONTEXT=ACCT.HQ.ACME
	SET BINDERY CONTEXT=OU=SALES.O=COMPANY;OU=AR.OU=ACCOUNTING.O=COMPANY
	
	To enable bindery emulation, use one of the following methods:
	
	Method One:
	
	1. While in Servman, click Server Parameters, then click Directory Services, and
	  then click Bindery Emulation.
	
	2. When you press ENTER, a text entry box will appear; type in the following set
	  statement, substituting the name of the organizational unit from which users
	  will be pulled for OU, and substituting the name of the organization (TREE)
	  where the organizational unit resides for O:
	
	  SET BINDERY CONTEXT = OU=USERS.O=TREE
	
	Method Two:
	
	1. Click Install NLM (Load Install), and then click Edit Autoexec.ncf File.
	
	2. Restart the NetWare server using the Down and Exit commands.
	
	After you use one of these procedures, log off the Windows NT server, then log on
	again. Trial migration should proceed normally.
	
	Additional query words: migrate nwconv convert
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
