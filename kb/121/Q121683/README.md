---
layout: page
title: "Q121683: SMS Site Configuration Manager Internal Error Codes"
permalink: /kb/121/Q121683/
---

## Q121683: SMS Site Configuration Manager Internal Error Codes

{% raw %}

	Article: Q121683
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbScheduler kbSCMan smsscheduler smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Systems Management Server Site Configuration Manager has internal error code
	information that is separate from the Event Codes used when logging events. This
	article documents the Site Configuration Manager internal error and information
	codes. These codes should be used in conjunction with actual event data.
	
	MORE INFORMATION
	================
	
	Internal Error Codes
	--------------------
	
	7400 INSTALL_ACCTPSWDCHANGEERROR    - Error changing acct/pswd for server
	7401 INSTALL_CANTCOPYCOMPONENTFILES - Copy file error for component on svr
	7402 INSTALL_CANTCOPYLOGONSCRIPT    - Error copying logon script files
	7403 INSTALL_CANTCREATECOMPONENTDIR - Create dir error for component on svr
	7404 INSTALL_CANTCREATEINBOXES      - Error creating inbox dir. or share
	7405 INSTALL_CANTENUMSHARES         - Error in enum. of shares for svr
	7406 INSTALL_CANTFINDOUTBOXSERVER   - Outbox server not in network
	7407 INSTALL_CANTSTARTCOMPONENT     - Error installing/starting component
	7408 INSTALL_ERRORINSYSMAPFILE      - Syntax/content error in sys. map file
	7409 INSTALL_NOEXPORTSERVER         - No logon svr to use to export scripts
	7410 INSTALL_NOTENOUGHMEMORY        - Insufficient memory; alloc failed
	7411 INSTALL_OUTBOXCREATEERROR      - Error creating outbox share or dir.
	7412 INSTALL_SERVERINOTHERSITE      - Server already used in other site
	7413 INSTALL_SERVERSCRIPTSERROR     - List of svrs whose script changed(NW)
	7414 INSTALL_USERSCRIPTSERROR       - List of users w/error changing script
	                                     (NT/LM)
	7415 INSTALL_CANTENUMUSERS          - Error enumerating users
	7100 SITEINS_BADDIRECTORY           - Site ctrl file directory not valid
	7101 SITEINS_BADDOMAINTYPE          - Cannot determine domain NOS; domain
	                                     ignored
	7102 SITEINS_CANTENUMSHARES         - Error in enum. of shares for svr
	7103 SITEINS_CANTFINDDOMAIN         - Error in enum. of servers for domain
	7104 SITEINS_CANTFINDSERVER         - Sserver from specified server list
	                                     not in network
	7105 SITEINS_CANTSAVEBASEID         - On de-install unable to save next
	                                     available SMS ID
	7106 SITEINS_ENUMSERVERINACTIVE     - Svr from enumeration not in network
	7107 SITEINS_NEVERCTRLINFILE        - Can't watchdog because never received
	                                     site ctrl file
	7108 SITEINS_NOSERVERSINDOMAIN      - No servers found in domain
	7109 SITEINS_NOTENOUGHMEMORY        - Insufficient memory, alloc failed
	7110 SITEINS_NOTSETUP               - Ident. section of registry not setup
	7111 SITEINS_SITECTRLINERROR        - Error reading site control file
	7112 SITEINS_SITECTRLOUTERROR       - Error writing site control file
	7113 SITEINS_SITECTRLSENDERROR      - Error sending site control file
	7114 SITEINS_USERGROUPMIFERROR      - Error writing user group mif file
	7115 SITEINS_CANTENUMUSERS          - Error in enum. of users for domain
	
	Internal Information Codes
	--------------------------
	
	7200 SITEINS_ACCTPSWDCHANGEDONE     - Acct/pswd done for all services
	7201 SITEINS_CANTFINDCOMPONENTSERVER- Server not in network for component
	                                     or sender
	7202 SITEINS_SITECTRLDIFFPARENT     - Site ctrl file differs from registry
	7203 SITEINS_SQLACCTPSWDCHANGEDONE  - SQL acct/pswd/server change done
	7500 INSTALL_CANTFINDVOLUME         - Error finding drive w/free space
	7501 INSTALL_SERVERSCRIPTSCHANGED   - List of svrs whose script changed(NW)
	7502 INSTALL_USERSCRIPTSCHANGED     - List of users whose script changed
	                                     (NT/LM)
	
	Site Control File Error Codes
	-----------------------------
	
	NOTE: These codes are also used as file extensions to rename bad input files, so
	they must remain 3 digits due to 8.3 filenames.
	
	710 SC_FILE_CANTREAD                - Can't open/read .ct1
	711 SC_FILE_BADLOCALTRANS           - Unknown local transaction only
	712 SC_FILE_BADTRANS                - Unknown transaction only
	713 SC_FILE_BADFILETYPE             - Unknown file type
	714 SC_FILE_BADSITEINFO             - No site info or mismatch site code,
	                                     install dir, etc.
	715 SC_FILE_NODOMAIN                - No domains in file
	716 SC_FILE_BADACCT_NOADDR          - No acct info or no valid addresses
	717 SC_FILE_NOSQL                   - No SQL info for smart site
	718 SC_FILE_NOCOMPONENT             - No components or no senders
	
	These error codes and the associated meaning are published to provide further
	insight into the reason an error is being generated. The information provided
	here should be used in conjunction with normal troubleshooting techniques (log
	files, event logs, etc.) to reach a solution to the problem. Specific solutions
	are not provided in this article due to the fact that errors may be cause for
	numerous reasons. To understand why an error is occuring, combine this
	information with information generated elsewhere (logs, events, etc.).
	
	Additional query words: config sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbScheduler kbSCMan smsscheduler smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : :1.0,1.1
	
	=============================================================================
	

{% endraw %}
