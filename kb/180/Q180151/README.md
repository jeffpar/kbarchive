---
layout: page
title: "Q180151: How to Select the PCM Distribution Server Selection Logic"
permalink: /kb/180/Q180151/
---

## Q180151: How to Select the PCM Distribution Server Selection Logic

{% raw %}

	Article: Q180151
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Package Command Manager (PCM) is designed to be robust in its capability to
	select a distribution server to find a given package. The selection logic
	algorithm for PCM to find a package is:
	
	1. Check the client's current Systems Management Server logon server.
	
	2. If necessary, check each of the client's drive mappings.
	
	3. If necessary, select a server at random from the client's PCM instruction
	  file (<SMS_ID>.ins), located in the SMS\Logon.srv\Pcmins.box directory
	  on the client's Systems Management Server logon server.
	
	Without the hotfix mentioned below, there is no way to control the selection
	logic.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned in the STATUS section
	of this article, or wait for the next Systems Management Server service pack.
	The hotfix should have the following timestamps:
	
	  Date      Time     Size      File name    Platform
	  --------------------------------------------------
	  01/15/99  02:52am  268,784   Pcmsvc32.exe (x86)
	  01/15/99  02:53am  468,912   Pcmwin32.exe (x86)
	  01/15/99  02:54am  453,904   Pcmwin16.exe (x86)
	  01/15/99  02:53am  797,968   Pcmsvc32.exe (Alpha)
	  01/15/99  02:54am  1,172,752 Pcmwin32.exe (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	With the hotfix, it is now possible to set the selection logic level for PCM by
	adding a value to the [Local] section of the Sms.ini file on the client. To do
	this, use the following:
	
	- To disable any selection attempts beyond trying the client's current Systems
	  Management Server logon server, add the following line to the [Local] section
	  of the client's Sms.ini file:
	
	  DisableRandomPCMServers=LOCALONLY
	
	- To disable any selection attempts beyond trying the client's current Systems
	  Management Server logon server and any servers to which the client has a
	  drive mapped, add the following line to the [Local] section of the client's
	  Sms.ini file::
	
	  DisableRandomPCMServers=DRIVEMAPPINGS
	
	- To leave the behavior at the default algorithm, you can either not modify the
	  client's Sms.ini file, or you can add the following line to the [Local]
	  section:
	
	  DisableRandomPCMServers=RANDOM
	
	- To have PCM only select a random distribution server, add the following line
	  to the [Local] section of the client's Sms.ini file:
	
	  DisableRandomPCMServers=RANDOMONLY
	
	Unless it is specifically necessary to disable a particular level of selection
	logic, Microsoft Premier Support recommends that you do not add this setting to
	the client's Sms.ini file.
	
	Additional query words: prodsms mapping drivemapping drivemappings
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
