---
layout: page
title: "Q131787: SLI_OPEN Hang When Inappropriate LUA_INIT_TYPE is Used"
permalink: kb/131/Q131787/
---

## Q131787: SLI_OPEN Hang When Inappropriate LUA_INIT_TYPE is Used

	Article: Q131787
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An SLI_OPEN call may hang when it is issued on an SNA Server client machine and
	the lua_init_type specified in the SLI_OPEN is not appropriate for the host's
	session startup behavior. For example, if SLI_OPEN is called using an
	lua_init_type of LUA_INIT_TYPE_PRIM, and the host doesn't send an BIND message
	when the session is started, the SLI_OPEN will hang.
	
	MORE INFORMATION
	================
	
	The SLI_OPEN call handles the SNA session startup with the host. Because the
	host may be configured to support different session startup methods, the
	SLI_OPEN call allows the following lua_init_type options to be used to
	accommodate this:
	
	  LUA_INIT_TYPE_SEC_IS: Secondary with INITSELF command.
	  LUA_INIT_TYPE_SEC_LOG: Secondary with an unformatted LOGON message
	  LUA_INIT_TYPE_PRIM: Primary waiting for a BIND command
	  LUA_INIT_TYPE_PRIM_SSCP: Primary with SSCP access
	
	These options are described in the Microsoft SNA Server LUA Programmer's Guide.
	
	If the host sends a message on the SSCP-LU session but does not send a BIND, the
	SLI_OPEN call will hang if the LUA_INIT_TYPE_PRIM is used.
	
	There are several possible solutions to this problem:
	
	- The application could issue the type of SLI_OPEN that gives access to the
	  SSCP-LU session (such as LUA_INIT_TYPE_PRIM_SSCP). Then, the application
	  could write the logon message, and see the host's response. It could then
	  parse the host's response, and act according to what it sees.
	
	  -or-
	
	- The application could be written to use the LUA RUI interface instead of SLI.
	  This would give it access to all the flows to and from the host.
	
	  -or-
	
	- The application could implement a timer and cancel the SLI_OPEN if it does
	  not complete after a certain time. However, this will not tell you why the
	  SLI_OPEN may have hung.
	
	If you believe the application is using the correct lua_init_type, although it is
	continuing to exhibit SLI_OPEN hang problems, the following SNA Server trace
	information should be provided to SNA Server support personnel:
	
	- SNA Application internal, LUA API and 3270 message traces, (enabled where the
	  SLI application is running).
	
	- SNA Server DLC and 3270 message tracing (on the server)
	
	SNA Server DLC and 3270 message tracing can be dynamically enabled and disabled
	using SNATRACE. Trace files are generated in text format in
	<SNAROOT>\TRACES\*.TRC.
	
	If you are using a Win32 application under Windows NT, SNATRACE can also be used
	to capture SNA Application tracing.
	
	If you are using a Win16 application, see Q123256 for instructions on enabling
	SNA Server Win16 client tracing.
	
	Additional query words: prodsna SLI_OPEN
	
	======================================================================
	Keywords          : kbnetwork kbprogramming sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
