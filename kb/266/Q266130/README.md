---
layout: page
title: "Q266130: SMS: Component Versions in Microsoft Systems Management Server 2"
permalink: /kb/266/Q266130/
---

## Q266130: SMS: Component Versions in Microsoft Systems Management Server 2

{% raw %}

	Article: Q266130
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbClient _IK964 kbServer kbWBEM kbsms200 kbAppMan kbInventory kbsmsMeter kbUpgrade kbRe
	Last Modified: 27-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	As of the release of Service Pack 2 for Microsoft Systems Management Server
	(SMS) 2.0, the versions of the individual client components are not identical
	for all platforms.
	
	MORE INFORMATION
	================
	
	When a Service Pack is applied to a site, all of the client components are
	updated with new files and a new version number. This version number is stored
	in the Compver.ini file that is stored along with each of the component's files.
	The Compver.ini files for each component can be found in the following
	locations:
	
	  Client Base Components     - SMS\Inboxes\clicomp.src\base\compver.ini
	  Hardware Inventory         - SMS\Inboxes\clicomp.src\hinv\compver.ini
	  License Metering           - SMS\Inboxes\clicomp.src\licmtr\compver.ini
	  Remote Control             - SMS\Inboxes\clicomp.src\remctrl\compver.ini
	  Software Inventory         - SMS\Inboxes\clicomp.src\sinv\compver.ini
	  Available Programs Manager - SMS\Inboxes\clicomp.src\smsapm32\compver.ini
	  Event to Trap(SNMP)        - SMS\Inboxes\clicomp.src\snmpelea\compver.ini
	  Software Distribution      - SMS\Inboxes\clicomp.src\swdist\compver.ini
	  Windows Management(WBEM)   - SMS\Inboxes\clicomp.src\wbem\compver.ini
	
	SMS 2.0 implements a method of file version tracking using the Compver.ini files
	in each component. If the version that currently exists on the client is equal
	to or later than the version on the client access point (CAP), which is by
	default on the site server, the client does not upgrade its component files.
	However, if the version on the client is earlier than that of the site server,
	the client receives updated files on the next Client Configuration Installation
	Manager (CCIM) polling interval.
	
	The version numbers for each component are presented in this format
	
	  2.00.1493.2000
	
	where:
	
	- 2.xx.xxxx.xxxx represents the full version revision of the product.
	
	- x.00.xxxx.xxxx represents the minor version revision of the product.
	
	- x.xx.1493.xxxx represents the build number of the particular version.
	
	- x.xx.xxxx.2000 represents the Service Pack release number as well as a minor
	  build or revision and it is generally component specific.
	
	  NOTE: This is where the service pack level is determined. If the number reads
	  0000, the installation is the initial version of SMS 2.0. If it is 1000, the
	  site has Service Pack 1 installed. If the number is 2000, Service Pack 2 has
	  been applied. If the number is 3000, Service Pack 3 has been applied.
	
	  NOTE: The last four digits represent several different conditions such as the
	  International Client Pack (ICP) version and hotfix levels as well as the
	  Service Pack.
	
	For additional information about the ICP levels, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q213410 Determining Version and Build Number
	
	In general, when any of the last three digits of the file segment change, it is
	understood that a new component version has been applied, such as the
	installation of a hotfix.
	The following information is a listing of the client component versions at each
	Service Pack level as they are displayed in the Compver.ini on the CAP.
	
	Initial SMS 2.0:
	
	All Client Components had a version of 2.00.1239.0000.
	Windows Management (WBEM) - 698.0000
	
	Service Pack 1:
	
	All client components had a version of 2.00.1380.1000.
	Windows Management (WBEM) - 698.0001
	
	Service Pack 2:
	
	  Client Base Components     - 2.00.1493.2009
	  Hardware Inventory         - 2.00.1493.2000
	  License Metering           - 2.00.1493.2000
	  Remote Control             - 2.00.1493.2001
	  Software Inventory         - 2.00.1493.2006
	  Available Programs Manager - 2.00.1493.2011
	  Event to Trap (SNMP)       - 2.00.1493.2000
	  Software Distribution      - 2.00.1493.2011
	  Windows Management (WBEM)  - 698.0012 (Windows NT 4.0 clients)
	  Windows Management (WBEM)  - 1085.0005 (Windows 2000 clients)
	
	Please note that these are the starting versions for each of the client
	components as of the release of Service Pack 2. These version numbers can change
	with the application of future hotfixes.
	
	Service Pack 3:
	
	  Client Base Components     - 2.00.1493.3004
	  Hardware Inventory         - 2.00.1493.3000
	  License Metering           - 2.00.1493.3000
	  Remote Control             - 2.00.1493.3008
	  Software Inventory         - 2.00.1493.3006
	  Available Programs Manager - 2.00.1493.3002
	  Event to Trap (SNMP)       - 2.00.1493.3000
	  Software Distribution      - 2.00.1493.3000
	  Windows Management (WBEM)  - 698.0012 (Windows NT 4.0 clients)
	  Windows Management (WBEM)  - 1085.0005 (Windows 2000 clients)
	
	These are the starting versions for each of the client components as of the
	release of Service Pack 3. These version numbers can change with the application
	of future hotfixes.
	
	Service Pack 4:
	
	  Client Base Components     - 2.00.1493.4009
	  Hardware Inventory         - 2.00.1493.4008
	  License Metering           - 2.00.1493.4000
	  Remote Control             - 2.00.1493.4008
	  Software Inventory         - 2.00.1493.4008
	  Available Programs Manager - 2.00.1493.4012
	  Event to Trap (SNMP)       - 2.00.1493.4000
	  Software Distribution      - 2.00.1493.4006
	  Windows Management (WBEM)  - 698.0021 (Windows NT 4.0/Windows 95, Windows 98, and Windows Me clients)
	  Windows Management (WBEM)  - 1085.0005 (Windows 2000 and later clients)
	
	These are the starting versions for each of the client components as of the
	release of Service Pack 4. These version numbers can change with the application
	of future hotfixes. When you are troubleshooting client version errors, also
	check for the Compver.ini on the CAPs. The component specific Compver.ini files
	are located in the following directories on the CAP:
	
	  Client Base Components     - CAP_***\clicomp.box\base\compver.ini
	  Hardware Inventory         - CAP_***\clicomp.box\hinv\compver.ini
	  License Metering           - CAP_***\clicomp.box\licmtr\compver.ini
	  Remote Control             - CAP_***\clicomp.box\remctrl\compver.ini
	  Software Inventory         - CAP_***\clicomp.box\sinv\compver.ini
	  Available Programs Manager - CAP_***\clicomp.box\smsapm32\compver.ini
	  Event to Trap(SNMP)        - CAP_***\clicomp.box\snmpelea\compver.ini
	  Software Distribution      - CAP_***\clicomp.box\swdist\compver.ini
	  Windows Management(WBEM)   - CAP_***\clicomp.box\wbem\compver.ini
	
	If you are troubleshooting version conflicts from the client side, open Control
	Panel, and then run the Systems Management applet. The component versions are
	listed on the Components tab.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient _IK964 kbServer kbWBEM kbsms200 kbAppMan kbInventory kbsmsMeter kbUpgrade kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
