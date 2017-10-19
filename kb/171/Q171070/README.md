---
layout: page
title: "Q171070: SMSINST: May Not Restart System When Run by PCMSVC32"
permalink: /kb/171/Q171070/
---

## Q171070: SMSINST: May Not Restart System When Run by PCMSVC32

	Article: Q171070
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.2
	Operating System(s): 
	Keyword(s): kbusage smsinst
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server 1.2 now provides the ability to install
	packages on computers running Windows NT Workstation in the background by means
	of the Package Command Manager (PCM) service. This functionality was included
	with Systems Management Server 1.2 Service Pack 2, and also as a separate update
	available on the Web (Pcmupdte.exe) at
	
	  http://www.microsoft.com/smsmgmt/.
	
	A requirement for using Package Command Manager as a service is that the
	executable file it starts must be run "silently" with no user input. Microsoft
	Systems Management Server Installer can create executable files that allow for
	silent running through the "/s" command line switch. In addition, the RESTART
	script variable, when set to "S" in the Installer script, causes a restart of
	the system. Lastly, using these two options in conjunction with selecting the
	advanced Installation Properties check box for Suppress Reboot Message During
	Silent Installations provides a completely unattended installation of an
	Installer package and restarts the computer at the end of the installation. See
	the Installer online documentation for details on this functionality.
	
	While the Installer provides this method for installing a package silently and
	restarting, it fails to restart if:
	
	- A run command is sent through the PCM service and no user is logged on or the
	  workstation is locked. In this case, the Installer package will run
	  correctly, but upon completion, the system restart will not occur. However,
	  the job is marked as completed.
	
	- A shell other than Explorer (if you are running Windows NT 4.0) or Program
	  Manager (if you are running Windows NT 3.5x) is managing the desktop.
	
	An active shell, such as Explorer or Program Manager, is required for Systems
	Management Server Installer's own restart mechanism to work properly. The shell
	is not available if the user is logged off or has the workstation locked.
	
	MORE INFORMATION
	================
	
	If an application installation requires a restart and must be installed when a
	user is not logged on, you must use some method other than the Installer to
	restart the workstation. One possible solution is to use the Ntencap.exe
	utility. The latest version of this utility (provided with the Package Command
	Manager Web update or Systems Management Server 1.2 Service Pack 2) has a
	command line switch that blocks a restart (if it is issued by the executable it
	encapsulates), begins a timer countdown, then initiates its own shutdown
	process.
	
	Ntencap.exe is located in the Mstest subdirectory of the SMS_SHR of all logon
	servers.
	
	The Package Command Manager service runs Ntencap.exe as part of a Run Command On
	Workstation job. To use the Ntencap.exe restart functionality with an executable
	file created by the Installer, use the following syntax in the package
	properties, workstation command line:
	
	     NTENCAP.EXE /NTz:xx myprog.exe /s
	
	Where "xx" is the time in seconds to wait before restarting the computer and
	"myprog.exe" is the Installer executable file.
	
	After the Run Command On Workstation job completes, the following message will be
	displayed on the workstation, regardless of whether a user is logged on:
	
	  System Shutdown
	
	  The system is shutting down. Please save all work in progress and log off. Any
	  unsaved changes will be lost. This shutdown was initiated by DOMAIN\pcmsvc.
	
	  Time before shutdown: xx:xx:xx.
	
	After the timer expires, the system will shut down and restart.
	
	IMPORTANT: Any unsaved work on the workstation will be lost when it restarts. Be
	sure to use the /NTz:xx option to provide an adequate amount of time for users
	to save their work. A value of 300 would provide users with five minutes to save
	all their work.
	
	This solution should not be implemented in situations where users may leave their
	workstations unattended (that is, not logged off) with unsaved work.
	
	Other Alternatives
	------------------
	
	Alternative methods in this situation would be:
	
	- Send a separate mandatory job (not system-background) that restarts the
	  workstation after the package installation. A utility created by the
	  Installer can include an interactive dialog box informing the user that an
	  application was recently installed and requires the system to be restarted.
	  Also, if the Installer executable file restarts the workstation, it will
	  allow each application open to prompt the user to save any unsaved work.
	
	- Use the Shutdown.exe utility from the Windows NT 4.0 Resource Kit, sent as a
	  separate mandatory system-background job. Shutdown.exe provides restart
	  functionality similar to Ntencap.exe, but with additional options. Unless you
	  use the "/c" switch, it allows the application's prompt to save data that may
	  have changed, protecting the user who has stepped away from his or her desk
	  from loss of data. You can also include an additional message, up to 127
	  characters in length, which gives an explanation for the required restart.
	  For information on Shutdown.exe syntax and usage, see the Windows NT Resource
	  Kit Tools Help file.
	
	- Ask the users to restart their computers manually (for example, send an
	  e-mail mail message to the users, asking them to manually restart their
	  computers).
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbusage smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
