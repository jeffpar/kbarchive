---
layout: page
title: "Q194909: LowercaseFiles Parameter Does Not Affect GET/MGET Commands"
permalink: /kb/194/Q194909/
---

## Q194909: LowercaseFiles Parameter Does Not Affect GET/MGET Commands

{% raw %}

	Article: Q194909
	Product(s): Internet Information Server
	Version(s): WINNT:1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you set the LowercaseFiles registry parameter to either 0 or 1, the FTP
	commands to retrieve files behaves in the following manner:
	
	- "GET" is not case sensitive
	
	- "MGET" is case sensitive
	
	CAUSE
	=====
	
	The LowercaseFiles (REG_DWORD) parameter is for display purposes only. The
	following is an excerpt from Knowledge Base article Q147621, "IIS FTP Service
	Registry Parameters":
	
	  LowercaseFiles                                  REG_DWORD
	  Range:  0 or 1                                  Default:0
	  Description:                                    CONFIGURABLE
	
	  The service uses the native case for file names (like what the file
	  names are stored in file system). However for exact comparisons with
	  case-sensitive file systems (NTFS provides an option, FAT is case
	  insensitive) to work fine, it may be necessary to ensure proper file
	  names are used. Administrators can turn on this flag to ensure that the
	  service uses lowercase for such comparisons.
	
	MORE INFORMATION
	================
	
	For more information on IIS and FTP registry parameters, please the following
	Microsoft Knowledge Base articles:
	
	  Q143180 : IIS Common Registry Parameters
	
	  Q147621 : IIS FTP Service Registry Parameters
	
	Additional query words: iisftp
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : WINNT:1.0,2.0,3.0,4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
