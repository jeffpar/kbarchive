---
layout: page
title: "Q325943: FIX: Secondary HAC Service Cannot Copy Database File from MDB"
permalink: /kb/325/Q325943/
---

## Q325943: FIX: Secondary HAC Service Cannot Copy Database File from MDB

	Article: Q325943
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the secondary (or backup) Host Account Cache (HAC) services tries to copy
	the Host Account Cache database file (DBase.dbs) from the Primary Domain
	Controller (PDC) that is running the master (or primary) Host Account Cache
	service, the copy process may fail.
	
	If a secondary HAC service cannot copy the HAC database file, a zero-byte
	DBase.dbs file remains in the <Host Security>\HSSystem folder.
	
	NOTE: The DBase.dbs database file is a hidden file.
	
	When this problem occurs, an event similar to the following may be logged on the
	PDC where the master HAC database is located:
	
	  Event ID: 1314
	  Source: SNA Host Security
	  Description: Unable to locate a requested resource Supplied code Secondary
	  DataBase
	
	NOTE: This problem does not occur in Host Integration Server 2000.
	
	CAUSE
	=====
	
	A secondary Host Account Cache service creates a zero-byte database file if the
	database file does not exist when the service starts. The HAC service does not
	delete the zero-byte database file before the service copies the master instance
	of the database file from the PDC that is running the master HAC service. The
	existence of the zero-byte database has been reported to cause an access denied
	error when the service tries to copy the database file.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Microsoft SNA Server version 4.0 service
	pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time   Version      Size     File name
	  --------------------------------------------------
	  08-Jul-2002  13:49  4.0.0.606    323,984  Snaudb.exe
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4.
	
	MORE INFORMATION
	================
	
	You can use the SNA Trace program (Snatrace.exe) to turn on an SNA Host Account
	Cache internal trace that will capture the file copy failure on a secondary HAC
	service that is having the problem described in this article. The following is
	an excerpt from an SNA Host Account Cache internal trace file (Udbint1.atf) that
	shows the file copy failure:
	
	  Copy FROM \\PDC-TEST\UDBTEMP\SDB-TEST
	  TO   D:\sna40\hostsec\HSsystem\DBase.DBS
	  Failed to copy the file rc = 5
	
	The following outlines the Host Account Cache database file synchronization
	process:
	
	1. A secondary Host Account Cache service is started.
	
	2. The secondary HAC service connects to the PDC where the master HAC service
	  and database are located.
	
	3. The secondary HAC service sends a UDI_SYNCHRONIZE message to the master HAC
	  database to lock the database.
	
	4. When the master HAC service receives the UDI_SYNCHRONIZE message to lock the
	  database, the master HAC service does the following:
	
	  a. Gets the generation (sequence) number of the database.
	
	  b. If the database is locked successfully, the master HAC service copies the
	     master database (DBase.dbs) to \\<PDC name>\UDBTEMP\<BDC
	     name>.
	
	NOTE: The temporary database file is named to match the NetBIOS name of the
	system that will copy the database file.
	5. The master HAC service sends back a UDI_SYNCHRONIZE response with the HAC
	  database's current generation number.
	
	6. When the secondary HAC service receives the UDI_SYNCHRONIZE response, the
	  secondary HAC service copies the temporary database file (\\<PDC
	  name>\UDBTEMP\<BDC name>) to the local host security folder as
	  DBase.dbs.
	
	7. If the file copy fails, the secondary HAC service tries again at one-minute
	  intervals.
	
	8. After secondary HAC service copies the file locally, the secondary HAC
	  service sends another UDI_SYNCHRONIZE message to the master HAC service to
	  unlock the database file. When the master HAC service receives this
	  UDI_SYNCHRONIZE message, the master HAC service deletes the temporary
	  database file.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
