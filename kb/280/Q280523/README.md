---
layout: page
title: "Q280523: Client Certificate Mapping Does Not Work with French Locale"
permalink: /kb/280/Q280523/
---

## Q280523: Client Certificate Mapping Does Not Work with French Locale

{% raw %}

	Article: Q280523
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Certificate Mapping feature does not work when Internet Information Server
	(IIS) version 4.0 is installed on a server with the system locale set to French.
	If you set up some mapping definitions, the settings remain valid until you
	restart IIS. However, after you restart the IIS Admin service, the mapping list
	is empty and all of your settings are lost.
	
	CAUSE
	=====
	
	This problem can occur because on startup, IIS checked the session key in an
	incorrect way that only appears as an error when using the default system locale
	is set to French.
	
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version     Size     File name     Platform
	  -------------------------------------------------------------
	  11/09/2000  12:27a  4.2.753.1    65,392  Iismap.dll    x86
	  11/09/2000  12:28a  4.2.753.1   108,304  Iismap.dll    alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
