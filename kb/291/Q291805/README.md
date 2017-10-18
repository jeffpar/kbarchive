---
layout: page
title: "Q291805: 3270 SSO Fails If 3270SSOUserTag, 3270SSOPwdTag Use Same Value"
permalink: kb/291/Q291805/
---

## Q291805: 3270 SSO Fails If 3270SSOUserTag, 3270SSOPwdTag Use Same Value

	Article: Q291805
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 19-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the 3270SSOUserTag and 3270SSOPwdTag registry entries are modified to use the
	same string value, 3270 and LUAs (logical unit applications) that are configured
	to user Single Sign-On (SSO) will fail to log on to host applications.
	
	The specific error that is returned will depend on the host application, but the
	logon fails because either the user ID or password sent to the host application
	is invalid.
	
	MORE INFORMATION
	================
	
	The 3270/LUA SSO feature depends on the SNA Server service (Snaservr.exe) to
	scan data sent by the 3270/LUA application during the session startup sequence
	for special keywords that are defined in the registry on the SNA Server/Host
	Integration Server 2000 server. The 3270/LUA SSO feature also depends on the
	application allowing the special keywords to be passed to the SNA Server service
	as part of the application logon sequence instead of the actual host user ID and
	password. For 3270 emulators, SSO requires the emulator to support scripting
	that can be used to record the logon sequence. The script would then be modified
	to replace the "real" host user ID and password with the special SSO keywords.
	
	For additional information on how to configure a logon script file for account
	lookups, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q290508 Configuring the 3270 Emulator to Use SSO with the HAC
	
	The system administrator can define the values for these special keywords if the
	defaults are not acceptable.
	
	By default, the replacement string for the host user ID is MS$SAMEU and the
	replacement string for the host password is MS$SAMEP.
	
	The registry settings used to specify these replacement strings are defined under
	the following key:
	
	  HKEY_LOCAL_MACHINE\CurrentControlSet\Services\SNASERVR\PARAMETERS
	
	3270SSOPrefix: REG_SZ
	This entry is the string to use as the special prefix tag in combination with the
	user name and password tags. The default value of this string is MS$.
	
	3270SSOUserTag: REG_SZ
	This entry is the string to use as the special tag in combination with the
	3270SSOPrefix tag in defining the special user name string that will be
	replaced. The default value of this string is SAMEU.
	
	3270SSOPwdTag: REG_SZ
	This entry is the string to use as the special tag in combination with the
	3270SSOPrefix tag in defining the special host password string that will be
	replaced. The default value of this string is SAMEP.
	
	If the 3270SSOUserTag and 3270SSOPwdTag entries are changed to use the same
	string value (in other word, SAME), the SNA Server service will not be able to
	correctly replace each string with the "real" host user ID and password from the
	Host Account Cache (HAC) database. This results in a logon failure when trying
	to log on to the host application.
	
	The two registry entries must be unique because the SNA Server service has to be
	able to handle both of the following cases:
	
	- The user ID precedes the password in the logon message that is being sent to
	  the host.
	
	- The password precedes the user ID in the logon message that is being sent to
	  the host.
	
	To make sure that both of these cases are handled correctly, the values for
	3270SSOUserTag and 3270SSOPwdTag must be unique.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
