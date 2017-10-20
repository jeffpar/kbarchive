---
layout: page
title: "Q195944: SMS: Package Command Manager Preferred Server Selection"
permalink: /kb/195/Q195944/
---

## Q195944: SMS: Package Command Manager Preferred Server Selection

{% raw %}

	Article: Q195944
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbPCM
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Package Command Manager (PCM) is designed to be robust in its capability to
	select a distribution server. The selection logic algorithm for PCM is:
	
	1. Check the client's current Systems Management Server logon server.
	
	2. If necessary, check each of the client's drive mappings.
	
	3. If necessary, select a server at random from the client's PCM instruction
	  file (<SMS_ID>.ins), located in the SMS\Logon.srv\Pcmins.box directory
	  on the client's Systems Management Server logon server.
	
	As of Systems Management Server 1.2 Service Pack 4, you can control this
	selection logic by using the DisableRandomPCMServers= setting in the [LOCAL]
	Section of the Sms.ini file. For additional information about the options
	available in Systems Management Server 1.2 Service Pack 4, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q180151 SMS: How to Select the PCM Distribution Server Selection Logic
	
	If you have clients that are remote to their logon servers or are unable to
	maintain drive mappings, the server selections described above may not be
	optimal.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server 1.2 service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	This hotfix was recently refreshed. The English version of this fix should have
	the following file attributes or later:
	
	  Date         Time           Size     File name    Platform
	  ----------------------------------------------------------
	
	  06/24/99   02:43pm        270,320   Pcmsvc32.exe   Intel
	  06/24/99   02:43pm        469,936   Pcmwin32.exe   Intel
	  06/24/99   02:43pm        800,528   Pcmsvc32.exe   Alpha
	  06/24/99   02:42pm      1,174,800   Pcmwin32.exe   Alpha
	
	NOTE: This fix applies only to the 32-bit versions of PCM.
	
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	NOTE: This hotfix refers only to the 32-bit versions of Package Command
	Manager.
	
	With the hotfix, it is now possible to specify a preferred server or servers in
	the registry. To do so, perform the steps below to create registry keys on each
	client.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. In REGEDT32, create the following key, where <zzz> is the site code:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\NAL\Client\Preferred AbExprtDB
	  \DP List for site <zzz>
	
	
	2. Under the above key, create one REG_SZ value with no data for each preferred
	  distribution server as follows:
	
	     MSWNET:["SMS_SITE=<zzz>"]\\ServerName\SMS_PKG<x>
	
	  Where <zzz> = site code and <x> is based on an enumeration of the
	  server's shares.
	
	
	PCM looks at this list of network paths and extracts the servername\sharename
	substring. This servername will be used in the preferred server selection. It
	obtains the package directory name from the PCM instruction file on the Systems
	Management Server logon server. The Server\SMS_PKG<x> string must
	accurately reflect the location of the package. If your distribution server has
	multiple package shares, you must have multiple MSWNET entries, one for each
	ServerName\Share combination.
	
	
	To control how PCM uses the preferred server, choose one of the following:
	
	- To disable any selection attempts beyond trying a random server selected from
	  the client's preferred server list, add the following line to the [Local]
	  section of the client's Sms.ini file:
	
	     DisableRandomPCMServers=PREFERREDONLY
	
	  NOTE: If none of the preferred servers has a copy of the package, only the
	  current logon server will be tried next.
	
	- To use the preferred server selections first and then the default server
	  selection logic (as detailed in the SYMPTOMS section above), add the
	  following line to the [Local] section of the client's Sms.ini file:
	
	     DisableRandomPCMServers=PREFERREDFIRST
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. Replace the Pcmsvc32.exe file in the
	  <SMS_root>\Site.srv\<Platform>.bin directory with the hotfixed
	  version.
	
	2. A site reset is required for the updated file to be copied to all servers
	  managed by the Site Configuration Manager. Windows NT Workstation computers
	  running PCMSVC32 must be updated using RSERVICE.
	
	3. Replace the Pcmwin32.exe file in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\<Platform>.bin
	  directory with the hotfixed version.
	
	4. Maintenance Manager will replicate the updated file to the Systems Management
	  Server logon servers on its next work cycle. To update the clients running
	  PCMWIN, either manually run Upgrade.bat on each client or follow the
	  instructions in the following article in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	For additional information about PCM, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q180151 SMS: How to Select the PCM Distribution Server Selection Logic
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbPCM 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
