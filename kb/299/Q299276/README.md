---
layout: page
title: "Q299276: &quot;Slave&quot; NIS Servers May Not Authenticate UNIX Users"
permalink: kb/299/Q299276/
---

## Q299276: &quot;Slave&quot; NIS Servers May Not Authenticate UNIX Users

	Article: Q299276
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
	
	A UNIX user may not be authenticated from a "slave" Network Information Service
	(NIS) server on Microsoft Windows 2000 after changing his or her password on the
	"master" NIS server.
	
	CAUSE
	=====
	
	Although the NIS server stores UNIX user credentials in Active Directory, it
	also creates password and group files to be used for authentication. These files
	are created in the MapCache folder on the NIS server and are called
	passwd.byname, passwd.byuid, group.byname, and group.byuid.
	
	When a UNIX user requests authentication, the NIS server references these files
	to handle the request. If a UNIX user changes his or her password, the password
	attribute is updated in Active Directory and then replicated around the domain.
	The "master" NIS server also updates the passwd.byname and passwd.byuid files in
	its MapCache folder.
	
	There is a problem in which "slave" NIS servers on Windows 2000 see the password
	updated in Active Directory, but do not update the password files in the
	MapCache folder. When the UNIX user requests authentication, the request does
	not succeed because the old password is still in the Mapcache folder.
	
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
	  23-May-2001  14:25  5.2000.328.19  15,66 KB  Nis2ad.exe   ix86
	  23-May-2001  14:25  5.2000.328.19  16,06 KB  Nisctrl.dll  ix86
	  23-May-2001  14:25  5.2000.328.19  15,66 KB  Nismap.exe   ix86
	  23-May-2001  14:00  5.2000.328.19     80 KB  Nisprop.dll  ix86
	  23-May-2001  14:19  5.2000.328.19    127 KB  Nissvc.exe   ix86
	
	
	
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
	
