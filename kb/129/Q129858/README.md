---
layout: page
title: "Q129858: Error C00000BC When Changing Password in Trusted Domain"
permalink: /kb/129/Q129858/
---

## Q129858: Error C00000BC When Changing Password in Trusted Domain

{% raw %}

	Article: Q129858
	Product(s): Microsoft Windows NT
	Version(s): 3.5x
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5x 
	- Microsoft Windows NT Server version 3.5x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change your user password in a trusted domain using TCP/IP,
	the following error message appears:
	
	  Unable to change the password on this account (C00000BC).
	  Please consult your system administrator.
	
	CAUSE
	=====
	
	When changing password in trusted domain using TCP/IP, the workstation searches
	for <domainname><20> to find the primary domain controller (PDC).
	However, no domain controller registers <domainname><20>.
	
	If the workstation issues a session setup to this NetBIOS name, the session
	request is rejected, and the error message above appears.
	
	Because there is no application or server which registers
	<domainname><20>, this problem occurs only when WINS or DNS server
	resolves the NetBIOS name <domainname><20> to a valid IP-address
	because of an erroneous WINS or DNS entry.
	
	This entry can be caused by a client naming their computer the same name as the
	domain name. This seems to cause an erroneous entry in the Wins database.
	
	WORKAROUND
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0.
	
	To work around this problem, do one of the following:
	
	- If you use WINS, delete the following entry: <domainname><20>
	
	- If you use DNS, delete the following entry: <domainname>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT Workstation or Server version 4.0.
	
	
	Additional query words: prodnt pswd dhcp browser
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch
	Version           : :3.5x
	
	=============================================================================
	

{% endraw %}
