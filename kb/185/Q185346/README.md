---
layout: page
title: "Q185346: SMS: Logon Script Takes a Long Time over RAS or Slow Connection"
permalink: /kb/185/Q185346/
---

## Q185346: SMS: Logon Script Takes a Long Time over RAS or Slow Connection

	Article: Q185346
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): smsappscripts kbSMSAppScripts
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are connecting to the network over a dial-in (RAS) connection or other
	slow connection (such a slow link in a WAN environment), the Systems Management
	Server script files (Smsls.bat or Runsms.bat) may take a long time to run. To
	reduce this amount of time, you can:
	
	- Apply Systems Management Server 1.2 Service Pack 3.
	
	- Set the Slow Network Threshold for a site and use Netspeed.com.
	
	- Prevent the logon scripts from running by doing any of the following:
	
	   - Use the Checkras.exe utility that comes with the BackOffice Resource Kit
	     determine whether or not to run the logon script.
	
	   - Use the IPCONFIG utility of Windows NT to determine whether or not to run
	     the logon script.
	
	   - Use a file or environment variable to determine whether or not to run the
	     logon script.
	
	MORE INFORMATION
	================
	
	Apply Systems Management Server 1.2 Service Pack 3
	--------------------------------------------------
	
	When you run SMSLS on versions earlier than Systems Management Server 1.2 Service
	Pack 3, client inventory files are read from the Windows NT Server computer into
	memory on the client. This process occurs every time SMSLS is run. This is a
	large amount of data to transfer (megabytes worth), which is why SMSLS takes so
	long to run. With Systems Management Server 1.2 Service Pack 3, the files are
	copied to the local client the first time SMSLS is run after the upgrade. Every
	subsequent time SMSLS runs, it reads the client files from the local client's
	hard disk (as opposed to the Windows NT Server computer), so the SMSLS process
	takes significantly less time.
	
	For more information on Systems Management Server Service Pack 3, see the
	following articles in the Microsoft Knowledge Base:
	
	  Q157677 Systems Management Server 1.2 Service Pack 3 Fixlist
	
	  Q158864 How to Obtain Systems Management Server 1.2 Service Pack 3
	
	Use Netspeed.com
	----------------
	
	When a user runs the SMSLS batch file on a Systems Management Server client
	computer, the Netspeed.com utility evaluates the link to the client's logon
	server. If the link has a transmission rate that is slower than specified by the
	Inventory Strategy When Network Is Slow setting, the Netspeed.com utility
	identifies it as a slow network. Netspeed.com detects how long it takes to read
	1 KB of data from the logon server. By default, the slow network threshold is
	850 milliseconds.
	
	For more information on Netspeed.com, see the "How SMS Determines a Slow Network"
	and "Setting the Slow Network Threshold" topics in the Systems Management Server
	Books Online. Also see the following articles in the Microsoft Knowledge base:
	
	  Q151184 Disabling Inventory Collection over Slow Connections
	
	  Q131011 SMS: Netspeed.com Internals
	
	  Q142267 SMS: Netspeed Returns False Speed Over Compression-Capable Link
	
	Use the Checkras.exe Utility
	----------------------------
	
	You can use the BackOffice Resource Kit CHECKRAS utility to determine if a RAS
	connection is being used. Using CHECKRAS, the Systems Management Server logon
	script can be skipped for anyone that dials in over a RAS (or Dial Up
	Networking) connection. This method works well for client computers running
	either Windows 95 or Windows NT.
	
	In the following example of CHECKRAS in a Windows NT logon script, the
	Checkras.exe file is located on the Netlogon share:
	
	     %0\..\checkras.exe > nul
	     if errorlevel 1 goto SKIPINV
	
	     call %0\..\smsls
	     GOTO END
	
	     :SKIPINV
	     REM Perform any RAS-specific actions
	
	     GOTO END
	
	     :END
	
	In the following example of CHECKRAS in a NetWare logon script, the Checkras.exe
	file is located in the SYSTEM subdirectory of the SYS volume:
	
	     WRITE "Checking for RAS Connections"
	
	     #%SYS\SYSTEM\checkras.exe
	     set RAS=ERROR_LEVEL
	
	     if <RAS> > "0" then GOTO SKIPINV
	
	     set SMS_LOGON="SYS:SMS\logon.srv"
	     INCLUDE %<SMS_LOGON>\SMSLS.SCR
	     set SMS_LOGON=
	
	     GOTO END
	
	     SKIPINV:
	     REM Perform any RAS-specific actions
	
	     GOTO END
	
	     END:
	
	Use the IPCONFIG Utility in Windows NT
	--------------------------------------
	
	This is another method to disable the SMSLS login script; it works well for
	Windows NT clients whose IP configuration differs depending on whether they are
	dialing in over a RAS connection or connected to the LAN locally. Add the
	following lines to a batch file that will call the Smsls.bat file:
	
	     REM  RAS BYPASS
	     REM  The following line looks for the presence of the string
	     REM  "255.255.0.0." in a user's IPCONFIG information.
	     REM  If found, the user is using RAS, and should not run SMS.
	     REM  If 255.255.0.0 is found, the ERRORLEVEL is set to 1.
	     REM  If 255.255.0.0 is not found, the ERRORLEVEL is set to 0.
	
	     ipconfig | find "255.255.0.0" > nul
	        IF errorlevel 1 GOTO SKIP_RAS
	
	     :SKIP_RAS
	
	NOTE: This method does not work for client computers running Windows 95, because
	they do not have the IPCONFIG utility.
	
	Use a File or Environment Variable
	----------------------------------
	
	This method is similar to the preceding method of checking for a specific IP
	configuration. You can place a file on the hard disk, or set an environment
	variable, and a batch file can look for it. Based on this environment setting or
	file's existence, the batch file can determine whether or not to run SMSLS.
	
	Additional query words: prodsms back office bork sp sp3 login novel novell winnt win95
	
	======================================================================
	Keywords          : smsappscripts kbSMSAppScripts 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
