---
layout: page
title: "Q262606: IIS Access Violations Occur with DBCS Trail Byte Truncated URL"
permalink: /kb/262/Q262606/
---

## Q262606: IIS Access Violations Occur with DBCS Trail Byte Truncated URL

	Article: Q262606
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
	
	Internet Information Server (IIS) may generate an Access Violation error message
	in the Inetinfo.exe process when you request a URL with a DBCS trail byte that
	is truncated.
	
	CAUSE
	=====
	
	The URL with a DBCS trail byte that is truncated can cause heap corruption and
	eventually cause intermittent IIS Access Violation error messages to occur.
	
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
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  05-05-00  08:23a  4.02.0744    185,760 Infocomm.dll  x86
	  05-05-00  08:24a  4.02.0744     38,256 Ssinc.dll     x86
	  05-05-00  08:24a  4.02.0744     25,360 Sspifilt.dll  x86
	  05-05-00  08:24a  4.02.0744    228,496 W3svc.dll     x86
	  05-05-00  08:24a  4.02.0744    304,400 Infocomm.dll  alpha
	  05-05-00  08:25a  4.02.0744     60,176 Ssinc.dll     alpha
	  05-05-00  08:25a  4.02.0744     39,696 Sspifilt.dll  alpha
	  05-05-00  08:25a  4.02.0744    383,760 W3svc.dll     alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
