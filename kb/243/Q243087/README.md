---
layout: page
title: "Q243087: IIS Does Not Start If French (Canadian) Is Set as System Locale"
permalink: /kb/243/Q243087/
---

## Q243087: IIS Does Not Start If French (Canadian) Is Set as System Locale

	Article: Q243087
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Internet Information Server (IIS) may not start when it is installed
	on a computer running the French version of Windows NT or Windows 95/98 and the
	default system locale is set to French (Canadian).
	
	CAUSE
	=====
	
	This is by design. When IIS is installed on a computer where French (Standard)
	is the system default locale, IIS disables Cryptography due to current laws in
	France. Because of this, the metabase is then stored in clear text. When IIS is
	installed on a computer where the system locale is anything except French
	(Standard), IIS stores the metabase as encrypted.
	
	If IIS is installed when the system default locale is not set to French
	(Standard), then IIS encrypts the metabase. If the system default locale is
	changed to French (Standard), then IIS cannot read the metabase. IIS fails to
	start because it expects to read a non-encrypted metabase.
	
	If IIS is installed when the system default locale is set to French (Standard),
	then IIS does not encrypt the metabase, but stores it as clear text. If the
	system default locale is changed to anything other than French (Standard), then
	IIS cannot read the metabase because it expects to read an encrypted metabase,
	and therefore, fails to start.
	
	WORKAROUND
	==========
	
	If you want to use encryption in IIS, then change the system locale to French
	(Canadian), or change the system locale that you intend to use before installing
	IIS. This ensures that IIS will create an encrypted metabase.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
