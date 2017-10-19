---
layout: page
title: "Q235406: SNA Server Support for External Attach Managers"
permalink: /kb/235/Q235406/
---

## Q235406: SNA Server Support for External Attach Managers

	Article: Q235406
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0SP3
	Operating System(s): 
	Keyword(s): kbsna400sp3fea kbFEA kbsna400sp3
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0SP3 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Starting with SNA Server 4.0 Service Pack 3, SNA Server supports the new APPC
	RECEIVE_ALLOCATE_EX and RECEIVE_ALLOCATE_EX_END functions, to simplify the
	design and implementation of some invokable transaction programs. This function
	allows an APPC application to receive all incoming FMH-5 Attach requests
	received by SNA Server over a specific Local APPC LU, allowing an application to
	act as an "attach manager." An attach manager is a program that handles an
	incoming FMH-5 Attach request to start an LU6.2 conversation. When an APPC
	application calls RECEIVE_ALLOCATE (as opposed to RECEIVE_ALLOCATE_EX), the SNA
	Server handles the attach manager functionality. To implement the attach manager
	functionality within an APPC application:
	
	- The application supplies a Local APPC LU alias to the RECEIVE_ALLOCATE_EX
	  function, with a tp_name of EBCDIC spaces (hexadecimal X'40').
	
	- When SNA Server receives an incoming FMH-5 Attach request over an LU6.2
	  session using that Local APPC LU, SNA Server will route the request to the
	  application.
	
	- When the RECEIVE_ALLOCATE_EX completes, the application is responsible for
	  (1) accepting or rejecting the FMH-5 Attach, (2) verifying any conversation
	  level security, and (3) if accepting the attach request, completely handling
	  the request within its Win32 process context.
	
	- To stop listening for new incoming attach requests, the application calls
	  RECEIVE_ALLOCATE_EX_END.
	
	- After a process issues RECEIVE_ALLOCATE_EX, the process should not call
	  RECEIVE_ALLOCATE with a specific TP name. Likewise, if a process calls
	  RECEIVE_ALLOCATE, that process should not later call RECEIVE_ALLOCATE_EX. In
	  other words, for the duration of a process supporting an invokable TP, the
	  process should exclusively call RECEIVE_ALLOCATE, or RECEIVE_ALLOCATE_EX, but
	  not both.
	
	It is not possible for the application to dispatch the incoming attach request to
	another process, as the conversation ID is only valid within its own application
	context.
	
	See the end of the "More Information" section for detailed information on using
	the RECEIVE_ALLOCATE_EX and RECEIVE_ALLOCATE_EX_END functions, referred to as
	the "Attach Manager" feature.
	
	NOTE: SNA Server does not support auto starting an attach manager application. In
	other words, if an application calls RECEIVE_ALLOCATE_EX, the application must
	be started before any incoming Attach requests arrive over the Local LU.
	
	MORE INFORMATION
	================
	
	This feature is available in the latest service pack for SNA Server version 4.0.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	Here are the functional enhancements implemented in SNA Server 4.0 SP3 to support
	external attach managers on top of SNA Server:
	
	RECEIVE_ALLOCATE_EX 
	-------------------
	
	This verb accepts a new VCB structure to allow registration of an attach
	manager.
	
	  typedef struct receive_allocate_ex
	  {
	    unsigned short   opcode;
	  #define AP_RECEIVE_ALLOCATE_EX    APPC_FLIPI(0xF103)   /* X'F103'  */ 
	    unsigned char    opext;
	    unsigned char    format;
	    unsigned short   primary_rc;
	    unsigned long    secondary_rc;
	    unsigned char    tp_name[64];
	    unsigned char    tp_id[8];
	    unsigned long    conv_id;
	    unsigned char    sync_level;
	    unsigned char    conv_type;
	    unsigned char    user_id[10];
	    unsigned char    lu_alias[8];
	    unsigned char    plu_alias[8];
	    unsigned char    mode_name[8];
	    unsigned char    reserv3[2];
	    unsigned long    conv_group_id;
	    unsigned char    fqplu_name[17];
	    unsigned char    pip_incoming;
	    unsigned long    timeout;
	    unsigned char    password[10];
	    unsigned char    reserv5[2];
	    unsigned char    attach_id[8];
	  } RECEIVE_ALLOCATE_EX ;
	
	Supplied Parameters:
	
	pip_incoming : If this attach manager will accept incoming FMH-5 Attaches which
	include PIP data, then set this to AP_YES. Otherwise, set this to AP_NO.
	
	opcode : RECEIVE_ALLOCATE_EX
	
	tp_name : The tp_name is a returned parameter only. However, the application must
	allocate sufficient buffer space to hold the tp_name (that is, 64 characters)
	and initialize the name to EBCDIC spaces (hexadecimal X'40').
	
	lu_alias : Local LU alias. Must be supplied to register an attach manager. Only
	one attach manager may be registered for a given Local LU alias within the SNA
	Server subdomain. If another attach manager process is already registered for
	this lu_alias, the following error will be returned:
	
	  primary_rc = AP_STATE_CHECK (0x0002) secondary_rc = AP_LU_ALREADY_REGISTERED
	  (0x0000050A)
	
	This indicates that SNA Server was unable to register this attach manager.
	
	timeout : Timeout, in seconds. A value of 0xFFFFFFFF can be used to wait
	forever.
	
	Returned Parameters:
	
	- primary_rc
	- secondary_rc
	- tp_name[64]: The returned verb will contain the actual TP name sent by the
	  remote system.
	- tp_id[8]
	- conv_id
	- sync_level
	- conv_type
	- user_id[10]: This is the EBCDIC user_id sent by the remote system.
	- lu_alias[8]
	- plu_alias[8]
	- mode_name[8]
	- conv_group_id
	- fqplu_name[17]
	- pip_incoming: If PIP data is present in the incoming Attach, this is set to
	  AP_YES. If no PIP data is present, this will be set to AP_NO.
	- password[10]: This is the EBCDIC password sent by the remote system. If the
	  remote system supports "Password substitution" (password encryption), the
	  encrypted password will be received in RECEIVE_ALLOCATE_EX. There is no
	  facility to decrypt this password, so the application will not be able to
	  verify the user credentials.
	- attach_id[8]: Always set to 0. This field is defined for source compatibility
	  with non-Microsoft SNA products.
	
	See the RECEIVE_ALLOCATE documentation for information about the remaining
	fields.
	
	Security Information:
	
	The current specification does not return the Security Indicator (Byte 4 of the
	FMH-5 Attach). So, the application will need to accommodate incoming attach
	requests that contain (1) neither a user_id or password (when no security is
	sent in the attach), (2) a user_id only (such as for "already verified"
	attaches), or (3) both a user_id and password (if user authorization is
	required). In the LU6.2 BIND request, SNA Server indicates support for incoming
	FMH-5 Attach requests that contain user security, already verified, and password
	substitution. SNA Server does not support incoming attaches which request
	persistent verification.
	
	Remarks:
	
	The RECEIVE_ALLOCATE_EX function allows an application to register as an attach
	manager if the tp_name is set to all EBCDIC spaces (X'40') and a Local LU alias
	is supplied in the lu_alias field. When registered as an attach manager for a
	given lu_alias, SNA Server will route all incoming attaches received over the
	lu_alias to the application. See below for more information on how SNA Server
	routes incoming FMH-5 attach requests.
	
	The application may call RECEIVE_ALLOCATE_EX more than once to register as the
	attach manager for one or more Local LU. However, only one attach manager may be
	registered on a given lu_alias within the SNA subdomain (that is, across all SNA
	Servers and attached SNA Server clients). The application cannot supply a blank
	tp_name and blank lu_alias. In other words, an application cannot register as
	the default attach manager to receive all incoming attach requests for an SNA
	subdomain.
	
	When RECEIVE_ALLOCATE_EX completes, the application is responsible for the
	following:
	
	- Deciding whether the attach will be accepted or not. SNA Server provides no
	  mechanism for configuring transaction programs (TPs). The application must
	  have its own means of defining which tp names it will support.
	
	- If accepted, the application must verify conversation security attributes
	  (user_id, password) and for handling the processing of the new conversation.
	
	- The tp_id and conv_id cannot be passed to a separate process for handling.
	  All TP processing must be provided by the application.
	
	If the application chooses to reject the attach request, [MC_]DEALLOCATE must be
	called, specifying the conv_id received in the completed RECEIVE_ALLOCATE_EX,
	along with an appropriate reason code in the dealloc_type parameter, using these
	new extended codes:
	
	  #define AP_DEALLOC_SECURITY_NOT_VALID_PASSWORD_EXPIRED                      0x10
	  #define AP_DEALLOC_SECURITY_NOT_VALID_PASSWORD_INVALID                      0x11
	  #define AP_DEALLOC_SECURITY_NOT_VALID_USERID_REVOKED                        0x12
	  #define AP_DEALLOC_SECURITY_NOT_VALID_USERID_INVALID                        0x13
	  #define AP_DEALLOC_SECURITY_NOT_VALID_USERID_MISSING                        0x14
	  #define AP_DEALLOC_SECURITY_NOT_VALID_PASSWORD_MISSING                      0x15
	  #define AP_DEALLOC_SECURITY_NOT_VALID_GROUP_INVALID                         0x16
	  #define AP_DEALLOC_SECURITY_NOT_VALID_USERID_REVOKED_IN_GROUP               0x17
	  #define AP_DEALLOC_SECURITY_NOT_VALID_USERID_NOT_DEFD_TO_GROUP              0x18
	  #define AP_DEALLOC_SECURITY_NOT_VALID_NOT_AUTHORIZED_AT_REMOTE_LU           0x19
	  #define AP_DEALLOC_SECURITY_NOT_VALID_NOT_AUTHORIZED_FROM_LOCAL_LU          0x1A
	  #define AP_DEALLOC_SECURITY_NOT_VALID_NOT_AUTHORIZED_TO_TRANSACTION_PROGRAM 0x1B
	  #define AP_DEALLOC_SECURITY_NOT_VALID_INSTALLATION_EXIT_FAILED              0x1C
	  #define AP_DEALLOC_SECURITY_NOT_VALID_PROCESSING_FAILURE                    0x1D
	  #define AP_DEALLOC_SECURITY_NOT_VALID_PROTOCOL_VIOLATION                    0x1E
	
	When the application sets the above dealloc_type, the SNA Server then sends the
	corresponding sense code within the FMH-7 error sent to the remote system when
	rejecting the FMH-5 Attach request:
	
	  #define AP_SECURITY_NOT_VALID_PASSWORD_EXPIRED                      APPC_FLIPL(x080fff00)
	  #define AP_SECURITY_NOT_VALID_PASSWORD_INVALID                      APPC_FLIPL(x080fff01)
	  #define AP_SECURITY_NOT_VALID_USERID_REVOKED                        APPC_FLIPL(x080fff02)
	  #define AP_SECURITY_NOT_VALID_USERID_INVALID                        APPC_FLIPL(x080fff03)
	  #define AP_SECURITY_NOT_VALID_USERID_MISSING                        APPC_FLIPL(x080fff04)
	  #define AP_SECURITY_NOT_VALID_PASSWORD_MISSING                      APPC_FLIPL(x080fff05)
	  #define AP_SECURITY_NOT_VALID_GROUP_INVALID                         APPC_FLIPL(x080fff06)
	  #define AP_SECURITY_NOT_VALID_USERID_REVOKED_IN_GROUP               APPC_FLIPL(x080fff07)
	  #define AP_SECURITY_NOT_VALID_USERID_NOT_DEFD_TO_GROUP              APPC_FLIPL(x080fff08)
	  #define AP_SECURITY_NOT_VALID_NOT_AUTHORIZED_AT_REMOTE_LU           APPC_FLIPL(x080fff09)
	  #define AP_SECURITY_NOT_VALID_NOT_AUTHORIZED_FROM_LOCAL_LU          APPC_FLIPL(x080fff0A)
	  #define AP_SECURITY_NOT_VALID_NOT_AUTHORIZED_TO_TRANSACTION_PROGRAM APPC_FLIPL(x080fff0B)
	  #define AP_SECURITY_NOT_VALID_INSTALLATION_EXIT_FAILED              APPC_FLIPL(x080fff0C)
	  #define AP_SECURITY_NOT_VALID_PROCESSING_FAILURE                    APPC_FLIPL(x080fff0D)
	  #define AP_SECURITY_NOT_VALID_PROTOCOL_VIOLATION                    APPC_FLIPL(x080fff0E)
	
	Before calling RECEIVE_ALLOCATE_EX, the application may wish to verify the
	configuration settings for the Local APPC LU to determine if the LU supports
	sync level 2, or is a member of the default LU pool. To do this, use the
	enhanced GET_LU_STATUS API documented below.
	
	To deregister as the attach manager for a given Local APPC LU, the application
	must call RECEIVE_ALLOCATE_EX_END, documented below. If an application has
	registered as the attach manager for more than one lu_alias,
	RECEIVE_ALLOCATE_EX_END must be called for each lu_alias.
	
	The application should try to have a RECEIVE_ALLOCATE_EX pending at all times, in
	order to handle incoming attach requests in a timely manner. If the application
	fails to post new RECEIVE_ALLOCATE_EX, SNA Server queues up to 2,048 incoming
	attaches against the application, if the application is running on the SNA
	Server, or 256 if running on an SNA Windows NT client. If the limit is exceeded,
	SNA Server rejects the attach request with sense code X'084B6031', or
	AP_TRANS_PGM_NOT_AVAIL_RETRY.
	
	RECEIVE_ALLOCATE_EX_END
	-----------------------
	
	This new verb allows an application to deregister as the attach manager for a
	given Local APPC LU (lu_alias). This verb must be called for each lu_alias
	previously passed to the RECEIVE_ALLOCATE_EX request.
	
	  typedef struct receive_allocate_ex_end
	  {
	    unsigned short   opcode;
	  #define AP_RECEIVE_ALLOCATE_EX_END    APPC_FLIPI(0xF104)   /* X'F104'  */ 
	    unsigned char    reserv2[2];
	    unsigned short   primary_rc;
	    unsigned long    secondary_rc;
	    unsigned char    tp_name[64];
	    unsigned char    lu_alias[8];
	    unsigned char    reserved3[20]; 
	  } RECEIVE_ALLOCATE_EX_END ;
	
	Supplied Parameters:
	
	lu_alias : Must be supplied and must match the lu_alias provided in a previous
	RECEIVE_ALLOCATE_EX request from the same process.
	
	tp_name : Must be all EBCDIC spaces (X'40')
	
	Returned Parameters:
	
	If the lu_alias has not been previously registered by the application, the
	following error is returned:
	
	  primary_rc = AP_STATE_CHECK (0x0002)
	  secondary_rc = AP_ATTACH_MANAGER_INACTIVE (0x00000508)
	
	Remarks:
	
	If the application is providing sync point support, the application needs to know
	when the LU-LU session limits have dropped to zero. This can be done by polling
	the GET_LU_STATUS API, documented below.
	
	After calling RECEIVE_ALLOCATE_EX_END to deregister an attach manager, the SNA
	Server does not tear down any existing LU6.2 sessions. To do this, the
	application should call the DEACTIVATE_SESSION function, supplying the
	appropriate lu_alias and plu_alias. If Sync Level 2 is being used, deactivating
	the LU6.2 sessions notifies the Remote LU that the syncpoint manager has gone
	away and thus, a new ExchangeLogNames is required for the next connection.
	
	Enhanced GET_LU_STATUS
	----------------------
	
	The new extended version of the GET_LU_STATUS verb now allows for an application
	to retrieve configuration parameters for a Local APPC LU.
	
	  typedef struct get_lu_status
	  {
	  unsigned short opcode;        /* verb operation code */ 
	  unsigned char  opext;         /* verb operation extension */ 
	  unsigned char  reserv2;       /* reserved field */ 
	  unsigned short primary_rc;    /* primary return code */ 
	  unsigned long  secondary_rc;  /* secondary return code */ 
	  unsigned char  tp_id[8];      /* identifier of the local TP */ 
	  unsigned char  plu_alias[8];  /* partner LU alias */ 
	  unsigned short active_sess;   /* number of active sessions */ 
	  unsigned char  zero_sess;     /* AP_NO = session active since last verb */ 
	                                /* AP_YES = sessions zero since last verb */ 
	  unsigned char  local_only;    /* AP_YES = verb only reports status of */  
	                                /* the Local LU and only returns syncpoint */ 
	                                /* and pool_member fields */ 
	                                /* AP_NO = Verb returns all parameters */     
	  unsigned char  syncpoint;     /* AP_YES = Local LU configured for syncpt */  
	                                /* AP_NO = Local LU not configured for syncpt */ 
	  unsigned char  pool_member;   /* AP_YES = Local LU is a member of a pool */ 
	                                /* AP_NO = Local LU is not member of a pool */ 
	  unsigned char reserv3[5];     /* reserved field */ 
	  } GET_LU_STATUS;
	
	Supplied Parameters:
	
	opcode : AP_GET_LU_STATUS
	
	tp_id : Previously returned by RECEIVE_ALLOC_EX or TP_STARTED
	
	plu_alias : Not required local_only is set to AP_YES
	
	local_only : If this field is set to AP_YES then the plu_alias does not need to
	be specified and the verb only returns the local LU information - syncpoint and
	default_pool.
	
	Returned Parameters:
	
	- syncpoint
	- pool_member
	- zero_sess
	- active_sess
	
	Remarks:
	
	To check the configuration of a particular Local LU before issuing a
	RECEIVE_ALLOCATE_EX verb, the following verb sequence should be issued:
	
	- TP_STARTED (specifying the Local LU of interest)
	- GET_LU_STATUS (with local_only set to AP_YES)
	- TP_ENDED (AP_SOFT)
	
	SNA Server Routing of Incoming FMH-5 Attach Requests
	----------------------------------------------------
	
	Support for attach managers modifies the algorithm used by SNA Server to route
	incoming attach requests to either registered Invokable TPs, or to running
	attach manager processes to the following:
	
	- Route to an invokable TP that is already listening on the specific TP name
	  and specific Local LU (first trying operator started TP, and then auto
	  started TP).
	
	- New with Attach Manager support: if none found, route to an attach manager
	  registered to receive attaches for a specific Local LU (where the tp_name is
	  set to all EBCDIC spaces).
	
	- If none found, route to any invokable TP that is listening on a specific TP
	  name, but has not specified a Local LU.
	
	NOTE: SNA Server will not allow an attach manager to register with no Local LU
	alias.
	
	This above algorithm allows an existing COMTI resync TP to receive incoming
	attaches for the resync service X'06F2' for all Local LUs. But, if there is an
	attach manager registered to receive incoming attaches for a specific Local LU
	(even for the resync TP X'06F2'), then it receives the attach instead of the
	COMTI resync TP. If a COMTI resync TP needs to receive such attaches, then its
	UN2 service needs to be configured with a specific LocalLU within the registry
	(as is already supported today). This feature was first included in SNA Server
	version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fea kbFEA kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:4.0SP3
	Issue type        : kbinfo
	
	=============================================================================
	
