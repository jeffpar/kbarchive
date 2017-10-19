---
layout: page
title: "Q151235: FPNW Does Not Search Trusted Domains for Object Names"
permalink: /kb/151/Q151235/
---

## Q151235: FPNW Does Not Search Trusted Domains for Object Names

	Article: Q151235
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an application sends a 'Get Bindery Object Name' request to a File and
	Print Services for NetWare (FPNW) server, FPNW does not search trusted domains
	for the object; it returns the message 'No Such Object.' An example of this can
	be seen in PSERVER. A PSERVER will print 'UNKNOWN' as the user name of the user
	submitting the job, or it will not print the job at all.
	
	CAUSE
	=====
	
	When you attempt to log on to an FPNW server, FPNW sends a logon request to the
	local security authority (LSA) and leaves the domain field blank. The LSA will
	search all trusted domains for you. When an application sends a 'Get Bindery
	Object Name' request, FPNW cannot send this to LSA and must process the request
	itself. FPNW will only look in the local database for the object.
	
	WORKAROUND
	==========
	
	If the problem you are having is with PSERVER printing 'UNKNOWN' instead of the
	users name, simply set the banner page name field to the users login name. For
	example:
	
	  CAPTURE /Q=PRINTQ /NAME=<username>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	Netware version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	
