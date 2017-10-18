---
layout: page
title: "Q152460: Troubleshooting SrvAny Using Cmd.exe"
permalink: kb/152/Q152460/
---

## Q152460: Troubleshooting SrvAny Using Cmd.exe

	Article: Q152460
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SrvAny is a tool found in the Windows NT Resource Kit that is used for running
	Windows NT applications as services. It may be necessary in some instances to
	troubleshoot an application started using the SrvAny service, and one of the
	best ways of doing this is by using Cmd.exe as the application starts
	interactively from SrvAny. From the command prompt you can then start the
	application in question, watch for errors, check registry values relative to the
	service account, and perform other troubleshooting steps. The following steps
	show how to set SrvAny to run an interactive command prompt for such purposes.
	
	1. Install Srvany.exe as a service by using another tool in the Windows NT
	  Resource Kit, Instsrv.exe. For example:
	
	  INSTSRV SrvAny c:\reskit\srvany.exe
	
	2. Click Control Panel and then Services. From the list of services that
	  appears, select SrvAny, then click the Startup button.
	
	  a. Configure the service for automatic or manual startup type, depending on
	     whether your troubleshooting involves an application that is started
	     automatically through SrvAny each time the system is restarted, or only
	     occasionally.
	
	  b. Select the System account as the service (or Log On As) account and enable
	     the Allow Service To Interact With Desktop option. This is required for
	     the command prompt to be interactive.
	
	  c. Click the OK button. (It's fine to leave the Control Panel, Services,
	     applet running since it is used later in these instructions.)
	
	3. If you require the regular use of the interactive command prompt, skip to
	  step 4.
	
	  a. Start (or switch to) the Control Panel, Services, applet.
	
	  b. Select SrvAny from the list of services.
	
	  c. Select the Startup Parameters text entry field.
	
	  d. Enter the following text (modified to reflect your own Windows NT path):
	
	     c:\\winnt\\system32\\cmd.exe /k
	
	     NOTE: Due to the way the startup parameters are parsed, the double
	     backslashes are required to be interpreted correctly as single
	     backslashes.
	
	  e. Click the Start button to start the service.
	
	  f. Perform any necessary troubleshooting steps.
	
	You do not need to continue with any of the following steps.
	
	4. For regular use of the interactive command prompt, first ensure that the
	  SrvAny service is configured to start automatically by reviewing step 2
	  above.
	
	NOTE: Having an interactive command prompt regularly established through SrvAny
	as outlined in this article makes this command prompt available to all Windows
	NT users of the computer, and, since this command prompt is configured to run
	under the security context of the System account, all Windows NT users of the
	computer have System account access from this command prompt and any
	applications started from it.
	
	  a. Start Registry Editor.
	
	     WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	     problems that may require you to reinstall Windows NT to correct them.
	     Microsoft cannot guarantee that any problems resulting from the use of
	     Registry Editor can be solved. Use this tool at your own risk.
	
	  b. Select the following registry key from the window entitled
	
	     "HKEY_LOCAL_MACHINE on Local Machine":
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SrvAny
	
	     1. With the above key selected, choose Add Key from the Edit menu.
	
	     2. Enter "Parameters" (without the quotes) for the key name.
	
	     3. Click the OK button to create this key.
	
	  c. Select the Parameters key created in step 4B above.
	
	     1. Choose Add Value from the Edit menu.
	
	     2. Enter "Application" (without the quotes) for the value name and leave
	        the data type at the default, REG_SZ.
	
	     3. Click the OK button to create this value.
	
	     4. In the String Editor window, enter the string value of
	        "c:\winnt\system32\cmd.exe" (without the quotes), for example (your
	        actual Windows NT path may vary).
	
	        NOTE: In contrast with the format used for the startup parameters in the
	        Control Panel, Services, applet, double backslashes are not required in
	        the above string to be interpreted correctly by SrvAny.
	
	     5. Click the OK button to add this string to the Application value.
	
	  d. Select the Parameters key created in step 4B above.
	
	     1. Choose Add Value from the Edit menu.
	
	     2. Enter "AppParameters" (without the quotes) for the value name and leave
	        the data type at the default, REG_SZ.
	
	     3. Click the OK button to create this value.
	
	     4. In the String Editor window, enter the string value of "/k" (without
	        the quotes).
	
	     5. Click the OK button to add this string to the AppParameters value.
	
	5. Start or switch to the Control Panel, Services, applet.
	
	  a. Select SrvAny from the list of services.
	
	  b. Click the Start button to start the service.
	
	  c. Perform any necessary troubleshooting steps.
	
	From this point on, every time you restart Windows NT, the SrvAny service starts
	an interactive command prompt.
	
	For more information on the SrvAny tool, see the Tool Overview Help file in the
	Windows NT Resource Kit and the Srvany.wri Write file.
	
	Additional query words: prodnt tshoot
	
	======================================================================
	Keywords          : kbnetwork kbtshoot 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbMSPressSearch kbWinNTS351search kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : :3.5,3.51
	
	=============================================================================
	
