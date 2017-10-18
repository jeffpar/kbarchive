---
layout: page
title: "Q286814: &quot;Event ID 36&quot; Err Msg When You Run ASP Pages"
permalink: kb/286/Q286814/
---

## Q286814: &quot;Event ID 36&quot; Err Msg When You Run ASP Pages

	Article: Q286814
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Crystal Reports 8 from Seagate Corporation, you may notice
	that your ASP pages no longer function, in which case you receive the following
	error message in the system event log:
	
	  Event ID 36
	  "Server failed to load application "/LM/W3SVC/1/ROOT" no such interface
	  supported."
	
	CAUSE
	=====
	
	This behavior may occur because, during the installation of Crystal Reports 8,
	permissions for the registry subkeys and their lower-level subkeys are modified.
	The permission setting for the Everyone group is changed from Special Access to
	Full Control. The following is an example of the affected registry subkeys:
	
	  HKEY_LOCAL_MACHINE\Software\ODBC\odbc.ini
	  HKEY_CLASSES_ROOT\TypeLib\{000204EF-0000-0000-C000-000000000046}\6.0\9\win32
	  HKEY_CLASSES_ROOT\TypeLib
	  HKEY_CLASSES_ROOT\Interface
	
	For more information about this behavior, visit the following Crystal Decisions
	Web site:
	
	  http://support.crystaldecisions.com/kbase/c2007581.asp
	
	RESOLUTION
	==========
	
	To resolve this issue, download the hotfix at the following Crystal Decisions
	Web site:
	
	  http://support.crystaldecisions.com/communityCS/FilesAndUpdates/scr8_webregfix.exe.asp
	
	Or, obtain a more recent copy of Crystal Reports from Seagate.
	
	MORE INFORMATION
	================
	
	For information about how to contact Seagate, click the appropriate article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
