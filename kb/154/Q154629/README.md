---
layout: page
title: "Q154629: Automating Remote RAS Logons Using PAD.INF Scripts"
permalink: /kb/154/Q154629/
---

## Q154629: Automating Remote RAS Logons Using PAD.INF Scripts

	Article: Q154629
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,1.1,1.1a,2.1,2.1a,2.2,2.2a,2.2b,2.2c,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Remote Access Service, versions 1.0, 1.1, 1.1a 
	- Microsoft LAN Manager, versions 2.1, 2.1a, 2.2, 2.2a, 2.2b, 2.2c 
	- Microsoft Windows for Workgroups 
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the PAD.INF file for X.25 networks to automate the logon process to
	X.25 providers, instead of using the manual RAS Terminal screen.
	
	Most of the information pertaining to PAD.INF scripting also applies to
	SWITCH.INF scripting. However, PAD.INF supports a few more features and has a
	few more requirements.
	
	None of the information in this article applies to Windows 95, because it does
	not support the script language used in the PAD.INF and SWITCH.INF files.
	Therefore, the PAD.INF and SWITCH.INF files do not exist on Windows Windows 95
	was not tested with X.25 dial-up and therefore is not supported as an X.25
	client, however, it may work with the Dial-Up client After Dialing Terminal
	screen.
	
	To get support for scripting under Windows 95, obtain Windows 95 Service Pack 1
	(SP1). In the Admin directory of SP1 you can find the scripting tool Script.exe.
	The Admin directory also contains the Script.doc file that describes the
	commands and syntax of that new script language which is incompatible with the
	PAD.INF and SWITCH.INF script language.
	
	Note: Windows NT 4.0 supports the script language used in PAD.INF and SWITCH.INF
	as well as the new Windows 95 script language.
	
	LIMITATIONS OF RAS 1.x VERSIONS
	-------------------------------
	
	Microsoft RAS version 1.0 does not have the capability to invoke RAS Terminal or
	use scripts in .INF files. RAS 1.1 is the first RAS version to support X.25 with
	a PAD.INF file, however, SWITCH.INF and a RAS Terminal screen are not supported.
	(Upgrades to RAS 1.1 and RAS 1.1a are free.) All of the information in this
	article applies to all RAS versions that have PAD.INF file support. However, the
	syntax is different for the RAS version 1.1x. See your RAS version 1.1x PAD.INF,
	RAS manual, and release notes for more information.
	
	RAS for Windows for Workgroups 3.11 and Windows NT 3.1, 3.5, 3.51, and 4.0
	support RAS Terminal screens as well as Windows 95, however, Windows 95 is not
	supported with X.25 networks.
	
	Potential PAD.INF Problem in Windows for Workgroups:
	
	RAS for Windows for Workgroups 3.11 may under certain circumstances not execute
	PAD.INF scripts completely even though no error was encountered in the script.
	If that problem occurs you can try copying your PAD.INF script to the SWITCH.INF
	file and replace the special PAD.INF macros X25address, Userdata, and Facilities
	(if applicable) with the actual values because SWITCH.INF does not support these
	macros. See the section "Activating an X.25 Script in SWITCH.INF in Windows for
	Workgroups 3.11 RAS."
	
	Using PAD.INF with Non-X.25 Networks:
	
	PAD.INF was designed for X.25 connectivity. Although using PAD.INF with non- X.25
	networks may work, it has not been tested by, and is not supported by Microsoft.
	PAD.INF has the advantage over SWITCH.INF that it has support for three macros
	mentioned in the previous paragraph that are loaded from the user interface.
	However, in Windows NT 3.51 and 4.0, SWITCH.INF supports two variables: Username
	and Password which are conveniently loaded through the familiar Windows NT logon
	dialog box. The Username and Password variables are not available in Windows for
	Workgroups 3.11 RAS. Also, see your RAS manual and Online Help for X.25 topic.
	
	CREATING SCRIPTS FOR THE RAS PAD.INF FILE
	-----------------------------------------
	
	Note: If you have Windows NT version 4.0, Microsoft recommends using the new and
	improved script language described in Script.doc in the
	%SystemRoot%\System32\RAS directory. However, if you are planning to run your
	script on a previous version of RAS as well, you must use the PAD.INF script
	language described in the following paragraphs:
	
	The PAD.INF file is like a set of small batch files or scripts, all contained in
	one file. A PAD.INF script can contain six elements: a section header, comments,
	commands, responses, response keywords, and reserved macro keywords.
	
	In addition to dividing the PAD.INF file into individual scripts, section headers
	start the scripts. Comment lines are used to document the script. Any other line
	in a script is either a command or a response. A command is issued from the
	local RAS client. A response is received from the remote device or computer.
	
	To write an automatic script for your RAS client you must know the required
	commands and corresponding responses for the intermediary device. The commands
	and responses must be in the exact order that the device expects to encounter
	them. Branching statements, such as GOTO or IF command, are not supported by the
	PAD.INF and SWITCH.INF script language. The required sequence of commands and
	responses from the PAD device should be in the device documentation. If you are
	connecting to a commercial service, the required sequence of commands and
	responses should also be available from the service support staff.
	
	The PAD.INF file contains scripts for different X.25 providers or different PADs
	that the RAS user calls. The scripts are activated by configuring Remote Access
	Phonebook entries as described under "Configuring a Windows NT 3.x or WFW 3.11
	RAS Client for a PAD.INF X.25 Script" and "Configuring a Windows NT 4.0 RAS
	Client for a PAD.INF X.25 Script"
	
	SECTION HEADERS
	---------------
	
	A section header marks the beginning of a script, is enclosed in square brackets,
	and cannot exceed 31 characters. For example:
	
	  [Route 66 Login]
	
	Each script requires one section header. The section header appears in the RAS
	Phonebook field allowing you to select RAS Terminal or any other PAD.INF script.
	For more information, see the "Activating PAD.INF Scripts" section below.
	
	COMMENTS
	--------
	
	Comment lines are preceded by semicolons (;) in the left most margin (column
	one), are optional, and can be placed anywhere in the file. For example:
	
	  ; This script was created by Patrick on September 29, 1995
	
	COMMANDS
	--------
	
	A command comes from the local computer. A response comes from the remote device
	or computer. The COMMAND= statement, which can be used in three different ways,
	is used to send commands to the intermediary device.
	
	NOTE: Use upper case for all PAD.INF commands.
	
	COMMAND=:
	
	COMMAND= by itself causes an approximate two second delay, depending on CPU speed
	and the presence of caching software (for example, SMARTDRV.EXE). If the
	intermediary device cannot process all of the characters on a
	COMMAND=<CustomString><cr> line (because they are sent at once), use
	multiple COMMAND= statements.
	
	COMMAND=<CUSTOM STRING>:
	
	COMMAND=<custom string> sends the custom string and causes a slight delay
	of several hundred milliseconds (depending on CPU speed and installed caching
	software). The delay gives the intermediary device time to process the custom
	string and prepare for the next command.
	
	COMMAND=CUSTOM STRING <cr>:
	
	COMMAND=<custom string><cr> sends the custom string immediately.
	
	Consult the remote device documentation to determine which strings are required.
	
	RESPONSES
	---------
	
	Each command line is followed by one or more response lines. Consult the remote
	device documentation to determine which response strings and dialogs are
	expected by the remote device. RAS compares responses received with what you put
	on the response lines. If it matches, RAS uses the response related keyword and
	macro.
	
	RESPONSE KEYWORDS
	-----------------
	
	The keyword in a response line specifies what your RAS client does with the
	responses it receives from the remote computer.
	
	The response strings your RAS client receives from the remote device or online
	service can be used with one of the following keywords in response lines:
	
	OK= remote_device_response <macro>:
	
	The OK keyword indicates that RAS can execute the next script line if the
	condition on the right side of the equal sign is met.
	
	LOOP= remote_device_response <macro>:
	
	The LOOP keyword indicates to RAS to wait for a response that matches the
	condition to the right of the equal sign and if that condition is met to wait
	for the same response again. If a response does not meet the condition on the
	right side of the equal sign RAS executes the next line.
	
	CONNECT= remote_device_response <macro>:
	
	This keyword is used near the end of the script to indicate the end of the
	script.
	
	ERROR_NO_CARRIER= remote_device_response <macro>:
	
	This keyword is used to test for the presence of a carrier. Intermediary devices
	report their presence in different ways.
	
	ERROR_DIAGNOSTICS= remote_device_response <macro>:
	
	This keyword can be used in conjunction with the <Diagnostics> macro to
	allow RAS to display a message box containing a problem cause and diagnostic
	information.
	
	These response related keywords are usually clustered, but do not have to be.
	CONNECT= is usually the last line, unless it is followed by an ERROR_ line. For
	example:
	
	  CONNECT=<match>" CONNECT"
	  ERROR_NO_CARRIER=<match>"NO CARRIER"
	  ERROR_DIAGNOSTICS=<cr><lf><Diagnostics>
	  ERROR_DIAGNOSTICS=<lf><cr><lf><Diagnostics>
	
	NORESPONSE:
	
	The RAS client always expects a response from the remote device. The client waits
	until a response is received unless a NoResponse statement follows the COMMAND=
	line. If there is no statement for a response following a COMMAND= line, the
	COMMAND= line still executes, but the script does not execute any further.
	
	RESERVED MACRO KEYWORDS:
	
	The macros in the following list are reserved words, which you cannot define in
	PAD.INF to create a new entry. Reserved words are case insensitive.
	
	  Macro           Function
	  -----------------------------------------------------------------------
	  <x25address>   Inserts the value you type in the "X.121 Address" field
	                 (Windows NT 3.x, WFWG 3.11) or "Address" field (Windows
	                 NT 4.0) of the RAS application (Dial-Up client).
	
	  <userdata>     Inserts the value you type in the User Data field in the
	                 RAS application (Dial-Up client).
	
	  <facilities>   Inserts the value you type in the Facilities field in the
	                 RAS application (Dial-Up client).
	
	  <cr>            Inserts a carriage return.
	
	  <lf>            Inserts a line feed.
	
	  <match>         Reports a match if the string enclosed in quotation
	                  marks is found in the device response. For example,
	                  <match>"Smith" matches Jane Smith and John Smith III.
	
	  <?>             Inserts a wildcard character. For example, CO<?><?>2
	                  matches COOL2 or COAT2, but not COOL3.
	
	  <hXX>           Allows any hexadecimal character to appear in a string
	                  including the zero byte, <h00>.
	                  NOTE: XX represents hexadecimal digits.
	
	  <ignore>        Ignores the rest of a response from the macro. For
	                  example, <cr><lf>CONNECTV-<ignore> reads the following
	                  responses as the same: "crlfCONNECTV-1.1" and
	                  "crlfCONNECTV-2.3."
	
	                  If a lot of information is ignored, like a large welcome
	                  banner, RAS might time out and move on to the next
	                  script line. This usually causes problems. To avoid this
	                  problem, use multiple pairs of COMMAND= followed by
	                  OK=<ignore> to force RAS to wait longer and ignore
	                  additional response stings. For example:
	
	                     COMMAND=
	                     OK=<ignore>
	
	                     COMMAND=
	                     OK=<ignore>
	
	  <diagnostics>   This macro function can be used in conjunction with the
	                  ERROR_DIAGNOSITICS= keyword macro to allow RAS to
	                  display a message box containing a problem cause and
	                  diagnostic information. 
	
	ACTIVATING PAD.INF SCRIPTS
	--------------------------
	
	You can configure a RAS entry to run a PAD.INF script after dialing. For example,
	to automate the task of logging onto a remote host, create the script in the
	PAD.INF file and then configure the RAS entry to use the created script after
	dialing.
	
	To activate a script in Windows NT and Windows for Workgroups version 3.11:
	
	1. Run Remote Access and select an entry.
	
	2. Choose the Edit button.
	
	3. If the Security button is not available, choose the Advanced button.
	
	4. Choose the Security button. (In Windows NT 3.1 and Windows for Workgroups
	  3.11 the button is labeled Switch).
	
	5. In the After Dialing box, select the name of the script. The section header
	  in the PAD.INF file is what appears as the name of the script. (In Windows NT
	  3.1 and Windows for Workgroups 3.11 this box is labeled Post-Connect).
	
	6. Choose the OK button until you return to the main Remote Access Screen.
	
	When you dial this entry, the selected script runs after RAS dials and connects
	to the remote host.
	
	Troubleshooting Scripts using DEVICE.LOG and RAS Terminal
	---------------------------------------------------------
	
	Before writing scripts to automate the process of logging onto a PAD, use the RAS
	Terminal feature to familiarize yourself with the logon sequence of events. For
	more information on activating the RAS Terminal feature, refer to the
	"Configuring Windows RAS to Use RAS Terminal After Dialing" section below.
	
	To find errors that prevent your scripts from working, log all information passed
	between RAS, the modem, and the PAD (including errors reported by the
	intermediary device) by turning on RAS logging.
	
	After you enable logging, the DEVICE.LOG file is created (when you start RAS) in
	the Windows NT %systemroot%\SYSTEM32\RAS subdirectory or the Windows for
	Workgroups \WINDOWS directory.
	
	If an error is encountered during script execution, execution halts. Determine
	the problem by looking at any RAS error messages you receive and by looking at
	the DEVICE.LOG file. Make necessary corrections to the script and then restart
	RAS.
	
	The DEVICE.LOG file appends any communication as long as RAS is not restarted. If
	you restart RAS, the DEVICE.LOG file is erased and re- created. Therefore, if
	you make changes to PAD.INF during your script development that require you to
	restart RAS, and you wish to save the current traces contained in the DEVICE.LOG
	file, rename the DEVICE.LOG file before starting RAS again.
	
	ENABLING LOGGING AND CREATING A DEVICE.LOG FILE
	-----------------------------------------------
	
	To enabling logging and creating a DEVICE.LOG file under Windows NT:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Hang up any connections, and exit from Remote Access.
	
	2. Run Registry Editor (REGEDT32.EXE).
	
	3. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  SYSTEM\CurrentControlSet\Services\RasMan\Parameters
	
	4. Change the value of the Logging parameter to 1. For example:
	
	  Logging:REG_DWORD:0x1
	
	Logging begins when you restart Remote Access or start the Remote Access Server
	service (if your computer is receiving calls). You do not need to shutdown and
	restart Windows NT.
	
	To enabling logging and creating a DEVICE.LOG file under Windows for Workgroups:
	
	1. Using a text editor such as Windows Notepad, edit the SYSTEM.INI file.
	
	2. In the [Remote Access] section, add the following line:
	
	  LOGGING=1.
	
	3. Save the file.
	
	The DEVICE.LOG text file is created in the Windows directory when you restart
	Windows and RAS.
	
	CONFIGURING WINDOWS RAS VERSIONS TO USE RAS TERMINAL AFTER DIALING
	------------------------------------------------------------------
	
	To configure a Windows NT RAS 3.1, 3.5, or 3.51 entry to use Terminal after
	dialing:
	
	1. In Remote Access, select an entry.
	
	2. Choose the Edit button.
	
	3. If the Security button is not available, choose the Advanced button.
	
	4. Choose the Security button. (In Windows NT 3.1 and Windows for Workgroups
	  3.11 this button is labeled Switch).
	
	5. In the After Dialing field, select Terminal. (In Windows NT 3.1 and Windows
	  for Workgroups 3.11 this is labeled Post-Connect).
	
	6. Choose the OK button until you return to the main Remote Access Screen.
	
	To configure a Windows NT RAS 4.0 entry to use Terminal after dialing:
	
	1. In Dial-Up Networking, select a phonebook entry and then click More and
	  choose Edit entry and modem properties.
	
	2. In the Script tab under After Dialing (Login), click on Pop Up A Terminal
	  Window.
	
	CREATING ONE SCRIPT FOR MULTIPLE SITUATIONS
	-------------------------------------------
	
	RAS for Windows NT 4.0 supports a new script language that supports subroutines,
	IF, WHILE, and GOTO command, etc. which allows for complex scripts. Windows 95
	supports the same script language, but was not tested with X.25 and therefore is
	not supported in that environment, however, it may work.
	
	A company with employees working at different locations may need to provide
	employees with the ability to log on to an X.25 service from various locations
	requiring different scripts. Not all employees may have the same RAS versions
	and the RAS script language on pre-Windows NT 4.0 RAS does not provide any IF,
	or GOTO statements or support for subroutines. Therefore, you cannot test for
	logical responses or errors received from a PAD and then branch off to a
	different execution path. However, the script language does allow you to catch
	errors and display them on the screen using:
	
	  ERROR_DIAGNOSTICS=<cr><lf><Diagnostics>
	
	To provide a variety of RAS clients with a PAD.INF or SWITCH.INF script you need
	to write several scripts in the PAD.INF file to manage all local logon dialog
	variations. For example:
	
	  If you have a Windows for Workgroups 3.11 RAS client or Microsoft RAS 1.1a
	  client, set an environment variable to a value representing the local X.25
	  carrier. Then run a batch file that copies the correct script to the file
	  name PAD.INF or SWITCH.INF (depending on the value of the environment
	  variable) and then start Windows.
	
	  If you have a Windows NT RAS client, create an icon that runs a similar batch
	  file that tests the environment variable and then runs RAS. All scripts can
	  be provided on one disk and all the user has to do is copy the files to a
	  directory on their hard drive and set the environment variable. This can be
	  automated as well to minimize user interaction.
	
	Additional query words: prodnt 3.10 3.11 1.10 1.10a 1.1x 1.x phone book
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbLanManSearch kbRASSearch kbWFWSearch kbLanMan210 kbLanMan210a kbLanMan220 kbLanMan220a kbLanMan220b kbLanMan220c kbRAS100 kbRAS110 kbRAS110a
	Version           : :1.0,1.1,1.1a,2.1,2.1a,2.2,2.2a,2.2b,2.2c,3.1,3.5,3.51,4.0
	
	=============================================================================
	
