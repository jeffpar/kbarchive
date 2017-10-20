---
layout: page
title: "Q166730: With Unencrypted Password SP3 Fails to Connect to SMB Server"
permalink: /kb/166/Q166730/
---

## Q166730: With Unencrypted Password SP3 Fails to Connect to SMB Server

{% raw %}

	Article: Q166730
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading your Windows NT 4.0 computer to Service Pack 3 (SP3), you are
	unable to connect to certain non-Microsoft Server Message Block (SMB) servers
	and you may receive the following error message:
	
	  System error 1240 has occurred.
	
	  The account is not authorized to login from this station.
	
	CAUSE
	=====
	
	Some non-Microsoft SMB servers only support unencrypted (plain text) password
	exchanges during authentication.
	
	The SMB client redirector in Windows NT 4.0 Service Pack 3 and later handles
	unencrypted passwords differently than previous versions of Windows NT.
	Beginning with Windows NT 4.0 Service Pack 3, the SMB redirector does not send
	an unencrypted password during authentication to an SMB server unless you add a
	specific registry entry.
	
	In previous versions, the client would automatically negotiate downward to
	unencrypted (plain text) authentication if requested from the server.
	
	RESOLUTION
	==========
	
	Check with the vendor of the SMB server product to see if there is a way to
	support encrypted password authentication, or if there is a newer version of the
	product that adds this support.
	
	Alternatively, to enable unencrypted (plain text) passwords for the SMB client on
	Windows NT 4.0 Service Pack 3 and newer systems, modify the registry in the
	following way:
	
	WARNING: Enabling this will allow unencrypted (plain text) passwords to be sent
	across the network when authenticating to an SMB server that requests this
	option. This can lessen the overall security of an environment and should only
	be done after careful consideration of the consequences of plain text passwords
	in your specific environment.
	
	WARNING: Using the registry editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT. Microsoft cannot
	guarantee that any problems resulting from the use of the registry editor can be
	solved. Use this tool at your own risk.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Rdr\Parameters
	
	3. On the Edit menu, click Add Value.
	
	4. Add the following:
	
	     Value Name: EnablePlainTextPassword
	     Data Type: REG_DWORD
	     Data: 1
	
	5. Click OK and then quit Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	To enable unencrypted (plain text) passwords in an automated setup, modify the
	registry in the following way:
	
	Add the following line to the Product.Add.Reg section of the Update.inf file:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Rdr\Parameters,
	  "EnablePlainTextPassword", 0x10001, 1
	
	
	Additional query words: 4.00 VAX log in login 2510
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
