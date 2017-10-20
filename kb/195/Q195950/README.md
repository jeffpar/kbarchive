---
layout: page
title: "Q195950: How and Why ROOTDRIVE Is Used on Windows Terminal Server"
permalink: /kb/195/Q195950/
---

## Q195950: How and Why ROOTDRIVE Is Used on Windows Terminal Server

{% raw %}

	Article: Q195950
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A common issue that is encountered with Terminal Server is that most
	applications written to date were not written with Terminal Server in mind. In
	other words, these applications are not natively multiuser. This is not to say
	that these applications were poorly written, it just illustrates that most
	applications were written to accommodate a single user running them at one time.
	Listed below are some of the reasons an application may fail in a multiuser
	environment, such as Terminal Server:
	
	- An application writes user specific information to HKEY_LOCAL_MACHINE, thus
	  making this information global for all users who use this application.
	
	- An application writes user specific information only to the installer's
	  HKEY_CURRENT_USER, thus making this information available only to the
	  installer.
	
	- An application uses a single .ini file stored in the Windows directory for
	  user-specific settings.
	
	- An application adds menu shortcuts only to the installer's menu, rather than
	  adding these to the ALL USERS profile.
	
	- An application may fail when multiple users try to access the same file at
	  the same time, resulting in a sharing violation.
	
	To work around problems such as these, Terminal Server uses application
	compatibility scripts. These scripts are essentially batch files that address
	scenarios such as the ones previously mentioned. Microsoft includes several
	application compatibility scripts with Terminal Server, located in
	%SystemRoot%\Application Compatibility Scripts. However, keep in mind that these
	scripts are examples, and may need to be modified by an administrator for
	certain environments.
	
	One important concept to understand before implementing these scripts is
	ROOTDRIVE. To illustrate this idea, consider a fictional word processing
	application, called ApplicationA:
	
	When UserA installs ApplicationA on a Windows NT Workstation, it adds an entry in
	the registry for the path to UserA's documents. To do this, the installation
	program queries for the value of %HOMEDRIVE%%HOMEPATH%. The value returned is
	entered into the registry, and when a user clicks File and clicks Open inside
	ApplicationA, the browser window that opens defaults to X:\UserA. This is
	UserA's home directory, specified in User Manager as Connect X:
	\\Server\Share\UserA.
	
	When an administrator installs ApplicationA on Terminal Server, the same entry
	for the path to his or her documents is entered. When 30 different users run
	ApplicationA, an administrator is not going to want them all to save their
	documents to the same location. There needs to be a unique location for all
	users to store their files.
	
	The logical place to store a user's personal files is in his or her home
	directory. By default, a user's home directory is:
	
	  %SystemRoot%\Profiles\%USERNAME%
	
	This value is referred to as %HOMEDRIVE%%HOMEPATH%. If Terminal Server is
	installed to drive C in the default directory \WTSRV, when a user (UserA) logs
	on who does not have a Home Directory specified in User Manager, his or her home
	directory will be C:\Wtsrv\Profiles\UserA. This can be seen by typing SET at a
	command prompt:
	
	  HOMEDRIVE=C:
	  HOMEPATH=\WTSRV\PROFILES\UserA
	
	When a user who has a Home Directory or Terminal Server Home Directory specified
	in User Manager (Connect X: \\Server\Share\UserA) logs on, the following
	information is seen when typing SET at a command prompt:
	
	  HOMEDRIVE=X:
	  HOMEPATH=\UserA
	
	Although this is the logical place to store a user's files, there needs to be a
	way to address this unique path for all users in the registry. The registry
	entry for the User's documents path in ApplicationA is:
	
	  HKEY_CURRENT_USER\Software\CompanyA\ApplicationA\DefaultPath
	
	The value of the path cannot be set to %HOMEDRIVE%%HOMEPATH%. Likewise, the value
	cannot be X:\%USERNAME%. ApplicationA does not understand either of these
	entries. To work around this issue, ROOTDRIVE is used.
	
	The first time an application compatibility script is run, Rootdrv2.cmd is run,
	and the person installing the application is presented with the following
	information:
	
	     REM
	     REM   Before running this application compatibility script, you must
	     REM   designate a drive letter to be mapped to each user's home
	     REM   directory.  Update the "Set RootDrive" statement at the end of
	     REM   this file to indicate the desired drive letter.  If you have
	     REM   no preference, the drive W: is suggested.  For example:
	     REM
	     REM            Set RootDrive=W:
	     REM
	     REM   Note: Make sure there are no spaces after the drive letter and
	     REM   colon.
	     REM
	     REM   When you have completed this task, save this file and exit
	     REM   NotePad to continue running the application compatibility script.
	     REM
	
	     Set RootDrive=
	
	The installer is required to select a drive letter. Any drive letter may be
	chosen, but it is important that it not be the drive letter specified in User
	Manager for either the Home Directory or Terminal Server Home Directory (in this
	example, X was used for UserA's home directory). Furthermore, the installer
	should not choose a drive letter that is used in a logon script. In this
	scenario, the person installing ApplicationA decides to use the suggested drive
	letter W:.
	
	The application compatibility script that was originally run is now called, and
	all appropriate changes contained within the script are implemented. In this
	case, the value of
	
	  HKEY_CURRENT_USER\Software\CompanyA\ApplicationA\DefaultPath
	
	is now set to W:\, because this is the drive letter chosen to be ROOTDRIVE. The
	easiest way to think of this is ROOTDRIVE = %HOMEDRIVE%%HOMEPATH%. When UserA
	logs in, his or her drive W = \\Server\Share\UserA. When UserB logs in, his or
	her drive W = C:\WTSRV\PROFILES\UserB, because he or she does not have a home
	directory specified in User Manager. When UserA starts ApplicationA, he or she
	stores all of his or her documents in drive W, as does UserB. Both users'
	documents, however, are in different places, which is the original issue that
	needed to be addressed.
	
	ROOTDRIVE is connected by using the Usrlogon.cmd script. This script is run each
	time a user logs on to the Terminal Server. The script is called from the
	following location:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion
	  \Winlogon\Appsetup
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	Listed below is the portion of Usrlogon.cmd that connects ROOTDRIVE:
	
	     Rem
	     Rem Map the User's Home Directory to a Drive Letter
	     Rem
	
	     Net Use %RootDrive% /D >NUL: 2>&1
	     Subst %RootDrive% /d >NUL: 2>&1
	     Subst %RootDrive% %HomeDrive%%HomePath%
	
	The first line is a NET USE statement that deletes any drive letter that
	currently exists that is using the drive letter that was chosen for ROOTDRIVE.
	The second line is a SUBST command with a /d switch that deletes any substituted
	drive you have that has the same letter as the drive letter that was chosen for
	ROOTDRIVE. Finally, the third line runs the SUBST command for
	%HOMEDRIVE%%HOMEPATH% with the drive letter that was chosen for ROOTDRIVE.
	
	As illustrated, ROOTDRIVE is an important feature of Windows NT Server version
	4.0, Terminal Server Edition. Because of the fact that most applications written
	to date were not written with a multiuser environment such as Terminal Server in
	mind, some issues can be addressed by using application compatibility scripts in
	conjunction with ROOTDRIVE.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
