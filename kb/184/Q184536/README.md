---
layout: page
title: "Q184536: XADM: Removing E-mail Addresses Through Directory Import"
permalink: /kb/184/Q184536/
---

## Q184536: XADM: Removing E-mail Addresses Through Directory Import

{% raw %}

	Article: Q184536
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	It is not possible to use ~DEL during directory import to remove a single value
	from a multi-valued field.
	
	Example:
	
	You want to remove a value from the E-Mail Addresses field for all users for a
	connector that has been removed. You can remove them individually through the
	Exchange Server Administrator program, but you cannot accomplish this in bulk
	through directory import.
	
	CAUSE
	=====
	
	The ~DEL value is available as part of the Bulk Import functionality. ~DEL is
	used to remove data from specific fields in the user properties. However, ~DEL
	will not remove a single value from a multi-valued field such as E-Mail
	Addresses.
	
	Example from an import file:
	
	Obj-Class,Directory Name,Home-Server,E-mail addresses
	Mailbox,Someone,SERVER,CCMAIL:Someone at SITE
	%MS:MSMAILSERVER/MSMAILSITE/SOMEONE%SMTP:Someone@SITE.microsoft.com
	%TEST:someone@microsoft%X400:c=US;a= ;p=Org;o=SITE;s=Someone;
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	An updated version of Dapi.dll enhances the functionality of ~DEL to allow
	removal of a single value from a multi-value field.
	
	Using the above import example, you can remove the "TEST:" address type that
	currently has a value of "someone@microsoft" by using the following syntax in
	the import file:
	
	     Obj-Class,Directory Name,Home-Server,E-mail addresses
	
	     Mailbox,Someone,SERVER,~del<TEST:someone@microsoft>
	
	NOTE: For this method to work, you can ONLY include the value you want to delete
	in the multi-valued property. If you include any other values, ~DEL does not
	remove the value.
	
	Example that does not work:
	
	     Obj-Class,Directory Name,Home-Server,E-mail addresses
	
	     Obj-Class,Directory Name,Home-Server,E-mail addresses
	     Mailbox,Someone,SERVER,CCMAIL:Someone at SITE
	     %MS:MSMAILSERVER/MSMAILSITE/SOMEONE%SMTP:Someone@SITE.microsoft.com
	     %~<TEST:someone@microsoft>%X400:c=US;a= ;p=Org;o=SITE;s=Someone;
	
	The sample e-mail address depicted herein is fictitious. No association with any
	real company, organization, product, person or event is intended or should be
	inferred.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
