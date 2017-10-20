---
layout: page
title: "Q264552: Modification Error Occurs When Exporting Custom Recipients"
permalink: /kb/264/Q264552/
---

## Q264552: Modification Error Occurs When Exporting Custom Recipients

{% raw %}

	Article: Q264552
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 15-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you import custom recipients into the Global Address List in Microsoft
	Exchange 2000 Server with the Messaging Application Programming Interface (MAPI)
	Management agent, the follow error message appears in the Zscript.log:
	
	  Modify request ignored on missing object CN=Mc Test
	  [mctest@company.com],cn=ForeignRecipients,ou=NA,O=USA
	
	If a full run is made, then the users are duplicated, although they will have
	different names.
	
	CAUSE
	=====
	
	The Foreign Users Output Construction Template is used to build the Export file.
	The following lines in the Foreign Entries Output Construction Template define
	how the Distinguished Name (DN) for the custom recipient will be created in
	Exchange:
	
	  $v_RDN= -rdn: $v_name(^[$md.mail])
	  $v_dn=cn=$v_name(^[$md.mail])
	
	If the Primary Mail address is changed in Exchange, this affects how the
	construction of the DN in the Export file. When the Management agent runs, the
	record appears to be a new user to the Exchange server.
	
	RESOLUTION
	==========
	
	To resolve this issue, you need to delete the custom recipients that have
	changed and then push them back into Exchange as new users. If you need a
	long-term solution for making the DN more unique, you can modify the following
	two lines in the Foreign Entries Output Construction Template:
	
	  $v_RDN= -rdn: $v_name(^[$v_UID])
	  $v_dn=cn=$v_name(^[$v_UID])
	
	In addition, consider the following items:
	
	- The RDN and the DN need to be identical because Exchange will generate errors
	  if these values do not match exactly.
	
	- There are certain DN character limitations inherent to Exchange. For
	  instance, you cannot have a comma (,) inside the brackets ([]). Test the
	  value inside the brackets to make sure that it is unique and valid.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
