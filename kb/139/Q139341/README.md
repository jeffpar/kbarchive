---
layout: page
title: "Q139341: FTP Server Interaction with Guest Account"
permalink: /kb/139/Q139341/
---

## Q139341: FTP Server Interaction with Guest Account

{% raw %}

	Article: Q139341
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FTP server in Windows NT 3.51 Server (non-domain controller) can be
	configured to validate users using the domain account data base or the local
	account data base. However, the guest account settings in both data bases must
	be correctly configured.
	
	MORE INFORMATION
	================
	
	By default, an FTP client is validated against the local accounts data base. To
	enable a Windows NT Server domain member (non-DC) to validate ftp clients
	against the domain accounts data base, you must add the DefaultLogonDomain
	parameter (value type REG_SZ) to the following registry key location:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\FTPSVC\Parameters
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To do this, run the Registry Editor (REGEDT32.EXE). From the HKEY_LOCAL_MACHINE
	subtree, go to the key:
	
	  \System\CurrentControlSet\Services\FTPSVC\Parameters
	
	Choose ADD VALUE from the Edit menu. Enter in DefaultLogonDomain as the value
	name with a data type of REG_SZ. The String needs to be the domain name to
	validate users against. If you are using the MyDomainName domain to validate
	users, the entry would look like the following:
	
	  DefaultLogonDomain:REG_SZ:MyDomainName
	
	If you use the guest account for anonymous connections and/or you wish to allow
	access to user names not in the domain data base, you must pay special attention
	to whether the guest account is enabled or disabled on both the domain account
	data base AND the local account data base.
	
	Below is a table describing the behavior of the ftp server when guest accounts
	are enabled or disabled on the local machine and domain:
	
	  Guest Account Setting   FTP Server Behavior
	  ---------------------   --------------------------------------------
	  Local      Domain       Anonymous Users   Random User (not in domain
	  Guest      Guest        Allowed Access?   database) Allowed Access?
	  --------   --------     ---------------   --------------------------
	  ENABLED    DISABLED     Yes                Yes
	
	  DISABLED   ENABLED      Yes                No
	
	  ENABLED    ENABLED      Yes                Yes
	
	  DISABLED   DISABLED     No                 No
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
