---
layout: page
title: "Q276998: Cannot Populate Certain User Attributes in Connected Directory"
permalink: /kb/276/Q276998/
---

## Q276998: Cannot Populate Certain User Attributes in Connected Directory

{% raw %}

	Article: Q276998
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the attributes that cannot be pushed out to Microsoft
	Windows NT 4.0 by means of the Windows NT Management Agent (MA).
	
	MORE INFORMATION
	================
	
	The following attributes and their values may be populated in an export file,
	but they are not updated in the connected directory:
	
	- user_id: It can specify a number that contains the relative ID (the Routing
	  Information Daemon or RID) of the user. The RID is determined by the Security
	  Account Manager (SAM) when the user is created. It uniquely defines the user
	  account to SAM in the domain. Any values that are set in an export file are
	  ignored.
	
	- primary_group_id: It has a number value that contains the RID of the Primary
	  Global group for the user. Do not set this attribute on new object creations.
	  When you modify the user's settings, this member must be the RID of the
	  Global group in which the user is enrolled. Any values that are set in the
	  export file are ignored.
	
	- profile: It has a string that specifies a path to the user's profile. This
	  value can be a local absolute path, or a universal naming convention (UNC)
	  path. Any values that are set in the export file are ignored.
	
	- Home_dir_drive: It has a string that specifies the drive letter assigned to
	  the user's home directory for logon purposes. Any values that are set in the
	  export file are ignored.
	
	- password_expired: It can specify if a user must change a password at the next
	  logon session. Microsoft Metadirectory Services (MMS) version 2.1 does not
	  set this attribute.
	
	NOTE: The Cdir_nt program in MMS 2.1 is not designed to manage the preceding
	Windows NT attributes. A limitation of the MMS 2.1 Cdir_nt.exe program is its
	inability to support sending the preceding attributes out to the connected
	directory as values in either new or pre-existing objects.
	
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
