---
layout: page
title: "Q193784: PCM &quot;Execute&quot; Button Unavailable or Dimmed"
permalink: /kb/193/Q193784/
---

## Q193784: PCM &quot;Execute&quot; Button Unavailable or Dimmed

{% raw %}

	Article: Q193784
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP4
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a "Run Command on Workstation" job is run through Package Command Manager
	(PCM) and the package for the job was created from a .pdf file that contains
	"SynchronousSystemExitRequired", PCM may stop in a state where the Execute
	button is unavailable or dimmed. The PCM log will show that the job is
	continuing indefinitely. Subsequent jobs sent to the computer will also have the
	Execute button unavailable, and also will not run.
	
	Viewing the Pcmwin.log file in smstrace reveals that the log is continuously
	filling up with messages similar to the following:
	
	     [09/28/98 18:21:05] Package Command Manager ==> The running process
	     handle is 0
	     [09/28/98 18:21:05] Package Command Manager ==> A job is not in process.
	     [09/28/98 18:21:07] Package Command Manager ==> Monitoring running job.
	     [09/28/98 18:21:07] Package Command Manager ==> The running process
	     handle is 0
	     [09/28/98 18:21:07] Package Command Manager ==> A job is not in process.
	     [09/28/98 18:21:09] Package Command Manager ==> Monitoring running job.
	     [09/28/98 18:21:09] Package Command Manager ==> The running process
	     handle is 0
	     [09/28/98 18:21:09] Package Command Manager ==> A job is not in process.
	
	If the job is run by using the Package Command Manager service, the job may
	appear to finish successfully but subsequent jobs may not run and the Pacman.log
	file may show entries similar to:
	
	  Job still running............~   $$<SMS_PACKAGE_COMMAND_MANAGER_NT><Tue Nov 10 17:56:25 1998~><thread=112>
	  Job still running............~   $$<SMS_PACKAGE_COMMAND_MANAGER_NT><Tue Nov 10 17:56:27 1998~><thread=112>
	  Job still running............~   $$<SMS_PACKAGE_COMMAND_MANAGER_NT><Tue Nov 10 17:56:29 1998~><thread=112>
	  Job still running............~   $$<SMS_PACKAGE_COMMAND_MANAGER_NT><Tue Nov 10 17:56:31 1998~><thread=112>
	  Job still running............~   $$<SMS_PACKAGE_COMMAND_MANAGER_NT><Tue Nov 10 17:56:33 1998~><thread=112>
	
	CAUSE
	=====
	
	This problem only occurs if the .pdf file used to create the package contains
	"SynchronousSystemExitRequired".
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Systems
	Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time       Size     File name    Platform
	  ----------------------------------------------------
	  9/21/98    6:50pm     442 KB   Pcmwin16.exe (x86)
	  9/21/98    6:50pm     455 KB   Pcmwin32.exe (x86)
	  9/24/98   10:54am     260 KB   Pcmsvc32.exe (x86)
	
	  9/21/98    6:50pm   1,142 KB   Pcmwin32.exe (Alpha)
	  9/24/98   10:53am     776 KB   Pcmsvc32.exe (Alpha)
	
	
	WORKAROUND
	==========
	
	To work around this problem, try any of the following:
	
	- Remove the SynchronousSystemExitRequired from the PDF.
	
	  -or-
	
	- Use the PCM from Systems Management Server Service Pack 3.
	
	  -or-
	
	- Make the job mandatory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 4.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. Replace the Pcmwin32.exe file in the
	  <SMS_root_directory>\Site.srv\Maincfg.box\Client.src\<Platform>.bin
	  directory with the hotfixed version.
	
	2. Replace the Pcmwin16.exe file in the
	  <SMS_root_directory>\Site.srv\Maincfg.box\Client.src\X86.bin directory
	  with the hotfixed version.
	
	3. Maintenance manager will replicate the new Pcmwin16.exe and Pcmwin32.exe
	  files to the Logon.srv\<Platform>.bin directory on the Systems
	  Management Server logon servers during its next work cycle. After that
	  occurs, you can update the clients.
	
	  To update the clients, either manually run Upgrade.bat on each client, or
	  follow the instructions in the following article in the Microsoft Knowledge
	  Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	4. Replace the Pcmsvc32.exe file in the
	  <SMS_root_directory>\Site.srv\<platform>.bin with the hotfixed
	  version. After Systems Management Server has completed a work cycle and has
	  updated the Pcmsvc32.exe file on all Systems Management Server member
	  servers, restart the Systems Management Server member servers or stop and
	  start the SMS_PACKAGE_COMMAND_MANAGER_NT service, to ensure that the service
	  is running with the newly updated version of Pcmsvc32.exe.
	
	5. To distribute the new version of Pcmsvc32.exe to non-Systems Management
	  Server member servers and workstations, use the Rservice utility. For
	  instructions on how to use the Rservice utility, read the Install.doc file
	  that is included with Microsoft Systems Management Server 1.2 Service Pack 4
	  in the Support\Pcmsvc32 directory.
	
	Additional query words: prodsms dim gray grey greyed grayed out freeze hang
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120SP4
	Version           : :1.2 SP4
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
