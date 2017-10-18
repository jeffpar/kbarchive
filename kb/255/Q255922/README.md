---
layout: page
title: "Q255922: Management Agent Configuration Form Contains Incorrect Example"
permalink: kb/255/Q255922/
---

## Q255922: Management Agent Configuration Form Contains Incorrect Example

	Article: Q255922
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Maconfig.frm form in the Netscape and NDS LDAP Management
	Agent, you may not be able to authenticate against the LDAP directory.
	
	CAUSE
	=====
	
	This issue can occur because the Maconfig.frm form is not the correct example
	for logging on, but is the correct example for the Context Prefix setting.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following examples:
	
	Context Prefix:
	e.g. dc=companyname,dc=com or o=companyname,c=us
	(This depends on your naming context in NDS or Netscape.)
	
	Login As:
	e.g. cn=adminaccount,dc=companyname,dc=com
	
	To edit the form, you can use the directory forms designer to configure the form.
	However, you probably do not need to make this change.
	
	1. In Compass, press and hold down the CTRL key, and then right-click the form.
	  Note the correct form name.
	
	2. In the Directory Forms Designer, click the formset you want to change.
	
	3. Open the formset, click the form in the list, and then click Edit.
	
	4. Make the changes you want, and then click Save on the Formset menu.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
