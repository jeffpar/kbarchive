---
layout: page
title: "Q258003: Re-creating Missing DSA Attributes After VIACompact"
permalink: kb/258/Q258003/
---

## Q258003: Re-creating Missing DSA Attributes After VIACompact

	Article: Q258003
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DSA record in the metadirectory may lose particular attributes. The
	following table is a partial list of the attributes that may be missing when you
	run a "View all attributes" query on the DSA record.
	
	+-------------------------------------------------------------------------------+
	| Attribute function           | Attribute names                                | 
	+-------------------------------------------------------------------------------+
	| server logs                  | zcServerLog & zcServerLogControl               | 
	+-------------------------------------------------------------------------------+
	| available MA types           | zcZoomitMAs & zcZoomitMAsControl               | 
	+-------------------------------------------------------------------------------+
	| MA zscript logs              | zcServerZscriptLog & zcServerZscriptLogControl | 
	+-------------------------------------------------------------------------------+
	| Default client access method | suggestedSASLMechanism                         | 
	+-------------------------------------------------------------------------------+
	| replication logs             | zcServerRepLog & zcServerRepLogControl         | 
	+-------------------------------------------------------------------------------+
	| custom MA types              | zcSiteMAs & zcSiteMAsControl                   | 
	+-------------------------------------------------------------------------------+
	| server BAK logs              | zcServerLogBak & zcServerLogBakControl         | 
	+-------------------------------------------------------------------------------+
	| database configuration       | zcDb5Configuration & zcDb5ConfigurationControl | 
	+-------------------------------------------------------------------------------+
	| server naming context        | zcNamingContext                                | 
	+-------------------------------------------------------------------------------+
	| DSA object read permissions  | zcOwnReadPermissions                           | 
	+-------------------------------------------------------------------------------+
	| DSA object write permissions | zcOwnModifyPermissions                         | 
	+-------------------------------------------------------------------------------+
	| dsa access protocols         | supportedSASLMechanisms                        | 
	+-------------------------------------------------------------------------------+
	
	CAUSE
	=====
	
	This behavior can occur after a missing DSA record has been automatically
	reconstructed by VIACompact.
	
	RESOLUTION
	==========
	
	To restore the missing attributes to the DSA record:
	
	1. Stop the server.
	
	2. In the Zoomserv\Bin\Init folder, type "..\importt -updatedib
	  -updateallattributes" (without the quotation marks).
	
	If the icons on the Action bar for the DSA are missing (that is, there is no
	"Configure the management agent" icon:
	
	- Stop the server.
	
	- In the Zoomserv\Bin\Init\Methods folder, type "loadmeth.bat" (without the
	  quotation marks).
	
	MORE INFORMATION
	================
	
	Other indications of a missing DSA record include the ability to log on to the
	server by using HTTP, but not LDAP. This occurs because the security
	verification methods for HTTP, unlike LDAP, do not access the DSA record.
	
	Additional query words: MMS viacompact Zoomit Via
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
