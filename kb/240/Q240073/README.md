---
layout: page
title: "Q240073: Privilege Violation When Creating a Pipe Instance in NPFS"
permalink: kb/240/Q240073/
---

## Q240073: Privilege Violation When Creating a Pipe Instance in NPFS

	Article: Q240073
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a client uses the recommended FILE_GENERIC_WRITE access type to open a
	named pipe to a server using the Microsoft Windows NT 4.0 Named Pipes File
	System (NPFS), it is possible for the client, regardless of permissions, to
	create an instance of a server pipe and wait for a privileged user to connect in
	order to impersonate them on that instance. This privilege violation poses a C2
	security risk.
	
	CAUSE
	=====
	
	This behavior also occurs because NPFS does not verify that the user has the
	needed permissions in the Access Control List (ACL) and access type in the
	Discretionary Access Control List (DACL). Another factor contributing to this
	situation is that named pipes which were not created with an explicit security
	descriptor receive the NULL security descriptor and allows unprivileged
	processes to obtain handles to named pipes on a server.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	Without the application of Windows NT 4.0 Service Pack 6, a server running
	Windows NT 4.0 cannot stop clients from creating an instance of a named pipe
	because the instance bits from FILE_CREATE_PIPE_INSTANCE overlap with
	FILE_APPEND_DATA in the GENERIC_WRITE access type. So long as a client has
	FILE_GENERIC_WRITE access to a pipe, they can create an instance and acquire
	unauthorized access. NPFS can then check for permissions and access types, and a
	default security descriptor is added to the I/O Manager that does not allow
	unprivileged access.
	
	An application, however, can protect itself against being instanced in this
	situation by denying all access to the pipe (the Dynamic Host Control Protocol
	(DHCP) client is an example of an application that denies all access).
	
	Within the Security Descriptor, (a special data structure containing security
	information for an object), the DACL identifies users and group Security
	Identifiers (SIDs) that are to be granted or denied access for an object, and
	the System Access Control List (SACL) controls the auditing message the
	operating system generates. Both the DACL and the SACL contain ACE elements,
	which specify the users and groups with their individual permissions. The SID,
	ACL, DACL, and SACL are components that play a role in determining how well a
	computer complies with the U.S. Department of Defense C2security specification.
	
	For more information on the requirements and characterisitcs of C2 security,
	please visit the following Microsoft Web site:
	
	http://www.microsoft.com/NTServer/security/exec/overview/C2Beyond.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
