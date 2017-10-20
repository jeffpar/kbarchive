---
layout: page
title: "Q152451: Applications Run from the Schedule Service Fail to Print"
permalink: /kb/152/Q152451/
---

## Q152451: Applications Run from the Schedule Service Fail to Print

{% raw %}

	Article: Q152451
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Applications run from the Windows NT Schedule service fail to print.
	
	CAUSE
	=====
	
	Printing fails because no default print device is defined for the service
	account. When an application sends a print request, Windows NT queries the
	Windows NT registry for the default print device and the print driver.
	Applications run from the Windows NT Schedule service should be running under
	the context of the System account to work correctly; however, there is no
	default print device defined for the System account (which is actually relying
	on the default user information in the registry). Such an application,
	therefore, is unable to print and usually issues an error, the text of which
	varies from application to application.
	
	RESOLUTION
	==========
	
	To ensure successful printing from a scheduled application, complete the
	following procedure:
	
	1. Open Control Panel, click the Services icon, and from the list of available
	  services, select the Schedule service. Then click the Startup button and
	  verify that this service is configured to log on as the System account and
	  that it is allowed to interact with the desktop.
	
	  NOTE: For a scheduled application to print correctly, and for these
	  instructions to produce successful results, you must use the System account
	  for the service (Log On As) account.
	
	  When you have verified the above settings, click the OK button, and from the
	  Services window click the Stop button (with the Schedule service selected),
	  if the Stop button is available. This ensures that the changes take effect
	  the next time you start the Schedule service.
	
	2. In Print Manager, create a local printer--regardless of whether the printer
	  is actually a local printer or a remote network printer--by choosing Create
	  Printer from the Printer menu, using the printer driver appropriate for the
	  type of printer you are using. Configure the printer to print to LPT1, and
	  set it as the default printer.
	
	3. Start and maximize Registry Editor (Regedt32.exe).
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  Minimize the windows titled "HKEY_LOCAL_MACHINE on Local Machine" and
	  "HKEY_CLASSES_ROOT on Local Machine" and position the remaining two windows,
	  titled "HKEY_CURRENT_USER on Local Machine" and "HKEY_USERS on Local
	  Machine," such that they are tiled vertically on the screen with each filling
	  about one half of the available window space in Registry Editor. This step is
	  provided for convenience in completing the remaining steps, in which you will
	  review and edit certain registry keys.
	
	4. Select the key
	
	  HKEY_CURRENT_USER \Software\Microsoft\Windows NT\Current Version\Devices
	
	  and note the information for the value of the key that represents the default
	  printer created in step 2 above (for example, "LocalPrinter : REG_SZ :
	  winspool,LPT1:").
	
	5. Select the key
	
	  HKEY_USERS \.DEFAULT\Software\Microsoft\Windows NT\Current Version\Devices
	
	  and choose Add Value from the Edit menu to create the same value you noted in
	  step 4 (using the above example, "LocalPrinter" is the value name, "REG_SZ"
	  is the data type, and "winspool,LPT1:" is the string).
	
	6. Select the key
	
	  HKEY_CURRENT_USER \Software\Microsoft\Windows NT\Current Version\PrinterPorts
	
	  and note the information for the value of the key that represents the default
	  printer created in step 2 above (for example, "LocalPrinter : REG_SZ :
	  winspool,LPT1:,14,45").
	
	7. Select the key
	
	  HKEY_USERS \.DEFAULT\Software\Microsoft\Windows NT\Current Version
	  \PrinterPorts
	
	  and choose Add Value from the Edit menu to create the same value you noted in
	  step 6 (in the example from step 6, "LocalPrinter" is the value name,
	  "REG_SZ" is the data type, and "winspool,LPT1:,14,45" is the string).
	
	8. Select the key
	
	  HKEY_CURRENT_USER \Software\Microsoft\Windows NT\Current Version\Windows
	
	  and note the information for the device value of the key (for example,
	  "LocalPrinter,winspool,LPT1:").
	
	9. Double-click the device value of the key
	
	  HKEY_USERS \.DEFAULT\Software\Microsoft\Windows NT\Current Version\Windows
	
	  and edit it to reflect the same information you noted in step 8 (in the
	  example from step 8, you would enter "LocalPrinter,winspool,LPT1:" for the
	  string).
	
	10. Close Registry Editor.
	
	11. Open Control Panel, click the Services icon, and from the list of available
	  services, select the Schedule service. Click the Start button to start the
	  Schedule service with the above settings changes in effect.
	
	12. If the printer is actually a local printer, schedule the application to run
	  at the desired time, using the following command as a model:
	
	  at 10:00am /interactive c:\excel\excel.exe c:\excel\macro.xls
	
	13. If the printer is a remote network printer, create a batch file to start the
	  application, using the following file, Example.bat, as a model:
	
	      EXAMPLE.BAT
	      -----------
	
	      @echo off
	      net use lpt1: /d
	      net use lpt1: \\<PrinterServer>\<PrinterShare> <password>
	         /user:<DomainName>\<AuthorizedUserName>
	      c:\excel\excel.exe c:\excel\macro.xls
	      net use LPT1: /d
	
	  NOTE: The third and fourth lines of the above batch file are actually only
	  one line, with just a space between "<password>" and "/user".
	
	  Schedule the application to run at the desired time, using the following
	  command as a model;
	
	  at 10:00am /interactive example.bat
	
	  Use of a batch file is necessary in this case because by default the System
	  account does not have network access to the printer share, so the batch file
	  establishes the connection to the network printer with the required
	  credentials (the user name and password of a user granted access to the
	  printer share).
	
	
	
	Additional query words: prodnt 3.50 3.51 scheduler program process
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
