---
layout: page
title: "Q198585: Windows 95 DUN Client Authentication Fails"
permalink: /kb/198/Q198585/
---

## Q198585: Windows 95 DUN Client Authentication Fails

{% raw %}

	Article: Q198585
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows 95 client dials into a computer running Windows NT Server and is
	authenticated using PPP, you may not be able to log on or access network
	resources.
	
	You may encounter some or all of the following error messages:
	
	  No domain controller available to authenticate your password.
	
	  Network path invalid
	
	  System error 53 has occurred
	
	  Request timed out
	
	Windows 95 clients are the only clients that are affected by this problem.
	
	CAUSE
	=====
	
	This situation is caused when the current service pack is not reapplied to the
	server after RAS is added, removed, or reinstalled.
	
	RESOLUTION
	==========
	
	Reapply the service pack to the RAS server.
	
	MORE INFORMATION
	================
	
	Follow these guidelines to troubleshoot the issue:
	
	Dial in with your Win95 client and attempt to PING the RAS server's IP address.
	If no reply is received you may be experiencing this problem.
	
	To ensure that only Windows 95 clients are affected, perform the same test with a
	Windows NT DUN client.
	
	A network trace with a packet capture tool, such as Network Monitor, should
	reveal that the server is receiving packets from the Windows 95 client but is
	not responding to them.
	
	NOTE: There can be other causes for the above noted errors. For more information,
	see the articles listed in the References section.
	
	From the Service Pack 3 readme file:
	
	  If you change or add new software or hardware components to your system after
	  you have installed the Service Pack, you need to install the Service Pack
	  again. This is because the files taken from the original Windows NT 4.0 disk
	  set may not be the same as the files on the Service Pack disk set. You cannot
	  install new components directly from the Service Pack media (such as a new
	  keyboard or printer driver). You must install new components from the
	  original product media and then reinstall the Service Pack.
	
	  For example, if you install the SNMP service after installing Service Pack 3,
	  you will need to reinstall the Service Pack. If you fail to do so, you will
	  receive the error "Entrypoint SnmpSvcGetEnterpriseOID could not be located in
	  snmpapi.dll." This is because some of the files in the SNMP service have been
	  updated in the Service Pack and you have a version mismatch. Reinstalling the
	  Service Pack fixes the problem by copying the newer versions of the files to
	  your system.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q150053 Erratic Domain Logon from Windows 95 Dial-Up Networking
	
	  Q178729 How To Configure Windows 95 to Dial into a RAS/RRAS Server
	
	  Q154434 Err Msg: No Domain Server Was Available to Validate...
	
	Additional query words: Win95 SP3 PPP
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
