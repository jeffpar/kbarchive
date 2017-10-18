---
layout: page
title: "Q142702: IIS Err Msg: Authentication Is Required For This Document"
permalink: kb/142/Q142702/
---

## Q142702: IIS Err Msg: Authentication Is Required For This Document

	Article: Q142702
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears on a Microsoft Internet Explorer client:
	
	  Error: Authentication is required for this document. The server did not
	  specify a supported authentication method."
	
	CAUSE
	=====
	
	A potential cause can be that you have set the Password Authentication on the
	Microsoft Internet Information Server to a level that is not supported on your
	Explorer client. The Windows NT Internet Explorer 1.5 Client will only support
	Anonymous and Basic Authentication.
	
	RESOLUTION
	==========
	
	Currently, only Internet Explorer 2.0 for Windows 95 supports Challenge/Response
	Authentication. Run INSTALL.BAT from the Internet Information Server's
	\CLIENTS\WIN95 directory to install Internet Explorer and the authentication
	module.
	
	If Internet Explorer is not installed in the above manner, manually add the
	authentication module by running IENTLM.EXE from the \CLIENTS\WIN95 directory.
	
	Additional query words: prodiis1
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
