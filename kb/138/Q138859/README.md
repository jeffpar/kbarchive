---
layout: page
title: "Q138859: SNA Server Reference Documents Registry Settings Incorrectly"
permalink: /kb/138/Q138859/
---

## Q138859: SNA Server Reference Documents Registry Settings Incorrectly

	Article: Q138859
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Appendix C of the SNA Server "Reference Guide" describes SNA Server registry
	parameters that can be used to alter the default behavior of SNA Server. These
	parameters are configured in the following registry key:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/SnaServr/Parameters
	
	The Reference Guide describes these parameters as supporting "YES" and "NO"
	values. However, when most of these parameters are added to this registry key,
	the feature becomes enabled even though the registry value may be set to "NO".
	
	CAUSE
	=====
	
	The SNA Server service checks for the presence of these settings within the
	registry to determine whether to enable them or not, even if the entry is set to
	"NO". So, the Reference Guide incorrectly defines the method used to enable and
	disable these settings.
	
	RESOLUTION
	==========
	
	If the following entries are present in the SnaServr/Parameters key, they are
	enabled, even if set to "NO":
	
	  NOTERMSELF
	  NORETRY
	  ALLOWBBRQE
	  NO4004
	  NO400D
	  NO2001
	  CLEANUP
	  ALLOCINACT
	  NOINITCNOS
	  NOPWDSUB
	
	SNA Server 2.11 only:
	
	  FNA_SUPPORT
	  HNA_SUPPORT
	
	To disable the above settings, the registry value should be removed and the SNA
	Server service must be restarted.
	
	If the following entries are set to "NO" (all caps), the entry is disabled. If
	they are set to any other value, or are not present in the SnaServr/Parameters
	registry key, they are enabled:
	
	  RETRYCNOS
	  RENEGLIMITS
	
	If the following entry is set to "YES" (all caps), the entry is enabled. If it is
	set to any other value or is not present in the registry key, it is disabled:
	
	  NONOTIFYRSP
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, 3.0, and 4.0.
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	Issue type        : kbbug
	
	=============================================================================
	
