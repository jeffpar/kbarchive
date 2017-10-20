---
layout: page
title: "Q299367: NIS May Update the Group Files with an Invalid UNIX User"
permalink: /kb/299/Q299367/
---

## Q299367: NIS May Update the Group Files with an Invalid UNIX User

{% raw %}

	Article: Q299367
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network Information Service (NIS) servers may not authenticate UNIX users with
	their group permissions.
	
	CAUSE
	=====
	
	When a UNIX user is added to a UNIX group by using Active Directory, the NIS
	server updates the group.byname and group.byuid files in its MapCache folder to
	be the same. These files are used for group authentication. When NIS updates
	these files, it uses the user's CN name rather than the MsSFUName attribute.
	This can result in an invalid user ID being added to the group files if these
	are different.
	
	For example, a user with a CN name of "First Last" and a logon name of "firstlas"
	would have the invalid "First Last" name added to the group files.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size      File name    Platform
	  ------------------------------------------------------------------
	  23-May-2001  14:25  5.2000.328.19  1,566 KB  Nis2ad.exe   ix86
	  23-May-2001  14:25  5.2000.328.19  1,606 KB  Nisctrl.dll  ix86
	  23-May-2001  14:25  5.2000.328.19  1,566 KB  Nismap.exe   ix86
	  23-May-2001  14:00  5.2000.328.19     80 KB  Nisprop.dll  ix86
	  23-May-2001  14:19  5.2000.328.19    127 KB  Nissvc.exe   ix86
	
	
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, change the user's object name to match the user ID;
	this will put the correct name in the group files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
