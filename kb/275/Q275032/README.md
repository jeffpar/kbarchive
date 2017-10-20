---
layout: page
title: "Q275032: IISLog Event Can't Create Directory Occurs at Startup"
permalink: /kb/275/Q275032/
---

## Q275032: IISLog Event Can't Create Directory Occurs at Startup

{% raw %}

	Article: Q275032
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400 kbiis400bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An expected Internet Information Server (IIS) log in the
	%systemroot%\System32\Logfiles folder is not created.
	
	The following log entry may appear in the Event Viewer:
	
	  Event ID: 2
	  Source: IISLog
	  "Cannot Create Directory"
	
	Note: Garbage is listed in place of the name that was not initialized. It is
	possible in this scenario to have hundreds of these errors present in the event
	logs.
	
	CAUSE
	=====
	
	During system startup, IIS attempts to initialize the IIS logs. When the open is
	attempted it can happen that the metabase is locked exclusively for some time.
	As a result, the attempt to access the metabase fails and the IIS log cannot be
	initialized. If the metabase is available immediately, this problem does not
	occur.
	
	
	WORKAROUND
	==========
	
	To work around this problem, start IIS and all dependency services manually
	following system initialization.
	
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
	  12/15/2000  05:17p 4.2.754.1   62,960 iislog.dll    x86
	  12/15/2000  05:17p 4.2.754.1   29,520 iscomlog.dll  x86
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbiis400 kbiis400bug 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
