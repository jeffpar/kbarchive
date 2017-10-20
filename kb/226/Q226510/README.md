---
layout: page
title: "Q226510: SMS_DISCOVERY_DATA_MANAGER Status &quot;Failed to Enumerate Sites&quot;"
permalink: /kb/226/Q226510/
---

## Q226510: SMS_DISCOVERY_DATA_MANAGER Status &quot;Failed to Enumerate Sites&quot;

{% raw %}

	Article: Q226510
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message may appear in the Systems Management Server 2.0 Status
	Message system every few minutes:
	
	+------------------------------------------------------------------------+
	| Component                  | Status message text          | Message ID | 
	+------------------------------------------------------------------------+
	| SMS_Discovery_Data_Manager | "Failed to enumerate sites." | 679        | 
	+------------------------------------------------------------------------+
	
	In addition, if logging for SMS_Discovery_Data_Manager is enabled, the following
	message appears in the DDM.log file:
	
	  CDiscoverDataManager::GetSiteInfo - Could not get subsites.
	  STATMSG: ID=679 SEV=E LEV=M SOURCE="SMS Server"
	  COMP="SMS_DISCOVERY_DATA_MANAGER" SYS=SERVERXXX SITE=XXX PID=314 TID=519
	  GMTDATE=Tue Mar 23 15:38:31.973 1999 ISTR0="" ISTR1="" ISTR2="" ISTR3=""
	  ISTR4="" ISTR5="" ISTR6="" ISTR7="" ISTR8="" ISTR9="" NUMATTRS=0
	  CDiscoverDataManager::Process - Could not refresh registry values.
	  Sleeping for 60 seconds
	
	No Discovery data records (DDRs) are processed.
	
	CAUSE
	=====
	
	The SMS Service account listed in the SMSDATA table in the SMS database does not
	match the service account the SMS_EXECUTIVE service is started with. To verify
	you are experiencing this problem:
	
	1. In Control Panel, double-click Services, and check the SMS_EXECUTIVE Startup
	  properties.
	
	2. Note the exact account name listed in the "Log on as" section.
	
	3. Connect to the SMS database with the SQL query tool.
	
	4. Perform the following query:
	
	  Select ServiceAccountName from SMSDATA
	
	5. Note the value returned from the query. If the name in the database and the
	  name in Service Control Manager do not match exactly (letter for letter), you
	  experience this problem.
	
	WORKAROUND
	==========
	
	Perform a site reset and specify the SMS Service account again. Specify the SMS
	Service account using the following format:
	
	  <DOMAINNAME>\<SERVICEACCOUNTNAME>
	
	For example,
	
	  MYDOM1\smsservice
	
	NOTE: It may take several minutes after the site reset is finished before the
	information is actually updated.
	
	MORE INFORMATION
	================
	
	When an SMS component connects to SQL, SMS checks to determine whether the
	connection is being made by the SMS Service account or not. If it is not the SMS
	Service account, SMS checks permissions and excludes results based on the user's
	permissions. In this case, SMS_Discovery_Data_Manager is logged on as an account
	name that does not match the ServiceAccountName entry in the SMSDATA table in
	the SMS database. As a result, the query to find all sites returns no rows,
	causing the error message listed above.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
