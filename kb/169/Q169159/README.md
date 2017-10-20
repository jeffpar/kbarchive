---
layout: page
title: "Q169159: XCON: X.400 Connector Configuration Checklist"
permalink: /kb/169/Q169159/
---

## Q169159: XCON: X.400 Connector Configuration Checklist

{% raw %}

	Article: Q169159
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup kbtshoot exc4 exc5 exc55
	Last Modified: 07-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a checklist that is intended as an aide in configuring a
	Microsoft Exchange Server X.400 Connector to a foreign X.400 Message Handling
	System (MHS).
	
	MORE INFORMATION
	================
	
	This is not intended to replace observations on previously operational
	connections that may point to the actual problem, but rather as a guide to
	succesful configuration of between dissimilar message transfer agents (MTAs).
	The term 'host' refers to a computer that supports an MTA.
	
	1. Can each host ping the IP address of the other?
	
	   - No - Resolve network issue.
	
	   - Yes - If you want to use the host name instead of the IP address, continue
	     to step 2. Otherwise, continue to step 3.
	
	2. If the host name will be used instead of the IP address of the target MTA,
	  ping the host name. NOTE: DNS supports host name resolution, or a 'hosts'
	  file may be used. The hosts file for computers running Windows NT Server is
	  located in the <winntdir>\System32\Drivers\Etc folder. The format is IP
	  address, a tab, and then the host name. Did the host name return an IP
	  address?
	
	   - No - There is a problem with name resolution.
	
	   - Yes - Continue to step 3.
	
	3. Configure the Exchange Server MTA to support a 2K TPDU. Start the Windows NT
	  Registry Editor, change to the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \MSExchangeMTA\Parameters
	
	  Find the Supports 2K TPDU registry value, set the type to DWORD, and then
	  change the value to 0x1 (1 hexadecimal).
	
	4. Have the administrator who wants to configure a given MTA record the
	  following information for the MTA that they want to connect to:
	
	   - Remote Host name. This entry is is case sensitive and cannot exceed 32
	     characters in length. It is used to specifiy the Remote MTA name on the
	     General tab of the Exchange Server X.400 Connector.
	
	   - Remote MTA password. This entry is case sensitive and cannot exceed a
	     length of 64 characters. It is used to specifiy the Remote MTA password on
	     the General tab of the Exchange Server X.400 Connector.
	
	   - T selector. This value cannot exceed 32 text characters (64 hexadecimal
	     characters). This value is critical and must be an exact match with the
	     corresponding value specified in the configuration for the MTA on the
	     other host. This value is used for the T selector that is specified on the
	     Stack tab of the Exchange Server X.400 Connector. If the remote
	     administrator wants to specify a S selector and/or a P Selector, this
	     should be done after successful messaging has been established. The
	     selector supported in the X.400 link options depends on the mode of the
	     MTA. 1988 mode supports T, S, and P selector. 1984 modes support a T
	     selector only.
	
	5. Use the Overide tab to specify the local MTA and password. The Exchange
	  Server MTA uses the name of the computer that is running Windows NT Server on
	  which Exchange Server is installed for the MTA name. If no incoming password
	  is necessary, using the Override tab is unnecessary. Using a password is
	  redundant because the T selector provides adequate security.
	
	6. The administrator of the foreign MTA provides the X.400 address associated
	  with the foreign MTA or requests that you specify a 'wildcard' for the
	  Country code in the address space configured on the Address tab of the
	  Exchange Server X.400 Connector. Using a 'wildcard' character, the '*', in
	  the address space results in a match for all X.400 recipients not local to
	  the Exchange Server computer.
	
	7. The information on the Advanced tab of the Exchange Server X.400 Connector
	  should be configured to match the mode of the foreign MTA. The X.400 link
	  option to allow MS Exchange Content should always be disabled when connecting
	  to a foreign MTA (click Help on the Advanced tab). The typical foreign MTA
	  requires that the Two Way Alternate option be disabled. Allow BP-15 (in
	  addition to BP-14) is available when sending to a 1984 X.410 or a 1988 mode
	  foreign MTA.
	
	8. Make a custom recipient on both hosts or send to a user on the foreign host
	  using a 1-off address in the To line. The following is an example of a 1-off
	  address:
	
	  
	
	     [x400:c=us;a=attmail;p=organization;o=locale;s=lastname;g=firstname]
	
	9. If the above test fails in either direction, select the Server object in the
	  Exchange Server Admininistrator program, and then click Properties the File
	  menu. Click the Diagnostics Logging tab and increase the MSExchangeMTA X.400
	  Interoperablility and APDU logging to Maxium. This results in logging to the
	  Bf0.log, Ev0.log, and Ap0.log files in the Mtadata folder.
	
	10. Repeat the send mail test and contact Microsoft Product Support and Services
	  (PSS).
	
	Additional query words: X.400 isocor emx retix mailbus foreign exfaqcon
	
	======================================================================
	Keywords          : kbsetup kbtshoot exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
