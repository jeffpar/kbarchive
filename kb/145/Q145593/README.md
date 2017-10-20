---
layout: page
title: "Q145593: Windows 95 and WFW Err Msg: No Domain Server Was Available..."
permalink: /kb/145/Q145593/
---

## Q145593: Windows 95 and WFW Err Msg: No Domain Server Was Available...

{% raw %}

	Article: Q145593
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Windows 95 Dial-up Networking client or Windows for Workgroups
	Remote Access Service (RAS) client and connect to a Windows NT Server domain,
	the following error message appears:
	
	  No domain server was available to validate your password.
	  You may not able to gain access to some network resources.
	
	Ping, Net Use or Net View commands cannot locate any remote network computers.
	
	CAUSE
	=====
	
	Although the domain name specified during network logon is valid and the domain
	server is available, this problem occurs if the Windows 95 or Windows for
	Workgroups computer name is in use on the remote network. See Q123423 for other
	causes for the above error.
	
	When a Windows 95 Dial-up Networking client tries to register a duplicate
	computer name on the network, it fails to register the name and to initialize
	the workstation service.
	
	Consequently, NetBIOS application dependent on the workstation service such as
	NET USE or NET VIEW does not work. In this scenario, the duplicate name error
	message is expected to occur prior to the error message above. The expected
	duplicate name error is:
	
	The computer name you specified in already in use on the network. To specify a
	different name, double-click the network icon in control panel.
	
	Windows 95 Dial-up Networking client fails to display the duplicate name error
	message. Instead, it just displays "no domain server available" error message.
	WFW shows the same behavior as Windows 95. The Windows NT RAS client properly
	shows the duplicate name error message.
	
	WORKAROUND
	==========
	
	To work around this problem, log on to the remote network with a different
	computer name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95 and Windows for
	Workgroups version 3.11. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : WINDOWS:3.11,95; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
