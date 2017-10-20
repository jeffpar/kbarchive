---
layout: page
title: "Q87178: PROFS: Information Required to Troubleshoot LAN-Side Problems"
permalink: /kb/087/Q87178/
---

## Q87178: PROFS: Information Required to Troubleshoot LAN-Side Problems

{% raw %}

	Article: Q87178
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When troubleshooting problems with the LAN side of the Microsoft Gateway to IBM
	PROFS, Microsoft Product Support Services (PSS) needs as much information as
	possible about the problem and your site's gateway configuration:
	
	- Please supply the versions of both the Gateway and Host Access code, and
	  possibly the release of the postoffice that is installed on the local-area
	  network (LAN). Also, we may need to know the type of 3270 emulation program
	  the gateway PC is using.
	
	- Please describe the problem as accurately and as definitively as possible.
	  For example, rather than stating that "the gateway is down," use a more
	  accurate description, such as "LAN mail is not getting uploaded to the host,
	  and the resulting files are being copied into the VMGATE\ERR subdirectory."
	
	- If describing the problem is difficult, the best single source of problem
	  information is usually the VMGATE.LOG file in the LOG subdirectory of the
	  mail system database. Use the -V -Q -L options to generate a very detailed
	  log of gateway activity, which will hopefully indicate the reason why the
	  problem is occurring.
	
	For a first contact form you can use to collect needed information, query the
	Knowledge Base for this word:
	
	  profsfcc
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan troubleshooting
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
