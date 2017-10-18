---
layout: page
title: "Q220847: FTP Cannot Retrieve Files with DBCS Characters"
permalink: kb/220/Q220847/
---

## Q220847: FTP Cannot Retrieve Files with DBCS Characters

	Article: Q220847
	Product(s): Internet Information Server
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 3.0 
	-------------------------------------------------------------------------------
	
	Note: This article applies to the Simplified Chinese, Traditional Chinese, Pan-Chinese, Korean, and Japanese versions of Internet Information Server version 3.0.
	
	SYMPTOMS
	========
	
	Microsoft Internet Information Server (IIS) 3.0 FTP is not able to retrieve
	(using the GET command) files with the localized (DBCS) characters in the file
	name when the system is upgraded to SP4. "File not found" errors (in the
	localized language) occur.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 Service Pack that contains this fix.
	
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
	
	This fix should have the following file attributes or later:
	
	  
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  Pan-Chinese
	  03/18/99  05:08p                69,136 Ftpsvc2.dll   (x86)
	  03/18/99  05:08p               104,720 Ftpsvc2.dll   (Alpha)
	
	  Simplified Chinese
	  03/18/99  05:08p                64,272 Ftpsvc2.dll   (x86)
	  03/18/99  05:08p               104,720 Ftpsvc2.dll   (Alpha)
	
	  Traditional Chinese
	  03/18/99  05:08p                64,272 Ftpsvc2.dll   (x86)
	  03/18/99  05:08p               104,720 Ftpsvc2.dll   (Alpha)
	
	  Korean
	  03/18/99  05:08p                64,272 Ftpsvc2.dll   (x86)
	  03/18/99  05:08p               104,720 Ftpsvc2.dll   (Alpha)
	
	  Japanese
	  03/18/99  05:08p                69,136 Ftpsvc2.dll   (x86)
	  03/18/99  05:08p               104,720 Ftpsvc2.dll   (Alpha)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 3.0.
	
	Additional query words: iisftp
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : winnt:3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
