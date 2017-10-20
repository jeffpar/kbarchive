---
layout: page
title: "Q97487: Can't Find &quot;drivername=PCNIC&#36;&quot; in PROTOCOL.INI"
permalink: /kb/097/Q97487/
---

## Q97487: Can't Find &quot;drivername=PCNIC&#36;&quot; in PROTOCOL.INI

{% raw %}

	Article: Q97487
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SYMPTOMS
	========
	
	The IMC PCNIC8 network interface card (NIC) made by ACS Telecom includes its own
	OEMSETUP.INF file. You may have problems when you try to install this NIC due to
	an error in the OEMSETUP.INF file. When you restart your computer, an error
	message appears stating that "drivername=PCNIC$" cannot be found.
	
	CAUSE
	=====
	
	This error is caused by an incorrect PROTOCOL.INI setting. After you install the
	driver for this NIC, the following is entered in the PROTOCOL.INI file:
	
	     [IMC$PCNIC8]
	     drivername=PCNIC8$
	
	WORKAROUND
	==========
	
	This setting should be changed as follows:
	
	     [IMC$PCNIC8]
	     drivername=PCNIC$
	
	For more information, contact ACS Telecom.
	
	The product included here is manufactured by a vendor external to Microsoft; we
	make warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.1 3.10 ndis
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
