---
layout: page
title: "Q235997: SSIExecDisable Does Not Work after Applying Windows NT SP4"
permalink: /kb/235/Q235997/
---

## Q235997: SSIExecDisable Does Not Work after Applying Windows NT SP4

{% raw %}

	Article: Q235997
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
	
	Disabling the #exec function in Server-Side Include files using the
	SSIExecDisable metabase setting will not work after you apply Windows NT Service
	Pack 4.
	
	For additional information on disabling the #exec function in Server-Side Include
	files, please see the following article in the Microsoft Knowledge Base:
	
	  Q195291 How to Disable #exec in Server-Side Include Files
	
	CAUSE
	=====
	
	Ssinc.dll is not updated through Windows NT Service Pack 4. It has dependencies
	in Infocomm.dll and W3svc.dll that changed with Windows NT Service Pack 4,
	causing SSIExecDisable to no longer work.
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  06/15/99  09:18p                60,176 Ssinc.dll     Alpha
	  06/15/99  09:18p                38,256 Ssinc.dll     x86
	
	
	
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
	

{% endraw %}
