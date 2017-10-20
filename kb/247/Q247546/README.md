---
layout: page
title: "Q247546: SMS: Discovery Data Manager Fails to Enumerate Sites"
permalink: /kb/247/Q247546/
---

## Q247546: SMS: Discovery Data Manager Fails to Enumerate Sites

{% raw %}

	Article: Q247546
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbDatabase kbMMC kbSecurity kbServer kbsms200 kbDiscovery kbQuery kbsmsProvider
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Systems Management Server site receives the following error message (Msg ID
	679) every few minutes from the Discovery Data Manager:
	
	  Failed to enumerate sites
	
	CAUSE
	=====
	
	The SMS Service account listed in the SMSDATA table of the Systems Management
	Server database does not match the service account with which the SMS_EXECUTIVE
	is started (as listed under Services in Control Panel).
	
	When a Systems Management Server component connects to an SQL database, Systems
	Management Server checks whether the connection is being made by the SMS Service
	account. If not, Systems Management Server checks permissions and excludes sites
	from the query of the Sites table based on explicit permissions (provider
	security). In this case, Discovery Data Manager (DDM) is logged on with an
	account name that does not match the <ServiceAccountName> entry in the
	SMSDATA table. As a result, the query to find all sites returns no rows, causing
	DDM to malfunction and the error message above to be displayed.
	
	
	WORKAROUND
	==========
	
	To work around this behavior, perform a site reset by running SMS Setup at the
	Site Server, and respecify the SMS Service Account in the
	DomainName\ServiceAccountName format.
	
	For example:
	
	  MYDOM1\smsservice
	
	It may take several minutes after the site reset is complete before the
	information is actually updated.
	
	
	MORE INFORMATION
	================
	
	Example of the Behavior
	-----------------------
	
	The following is an excerpt from the Ddm.log file:
	
	  CDiscoverDataManager::GetSiteInfo - Could not get subsites.
	  STATMSG: ID=679 SEV=E LEV=M SOURCE="SMS Server"
	  COMP="SMS_DISCOVERY_DATA_MANAGER" SYS=FMCSMS SITE=FMC PID=314 TID=519
	  GMTDATE=Tue Mar 23 15:38:31.973 1999 ISTR0="" ISTR1="" ISTR2="" ISTR3=""
	  ISTR4="" ISTR5="" ISTR6="" ISTR7="" ISTR8="" ISTR9="" NUMATTRS=0
	  CDiscoverDataManager::Process - Could not refresh registry values. Sleeping
	  for 60 seconds
	  CDiscoverDataManager::GetSiteStatus - Registering SQL types, Server = FMCSMS,
	  Database = SMS, User = sa
	  CDiscoverDataManager::GetSiteInfo - Could not get subsites.
	  STATMSG: ID=679 SEV=E LEV=M SOURCE="SMS Server"
	  COMP="SMS_DISCOVERY_DATA_MANAGER" SYS=FMCSMS SITE=FMC PID=314 TID=519
	  GMTDATE=Tue Mar 23 15:39:32.363 1999 ISTR0="" ISTR1="" ISTR2="" ISTR3=""
	  ISTR4="" ISTR5="" ISTR6="" ISTR7="" ISTR8="" ISTR9="" NUMATTRS=0
	  CDiscoverDataManager::Process - Could not refresh registry values. Sleeping
	  for 60 seconds
	
	No Discovery Data Records (DDRs) are processed.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbDatabase kbMMC kbSecurity kbServer kbsms200 kbDiscovery kbQuery kbsmsProvider kbStatSum 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
