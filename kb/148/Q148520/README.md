---
layout: page
title: "Q148520: XCLN: Creating Roving Users on MS-DOS Client"
permalink: kb/148/Q148520/
---

## Q148520: XCLN: Creating Roving Users on MS-DOS Client

	Article: Q148520
	Product(s): Microsoft Exchange
	Version(s): MS-DOS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange has the ability to support roving users who use the Microsoft
	Exchange client for MS-DOS. Roving users are individuals that are not tied to a
	specific computer. They need access to their Microsoft Exchange accounts
	regardless of their physical location on the network.
	
	MORE INFORMATION
	================
	
	To create an environment where Microsoft Exchange client for MS-DOS users can
	access their mail from any computer on the network, administrators must run the
	following steps:
	
	1. Create server based home directories on the network for each roving user and
	  assign logon scripts that will automatically connect the user to their home
	  directory.
	
	2. Run the Microsoft Exchange Client for MS-DOS Setup program and select the
	  Shared installation option.
	
	3. Update each user's Windows NT logon scripts with the following lines:
	
	        SET EXCHANGE=H:\ 
	        SET RPC_BINDING_ORDER=ncalrpc,ncacn_np,ncacn_ip_tcp,ncacn_spx,netbios
	
	  where H:\ is the path to the user's home directory on the network. Depending
	  on the protocols installed on the network, you might need to modify the RPC
	  Binding Order.
	
	Each user will then need to run the following steps to complete the installation
	process:
	
	1. Log into the Windows NT domain and connect to the share point where the
	  Microsoft Exchange client for MS-DOS has been installed by the Administrator.
	
	2. Run the Microsoft Exchange client for MS-DOS Setup program and select the
	  Workstation installation option. When you are prompted to modify the
	  Autoexec.bat file, select the option NOT to modify the file. This would
	  conflict with the information in your logon script.
	
	Each user should now be able to go to any workstation, connect to the share point
	containing the network installation of the MS-DOS Exchange client and run
	Exchange.exe to bring up the Microsoft Exchange client for MS-DOS. The user's
	mail will always be on the Microsoft Exchange Server based store because the
	Microsoft Exchange client for MS-DOS does not permit local .PST files.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword3 kbExchange400DOS kbExchange500DOS
	Version           : MS-DOS:4.0,5.0
	
	=============================================================================
	
