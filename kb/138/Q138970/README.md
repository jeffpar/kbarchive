---
layout: page
title: "Q138970: Configuring the NVAlert and NVRunCmd Host Code Page"
permalink: /kb/138/Q138970/
---

## Q138970: Configuring the NVAlert and NVRunCmd Host Code Page

{% raw %}

	Article: Q138970
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft SNA Server includes the NetView Alerter (NVAlert) and NetView Run
	Command (NVRunCmd) services. The NVAlert service is used to send predefined
	Windows NT events to NetView; NVRunCmd is used to allow a NetView host operator
	to send commands to Windows NT. By default, these services use the United States
	(037) host code page.
	
	The host code page used by these services can be changed by setting the host code
	page within the SNA Server Windows NT 3270 applet. This must be done on the
	server where these services are run. The NVAlert and NVRunCmd services look for
	the 3270 emulator's configured host code page to determine the host code page to
	be used.
	
	
	MORE INFORMATION
	================
	
	The SNA Server Windows NT 3270 applet's host code page setting is configured in
	the "Host code page" listbox within the 3270 applet's Session / Session
	Configuration dialog. The following host code pages can be selected:
	
	Australia (037)
	Belgium (037)
	Canada(English) (037)
	Canada(French) (037)
	Denmark (277)
	Finland (278)
	France (297)
	Germany (273)
	International (500)
	Italy (280)
	Latin America (284)
	Netherlands (037)
	Norway (277)
	Portugal (037)
	Spain (284)
	Sweden (278)
	Switzerland(French) (500)
	Switzerland(German) (500)
	United Kingdom (285)
	United States (037)
	
	For SNA Server version 3.0, the following host code pages were added to the 3270
	applet:
	
	China (935)
	Czech Republic (870)
	Greece (423)
	Greece (875)
	Japan (English lower) (931)
	Japan (Extended Katakana) (930)
	Korea (933)
	Taiwan (937)
	
	The default host code page is United States (037). The value chosen here is
	written to the [SnaServerWin3270] section of the <ntroot>\WIN.INI file, in
	the "LUHostCountry=" parameter. For example:
	
	[SnaServerWin3270] LUHostCountry=Canada(French) (037)
	
	The NVAlert and NVRunCmd services look at this setting to determine the host code
	page that they should use.
	
	Additional query words: prodsna codepage
	
	======================================================================
	Keywords          : kbnetwork kbsetup sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
