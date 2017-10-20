---
layout: page
title: "Q229810: SMS: Error: &quot;_com_error exception in MMC Admin UI!&quot;"
permalink: /kb/229/Q229810/
---

## Q229810: SMS: Error: &quot;_com_error exception in MMC Admin UI!&quot;

{% raw %}

	Article: Q229810
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 14-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get one of the following errors while using the Systems Management
	Server Administrator console:
	
	  _com_error exception in MMC Admin UI!
	
	  Description: Factory Enumeration Failure
	  HRESULT: 0xEEEE0001
	  File : E:\opal\mmcadminui\Support\SMS_NMGR\NMGR_NodeData.cpp
	  Line: 221
	
	  Description: Error enumerating (select * from SMS_Site where ReportingSiteCode
	  = "DMX")
	  HRESULT : 0x80041001
	  File: E:\opal\mmcadminui\Support\SMS_NWBM\NWBM_CWbemAsyncNodeFactory.cpp
	  Line: 346
	
	-or-
	
	  Description: CWbemAsyncNodeFactory::Enumerate Failed
	
	  Query : select Name, Icon, PackageID, SourceSite, Manufacturer, Version,
	  Language from SMS_Package where ActionInProgress!=3
	
	  HRESULT : 0x80010108-The object invoked has disconnected from its clients.
	  File: E:\opal\mmcadminui\Support\SMS_NWBM\NWBM_CWbemAsyncNodeFactory.cpp
	  Line: 107
	  Entry Point : Child node factory error
	
	Additionally, the dialog box also defines the build as SMS 2.0 Beta (1239).
	
	NOTE: You may receive a different "_com_error execption" error from the ones that
	are specifically listed in this article.
	
	CAUSE
	=====
	
	Although these error messages appear to be problems with the Administrator
	console or Microsoft Management Console (MMC), investigation has only shown
	these messages to appear where there are genuine connectivity or site system
	problems.
	
	WORKAROUND
	==========
	
	Below are two examples that you can use as clues in troubleshooting these errors
	and preventing the error messages:
	
	- The Line 346 error may occur if an Administrator console is connected to a
	  remote SQL Server database and the SQLExecutive and MSSQLServer services are
	  stopped. An attempt to refresh at certain levels will cause this error.
	
	- The Line 107 error may occur if the Administrator console is connected to a
	  remote SQL Server database and the SQL Server hard disk partition fails.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
