---
layout: page
title: "Q263216: Dr. Watson Error in Cluster Administrator"
permalink: /kb/263/Q263216/
---

## Q263216: Dr. Watson Error in Cluster Administrator

	Article: Q263216
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbClustServSearch kbDSupport kbIIS kbiis400
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you view Internet Information Server property pages after you install version
	6.00.xxxx.x of Mfc42u.dll, you may receive a Dr. Watson error message in Cluster
	Administrator.
	
	CAUSE
	=====
	
	These versions of Mfc42u.dll use a different method of retrieving handles to the
	Internet Information Server property sheets than previous versions did.
	
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
	
	  Date        Time    Version     Size   File name     Platform
	  -------------------------------------------------------------
	  04/06/2000  05:54p  4.2.742.1   65,664 iisclex4.dll  x86
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	Additional query words: MSCS IIS Cluster Dr. Watson Server Instance
	
	======================================================================
	Keywords          : kbClustServSearch kbDSupport kbIIS kbiis400 
	Technology        : kbiisSearch kbAudDeveloper kbClustServSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
