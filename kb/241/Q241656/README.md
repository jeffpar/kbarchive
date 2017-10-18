---
layout: page
title: "Q241656: SMS: Memory Leak in Pcmsvc32"
permalink: kb/241/Q241656/
---

## Q241656: SMS: Memory Leak in Pcmsvc32

	Article: Q241656
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Package Command Manager service (Pcmsvc32.exe) may exhibit a slow memory
	leak over a period of time.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time     Size    File name     Platform
	  -------------------------------------------------
	  9/10/99   7:00PM   524KB   Base.dll       I386
	  9/10/99   7:04PM   237KB   Pcmdos_2.exe   I386
	  9/10/99   7:04PM   271KB   Pcmdos_4.exe   I386
	  9/10/99   7:04PM   264KB   Pcmsvc32.exe   I386
	  9/10/99   7:05PM   444KB   Pcmwin16.exe   I386
	  9/10/99   7:05PM   459KB   Pcmwin32.exe   I386
	  9/10/99   7:02PM   734KB   Base.dll       Alpha
	  9/10/99   7:06PM   782KB   Pcmsvc32.exe   Alpha
	  9/10/99   7:05PM  1147KB   Pcmwin32.exe   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method.
	
	On an Alpha-based Systems Management Server site server:
	
	1. Stop the Package Command Manager (PCM) and Systems Management Server
	  Executive services.
	
	2. Replace the Pcmsvc32.exe file in the
	  <SMS_root>\Site.srv\<Platform>.bin folder with the hotfix
	  version. You must reset the site for the hotfix file to be copied to all
	  servers managed by Site Configuration Manager. Windows NT Workstation-based
	  computers that are running Pcmsvc32 must be updated using Rservice.
	
	3. Replace the Base.dll file in the
	  <SMS_root>\Site.srv\<Platform>.bin folder with the hotfix
	  version.
	
	4. Replace the Pcmwin32.exe file in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\<Platform>.bin folder
	  with the hotfix version.
	
	5. Restart the PCM and Systems Management Server Executive services.
	
	On an Intel-based Systems Management Server site server:
	
	1. Stop the PCM and Systems Management Server Executive services.
	
	2. Replace the Pcmsvc32.exe file in the
	  <SMS_root>\Site.srv\<Platform>.bin folder with the hotfix
	  version. You must reset the site for the hotfix file to be copied to all
	  servers managed by Site Configuration Manager. Windows NT Workstation-based
	  computers that are running Pcmsvc32 must be updated using Rservice.
	
	3. Replace the Base.dll file in the
	  <SMS_root>\Site.srv\<Platform>.bin folder with the hotfix
	  version.
	
	4. Replace the Pcmwin32.exe file in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\<Platform>.bin folder
	  with the hotfix version.
	
	5. Replace the Pcmdos_2.exe file in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\x86.bin folder with the
	  hotfix version.
	
	6. Replace the Pcmdos_4.exe file in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\x86.bin folder with the
	  hotfix version.
	
	7. Replace the Pcmwin16.exe file in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\x86.bin folder with the
	  hotfix version.
	
	8. Restart the PCM and Systems Management Server Executive services.
	
	Maintenance Manager replicates the updated files to the Systems Management Server
	logon servers on its next work cycle. To update the clients, either manually run
	Upgrade.bat on each client or follow the instructions in the following article
	in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	
	Additional query words: prodsms pcmsvc32 memory leak pcm
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
