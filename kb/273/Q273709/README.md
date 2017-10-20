---
layout: page
title: "Q273709: Users Created With Active Directory MA Have A Blank Password"
permalink: /kb/273/Q273709/
---

## Q273709: Users Created With Active Directory MA Have A Blank Password

{% raw %}

	Article: Q273709
	Product(s): Microsoft Windows NT
	Version(s): 2.2
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create users with the Active Directory Management Agent, the password
	may not be set correctly. However, the user is able to log on with a blank
	password.
	
	In the Compass client computer's operator's log, the following error message may
	be reported:
	
	  ERR_00 0300 00/09/08 14:23:58.594 (AD-MA_LdapInitSSL) Couldn't connect to
	  domain controller SERVER FQDN on port 636, LDAP error = 81 - Server Down
	
	  ERR_00 0300 00/09/08 14:23:58.595 (AD-MA_dataFlowFromMdToAd) Failed to
	  establish 128-bit SSL connection to <Server fdqn>
	
	where <Server fqdn> is the fully qualified domain name of the domain
	controller to which Microsoft Metadirectory Services (MMS) attempts to connect
	to.
	
	CAUSE
	=====
	
	This behavior can occur if the domain controller and MMS do not use a cipher
	strength of 128-bits.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the 128-bit High Encryption Pack on the MMS-based
	server and all the domain controllers. If any Microsoft Windows 2000 service
	packs are installed on the affected computers, reinstall the current service
	pack.
	
	In addition, refer to the MMS Active Directory Management Agent Administration
	Manual. Under the Planning Issues section, read the Security Requirements. One
	of the necessary requirements is to have an Enterprise-Wide Certificate
	Authority in place along with 128-bit High Encryption.
	
	MORE INFORMATION
	================
	
	Windows 2000 Active Directory requires a connection over port 636 with 128-bit
	cipher strength to set the user password attribute UnicodePwd. Other attributes
	do not have this requirement.
	
	Additional query words: zoomit metadirectory MMS ADMA
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS220
	Version           : :2.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
