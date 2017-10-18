---
layout: page
title: "Q240315: Contents of the IIS Exception Monitor Readme File"
permalink: kb/240/Q240315/
---

## Q240315: Contents of the IIS Exception Monitor Readme File

	Article: Q240315
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the Readme.txt file included with the IIS
	Exception Monitor.
	
	This Readme file provides helpful information, including how to install the IIS
	Exception Monitor, a description of symbols, and how the symbols are used in
	debugging.
	
	For information on installing and using the IIS Exception Monitor, see the
	following article in the Microsoft Knowledge Base:
	
	  Q160360 INFO: Troubleshooting Exceptions in Internet Server Products
	
	MORE INFORMATION
	================
	
	Following are the contents of the Readme file as it shipped with the products
	listed previously. It has not been edited by the Microsoft Developer Support
	Knowledge Base editing team.
	
	IIS Exception Analysis Tools
	Version 6.1.0.0
	
	CONTENTS:
	  A. INSTALLING
	  B. RUNNING THE IIS EXCEPTION MONITOR
	  C. QUICK START FOR AN AUTOMATIC SESSION
	  D. QUICK START FOR VIEWING EXCEPTION MONITOR LOGS
	  E. UNINSTALLING
	  F. SYMBOL INFORMATION
	  G. WINDOWS SCRIPTING HOST INFORMATION
	
	  Advanced:
	  H. USING RECURSIVE MODE FOR "CONTINUOUS MONITORING"
	  I. USING AN ALTERNATE SYMBOL PATH
	  J. USING THE ADMIN NOTIFICATION FEATURE
	  K. USING THE ADVANCED COMMANDS THROUGH THE COMMAND LINE
	
	----------------------------------------------------------------------
	
	A. INSTALLING
	
	1. Download IXCPTMON.EXE setup program to your desktop.
	
	2. Double-click the icon.
	
	3. This will present you with the question:
		"Are you sure you would like to install the IIS Exception Analysis Tools?"
	  *ACTION: Select Yes.
	
	4. The file extraction process begins, and then the main portion of
	  the installation starts.
	
	5. You will be prompted for a installation location for the IIS Exception Analysis Tools
	  The Default location is C:\IXCPTMON.  This can be changed however, the directory chosen
	  should not have any spaces in it.
	 
	  *ACTION: Type a location (within the restrictions above) and Select OK.
	
	6. If the folder does not exist you will be asked if you want to create it.
	  *ACTION: Select Yes
	
	7. The files will be copied into the installation directory and you will presented 
	  with this ReadMe.txt file
	
	----------------------------------------------------------------------
	
	B. RUNNING THE IIS EXCEPTION MONITOR
	
	1. The installation should have created a Program Group under 
		Start/Programs/IIS Exception Monitor
	
	2. Choose the IIS Exception Monitor from the IIS Exception Monitor folder
	
	3. It should launch the IIS Exception Monitor wizard.
	
	----------------------------------------------------------------------
	
	C. QUICK START FOR AN AUTOMATIC SESSION
	
	1. Welcome Page
		Action: Press NEXT
	2. Check Symbols
		Action: Choose No, Press NEXT
	3. Process Options
		Action: Choose In Process, Press NEXT
	4. Session Options
		Action: Choose Automatic, Press NEXT
	5. Start Monitoring
		Action: Press Run this Monitoring Session (NEXT will be un-grayed), Press NEXT
	6. Status Page
		Action: Press Finish, (the wizard will exit) and wait for the Server to Crash
	
	7.  a. There will be a minimized console window on the task bar.  The title will be
	   IIS_<Some Number>.  This is your monitoring session, please do NOT close this window.
	   
	** YOUR WEB SERVER SHOULD BE RUNNING, YOU SHOULD CHECK TO MAKE SURE WEB PAGES ARE SERVING **
	
	8. If the problem that you are trying to track down does not make the console window disappear,
	     then you may have to "trip" the Exception Monitoring Session manually. You can do this by 
	     press Ctrl-C in the console window.  This should start the session gathering data and the 
	     console window will disappear. 
	
	     This is not optimal
	     if you are trying to determine why the Web Server may be "crashing" and the logs may not point 
	     you to the root cause of the problem.
	
	----------------------------------------------------------------------
	
	D. QUICK START FOR VIEWING EXCEPTION MONITOR LOGS
	
	1. Run the IIS Exception Monitor (See Section B)
	
	2. From the Welcome Page, select the "View Existing Log Files" check box
	
	3. Status Page
		a. Select the .DBL file (far left column) from the "Status for Automatic 
	          Sessions" window (upper)
		b. Press the View Log button while the .DBL file is selected.
	          If the LogFile column says "Running" then the Exception Monitor did not catch
		   an exception and it may be necessary to "trip" the session manually (See C.8 Above)
	
	4. After you press "View Log" you will be running ReadLogs.exe (IIS Log File Analyzer)
		   
	----------------------------------------------------------------------
	E. UNINSTALLING
	
	1. Open Add/Remove in the Control Panel, you should see "IIS Exception
	  Analysis Tools 6.1" listed there.
	
	2. Click the Add/Remove button, you will be prompted to uninstall.
	
	3. Click Yes
	
	----------------------------------------------------------------------
	
	F. SYMBOL INFORMATION
	
	1. Q: What are symbols?
	
	  A: Debug Symbol files (symbols) are required to do both kernel and user-mode debugging in Windows NT.
	      Symbols provide a way to resolve global variables and function names in the loaded executable file.
	
	    Symbols are produced by the linker when a program is built. They are removed from the retail product 
	    and saved in a separate (.DBG) file. This considerably reduces file size which decreases file load  
	    time and thus increases system performance. Symbols represent Function/API names and global variables.
	
	2. Q: What symbols do I need in order to run the IIS Exception Monitor?
	  A: You can run the IIS Exception Monitor and let it determine which symbols you need
	     to download and then you can download them from the Microsoft Internet Site.
	
	3. Q: If the IIS Exception Monitor fails to download the files from the Microsoft Internet
	  site where can I download the symbols from?
	
	  A:
	  SYMBOL LOCATIONS (Intel):
	  =========================
	  Windows NT 4 Service Pack 4:
	  http://download.microsoft.com/msdownload/sp4/x86/en/Sp4symi.exe (~46 MB)
	  
	  Windows NT 4 Service Pack 3:
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/ussp3/i386/nt4sym3i.exe (~20 MB)
	  OR
	  http://support.microsoft.com/download/support/mslfiles/Nt4sym3i.exe (~20 MB)
	  
	  NT Option Pack:
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/iis40/symbols/x86/symbols.cab (~64 MB)
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/iis40/symbols/x86/install.inf 
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/iis40/symbols/x86/install.exe 
	
	  NT Option QFE Update:
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/fixes/usa/IISUPD/SYMBOLS/x86/IISUpdis.exe  
	
	  Site Server 3.0 Service Pack 1:
	  ftp://ftp.microsoft.com/bussys/sitesrv/sitesrv-public/fixes/usa/siteserver3/sp1/x86/symbols/ss3sp1db.exe
	
	  Site Server 3.0 Service Pack 2:
	  ftp://ftp.microsoft.com/bussys/sitesrv/sitesrv-public/fixes/usa/siteserver3/sp2/x86/Symbols/ss3sp2debug.exe
	
	  SYMBOL LOCATIONS (Alpha):
	  =========================
	  Windows NT 4 Service Pack 4:
	  http://download.microsoft.com/msdownload/sp4/alpha/en/Sp4syma.exe (~46 MB)
	
	  Windows NT 4 Service Pack 3:
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/ussp3/alpha/nt4sym3a.exe (~20 MB)
	  OR
	  http://support.microsoft.com/download/support/mslfiles/Nt4sym3a.exe (~20 MB)
	
	  NT Option Pack:
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/iis40/symbols/alpha/symbols.cab (~64 MB)
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/iis40/symbols/alpha/install.inf		            
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/iis40/symbols/alpha/install.exe
	
	  NT Option QFE Update:
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/fixes/usa/IISUPD/SYMBOLS/ALPHA/IISUpdas.exe
	
	  Site Server 3.0 Service Pack 1:
	  ftp://ftp.microsoft.com/bussys/sitesrv/sitesrv-public/fixes/usa/siteserver3/sp1/Alpha/symbols/ss3sp1db.exe
	
	  Site Server 3.0 Service Pack 2:
	  ftp://ftp.microsoft.com/bussys/sitesrv/sitesrv-public/fixes/usa/siteserver3/sp2/Alpha/Symbols/ss3sp2debug.exe
	----------------------------------------------------------------------
	
	G. WINDOWS SCRIPTING HOST INFORMATION
	
	The IIS Exception Monitor requires Windows Scripting Host to run.  At the time of this writing
	there are two versions of the Windows Scripting Host available.  The versions available are Version 3.1
	and Version 5.0.  
	
	Windows Scripting host also comes with the Windows NT Option Pack.  If you perform a Typical
	installation of the Windows NT Option Pack the Windows Scripting Host is installed by default.
	
		WHERE TO GET WINDOWS SCRIPTING HOST
		
		1. Run the Windows NT Option Pack setup and press Add/Remove Components.
		   Add the Windows Scripting Host.
	
		2. Download Version 3.1 from:
			(Intel) http://www.msdn.microsoft.com/scripting/ 
			(Alpha) http://www.msdn.microsoft.com/scripting/ 
	
		3. Download Version 5.0 from:
			(Intel) http://www.msdn.microsoft.com/scripting/ 
			(Alpha) http://www.msdn.microsoft.com/scripting/ 
			
			
	
		
	----------------------------------------------------------------------
	
	H. USING RECURSIVE MODE FOR "CONTINUOUS MONITORING"
	
	The IIS Exception Monitor can be started once and continue to monitor the IIS process without user
	intervention.  This mode of monitoring is called "recursive mode".  The steps to start monitoring the
	IIS process in recursive mode are described below.
	
		TO START A RECURSIVE SESSION
		
		1. Run the IIS Exception Monitor Wizard.
		2. Welcome page, press NEXT
		3. Check Symbols, Click No, press NEXT
		4. Process Options, Click "In Process", press NEXT
		5. Select "Enable Recursive Mode" from the Advanced Options,
		   click on Automatic and press NEXT
	
		
		TO STOP A RECUSRSIVE SESSION
	
		1. Run the IIS Exception Monitor Wizard
		2. You should get a message box stating that you are "currently running the IIS Exception Monitor
		   in Recursive Mode."
		3. Choose "Yes" to stop running in Recursive Mode
		4. Choose Cancel" from the welcome page to quit the IIS Exception Monitor
	
		NOTE: The Recursive feature can only be used from "In Process", "Automatic" sessions.
		
	
	----------------------------------------------------------------------
	
	I. USING AN ALTERNATE SYMBOL PATH
	
	The IIS Exception Monitor can be instructed to use an alternate symbol path for it's monitoring sessions.
	The default symbol path is %systemroot%\symbols.  If you don't have enough space on the drive where your
	%systemroot% directory is, you can move you symbols directory to another location in your system and
	configure the IIS Exception Monitor to find the new path using the steps below.
	
		Example Directory Layout:
	
		c:\ 
		   \WINNT
	           \symbols
		     \dll
	
		e:\ 
		   \drop
		    \symbols
		     \dll	
			
		TO START USING AN ALTERNATE SYMBOL LOCATION
	
		1. Run the IIS Exception Monitor Wizard.
		2. Welcome page, press NEXT
		3. Check Symbols, click the "Use Alternate Symbol Path for Exception Monitoring:" checkbox
		4. Type the alternate symbol path that you would like to use in space provided
		5. Continue through the subsequent IIS Exception Monitor pages
		
	
		TO STOP USING AN ALTERNATE SYMBOL LOCATION
	
		1. Run the IIS Exception Monitor Wizard.
		2. Welcome page, press NEXT
		3. Check Symbols, uncheck the "Use Alternate Symbol Path for Exception Monitoring:" checkbox
		4. Continue through the subsequent IIS Exception Monitor pages
	----------------------------------------------------------------------
	
	J. USING THE ADMIN NOTIFICATION FEATURE
	
	The IIS Exception Monitor can be instructed notify an administrator when an exception occurs
	or the monitor session is tripped.  This is accomplished by either using the "NET SEND" feature of Windows
	NT or the Collaboration Data Objects (CDO) in conjunction with the SMTP Service.
	
	When the message is sent using CDO, the .DBL file is attached to the outgoing message.
	
	The IIS Exception Monitor will attempt to create the CDONTS.NewMail object using the CreateObject call.
	If the object is created successfully, then the CDO message will be created and sent. If the creation of the
	CDONTS.NewMail object fails, then the NET SEND feature will be used instead.
	
		TO START USING THE ADMIN NOTIFICATION FEATURE
	
		1. Run the IIS Exception Monitor Wizard.
		2. Welcome page, press NEXT
		3. Check Symbols, Click No, press NEXT
		4. Process Options, Choose either "In Process", "Out of Process", or "Other Process", press NEXT
		5. Select "Notify Admin" from the Advanced Options
		6. When you select "Notify Admin", the local computer name is entered in the space provided.
		7. If you enter an email address that contains an "@",  the IIS Exception Monitor will first try
		   to instan
	
		TO START USING THE ADMIN NOTIFICATION FEATURE
	
		1. Run the IIS Exception Monitor Wizard.
		2. Welcome page, press NEXT
		3. Check Symbols, Click No, press NEXT
		4. Process Options, Choose either "In Process", "Out of Process", or "Other Process", press NEXT
		5. UnCheck "Notify Admin" from the Advanced Options
	
	----------------------------------------------------------------------
	
	K. USING THE ADVANCED COMMANDS THROUGH THE COMMAND LINE
	
		TO START A RECUSRSIVE SESSION (FROM THE COMMAND LINE)
		
		1. Open a command prompt and change directory into the \ixcptmon directory.
	
		2. Type "cscript.exe ixcptmon.vbs /r" and press [enter]
	
	  	You should see:
		C:\IXCPTMON>cscript ixcptmon.vbs /r
			
		Microsoft (R) Windows Scripting Host Version 5.0 for Windows
		Copyright (C) Microsoft Corporation 1996-1997. All rights reserved.
	
		11/11/1998 7:55:20 AM : IXCPTMON: Starting ixcptmon.vbs
		11/11/1998 7:55:20 AM : IXCPTMON: Number of Arguments= 1
		11/11/1998 7:55:20 AM : IXCPTMON: Start REGINSTALLDIR C:\IXCPTMON
		11/11/1998 7:55:20 AM : IXCPTMON: recursive = TRUE 0
		11/11/1998 7:55:20 AM : IXCPTMON:  SetRecursive()
		11/11/1998 7:55:20 AM : IXCPTMON:       origRecursive:0
		Setting Recursive Flag in Registry HKLM\SOFTWARE\Microsoft\Ixcptmon\Recursive = 1 ....
	
		3. At this point you can run an In Process/Automatic session (see Section C) and the 
		session will be recursive.  The recursive option is only available for In Process/Automatic 
	       sessions and not for Out Of Process or Manual sessions.
	
		4. When an exception is detected the monitoring session will create the log as before, however once
		the IIS services have been restarted the new IIS process will be monitored as well.  This will continue
		in this cycle until you have followed the steps below "TO STOP A RECURSIVE SESSION".
	
			Note:     
			The /r option modifies the following registry key:
			HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Ixcptmon\Recursive
		
			If the Recursive value is set to 0 then it is changed to 1. (Enabling recursive mode)
			If the Recursive value is set to 1 then it is changed to 0. (Disabling recursive mode)
	
		TO STOP A RECUSRSIVE SESSION (FROM THE COMMAND LINE)
	
		1. Open a command prompt and change directory into the \ixcptmon directory.
	
		2. Type "cscript.exe ixcptmon.vbs /r" and press [enter] (This switch is a toggle for 1 and 0)
		You should see:
		C:\IXCPTMON>cscript ixcptmon.vbs /r
	
		Microsoft (R) Windows Scripting Host Version 5.0 for Windows
		Copyright (C) Microsoft Corporation 1996-1997. All rights reserved.
	
		11/11/1998 8:05:06 AM : IXCPTMON: Starting ixcptmon.vbs
		11/11/1998 8:05:06 AM : IXCPTMON: Number of Arguments= 1
		11/11/1998 8:05:06 AM : IXCPTMON: Start REGINSTALLDIR C:\IXCPTMON
		11/11/1998 8:05:06 AM : IXCPTMON: recursive = TRUE 0
		11/11/1998 8:05:06 AM : IXCPTMON:  SetRecursive()
		11/11/1998 8:05:06 AM : IXCPTMON:       origRecursive:1
		UnSetting Recursive Flag in Registry HKLM\SOFTWARE\Microsoft\Ixcptmon\Recursive = 0 ....
	
		3. At this point when the monitor detects an exception, the log will be written, the IIS services
		will be restarted, however the IIS process will not be monitored.
	
		TO STOP USING AN ALTERNATE SYMBOL LOCATION (FROM THE COMMAND LINE)
	
		1. Open a command prompt and change directory into the \ixcptmon directory.
	
		2. Type "cscript.exe ixcptmon.vbs /alt <New Location to Symbol Directory>" and press [enter]
		You should see:
		C:\IXCPTMON>cscript ixcptmon.vbs /alt e:\drop
	
		Microsoft (R) Windows Scripting Host Version 5.0 for Windows
		Copyright (C) Microsoft Corporation 1996-1997. All rights reserved.
	
		11/11/1998 10:33:52 AM : IXCPTMON: Starting ixcptmon.vbs
		11/11/1998 10:33:52 AM : IXCPTMON: Number of Arguments= 2
		11/11/1998 10:33:52 AM : IXCPTMON: Start REGINSTALLDIR C:\IXCPTMON
		11/11/1998 10:33:52 AM : IXCPTMON: /alte:\drop 1
		11/11/1998 10:33:52 AM : IXCPTMON: SymbolCheck()
		11/11/1998 10:33:52 AM : IXCPTMON:              TYPE e:\symbols
		11/11/1998 10:33:52 AM : IXCPTMON:      origAltSymPath:0
		Setting Alternate Symbol Location Flag in Registry HKLM\SOFTWARE\Microsoft\Ixcptmon\AltSymPath = 1 ....
		Setting Alternate Symbol Location to  ....e:\drop
		
		3. At point when you run a monitoring session, the <New Location to Symbol Directory will be prepended to the 
		symbol search path. As seen below
			Symbol search path is: e:\drop;D:\WINNT
	
		TO STOP USING AN ALTERNATE SYMBOL LOCATION (FROM THE COMMAND LINE)
	
		1. Open a command prompt and change directory into the \ixcptmon directory.
	
		2. Type "cscript.exe ixcptmon.vbs /alt" and press [enter]
		You should see:
		C:\IXCPTMON>cscript ixcptmon.vbs /alt
		
		Microsoft (R) Windows Scripting Host Version 5.0 for Windows
		Copyright (C) Microsoft Corporation 1996-1997. All rights reserved.
	
		11/11/1998 10:41:17 AM : IXCPTMON: Starting ixcptmon.vbs
		11/11/1998 10:41:17 AM : IXCPTMON: Number of Arguments= 1
		11/11/1998 10:41:17 AM : IXCPTMON: Start REGINSTALLDIR C:\IXCPTMON
		11/11/1998 10:41:17 AM : IXCPTMON: /alt 1
		11/11/1998 10:41:17 AM : IXCPTMON: SymbolCheck()
		11/11/1998 10:41:17 AM : IXCPTMON:              TYPE
		11/11/1998 10:41:17 AM : IXCPTMON:      origAltSymPath:1
		UnSetting Alternate Symbol Location Flag in Registry HKLM\SOFTWARE\Microsoft\Ixcptmon\AltSymPath = 0 ....
	
		3. At this point subsequent monitoring sessions will be using the default symbol location of 
	       %systemroot%\symbols
	
		TO START USING THE ADMIN NOTIFICATION FEATURE
	
		The parameter passed to the /notify switch can be a machine name, a user account or (when 
		using CDO) an email address.  When the NET SEND is sent, a message is sent the admin's screen 
		indicating whether the process was "In Process" or "Out of Process".  If the process was "Out of Process" 
		then the Process ID is displayed as well.
	
		1. Open a command prompt and change directory into the \ixcptmon directory.
	
		2. Type "cscript.exe ixcptmon.vbs /notify <Username or Machine name or Email>" and press [enter]
		You should see:
		C:\IXCPTMON>cscript  ixcptmon.vbs /notify administrator
	
		Microsoft (R) Windows Scripting Host Version 5.0 for Windows
		Copyright (C) Microsoft Corporation 1996-1997. All rights reserved.
	
		1/14/99 11:28:15 PM : IXCPTMON: Starting ixcptmon.vbs
		1/14/99 11:28:15 PM : IXCPTMON: Number of Arguments= 2
		1/14/99 11:28:15 PM : IXCPTMON: Start REGINSTALLDIR C:\IXCPTMON
		1/14/99 11:28:15 PM : IXCPTMON: /notify administrator 1
		1/14/99 11:28:15 PM : IXCPTMON: SetNotifyFunc()
		1/14/99 11:28:15 PM : IXCPTMON:                 WHO administrator
		1/14/99 11:28:15 PM : IXCPTMON: origNotifyAdmin:0
		Setting Notify Admin Flag in Registry HKLM\SOFTWARE\Microsoft\Ixcptmon\NotifyAdmin = 1 ....
		Setting Designated Admin to  ....administrator
		
		3. At this point when you run a monitoring session catches an exception, a NET SEND will be sent to
		the user "administrator" with the message:
			"An Exception was caught by the IIS Exception Monitor. The process is being restarted.."
	
		TO STOP USING THE ADMIN NOTIFICATION FEATURE
	
		1. Open a command prompt and change directory into the \ixcptmon directory.
	
		2. Type "cscript.exe ixcptmon.vbs /notify" and press [enter]
		You should see:
		C:\IXCPTMON>cscript  ixcptmon.vbs /notify 
	
		Microsoft (R) Windows Scripting Host Version 5.0 for Windows
		Copyright (C) Microsoft Corporation 1996-1997. All rights reserved.
	
		1/14/99 11:35:18 PM : IXCPTMON: Starting ixcptmon.vbs
		1/14/99 11:35:18 PM : IXCPTMON: Number of Arguments= 1
		1/14/99 11:35:18 PM : IXCPTMON: Start REGINSTALLDIR C:\IXCPTMON
		1/14/99 11:35:19 PM : IXCPTMON: /notify  1
		1/14/99 11:35:19 PM : IXCPTMON: SetNotifyFunc()
		1/14/99 11:35:19 PM : IXCPTMON:                 WHO
		1/14/99 11:35:19 PM : IXCPTMON: origNotifyAdmin:1
		UnSetting Notify Admin Flag in Registry HKLM\SOFTWARE\Microsoft\Ixcptmon\NotifyAdmin = 0 ....
	
		3. At this point subsequent monitoring sessions will exhibit the default behavior of NOT notifying the admin
	       when an exception occurs.
	
	Additional query words: release notes kbreadme iisdebug akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
