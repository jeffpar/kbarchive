---
layout: page
title: "Q184313: Err Msg: Certificate Server Could Not Process Request &#42;"
permalink: /kb/184/Q184313/
---

## Q184313: Err Msg: Certificate Server Could Not Process Request &#42;

	Article: Q184313
	Product(s): Internet Information Server
	Version(s): WINNT:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Certificate Server version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When you try to obtain a certificate from the locally installed Microsoft
	Certificate Server 1.0, an error message may appear and the application event
	log may contain the following error:
	
	  The Certificate Server could not process request * due to an error:
	  0x8007000d. The request was for CN=*, OU=*, O=*, L=*, S=*, C=*. The
	  certificate would contain an encoded length that is potentially
	  incompatible with older enrollment software. Submit a new request using
	  different length input data for the following field: Extensions.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD). To resolve this problem, you must edit the registry and disable the
	127-character-length-checking option. To set this option, you must change the
	value of CertEnrollCompatible from 1 to 0.
	
	The registry path is:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\CertSvc
	  \Configuration\<Your certificate authority's common name>\ 
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	After making the change in the registry, you must stop and restart the
	Certificate Server computer.
	
	Additional query words: IIS 4.0 NTOP
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : WINNT:1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
