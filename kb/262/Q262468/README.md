---
layout: page
title: "Q262468: SMS: &quot;Insufficient Rights&quot; Msg During Distribute Software Wizard"
permalink: kb/262/Q262468/
---

## Q262468: SMS: &quot;Insufficient Rights&quot; Msg During Distribute Software Wizard

	Article: Q262468
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbConfig kbMMC kbSecurity kbServer kbsms200 kbsms200bug kbAdvertisement kbCollections k
	Last Modified: 09-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the Distribute Software Wizard, you may receive an error
	that states that there are insufficient rights to run the wizard. This will
	occur even if you have all of the INSTANCE level rights on the Collection class.
	
	CAUSE
	=====
	
	The Distribute Software Wizard in Systems Management Server (SMS) checks CLASS
	level permissions only. Without adding CLASS level permissions on the Collection
	class to your user account, there is no method to enable you to use the Software
	Distribution Wizard.
	
	WORKAROUND
	==========
	
	To work around this issue, you can create an advertisement manually. In order to
	advertise to a Collection, as the logged-on user, you must have the advertise
	INSTANCE right for a collection. Once the you obtain the INSTANCE level right,
	then it is possible to manually create an advertisement for objects of a
	collection.
	
	To follow the steps to manually create an advertisement, refer to the SMS
	administrators' guide, on page 417, "Use the SMS Administrators Console."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	This issue becomes apparent when an SMS administrator attempts to limit the
	scope of ability for other administrators. More specifically, when you (as an
	administrator) attempt to limit the collections that an administrator can
	advertise to, you experience this issue.
	
	Another issue that may be encountered is on a user's ability to advertise to a
	collection that they created if the user only had INSTANCE level rights on
	specific collections. The result is that after creating the new collection, the
	user is unable to advertise to the collection that was just created because
	INSTANCE level permissions are not inherited from other collections. Thus, an
	administrator with CLASS level permissions to the new collection must grant the
	creator the INSTANCE level Advertise right.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbMMC kbSecurity kbServer kbsms200 kbsms200bug kbAdvertisement kbCollections kbPackage kbsmsAdmin kbsmsUtil kbSoftwareDist kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
