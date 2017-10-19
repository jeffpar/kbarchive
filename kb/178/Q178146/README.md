---
layout: page
title: "Q178146: Access Violation After Shutting Down Server Processes"
permalink: /kb/178/Q178146/
---

## Q178146: Access Violation After Shutting Down Server Processes

	Article: Q178146
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error can occur when you shut down the server processes in
	Microsoft Transaction Server (MTS), and then try to use a COM Transaction
	Integrator for CICS and IMS (COMTI) component which was previously installed in
	an MTS package. Note that the error may also cause abnormal termination of all
	applications which are running on the Windows NT computer.
	
	This is an intermittent error. When it occurs, you receive an error message
	similar to the following:
	
	  OLEChannelWnd:mtx.exe-Application Error.
	  The instruction at "0x77e15882" referenced memory at "0x000000b4".
	  The memory could not be read.
	
	CAUSE
	=====
	
	For additional information about the cause of this Windows NT problem, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q147222 Group of Hotfixes for Exchange 5.5 and IIS 4.0
	
	
	WORKAROUND
	==========
	
	Download and install the fix from the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postsp3/roll-up/
	
	NOTE: The above link is one path; it has been wrapped for readability.
	
	In that directory, consult the Q147222.txt file for a description of the cause of
	the problem. You should also review the Readme.txt file for instructions on how
	to install the fix.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100
	Version           : WINDOWS:1.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
