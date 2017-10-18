---
layout: page
title: "Q252174: IISAdmin Fails to Start When the Metabase Is Too Large"
permalink: kb/252/Q252174/
---

## Q252174: IISAdmin Fails to Start When the Metabase Is Too Large

	Article: Q252174
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the metabase is too large to complete the initialization in the Service
	Control Manager timeout window, the IISAdmin service cannot be started.
	
	When you start the IISAdmin service from the command line, the following error
	message occurs:
	
	  The IIS Admin Service service could not be started.
	
	CAUSE
	=====
	
	When the service starts, the Service Control Manager is notified that you are
	going to start in xx seconds or less. This time is hard-coded in the IISAdmin
	service to 10,000 milliseconds, which is not enough time if the metabase is too
	large.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Version      Size    File name     Platform
	  -------------------------------------------
	  4.2.741.1    17,952  Iisadmin.dll  x86
	  4.2.741.1    29,456  Iisadmin.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	This fix is implemented by adding two registry values, one to allow you to
	modify the time for the service to start, and one for you to modify the time for
	it to stop.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Iisadmin\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: WaitHintStart
	  Data Type: REG_DWORD
	  Value: <Time to wait for service to start in milliseconds>
	
	  Value Name: WaitHintStop
	  Data Type: REG_DWORD
	  Value: <Time to wait for service to stop in milliseconds>
	
	4. Quit Registry Editor.
	
	To estimate what numbers should be entered for the Value, Microsoft recommends
	that you perform the following steps:
	
	1. Add the previous registry values, and then change the Value to a large
	  number.
	
	2. Start the service, and then time how long it takes to start.
	
	3. Modify the numbers according to the amount of time that you think it will
	  take to start. Over estimate the time, because if the service ever takes
	  longer to start, then the W3svc service or any of the other dependants
	  services will not start.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
