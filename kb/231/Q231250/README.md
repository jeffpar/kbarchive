---
layout: page
title: "Q231250: SMS: Deleting Collection Fails, Connection Status Remains Busy"
permalink: /kb/231/Q231250/
---

## Q231250: SMS: Deleting Collection Fails, Connection Status Remains Busy

{% raw %}

	Article: Q231250
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to delete a collection through the MMC Systems Management Server
	(SMS) Administrator Console, the collection is not successfully deleted.
	
	The collection briefly disappears, then re-appears with a "refreshing"
	hourglass.
	
	An exception dialog box appears, and the following information is displayed when
	you click "More Information":
	
	  
	
	  _com_error exception in MMC Admin UI!
	
	  Description: 	Factory Enumeration Failure
	  HRESULT : 	0xEEEE0001
	  File : 		E:\opal\mmcadminui\Support\SMS_NMGR\NMGR_NodeData.cpp
	  Line: 		272
	  <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
	  Description: 	Error enumerating (select * from SMS_CM_RES_COLL_JRE0001E)
	  HRESULT : 	0x80041001
	  File : 		E:\opal\mmcadminui\Support\SMS_NWBM\NWBM_CWbemAsyncNodeFactory.cpp
	  Line: 		346
	  <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
	  Description: 	Collection could not be locked. 
	  Error : 		WBEM_E_FAILED
	  Operation:	ExecQuery
	  ParameterInfo:	select * from SMS_CM_RES_COLL_JRE0001E
	  Wbem error object:
	
	  instance of SMS_ExtendedStatus
	  {
		Description = "Collection could not be locked. ";
		ErrorCode = 3242722560;
		File = "E:\\opal\\sdk_provider\\nt\\smsprov\\SspCollection.cpp";
		Line = 999;
		ObjectInfo = "JRE0001E";
		Operation = "ExecQuery";
		ParameterInfo = "select * from SMS_CM_RES_COLL_JRE0001E";
		ProviderName = "ExtnProv";
		StatusCode = 2147749889;
	  };
	  Entry Point : 	Result node factory error Targetted for IE 5 Setup
	  Operation : 	
	  Command Line: 	D:\WINNT\System32\mmc.exe "H:\SMS\bin\i386\sms.msc" "" "" "" "" "" "" "" ""
	  Trace :		
	
	  MMF Build Info : 	SMS 2.0 Beta (1239)
	
	CAUSE
	=====
	
	The provider fails to delete a collection if the provider is not on the Site
	server and there have been advertisements targeted at the collection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms crash crashed gpf fatal hang hung remove
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
