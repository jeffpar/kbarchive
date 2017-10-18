---
layout: page
title: "Q171040: Incorrect Domain Name for SNAPMP Causes Events 22 and 1314"
permalink: kb/171/Q171040/
---

## Q171040: Incorrect Domain Name for SNAPMP Causes Events 22 and 1314

	Article: Q171040
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing all the required components for Host Security Integration (HSI)
	and configuring a new Host Security Domain for the first time, you may get the
	following pop up error when opening Host Account Manager.
	
	  Unable to locate Windows NT Password Synchronization Service in the target
	  Windows NT domain. To browse other domains, use the "Select Domain" option of
	  the "File" menu.
	
	The Windows NT Event Viewer Application log will record the following two warning
	messages:
	
	  Event ID 22 - Host Process was unable to create connection handle to connect
	  to PMP
	
	  Event ID 1314 - Unable to locate a requested resource Supplied code 0
	
	CAUSE
	=====
	
	During the installation of the Windows NT Password Synchronization Service
	(SNAPMP), you are prompted to type in a list of Domain(s) which contain the Host
	Account Cache (SNADATABASE). If something other than the Domain Name is
	inadvertently entered in this field (such as the Server Name), SNAPMP will be
	unable to register it's location with the Master DataBase where these accounts
	reside.
	
	If you trace on the SNA WinNT Account Synchronization (hsiint1.atf), when trying
	to start the Host Account Manager, you will see where the RPC failure occurs.
	
	  RegisterServer: SendRegisterMessage to returned error: STI - RPC Client
	  object connect was called without specifying network address and no registry
	  default was found. , trying again RegisterServer: Ssecond SendRegisterMessage
	  to returned error: STI - RPC Client object connect was called without
	  specifying network address and no registry default was found.
	  RpcServerInitialize: StiSrvrRegister error for server PMP, STI - Unable to
	  register server with MDB.
	
	RESOLUTION
	==========
	
	In order to correct this problem, you must edit the registry and change the
	MdbDomains key to reflect the correct Domain(s).
	
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	    HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaPMP\Parameters
	
	    MdbDomains: REG_MULTI_SZ: <Domain_Name(s)>
	
	NOTE: Domain names must be entered on separate lines. An unlimited number of
	additional Windows NT domain names can be added using this registry setting.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
