---
layout: page
title: "Q153650: Database Manager Does Not Delete Collected Files"
permalink: kb/153/Q153650/
---

## Q153650: Database Manager Does Not Delete Collected Files

	Article: Q153650
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbdocerr kbDatabase smsdatabase smsdocerr
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Page 213, Chapter 6, under the "Removing Collected Files from a Site" section, of
	the Systems Management Server 1.0 and 1.1 Administrator's guide states the
	following:
	
	  Using SMS Database Manager, you can remove both the record of the collected
	  file in the site database and the collected file on the site server. For
	  information about the SMS Database Manager, see the SMS Utilities Help file."
	
	When you select "Delete Collected Files" in DBCLEAN, the files from the drive are
	not physically removed. It only deletes the pointers to them from the Systems
	Management Server database. In addition, a SMS Utilities Help file does not
	exist.
	
	WORKAROUND
	==========
	
	To remove the collected files, you must manually delete them from the site
	server. The collected files are stored in the following subdirectory:
	
	  SMS\site.srv\dataload.box\files.col\<site code>\<UID Code>\<SMS ID>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbdocerr kbDatabase smsdatabase smsdocerr 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
