---
layout: page
title: "Q112159: Configuring SNA Server to Talk to AS/400 Over SDLC"
permalink: /kb/112/Q112159/
---

## Q112159: Configuring SNA Server to Talk to AS/400 Over SDLC

	Article: Q112159
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbtool kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure SNA Server to communicate with an AS/400
	over an Synchronous Data Link Control (SDLC) switched (dial-up) line, to support
	5250 emulation.
	
	NOTE: The end of this article includes sample AS/400 configuration screens.
	
	MORE INFORMATION
	================
	
	These instructions assume all of the following:
	
	- The SNA Server SDLC link service has been installed using the SNA Server
	  setup program (and any interrupt conflicts have been resolved, per the SNA
	  Server Readme.txt file).
	
	- The system has been restarted.
	
	- AS/400 APPC controller and device description has been configured off the
	  AS/400 SDLC line to be used (see below for sample AS/400 APPC controller and
	  device descriptions).
	
	Configure the following entries using the SNA Server Admin program:
	
	1. Zoom on the SNA Server service (which appears as the Windows NT computer
	  name), located in the Servers and Connections window of Admin. Enter the
	  following parameters:
	
	  SNA Network Control Point Name
	
	     Network Name = APPN (or Remote Network ID, RMTNETID value on the
	                    AS/400).
	    Control Point Name = This is the remote control point name
	                         (RMTCPNAME) value in the AS/400 APPC controller
	                         definition. For simplicity, this should be set to
	                         the local Windows NT computer name.
	
	  Choose OK.
	
	2. Add a new Local APPC LU off the server service by clicking Insert and
	  entering the following parameters:
	
	     LU 6.2 Type  = Independent
	     LU Alias     = For simplicity, this should be the same as the
	                    Local LU Name below.
	     Network Name = APPN (or Remote Network ID, RMTNETID value on the
	                    AS/400).
	     LU Name      = This is the remote control point name in the AS/400
	                    APPC controller description (RMTCPNAME).
	
	     All other entries can remain at default values.
	
	  NOTE: It is most efficient for all SNA Server users to use the same Local APPC
	  LU. However, it is possible to create a unique LU for each user if desired,
	  where the LU alias and LU name above could be replaced with the actual user
	  name (though this requires additional administration to maintain).
	
	3. Select OK.
	
	1. Configure the SNA Server SDLC connection by zooming on the connection name:
	
	     Link Service = SnaSdlc1 (or name specified during SNA setup)
	     Remote End   = Peer System
	     Activation   = If set to "On Demand" (default), then the Switched
	                    disconnect (SWTDSC) value on the AS/400 controller
	                    definition should be set to YES. This causes the
	                    underlying link to drop when there are no active
	                    sessions. Otherwise, if SWTDSC is set to NO, then SNA
	                    Server should be set to activate On Server Startup.
	
	     Allowed Directions = Outgoing calls.
	
	     Zoom on the Setup button:
	
	     Dial data = Recommend to leave blank, and configure for modem-stored
	                 number dialing (assuming this is a dial-up link).
	     Local Node ID =  EXCHID value on the AS/400 controller description
	     Remote Node Name:
	     Network Name = APPN (or Remote Network ID, RMTNETID value on the
	                    AS/400).
	     Control Point Name = AS/400 local control point name, configured in
	                          the AS/400 Display Network Attributes screen.
	     Remote Node ID = Not used (leave blank)
	
	     Zoom on Advanced options:
	
	     XID Type = Format 3
	     Encoding = (NRZ or NRZI). Must match the NRZI data encoding scheme
	                (NRZI) configured on the AS/400 line description.
	     Duplex = Must match the DUPLEX setting configured in the AS/400
	              line description.
	     Poll Address = Must match the Station address (STNADR) setting on
	                    the AS/400 controller definition
	
	     The remaining options can be left at the default
	
	     Choose OK.
	
	2. Add a new Remote APPC LU off the connection by choosing the Insert button and
	  entering the following parameters:
	
	     LU Alias     = For simplicity, this should be the same as the
	                    Remote APPC LU Name below.
	     Network Name = APPN (or remote network id RMTNETID value on the
	                    AS/400)
	
	     LU Name      = Must be set to the AS/400 local control point name
	                   (set in the AS/400 Display Network Attributes screen).
	     Uninterpreted LU Name = Not used (leave at default).
	
	     Select Supports Parallel Sessions (required).
	
	     Zoom on the Partners button. The Remote APPC LU must be partnered
	     with the Local APPC LU created above, using the QPCSUPP mode. Because
	     Enable Automatic Partnering is enabled by default for APPC LUs, this
	     pairing will already be added.
	
	  Choose OK.
	
	3. Save the SNA Server configuration file and restart the SNA Server service.
	  Once the SNA Server service is Active, all connections configured to activate
	  on server startup will go into a Pending state, then switch to Active. NOTE:
	  If the connection stays in Pending mode and doesn't activate:
	  a. Check the Windows NT application event log (using Event Viewer) to see the
	     reason why the connection isn't activating. If the SDLC link service isn't
	     activating, check the system event log for any entries logged by the
	     IBMSYNC driver (indicating possible hardware conflicts), or the Service
	     Control Manager (indicating why the link service was unable to start).
	
	  b. Double check the configuration entries above with your AS/400 system
	     administrator and make sure the AS/400 line is active. If all appears
	     okay, check the SNA Server controller description on the AS/400.
	
	  c. Check if the AS/400 is logging any errors when SNA Server attempts to
	     establish the connection.
	
	  d. If the connection activates but users are unable to open 5250 sessions,
	     zoom on the Status button on the Local APPC LU, which should show the
	     following (when working correctly):
	
	    Partner LU      Mode      Connection     Sessions        Limit
	
	    <remote LU>     SNASVCMG  <connection>    0               2
	    <remote LU>     QPCSUPP   <connection>    0               64
	
	    This means that up to 64 sessions are available for use, though
	    no sessions are currently active.
	
	At this point, a 5250 user can then open any valid APPC LU/LU pair supported by
	any SNA Server in the domain. However, to simplify 5250 user access through SNA
	Server, there are various options available to an SNA Server administrator and
	the 5250 user, including the following:
	
	- Default AS/400 session for a user: On the SNA Server user/group record, the
	  administrator can define default local and remote APPC LUs. If defaults are
	  configured, and the 5250 applet is used, this is the LU/LU pair the 5250 user
	  opens when the 5250 applet local and partner APPC LU names are left blank.
	
	- If default APPC LUs are not preassigned to a user/group, here is how to
	  configure pools of Local APPC LUs and Remote (partner) APPC LUs to simplify
	  5250 user access to one or more AS/400's supported by SNA Server:
	
	  Local APPC LU pool: Define the Local APPC LU as a "Member of Default Outgoing
	  Local APPC LU Pool". If a 5250 user does not enter a Local APPC LU when
	  opening a session, the user accesses one of the available Local LUs in this
	  pool.
	
	  Remote APPC LU pool: The Remote APPC LU pool is determined by the Remote LUs
	  which are partnered with the Local APPC LU and the QPCSUPP mode. So if a
	  Local APPC LU is specified, but the Remote APPC LU is left blank, a 5250
	  session is allocated from an available Remote APPC LU that it is partnered
	  with.
	
	SAMPLE CONFIGURATION SETTINGS
	-----------------------------
	
	The following AS/400 configuration screens are shown below, along with their
	corresponding configuration setting for SNA Server (see comments which are
	preceded with "****" below). This includes the AS/400 network attributes screen,
	SDLC (switched) line description, APPC controller, and virtual device
	description. Many of the configuration settings are not relevant for
	communications to function, though are shown here for completeness.
	
	AS/400: Display Network Attributes
	
	                            System:   OLYMPIA
	Current system name  . . . . . . . . . . . . . . :   OLYMPIA
	  Pending system name  . . . . . . . . . . . . . :
	Local network ID . . . . . . . . . . . . . . . . :   APPN
	
	**** Must match the remote network name on the SNA Server connection.
	
	Local control point name . . . . . . . . . . . . :   OLYMPIA
	
	**** Must match the remote control point name on the SNA Server connection.
	
	Default local location . . . . . . . . . . . . . :   OLYMPIA
	Default mode . . . . . . . . . . . . . . . . . . :   BLANK
	APPN node type . . . . . . . . . . . . . . . . . :   *ENDNODE
	Maximum number of intermediate sessions  . . . . :   200
	Route addition resistance  . . . . . . . . . . . :   128
	Server network ID/control point name . . . . . . :   APPN        REDHOOK
	Alert status . . . . . . . . . . . . . . . . . . :   *OFF
	Alert logging status . . . . . . . . . . . . . . :   *NONE
	Alert primary focal point  . . . . . . . . . . . :   *NO
	Alert default focal point  . . . . . . . . . . . :   *NO
	Alert backup focal point . . . . . . . . . . . . :
	  Network ID . . . . . . . . . . . . . . . . . . :     *NONE
	Alert focal point to request . . . . . . . . . . :
	  Network ID . . . . . . . . . . . . . . . . . . :     *NONE
	Alert controller description . . . . . . . . . . :   *NONE
	Alert hold count . . . . . . . . . . . . . . . . :   0
	Alert filter . . . . . . . . . . . . . . . . . . :   *NONE
	  Library  . . . . . . . . . . . . . . . . . . . :
	Message queue  . . . . . . . . . . . . . . . . . :   QSYSOPR
	  Library  . . . . . . . . . . . . . . . . . . . :     QSYS
	Output queue . . . . . . . . . . . . . . . . . . :   QPRINT
	  Library  . . . . . . . . . . . . . . . . . . . :     QGPL
	Job action . . . . . . . . . . . . . . . . . . . :   *FILE
	Maximum hop count  . . . . . . . . . . . . . . . :   16
	DDM request access . . . . . . . . . . . . . . . :   *OBJAUT
	PC Support request access  . . . . . . . . . . . :   *OBJAUT
	Default ISDN network type  . . . . . . . . . . . :
	Default ISDN connection list . . . . . . . . . . :   QDCCNNLANY
	
	AS/400: Change Line Desc (SDLC) (CHGLINSDLC)
	
	Line description . . . . . . . . LIND         > NEWLINE
	Resource names . . . . . . . . . RSRCNAME     > LIN011
	                 + for more values
	Online at IPL  . . . . . . . . . ONLINE       > *NO
	Data link role . . . . . . . . . ROLE         > *NEG
	Physical interface . . . . . . . INTERFACE    > *RS232V24
	Connection type  . . . . . . . . CNN          > *SWTPP
	Vary on wait . . . . . . . . . . VRYWAIT      > *NOWAIT
	Autocall unit  . . . . . . . . . AUTOCALL     > *NO
	Exchange identifier  . . . . . . EXCHID       > 05600001
	
	NRZI data encoding . . . . . . . NRZI         > *YES
	
	**** Must match the encoding setting configured in the SNA Server
	connection (located under the Advanced settings).
	
	Maximum controllers  . . . . . . MAXCTL       > 1
	Clocking . . . . . . . . . . . . CLOCK        > *MODEM
	Line speed . . . . . . . . . . . LINESPEED    > 9600
	Modem type supported . . . . . . MODEM        > *NORMAL
	Switched connection type . . . . SWTCNN       > *BOTH
	Autoanswer . . . . . . . . . . . AUTOANS      > *YES
	
	**** With Autoanswer=YES, the AS/400 is answering the phone, so the SNA
	Server connection should be set to "Allowed directions = Outgoing." Also,
	SNA Server should be configured as "Remote end = Peer."
	
	Autodial . . . . . . . . . . . . AUTODIAL     > *NO
	Calling number . . . . . . . . . CALLNBR      > *NONE
	Station address  . . . . . . . . STNADR       > C1
	Connect poll retry . . . . . . . CNNPOLLRTY   > 10
	Maximum frame size . . . . . . . MAXFRAME     > 521
	Duplex . . . . . . . . . . . . . DUPLEX       > *HALF
	
	**** Matches the SNA Server SDLC connection duplex setting (located under
	the advanced settings).
	
	Inactivity timer . . . . . . . . INACTTMR     > 300
	Poll response delay  . . . . . . POLLRSPDLY   > 0
	Nonproductive receive timer  . . NPRDRCVTMR   > 320
	Idle timer . . . . . . . . . . . IDLTMR       > 30
	Connect poll timer . . . . . . . CNNPOLLTMR   > 30
	Poll cycle pause . . . . . . . . POLLPAUSE    > 0
	Frame retry  . . . . . . . . . . FRAMERTY     > 7
	Data Set Ready drop timer  . . . DSRDRPTMR    > 20
	
	**** During our testing, the AS/400 default was too short. This may have to
	be set to 20 or more, depending on the modem used.
	
	Autoanswer type  . . . . . . . . AUTOANSTYP   > *DTR
	Remote answer timer  . . . . . . RMTANSTMR    > 60
	Text 'description' . . . . . . . TEXT         > 'SHOW DEMO LINE -
	DIAL IN LINE'
	
	                  Additional Parameters
	
	Modem data rate select . . . . . MODEMRATE    > *FULL
	Error threshold level  . . . . . THRESHOLD    > *OFF
	Modulus  . . . . . . . . . . . . MODULUS      > 8
	Maximum outstanding frames . . . MAXOUT       > 7
	Clear To Send timer  . . . . . . CTSTMR       > 25
	Link speed . . . . . . . . . . . LINKSPEED    > 9600
	Cost/connect time  . . . . . . . COSTCNN      > 128
	Cost/byte  . . . . . . . . . . . COSTBYTE     > 128
	Security for line  . . . . . . . SECURITY     > *NONSECURE
	Propagation delay  . . . . . . . PRPDLY       > *TELEPHONE
	User-defined 1 . . . . . . . . . USRDFN1      > 128
	User-defined 2 . . . . . . . . . USRDFN2      > 128
	User-defined 3 . . . . . . . . . USRDFN3      > 128
	Recovery limits:                 CMNRCYLMT
	  Count limit  . . . . . . . . .              > 2
	  Time interval  . . . . . . . .              > 5
	
	AS/400: Change Ctl Desc (APPC) (CHGCTLAPPC)
	
	Controller description . . . . . CTLD         > TRUTH
	Online at IPL  . . . . . . . . . ONLINE         *NO
	APPN-capable . . . . . . . . . . APPN           *YES
	Switched line list . . . . . . . SWTLINLST      SHOW
	                 + for more values
	Character code . . . . . . . . . CODE           *EBCDIC
	Maximum frame size . . . . . . . MAXFRAME       521
	
	**** Inherited from the SDLC line definition. For best performance, this
	setting should match the Max BTU Length setting on the SNA Server SDLC
	connection (located under the Advanced settings).
	
	Remote network identifier  . . . RMTNETID       APPN
	
	**** Must match the network name configured on SNA Server (set using Admin
	when zooming on the server name), as well as the network name configured on
	the Local APPC LU.
	
	Remote control point . . . . . . RMTCPNAME      TRUTH
	
	**** Must match the local control point name configured on SNA Server (set
	using Admin when zooming on the server name), as well as the LU name of the
	Local APPC LU.
	
	Exchange Identifier . . . . . . EXCHID  00000000-FFFFFFFF
	
	**** Must match the Local Node ID on the SNA Server.
	
	SSCP identifier  . . . . . . . . SSCPID         *SAME
	Initial connection . . . . . . . INLCNN         *ANS
	Dial initiation  . . . . . . . . DIALINIT       *SAME
	Connection number  . . . . . . . CNNNBR         *SAME
	
	Predial delay  . . . . . . . . . PREDIALDLY     6
	Redial delay . . . . . . . . . . REDIALDLY      120
	Dial retry . . . . . . . . . . . DIALRTY        2
	Switched disconnect  . . . . . . SWTDSC         *YES
	
	**** If this is YES, then the AS/400 will drop the link when there are no
	active APPC sessions, so the SNA Server connection should be configured to
	activate On Demand. Otherwise, if SWTDSC is set to NO, the SNA Server
	connection should be configured to activate On Server Startup.
	
	  Disconnect timer:              DSCTMR
	  Minimum connect timer  . . . .                600
	
	**** AS/400 default is 170 sec. AS/400 drops the connection after this time-out when there are no active APPC sessions.
	
	Disconnection delay timer  . .                  0
	Station address  . . . . . . . . STNADR         C1
	
	**** Inherited from the line description. Must match the poll address
	configured in the SNA Server connection (located in the Advanced dialog).
	
	SDLC poll priority . . . . . . . POLLPTY        *NO
	SDLC poll limit  . . . . . . . . POLLLMT        0
	SDLC out limit . . . . . . . . . OUTLMT         *POLLLMT
	SDLC connect poll retry  . . . . CNNPOLLRTY     7
	SDLC NDM poll timer  . . . . . . NDMPOLLTMR     *CALC
	APPN CP session support  . . . . CPSSN          *YES
	APPN node type . . . . . . . . . NODETYPE       *ENDNODE
	APPN transmission group number   TMSGRPNBR      1
	APPN minimum switched status . . MINSWTSTS      *VRYONPND
	Autodelete device  . . . . . . . AUTODLTDEV     1440
	User-defined 1 . . . . . . . . . USRDFN1        *LIND
	User-defined 2 . . . . . . . . . USRDFN2        *LIND
	User-defined 3 . . . . . . . . . USRDFN3        *LIND
	Recovery limits:                 CMNRCYLMT
	  Count limit  . . . . . . . . .                2
	  Time interval  . . . . . . . .                5
	Text 'description' . . . . . . . TEXT           'Show controller for Demo
	                                                dial-in.'
	
	AS/400: Change Device Desc (APPC) (CHGDEVAPPC)
	
	Device description . . . . . . . DEVD         > TRUTH03
	
	**** This device name corresponds with the SNA Server Local APPC LU name
	(in this case, TRUTH), plus a two-digit device number, generated by the
	AS/400 (but not configured in SNA Server).
	
	Online at IPL  . . . . . . . . . ONLINE         *NO
	Mode . . . . . . . . . . . . . . MODE           *NETATR
	                 + for more values
	Message queue  . . . . . . . . . MSGQ           QSYSOPR
	  Library  . . . . . . . . . . .                  *LIBL
	Local location address . . . . . LOCADR         00
	Single session:                  SNGSSN
	  Single session capable . . . .                *NO
	  Number of conversations  . . .
	Locally controlled session . . . LCLCTLSSN      *SAME
	Pre-established session  . . . . PREESTSSN      *SAME
	Text 'description' . . . . . . . TEXT           'AUTOMATICALLY CREATED
	                                                BY QLUS'
	Mode description . . . . . . . . MODD         > QPCSUPP
	
	**** This should not be changed; this is the default mode name for IBM PC
	Support clients (and SNA Server).
	
	Class-of-service . . . . . . . . COS            #CONNECT
	Maximum sessions . . . . . . . . MAXSSN         64
	
	**** This is the number of sessions supported by the QPCSUPP mode, and
	should match the SNA Server session limit configured on the QPCSUPP mode
	entry, configured using the SNA Server setup program (zoom on Local or
	Remote LU, zoom on Partners button, then select the Modes button).
	
	Maximum conversations  . . . . . MAXCNV         64
	
	**** This should match the MAXSSN setting above.
	
	Locally controlled sessions  . . LCLCTLSSN      16
	Pre-established sessions . . . . PREESTSSN      0
	Inbound pacing value . . . . . . INPACING       7
	Outbound pacing value  . . . . . OUTPACING      7
	Maximum length of request unit   MAXLENRU       *CALC
	Text 'description' . . . . . . . TEXT           'created by <name>'
	
	Additional query words: prodsna snafaq
	
	======================================================================
	Keywords          : kbtool kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
