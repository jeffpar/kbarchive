---
layout: page
title: "Q130290: DCA Irma for Macintosh Client Does Not Understand Master Domain"
permalink: /kb/130/Q130290/
---

## Q130290: DCA Irma for Macintosh Client Does Not Understand Master Domain

	Article: Q130290
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Attachmate Irma for the Macintosh is an add-on product which supports
	connectivity to SNA Server over Appletalk. However, Irma for the Macintosh only
	understands the single domain model when logging a client onto the SNA Server's
	domain.
	
	MORE INFORMATION
	================
	
	When Irma for the Macintosh requests the domain of the SNA Server, it uses that
	domain name when passing the user name and password across for validation. This
	works fine when the SNA Server is a member server/Backup Domain
	Controller/Primary Domain Controller of a single domain model. However, if the
	SNA Server is a member server/BDC/PDC of a resource domain with no local domain
	user accounts, the validation fails for the Irma client.
	
	RESOLUTION
	==========
	
	This problem can be resolved in 1 of 2 ways:
	
	- Enable the guest account on the resource domain (SNA SERVER) so the DCA Irma
	  clients can be validated as guest.
	
	- Create user accounts in the resource domain for each Macintosh client who
	  will be accessing the SNA Server.
	
	Additional query words: prodsna DCA appletalk IRMA
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.1,2.11,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
