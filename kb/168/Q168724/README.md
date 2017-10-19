---
layout: page
title: "Q168724: SMS: List of Tools Available on the SMS 1.2 Compact Disc"
permalink: /kb/168/Q168724/
---

## Q168724: SMS: List of Tools Available on the SMS 1.2 Compact Disc

	Article: Q168724
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtool kbusage kbsmsUtil smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article documents information on the Microsoft Systems Management Server
	tools available in the Support\Debug subdirectory of the Systems Management
	Server 1.2 CD.
	
	These tools are provided to assist Microsoft Product Support Services in
	diagnosing problems remotely. These utilities are not officially supported, but
	we encourage constructive feedback or deficiency reports. For a complete list of
	files, please examine both the original media and any corrective service packs
	you may have. Wherever possible, versions for each processor architecture are
	provided within an appropriate subdirectory. However, there may be a few
	exceptions, particularly with 16-bit programs and batch files that are provided
	under the "x86" processor type.
	
	MORE INFORMATION
	================
	
	Adptstat.exe (Intel platform only)
	----------------------------------
	
	With Adptstat.exe, you can debug NetBIOS connectivity problems by issuing
	standard calls to the specified NetBIOS name and returning information specific
	to that name on the network.
	
	Bugdata.exe / Hdecomp.exe
	-------------------------
	
	These tools allow for the easy collection of the Systems Management Server
	registry, log files, and site control image. A compressed file is created for
	easy sending to Microsoft Technical Support for analysis. Hdecomp.exe
	decompresses the files.
	
	Bugdata.exe creates a data-compressed file containing:
	
	- The SMS registry hive.
	
	- All current and backup component trace logs.
	
	- A copy of the master site control image.
	
	This information consumes about 3 MB of space, which is compressed to about 150
	KB. When you run Bugdata.exe on the site server, a default Bugdata.sms file is
	created for you to send to Microsoft Product Support Services for analysis.
	
	  Syntax: bugdata
	
	After it is compressed, you can use the Hdecomp.exe program to decompress the
	resulting file.
	
	  Syntax: hdecomp bugdata.sms c:\analyze\sms\ 
	
	NOTE: When you run Hdecomp.exe, the Smsunzip.dll file must be located in the same
	directory.
	
	To gather information from a remote machine using Bugdata.exe, use the following
	command:
	
	  bugdata /s:<servername>
	
	Where <servername> represents the remote site server's Netbios name.
	
	NOTE: The Bugdata.sms file containing the compressed information is placed in the
	remote server's x86.bin subdirectory.
	
	Cliopts.exe (Intel platform only)
	---------------------------------
	
	With this tool, you can set special options to control the transport protocol
	used by the Helpdesk and Diagnostics components on 16-bit clients. Client setup
	now picks up options from the Sms.ini file for the WUSER and USERTSR/IPX command
	lines. You can make these entries in the Sms.ini file for the desired USERTSR
	and WUSER options, and CLISETUP will impose them. You can use Cliopts.exe to set
	these options so that they can be preserved during upgrade when Smsrun16.exe is
	run. You can also distribute Cliopts.exe as a Package Command Manager (PCM) job.
	There is no package definition file (PDF) currently available; a batch file
	containing the needed options should be written by the administrator.
	
	  Syntax: cliopts /set <option_name> <option_value>
	          cliopts /list <option_name>
	
	The following are some examples of the use of Cliopts.exe:
	
	  cliopts /set usertsr /L1
	  cliopts /list usertsr
	  cliopts /set wuser /L1
	
	Currently, the only allowable options are usertsr, useripx, and wuser. Running
	cliopts /set again overwrites any previous options (although the /w on usertsr
	is never modified by this process). Cliopts.exe really just sets the option in
	the Sms.ini file and sets SetupPhase=verify_files in the [Local] section to
	force CLISETUP to rewrite them. The following are some sample changes to the
	Sms.ini file:
	
	  [Options]
	  usertsr=/L1
	  wuser=/L1
	
	  [Local]
	  SetupPhase=verify_files
	
	These changes do not take effect until the user restarts Windows. USERTSR also
	requires the user to subsequently restart the computer after restarting Windows.
	This is due to the fact that the first time Windows is restarted, Client.bat
	gets the new USERTSR value, but it then requires a restart of the system to
	start USERTSR with the new value. For example, on a computer running Windows for
	Workgroups, to change the lana number to lana 1, the user would:
	
	1. Run cliopts /set usertsr /L1.
	
	2. Run cliopts /set wuser /L1.
	
	3. Quit and restart Windows.
	
	4. Quit Windows again and then restart the computer.
	
	For more information, please refer to the "Remote Troubleshooting" chapter of the
	Administrator's Guide.
	
	Dumpsend.exe
	------------
	
	Dumpsend.exe displays the contents of a send request (sendreq) file, which makes
	up the following records:
	
	- Send request data record: gives information such as the destination site,
	  priority, job name, job ID, and outbox location.
	
	- Cancel record: shows whether the sendreq is canceled.
	
	- Action code record: includes retry, deleted, and so on.
	
	- Address record (multiple records allowed): includes all the indecipherable
	  encrypted names, as well as the gateway and destination addresses.
	
	- Package file record: the name of the package file.
	
	- Instruction file record: the name of the instruction file.
	
	- Sender record: includes information about what the sender history, that is,
	  the status, time of last event, start time, the number of times a sender took
	  this sendreq, and the size of the sendreq.
	
	- Access record: file access information.
	
	- Ssps record: information about the remote site installation.
	
	  Syntax: dumpsend <file_name>
	
	Error32.exe
	-----------
	
	Error32.exe displays the text of an error message for the specified Windows NT
	(Win32 subsystem, driver, or service) error code. If no application or event log
	message DLL is specified, the message text comes from the system message table.
	
	  Syntax: error32 <code> [:<code>] [<source_name> | <message_DLL>]
	          [insertion_string[...]] [*]
	
	Where:
	
	  <code>           Specifies an error code (in decimal) for a Windows NT
	                   error, or an event code for an application or system
	                   source (such as SMS). The error code is assumed to be a
	                   Win32 error unless <source_name> or <message_DLL> is
	                   specified.
	
	  :<code>          Specifies another code to form a range; for example,
	                   3:11 specifies the codes from 3 to 11, inclusive.
	
	  <source_name>    Specifies an application (such as SMS) or system name
	                   registered for the Windows NT event log. This parameter
	                   cannot be used with <message_DLL>.
	
	  <message_DLL>    Specifies a full or partial path to a Windows NT event
	                   log message DLL file (such as Netmsg.dll). This
	                   parameter cannot be used with <source_name>.
	
	  insertion_string Specifies one or more strings to be inserted into the
	                   displayed message.
	
	  *                Displays messages for all matching languages and
	                   severities.
	
	Hcomp.exe
	---------
	
	Hcomp.exe compresses a Systems Management Server package (.pkg) file, using the
	same compression algorithm used when Systems Management Server creates a package
	in the Systems Management Server Administrator program.
	
	Hdecomp.exe
	-----------
	
	Hdecomp.exe decompresses a Systems Management Server package (.pkg) file from the
	command line.
	
	  Syntax: hdecomp <source> <destination>
	
	Hvalcomp.exe
	------------
	
	Hvalcomp.exe validates a Systems Management Server compressed package (.pkg) file
	from the command line.
	
	  Syntax: hvalcomp <source>
	
	NOTE: When you run Hdecomp.exe, the Smsunzip.dll file must be located in the same
	directory.
	
	Install.bat (Intel platform only)
	---------------------------------
	
	This file is in the Support directory, and is used to install the debug symbol
	files. This should only be done at the guidance of a Microsoft Product Support
	Services professional for the purposes of diagnosing an access violation (AV) or
	other critical error.
	
	Instsrv.doc and Instsrv.exe
	---------------------------
	
	Instsrv.exe allows you to install or control local or remote services running on
	remote and local computers. (Do not confuse Instsrv.exe with INSTSVC, which
	comes with the Microsoft Windows NT Resource Kit.) The Instsrv.doc file located
	in Support\Debug\X86 directory of the Systems Management Server 1.2 CD describes
	the usage of Instsrv.exe.
	
	Mifcheck.exe
	------------
	
	Mifcheck.exe is a MIF parser and syntax checker for use in verifying text MIFs
	before submitting them to the system. It reports syntax and semantic errors, and
	it is designed to help independent software vendors (ISVs) who are writing MIFs
	for new components for the inventory agent to collect and report to the site
	server.
	
	  Syntax: mifcheck [/dump] <file>
	
	Where:
	
	  /dump  Dumps the parsed information to the console. If you run MIFCHECK
	         without the /dump option, the MIF files are checked for syntax
	         errors.
	
	  <file> Indicates a MIF text file.
	
	Nadreset.bat (Intel platform only)
	----------------------------------
	
	When detaching from a parent site, that parent site's network application
	database (NAD) remains within the child site's database by design, to prevent
	clients from undergoing drastic program group deletion. If the administrator
	prefers to clean out these foreign NAD entries, the Nadreset.bat batch file
	initiates the process.
	
	  Syntax: nadreset <smsroot>
	
	Where <smsroot> is the drive letter and directory where Systems Management
	Server is installed, for example, D:\SMS.
	
	WARNING: Running Nadreset.bat causes all of your shared applications that use a
	configuration command line to change status from INSTALLED to CONFIGURE. The
	result is that the configuration command line will be run again, and may cause
	errors on the client.
	
	Naduser.exe (Intel platform only)
	---------------------------------
	
	Naduser.exe is a Win16 application that, when run on a client, can indicate:
	
	- User global group membership.
	
	- NAD applications available to a user, based on the user's global group
	  membership.
	
	Pcdetect.exe (Intel platform only)
	----------------------------------
	
	Pcdetect.exe detects certain Japanese personal computers that are sensitive to
	the inventory process. Please refer to the release notes and product
	documentation for further information on this utility.
	
	Pcmdump.exe
	-----------
	
	This Win32 utility, when run on the site server, dumps the contents of the
	Package Command Manager instruction database.
	
	  Syntax: pcmdump [options] {/a | /r <instruction_file>}
	
	Where:
	
	  /a                    Dumps all files in the instruction box (that is,
	                        the Sms\Logon.srv\Pcmins.box) directory.
	
	  /d                    Dumps detailed information.
	
	  /l                    Lists the contents of the PCM instruction box (the
	                        Sms\Logon.srv\Pcmins.box) directory.
	
	  /p                    Pauses before PCMDUMP quits. If you run PCMDUMP in
	                        a command prompt window that closes after the
	                        command is finished, using the /p option allows
	                        you to see PCMDUMP's output before the window
	                        closes. Then you can press any key to close the
	                        command prompt window.
	
	  /r <instruction_file> Dumps a Package Command Manager instruction (.ins)
	                        file from the instruction box (the
	                        Sms\Logon.srv\Pcmins.box) directory.
	
	Rawcheck.exe
	------------
	
	Rawcheck reads an inventory RAW file and displays its contents to the console.
	This tool is used for debugging instances of a reportedly corrupt RAW file.
	
	  Syntax: rawcheck <raw_file> /v
	
	Where /v indicates Verbose mode; more output is displayed on the screen. If you
	experience problems with RAWCHECK, please refer to the following article in the
	Microsoft Knowledge Base:
	
	  Q154284 RAWCHECK for SMS 1.2 Does Not Check SMS 1.2 *.RAW Files
	
	Rsappctl.exe
	------------
	
	Rsappctl.exe resets the shared application databases of subsites. The subsite
	shared application databases are cleared and the shared application information
	is resent from the master site.
	
	WARNING: Running Rsappctl.exe causes all of your shared applications that use a
	configuration command line to change status from INSTALLED to CONFIGURE. The
	result is that the configuration command line will be run again, and may cause
	errors on the client.
	
	Sendcode.exe
	------------
	
	Sendcode.exe sends a numeric code to a Systems Management Server service, causing
	it to perform a specific task.
	
	  Syntax: sendcode <sms_service_name> <svcode>
	
	For further details on the usage of Sendcode.exe, refer to the following article
	in the Microsoft Knowledge Base:
	
	  Q168682 SMS: Usage of Sendcode.exe and Its Service Codes
	
	Setgug.exe
	----------
	
	Setgug.exe sets the Global User Group reporting interval by means of a PCM job.
	This is useful for reducing the number of User Group enumerations performed in a
	complex trust model.
	
	  Syntax: SetGUG [/E On|Off] [/I <days>]
	
	Where:
	
	  /E On|Off Specifies whether Global User Group enumeration is enabled for
	            this site.
	
	  /I <days> Specifies the interval, in days, between enumeration cycles
	            (the minimum is 1).
	
	NOTE: The Setgug.exe file included on the Systems Management Server CD does not
	work as expected. The Setgug.exe file that is included in the BackOffice
	Resource Kit works correctly. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q162383 Site Configuration Manager Stops When Enumerating User Groups
	
	Smstrace.exe
	------------
	
	Smstrace.exe is a graphical user interface (GUI) application that allows you to
	view Systems Management Server log files and get real-time updates as lines are
	appended to the log files. Smstrace.exe only works with the Systems Management
	Server 1.2 final release, not earlier versions (due to DLL incompatibility). You
	can use Smstrace.atd with SMSADDIN to add Smstrace.exe to the Tools menu of the
	Systems Management Server Administrator program.
	
	Snirdr.exe
	----------
	
	With Snirdr.exe, you can read and display the Despooler instruction information
	contained in an SNI file.
	
	  Syntax: snirdr <snifile_name>
	
	Sqlpwd.exe
	----------
	
	With Sqlpwd.exe, you can change the SQL account and password used by the Systems
	Management Server services. This task is normally accomplished through Systems
	Management Server Setup.
	
	Srvinfo.exe (Intel platform only)
	---------------------------------
	
	With Srvinfo.exe, you can obtain numerous computer parameters, such as the amount
	of available disk space and partition types. You can use this tool remotely.
	
	Testnet.exe
	-----------
	
	Testnet.exe simulates the networking functions used by the Site Configuration
	Manager. You can use this tool to debug specific issues related to WAN speeds
	and domain security.
	
	Tracer.exe
	----------
	
	Tracer.exe is a command-line, console mode utility used to read changes made to a
	text file in real time.
	
	  Syntax: tracer <path>
	
	Where <path> is the path to one of the Systems Management Server log
	files.
	
	There is also a GUI MDI version, called Smstrace.exe, that is included in the
	Support\Debug\<platform> directory of the Systems Management Server 1.2
	CD.
	
	Ugmif.exe
	---------
	
	Ugmif.exe is a User Group MIF tool for trusted domains.
	
	  Syntax: UGMIF <domain> [<MIF_directory>]
	
	Where:
	
	  <domain>        Specifies the name of a Windows NT domain.
	
	  <MIF_directory> Specifies a directory path for the delta MIF. If
	                  <MIF_directory> is not specified and this utility is run
	                  on a Systems Management Server site server, the delta
	                  MIF is written to the Systems Management Server
	                  Inventory Data Loader inbox for the site
	
	Viewnad.exe
	-----------
	
	You can use Viewnad.exe from a client computer to view applications that are on
	servers and are available to be used by clients. Viewnad.exe also indicates
	which applications are accessible to the client.
	
	Wps.exe (Intel platform only)
	-----------------------------
	
	You can use Wps.exe to view Windows 3.x processes and certain resource
	information for each process. With Wps.exe, you can also stop a process, much
	like the Windows NT Resource Kit utility Pviewer.exe.
	
	Additional query words: prodsms admin terminate close exit end
	
	======================================================================
	Keywords          : kbtool kbusage kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
