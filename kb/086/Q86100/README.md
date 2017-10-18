---
layout: page
title: "Q86100: PC Win: MSMAIL.INI Entries in [Microsoft Mail]"
permalink: kb/086/Q86100/
---

## Q86100: PC Win: MSMAIL.INI Entries in [Microsoft Mail]

	Article: Q86100
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists and explains all the entries in the Microsoft Mail for
	Windows private profile, MSMAIL.INI, that are contained in the [Microsoft Mail]
	section.
	
	[Microsoft Mail]
	----------------
	
	Entries in this section affect the behavior of the Mail program as well as the
	Microsoft Mail for PC Networks transport and name service.
	
	CheckLatencyInterval=<number of seconds>:
	
	Affects the mail spooler's latency checking, which is intended to prevent the
	spooler's background processing from interfering unduly with foreground work. If
	this length of time passes without the spooler having any work to do, it will
	reinitialize its latency algorithm.
	
	The default value is 30 seconds.
	
	
	DemosEnabled=<0,1>:
	
	Adds the Demos option under the Help Menu.
	
	ExportMmfFile=<filename>:
	
	Identifies the path and filename of an .MMF file, pointing to the last place a
	mail folder was exported to. This entry is written by the Mail program and is
	used as a default value that is displayed in the Export Folders dialog box when
	you choose Export Folder from the File menu of the Mail program.
	
	FixedFont=<facename, size, 0/1, 0/1>:
	
	This entry identifies a fixed-pitch font you can substitute for the one supplied
	with Mail. It has four parts, separated by commas: the typeface name (not the
	font file name), point size, a flag for bold, and a flag for italic.
	
	This font serves as an alternative to the Helvetica 10-point font Mail uses by
	default; it is particularly handy for viewing messages that were created in a
	fixed-pitch font. (However, there is nothing to keep you from substituting a
	proportional font.) The View.Change Font command toggles the font between the
	normal font and the fixed font. Both entries affect only message body text, not
	message envelope text or folder lists.
	
	The default value is MsMail3, 9, 0, 0.
	
	ForceScanInterval=<number of seconds>:
	
	Affects the mail spooler's latency checking, which is intended to prevent the
	spooler background processing from interfering unduly with foreground work. If
	this length of time passes without the spooler getting an opportunity to do
	outstanding work, it will begin requesting idle time more frequently (every
	ScanAgainInterval seconds), and eventually the spooler will begin stealing time
	whenever it can. Setting this entry to 1 is common practice for transport
	developers who want the spooler to process more often.
	
	The default value is 300 (5 minutes).
	
	GALOnly=<0/1>:
	
	If this entry is set to 1, the Mail address book will display only the Global
	Address List (GAL) and the Personal Address Book (PAB), thereby providing you
	with a flat address list of all the users visible from your postoffice. Note
	that you must be running against a Mail for PC Networks 3.0, 3.0b, or 3.2
	postoffice with GAL support in order for this to work.
	
	If this entry is set to 0, the Mail address book will display all possible
	address lists and the PAB.
	
	GALOnly is currently supported only by the Mail for PC Networks name service
	provider. The default value is 0.
	
	IdleRequiredInterval=<number of seconds>:
	
	Affects the mail spooler's latency checking, which is intended to prevent the
	spooler's background processing from interfering unduly with foreground work.
	The spooler defers its work temporarily if the system has serviced an
	interactive request within this interval, to avoid starting a transfer when you
	are busy.
	
	The default value is 2 seconds.
	
	LocalMMF=<0/1>:
	
	If this entry is 1, your .MMF file will be created in the Windows directory
	rather than on the postoffice the first time you run Mail. Together with the
	NoServerOptions entry, it prevents .MMF files from being stored on the
	postoffice; this is the normal state for the Windows for Workgroups Mail
	program.
	
	The default value is 0.
	
	Login=<mailbox name>:
	
	Put your Mail for PC Networks mailbox name (short name, up to 10 characters) in
	this entry if you do not want to keep typing it in the Login dialog box. If you
	set both the Login and Password entries, the Login dialog will not appear when
	you start Mail; it will log you in automatically. If you only set the Login
	entry, Mail will still prompt for your password, but you won't have to type your
	name every time.
	
	MailBeep=<path>:
	
	Set this entry to the path of a Windows .WAV file, and you will get a more
	interesting sound than the normal two beeps when new mail arrives.
	
	This entry will not work unless you have Multimedia Extensions for Windows
	installed, and the "Sound chime" option in the Mail Options dialog box is
	checked. The default value is blank.
	
	MailTmp=<path>:
	
	Set this entry to a directory where you would like Mail to place temporary copies
	of attached files. When you launch an application by double-clicking a file
	attached to a mail message, Mail copies the file to this directory and invokes
	the application associated with it.
	
	The default value is the value of the TEMP environment variable. If there is no
	TEMP variable, the default is the Windows directory.
	
	MAPIHelp=<filename>:
	
	This entry points to the MAPI Help file and is used when you request help in any
	of the dialog boxes displayed by the MAPI support functions. This entry is
	defined when the Mail program is run the first time. The default value points to
	the MSMAIL.HLP file in your WINDOWS directory.
	
	
	Multi-Message=<0/1 >:
	
	This entry provides a default setting for the "Print multiple notes on a page"
	option in the Print dialog box, which appears whenever you print messages from
	Mail. Set it to 0 to have that option appear unchecked by default.
	
	The default value is 1, which causes the option to be checked by default.
	
	Netbios=<0/1>:
	
	Set this entry to 1 to enable NetBIOS notification of new mail delivery. NetBIOS
	notification provides quicker response to the arrival of new mail from users on
	your local postoffice.
	
	Only the Mail for PC Networks transport provider supports this entry. The default
	value is 0.
	
	NewMsgsAtStartup=<0/1>:
	
	Set this entry to 1 to have Mail download new messages as quickly as possible
	when it is started. If it is 0, the new mail will still come in, but relatively
	slowly (in the background while you work on other things).
	
	The default value is 0.
	
	NOTE: NewMessagesAtStartup= will also work for this entry.
	
	NextOnMoveDelete=<0/1/-1>:
	
	If this entry is 1, Mail automatically opens the next message in a folder after
	you delete or move an open message. If this entry is -1, Mail automatically
	opens the previous message, thus facilitating quick scanning through your Inbox.
	If this entry is 0, Mail will close the Read Note window as soon as you move or
	delete the message, and you will have to press the ENTER key or double-click to
	open the next message.
	
	Set this value to 1 if your messages are sorted in ascending order (that is, in
	the order received) and -1 if they are sorted descending (that is, most recent
	message first).
	
	The default value is 1.
	
	NoCheckInterval=<0/1>:
	
	Set this entry to 1 to have Mail disable the "Check for new mail every x minutes"
	field in the Mail Options dialog box.
	
	The default value is 0.
	
	NormalFont=<facename, size, 0/1, 0/1>:
	
	This entry identifies the default font (normally proportionally spaced) used to
	display Mail messages. It has four parts, separated by commas: the typeface name
	(not the font file name), point size, a flag for bold, and a flag for italic.
	
	The View Change Font command toggles the font between the Normal font and the
	Fixed font; the latter is handy for viewing messages that were created using a
	fixed-pitch font. Both entries affect only message body text, not message
	envelope text or folder lists; Mail always uses Helv 8 point for that purpose.
	(Under Windows 3.1, you can add Helv=<facename> in the [FontSubstitutes]
	section of your WIN.INI file to effect a wholesale substitution. However, keep
	in mind that all programs will be affected, not just Mail.)
	
	The default value is Helv, 10, 0, 0.
	
	NoServerOptions=<0/1>:
	
	If this entry is 1, the Server button in the Mail Options dialog box is
	unconditionally disabled. On the Mail server, this button calls up a sub-dialog
	box that enables you to relocate the .MMF file, among other things. Together
	with the LocalMMF entry, it prevents .MMF files from being stored on the
	postoffice at all; this is the normal state for the Windows for Workgroups Mail
	program.
	
	The default value is 0 (the Server button and dialog box are enabled).
	
	OfflineMessages=<path>:
	
	This entry is written by the Mail for PC Networks transport provider whenever you
	choose to store your message file off the postoffice. It uses the entry to find
	the file quickly (without a file system browse dialog box) when you start up
	without connecting to the postoffice.
	
	Only the Mail for PC Networks transport supports this entry. The default value is
	the path specified in the Mail Options Server dialog box for a local message
	file. The entry is removed when you store your message file on the postoffice.
	
	OldStorePath=<path>:
	
	This entry is written temporarily by the Mail for PC Networks transport while you
	are moving your message file (using the Mail Options Server dialog box), and
	contains the original path to the file if it was originally stored off the
	postoffice. This entry is removed once the move successfully completes, so you
	will only see it if your system stops (crashes) during a move.
	
	The default value is empty.
	
	Password=<password>:
	
	Use this entry together with the Login entry, to tell Mail your account
	information without typing it into the Login dialog box.
	
	If you have no password, keep this entry in as "Password=". This is different
	from omitting the entry. Omitting the entry means you want to type your password
	(the default); "Password=" means you have a password and it is blank.
	
	PollingInterval=<minutes>:
	
	This entry gives the default value for the "Check for new mail every x minutes"
	option in the Mail Options dialog box. Administrators can set this value in the
	MSMAIL.INI file at the share point from which users install the Windows client,
	to provide a uniform default value for the polling interval.
	
	When you run the Windows client for the first time, the value for PollingInterval
	is copied into the .MMF file. If the variable doesn't exist, the default value
	of 10 minutes is placed in the .MMF file. From then on, the value that is in the
	.MMF file controls the polling and the variable in the MSMAIL.INI file is
	ignored. Therefore, existing Windows client users must use the client interface
	to change the polling interval. To do this, choose Options from the Mail menu
	and change the value (x) for "Check for new mail every x minutes."
	
	Printer=<printer name>, <driver name>, <port>:
	
	This is the default value for the printer to use for printing mail, which appears
	in the Mail print dialog box. Mail initially copies it from your WIN.INI file,
	then saves whatever you change it to in the MSMAIL.INI file.
	
	The default value is the default printer you specify using the Windows Control
	Panel.
	
	PrintFont=<pointsize>:
	
	This entry identifies the default point size for the defined font used by the
	Mail program to print mail messages. The actual font used to print the mail
	message is dependent on whether the mail message is set to be displayed using
	the fixed font (specified by the FixedFont value) or the normal font (specified
	by the NormalFont value).
	
	The default point size is 10.
	
	PumpCycleInterval=<number of seconds>:
	
	Use this entry if you are a transport implementer who wants the spooler to check
	for new mail, recover from errors, and generally do things more often than once
	per minute. You will find the spooler stealing more time from your system, which
	is fine if you are debugging it.
	
	The default value is 60 seconds, or the value specified in the Mail Options
	dialog box (whose granularity is minutes).
	
	ReplyPrefix="<string>":
	
	Mail uses this string (enclosed in quotation marks), if present, to distinguish
	your comments from the original message when you reply to mail. When you reply,
	the original message text is copied to the body of the reply message, and each
	line of the original is prefixed with this entry. "| " (a vertical bar followed
	by a blank space) is a popular value.
	
	The default value is empty.
	
	ScanAgainInterval=<number of seconds>:
	
	Affects the mail spooler's latency checking, which is intended to prevent the
	spooler's background processing from interfering unduly with foreground work.
	When the spooler defers its work because of higher-priority interactive tasks,
	it will recheck the availability of the system at this interval.
	
	The default value is 2 seconds.
	
	Security=<0/1>:
	
	If this entry is 1, Mail prompts for your password whenever its window is
	restored from its icon state. That is, if Mail is minimized and you double-click
	the icon, you must re-enter your password before you (or anyone else) can see
	your messages.
	
	The default value is 0.
	
	ServerDrive=<drive letter>:
	
	If this entry is present, Mail looks for the postoffice in the default directory
	on this drive. Both the MAIL.DAT file and the ServerPath entry take precedence,
	however.
	
	Only the Mail for PC Networks transport supports this entry. The default value is
	drive M.
	
	ServerPassword=<password>:
	
	This entry identifies the password used to connect to the server specified by the
	ServerPath entry. This entry should be used to specify the password for the file
	share if the ServerPath entry is specified using the universal naming convention
	(UNC) and the server name, share name, or path contains spaces.
	
	ServerPath=<path>
	
	ServerPath=<\\server\share\path> <password>:
	
	If this entry is present, Mail looks for the postoffice in the directory
	specified. The first form of this entry, with a normal path, works on all
	networks. The second form works only on Microsoft networks and compatible
	networks; if you use it, Mail connects dynamically (without using a drive) to
	the file server where the postoffice resides.
	
	Only the Mail for PC Networks transport supports this entry. There is no default
	value.
	
	SharedExtensionsDir=<path>
	
	SharedExtensionsDir=<\\server\share\path> <password>:
	
	If this entry is present, Mail looks for custom commands and messages in the
	directory specified. A file named SHARED.INI in that directory will tell Mail
	what shared extensions to load. You can specify additional extensions in your
	own MSMAIL.INI. To simplify updating the extensions, Administrators will often
	provide a common share point for extensions to Mail; this entry makes it work.
	The first form of this entry, with a normal path, works on all networks. The
	second form works only on Microsoft networks and compatible networks; if you use
	it, Mail connects dynamically (without using a drive) to the file server where
	the shared extensions reside.
	
	There is no default value.
	
	SharedFolders=<0/1>:
	
	This entry enables the use of Mail shared folders. This feature is always
	available when Mail is being used with the Mail for PC Networks postoffice. By
	default, it is unavailable when you use Mail with other mail systems; you must
	use this entry, along with the SharedFolders entry in the [Providers] section
	and perhaps other entries, to enable it then.
	
	The default value is 1 if the Logon entry in the [Providers] section is MSSFS,
	and 0 otherwise.
	
	SpoolerBackoffInterval=<milliseconds>:
	
	The mail spooler waits this long before retrying an operation that has failed due
	to a mail server error condition classified as transient, such as a locked
	file.
	
	The default value is 2000 (2 seconds).
	
	SpoolerReconnectInterval=<seconds>:
	
	The mail spooler waits this long before retrying an operation that has failed due
	to a mail server error condition classified as fatal, such as a lost network
	connection.
	
	The default value is 60 (one minute).
	
	StripGatewayHeaders=<0/1>:
	
	If this entry is 1, message header text (coming above the dashed line) will be
	stripped from Mail messages that arrive via a gateway. Set this entry to 0 if
	you want to see the extended information supplied by the gateways, which
	typically includes information such as message identifiers specific to the
	foreign mail system. Message header text supplied by native Mail for PC Networks
	clients is always stripped.
	
	Only the Mail for PC Networks transport supports this entry.
	
	The default value is 1 (you don't see gateway information).
	
	WG=<0/1>:
	
	When Microsoft Mail is started, it determines whether or not it is running with
	Microsoft Windows for Workgroups by checking the copyright information that has
	been stamped into the MSMAIL.EXE file. The result of this check is written to
	the MSMAIL.INI file as the "WG=" entry.
	
	This setting controls which caption shows in Microsoft Mail. If the entry is
	"WG=1", which indicates Windows for Workgroups, the caption is "Mail"; if
	"WG=0", which indicates Microsoft Mail for PC Networks 3.0, 3.0b, or 3.2, the
	caption is "Microsoft Mail."
	
	Window=<left right top bottom zoom toolbar statusbar scrollbars>:
	
	This entry consists of eight numbers that govern the display of the main Mail
	window. It is written automatically when you exit Mail, so changes you make
	while Mail is running will be lost.
	
	The first four numbers are pixel coordinates for the four sides of the main
	window: left, right, top, and bottom. The fifth number is 1 if the main window
	is in a normal (restored) state, 2 if it is maximized (zoomed), and 3 if it is
	minimized (icon). The remaining three numbers determine whether the Toolbar,
	status bar, and scroll bars are displayed on the main window: 0 means do not
	display the corresponding bar, and 1 means display it.
	
	The defaults for this entry are:
	
	- Window size and location determined by Windows
	
	- Zoom state normal (restored)
	
	- Toolbar on
	
	- Status bar on
	
	- Scroll bars on
	
	Additional query words: 3.00 3.00b 3.20 Microsoft Mail append
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : :3.0,3.0b,3.2
	
	=============================================================================
	
