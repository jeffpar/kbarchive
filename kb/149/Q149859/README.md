---
layout: page
title: "Q149859: No Mapping For Invalid Characters In Computer Name"
permalink: kb/149/Q149859/
---

## Q149859: No Mapping For Invalid Characters In Computer Name

	Article: Q149859
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft SQL 6.0 Setup does not provide mapping for invalid characters found in
	computer names.
	
	MORE INFORMATION
	================
	
	Microsoft SQL 6.0 provides mapping for invalid characters encountered in domain
	and user names. By default, SQL 6.0 provides the following mapping for these
	invalid characters:
	
	  A backslash(\) in the domain name is mapped as an underscore (_).
	  A hyphen (-) in user name is mapped as a number sign (#)
	
	For example, the user name "domainname\a-username" will be mapped as
	"domainname_a#username."
	
	Such mapping is not available for computer names that contain invalid characters.
	During Setup, an invalid character in the computer name will cause Setup to
	display an error message; however, SQL setup will continue. Invalid characters
	in the computer name will cause some problems in SQL connectivity.
	
	SQL 6.0 considers the following characters invalid in computer names:
	
	backslash (\)
	space ( )
	hyphen (-)
	single quotation mark (')
	at sign (@)
	percent sign (%)
	exclamation point (!)
	ampersand (&)
	period (.)
	
	Additional query words: invalid computer mapping sql
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,6.0
	
	=============================================================================
	
