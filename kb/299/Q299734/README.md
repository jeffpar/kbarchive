---
layout: page
title: "Q299734: Component Configuration Document Does Not Refresh"
permalink: /kb/299/Q299734/
---

## Q299734: Component Configuration Document Does Not Refresh

	Article: Q299734
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Passport Manager requests the Component Configuration Document (CCD) as XML
	through the HTTP protocol, using port 443. Firewalls that prevent outbound or
	inbound HTTP prevent the Component Configuration Document from being updated.
	
	MORE INFORMATION
	================
	
	If the Passport server is behind a firewall, it may be necessary to introduce a
	staging system, in which a computer that bridges the firewall is specified as a
	file share and is enabled to refresh the CCD. The refresh can happen at
	specified intervals, or the computer can also be Passport Manager-enabled so
	that the refresh happens as needed. The file share on the computer can then be
	specified as the CCDLocalFile in the Passport node of the registry, and servers
	behind the firewall can then share that configuration and remain behind the
	firewall.
	
	Checking your CCD file periodically to see if any additions have been made to
	core profile attributes is recommended. Locate the Partner.xml document, usually
	in the WinNT\system32\MicrosoftPassport folder, and open it in the Microsoft
	Internet Explorer browser of your server to view the Passport configuration
	attributes. You can check the file date to see when it was last updated or check
	the Passport Manager events in Event Viewer to see if a CCD refresh event has
	been detected recently.
	
	REFERENCES
	==========
	
	For more information, see the following Microsoft Developer Network (MSDN) Web
	site:
	
	  Passport SDK 1.4
	  http://msdn.microsoft.com/library/en-us/ppsdk14/defeula2.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbinfo
	
	=============================================================================
	
