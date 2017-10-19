---
layout: page
title: "Q142369: INFO: AS/400 Command Syntax"
permalink: /kb/142/Q142369/
---

## Q142369: INFO: AS/400 Command Syntax

	Article: Q142369
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article details how AS/400 commands are constructed, gives examples of how
	they are used, and references sources of help on the AS/400.
	
	Information for this article was taken mainly from AS/400 system documentation.
	Sections preceded by &&& are copies of displays. This article is
	most useful if viewed using a fixed-width font.
	
	MORE INFORMATION
	================
	
	AS/400 Command Formats:
	
	AS400 commands are generally constructed using syntactical blocks. These blocks
	are concatenated together to produce commands. Generally, the first block on a
	command details the action to be taken by the command, and all subsequent parts
	of the command are modifiers. For example, the command WRKSYSVAL is composed of
	three major blocks, one action, and two specifiers of the action's object:
	
	  WRK stands for WoRK, SYS stands for SYStem
	  VAL stands for VALues
	
	  WRKSYSSTS is composed of three blocks:
	
	     WRK for WoRK
	     SYS for SYStem
	     STS for STatuS
	
	The blocks are relatively consistent from command to command. Generally, the same
	action block will be used with a variety of objects that can be affected by its
	purpose. For example:
	
	  WRKSYSVAL    (WoRK with SYStem VALues)
	  WRKSPLF      (WoRK SPooLed Files)
	  WRKOBJ      (WoRK with OBJects)
	  WRKCFGSTS   (WoRK ConFiGuration STatuS)
	
	The object part is also relatively consistent between actions. A single object
	block may be used with different actions. Example:
	
	  CRTDEVD      (CReaTe DEVice Description)
	  DLTDEVD      (DeLeTe DEVice Description)
	  WRKDEVD      (WoRK DEVice Description)
	
	Apart from the CL (Command Language) Reference Guides, the better sources of
	OS/400 command documentation are contained within OS/400 itself. It should be
	noted that the OS/400 Help Facility is an optional component, and some AS/400's
	may not have it installed.
	
	<F4> in any command line for a user with sufficient privileges brings up
	the major command groups. The major command groups is a menu based help facility
	that catalogues commands in intuitive groups based on object function.
	
	The SLTCMD command (SeLecT CoMmanD) allows the user to create a list of commands
	that adhere to a specific pattern or group. For example:
	
	&&&{
	MAIN                           AS/400 Main Menu
	                                                           System: RAINIER
	Select one of the following:
	
	     1. User tasks
	     2. Office tasks
	
	     4. Files, libraries, and folders
	
	     6. Communications
	
	     8. Problem handling
	     9. Display a menu
	    10. Information Assistant options
	    11. PC Support tasks
	
	    90. Sign off
	
	Selection or command
	===> SLTCMD CMD(WRKD*)
	
	F3=Exit   F4=Prompt   F9=Retrieve   F12=Cancel   F13=Information Assistant
	F23=Set initial menu
	
	}&&&
	
	Will give the user the display shown below:
	
	&&&{
	                                Select Command
	
	Type options, press Enter.
	  1=Select
	
	Opt  Command     Library     Text
	     WRKDBFIDD   QSYS        Work with DB Files using IDDU
	     WRKDDMF     QSYS        Work with DDM Files
	     WRKDEVD     QSYS        Work with Device Descriptions
	     WRKDIR      QSYS        Work with Directory
	     WRKDIRLOC   QSYS        Work with Directory Locations
	     WRKDIRSHD   QSYS        Work with Dir Shadow Systems
	     WRKDOC      QSYS        Work with Documents
	     WRKDOCCVN   QSYS        Work with Document Conversions
	     WRKDOCLIB   QSYS        Work with Document Libraries
	     WRKDOCPRTQ  QSYS        Work with Document Print Queue
	     WRKDOCSET   QSYS        Work with Document Sets
	     WRKDOCTYP   QSYS        Work with Document Types
	
	 More...
	Parameters or command
	===>
	F3=Exit      F4=Prompt   F5=Refresh   F9=Retrieve   F11=Display names only
	F12=Cancel   F16=Repeat position to   F17=Position to
	
	}&&&
	
	The user can then select the desired command from the list. Note that the
	wildcard will only work at the end of a string.
	
	If the user types in a command on a command line, and the presses the F4 key, all
	default parameters for that particular command will be shown, some with default
	values. AS/400 has field level help. If the user has any questions on the
	definition or use of a particular parameter, the user should position the cursor
	over the desired field or item, and press F1. A window with the AS/400 help
	facility will be displayed.
	
	NOTE: The AS/400 help facility is not a required item to install. Although many
	users install it as part of their operating system, some users do not in order
	to save DASD (disk array) space. Note also that the help facility is sensitive
	to security requirements. If the user does not have enough privileges to use a
	command, he will not have privileges to use help against it either.
	
	COMMANDS
	--------
	
	WORKING WITH LINES
	
	The following are some objects blocks used for referring to lines:
	
	  DLT (DeLeTe), DSP (DiSPlay), WRK (WoRK):
	
	     - LIND       (LINe Description)
	
	  CHG (CHanGe), CRT (CReaTe):
	
	     - LINETH    (LINe ETHernet)
	     - LINSDLC   (LINe SDLC)
	     - LINTDLC   (LINe TDLC [Twinax])
	     - LINTRN   (LINe Token RiNg)
	     - LINX25   (LINe X.25)
	
	Generally the simplest way to verify the configuration for a line is by using:
	
	  WRKLIND {line description name}
	
	To get a listing of all the lines on an AS/400:
	
	  WRKLIND *ALL
	
	This command displays a list of all the lines that are configured in the system,
	and that the current user has sufficient privileges to view. The user interface
	in the Work with Line Descriptions facility allows the user to scroll through
	the list using the PageUp/PageDown keys, and has a single character field in
	front of each line name to allow the management of each line under the Opt
	heading:
	
	&&&{
	                         Work with Line Descriptions
	                                                           System:RAINIER
	Position to  . . . . .                Starting characters
	
	Type options, press Enter.
	  2=Change   3=Copy    4=Delete   5=Display   6=Print   7=Rename
	  8=Work with status   9=Retrieve source
	
	Opt   Line         Type     Text
	 _    ANDERSEN     *SDLC    sdlc dial-out for AC; Pass thru source.
	 _    CHICAGO      *SDLC    'sdlc dial-in  for AC;
	 _    ETHLINE      *ELAN    ETHERNET LINE
	 _    ETHLINE2     *ELAN    ETHERNET LINE
	 _    HNETHOST     *SDLC    Help/NET Product Support
	 _    LANLINE      *TRLAN   TOKEN RING LINE
	 _    L02124BSC    *BSC     EDI/400 BSC manual dial line at 02400 baud.
	 _    MPGLIN       *SDLC    MPG - Midrange Performance Group line LIN011
	 _    QESLINE      *SDLC    IBM DIAL OUT LINE - LIN021
	
	 More...
	Parameters or command
	===>
	F3=Exit   F4=Prompt   F5=Refresh   F6=Create   F9=Retrieve   F12=Cancel
	F14=Work with status
	}&&&
	
	The user interface for this command allows the user to do all the functions that
	any of the other commands allow. The codes on the top of the screen are the
	allowed codes for the option field. To display the parameters for line
	description ETHLINE2, type a 5 in the Opt field to its left.
	
	WORKING WITH CONTROLLERS AND DEVICES
	
	Apart from the fact that the actual configuration parameters are distinct because
	the objects being dealt with are different, the device and controller commands
	are very similar to the line commands. The more important commands for working
	with devices and controllers are built with these blocks:
	
	  DLT (DeLeTe), DSP (DiSPlay), WRK (WoRK):
	
	     - DEVD       (DEVice Description)
	     - CTLD         (ConTroLler Description)
	
	  CHG (CHanGe), CRT (CReaTe):
	
	     - DEVAPPC      (DEVice APPC)
	     - CTLAPPC      (ConTroLer APPC)
	
	The user interface is very similar to the user interface for WRKLIND.
	
	WORKING WITH HARDWARE RESOURCES
	
	Line descriptions are configuration parameters for a type of connection over a
	specific hardware resource (hence the resource name parameter in the line
	description). The following command displays, and offer a user interface for
	handling communication hardware components of an AS/400:
	
	  WRKHDWRSC *CMN
	  [WoRK with HarDWare ReSourCes - *CoMmuNications]
	
	If the line being troubleshot is a Twinax line, use the following command to look
	at Local WorkStations:
	
	  WRKHDWRSC *LWS
	  [WoRK with HarDWare ReSourCes - *Local WorkStations]
	
	The interface is similar to the interface offered by WRKLIND. This command may be
	necessary to use if unable to configure correctly a line on the AS/400.
	
	WORKING WITH CONFIGURATION STATUS
	
	Line descriptions are not useful until they have been activated for use. This
	activation process is known as Vary On. The opposite of this function takes a
	line off-line, Vary Off. The importance of having the lines varied on when
	attempting to communicate with and AS/400 cannot be over-stressed. A varied off
	line is not accessible, even if it is configured correctly.
	
	The more useful commands when either querying the status of a line, controller,
	or device, or attempting to vary it on or off are the following:
	
	  VRYCFG CFGOBJ({description}) CFGTYPE(*LIN|*DEV|*CTL)  STATUS(*ON|*OFF)
	  [VaRY ConFiGuration]
	
	  WRKCFGSTS CFGTYPE(*LIN) CFGD({description[optional]})
	  [WoRK with ConFiGuration STatuS]
	
	VRYCFG simply changes the status of the line and has no user interface, while
	WRKCFGSTS will provide a user interface through which the user can monitor the
	status and make changes as appropriate.
	
	DISPLAYING AND CHANGING NETWORK ATTRIBUTES
	
	Network attributes on the AS/400 are the equivalent of the Server Properties on
	the SNA Server Admin. It displays general networking information on the AS/400
	such as: Network Name, Local (to the AS/400) Control Point Name, APPN node type.
	Access the network attributes using the following commands:
	
	  DSPNETA
	  [DiSPlay NETwork Attributes]
	
	  CHGNETA
	  [CHanGe NETwork Attributes]
	
	OTHER AS/400 COMMANDS
	
	These commands may prove to be useful in some situations:
	
	  DSPMSG <message queue>
	  [DiSPlay MeSsaGe]
	  View messages sent to a particular queue. If no message queue is
	  specified, the command brings up the current user's message queue. The
	  message queue used by default for system generated error, warning,
	  and informational messages, is the queue for QSYSOPR:
	
	     DSPMSG QSYSOPR
	
	  allows the user to view any messages for any event requiring attention.
	  Messages needing a reply can be identified by a blank line under the
	  message. Set the cursor over a message using the arrow keys, and press
	  the F1 key to get more information about that message. The help
	  information displayed may include suggested troubleshooting steps.
	
	  WRKSPLF
	  [WoRK with SPooLed Files]
	  View, change properties, and delete spooled files in queue for a print
	  device (or to be sent to a print device). Generally, when a device fails
	  while in session, an entry is created with details of all the errors
	  that occurred while that device was in session. Useful for
	  troubleshooting specific station problems.
	
	  WRKACTJOB
	  [WoRK with ACTive JOBs]
	  Displays and allows system operators to manage jobs that are currently
	  active in the system. Displays useful information such as the job's
	  creator, time and date of creation, job attributes and parameters, CPU
	  load, CPU share of a job.
	
	  WRKSYSVAL *ALL
	  [WoRK with SYStem VALues - *ALL]
	  Displays a full list of all system values in the AS/400. Includes items
	  such as QAUTOCFG (switch for auto-configuration) and QAUTOVRT (virtual
	  devices to create).
	
	  WRKMODD
	  [WoRK with MODe Description]
	  Provides user interface for managing all modes defined in the system.
	  The user interface is similar to the user interface used for changing
	  line and device descriptions.
	
	  WRKFLR
	  [WoRK with FoLdeRs]
	  Provides user interface for displaying and managing all shared folders
	  created in the system.
	
	  WRKSBSD
	  [WoRK with SuBSystem Description]
	  Provides user interface for management of the properties of all or some
	  subsystems on the AS/400. Subsystems are processes that are responsible
	  for managing resources for a particular group of jobs, such as 5250
	  display or printer sessions. This command is usually used for
	  troubleshooting whether a particular subsystem can support a particular
	  device type.
	
	NOTE: Security commands are not included in this document. Refer to OS/400 system
	documentation for more details.
	
	REFERENCES
	==========
	
	IBM SX41-0028-01 AS400 Online Help Facility
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : :2.0,2.1,2.11,3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
