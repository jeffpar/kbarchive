---
layout: page
title: "Q154563: FPNW: Search Drive Vector Not Set"
permalink: /kb/154/Q154563/
---

## Q154563: FPNW: Search Drive Vector Not Set

{% raw %}

	Article: Q154563
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When attempting to run an application that relies on the search drive vector
	being set, it will not work correctly because the search drive vector is not
	set.
	
	CAUSE
	=====
	
	The Microsoft LOGIN.EXE program fails to set the shell's search drive vector.
	The search drive vector is used in conjunction with various levels of search
	mode (as set by the SMODE value) to provide enhanced file search capabilities
	(over and above the normal search for executable files along the MS-DOS search
	path). For example, the shell's search mode can be set to a value that directs
	the shell to search for data files along the search path specified by the search
	drive vector. Of course, if the search drive vector is not set (as is the case
	with the Microsoft LOGIN program), such searches performed by the shell will
	fail.
	
	The search drive vector is a 17-byte field internal to the NETX shell. Each of
	the first 16 bytes contains the ordinal number of a drive letter (0xFF indicates
	the end of the vector) and the last byte is always set to 0xFF. Normally, the
	login program will set this vector to equal all the network drives that have
	been added to the path (by MAP INS). The SetSearchDriveVector API is Int 0x21,
	Function 0xE9, SubFunction 0x02.
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below. Login.exe, Logout.exe, and Map.exe have been
	modified to correctly set the search drive vector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: FPNW SEARCH DRIVE VECTOR prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
