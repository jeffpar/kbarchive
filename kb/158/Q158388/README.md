---
layout: page
title: "Q158388: Useful Resource Kit Utilities for Domain Administrators"
permalink: kb/158/Q158388/
---

## Q158388: Useful Resource Kit Utilities for Domain Administrators

	Article: Q158388
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 28-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT 4.0 Resource Kit includes many useful utilities for Windows NT
	domain administrators. The purpose of this article is to group several of the
	utilities together and provide a summary description for quick identification of
	the purpose of each utility. It is not intended to provide a comprehensive
	discussion for each utility.
	
	MORE INFORMATION
	================
	
	Addusers.exe  Dumps and imports user and group accounts in an Windows NT
	             user account data base to a text file. Passwords are not
	             included.
	
	Autolog.exe   Graphical utility to automate the registry settings for
	             Auto-logon.
	
	Browmon.exe   Graphical browser monitoring utility.
	
	Browstat.exe  A more powerful command-line browser monitoring and querying
	             tool.
	
	Delprof.exe   Deletes user profiles.
	
	Dommon.exe    Graphical domain monitoring tool. Displays secure channels
	
	             between Windows NT computers that are members of a domain,
	             and between domain controllers that are trusting other
	             domains. This utility shows the same information as the
	             command-line utility Nlmon.exe.
	
	Findgrp.exe   Finds all local and global group memberships for a user in
	             both an accounts domain and a resource domain.
	
	Getsid.exe    Dumps the users SID (includes the RID) for users or groups.
	
	Ifmember.exe  Lists the groups a user is a member of.
	
	Logoff.exe    Utility (available only with NT 4.0 Server Resource Kit)
	             allows the user to logoff from the command prompt.
	
	Netdom.exe    Powerful command-line utility can be used to join a domain,
	             manage computer accounts for members and BDCs, reset secure
	             channels, establish trust relationships, and manage resource
	             domain computer accounts.
	
	Nlmon.exe     Command-line domain monitoring tool. Displays secure
	             channels between Windows NT computers that are members of a
	             domain, and between domain controllers that are trusting
	             other domains. Shows the same information as the graphical
	             utility Dommon.exe
	
	Nltest.exe    Very powerful command-line domain monitoring utility. Does
	             much more than Nlmon.exe or Dommon.exe.
	
	Passprop.exe  Provides functionality not available in User Manager. Allows
	             policies to force complex passwords that contain a mix of
	             upper and lowercase letters and numbers or symbols, and the
	             ability to lock out an administrator's account over the
	             network, but still allowing an administrator to log on
	             interactively on domain controllers.
	
	Regback.exe   Utility to backup the registry.
	
	Regrest.exe   Utility to restore the registry.
	
	Showgrps.exe  Shows the groups that a user is a member of.
	
	Usrstat.exe   Displays user name, full name, and last logon date and time
	             for each user account across all domain controllers.
	
	Usrtogrp.exe  Adds users to local and global groups from a text file.
	
	Dumpel.exe    Dumps an event log to a file.
	
	Netwatch.exe  Graphical utility shows shares and connected users for one
	             or more servers in a single window.
	
	Pathman.exe   Command-line utility to modify the system and user path
	             environment statements.
	
	PERMCOPY.exe  Copies permissions from one share to another.
	
	Perms.exe     Displays a user's permissions to files and directories on an
	             NTFS volume.
	
	Regkey.exe    Graphical utility to modify the registry to change settings
	             for the shutdown button on the logon screen, to display the
	             last logged on user, whether to parse the Autoexec.bat file
	             for path and environment variables, to specify the number of
	             profiles cached, to specify the default wallpaper, and
	             whether to generate long file names on the FAT file system.
	
	Rmtshare.exe  Remotely view and create shares.
	
	Scopy.exe     Copies files between NTFS file systems and retains all file
	             and directory permissions.
	
	Showacls.exe  Displays NTFS permissions for files, folders, and directory
	             trees.
	
	Shutdown.exe  Command-line utility to remotely shut down and reboot
	             Windows NT computers.
	
	Shutgui.exe   Graphical utility to remotely shutdown and reboot Windows NT
	             computers.
	
	Srvinfo.exe   Utility that lists lots of information for local and remote
	             Windows NT computers. To get all the information, you must
	             be an administrator of the remote machine. Some of the
	             information listed includes Windows NT type, build number,
	             domain name, Primary Domain Controller (PDC), IP address,
	             drive space, and services running.
	
	Timeserv.exe  A service (available only with NT 4.0 Server Resource Kit)
	             that keeps the local system clock synchronized with
	             a Time server that is independent of a logged on user.
	
	Whoami.exe    Lists the user account who spawned the CMD process.
	
	Winat.exe     Graphical utility to administer and schedule processes using
	             the Scheduler service.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
