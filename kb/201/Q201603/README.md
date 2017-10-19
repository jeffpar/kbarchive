---
layout: page
title: "Q201603: SMS: Systems Management Server 2.0 Site Recovery"
permalink: /kb/201/Q201603/
---

## Q201603: SMS: Systems Management Server 2.0 Site Recovery

	Article: Q201603
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 15-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes Systems Management Server 2.0 site recovery.
	
	MORE INFORMATION
	================
	
	The concept of Systems Management Server (SMS) 2.0 site recovery is a
	fundamental SMS concept, but one that is often not fully understood. Problems
	resulting from an incorrect site recovery may not be immediately apparent and
	can be hard to detect from a cursory SMS site examination. As such, it is
	crucial for you, as the SMS administrator, to become familiar with SMS site
	recovery procedures and the scenarios in which a recovery is necessary
	
	An SMS 2.0 site recovery occurs whenever an SMS site is installed with a site
	code or site server name that was previously used in that SMS hierarchy.
	Repairing and re-synchronizing data are the core tasks of a site recovery, and
	they are required to prevent interruption of operations and corruption of data.
	
	SMS 2.0 sites that exist in a hierarchy use serial numbers, transaction IDs, and
	other means of tracking various data that moves up and down the hierarchy. These
	numbers preserve the ordering of instructions and data. If you rebuild or
	restore a site, but it is not properly recovered, these numbers are no longer
	synchronized with other SMS sites in the hierarchy. SMS components at parent and
	child sites may reject the out of sequence data, which causes a breakdown in
	normal SMS site communication. To avoid this, you have to follow proper site
	recovery procedures.
	
	Note: The site recovery procedures that are referenced in the article supersede
	those in the SMS 2.0 Administrator's Guide, Chapter 18, "Maintaining SMS
	Systems." These procedures are incomplete and do not fully document the
	procedures that are necessary to restore an SMS 2.0 site.
	
	Before you attempt to recover any SMS site, it is suggested that you become
	familiar with the latest resources that are available for SMS site recovery.
	
	The following SMS Maintenance and Recovery Web site is the primary resource for
	site recovery information:
	
	  http://www.microsoft.com/smsmgmt/techdetails/recovery
	
	The Maintenance and Recovery Web site contains a number of planning documents,
	FAQs, and links to detailed information. To get up started quickly, first read
	the section "Important Processes For Your Most Common SMS Backup and Recovery
	Scenarios" at the following location:
	
	  http://www.microsoft.com/smsmgmt/techdetails/recovery/MostCommon.htm
	
	For a PowerPoint presentation of SMS backup and recovery concepts, principles,
	and strategies, refer to the "Backup and Recovery Overview" section on the
	following Web site:
	
	  http://www.microsoft.com/smsmgmt/techdetails/recovery/SMS20RecovOver.exe
	
	For Frequently Asked Questions about Microsoft Systems Management Server Backup
	and Recovery refer, to the following Web site:
	
	  http://www.microsoft.com/smsmgmt/techdetails/recovery/SMS20RecovFAQ.htm
	
	For additional information about secondary site recovery, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q293440 Discussion of the Basic Recovery Tasks for Secondary Sites
	
	In addition, make sure to have a copy of the SMS Recovery Tools that are
	available for download from the Recovery Web site. Install the SMS Recovery
	Tools on any recovering site server before you start performing recovery tasks.
	
	The site recovery procedures are most successful if you have a proper SMS backup.
	You can find additional information about proper SMS Site Server backup
	procedures, the Backup SMS Site Server task, and the SMSBkup.ctl file in SMS 2.0
	Help, and the SMS Maintenance and Recovery Web site.
	
	
	Additional query words: prodsms; backup; restore; rebuild
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
