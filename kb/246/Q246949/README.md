---
layout: page
title: "Q246949: Offer Summarizer Reports SQL Error 105 with Corrupted .svf Files"
permalink: /kb/246/Q246949/
---

## Q246949: Offer Summarizer Reports SQL Error 105 with Corrupted .svf Files

	Article: Q246949
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kberrmsg kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you process improperly formatted or corrupted .svf files, the Offer Status
	Summarizer may show critical when viewed in site status. In addition,
	advertisement status is no longer updated.
	
	CAUSE
	=====
	
	Advertised Program Manager (APM) is responsible for generating .svf files for
	status reporting at the site. In some cases, .svf files that contain corrupted
	offer ID information may be written. When an .svf file is moved to the site
	server and processed by the Offer Status Summarizer, the corrupted information
	is inserted in the OfferStatusSummary table within the site database. If you
	view this table, it contains corrupted data. The table itself is not corrupted,
	but it contains invalid data that was inserted from the corrupted .svf file(s).
	This invalid data is usually limited to the Offer ID column.
	
	Typically, this problem does not exist until the Offer Status Summarizer attempts
	to process an .svf file that contains an apostrophe and other characters (for
	example, the word don't or any phrase or string of characters that contain an
	apostrophe) in place of correct Offer ID information. In this case, the
	apostrophe is read as a quotation mark when SQL Server tries to load this
	information into the OfferStatusSummary table. This results in the following
	error message in the Offersum.log file:
	
	  Microsoft SQL Server reported SQL message 105, severity 15: Unclosed
	  quotation mark before the character string ' ,1,1,0,1,0,0,0'.
	  Microsoft SQL Server reported SQL message 170, severity 15: Line 1: Incorrect
	  syntax near Nor
	
	NOTE: The Offersum.log is generated only if logging is enabled for the Offer
	Status Summarizer component.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, either configure a status message filter so these
	error messages are not displayed, or clean up the database of invalid
	information and identify the client computers that are generating these
	corrupted .svf files.
	
	NOTE: The downside of simply configuring a status message filter is that .svf
	files continue to build up and status information is not updated.
	
	To clean up the OfferStatusSummary table, you must use either ISQL/w (SQL Server
	6.5) or SQL Query Analyzer (SQL Server 7.0) to perform queries against the SMS
	database. Before you continue, make sure you have a current dump of the SMS
	database.
	
	Stop the SMS Inbox Manager (component of the Executive) and the SMS Site
	Component Manager. Clean up the database using the following queries.
	
	Queries to identify corruption in SQL tables:
	
	  select * from OfferStatusSummary os
	  ,OfferStatusSummaryDetail od WHERE
	  od.OfferStatusSummaryID = os.OfferStatusSummaryID
	  select * FROM
	  OfferStatusSummary os
	  ,OfferStatusSummaryDetail od
	  WHERE
	  od.OfferStatusSummaryID = os.OfferStatusSummaryID
	  AND
	  OfferID not like "[A-Z]%"
	  AND
	  OfferID not like "[0-9]%"
	
	SQL queries to delete corrupted information while preserving site specific
	entries.
	
	NOTE: Replace <xxx> in the following examples with the site code of your
	specific site.
	
	  DELETE OfferStatusSummaryDetail
	  FROM
	  OfferStatusSummary os
	  ,OfferStatusSummaryDetail od
	  WHERE
	  od.OfferStatusSummaryID = os.OfferStatusSummaryID
	  AND
	  OfferID not like "<xxx>%"
	
	  DELETE OfferStatusSummary
	  WHERE
	  OfferID not like "<xxx>%"
	
	Invalid data may be spread throughout the OfferStatusSummary table in such a
	manner as to require purging all data from this table. In this case, run the
	following queries against the SMS database:
	
	  DELETE OfferStatusSummaryDetail
	  FROM
	  OfferStatusSummary os
	  ,OfferStatusSummaryDetail od
	  WHERE
	  od.OfferStatusSummaryID = os.OfferStatusSummaryID
	
	  DELETE OfferStatusSummary
	
	While the services are stopped, move all .svf files to a temporary folder and
	restart the SMS Inbox Manager service (component of the Executive). The log
	should be free of error messages at this point.
	
	NOTE: You must have logging enabled for the Offer Status Summarizer component to
	confirm no more error messages are being written to this log.
	
	As new .svf files flow into the Offersum.box folder, monitor the database using
	SQL to determine when incorrect data is again written to the OfferStatusSummary
	table. At that point, stop the SMS Inbox Manager and examine the .svf files to
	determine which client computer generated the corrupted .svf file. Uninstall and
	reinstall the client software on the computer that is identified and continue
	the process to monitor for corruption. Reinstall the identified clients until
	corruption is no longer noted. During this process, keep a record of the client
	computers that have generated bad .svf files.
	
	After you are finished, search all .svf files that were initially moved out of
	the OfferSum.Box folder to identify those that may have been written by
	malfunctioning client computers. After you have identified the .svf files,
	delete them and move the remaining .svf files back to the OfferSum.Box file for
	processing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Manual Installation Instructions:
	
	1. Close the Systems Management Server Administrator console and stop the
	  Systems Management Server Site Component Manager and Systems Management
	  Server Executive services.
	
	2. Replace the Offersum.dll file in the
	  <sms_root_directory>\Bin\<platform> folder with the version
	  obtained from the update.
	
	3. Replace the Srvmsgs.dll file in the
	  <sms_root_directory>\Bin\<platform> folder with the version
	  obtained from the update.
	
	4. If the site server is a primary site server, replace the Srvmsgs.dll file in
	  the <sms_root_directory>\Bin\<platform>\00000409 folder with the
	  version obtained from the update.
	
	5. Run the 59090.sql script on the SQL Server computer (use ISQL/w or SQL Query
	  Analyzer) to clean corrupted data from the OfferStatusSummary table.
	
	6. Restart the Systems Management Server Site Component Manager and Systems
	  Management Server Executive services.
	
	Additional query words: prodsms corrupt
	
	======================================================================
	Keywords          : kberrmsg kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
