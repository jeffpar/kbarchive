---
layout: page
title: "Q297486: Incorrect Server Variables If You Use Client Certificate Mapping"
permalink: kb/297/Q297486/
---

## Q297486: Incorrect Server Variables If You Use Client Certificate Mapping

	Article: Q297486
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Internet Information Server (IIS) 5.0 and Active Directory client
	certificate mapping, the authenticated user is displayed in the server variables
	list as <SERVERNAME>\<loggedonuser> instead of
	<DOMAINNAME>\<loggedonuser>.
	
	You can use the following Active Server Pages (ASP) page to generate the related
	server variables output:
	
	  <%
	  response.write request.servervariables ("AUTH_USER") & "<BR>"
	  response.write request.servervariables ("LOGON_USER") & "<BR>"
	  response.write request.servervariables ("REMOTE_USER") & "<BR>"
	  response.write "HELLO" & "<BR>"
	  %>
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Windows 2000 service pack that contains this fix.
	
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
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	5.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
