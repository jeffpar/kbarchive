---
layout: page
title: "Q151991: FPNW Writes Incorrect Last Modified Date on Files From OS/2"
permalink: kb/151/Q151991/
---

## Q151991: FPNW Writes Incorrect Last Modified Date on Files From OS/2

	Article: Q151991
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An OS/2 client running the NetWare requestor copies files to an FPNW server from
	a command prompt. The last modified dates of the files on the FPNW server do not
	match those of the original files. The dates and times of some of the files are
	set to the current date and time. This may not happen with all files being
	copied. This problem does not happen from File Manager.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest U.S. Service Pack
	for Windows NT and Windows NT Server version 3.51. For information on obtaining
	the Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: fpnw os2 attribute datestamp timestamp prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	Issue type        : kbbug
	
	=============================================================================
	
