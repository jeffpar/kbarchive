---
layout: page
title: "Q307481: Multiple Instances of CPI-C App. Fail on Terminal Services"
permalink: /kb/307/Q307481/
---

## Q307481: Multiple Instances of CPI-C App. Fail on Terminal Services

	Article: Q307481
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000 kbhis2000bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Common Programming Interface for Communications (CPI-C) application may fail
	to allocate an LU 6.2 session when multiple users attempt to run the application
	on a Windows 2000-based server that is running Terminal Services.
	
	This problem only occurs under the following conditions:
	
	- The CPI-C application is installed on the server that is running Terminal
	  Services.
	
	- The Host Integration Server 2000 End User Client is installed on the server
	  that is running Terminal Services.
	
	- Each of the Terminal Services clients connects to the Terminal Services-based
	  server using different domain user credentials.
	
	When the problem occurs, the CPI-C application's Initialize_Conversation (CMINIT)
	call may fail with error 20 (CM_PRODUCT_SPECIFIC_ERROR).
	
	CAUSE
	=====
	
	The CPI-C library (Wcpic32.dll) is incorrectly adding a "Global" prefix to named
	objects (such as mutexes, semaphores, and events) when the library is used with
	the Host Integration Server 2000 End User Client on a Windows 2000 Server.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+------------------------------------+
	| File name   | Date       | Time    | 
	+------------------------------------+
	| Wcpic32.dll | 09/11/2001 | 3:33 PM | 
	+------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	MORE INFORMATION
	================
	
	The CPIC library should only use the "Global" prefix for named objects on a
	Windows 2000 Server running Terminal Services if both of the following are
	true:
	
	- The Host Integration Server 2000 Admin Client is installed on the Windows
	  2000 Terminal Server.
	
	- SnaBase is configured to run as a service in the Host Integration Server 2000
	  Admin Client's configuration.
	
	The following is an excerpt from Microsoft Platform SDK and describes how the
	"Global" prefix is used with Windows 2000:
	
	  Terminal Services: A Terminal Services environment has a global namespace for
	  events, semaphores, mutexes, waitable timers, file-mapping objects, and job
	  objects. In addition, each Terminal Services client session has its own
	  separate namespace for these objects. Terminal Services client processes can
	  use object names with a "Global\" or "Local\" prefix to explicitly create an
	  object in the global or session name space. For more information, see Kernel
	  Object Name Spaces.
	
	  Windows 2000: On Windows 2000 systems without Terminal Services running, the
	  "Global\" and "Local\" prefixes are ignored. The names of events, semaphores,
	  mutexes, waitable timers, file-mapping objects, and job objects share the
	  same namespace.
	
	See the following Microsoft Knowledge Base article for a limitation on running
	invokable APPC or CPI-C TPs (Transaction Programs) on Terminal Server:
	
	  Q265001 PRB: SNA Server Invokable Transaction Programs Are Not Supported on
	  Terminal Server
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
