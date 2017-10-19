---
layout: page
title: "Q253942: FIX: Task Scheduler Task Runs in the Background After Sysprep"
permalink: /kb/253/Q253942/
---

## Q253942: FIX: Task Scheduler Task Runs in the Background After Sysprep

	Article: Q253942
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbOPK kbHWx86 kbDSupport kbGrpDSOPK kbPreInstall
	Last Modified: 26-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Task scheduler runs tasks as background processes after sysprep-ing the master
	computer.
	
	After running mini-setup, in end-user mode, any scheduled task that is started
	through the Windows Task Scheduler never shows up as a window on the desktop.
	
	The Windows Task Manager shows the task as a process but not as an application.
	For example, if Calc.exe is scheduled by Task Scheduler at 3 P.M., Calc.exe runs
	at exactly 3 P.M. but does not appear on the desktop. Instead, Calc.exe acts
	like a background process.
	
	This behavior occurs only if you used SYSPREP to create the master image, and is
	language independent.
	
	CAUSE
	=====
	
	After running sysprep on the machine, the following registry entry will contain
	the path to Explorer.exe and a comma at the end of the value:
	"C:\Winnt\Explorer.exe,"
	HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Winlogon\
	Shell:REG_SZ:C:\Winnt\Explorer.exe,
	
	The full path to Explorer.exe, including the command, results in this behavior.
	
	RESOLUTION
	==========
	
	The options to resolve this problem are:
	
	- Modify the following registry value removing the path to explorer and the
	  trailing comma at the end of explorer as described in the Cause section
	  above. The value should read exactly as shown here:
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Winlogon\
	Shell:REG_SZ:Explorer.exe
	
	-or-
	
	- If you are not using SP1 yet, then you should use Sysprep version 1.1 with
	  the -CLEAN switch. To accomplish that task, follow these steps:
	
	1. Add the following to your Sysprep.inf file:
	
	  [Unattended]
	  "InstallFilesPath="%systemdrive%\sysprep\i386"" (without the quotation marks)
	
	  Create the \i386\$OEM$ directory structure below the sysprep directory (for
	  example, c:\sysprep\i386\$OEM$)
	
	  or
	
	  drive:\distribution\$OEM$\$1\sysprep\i386\$OEM$ (for a distribution share that
	  already contains Sysprep).
	
	2. Create a Cmdlines.txt file in %systemdrive%\sysprep\i386\$OEM$
	  (or drive:\distribution\$OEM$\$1\sysprep\i386\$OEM$), which contains the
	  following:
	
	  [Commands]
	  ""%systemdrive%\sysprep\sysprep.exe -clean"" (without the quotation marks)
	
	NOTE: Running sysprep from the audit mode or the [GUIRunOnce] section of the
	Unattend.txt file is still required. This method ensures that sysprep -CLEAN
	runs separately during the mini-setup.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior 
	---------------------------
	
	1. Perform a retail install (can be an unattended installation) of Microsoft
	  Windows 2000.
	
	2. Create the C:\Sysprep folder.
	
	3. Copy the Setupcl.exe, Sysprep.exe and Sysprep.inf files into the C:\Sysprep
	  folder.
	
	4. Run SYSPREP without any switches.
	
	5. Reboot the system.
	
	6. Follow through the mini-setup wizard.
	
	7. Run Task Scheduler in end user mode and go through the Task Scheduler Wizard.
	
	8. Select an application to schedule (for example, Calc.exe or CDplayer.exe).
	
	9. Select the "One time only" option and specify the date and time for the
	  application to run.
	
	10. Input a user name and password or use the default administrator account.
	
	11. Wait until the specified time.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q248257 Program Installation Problems on Sysprep or Riprep Installed Systems
	
	For additional information, please refer to the following Web address:
	
	  Preinstallation Support page on the SB website
	
	You must be registered in the System Builder Program to access the preceding
	link. If you are not registered, you can register at the following Web site:
	
	  SB Registration Page
	  (https://oempub.microsoft.com/scripts/oemapps/register/register.asp)
	
	Additional query words: sysprep winlogon InstallShield kbopk kbsbk
	
	======================================================================
	Keywords          : kbOPK kbHWx86 kbDSupport kbGrpDSOPK kbPreInstall 
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro
	Version           : :2000
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
