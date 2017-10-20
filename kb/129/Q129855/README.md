---
layout: page
title: "Q129855: WinNT Cannot See Shares of Workgroup Add-On for MS-DOS Computer"
permalink: /kb/129/Q129855/
---

## Q129855: WinNT Cannot See Shares of Workgroup Add-On for MS-DOS Computer

{% raw %}

	Article: Q129855
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.1,3.11,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run NET VIEW \\<computer_name> on a Windows NT computer to find
	the shares of a remote target computer running Workgroup Add-On for MS-DOS with
	the Server service, the following error messages appear:
	
	  If you are running Windows NT 3.1:
	
	  System error 66 has occurred.
	  The network resource type is not correct.
	
	  If you are running Windows NT 3.5 or 3.51:
	
	  System error 50 has occurred.
	  The network request is not supported.
	
	NOTE: If the target computer is not running the Server service the following
	message appears in either version:
	
	  Error 53: The network path was not found.
	
	For more information, see section 1.20 and 1.21 of the Workgroup Add-On for
	MS-DOS, version 3.11 README.TXT file.
	
	
	WORKAROUND
	==========
	
	To work around this problem, you must ask the administrator of the target
	computer for the share names. You can then connect to the shares directly with
	the NET USE command.
	
	Alternatively, you can use a Windows for Workgroups computer to find the share
	names by using the NET VIEW \\<computer_name> command.
	
	MORE INFORMATION
	================
	
	The NET VIEW command can still be useful from a Windows NT computer for finding
	the target computer name of a Workgroup Add-On for MS-DOS computer running the
	Server service. For example:
	
	From a Windows NT computer in the same domain as the target computer:
	
	  NET VIEW
	
	From a Windows NT computer in domain different from the target computer:
	
	  NET VIEW /DOMAIN:<domain_name>
	
	where <domain_name> is the name of the target computer domain name or
	workgroup name.
	
	NOTE: The server comment for Workgroup Add-On for MS-DOS computers is always
	"MS-DOS Peer Server."
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.10 3.11 wfw wfwg add on connections wgao
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW311DOS
	Version           : :3.1,3.11,3.5,3.51
	
	=============================================================================
	

{% endraw %}
